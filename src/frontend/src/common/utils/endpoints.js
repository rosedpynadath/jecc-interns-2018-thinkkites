export const endpoints = {};

/* base url */
endpoints.base = 'http://localhost:8000';

/* endpoints available in the auth module */
endpoints.auth = {};
endpoints.auth.login = endpoints.base.concat('/authentication/login');
endpoints.auth.logout = endpoints.base.concat('/authentication/logout');

/* endpoints available in the users module */
endpoints.users = {};
endpoints.users.list = endpoints.base.concat('/users/');
