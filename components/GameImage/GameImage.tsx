import Image from 'next/image'
import { useCropVersion } from '../../hooks/useCropVersion'
import noimage from '../../public/no-image16-9.svg'
import styles from './GameImage.module.css'

export interface IGameImage {
  title: string
  picture: string
}

export const GameImage = ({ title, picture }: IGameImage) => {
  return (
    <Image
      src={useCropVersion(picture) || noimage}
      alt={title}
      className={styles.game_image}
      width={600}
      height={340}
      quality={100}
      priority
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
  )
}
