import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from "../auth/axiosWithAuth";

import { NewFriends } from "./NewFriends";

export const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get(`/friends`)
    .then(response => {
      console.log(response.data)
      setFriends(response.data)
    })
    .catch( error => {
      console.log("error", error.message)
    })
},[])

  return (
    <>
    <NewFriends friendsArr={friends} setFriends={setFriends}/>

    {friends.map(item => (
      <>
      <h2>{item.name}</h2>
      <ul>
        <li>Age: {item.age}</li>
        <li>Email: {item.email}</li>
      </ul>
      </>
    ))}

    </>
  );
};
