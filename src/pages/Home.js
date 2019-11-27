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
              title: 'Estudo',
              points: '45',
              description: 'Teste teste teste',
              image: require('../images/estudo-blue.png'),
              isDone: true,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/estudo-blue.png')}
          />
          <Text style={{textAlign: 'center'}}>Estudo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Pesquisa',
              points: '30',
              description: 'Teste teste teste',
              image: require('../images/research-purple.png'),
              isDone: true,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/research-purple.png')}
          />
          <Text style={{textAlign: 'center'}}>Pesquisa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Puzzle',
              points: '50',
              description: 'Teste teste teste',
              image: require('../images/puzzle-blue.png'),
              isDone: true,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/puzzle-blue.png')}
          />
          <Text style={{textAlign: 'center'}}>Puzzle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Reciclagem',
              points: '55',
              description: 'Teste teste teste',
              image: require('../images/recicle-green.png'),
              isDone: true,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/recicle-green.png')}
          />
          <Text style={{textAlign: 'center'}}>Reciclagem</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderBadgerUndone() {
    return (
      <View style={css.badgerLine}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Assistir um filme',
              points: '25',
              description: 'Teste teste teste',
              image: require('../images/badge-undone.png'),
              isDone: false,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/badge-undone.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Evento de teconologia',
              points: '80',
              description: 'Teste teste teste',
              image: require('../images/badge-undone.png'),
              isDone: false,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/badge-undone.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Hackathon',
              points: '150',
              description: 'Teste teste teste',
              image: require('../images/badge-undone.png'),
              isDone: false,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/badge-undone.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Palestras',
              points: '35',
              description: 'Teste teste teste',
              image: require('../images/badge-undone.png'),
              isDone: false,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/badge-undone.png')}
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
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}
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
                  uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
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
          </TouchableOpacity>
          <Text style={css.conquers}>CONQUISTAS</Text>
          {this.renderBadger()}
          <Text style={css.conquers2}>PRÓXIMOS DESAFIOS</Text>
          {this.renderBadgerUndone()}
          {this.renderBadgerUndone()}
          {this.renderBadgerUndone()}
          {this.renderBadgerUndone()}
          {this.renderBadgerUndone()}
        </View>
      </ScrollView>
    );
  }
}

const css = StyleSheet.create({
  app: {
    flex: 1,
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
