import { createInWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth } from "./firebase.config"
import {useState} from"react"

export default function UserEmailSignIn(){
    const [loginEmail, setLoginEmail]= useState("")
    const [loginPassword, setLoginPassword]= useState("");

    const login = async ()=> {
      try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
      }catch(error){
        console.log(error.message);
      }
    }

    return(
        <>
        <h2>Welcome </h2>
        <div>
        <h2>SignIn</h2>
      </div>
      <div>Email</div>
      <input
        placeholder="email.."
        value={loginEmail}
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />

      <div></div>
      <div>password</div>
      <input
        placeholder="Password.."
        value={loginPassword}
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
      <div>
        <button
          onClick={() => {
            login();
            setLoginEmail("");
            setLoginPassword("");
          }}
        >
          Login User
        </button>
      </div>
        </>
    )
}