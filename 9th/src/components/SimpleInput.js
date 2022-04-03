import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // We simply check for these two.
  const name_IsValid = enteredName.trim() !== '';
  const name_touchedInvalid = !name_IsValid && enteredNameTouched;

  // We didn't do ant side task. so we can't refactor our code like this.
  let formIsValid = false;
  // If we had more input fields in our form, we would've added them here.
  if (name_IsValid) formIsValid = true;
  else formIsValid = false;

  const nameInChangeHandler = (e) => {
    // Re evaluate in every key stroke.
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!name_IsValid) return;
    // Resetting after submission
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const formClass = name_touchedInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          //  ref={nameInRef}
          onChange={nameInChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
          // Feeding back
          value={enteredName}
        />
      </div>
      {name_touchedInvalid ? <p className="error-text">Invalid name</p> : ''}
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={formSubmissionHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
