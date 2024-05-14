import { View, Text } from 'react-native'
import React from 'react'
import { Camera, useCameraDevice } from 'react-native-vision-camera'

const ItemScreen = () => {

  const [cameraSide, setCameraSide] = useCameraDevice('back');

  return (
    <View>
      <Text>ItemScreen</Text>
      <Camera 
        device={cameraSide}
        
      />
    </View>
  )
}

export default ItemScreen