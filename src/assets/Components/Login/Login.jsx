import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import auth from "../Firebase/Firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

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

  return (
    <div className="text-center mt-20">
      <h1>This is login page from google Authenthication</h1>

      {user ? (
        <button onClick={handleLogOut} className="btn btn-error my-10">
          Log out Google
        </button>
      ) : (
        <button onClick={handleGoogleLogin} className="btn btn-primary my-10">
          Login With Google
        </button>
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
