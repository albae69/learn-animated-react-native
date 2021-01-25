import React from 'react';
import {View, Text, Animated} from 'react-native';

export default function App() {
  const position = new Animated.ValueXY({x: 0, y: 0});
  Animated.timing(position, {
    useNativeDriver: true,
    toValue: {
      x: 150,
      y: 250,
    },
    delay: 1000,
  }).start();

  const rotate = position.x.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.View
        style={{
          transform: [
            {translateX: position.x},
            {translateY: position.y},
            {rotate: rotate},
          ],
          height: 80,
          width: 80,
          backgroundColor: 'lightgray',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello world!</Text>
      </Animated.View>
    </View>
  );
}
