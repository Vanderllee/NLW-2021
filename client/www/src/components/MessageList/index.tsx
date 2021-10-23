
import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
    return (
        
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Eu estou aprendendo muito com a nlw Heat!
                    </p>

                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vanderllee.png" alt="Vanderllee" />
                        </div>
                        <span>Vanderllee</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Eu estou aprendendo muito com a nlw Heat!
                    </p>

                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vanderllee.png" alt="Vanderllee" />
                        </div>
                        <span>Vanderllee</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Eu estou aprendendo muito com a nlw Heat!
                    </p>

                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vanderllee.png" alt="Vanderllee" />
                        </div>
                        <span>Vanderllee</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}