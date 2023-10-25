import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import Homeimage from "../assets/images/home.png";

function Login() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a successful login
    setLoggedIn(true);
    navigate("/Dashboard");
  };

  return (
    <div>
      {loggedIn ? (
        <p>You are already logged in. Redirecting to the dashboard...</p>
      ) : (
       
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <div className="md:order-2 mx-2">
              <img
                src={Homeimage}
                alt="Login Image"
                className="w-full h-auto -m-7"
              />
            </div>
            <div className="md:order-1">
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-1">Welcome back!</h2>
                <h3 className="mb-6">Please login to Manage your Tasks!!</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600">
                      Email: <address></address>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border rounded-md p-2 "
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600">
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full border rounded-md p-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#0038FF] w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <div className="flex gap-4 mt-8">
                    <button
                      type="submit"
                      className="w-full flex items-center text-black py-1 px-4 rounded-md border md:whitespace-nowrap"
                    >
                      <span className="mr-2">
                        {" "}
                        <FcGoogle />
                      </span>
                      Sign in with Google
                    </button>
                    <button
                      type="submit"
                      className="w-full flex items-center text-black py-1 px-4 rounded-md border md:whitespace-nowrap"
                    >
                      <span className="mr-2">
                        <AiFillApple />
                      </span>
                      Sign in with Apple
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
