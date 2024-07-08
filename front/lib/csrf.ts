export const getCsrfToken = async () => {
    const response = await fetch("http://192.168.88.119:8000/api/get-csrf-token/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        const data = await response.json();
        console.log("CSRF token set:", data);
    } else {
        console.error("Failed to get CSRF token");
    }
};
