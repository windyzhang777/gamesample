import React, {useState} from 'react';
import {TextInput} from 'react-native';
import styles from './SudokuInput.stylesheet';

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

  const onChanged = (newText: string) => {
    if (/^([1-9]{1,})$/.test(newText) && text === '') {
      setText(newText);
    } else if (newText === '') {
      setText('');
    }
  };

  return (
    <TextInput
      style={styles.TextInput}
      keyboardType="number-pad"
      onChangeText={(newText) => onChanged(newText)}
      value={defaultText === '0' ? text : defaultText}
      defaultValue={defaultText === '0' ? '' : defaultText}
      maxLength={1}
      editable={defaultText === '0'}
    />
  );
};

export default SudokuInput;
