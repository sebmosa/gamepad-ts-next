import { fetchCollection } from '@/api/fetchCollection'
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

  const { data: collection } = useQuery({
    queryKey: ['collection'],
    queryFn: () => fetchCollection(userIdCtx),
    enabled: userIdCtx !== '',
  })

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

        {userIdCtx === '' && (
          <p>You must be logged in to be able to access your collection.</p>
        )}
        <div className={styles.list}>
          {userIdCtx !== '' &&
            collection?.games.map((game) => (
              <GameCard
                key={game._id}
                gameName={game.name}
                gameImage={game.image}
                gameId={game._id}
              />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Collection
