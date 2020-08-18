import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const NoisemeterContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const Noisemeter = styled(LinearGradient).attrs({
  colors: ['#e15554', '#e1bc29', '#3bb273'],
})`
  width: 70%;
  max-width: 200px;
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
  min-width: 50px;
`;

export const NoiseLevel = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
  color: #3bb273;
`;

export const NoiseDescription = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
