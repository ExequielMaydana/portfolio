import styles from "../../styles/welcome.module.css";

export default function BallAnimation() {
  return (
    <article className={`${styles.view} animate-fade
    animate-duration-[900ms] animate-delay-[700ms]`}>
      <div className={`${styles.plane} ${styles.main}`}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </article>
  );
}
