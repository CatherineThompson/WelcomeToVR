import React from 'react'
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model
} from 'react-vr'

export default class WelcomeToVR extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      angle: 0
    }
  }

  render () {
    return (
      <View style={{}}>
        <Pano source={asset('chess-world.jpg')}/>
        <Model
          source={{
            obj: asset('canon_jouet.obj'),
            mtl: asset('canon_jouet.mtl')
          }}
          style={{
            position: 'absolute',
            transform: [
              { translate: [0, -2, -1.5] },
              { rotateX: this.state.angle },
              { rotateY: -90 },
              { scale: 0.13 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset('Pirate Ship.obj'),
            mtl: asset('Pirate Ship.mtl')
          }}
          style={{
            position: 'absolute',
            transform: [
              { translate: [0, -2, -200] },
              { scale: 0.01 }
            ]
          }}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR)

/* <Text
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
</Text> */
