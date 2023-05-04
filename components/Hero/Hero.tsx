import styles from './Hero.module.css'
export interface IHero {
  totalGames?: number
}

export const Hero = ({ totalGames }: IHero) => {
  return (
    <div className={styles.hero}>
      <h2 className={styles.hero_title}>It&apos;s time to collect!</h2>
      <div className={styles.hero_text__wrapper}>
        <h2 className={styles.hero_text}>
          Make your collection among the {totalGames} video games finded of the
          largest free internet database.
        </h2>
      </div>
      <div className={styles.hero_hiw__wrapper}>
        <div className={styles.hero_hiw__sidebar}>
          <h3 className={styles.hero_hiw}>How it works?</h3>
          <ul className={styles.hero_hiw__list}>
            <li>
              1- Log in to your free account to be able to get all features of
              Gamepad.
            </li>
            <li>2- Add games to your collection.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
