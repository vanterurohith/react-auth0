import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import VerifierChallenger from "../VerifierChallenger";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
  !isAuthenticated && (<button onClick={() => loginWithRedirect()}><VerifierChallenger></VerifierChallenger></button>
  )
 );
};

export default LoginButton;