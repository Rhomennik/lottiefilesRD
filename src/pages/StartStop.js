import React from 'react';

import LottieView from 'lottie-react-native';
import {Button} from 'react-native';

import cat from './catHungry.json';

const StartStop = animation => {
  const start = () => {
    animation.play();
    // animation.play(30, 120);
  };
  const stop = () => {
    animation.reset();
  };

  return (
    <>
      <LottieView
        ref={animate => {
          animation = animate;
        }}
        source={cat}
      />
      <Button title="Start" onPress={start} />
      <Button title="Stop" onPress={stop} />
    </>
  );
};

export default StartStop;
