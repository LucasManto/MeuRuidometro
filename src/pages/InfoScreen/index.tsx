import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Container, InfoContainer, InfoTitle, InfoParagraph } from './styles';

interface Info {
  title: string;
  text: string[];
}

const InfoScreen: React.FC = () => {
  const { params } = useRoute();
  const { text, title } = params as Info;

  return (
    <Container>
      <InfoContainer>
        <InfoTitle>{title}</InfoTitle>

        {text.map((paragraph, index) => (
          <InfoParagraph key={index}>{paragraph}</InfoParagraph>
        ))}
      </InfoContainer>
    </Container>
  );
};

export default InfoScreen;
