import css from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

const MeetupList = ({ meetups }) => (
  <ul className={css.list}>
    {meetups.map(meetup => (
      <MeetupItem key={meetup.id} {...meetup} />
    ))}
  </ul>
)

export default MeetupList
