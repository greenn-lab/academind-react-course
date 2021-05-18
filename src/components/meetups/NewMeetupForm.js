import { useRef } from 'react'

import Card from '../ui/Card'
import css from './NewMeetupForm.module.css'

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionRef = useRef()

  function submitHandler(e) {
    e.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionRef.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    }

    onAddMeetup(meetupData)
  }

  return (
    <Card>
      <form className={css.form} onSubmit={submitHandler}>
        <div className={css.control}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" required ref={titleInputRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="address">Address</label>
          <input id="address" required ref={addressInputRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" ref={descriptionRef} />
        </div>

        <div className={css.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
