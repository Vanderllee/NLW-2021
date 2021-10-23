import { VscGithubInverted } from 'react-icons/vsc'

import styles from './styles.module.scss';

export function LoginBox() {
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe suas mensagens</strong>
            <a 
                href="#" 
                className={styles.signinWithGithub}
            >
                <VscGithubInverted size="24"/>
                Entrar com Github
            </a>
        </div>
    )
}