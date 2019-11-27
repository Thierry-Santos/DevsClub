import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {styles} from '../assets';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.app}>
        <View style={[styles.simpleShadow, styles.avatarView]}>
          <Image
            style={{width: 150, height: 150, borderRadius: 75}}
            source={{
              uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            }}
          />
        </View>
        <View style={{margin: 10}}>
          <View style={[styles.inputBasic, styles.simpleShadow]}>
            <TextInput
              style={[styles.inputBasicText, styles.pad5, styles.padH5]}
              placeholder="Nome"
              value="Michel Teló"
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
              value="micheltelo@gmail.com"
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <View style={[styles.inputBasic, styles.simpleShadow]}>
            <TextInput
              style={[styles.inputBasicText, styles.pad5, styles.padH5]}
              placeholder="Nova Senha"
              secureTextEntry
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <View style={[styles.inputBasic, styles.simpleShadow]}>
            <TextInput
              style={[styles.inputBasicText, styles.pad5, styles.padH5]}
              placeholder="Repetir Senha"
              secureTextEntry
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <TouchableOpacity
            style={[styles.basicButton, styles.simpleShadow]}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text style={[styles.basicButtonText, styles.pad5, styles.padH5]}>
              Enviar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
export {profile as ProfilePage};
