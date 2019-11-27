import React from 'react';
import {View, Text, Button, Image, StyleSheet, Platform} from 'react-native';

import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {styles} from '../assets';
import {color1, color2, color3, color4} from '../assets';

class BadgesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      points: '',
      description: '',
    };
  }

  componentDidMount() {
    const title = this.props.navigation.getParam('title', '');
    const image = this.props.navigation.getParam('image', '');
    const points = this.props.navigation.getParam('points', '');
    const description = this.props.navigation.getParam('description', '');

    this.setState({
      title,
      points,
      description,
      image,
    });
  }

  render() {
    const isIos = Platform.OS === 'ios';

    return (
      <View style={styles.app2}>
        <View
          style={{
            flexDirection: 'row',
            width: '85%',
            maxWidth: '100%',
            height: '23%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: isIos ? 33 : 0,
          }}>
          <View
            style={{
              maxWidth: '75%',
              width: '75%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: color3,
              }}>
              {this.state.title}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: color4,
              }}>
              Pontos: {this.state.points}
            </Text>
          </View>
          <View style={{padding: '3%'}}>
            <Image
              style={css.userIcon}
              source={{
                uri: this.state.image,
              }}
            />
          </View>
        </View>
        <Text style={css.conquers}>DESCRIÇÃO</Text>
        <Button
          title={'Sair'}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

const css = StyleSheet.create({
  app: {
    backgroundColor: color2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  conquers: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color1,
    paddingBottom: 20,
  },
  conquers2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color1,
    padding: 20,
  },
  userIcon: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: color1,
  },
  badgerImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  badgerIcon: {
    width: 60,
    height: 60,
    flexDirection: 'row',
    borderRadius: 100,
    paddingLeft: 5,
    paddingRight: 5,
  },
  badgerLine: {
    width: '90%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const badges = connect(mapStateToProps, mapDispatchToProps)(BadgesPage);
export {badges as BadgesPage};
