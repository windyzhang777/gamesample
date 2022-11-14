import React, {useState} from 'react';
import classes from './SudokuInput.module.css';

interface SudokuInputProps {
  defaultValue: string;
  x: number;
  y: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SudokuInput = ({defaultValue, x, y}: SudokuInputProps) => {
  const [text, setText] = useState('');
  const [defaultText, setDefaultText] = useState(defaultValue);

  if (defaultText !== defaultValue) {
    setDefaultText(defaultValue);
  }

  const onChanged = (event) => {
    const newText = event.target.value;
    if (/^([1-9]{1,})$/.test(newText) && text === '') {
      setText(newText);
    } else if (newText === '') {
      setText('');
    }
  };

  return (
    <>
      {defaultText === '0' ? (
        <input
          className={classes.sudokuInputWeb}
          maxLength={1}
          value={defaultText === '0' ? text : defaultText}
          onChange={onChanged}></input>
      ) : (
        <input
          className={classes.sudokuInputWeb}
          maxLength={1}
          value={defaultText === '0' ? text : defaultText}
          onChange={onChanged}
          readOnly></input>
      )}
    </>
  );
};

export default SudokuInput;
