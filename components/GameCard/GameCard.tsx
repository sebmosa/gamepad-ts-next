import Image from 'next/image'
import Link from 'next/link.js'
import { useCropVersion } from '../../hooks/useCropVersion'
import plus from '../../public/GameCard/math-plus.svg'
import noimage from '../../public/no-image.svg'
import styles from './GameCard.module.css'

export interface IGameCard {
  gameName: string
  gameImage: string
  gameId: string
  gameSlug?: string
  inCollection?: { _id: string; image: string; name: string }
  logged?: boolean
  onClick?: () => void
}

export const GameCard = ({
  gameName,
  gameImage,
  gameId,
  gameSlug,
  inCollection,
  logged,
  onClick,
}: IGameCard) => {
  return (
    <div className={styles.container}>
      {logged && (
        <div
          className={
            inCollection ? styles.atc_wrapper__active : styles.atc_wrapper
          }
        >
          <Image
            src={plus}
            className={
              inCollection
                ? styles.add_to_collection__active
                : styles.add_to_collection
            }
            alt="add to collection button"
            onClick={onClick}
          />
        </div>
      )}
      <Link
        href={`/game/${gameId}/${encodeURIComponent(`${gameSlug}`)}`}
        className={styles.game_link}
      >
        <Image
          src={useCropVersion(gameImage) || noimage}
          alt={gameName}
          className={styles.cover}
          width={200}
          height={252}
          quality={100}
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </Link>
      <p className={styles.title}>{gameName}</p>
    </div>
  )
}
