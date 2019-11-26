import React from 'react';
import {View, Text} from 'react-native';

import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {styles} from '../assets';
import {
  ButtonBasic,
  ButtonIcon,
  ButtonOutside,
  InputBasic,
  InputIcon,
  InputOutline,
} from '../components';

class JobsPage extends React.Component {
  constructor(props) {
    super(props);

    this.props.allowFontScaling = false;

    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Title</Text>
          <Text style={styles.subTitleText}>Sub Title</Text>
          <Text style={styles.paragraphText}>Paragraph</Text>
          <Text style={styles.simpleText}>{this.state.text}</Text>
          <InputBasic
            placeholder={'Input Basic'}
            onChangeText={value => {
              this.setState({
                text: value,
              });
            }}
          />
          <InputIcon name={'account'} text={'Input With Icon'} />
          <InputOutline text={'Input Outline'} />
          <View style={styles.rowContainer}>
            <ButtonBasic
              name={'Back'}
              onPress={() => this.props.navigation.goBack()}
            />
            <ButtonIcon
              name={'plus'}
              onPress={() => this.props.navigation.goBack()}
            />
            <ButtonOutside
              name={'Back'}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const jobs = connect(mapStateToProps, mapDispatchToProps)(JobsPage);
export {jobs as JobsPage};
