export function useAuth(props) {
    const user = JSON.parse(
        localStorage.getItem('wallet_user') !== 'undefined'
            ? localStorage.getItem('wallet_user')
            : '{}',
    );
    if (user) return props.roles.includes(user.role) || props.minlevel <= user.level;
    else return false;
}