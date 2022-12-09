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
    console.log(getAuth().currentUser?.uid);
    
  };
}

export default AuthService;
