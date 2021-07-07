import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from "../auth/axiosWithAuth";


export const NewFriends = (props) => {
  const [addFriendState, setAddFriendState] = useState(
    {
      id: props.friendsArr.length + 1,
      name: "",
      age: null,
      email: "",
    }
  );
  const [submited, setSubmited] = useState();

  useEffect(() => {
    axiosWithAuth().get(`/friends`)
    .then(response => {
      console.log(response.data)
      props.setFriends(response.data)
    })
    .catch( error => {
      console.log("error", error.message)
    })
},[submited])

  const handleChange = (event) => {
    setAddFriendState(
      {
        ...addFriendState,
        [event.target.name]: event.target.value,
        id: props.friendsArr.length + 1
      }
    );
  };

  const addFriend = (event) => {
    event.preventDefault();//WONT LOAD THE LOG UNLESS YOU OVER RIDE DEFULT
    axiosWithAuth().post(`/friends`, addFriendState)
    .then(response => {
      console.log(response)
      setSubmited("new value")
      //the POST handles pushing it in
    })
    .catch( error => {
      console.log("error", error.message)
    })
  };

  return (
    <>
    {/*console.log(addFriendState)*/}
    {/*console.log(props.friendsArr.length)*/}
    <form onSubmit={addFriend}>
      <input
        type="text"
        name="name"
        value={addFriendState.name}
        placeholder="New Friends Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={addFriendState.email}
        placeholder="New Friends Email"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={addFriendState.age}
        placeholder="New Friends Age"
        onChange={handleChange}
      />
      <button>Submit</button>
      {/*this.state.isFetching && "logging in"*/}
    </form>
    </>
  );
};
