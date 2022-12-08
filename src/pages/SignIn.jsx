import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = () => {};

  return (
    <>
      <div className="pageContainer">
        <header className="pageHeader">
          <p>Cool</p>
        </header>
        <form>
          <input
            type="email"
            className="emailInput"
            placeholder="Email..."
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password..."
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt="Show Pass"
              onClick={() => setShowPassword((prevState) => !prevState)}
              className="showPassword"
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton"><ArrowRightIcon fill="#ffffff" width="34px" height="34px" /></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;

// rafc: arrow functional component: withour default
// import React from 'react'

// export const SignIn = () => {
//   return (
//     <div>SignIn</div>
//   )
// }

// rfc: React function component
// import React from 'react'

// export default function SignIn() {
//   return (
//     <div>SignIn</div>

// }

// rafce: arrow functional component export default
// import React from 'react'

// const SignIn = () => {
//   return (
//     <div>SignIn</div>
//   )
// }

// export default SignIn

// rfce: functional component export default
// import React from 'react'

// function SignIn() {
//   return (
//     <div>SignIn</div>
//   )
// }

// export default SignIn
