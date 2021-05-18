import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    console.log('useEffect #1')
    fetch(
      'https://academind-react-course-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('useEffect #3')

        const _meetups = []

        Object.keys(data).forEach((key) =>
          _meetups.push({
            id: key,
            ...data[key],
          })
        )

        setIsLoading(false)
        setMeetups(_meetups)
      })

    console.log('useEffect #2')
  }, [])

  if (isLoading) {
    console.log('isLoading #1')

    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  console.log('normally #1')

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  )
}

export default AllMeetups
