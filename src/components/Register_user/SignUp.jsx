import React, { useState } from "react";
import { handleError, handleSuccess } from "../../assets/utils";
import { ToastContainer, Bounce } from "react-toastify";
import { Signup_User } from "../Axios/Axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate("");
  const [signup, setSignUp] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    const copyInfo = { ...signup };
    copyInfo[name] = value;
    setSignUp(copyInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobileNumber, password, confirmPassword } = signup;
    if (!name || !email || !mobileNumber || !password || !confirmPassword) {
      handleError("All Feilds Requird");
    }
    try {
      const response = await Signup_User(signup);
      if (response.status == 201) {
        handleSuccess("Sign Up Successfully");
        setTimeout(() => {
          navigate("/user/login");
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
            <div className="w-full lg:w-1/2 py-9 px-12">
              <h2 className="text-3xl mb-4">Register</h2>
              <p className="mb-4">
                Create your account. It’s free and only takes a minute
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <input
                    onChange={handleClick}
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-4">
                  <input
                    onChange={handleClick}
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-4">
                  <input
                    onChange={handleClick}
                    type="number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-4">
                  <input
                    onChange={handleClick}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-4">
                  <input
                    onChange={handleClick}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-4">
                  <input type="checkbox" className="border border-gray-400" />
                  <span>
                    I accept the{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-purple-500 py-3 text-center text-white">
                    Register Now
                  </button>
                </div>
              </form>
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

export default SignUp;
