import { useHistory } from 'react-router-dom'

import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetup = () => {
  const history = useHistory()

  const addMeetupHandler = (data) => {
    fetch(
      'https://academind-react-course-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    ).then(() => {
      history.replace('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup
