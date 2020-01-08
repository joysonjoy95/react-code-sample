const userLogin = (data) => ({ type: 'USER_LOGIN', payload: data });
const userLogout = () => ({ type: 'USER_LOGOUT' });

export { userLogin, userLogout };
