"use client";

import { useState } from "react";
import axios from "axios";
import { stringify } from "qs";
import {
  BodyTokenAuthTokenPost,
  TokenResponse,
} from "@/src/api/hyperionSchemas";
// import { useTokenAuthTokenPost } from "@/src/api/hyperionComponents";

const tokenName: string = "my_ecl_auth_token";
const clientId: string = "Titan";
const tokenKey: string = "token";
const refreshTokenKey: string = "refresh_token";
const redirectUrl: string = "fr.myecl.titan://authorized";
const redirectUrlHost: string = "myecl.fr";
const backUrl: string = "hyperion.myecl.fr";
const scopes: string[] = ["API"];

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
      result += characters.charAt(Math.floor(values[i] / length * charactersLength));
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

  async function getTokenFromRequest(popupWindow: Window | null) {
    const scheme = "https";
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
      const body = stringify(params);
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      };
      axios
        .post(`${scheme}://${backUrl}/auth/token`, body, {
          headers: headers,
        })
        .then((result) => {
          const tokenResponse: TokenResponse = result.data;
          localStorage.setItem(tokenKey, tokenResponse.access_token);
          localStorage.setItem(refreshTokenKey, tokenResponse.refresh_token);
          setIsLoading(false);
          setToken(tokenResponse.access_token);
        });
    }

    window.addEventListener("message", (event) => {
      const data = event.data;
      if (data && data != undefined && data.includes("code=")) {
        login(data);
      }
    });
  }

  return { getTokenFromRequest, isLoading, token };
};
