import { useContext } from 'react'
import { Link } from 'react-router-dom'

import css from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context'

const MainNavigation = () => {
  const favoritesContext = useContext(FavoritesContext)

  return (
    <header className={css.header}>
      <div className={css.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>All Meetups</Link>
          </li>
          <li>
            <Link to={'/new-meetup'}>New Meetup</Link>
          </li>
          <li>
            <Link to={'/favorites'}>
              Favorites
              <span className={css.badge}>
                {favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
