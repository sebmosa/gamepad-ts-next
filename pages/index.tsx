import { fetchGenres } from '@/api/fetchGenres'
import { fetchPlatforms } from '@/api/fetchPlatforms'
import { GameCard } from '@/components/GameCard/GameCard'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { Pagination } from '@/components/Pagination/Pagination'
import { SearchNav } from '@/components/SearchNav/SearchNav'
import { useDebounce } from '@/hooks/useDebounce'
import { useGameListQuery } from '@/hooks/useGameListQuery'
import styles from '@/styles/Home.module.css'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { MouseEvent, useEffect, useState } from 'react'
import { fetchGameList } from '../api/fetchGameList'

const first_page = 1
const page_size = 20

const getInitialPage = (query: ParsedUrlQuery) => {
  const page = Number(query.page)

  if (Number.isNaN(page) || page < first_page) {
    return first_page
  }
  return page
}

const getInitialSearch = (query: ParsedUrlQuery) => {
  const search = query.search

  if (typeof search != 'string') {
    return ''
  }
  return search
}

export const getServerSideProps: GetServerSideProps<{
  initialPage: number
  initialSearch: string
}> = async (context) => {
  const queryClient = new QueryClient()

  const page = getInitialPage(context.query)
  const search = getInitialSearch(context.query)

  const queryPlatformsKey = ['platforms']

  await queryClient.prefetchQuery({
    queryKey: queryPlatformsKey,
    queryFn: () => fetchPlatforms(),
  })

  const queryGenresKey = ['genres']

  await queryClient.prefetchQuery({
    queryKey: queryGenresKey,
    queryFn: () => fetchGenres(),
  })

  const queryGameListKey = ['gameList', page, search]

  await queryClient.prefetchQuery({
    queryKey: queryGameListKey,
    queryFn: () =>
      fetchGameList(page_size, page, search, '', '', '', '-metacritic'),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialPage: page,
      initialSearch: search,
    },
  }
}

const Home = ({
  initialPage,
  initialSearch,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const [page, setPage] = useState(initialPage)
  const [search, setSearch] = useState(initialSearch)
  const [platform, setPlatform] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState('0-100')
  const [sort, setSort] = useState('-metacritic')
  const debounceSearch = useDebounce(search, 500)

  const {
    data: gameList,
    isLoading,
    isFetching,
    isError,
  } = useGameListQuery(
    page_size,
    page,
    debounceSearch,
    platform,
    genre,
    rating,
    sort
  )

  const handleSearch = (value: string) => {
    setSearch(value)
    setPlatform(
      '4,187,1,18,186,7,3,21,8,9,13,5,6,14,80,16,15,27,19,17,10,11,105,83,24,43,26,79,49,55,41,166,28,31,23,22,25,34,46,50,167,107,119,117,74,106,111,112,77,12'
    )
    setGenre('4,51,3,5,10,40,14,7,11,83,1,59,15,6,19,28,34,17,2')
    setPage(first_page)
  }

  const resetClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setPlatform('')
    setGenre('')
    handleSearch('')
  }

  const onChangePlatform = (value: string) => {
    setPlatform(value)
  }

  const onChangeGenre = (value: string) => {
    setGenre(value)
  }

  const onChangeSort = (value: string) => {
    setSort(value)
  }

  // const prefetchGame = async (event: MouseEvent) => {
  //   console.log('Event:', event)
  //   const gameId = event.toString()
  //   const queryClient = new QueryClient()
  //   await queryClient.prefetchQuery({
  //     queryKey: ['game', gameId],
  //     queryFn: () => fetchGame(gameId),
  //     staleTime: 10 * 1000,
  //   })
  // }

  useEffect(() => {
    router.replace(
      `/?page=${page}${search ? `&search=${debounceSearch}` : ''}`,
      undefined,
      { shallow: true }
    )
  }, [page, search, router, debounceSearch])

  return (
    <div className={styles.container}>
      <Head>
        <title>Gamepad-ts-next</title>
        <meta name="description" content="gamepad frontend app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero totalGames={gameList?.count} />
        <SearchNav
          placeholder="Search for a game..."
          search={search}
          platform={platform}
          genre={genre}
          sort={sort}
          onInputChange={(value) => handleSearch(value)}
          onClick={resetClick}
          onChangePlatform={(value) => onChangePlatform(value)}
          onChangeGenre={(value) => onChangeGenre(value)}
          onChangeSort={(value) => onChangeSort(value)}
        />
        <Pagination
          currentPage={page}
          count={gameList?.count || 0}
          pageSize={page_size}
          onPageChange={(pageNumber) => setPage(pageNumber)}
          disabled={isLoading || isFetching}
        />
        <div className={styles.list}>
          {gameList?.results.map((game) => (
            <Link
              key={game.id}
              href={`/game/${game.id}/${encodeURIComponent(`${game.slug}`)}`}
              className={styles.gamecard_link}
            >
              <GameCard
                title={game.name}
                picture={game.background_image}
                key={game.id}
                // onMouseEnter={}
              />
            </Link>
          ))}
        </div>
        <Pagination
          currentPage={page}
          count={gameList?.count || 0}
          pageSize={page_size}
          onPageChange={(pageNumber) => setPage(pageNumber)}
          disabled={isLoading || isFetching}
        />
      </main>

      <footer className={styles.footer}>
        Powered by Rawg API - made by Sebmosa
      </footer>
    </div>
  )
}

export default Home
