import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const InfoContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    // paddingBottom: 16,
  },
})``;

export const InfoTitle = styled.Text`
  font-size: 32px;
  align-self: center;
  margin-bottom: 16px;
`;

export const InfoParagraph = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  text-align: justify;
`;
