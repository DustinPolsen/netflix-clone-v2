import { CircularProgressLoading } from './CircularProgressLoading';
import NetflixLogo from '@/assets/netflix-logo.png';
import styled from 'styled-components';
import { COLORS } from '../../../utils/generalUtils';

const Wrapper = styled.div`
  background: ${COLORS.BLACK};

  // how to center a div : ^)
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;

  img {
    width: 25vw;
  }
`;

export default function NetflixLoading() {
  return (
    <Wrapper className="centered">
      <img src={NetflixLogo} alt="netflix-logo" />
      <CircularProgressLoading thickness={1} size={'10vw'} />
    </Wrapper>
  );
}
