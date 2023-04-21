import { GameImage } from '@/components/GameImage/GameImage'
import { Header } from '@/components/Header/Header'
import { useGameQuery } from '@/hooks/useGameQuery'
import Head from 'next/head'
import { useRouter } from 'next/router'

const GamePage = () => {
  const router = useRouter()

  const { id } = router.query

  const gameId = typeof id === 'string' ? id : ''

  const { data: game, isLoading, isFetching, isError } = useGameQuery(gameId)

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Something went wrong!</div>

  if (!game) return null

  return (
    <>
      <Head>
        <title>Gamepad-ts-next</title>
        <meta name="description" content="gamepad frontend app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h1>{game?.name}</h1>
        <p>metacritic: {game?.metacritic}</p>
        {game && (
          <GameImage
            title={game.name}
            picture={game.background_image}
            key={game.id}
          />
        )}
        <p>description: {game?.description}</p>
        <p>rating: {game?.rating}</p>
        <p>released: {game?.released}</p>
        <p>
          platforms:{' '}
          {game?.platforms.map((platform) => `${' '}${platform.name}`)}
        </p>
        <p>genres: {game?.genres.map((genre) => `${' '}${genre.name}`)}</p>
        <p>
          developers:
          {game?.developers?.map((developer) => `${' '}${developer.name}`)}
        </p>
        <p>
          publishers:
          {game?.publishers?.map((publisher) => `${' '}${publisher.name}`)}
        </p>
        <p>esrb_rating: {game?.esrb_rating?.name}</p>
      </main>
    </>
  )
}

export default GamePage
