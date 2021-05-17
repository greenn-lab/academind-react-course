import css from './MeetupItem.module.css'
import Card from '../ui/Card'

const MeetupItem = ({ image, title, address, description }) => (
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
        <button>To Favorites</button>
      </div>
    </Card>
  </li>
)

export default MeetupItem
