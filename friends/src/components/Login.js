import React, { useState } from 'react';

import { axiosWithAuth } from "../auth/axiosWithAuth";

export const Login = (props) => {
  //NEED PROPS FOR THE ROUTE PROPS
  const [credentials, setCredentials] = useState(
    {
      username: "",
      password: ""
    }
  );

/*  state = {
    credentials: ,
    isFetching: false
  };*/

  const handleChange = (event) => {
    setCredentials(
      {
        ...credentials,
        [event.target.name]: event.target.value
      }
    );
  };

  const login = (event) => {
    event.preventDefault();//WONT LOAD THE LOG UNLESS YOU OVER RIDE DEFULT
    axiosWithAuth()
      .post("/login", credentials)
      .then(responce => {
        console.log(responce);
        localStorage.setItem("token", responce.data.payload);
        props.history.push("/protected");
      })
      .catch(error => console.log(error));
  };

  return (
    <>
    <form onSubmit={login}>
      <input
        type="text"
        name="username"
        value={credentials.username}
        placeholder="User Name"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <button>Submit</button>
      {/*this.state.isFetching && "logging in"*/}
    </form>
    </>
  );
};
