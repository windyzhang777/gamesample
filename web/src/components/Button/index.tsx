import React, {useCallback} from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  btnColor: string;
  clicked?: () => void;
  children?: any;
}

const Button = ({btnColor, clicked, children}: ButtonProps) => {
  const btnClasses =
    btnColor === 'light' ? [classes.Button, classes.Light] : [classes.Button, classes.Dark];

  const handleClick = useCallback(() => {
    if (clicked) {
      clicked();
    }
  }, [clicked]);

  let content = (
    <button className={btnClasses.join(' ')} onClick={handleClick}>
      {children}
    </button>
  );
  return <div>{content}</div>;
};

export default Button;
