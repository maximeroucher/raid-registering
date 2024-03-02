"use client";

import { useState } from "react";
import axios from "axios";
import { stringify } from "qs";
import {
  BodyTokenAuthTokenPost,
  TokenResponse,
} from "@/src/api/hyperionSchemas";
import { get } from "http";
import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { useTokenAuthTokenPost } from "@/src/api/hyperionComponents";

const tokenName: string = "my_ecl_auth_token";
const clientId: string = "Titan";
const tokenKey: string = "token";
const refreshTokenKey: string = "refresh_token";
const redirectUrl: string = "fr.myecl.titan://authorized";
const redirectUrlHost: string = "myecl.fr";
const backUrl: string = "hyperion.myecl.fr";
const scopes: string[] = ["API"];
const scheme = "https";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  //   const { mutate: tokenAuthTokenPost } = useTokenAuthTokenPost();

  function generateRandomString(length: number): string {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    var values = crypto.getRandomValues(new Uint8Array(length));
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor((values[i] / length) * charactersLength)
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
    const result = await axios.post(`${scheme}://${backUrl}/auth/token`, body, {
      headers: headers,
    });
    if (result.status != 200) {
      setIsLoading(false);
      return;
    }
    const tokenResponse: TokenResponse = result.data;
    localStorage.setItem(tokenKey, tokenResponse.access_token);
    localStorage.setItem(refreshTokenKey, tokenResponse.refresh_token);
    setIsLoading(false);
    setToken(tokenResponse.access_token);
  }

  async function getTokenFromRequest(popupWindow: Window | null) {
    const host = redirectUrlHost;
    const path = "/static.html";
    const redirectUri = `${scheme}://${host}${path}`;

    const codeVerifier = generateRandomString(128);

    const authUrl = `${scheme}://${backUrl}/auth/authorize?client_id=${clientId}&response_type=code&scope=${scopes.join(
      " "
    )}&redirect_uri=${redirectUri}&code_challenge=${await hash(
      codeVerifier
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
      `height=${POPUP_HEIGHT},width=${POPUP_WIDTH},top=${top},left=${left},scrollbars=yes`
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
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      };
      getToken(params);
    }

    window.addEventListener("message", (event) => {
      const data = event.data;
      if (data && data != undefined && data.includes("code=")) {
        login(data);
      }
    });
  }

  async function getTokenFromStorage(): Promise<string | null> {
    setIsLoading(true);
    if (typeof window === "undefined") return null;
    const access_token = localStorage.getItem(tokenKey);
    if (access_token) {
      const access_token_expires = access_token
        ? JSON.parse(atob(access_token.split(".")[1])).exp
        : 0;
      const now = Math.floor(Date.now() / 1000);
      if (access_token_expires < now) {
        const refresh_token = localStorage.getItem(refreshTokenKey);
        if (refresh_token) {
          const params: BodyTokenAuthTokenPost = {
            grant_type: "refresh_token",
            client_id: clientId,
            refresh_token: refresh_token,
          };
          await getToken(params);
          console.log("refreshing token");
        }
      } else {
        setToken(access_token);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
    return access_token;
  }

  useQuery({
    queryKey: ["getTokenFromStorage"],
    queryFn: () => getTokenFromStorage(),
    retry: 0,
  });

  return { getTokenFromRequest, isLoading, token };
};
