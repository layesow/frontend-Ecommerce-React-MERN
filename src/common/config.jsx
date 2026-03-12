export const adminToken = () => {
    return localStorage.getItem("adminInfo")
        ? JSON.parse(localStorage.getItem("adminInfo")).token
        : null
}