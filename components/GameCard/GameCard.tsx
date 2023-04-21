import Image from 'next/image'
import { useCropVersion } from '../../hooks/useCropVersion'
import noimage from '../../public/no-image.svg'
import styles from './GameCard.module.css'

export interface IGameCard {
  title: string
  picture: string
  // onMouseEnter: MouseEvent
}

export const GameCard = ({ title, picture }: IGameCard) => {
  return (
    <div className={styles.container}>
      <Image
        src={useCropVersion(picture) || noimage}
        alt={title}
        className={styles.cover}
        width={200}
        height={252}
        quality={100}
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <p className={styles.title}>{title}</p>
    </div>
  )
}
