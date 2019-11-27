import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import {ScreenSize, FontScreenSize} from '../helper/Helper';
import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {color1, color2, color3, color4} from '../assets';
import LinearGradient from 'react-native-linear-gradient';

const isIos = Platform.OS === 'ios';

class NotificationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rocketseat: {
        title: 'Nova conquista!',
        description:
          'Voce recebeu uma conquisa por concluir o curso da Rocketseat',
      },
      hotmart: {
        title: 'Nova conquista!',
        description: 'Voce recebeu uma conquisa por concluir o hot summer 2020',
      },
      estudo: {
        title: 'Nova conquista!',
        description:
          'Voce recebeu uma conquisa por concluir a tarefa de estudo ',
      },
      pesquisa: {
        title: 'Nova conquista!',
        description:
          'Voce recebeu uma conquisa por concluir a tarefa de pesquisa ',
      },
      bemvindo: {
        title: 'Bem vindo!!',
        description:
          'Seja bem vindo a maior plataforma de integração de tecnologia',
      },
    };
  }

  renderCard = data => {
    return (
      <LinearGradient colors={[color3, color4]} style={css.card}>
        <Text style={css.title}>{data.title}</Text>
        <Text style={css.description}>{data.description}</Text>
      </LinearGradient>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={css.app}>
          {this.renderCard(this.state.rocketseat)}
          {this.renderCard(this.state.hotmart)}
          {this.renderCard(this.state.estudo)}
          {this.renderCard(this.state.pesquisa)}
          {this.renderCard(this.state.bemvindo)}
        </View>
      </ScrollView>
    );
  }
}

const css = StyleSheet.create({
  app: {
    flex: 1,
    height: ScreenSize(2, 100),
    backgroundColor: color2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: isIos ? 33 : 0,
  },
  card: {
    width: '90%',
    height: '20%',
    borderRadius: 25,
    padding: 25,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: color1,
  },
  description: {
    fontSize: 14,
    color: color2,
  },
  conquers: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color1,
    paddingBottom: 20,
  },
});

const notification = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationPage);
export {notification as NotificationPage};
