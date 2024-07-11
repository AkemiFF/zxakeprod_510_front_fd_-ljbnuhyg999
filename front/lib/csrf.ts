import config from "./config";
import Cookies from "js-cookie";

export const getCsrfToken = async () => {

    const response = await fetch(`${config.apiBaseUrl}/api/get-csrf-token/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        const data = await response.json();
        // console.log("CSRF token set:", data);
    } else {
        console.error("Failed to get CSRF token");
    }
};

export const fetch_new_access = async () => {
    try {
        const refresh = Cookies.get('refresh_token');
        const response = await fetch(`${config.apiBaseUrl}/api/token/refresh/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh: refresh }),
        });


        const data = await response.json();
        // console.log("CSRF token set:", data);
        return data.access;
    } catch (error) {
        // console.error("Error fetching CSRF token:", error.message);
        throw error;
    }
};


export const getCsrfFromToken = async () => {
    try {
        const response = await fetch(`${config.apiBaseUrl}/api/get-csrf-token-direct/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error('Failed to get CSRF token');
        }

        const data = await response.json();
        // console.log("CSRF token set:", data);
        return data.csrfToken;
    } catch (error) {
        // console.error("Error fetching CSRF token:", error.message);
        throw error;
    }
};
