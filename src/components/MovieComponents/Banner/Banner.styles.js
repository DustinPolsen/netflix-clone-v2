import styled from 'styled-components';
import { COLORS } from '../../../utils/generalUtils';

export const StyledBanner = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
  background-size: cover;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-position: center center;

  .banner__contents {
    padding: 0% 4%;
    margin-left: 18px;
    padding-top: 140px;
    height: 190px;
  }

  .banner__title {
    font-size: clamp(1rem, 6vw, 3rem);
    font-weight: 800;
    padding-bottom: 0.3rem;
  }

  .banner__descriptionContainer {
    display: block;
    margin: 0.5vw 0 0 0;
  }

  .banner__description {
    width: 45rem;
    line-height: 1.3;
    margin: 0.5vw 0 0 0;
    font-size: clamp(0.6rem, 2vw, 0.8rem);
    max-width: 360px;

    font-weight: 400;
    line-height: normal;
    width: 98%;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  }

  .banner__buttons {
    padding-top: 1rem;
    white-space: nowrap;
    display: flex;
    line-height: 88%;
    position: relative;
    z-index: 10;
  }

  .banner__button {
    margin-right: 1rem;
    margin-bottom: 1rem;
    align-items: center;
    appearance: none;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex-shrink: 0;

    justify-content: center;
    opacity: 1;
    padding: 5px 15px;
    position: relative;

    user-select: none;
    word-break: break-word;
    white-space: nowrap;

    background-color: white;
    color: black;

    transition: padding 0.4s ease-in;
    @media screen and (max-width: 300px) {
      padding: 5px 3vw;
    }

    span {
      color: black;
      font-size: clamp(0.5rem, 5vw, 0.75rem);
      font-weight: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: block;
      font-weight: bold;
    }

    &:focus {
      outline: none;
    }
  }

  .banner__button.info {
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
    span {
      color: white;
    }
  }

  .banner__button:hover {
    background-color: ${COLORS.EGGSHELL_WHITE};
    transition: all 0.06s;
  }

  .banner__button.info:hover {
    background-color: rgba(90, 90, 90, 0.6);
    transition: all 0.06s;
  }

  .banner--fadeBottom {
    height: 7.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
  }
`;
