import { fetchCollection } from '@/api/fetchCollection'
import { removeFromCollection } from '@/api/removeFromCollection'
import { Footer } from '@/components/Footer/Footer'
import { GameCard } from '@/components/GameCard/GameCard'
import { Header } from '@/components/Header/Header'
import { userIdContext } from '@/context/context'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head.js'
import { useContext } from 'react'
import styles from '../../styles/Collection.module.css'

const Collection = () => {
  const { userIdCtx } = useContext(userIdContext)
  const logged = userIdCtx !== ''
  const unlogged = userIdCtx === ''

  const { data: collection, refetch } = useQuery({
    queryKey: ['collection', userIdCtx],
    queryFn: () => fetchCollection(userIdCtx),
    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 0,
  })

  const removeGame = async (userId: string, gameId: string) => {
    await removeFromCollection(userId, gameId)
    await refetch()
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
                  inCollection={collection?.games?.find((elem) => {
                    return elem._id === game._id
                  })}
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
