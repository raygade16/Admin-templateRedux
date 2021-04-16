import { apiSessions,apiSessionData, tokenHeader, getUserToken, getUserName } from '../service/Consts'
var sessionDataIds = [];
export var getDataIds = () => (sessionDataIds);
export var resetDataIds = () => { sessionDataIds = [] };

const customer = [{"id":"bd7acbea-c1b1-46c2-aed5-3ad53abb28ba","name":"Vivek Singhwal","email":"vivek@pyther.com","address":"India","phone":"9724232340"},{"id":"3ac68afc-c605-48d3-a4f8-fbd91aa97f63","name":"Vivek","email":"vivek@pyther.com","address":"India","phone":"9724232340"},{"id":"1615871962155r","name":"Mahendrarr","email":"mah@gmail.com","phone":"8998899888","address":"aba"},{"id":"1615873789258r","name":"Vivek","email":"","phone":"","address":""},{"id":"1615873893188r","name":"aaaa","email":"asd123","phone":"9879999999999","address":"kuy"},{"id":"1615874589682r","name":"sss","email":"sss","phone":"sss","address":"sss"},{"id":"1615875511776r","name":"kuy","email":"kuy@kj.com","phone":"9878878898","address":"kuy"},{"id":"1615912561410r","name":"ABHILASH KUMAR","email":"asd@asd.asd","phone":"9877899871","address":"bangalore"},{"id":"1615912597088r","name":"asd","email":"aaa@asd","phone":"9999999999","address":"krp"},{"id":"1615913506544r","name":"manav","email":"mk@123.com","phone":"987777777","address":"hal"}];

export var getSortSessions = () => {
    
   return new Promise(function(myResolve, myReject) {
        myResolve({ result: customer }); // when successful
    });
}


export var getSessionById = (sessionId) => {
    return fetch(apiSessionData + '/sessionid/' + sessionId, {
            headers: {
                [tokenHeader]: getUserToken()
            }
        }).then(res => res.json())
        .then(
            (result) => {
                // console.log("result", JSON.stringify(result.result));
                return result;
            },
            (error) => {
                return error;
            }
        )
}

export var getSessionsByOperator = (operatorId) => {
    return fetch(apiSessions + '/operator-session/' + operatorId, {
            headers: {
                [tokenHeader]: getUserToken()
            }
        }).then(res => res.json())
        .then(
            (result) => {
                // result.result = result.result.sort((a, b) => {
                //     if (a.createdAt > b.createdAt) {
                //         return -1;
                //     } else {
                //         return 1;
                //     }
                // });
                return result;
            },
            (error) => {
                return error;
            }
        )
}

export var getSessionsBySprayer = (sprayerId) => {
    return fetch(apiSessions + '/sprayer-session/' + sprayerId, {
            headers: {
                [tokenHeader]: getUserToken()
            }
        }).then(res => res.json())
        .then(
            (result) => {
                // result.result = result.result.sort((a, b) => {
                //     if (a.createdAt > b.createdAt) {
                //         return -1;
                //     } else {
                //         return 1;
                //     }
                // });
                return result;
            },
            (error) => {
                return error;
            }
        )
}

export var getSessionDataBySession = (sessionId) => {
    return fetch(apiSessionData + '/sessionid/' + sessionId, {
            headers: {
                [tokenHeader]: getUserToken()
            }
        }).then(res => res.json())
        .then(
            (result) => {
                // result.result = result.result.sort((a,b)=>{
                //     if(a.createdAt > b.createdAt){
                //         return -1;
                //     }else{
                //         return 1;
                //     }
                //  });
                return result;
            },
            (error) => {
                return error;
            }
        )
}

export var deleteSessionData = (id,createdAt) => {
    // console.log("token>> "+getUserToken())
    return fetch(apiSessionData + '/' + id + '/' + createdAt, {
            method: 'DELETE' ,
            headers: {
                [tokenHeader]: getUserToken()
            }
        }).then(res => res.json())
        .then(
            (result) => {
               
                return result;
            },
            (error) => {
                return error;
            }
        )
}

export var deleteSession = (id,createdAt) => {

    // console.log("token>> "+getUserToken())
    
    
    return fetch(apiSessions + '/' + id+ '/' +createdAt, {
            method: 'DELETE' ,
            headers: {
                [tokenHeader]: getUserToken()
            }
        }).then(res => res.json())
        .then(
            (result) => {
               
                return result;
            },
            (error) => {
                return error;
            }
        )
}


//is developer login
export var isDevLogin = () => {
    if(getUserName()=="developer"){
        // console.log(getUserName())
        return 1;
    }
    else{
        return 0;
    }
}