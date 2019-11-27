import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {color1, color2, color3, color4} from '../assets';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBadger() {
    return (
      <View style={css.badgerLine}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'BootCamp Rocketseat',
              points: '45',
              description: 'Teste teste teste',
              image: 'https://img.icons8.com/officel/2x/person-male.png',
            })
          }>
          <Image
            style={css.badgerImage}
            source={{
              uri: 'https://img.icons8.com/officel/2x/person-male.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'BootCamp Rocketseat',
              points: '45',
              description: 'Teste teste teste',
              image: 'https://img.icons8.com/officel/2x/person-male.png',
            })
          }>
          <Image
            style={css.badgerImage}
            source={{
              uri: 'https://img.icons8.com/officel/2x/person-male.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'BootCamp Rocketseat',
              points: '45',
              description: 'Teste teste teste',
              image: 'https://img.icons8.com/officel/2x/person-male.png',
            })
          }>
          <Image
            style={css.badgerImage}
            source={{
              uri: 'https://img.icons8.com/officel/2x/person-male.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'BootCamp Rocketseat',
              points: '45',
              description: 'Teste teste teste',
              image: 'https://img.icons8.com/officel/2x/person-male.png',
            })
          }>
          <Image
            style={css.badgerImage}
            source={{
              uri: 'https://img.icons8.com/officel/2x/person-male.png',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const isIos = Platform.OS === 'ios';

    return (
      <ScrollView>
        <View style={css.app}>
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
            <View style={{padding: '3%'}}>
              <Image
                style={css.userIcon}
                source={{
                  uri: 'https://img.icons8.com/officel/2x/person-male.png',
                }}
              />
            </View>
            <View
              style={{
                maxWidth: '75%',
                width: '75%',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: 'bold',
                  color: color3,
                }}>
                Usuário Teste
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  color: color4,
                }}>
                Dev Recruta
              </Text>
            </View>
          </View>
          <Text style={css.conquers}>CONQUISTAS</Text>
          {this.renderBadger()}
          {this.renderBadger()}
          <Text style={css.conquers2}>PRÓXIMOS DESAFIOS</Text>
          {this.renderBadger()}
          {this.renderBadger()}
          {this.renderBadger()}
          {this.renderBadger()}
          {this.renderBadger()}
        </View>
      </ScrollView>
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

const home = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export {home as HomePage};
