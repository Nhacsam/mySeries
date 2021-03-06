import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { LoginButton } from 'mySeries/src/components';
import appStyle from 'mySeries/src/appStyle';

const styles = StyleSheet.create({
  fieldsContent: {
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  input: {
    height: 50,
    alignSelf: 'stretch',

    borderColor: appStyle.colors.lightPlaceholder,
    borderWidth: 1,
    borderRadius: 6,

    color:  appStyle.colors.lightText,

    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    fontSize: 20,
  },
});

class Login extends Component {
  render() {
    return (
      <View style={styles.fieldsContent}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={this.props.onUsernameChange}
          placeholderTextColor={appStyle.colors.lightPlaceholder}
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => this.refs.password.focus()}
          />
        <TextInput
          ref='password'
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={this.props.onPasswordChange}
          placeholderTextColor={appStyle.colors.lightPlaceholder}
          onSubmitEditing={() => this.props.sendLogin()}
          returnKeyType="send"
          />
        <LoginButton onPress={() => this.props.sendLogin()}>Send</LoginButton>
      </View>
    );
  }
}

Login.propTypes = {
  onUsernameChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  sendLogin: PropTypes.func,
};

export default Login;
