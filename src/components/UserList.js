import React from 'react'
import {useState, useEffect} from "react";
import axios from 'axios'
import SingleUser from "./SingleUser";

const UserList = () => {
const [users, setUsers] = useState([]);

const getUsers = async () =>{
    await axios.get("https://randomuser.me/api/?results=5").then((res) =>{
        setUsers(res.data.results)
        }
    )
}

    useEffect(() => {
        getUsers()
    },[])


return (
  <>
  <div className='userList'>
    <ul>
        {users.map((user, index) => (
            <li>
                <SingleUser user = {user} key={index}/>
            </li>
        ))}

    </ul>
  </div>
  </>
);
}
export default UserList;