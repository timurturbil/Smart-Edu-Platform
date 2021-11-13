
export default async function logoutUser() {
    localStorage.setItem("user", JSON.stringify(null));
};