import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetUpList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetUps, setLoadedMeetUps] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://students-corner-7520a.firebaseio.com/meetups.json').then(response => {
      return response.json()
    }).then(data => {
      const meetups = []

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false)
      setLoadedMeetUps(meetups)
    })

  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetUps} />
    </section>
  );
}

export default AllMeetupsPage;
