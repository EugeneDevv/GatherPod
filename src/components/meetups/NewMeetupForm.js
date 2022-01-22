import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
function NewMeetupForm() {
  function submitHandler(event) {
    event.preventDefault();
    
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' id='image' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>DEscription</label>
          <textarea id='description' rows='5' />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>  
  );
}

export default NewMeetupForm;
