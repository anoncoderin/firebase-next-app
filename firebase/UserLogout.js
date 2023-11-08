import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";

export default function UserLogout() {
  const logoutUser = async () => {
    await signOut(auth);
    console.log("user logged out");
  };

  return (
    <>
      <div>
        <h2>Signing user out</h2>
      </div>
      <button onClick={() => logoutUser()}>Logout</button>
    </>
  );
}
