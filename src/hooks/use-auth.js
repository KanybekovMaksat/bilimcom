import { useSelector } from 'react-redux';

export function useAuth() {
    const userFromStore = useSelector(state => state.user);
    const userFromStorage = (() => {
        try {
            return JSON.parse(localStorage.getItem('user'));
        } catch (error) {
            console.error('Error parsing user from localStorage:', error);
            return null;
        }
    })();

    const email = userFromStore.email || (userFromStorage && userFromStorage.email);
    const token = userFromStore.token || (userFromStorage && userFromStorage.token);
    const id = userFromStore.id || (userFromStorage && userFromStorage.id);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}
