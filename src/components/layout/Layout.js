import css from './Layout.module.css'
import MainNavigation from './MainNavigation'

const Layout = ({ children }) => (
  <div>
    <MainNavigation />
    <main className={css.main}>{children}</main>
  </div>
)

export default Layout
