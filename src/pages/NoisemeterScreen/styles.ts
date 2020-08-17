import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NoisemeterContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const Noisemeter = styled(LinearGradient)`
  width: 70%;
  height: 80%;
  border: 0;
  border-radius: 8px;
`;

export const NoisemeterPointer = styled.View`
  position: absolute;
  width: 100%;
  height: 2%;
  background-color: #00000099;
  z-index: 3;
  border-radius: 4px;
  top: 90%;
`;

export const NoiseInfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
