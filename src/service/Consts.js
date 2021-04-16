export var apiEndPoint = 'http://localhost:8000/';
// if (window.location.hostname != 'localhost') {
    apiEndPoint = "https://hero-api.kesemsolutions.com/";
// } else {
    // apiEndPoint = "https://hero-api.kesemsolutions.com/";
// }

export var tokenHeader = 'x-access-token';
export var getUserToken = () => {
    return localStorage.getItem('userToken');
}

export var getUserName = () => {
    return localStorage.getItem('userName');
}

export var apiLoginUser = apiEndPoint + 'users/authenticate';
export var apiOperators = apiEndPoint + 'api/operators';
export var apiSprayDevice = apiEndPoint + 'api/sprays';
export var apiSessions = apiEndPoint + 'api/sessions';
export var apiSessionData = apiEndPoint + 'api/session/data';
// export var apiRinse = apiEndPoint + 'api/rinse';



var makeTwoDigit = (number) => {
    let val = number + '';
    if (val.length == 1) {
        return '0' + val;
    } else {
        return val;
    }
}
export var dateFormat = (dateStr) => {
    if (typeof(dateStr) == 'undefined' || dateStr == undefined || dateStr == 'undefined' || dateStr < 1520160669214) {
        return "";
    }
    let date = new Date(parseInt(dateStr));
    // let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return date.toLocaleDateString('em-GB', { day: 'numeric', month: 'short', year: '2-digit' }) + '  ' + makeTwoDigit(date.getHours()) + ':' + makeTwoDigit(date.getMinutes()) + ':' + makeTwoDigit(date.getSeconds()) + ' ';
}

export var toNumber = (value) => {
    if (value == 0 || value == "") {
        return 0;
    }
    let val = parseInt(value);
    if (isNaN(val)) {
        return "";
    }
    return val;
}

export var toFloat = (value) => {
    if (value == 0 || value == "") {
        return 0;
    }
    let val = parseFloat(value);
    if (isNaN(val)) {
        return "";
    }
    return val;
}

export var timeFormat = (dateStr) => {
    if (typeof(dateStr) == 'undefined' || dateStr == undefined || dateStr == 'undefined' || dateStr < 1520160669214) {
        return "";
    }
    let date = new Date(parseInt(dateStr));
    return date.toLocaleTimeString();
}