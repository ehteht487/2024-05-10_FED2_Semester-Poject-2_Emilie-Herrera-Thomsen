import { key } from "./login.mjs";
import { API_HOST_URL } from "../constants.mjs";

const action = "auth/create-api-key";
const method = "post";

export async function createAPIKey() {
    const api = API_HOST_URL + action;

    const response = await fetch(api, {
            method,
            headers: {
                'Authorization': `Bearer ${key}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'My API Key name' })
        });

        const responseData = await response.json();
        return responseData.data.key;     
}




