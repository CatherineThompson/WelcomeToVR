import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Sphere,
  Model
} from 'react-vr'

export default class WelcomeToVR extends React.Component {
  render () {
    return (
      <View style={{}}>
        <Pano source={asset('chess-world.jpg')}/>
        <Model
          source={{
            obj: asset('canon_jouet.obj'),
            mtl: asset('canon_jouet.mtl')
          }}
          style={{position: 'absolute', transform: [{translate: [0, 0, -6]}]}}
        />
        <Text
          style={{
            backgroundColor: 'orange',
            fontSize: 0.5,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Cathy's Test App
        </Text>

      </View>
    )
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR)
