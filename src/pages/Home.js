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
import {PaddingSize, ScreenSize, FontScreenSize} from '../helper/Helper';
import {color1, color2, color3, color4} from '../assets';

import LinearGradient from 'react-native-linear-gradient';

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
              title: 'Rocketseat React',
              points: '45',
              description:
                'Neste curso você irá aprender desde os primeiros conceitos em JavaScript como variáveis, condicionais e funções, até conceitos mais avançados como JavaScript assíncrono. Esse é um curso para você descobrir na prática como o JavaScript funciona e dar os primeiros passos na linguagem. E o melhor, na direção certa. Durante o curso nós iremos construir juntos uma aplicação web com JavaScript puro e HTML, aplicando os conceitos apresentados nas aulas para assimilar da melhor forma as features dessa linguagem.',
              image: require('../images/rocket-react.png'),
              isDone: true,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/rocket-react.png')}
          />
          <Text style={{fontSize: 10, textAlign: 'center'}}>Rocketseat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Rocketseat Javascript',
              points: '45',
              description:
                'Com este curso você vai levar suas aplicações web para o próximo nível e aprender na prática a desenvolver interfaces dinâmicas utilizando o ReactJS. Nós vamos construir juntos uma aplicação do zero utilizando essa ferramenta poderosa, e você vai descobrir todos os motivos para escolher essa tecnologia em meio à quantidade enorme de opções que existem no front-end.',
              image: require('../images/rocket-javascript.png'),
              isDone: true,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/rocket-javascript.png')}
          />
          <Text style={{fontSize: 10, textAlign: 'center'}}>Rocketseat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Estudo',
              points: '25',
              description:
                'Um método comum de estudo é ler páginas de um livro e, depois, fazer exercícios sobre o assunto lido, de modo a se testar a própria capacidade de compreensão e memorização. Também pode se estudar através da elaboração de resumos sobre o tema estudado, ou respondendo-se a questões sobre o tema formuladas por outra pessoa.',
              image: require('../images/estudo-blue.png'),
              isDone: true,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/estudo-blue.png')}
          />
          <Text style={{fontSize: 10, textAlign: 'center'}}>Estudo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Badges', {
              title: 'Pesquisa',
              points: '15',
              description:
                'Uma pesquisa e/ou investigação, é um processo sistemático para a construção do conhecimento humano, gerando novos conhecimentos, podendo também desenvolver, colaborar, reproduzir, refutar, ampliar, detalhar, atualizar, algum conhecimento pré-existente, servindo basicamente tanto para o indivíduo ou grupo de indivíduos que a realiza quanto para a sociedade na qual esta se desenvolve.',
              image: require('../images/research-green.png'),
              isDone: true,
            })
          }>
          <Image
            style={css.badgerImage}
            source={require('../images/research-green.png')}
          />
          <Text style={{fontSize: 10, textAlign: 'center'}}>Pesquisa</Text>
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
              description:
                'Um filme pode ser categorizado em diferentes tipos de gêneros ao mesmo tempo, sendo em um desses gêneros sempre o que é mais destacado durante o longa.Com a criação de cada vez mais filmes ao longo dos anos, esse meio procura abordar com o passar dos anos ,assuntos originais e inovadores com a intenção de atrair ainda mais pessoas a assistirem os filmes. Portanto os diferentes tipos de gêneros que já existem até então não podem ser considerados como uma lista definitiva de todos os gêneros que já foram criados.',
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
              description:
                'O Rocketseat Experience é o foguete que vai te levar direto para o próximo nível, trazendo uma experiência única na sua carreira e acelerando ao máximo a sua evolução como programador. O objetivo do evento é causar impacto no cenário de programação, e te colocar de frente com as melhores oportunidades do mercado.',
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
              description:
                'Hackathon, termo eventualmente aportuguesado para "hackaton," é uma maratona de programação na qual hackers se reúnem por horas, dias ou até semanas, a fim de explorar dados abertos, desvendar códigos e sistemas lógicos, discutir novas ideias e desenvolver projetos de software ou mesmo de hardware.',
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
              description:
                'As palestras têm um significativo papel fora das salas de aula. Prêmios acadêmicos e científicos geralmente incluem uma palestra como parte da homenagem, e conferências acadêmicas rotineiramente focam em keynotes, isto é, palestras. A palestra pública tem um longo histórico nas ciências e nos movimentos sociais. Sindicatos historicamente têm hospedado inúmeras palestras públicas e gratuitas em uma ampla variedade de temas.',
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
        <LinearGradient colors={[color2, color2]} style={css.app}>
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
        </LinearGradient>
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
