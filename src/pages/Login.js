import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';

import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {styles} from '../assets';
import logo from '../images/logo-devsclub.png';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: '',
    senha: '',
  };
  handleSubmit = async () => {
    if (
      this.state.email !== 'teste@teste.com' ||
      this.state.senha !== 'testando'
    ) {
      Alert.alert('E-mail ou Senha incorretos! Por favor verifique seus dados');
    } else {
      this.props.navigation.navigate('Home');
    }
  };

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
              placeholder="Informe o seu E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={this.state.email}
              onChangeText={email => this.setState({email})}
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <View style={[styles.inputBasic, styles.simpleShadow]}>
            <TextInput
              style={[styles.inputBasicText, styles.pad5, styles.padH5]}
              placeholder="Informe a sua Senha"
              secureTextEntry
              value={this.state.senha}
              onChangeText={senha => this.setState({senha})}
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity
            style={[styles.basicButton, styles.simpleShadow]}
            onPress={this.handleSubmit}>
            <Text style={[styles.basicButtonText, styles.pad5, styles.padH5]}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity
            style={[styles.outsideButton]}
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}>
            <Text style={[styles.outsideButtonText, styles.pad5, styles.padH5]}>
              Não tenho conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
export {login as LoginPage};
