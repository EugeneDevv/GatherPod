import MeetupList from "../components/meetups/MeetUpList";

const DUMMY_DATA = [
  {
    id: 'm2',
    title: 'This the first meetup',
    image:
      'https://images.freeimages.com/images/small-previews/ce9/city-life-1172828.jpg',
    address: 'Meetup Street 90, 126789 Meetup city',
    description:
      'This is the first, amazing meetup which you definitely should not miss',
  },
  {
    id: 'm56',
    title: 'This the second meetup',
    image: 'https://assets.unenvironment.org/2020-02/sustainable-cities.jpg',
    address: 'Meetup Street 180, 126789 Meetup city',
    description:
      'This is the second, amazing meetup which you definitely should not miss',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA}/>
    </section>
  );
}

export default AllMeetupsPage;
