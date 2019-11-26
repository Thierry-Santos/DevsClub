import React from 'react';
import {View, Text, Button} from 'react-native';

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
        <Text style={styles.subTitleText}>Pagina para editar Perfil</Text>
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

const profile = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
export {profile as ProfilePage};
