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
        <TouchableOpacity>
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
            </View>
            <View style={css.card}>
              <View>
                <Text style={css.title}>Prêmio de $5 Dólares na PlayStore</Text>
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
            </View>
            <View style={css.card}>
              <View>
                <Text style={css.title}>
                  Prêmio de $10 Dólares na PlayStore
                </Text>
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
            </View>
          </View>
        </TouchableOpacity>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
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
});

const jobs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobsPage);
export {jobs as JobsPage};
