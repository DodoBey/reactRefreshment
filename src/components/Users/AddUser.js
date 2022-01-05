import { useState } from "react"
import Modal from "../UI/Modal"
import styles from './AddUser.module.css'
const AddUser = (props) => {
    const [userName, setUserName] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState("")


    const addUserHandler = (e) => {
        e.preventDefault();

        if (!userName.length > 0 || !age.length > 0) {
            return setError("Username and Age cannot be empty!")
        }

        if (age < 0) {
            return setError("Age must be positive number!")
        }
        const useData = {
            username: userName,
            age: age
        }

        props.getUserData(useData)
        setUserName("")
        setAge("")
        setError("")
    }

    console.log(error)

    return (
        <>
            {error.length > 0 && <Modal error={error} />}
            <form onSubmit={addUserHandler} className={styles.formMain}>
                <div className={styles.inputs}>
                    <label>Username</label>
                    <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                </div>
                <div className={styles.inputs}>
                    <label>Age(Years)</label>
                    <input type="number" value={age} onChange={e => setAge(e.target.value)} />
                </div>
                <button type="submit">Add User</button>
            </form>
        </>
    )
}

export default AddUser
