import { createContext, useReducer } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { authFirebase, db } from "../../firebase/firebase";
import authReducer from "../reducer/AuthReducer";
import { API_URL, LOAD_USER, LOCAL_STORAGE_TOKEN_NAME } from "./constants";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let [authState, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    loading: true,
  });

  const reload = (time) => {
    setTimeout(() => window.location.reload(), time ? time : 1000);
  };
  const loadUser = async () => {
    if (authFirebase) {
      const token = {
        accessToken: authFirebase.currentUser.accessToken,
        displayName: authFirebase.currentUser.displayName,
        email: authFirebase.currentUser.email,
      };
      localStorage.setItem("token", JSON.stringify(token));
    }
    try {
      const response = authFirebase.currentUser;
      dispatch({
        type: LOAD_USER,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: LOAD_USER,
        payload: null,
      });
    }
    setTimeout(() => window.location.reload(), 1000);
  };
  // register
  const register = async (displayName, email, password) => {
    return await createUserWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayName,
          email: email,
          password: password,
        })
          .then(() => {
            console.log(authFirebase);
            toast.success("Register success!");
            loadUser();
          })
          .catch((error) => {
            toast.warning(error.message);
          });
      })
      .catch((error) => {
        toast.warning(error.message);
      });
  };
  // login
  const login = async (email, password) => {
    await signInWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        toast.success("Loggin success!");
        loadUser();
      })
      .catch((error) => {
        toast.warning(error.message);
      });
  };
  // login auth02
  const loginAuth02 = async (type) => {
    switch (type) {
      case "GOOGLE":
        const provider = new GoogleAuthProvider();
        signInWithPopup(authFirebase, provider)
          .then((result) => {
            toast.success("Loggin success!");
            loadUser();
          })
          .catch((error) => {});
        break;
      case "FACEBOOK":
        const providerFb = new FacebookAuthProvider();
        signInWithPopup(authFirebase, providerFb).then((result) => {
          toast.success("Loggin success!");
          loadUser();
        });
        break;
      default:
        break;
    }
  };

  //   logout
  const logout = async () => {
    await signOut(authFirebase)
      .then(() => {
        localStorage.removeItem("token");
        toast.success("Đăng xuất thành công!");
        reload(1000);
      })
      .catch((error) => {});
  };
  // reset password
  const resetPassword = (email) => {
    sendPasswordResetEmail(authFirebase, email)
      .then(() => {
        toast.success("Please check your email to reset your password!");
        reload(3000);
      })
      .catch((error) => {
        toast.warning(error.message);
      });
  };

  //  update user
  const update = async (userName, email, password) => {
    await updateProfile(authFirebase, {
      displayName: userName,
      email: email,
      password: password,
    })
      .then(() => {
        console.log(authFirebase);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const authData = {
    authState,
    register,
    login,
    logout,
    loginAuth02,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
