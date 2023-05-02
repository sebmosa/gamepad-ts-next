import styles from './Footer.module.css'
export interface IFooter {
  sampleTextProp: string
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by Rawg API - made by Sebmosa
    </footer>
  )
}
