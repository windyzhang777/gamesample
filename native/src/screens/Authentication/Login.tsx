import React from 'react';
import {Button} from 'react-native';

const Login = ({login}) => <Button onPress={login} title="Login" accessibilityLabel="Login" />;

export default Login;
