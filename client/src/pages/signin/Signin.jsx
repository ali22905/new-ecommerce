import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userReducer";
import { useNavigate } from "react-router";
import "./Signin.css";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";

const Signin = () => {
  const [signType, setSignType] = useState("login");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [foundUser, setFoundUser] = useState(true);
  const [wrongPass, setWrongPass] = useState(false);
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [isUnvalidPass, setIsUnvalidPass] = useState(false);
  const [unvalidEmail, setUnvalidEmail] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setData((perv) => {
      return { ...perv, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signType === "register") {
      // validate form
      if (
        (data.email === "") |
          (data.password === "") |
          (data.firstName === "") ||
        data.lastName === "" ||
        data.phone === ""
      ) {
        setIsEmptyField(true);
      } else {
        setIsEmptyField(false);
      }
      data.password.length < 4
        ? setIsUnvalidPass(true)
        : setIsUnvalidPass(false);
      !data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ? setUnvalidEmail(true)
        : setUnvalidEmail(false);
      if (!isEmptyField && !isUnvalidPass && unvalidEmail === false) {
        return;
      }
      try {
        const user = await axios.post(`${API_KEY}/auth/register`, data);
        setSignType("login");
      } catch (error) {
        console.log("Error while logging in", error);
      }
    } else {
      try {
        const user = await axios.post(`${API_KEY}/auth/login`, {
          email: data.email,
          password: data.password,
        });
        dispatch(login(user.data));
        navigate("/");
      } catch (error) {
        error.response.status === 404
          ? setFoundUser(false)
          : setFoundUser(true);
        error.response.status === 401
          ? setWrongPass(true)
          : setWrongPass(false);
        console.log("Error while logging in", error);
      }
    }
  };

  return (
    <>
      <>
        {signType === "register" ? (
          <div className="login">
            <div className="container" style={{ height: "95vh" }}>
              <div className="image">
                <img src="/assets/girl-illustration.png" alt="img" />
                <div className="buttons">
                  {signType === "register" ? (
                    <button
                      className="bt1"
                      onClick={() => {
                        setSignType("loign");
                      }}
                      style={{ bottom: "5%" }}
                    >
                      Already have an account
                    </button>
                  ) : (
                    <button
                      className="bt1"
                      onClick={() => {
                        setSignType("register");
                      }}
                    >
                      Create account
                    </button>
                  )}
                </div>
              </div>
              <div className="text2">
                <h1>Welcome!</h1>
                <div className="inputs">
                  <input
                    className="main-input"
                    value={data.firstName}
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    placeholder="your first name"
                    required
                  />
                  <input
                    className="main-input"
                    value={data.lastName}
                    name="lastName"
                    onChange={handleChange}
                    type="text"
                    placeholder="your last name"
                    required
                  />
                  <input
                    className="main-input"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="your email"
                    required
                  />
                  <input
                    className="main-input"
                    value={data.password}
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="enter a password"
                    required
                  />
                  <input
                    className="main-input"
                    value={data.phone}
                    name="phone"
                    onChange={handleChange}
                    type="number"
                    placeholder="your phone number"
                    required
                  />
                  <input
                    className="main-input"
                    value={data.address}
                    name="address"
                    onChange={handleChange}
                    type="text"
                    placeholder="your address"
                    required
                  />
                  <button className="bt2" onClick={handleSubmit}>
                    submit
                  </button>
                  <div className="p">
                    Can't wait to see your account in our website
                  </div>
                </div>
              </div>
            </div>
            <div className="d1" />
            <div className="d2" />
            {isUnvalidPass && (
              <div className="userNotFound">
                <div className="icon">
                  <SentimentVeryDissatisfiedOutlinedIcon fontSize="medium" />
                </div>
                <div className="errText">
                  <h4>There was a Problem</h4>
                  <p>password must be greater than 3 letters.</p>
                </div>
              </div>
            )}
            {isEmptyField && (
              <div className="wrongPass">
                <div className="icon">
                  <SentimentVeryDissatisfiedOutlinedIcon fontSize="medium" />
                </div>
                <div className="errText">
                  <h4>There was a Problem</h4>
                  <p>all fileds are required except the address.</p>
                </div>
              </div>
            )}
            {unvalidEmail && (
              <div className="wrongPass">
                <div className="icon">
                  <SentimentVeryDissatisfiedOutlinedIcon fontSize="medium" />
                </div>
                <div className="errText">
                  <h4>There was a Problem</h4>
                  <p>The e-mail you entered is unvalid.</p>
                </div>
              </div>
            )}
          </div>







        ) : (
          <div className="login">
            <div className="container">
              <div className="image">
                <img src="/assets/girl-illustration.png" alt="img" />
                <div className="buttons">
                  {signType === "register" ? (
                    <button
                      className="bt1"
                      onClick={() => {
                        setSignType("loign");
                      }}
                    >
                      Already have account
                    </button>
                  ) : (
                    <button
                      className="bt1"
                      onClick={() => {
                        setSignType("register");
                      }}
                    >
                      Create account
                    </button>
                  )}
                </div>
              </div>
              <div className="text2">
                <h1>Welcome!</h1>
                <div className="inputs">
                  {/* <input value={data.phone} name="phone" onChange={handleChange} type="number" placeholder='phone' /> */}
                  <input
                    className="main-input"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="email"
                    required
                  />
                  <input
                    className="main-input"
                    value={data.password}
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="password"
                    required
                  />
                  <button className="bt2" onClick={handleSubmit}>
                    submit
                  </button>
                  <div className="p">
                    <p>
                      Securely access your account with your email and password{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d1" />
            <div className="d2" />
            {!foundUser && (
              <div className="userNotFound">
                <div className="icon">
                  <SentimentVeryDissatisfiedOutlinedIcon fontSize="medium" />
                </div>
                <div className="errText">
                  <h4>There was a Problem</h4>
                  <p>We couldn't find an account with that e-mail address.</p>
                </div>
              </div>
            )}
            {wrongPass && (
              <div className="wrongPass">
                <div className="icon">
                  <SentimentVeryDissatisfiedOutlinedIcon fontSize="medium" />
                </div>
                <div className="errText">
                  <h4>There was a Problem</h4>
                  <p>The password you entered is incorrect.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </>
    </>
  );
};

export default Signin;
