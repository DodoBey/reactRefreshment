import styles from './UserCard.module.css'
const UserCard = (props) => {

    return (
        <>
            {
                props.users.length > 0 &&
                (<div className={styles.cardMain}>
                    {props.users.map(user => {
                        return <p key={Math.random()}>{user.username} ({user.age} Years Old)</p>
                    })}
                </div>)
            }
        </>
    )
}

export default UserCard
