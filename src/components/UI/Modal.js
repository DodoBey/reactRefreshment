import styles from './Modal.module.css'

const Modal = (props) => {


    return (
        <div className={styles.backdrop} onClick={props.onErrorHandler}>
            <div className={styles.modal} >
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.message}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.footer}>
                    <button onClick={props.onErrorHandler}>Close</button>
                </footer>
            </div>
        </div>
    )
}

export default Modal
