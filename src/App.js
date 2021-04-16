import React from 'react';
import indexRoutes from './routes/index';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Protected from './components/protected';
import Fulllayout from './layouts/fulllayout';
import UserCtx from './components/UserContext';
import { useState } from 'react';
import './assets/scss/style.css';
function App() { //context
  var loginStatus = () => {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      return true;
    } else {
      return false;
    }
  }
  const [isLoggedIn, setIsLoggedIn] = useState(loginStatus());
  return (
    < HashRouter >
      <UserCtx.Provider
        value={{
          isLoggedIn,
          doLogin: (code) => {
            console.log(">",code)
            if (code) {
              setIsLoggedIn(true);
              localStorage.setItem('isLoggedIn', true);
            } else {
              localStorage.removeItem('isLoggedIn');
              setIsLoggedIn(false)
            }
          }
        }}
      >
        <Switch > {
          indexRoutes.map((prop, key) => {
            return <Route path={prop.path}
              key={key}
              component={prop.component}
            />;
          })
        }
          <Protected isLoggedIn={isLoggedIn} path="/">
            <Fulllayout />
          </Protected>
        </Switch>
      </UserCtx.Provider>
    </HashRouter >
  );
}
export default App;