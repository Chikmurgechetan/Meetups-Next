import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Fragment } from "react";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://content.skyscnr.com/m/19c1f54952cdf28a/original/GettyImages-532519763.jpg?resize=800px:600px&quality=100"
      title="First Meetup"
      address="Agraga(Delhi)"
      description="This is a first meetup"
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: 'm1', // Define the dynamic parameter 'meetupid'
        },
      },
      {
        params: {
          meetupid: 'm2', // Define another dynamic parameter 'meetupid'
        },
      },
      {
        params: {
          meetupid: 'm3', // Define another dynamic parameter 'meetupid'
        },
      },
    ],
  };
}


export async function getStaticProps(context) {
  // fetch data for a sing meetup
  const meetupId = context.params.meetupid;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://content.skyscnr.com/m/19c1f54952cdf28a/original/GettyImages-532519763.jpg?resize=800px:600px&quality=100",
        id: meetupId,
        title: "First Meetup",
        address: "Agraga(Delhi)",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
