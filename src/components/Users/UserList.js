import { useState } from "react"
import UserCard from "../UI/UserCard"
import AddUser from "./AddUser"


const UserList = () => {
    const [userList, setUserList] = useState([])

    const getUsers = (userData) => {
        setUserList(prevUser => {
            return [userData, ...prevUser]
        })
    }


    return (
        <div>
            <AddUser getUserData={getUsers} />
            <UserCard users={userList} />
        </div>
    )
}

export default UserList
