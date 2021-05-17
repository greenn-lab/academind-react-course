import css from './Card.module.css'

const Card = ({ children }) => (
  <div className={css.card}>{children}</div>
)

export default Card
