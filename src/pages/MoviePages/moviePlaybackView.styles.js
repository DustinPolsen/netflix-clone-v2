import styled from 'styled-components';
import { COLORS } from '../../utils/generalUtils';

export const StyledVideo = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .video__arrowContainer {
    display: flex;
    align-items: center;
    position: absolute;
    left: 20px;
    top: 60px;
    padding: 10px;

    z-index: 3;
    color: ${COLORS.WHITE};

    .video__arrowIcon {
      z-index: 4;
      font-size: clamp(30px, 5vw, 50px);
      margin-right: 5px;
      color: ${COLORS.WHITE};
      transition: transform 0.2s ease-out;

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: transform 0.2s ease-in;
      }
    }

    .video__backText {
      visibility: hidden;
      margin-left: 20px;
      transition: all 0.2s ease-out;
    }

    &.active {
      .video__backText {
        visibility: inherit;
        transform: scale(1.3);
        transition: all 0.2s ease-in;
      }
    }
  }
`;
