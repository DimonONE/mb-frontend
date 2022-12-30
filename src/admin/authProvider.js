export default {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    const response = await fetch(
      '/admin/api/token',
      {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      }
    );

    if (response.status < 200 || response.status >= 400) {
      throw new Error(response.statusText)
    }

    localStorage.setItem('authenticated', 'true');
    // localStorage.setItem('username', username);
    // accept all username/password combinations
    // return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: async () => {
    await fetch(
      '/admin/api/logout',
      {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          // Hack for api
          Authorization: '-'
        }
      }
    );
    localStorage.removeItem('authenticated');
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('authenticated')
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};