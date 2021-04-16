import React, {useState} from 'react';

function Login(props) {
      var usernameInput = React.createRef();
      var passwordInput = React.createRef();
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      var doLogin = () =>{
         // Uncontrolled
         console.log("usernameInput:"+usernameInput.current.value);
         console.log("passwordInput:"+passwordInput.current.value);

         if(usernameInput.current.value == passwordInput.current.value 
               && usernameInput.current.value!= ""){
            props.history.push("/home");
         }else{
            alert("Incorrect username or password.")
         }
      }
      return (
         <div>
            <h2>Login</h2>
            <input ref={usernameInput}  type="text" placeholder="Username" /> <br/><br/>
            <input ref={passwordInput} type="password" placeholder="Password" /> <br/><br/>
            <button onClick={doLogin}>Login</button>
         </div>
      );
}
export default Login;