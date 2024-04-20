"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { stringify } from "qs";
import {
  BodyTokenAuthTokenPost,
  TokenResponse,
} from "@/src/api/hyperionSchemas";
import { useTokenStore } from "@/src/stores/token";
import { useRouter } from "next/navigation";
import { useUserStore } from "../stores/user";
import { useParticipantStore } from "../stores/particpant";
import { useInviteTokenStore } from "../stores/inviteTokenStore";
import { useQuery } from "@tanstack/react-query";
import { useCodeVerifierStore } from "../stores/codeVerifier";

const clientId: string = "RaidRegistering";
const redirectUrlHost: string =
  process.env.NEXT_PUBLIC_REDIRECT_URL || "https://myecl.fr/static.html";
const backUrl: string =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://hyperion.myecl.fr";
const scopes: string[] = ["API"];

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { token, setToken, refreshToken, setRefreshToken, userId } =
    useTokenStore();
  const { resetUser } = useUserStore();
  const { resetParticipant } = useParticipantStore();
  const { resetInviteToken } = useInviteTokenStore();
  const [isTokenQueried, setIsTokenQueried] = useState(false);
  const router = useRouter();
  const { codeVerifier, setCodeVerifier, resetCodeVerifier } =
    useCodeVerifierStore();
  const timer = useRef<NodeJS.Timeout | null>(null);
  const REFRESH_TOKEN_BUFFER = 60;

  function generateRandomString(length: number): string {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    var values = crypto.getRandomValues(new Uint8Array(length));
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor((values[i] / length) * charactersLength),
      );
    }
    return result;
  }

  async function hash(code: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(code);

    return await crypto.subtle.digest("SHA-256", data).then((buffer) => {
      const hashedCode = Array.from(new Uint8Array(buffer))
        .map((byte) => String.fromCharCode(byte))
        .join("");
      return btoa(hashedCode).replace(/\+/g, "-").replace(/\//g, "_");
    });
  }

  async function getToken(params: BodyTokenAuthTokenPost) {
    setIsLoading(true);
    const body = stringify(params);
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    };
    try {
      const result = await axios.post(`${backUrl}/auth/token`, body, {
        headers: headers,
      });
      if (result.status != 200) {
        setIsLoading(false);
        return;
      }
      const tokenResponse: TokenResponse = result.data;
      setIsLoading(false);
      setToken(tokenResponse.access_token);
      setRefreshToken(tokenResponse.refresh_token);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      logout();
    }
  }

  async function refreshTokens(): Promise<string | null> {
    setIsLoading(true);
    console.log("refreshing tokens");
    if (refreshToken) {
      const params: BodyTokenAuthTokenPost = {
        grant_type: "refresh_token",
        client_id: clientId,
        refresh_token: refreshToken,
      };
      await getToken(params);
      return refreshToken;
    }
    return null;
  }

  function isTokenExpired() {
    if (!token) return false;
    const access_token_expires = token
      ? JSON.parse(atob(token.split(".")[1])).exp
      : 0;
    const now = Math.floor(Date.now() / 1000);
    return access_token_expires < now - 60;
  }

  async function login(code: string, callback?: () => void) {
    console.log("logging in", isLoading);
    if (!codeVerifier || isLoading) {
      console.error("Code verifier not set");
      return;
    }
    const params: BodyTokenAuthTokenPost = {
      grant_type: "authorization_code",
      client_id: clientId,
      code: code,
      redirect_uri: redirectUrlHost,
      code_verifier: codeVerifier,
    };
    await getToken(params);
    setIsTokenQueried(true);
    if (callback) callback();
    resetCodeVerifier();
  }

  async function getTokenFromRequest() {
    setIsLoading(true);
    const code = generateRandomString(128);
    setCodeVerifier(code);
    const authUrl = `${backUrl}/auth/authorize?client_id=${clientId}&response_type=code&scope=${scopes.join(
      " ",
    )}&redirect_uri=${redirectUrlHost}&code_challenge=${await hash(
      code,
    )}&code_challenge_method=S256`;

    window.location.href = authUrl;
  }

  function logout() {
    setToken(null);
    setRefreshToken(null);
    setIsTokenQueried(false);
    router.replace("/login");
    resetUser();
    resetParticipant();
    resetInviteToken();
  }

  async function getTokenFromStorage(): Promise<string | null> {
    console.log("getting token from storage");
    if (isLoading) return null;
    setIsLoading(true);
    if (typeof window === "undefined") return null;
    if (token !== null) {
      if (isTokenExpired()) {
        refreshTokens();
      } else {
        setToken(token);
        setIsLoading(false);
        setIsTokenQueried(true);
        console.log("is token queried", isTokenQueried);
      }
    } else {
      setIsLoading(false);
      router.replace("/login");
    }
    lookToRefreshToken();
    return token;
  }

  function lookToRefreshToken() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const timeToRefreshToken =
      (token ? JSON.parse(atob(token.split(".")[1])).exp : 0) -
      Date.now() / 1000 -
      REFRESH_TOKEN_BUFFER;

    if (timeToRefreshToken <= 0) {
      // server call to update app state with new token and new expirationDate
      refreshTokens();
    } else {
      timer.current = setTimeout(() => {
        refreshTokens();
        timer.current = null;
      }, timeToRefreshToken);
    }
  }

  useQuery({
    queryKey: ["getTokenFromStorage"],
    queryFn: () => getTokenFromStorage(),
    retry: 0,
    enabled: !isTokenQueried,
  });

  useQuery({
    queryKey: ["refreshTokens"],
    queryFn: () => refreshTokens(),
    retry: 0,
    enabled: isTokenQueried && isTokenExpired(),
  });

  return {
    getTokenFromRequest,
    isLoading,
    token,
    isTokenQueried,
    logout,
    userId,
    isTokenExpired,
    login,
  };
};
