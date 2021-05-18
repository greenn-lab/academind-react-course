import { useContext } from 'react'

import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

const Favorites = () => {
  const favoritesContext = useContext(FavoritesContext)

  return (
    <section>
      <h1>My Favorites</h1>

      {favoritesContext.totalFavorites ? (
        <MeetupList meetups={favoritesContext.favorites} />
      ) : (
        <p>You get no favorites yet. Start adding some?</p>
      )}
    </section>
  )
}

export default Favorites
