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
export const custom_login = async (username: any, password: any) => {
    const url = `${config.apiBaseUrl}/api/token/`;
    const csrfToken = await getCsrfTokenDirect();
    const data = {
        username: username,
        password: password
    };


    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);

        if (responseData.access) {
            Cookies.set('access_token', responseData.access, { expires: 7, secure: true, sameSite: 'strict' });
        }
        if (responseData.refresh) {
            Cookies.set('refresh_token', responseData.refresh, { expires: 30, secure: true, sameSite: 'strict' });
        }

        return responseData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

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


export const getCsrfTokenDirect = async () => {
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
