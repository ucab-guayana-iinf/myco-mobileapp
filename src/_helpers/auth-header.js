import { AsyncStorage } from 'react-native';
export function authHeader() {
    // return authorization header with jwt token
    const user = AsyncStorage.getItem('user');

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
