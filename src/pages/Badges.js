import React from 'react';
import {View, Text, Button} from 'react-native';

import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {styles} from '../assets';

class BadgesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.subTitleText}>Tela dos Badges</Text>
        <Button
          title={'Home'}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

const badges = connect(mapStateToProps, mapDispatchToProps)(BadgesPage);
export {badges as BadgesPage};
