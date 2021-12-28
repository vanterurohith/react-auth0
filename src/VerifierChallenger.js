
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import CryptoJS from "crypto-js";

const VerifierChallenger = () => {
    function base64URLEncode(str) {
      return str
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    }
    // var code_verifier = base64URLEncode(crypto.randomBytes(32));
  var wordArray = CryptoJS.lib.WordArray.random(32); // represent an array of 32-bit words
  var code_verifier = base64URLEncode(Base64.stringify(wordArray));

  var code_challenger = base64URLEncode(Base64.stringify(sha256(code_verifier)));
  console.log("code_verifier");
  console.log(code_verifier);
  console.log("code_challenger");
  console.log(code_challenger);
  
  return (
    //   <a href={`https://dev-12u2388w.us.auth0.com/authorize?
    //   response_type=code&
    //   code_challenge=${code_challenger}&
    //   code_challenge_method=S256&
    //   client_id=UeOlj5xtXsESZ2PGctxyOPoz22ybghi3&
    //   redirect_uri=http://localhost:3000/&
    //   scope=openid%20profile&
    //   state=xyzABC123`}>
    //   Sign In
    // </a>)
     console.log("before click sign in"),
    <a href={`https://dev-ylfot-1k.us.auth0.com/authorize?
      response_type=code&
      code_challenge=${code_challenger}&
      code_challenge_method=S256&
      client_id=DiCkAEOvBCPaaGgQTj06PLgALcSfQPTY&
      redirect_uri=http://localhost:3000/&
      scope=openid%20profile%20offline_access&
      state=xyzABC123`}>
        Sign In
      </a>
  );
};
export default VerifierChallenger;