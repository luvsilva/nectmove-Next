import { useChallenges } from '../hooks/useChallenges';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/luvsilva.png" alt="Lucas Vinicius da Silva "/>
      <div>
        <strong>Lucas Vinicius da Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}