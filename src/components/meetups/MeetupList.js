import css from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

const MeetupList = ({ meetups }) => (
  <ul className={css.list}>
    {meetups.map((meetup) => (
      <MeetupItem
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
      />
    ))}
  </ul>
)

export default MeetupList
