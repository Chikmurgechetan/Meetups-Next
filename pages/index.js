import { MongoClient } from 'mongodb';

import MeetupList from '@/components/meetups/MeetupList';




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
