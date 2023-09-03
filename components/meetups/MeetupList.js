import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  //console.log(props.meetups);
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          
        />
      ))}
    </ul>
  );
}

export default MeetupList;