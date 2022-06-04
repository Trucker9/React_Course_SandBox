import React from 'react';
import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div onClick={props.closeFunc} className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.closeFunc}> Okay </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;