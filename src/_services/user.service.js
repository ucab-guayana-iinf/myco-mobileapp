import { authHeader } from '../_helpers';
import { AsyncStorage } from 'react-native';

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch("https://myco-backend.herokuapp.com/login", requestOptions)
      .then((user) => {
          AsyncStorage.setItem('user', JSON.stringify(user));
          return user;
        });

}

function logout() {
    // remove user from local storage to log user out
    AsyncStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch("https://myco-backend.herokuapp.com/login", requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
