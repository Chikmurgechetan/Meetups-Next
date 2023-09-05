import { MongoClient } from 'mongodb';

import MeetupList from '@/components/meetups/MeetupList';



const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://content.skyscnr.com/m/19c1f54952cdf28a/original/GettyImages-532519763.jpg?resize=800px:600px&quality=100',
    address: 'Agra',
    description: 'This is My First meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Kedarnath_temple_1880%27s.jpg',
    address: 'Kedarnath',
    description: 'This is My Second Meetup',
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Krishna_raja_sagara_dam.JPG',
    address: 'KRS DAM',
    description: 'This is my Third Meetup',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}


export async function getStaticProps() {
  // Fetch data from an API or an external source
  const client = await MongoClient.connect('mongodb+srv://charandata:iN1ceAN9gDwnJC49@cluster0.woi1pck.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

   client.close(); 

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
         id:meetup._id.toString(),

      }) )
    },
    revalidate: 1
  };
}


export default HomePage;
