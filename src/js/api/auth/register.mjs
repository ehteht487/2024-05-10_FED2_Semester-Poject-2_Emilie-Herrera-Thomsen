import { API_HOST_URL } from "../constants.mjs";

const action = "auth/register";
const method = "post";

export async function register(profile) {
    const registerUrl = API_HOST_URL + action;
    const body = JSON.stringify(profile);
    
    const response = await fetch(registerUrl, {
        headers: {
            "Content-Type":"application/json"
        },
        method,
        body
    })

    const result = await response.json()
    alert("You have successfully registered a profile")
    return result

    

};

