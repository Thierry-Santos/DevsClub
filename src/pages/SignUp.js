import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {styles} from '../assets';
import logo from '../images/logo-devsclub.png';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.simpleShadow}>
          <Image style={{width: 150, height: 150}} source={logo} />
        </View>
        <View style={{margin: 10}}>
          <View style={[styles.inputBasic, styles.simpleShadow]}>
            <TextInput
              style={[styles.inputBasicText, styles.pad5, styles.padH5]}
              placeholder="Nome"
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <View style={[styles.inputBasic, styles.simpleShadow]}>
            <TextInput
              style={[styles.inputBasicText, styles.pad5, styles.padH5]}
              keyboardType="email-address"
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <View style={[styles.inputBasic, styles.simpleShadow]}>
            <TextInput
              style={[styles.inputBasicText, styles.pad5, styles.padH5]}
              placeholder="Senha"
              secureTextEntry
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity
            style={[styles.basicButton, styles.simpleShadow]}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text style={[styles.basicButtonText, styles.pad5, styles.padH5]}>
              Enviar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity
            style={[styles.outsideButton]}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text style={[styles.outsideButtonText, styles.pad5, styles.padH5]}>
              Já tenho conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const signup = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPage);
export {signup as SignUpPage};
