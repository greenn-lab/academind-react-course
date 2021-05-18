import { useContext } from 'react'

import css from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorites-context'

const MeetupItem = ({ id, image, title, address, description }) => {
  const favoritesContext = useContext(FavoritesContext)

  const hasFavorite = favoritesContext.hasFavorite(id)

  const toggleFavoriteStatusHandler = () => {
    if (hasFavorite) {
      favoritesContext.removeFavorite(id)
    } else {
      favoritesContext.addFavorite({
        id,
        title,
        image,
        address,
        description
      })
    }
  }

  return (
    <li className={css.item}>
      <Card>
        <div className={css.image}>
          <img src={image} alt="" />
        </div>
        <div className={css.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={css.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {hasFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
