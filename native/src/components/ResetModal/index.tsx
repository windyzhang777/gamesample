import React, {useState} from 'react';
import {Text, SafeAreaView, Modal} from 'react-native';

import ShineButton from 'src/components/buttons/ShineButton';
import styles from './ResetModal.stylesheet';

interface ResetModalProps {
  resetGame: () => void;
  message: string;
}

const ResetModal = ({resetGame, message}: ResetModalProps) => {
  const [isVisible, setVisible] = useState(true);
  const handleReset = () => {
    resetGame();
    setVisible(false);
  };
  const sendToHome = () => {
    // Send to home
    setVisible(false);
  };
  return (
    <Modal animationType="slide" visible={isVisible} onDismiss={() => setVisible(false)}>
      <SafeAreaView style={styles.ModalView}>
        <Text style={styles.Text}>{message}</Text>
        <Text style={styles.Text}>Would you like to play again?</Text>
        <ShineButton
          borderRadius={25}
          onPress={handleReset}
          style={[styles.Button]}
          underlayColor={'#E23B37'}
          backgroundColor={'#E23B37'}
          buttonContent={<Text style={styles.ButtonText}>Play Again</Text>}
        />
        <ShineButton
          onPress={sendToHome}
          borderRadius={25}
          style={[styles.Button]}
          underlayColor={'#E23B37'}
          backgroundColor={'#E23B37'}
          buttonContent={<Text style={styles.ButtonText}>Quit</Text>}
        />
      </SafeAreaView>
    </Modal>
  );
};
export default ResetModal;
