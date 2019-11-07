import React, {useState, useEffect} from 'react';

import LottieView from 'lottie-react-native';

import {Animated, Easing, Button, View} from 'react-native';

import cat from './catHungry.json';

const Animatedo = () => {
  const value = new Animated.Value(0);
  const [progress] = useState(value);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start();
  });

  return (
    <>
      <LottieView source={cat} progress={progress} />
    </>
  );
};

export default Animatedo;
