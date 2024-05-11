import { API_HOST_URL } from "../constants.mjs";
import { createAPIKey } from "./apiKey.mjs";
import * as storage from "../../storage/index.mjs";

const action = "auth/login";
const method = "post";

export async function login(profile) {
  const loginUrl = API_HOST_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  

  storage.save("token", result.data.accessToken);
  storage.save("profile", result);
  alert("You have successfully logged in");
}

export const key = storage.load("token")

createAPIKey()


