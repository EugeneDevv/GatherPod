import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {

  function addMeetUpHandler(meetUpData) {
    
  }

  return <section><h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetUp={addMeetUpHandler}/>
  </section>
}

export default NewMeetupPage