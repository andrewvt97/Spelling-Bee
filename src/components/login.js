import React, {useState} from 'react';
import {Form,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

function Login() {
    // const [username,setUsername] = useState("");
    // const [password,setPassword] = useState("");
    // const login = () =>   {};
  return (
    <div className = "login">
    <Form class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> 
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/> 
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <Button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</Button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </Form>
    </div>
  );
}

export default Login;