import React, { useEffect } from 'react';
import { Text } from 'react-native';
// import RNSoundLevel from 'react-native-sound-level';

import {
  Container,
  NoisemeterContainer,
  Noisemeter,
  NoiseInfoContainer,
  NoisemeterPointer,
} from './styles';

// interface SoundData {
//   id: number;
//   rawValue: number;
//   value: number;
// }

const NoisemeterScreen: React.FC = () => {
  // const [soundData, setSoundData] = useState<SoundData>();

  useEffect(() => {
    // RNSoundLevel.starat();
    // RNSoundLevel.onNewFrame = (data: SoundData) => {
    //   setSoundData(data);
    // };
    // return () => RNSoundLevel.stop();
  }, []);

  return (
    <Container>
      <NoisemeterContainer>
        <Noisemeter colors={['#3bb273', '#e1bc29', '#e15554']}>
          <NoisemeterPointer />
        </Noisemeter>
      </NoisemeterContainer>
      <NoiseInfoContainer>
        <Text>90dB</Text>
      </NoiseInfoContainer>
    </Container>
  );
};

export default NoisemeterScreen;
