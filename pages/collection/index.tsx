import { fetchCollection } from '@/api/fetchCollection'
import { removeFromCollection } from '@/api/removeFromCollection'
import { Footer } from '@/components/Footer/Footer'
import { GameCard } from '@/components/GameCard/GameCard'
import { Header } from '@/components/Header/Header'
import { userIdContext } from '@/context/context'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head.js'
import { useContext, useState } from 'react'
import styles from '../../styles/Collection.module.css'

const Collection = () => {
  const { userIdCtx } = useContext(userIdContext)
  const [gameInCollection, setGameInCollection] = useState(false)

  const logged = userIdCtx !== ''
  const unlogged = userIdCtx === ''

  const { data: collection } = useQuery({
    queryKey: ['collection', userIdCtx, gameInCollection],
    queryFn: () => fetchCollection(userIdCtx),
    enabled: true,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  })

  const removeGame = (userId: string, gameId: string) => {
    removeFromCollection(userId, gameId)
    setGameInCollection(true)
    console.log('gameInCollection', gameInCollection)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Gamepad-ts-next</title>
        <meta name="description" content="gamepad frontend app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Collection</h1>

        {unlogged && (
          <p>You must be logged in to be able to access your collection.</p>
        )}
        <div className={styles.list}>
          {logged &&
            collection?.games.map((game) => (
              <div className={styles.game_wrapper} key={game._id}>
                <GameCard
                  gameName={game.name}
                  gameImage={game.image}
                  gameId={game._id}
                  logged={logged}
                  onClick={() => removeGame(userIdCtx, game._id)}
                />
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Collection
