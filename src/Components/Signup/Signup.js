import React from 'react'
import { useEffect,useState } from 'react'
import './Signup.css'
import video from '../../Assets/promo.mp4'

function Signup() {
  const initialValues = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  };

  useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
      }
  }, [formErrors, formValues, isSubmit]);
  const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
          errors.username = "Username is required!";
      }
      if (!values.email) {
          errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
          errors.password = "Password is required";
      } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
      }
      if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Those passwords didn’t match. Try again.";
      }
      return errors;
  };

  return (
      <>
      <div className="overlay"></div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"/></video>
          <div className="bgImg"></div>
          <div className="containers">
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <div className="ui message success">
                      Signed in successfully
                  </div>
              ) : (
                  console.log("Entered Details", formValues)
              )}

              <form onSubmit={handleSubmit}>
                  <h1>Sign Up</h1>
                  <div className="ui divider"></div>
                  <div className="ui form">
                      <div className="field">
                          <label>Username</label>
                          <input
                              type="text"
                              name="username"
                              placeholder="Choose a username"
                              value={formValues.username}
                              onChange={handleChange}
                          />
                      </div>
                      <h1>{formErrors.username}</h1>
                      <div className="field">
                          <label>Email</label>
                          <input
                              type="text"
                              name="email"
                              placeholder="Email"
                              value={formValues.email}
                              onChange={handleChange}
                          />
                      </div>
                      <h1>{formErrors.email}</h1>
                      <div className="field">
                          <label>Password</label>
                          <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={formValues.password}
                              onChange={handleChange}
                          />
                      </div>
                      <h1>{formErrors.password}</h1>
                      <div className="field">
                          <label>Confirm Password</label>
                          <input
                              type="password"
                              name="confirmPassword"
                              placeholder="Confirm password"
                              value={formValues.confirmPassword}
                              onChange={handleChange}
                          />
                      </div>
                      <h1>{formErrors.confirmPassword}</h1>
                      <button className="fluid ui button blue">Submit</button>
                  </div>
              </form>
              <div className="text">
                  Already have an account? <span>Login</span>
              </div>
          </div>{" "}
      </>
  );
}
export default Signup;    