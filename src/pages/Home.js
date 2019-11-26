import React from 'react';
import {View, Text, Button} from 'react-native';

import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {styles} from '../assets';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.subTitleText}>Dev's</Text>
        <Text style={styles.paragraphText}>Club</Text>
        <Button
          title={'Badges'}
          onPress={() => {
            this.props.navigation.navigate('Badges');
          }}
        />
        <Button
          title={'Notification'}
          onPress={() => {
            this.props.navigation.navigate('Notification');
          }}
        />
        <Button
          title={'Profile'}
          onPress={() => {
            this.props.navigation.navigate('Profile');
          }}
        />
        <Button
          title={'Login'}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
        />
        <Button
          title={'Signin'}
          onPress={() => {
            this.props.navigation.navigate('Signin');
          }}
        />
      </View>
    );
  }
}

const home = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export {home as HomePage};
