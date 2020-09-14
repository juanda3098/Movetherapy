export const login = (payload) => {
    return {
        type: 'LOGIN',
        payload
    }
};
export const logout = () => {
    return {
        type: 'LOGOUT',
    }
};
// export const changeUser = (payload) => {
//     return {
//         type: 'CHANGEUSER',
//         payload
//     }
// };