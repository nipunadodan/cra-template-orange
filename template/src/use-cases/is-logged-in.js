export function isLoggedIn() {
    const login = localStorage.getItem('wallet_login');
    return !!login;
}