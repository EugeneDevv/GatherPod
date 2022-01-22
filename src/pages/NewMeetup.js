import { useNavigate } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {

  const navigate = useNavigate()

  function addMeetUpHandler(meetUpData) {
    fetch('https://students-corner-7520a.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetUpData),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => { 
      navigate('/')
    })
  }

  return <section><h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
  </section>
}

export default NewMeetupPage