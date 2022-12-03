import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

class AuthService {
  getUserAuth = () => {
    return getAuth();
  };

  signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.getUserAuth(), provider);
  };

  signOut = () => {
    getAuth().signOut();
  };
}

export default AuthService;
