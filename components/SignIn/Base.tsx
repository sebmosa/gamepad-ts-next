import styles from './Base.module.css'
export interface IBaseTemplate {
  sampleTextProp: string
}

export const BaseTemplate = ({ sampleTextProp }: IBaseTemplate) => {
  return <div className={styles.container}>{sampleTextProp}</div>
}
