import React from 'react';
import {View, Text, Animated, Dimensions, ScrollView} from 'react-native';

const HEADER_HEIGHT = 50;

const Header = () => {
  return (
    <View
      style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'red',
        justifyContent: 'center',
        padding: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
        Header
      </Text>
    </View>
  );
};

const arr = [
  {
    id: 0,
    name: 'Hello',
  },
  {
    id: 1,
    name: 'World',
  },
  {
    id: 2,
    name: 'My ',
  },
  {
    id: 3,
    name: 'Name',
  },
  {
    id: 4,
    name: 'Is',
  },
];

const List = () => {
  const {width} = Dimensions.get('window');
  return arr.map((item) => (
    <View
      key={item.id}
      style={{
        marginBottom: 10,
        marginTop: 10,
        height: 150,
        width: width - 50,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 8,
      }}>
      <Text>{item.name}</Text>
    </View>
  ));
};

export default function App() {
  const scrollY = new Animated.Value(0);
  const diffClamp = new Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const translateY = diffClamp.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Animated.View
        style={{transform: [{translateY: translateY}], elevation: 4}}>
        <Header />
      </Animated.View>
      <ScrollView
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 50,
          }}>
          <List />
        </View>
      </ScrollView>
    </View>
  );
}
