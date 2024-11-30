import React, { useState } from "react";
import { ToastContainer, Bounce } from "react-toastify";
import { handleError, handleSuccess } from "../../assets/utils";
import { Login_User } from "../Axios/Axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleClick = (e) => {
    const { name, value } = e.target;
    const copyInfo = { ...loginInfo };
    copyInfo[name] = value;
    setLoginInfo(copyInfo);
  };
  // console.log(object)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("All Fields Required");
    }
    try {
      const response = await Login_User(loginInfo);
      if (response.status == 201) {
        handleSuccess("login succesfully");
        Cookies.set("Token", response.data.jwtToken, { expires: 7 });
        Cookies.set("name", response.data.name, { expires: 7 });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(error.details[0].message);
      }
    } catch (error) {
      if (error) {
        handleError(error.response.data.message);
      } else {
        handleError(error.message);
      }
    }
  };

  return (
    <>
      <div
        className="h-screen py-40 flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('../../../public/Images/login_banner.png')",
              }}
            ></div>
            <div className="w-full lg:w-1/2 py-12 px-12">
              <h2 className="text-3xl mb-4">Login</h2>
              <p className="mb-4">Sign in to your account to continue.</p>
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full"
                    onChange={handleClick}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                    onChange={handleClick}
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <input type="checkbox" className="border border-gray-400" />
                    <span className="ml-2">Remember me</span>
                  </div>
                  <a className="text-purple-500 font-semibold">
                    Forgot Password?
                  </a>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-purple-500 py-3 text-center text-white">
                    Login Now
                  </button>
                </div>
              </form>
              <div className="mt-5 text-center">
                <p>
                  Don't have an account?{" "}
                  <a
                    className="text-purple-500 font-semibold cursor-pointer"
                    onClick={() => navigate("/user/signup")}
                  >
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </>
  );
};

export default Login;
