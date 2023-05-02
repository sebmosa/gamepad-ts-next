export interface IGameList {
  count: number
  next: string | null
  previous: string | null
  results: [
    {
      id: number
      name: string
      slug: string
      released: string
      background_image: string
      rating: number
      metacritic: number
      platforms: [
        {
          id: number
          name: string
          slug: string
        }
      ]
    }
  ]
}

export interface ISelectFilter {
  id: number
  name: string
  slug: string
}

export interface IGame {
  id: string
  name: string
  slug: string
  description: string
  rating: number | null
  metacritic: number | null
  released: string
  background_image: string
  background_image_additional: string
  platforms: [{ id: number; name: string; slug: string }]
  genres: [{ id: number; name: string; slug: string }]
  developers: [{ id: number; name: string; slug: string }]
  publishers: [{ id: number; name: string; slug: string }]
  esrb_rating: { id: number; name: string; slug: string }
}

export interface ICollection {
  _id: string
  games: [
    {
      _id: string
      image: string
      name: string
    }
  ]
  owner: string
}
