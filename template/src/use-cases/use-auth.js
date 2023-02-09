/*
 * NOTE:
 * Only an example. make the authentication stronger by using your own authentication.
 * */

export function useAuth(props) {
    const user = JSON.parse(
        localStorage.getItem('orange_user') !== 'undefined'
            ? localStorage.getItem('orange_user')
            : '{}',
    );
    if (user) {
        return props.roles.includes(user.role) || props.minlevel <= user.level;
    } else {
        return false;
    }
}