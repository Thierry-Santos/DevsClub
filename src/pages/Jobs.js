import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

import {mapDispatchToProps, mapStateToProps} from '../reducers/Functions';
import {connect} from 'react-redux';
import {styles, color1, color2, color3, color4} from '../assets';
import {
  ButtonBasic,
  ButtonIcon,
  ButtonOutside,
  InputBasic,
  InputIcon,
  InputOutline,
} from '../components';
import {ScreenSize} from '../helper/Helper';
import hotmart from '../images/hot-summer-2020.png';
import google5 from '../images/google-play-5.png';
import google10 from '../images/google-play-5.png';

const isIos = Platform.OS === 'ios';

class JobsPage extends React.Component {
  constructor(props) {
    super(props);

    this.props.allowFontScaling = false;
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={css.app}>
            <View style={css.card}>
              <View>
                <Text style={css.title}>Hotmart Summer 2020</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View>
                  <Image style={{width: 100, height: 100}} source={hotmart} />
                </View>
                <View style={{justifyContent: 'center', marginLeft: 10}}>
                  <Text style={css.description}>Hotmart</Text>
                </View>
              </View>
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
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    Rocketseat
                  </Text>
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
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    Rocketseat
                  </Text>
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
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    Estudo
                  </Text>
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
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    Pesquisa
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={css.card}>
              <View>
                <Text style={css.title}>$5 Dólares na PlayStore</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View>
                  <Image style={{width: 100, height: 100}} source={google5} />
                </View>
                <View style={{justifyContent: 'center', marginLeft: 10}}>
                  <Text style={css.description}>Google</Text>
                </View>
              </View>
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
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    Rocketseat
                  </Text>
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
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    Rocketseat
                  </Text>
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
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    Estudo
                  </Text>
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
            </View>
            <View style={css.card}>
              <View>
                <Text style={css.title}>$10 Dólares na PlayStore</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View>
                  <Image style={{width: 100, height: 100}} source={google10} />
                </View>
                <View style={{justifyContent: 'center', marginLeft: 10}}>
                  <Text style={css.description}>Google</Text>
                </View>
              </View>
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
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    Pesquisa
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const css = StyleSheet.create({
  app: {
    flex: 1,
    height: ScreenSize(2, 150),
    backgroundColor: color2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: isIos ? 33 : 15,
  },
  card: {
    width: '90%',
    height: '25%',
    borderRadius: 25,
    padding: 25,
    backgroundColor: color3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: color2,
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    color: color2,
    fontWeight: 'bold',
  },
  conquers: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color1,
    paddingBottom: 20,
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
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const jobs = connect(mapStateToProps, mapDispatchToProps)(JobsPage);
export {jobs as JobsPage};
