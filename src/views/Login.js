import React from "react";
import { Button } from "@material-ui/core";

import firebaseApp from "../firebase/credenciales";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const auth = getAuth(firebaseApp);
const gProvider = new GoogleAuthProvider();

function Login() {
  function logInConGoogle() {
    signInWithRedirect(auth, gProvider);
  }

  return (
    <div className="login">
      <div className="logoLogin">
        <img
          src="https://cdn.discordapp.com/attachments/993445344358699118/1020231878638305310/Akira-PNGshadow.png"
          alt="logo"
        />
      </div>
      <div className="titleLogin">
        <h1>Login to chat with the community</h1>
      </div>
      <Button onClick={logInConGoogle}>Acceder con Google</Button>
    </div>
  );
}

export default Login;
