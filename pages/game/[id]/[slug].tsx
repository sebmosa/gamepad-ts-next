import { Footer } from '@/components/Footer/Footer'
import { GameImage } from '@/components/GameImage/GameImage'
import { Header } from '@/components/Header/Header'
import { useGameQuery } from '@/hooks/useGameQuery'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../../styles/GamePage.module.css'

const GamePage = () => {
  const router = useRouter()

  const { id } = router.query

  const gameId = typeof id === 'string' ? id : ''

  const { data: game, isLoading, isFetching, isError } = useGameQuery(gameId)

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Something went wrong!</div>

  if (!game) return null

  return (
    <div className={styles.container}>
      <Head>
        <title>Gamepad-ts-next</title>
        <meta name="description" content="gamepad frontend app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1>{game?.name}</h1>
        <p className={styles.metacritic}>metacritic: {game?.metacritic}</p>
        <div className={styles.banner}>
          <div className={styles.image__wrapper}>
            {game && (
              <GameImage
                title={game.name}
                picture={game.background_image}
                key={game.id}
              />
            )}
          </div>
          <div className={styles.details}>
            <p className={styles.detail}>rating: </p>
            <p className={styles.line}>{game?.rating}</p>
            <p className={styles.detail}>released: </p>
            <p className={styles.line}>{game?.released}</p>
            <p className={styles.detail}>platforms: </p>
            <p className={styles.line}>
              {game?.platforms.map((platform) => `${' '}${platform.name}`)}
            </p>
            <p className={styles.detail}>genres: </p>
            <p className={styles.line}>
              {game?.genres.map((genre) => `${' '}${genre.name}`)}
            </p>
            <p className={styles.detail}>developers: </p>
            <p className={styles.line}>
              {game?.developers?.map((developer) => `${' '}${developer.name}`)}
            </p>
            <p className={styles.detail}>publishers: </p>
            <p className={styles.line}>
              {game?.publishers?.map((publisher) => `${' '}${publisher.name}`)}
            </p>
            <p className={styles.detail}>esrb_rating: </p>
            <p className={styles.line}>{game?.esrb_rating?.name}</p>
          </div>
        </div>
        <p className={styles.description}>description: </p>
        <p className={styles.desc_line}>{game?.description}</p>
      </main>
      <Footer />
    </div>
  )
}

export default GamePage
