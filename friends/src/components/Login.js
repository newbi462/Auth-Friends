import React, { useState } from 'react';

export const Login = () => {
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
