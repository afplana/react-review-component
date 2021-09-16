import React, { FunctionComponent } from 'react';
import { Review } from './Review'
import { Container, Headline2, Main, Title, Underline } from './styled';

const App: FunctionComponent = () => {
  return (
    <Main>
      <Container>
        <Title>
          <Headline2>Reviews</Headline2>
          <Underline />
        </Title>
        <Review />
      </Container>
    </Main>
  );
}

export default App;
