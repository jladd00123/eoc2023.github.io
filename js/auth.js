
var AUTH_NAME = 'authenticated';
var CONTEXT_PATH = '/eoc2023.github.io';
var USERNAME = 'admin';
var PASSWORD = 'admin';

if (!isAuthenticated() && document.location.pathname !== (CONTEXT_PATH + '/login.html')) {
    document.location.href = (CONTEXT_PATH + '/login.html');
}

function isAuthenticated() {
    //return true;
    return sessionStorage[AUTH_NAME];
}

function authenticate(username, password) {
    if (username === USERNAME && password === PASSWORD) {
        sessionStorage[AUTH_NAME] = true;
        document.location.href = CONTEXT_PATH;
        return true;
    } 
    return false;
}