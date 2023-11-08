import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase.config";

export default function GoogleLogin() {
    const GoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
    
        const authorization = auth;
        const result = await signInWithPopup(authorization, provider);
    
        console.log(result);
      }
      return (
        <>
          <button onClick={() => GoogleLogin()}>Log In With Google</button>
    
     
        </>
      ) 
}