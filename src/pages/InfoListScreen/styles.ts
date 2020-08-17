import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Data } from './index';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #123123;
`;

export const InfoList = styled(FlatList as new () => FlatList<Data>)``;

export const InfoItem = styled(RectButton)`
  background: #f0f0f0;
  padding: 20px;
  height: 100px;

  flex-direction: row;
  align-items: center;
`;
