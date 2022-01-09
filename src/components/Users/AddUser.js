import { useState } from "react"
import Modal from "../UI/Modal"
import styles from './AddUser.module.css'
const AddUser = (props) => {
    const [userName, setUserName] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState()
    const [errorTitle, setErrorTitle] = useState()


    const addUserHandler = (e) => {
        e.preventDefault();

        if (!userName.trim().length > 0 || !age.trim().length > 0) {
            return (
                setErrorTitle("Invalid Input!"),
                setError("Username and Age cannot be empty!")
            )
        }

        if (+age < 0) {
            return (
                setErrorTitle("Invalid Age!"),
                setError("Age must be positive number!")
            )
        }
        const useData = {
            username: userName,
            age: age
        }

        props.getUserData(useData)
        setUserName("")
        setAge("")
    }

    const errorHandler = () => {
        setError();
        setErrorTitle();
    }

    return (
        <>
            {error && <Modal title={errorTitle} message={error} onErrorHandler={errorHandler} />}
            <form onSubmit={addUserHandler} className={styles.formMain}>
                <h1>Add User</h1>
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
