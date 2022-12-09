import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

class AuthService {
  getUserAuth = () => {
    return getAuth();
  };

  signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.getUserAuth(), provider);
  };

  signOut = async () => {
    getAuth().signOut();
  };
}

export default AuthService;
