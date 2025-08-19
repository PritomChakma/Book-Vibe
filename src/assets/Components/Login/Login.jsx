import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import auth from "../Firebase/Firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then((result) => {
        console.log("Logout Compelete", result);
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("Login with Github", result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.error("ERROR:", error.code, error.message);
      });
  };

  return (
    <div className="text-center mt-20">
      <h1>This is login page from google Authenthication</h1>

      {user ? (
        <button onClick={handleLogOut} className="btn btn-error my-10">
          Log out Google
        </button>
      ) : (
        <div className="flex gap-2 justify-center">
          <button onClick={handleGoogleLogin} className="btn btn-primary my-10">
            Login With Google
          </button>
          <button onClick={handleGithubLogin} className="btn btn-primary my-10">
            Login With Github
          </button>
        </div>
      )}

      {user && (
        <div>
          <h1>
            <span className="font-bold">Name: </span>
            {user.displayName}
          </h1>
          <h1>
            <span className="font-bold">Email: </span>
            {user.email}
          </h1>
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              className="w-32 h-32 rounded-full mx-auto mt-4"
            />
          ) : (
            <p>No photo available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
