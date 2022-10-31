
var AUTH_NAME = 'authenticated';
var USERNAME = 'admin';
var PASSWORD = 'admin';

if (!isAuthenticated() && document.location.pathname !== '/login.html') {
    document.location.href = '/login.html';
}

function isAuthenticated() {
    return sessionStorage[AUTH_NAME];
}

function authenticate(username, password) {
    if (username === USERNAME && password === PASSWORD) {
        sessionStorage[AUTH_NAME] = true;
        document.location.href = '/';
        return true;
    } 
    return false;
}