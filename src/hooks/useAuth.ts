"use client";

import { useState } from "react";
import axios from "axios";
import { stringify } from "qs";
import {
  BodyTokenAuthTokenPost,
  TokenResponse,
} from "@/src/api/hyperionSchemas";
import { useQuery } from "@tanstack/react-query";
import { useTokenStore } from "@/src/stores/token";
import { useRouter } from "next/navigation";
import { useUserStore } from "../stores/user";
import { useParticipantStore } from "../stores/particpant";

const clientId: string = "Titan";
const redirectUrlHost: string =
  process.env.NEXT_PUBLIC_REDIRECT_URL || "https://myecl.fr/static.html";
const backUrl: string =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://hyperion.myecl.fr";
const scopes: string[] = ["API"];

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { token, setToken, refreshToken, setRefreshToken } = useTokenStore();
  const { resetUser } = useUserStore();
  const { resetParticipant } = useParticipantStore();
  const [isTokenQueried, setIsTokenQueried] = useState(false);
  const router = useRouter();

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
    const body = stringify(params);
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    };
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
  }

  async function refreshTokens(): Promise<string | null> {
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
    return access_token_expires < now;
  }

  async function getTokenFromRequest(popupWindow: Window | null) {
    const codeVerifier = generateRandomString(128);

    const authUrl = `${backUrl}/auth/authorize?client_id=${clientId}&response_type=code&scope=${scopes.join(
      " ",
    )}&redirect_uri=${redirectUrlHost}&code_challenge=${await hash(
      codeVerifier,
    )}&code_challenge_method=S256`;

    setIsLoading(true);
    const POPUP_HEIGHT = 900;
    const POPUP_WIDTH = 800;
    // To fix issues with window.screen in multi-monitor setups, the easier option is to
    // center the pop-up over the parent window.
    const top = window.outerHeight / 2 + window.screenY - POPUP_HEIGHT / 2;
    const left = window.outerWidth / 2 + window.screenX - POPUP_WIDTH / 2;
    popupWindow = window.open(
      authUrl,
      "Hyperion",
      `height=${POPUP_HEIGHT},width=${POPUP_WIDTH},top=${top},left=${left},scrollbars=yes`,
    );

    const interval = setInterval(() => {
      try {
        if (popupWindow && popupWindow.closed) {
          clearInterval(interval);
          setIsLoading(false);
        }
      } catch (e) {
        console.error(e);
      }
    }, 1000);

    function login(data: string) {
      const receivedUri = new URL(data);
      const code = receivedUri.searchParams.get("code");
      if (popupWindow) {
        popupWindow.close();
        popupWindow = null;
      }

      const params: BodyTokenAuthTokenPost = {
        grant_type: "authorization_code",
        client_id: clientId,
        code: code,
        redirect_uri: redirectUrlHost,
        code_verifier: codeVerifier,
      };
      getToken(params);
    }

    window.addEventListener("message", (event) => {
      const data = event.data;
      if (
        data !== null &&
        data !== undefined &&
        new URL(data).searchParams.get("code") !== null
      ) {
        login(data);
      }
    });
  }

  function logout() {
    setToken(null);
    setRefreshToken(null);
    setIsTokenQueried(true);
    router.replace("/login");
    resetUser();
    resetParticipant();
  }

  async function getTokenFromStorage(): Promise<string | null> {
    setIsLoading(true);
    if (typeof window === "undefined") return null;
    if (token !== null) {
      if (isTokenExpired()) {
        refreshTokens();
      } else {
        setToken(token);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      router.replace("/login");
    }
    setIsTokenQueried(true);
    return token;
  }

  useQuery({
    queryKey: ["getTokenFromStorage"],
    queryFn: getTokenFromStorage,
    retry: 0,
  });

  useQuery({
    queryKey: ["refreshToken"],
    queryFn: refreshTokens,
    retry: 0,
    enabled: isTokenExpired(),
  });

  return { getTokenFromRequest, isLoading, token, isTokenQueried, logout };
};
