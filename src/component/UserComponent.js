import React, { useState,useEffect } from 'react';
import UserService from '../services/UserService';

const UserComponent = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
      /*  UserService.getUsers().then((response)=>{
            console.log(response)})*/
            UserService.getUsers().then(r =>setUsers(r.data));
           
           // if (listUsers != null) {listUsers.map(e => console.log('la ' + e));}
            //else listUsers=[];
            //setUsers(listUsers);
        },[users]);
    
    return (
        <div>
            <h1 className="text-center">Users List</h1>
            <table className="">
                <thead>
                    <tr>
                        <td> User Id</td>
                        <td> User First Name</td>
                        <td> User Last Name</td>
                        <td> User Email Id</td>
                       
                    </tr>
                </thead>
                <tbody>
                    { (users !=null) ?users.map((user) => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>)):null}
                </tbody> 
            </table> 
        </div>
    );
};

export default UserComponent;