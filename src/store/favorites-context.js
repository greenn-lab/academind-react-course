import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite(meetup) {
    /* no work */
  },
  removeFavorite(id) {
    /* no work */
  },
  hasFavorite(id) {
    /* no work */
  }
})

export const FavoriteContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavoriteHandler = meetup =>
    setUserFavorites(userFavorites.concat(meetup))

  const removeFavoriteHandler = id =>
    setUserFavorites(prev => prev.filter(meetup => meetup.id !== id))

  const hasFavoriteHandler = id =>
    userFavorites.some(meetup => meetup.id === id)

  return (
    <FavoritesContext.Provider
      {...children}
      value={{
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        hasFavorite: hasFavoriteHandler
      }}
    />
  )
}

export default FavoritesContext
