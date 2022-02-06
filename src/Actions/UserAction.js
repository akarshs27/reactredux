export const fetchUserRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: 'FETCH_USER_FAILURE',
        payload: error
    }
}

export const fetchUsers = () => {
    return async(dispatch) => {
        try {
            dispatch(fetchUserRequest());
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            dispatch(fetchUserSuccess(data));
        } catch(err)  {
            dispatch(fetchUserFailure(err));
        }
    }
}