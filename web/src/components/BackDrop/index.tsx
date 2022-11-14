import React from 'react';
import classes from './BackDrop.module.css';

interface BackDropProps {
  isNavOpen: boolean;
  closeDrawerCallback?: () => void;
}

const BackDrop = ({isNavOpen, closeDrawerCallback}: BackDropProps) => {
  return isNavOpen ? <div className={classes.BackDrop} onClick={closeDrawerCallback} /> : null;
};

export default BackDrop;
