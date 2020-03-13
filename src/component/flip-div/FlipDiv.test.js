import React from 'react';
import { render } from '@testing-library/react';
import FlipDiv, {Front, Back} from './FlipDiv';

test('renders component', () => {
  const { getByText } = render(
    <FlipDiv>
      <Front>
          Front test here
      </Front>
      <Back>
        Back test here
      </Back>
    </FlipDiv>

  );
  const front = getByText("Front test here");
  expect(front).toBeDefined();

  const back = getByText("Back test here");
  expect(back).toBeDefined();
});
