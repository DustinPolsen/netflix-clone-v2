import { COLORS } from '../../../utils/generalUtils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${COLORS.BRIGHT_BLACK};

  .profiles__container {
    max-width: 80%;
  }

  .profiles__gateLabel {
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 30px;

    @media screen and (min-width: 800px) {
      font-size: 3.5vw;
    }
  }

  .profiles__list {
    list-style-type: none;
    padding: 0;
    margin: 2em 0;
    opacity: 1;
    transition: opacity 0.4s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
  }

  .manage__button {
    background-color: ${({ manageMode }) =>
      manageMode ? `${COLORS.WHITE}` : 'transparent'};
    color: ${({ manageMode }) =>
      manageMode ? `${COLORS.VERY_BRIGHT_BLACK}` : 'grey'};

    display: block;
    text-align: center;
    margin: 2em auto 1em auto;
    font-size: 13px;
    border: 1px solid grey;
    text-transform: uppercase;
    padding: 0.5em 1.5em;
    letter-spacing: 2px;
    cursor: pointer;
    width: fit-content;
    font-weight: 650;

    &:hover {
      cursor: pointer;
      color: ${COLORS.WHITE};
      background-color: ${({ manageMode }) =>
        manageMode ? `${COLORS.RED}` : 'transparent'};
      border: ${({ manageMode }) =>
        !manageMode ? `1px solid ${COLORS.WHITE}` : `1px solid ${COLORS.RED}`};
    }

    @media screen and (min-width: 750px) {
      font-size: 1.2vw;
      font-weight: 700;
    }
  }
`;

export const UserIcon = styled.li`
  &:not(:last-child) {
    margin: 0 2vw 0 0;
  }

  &:hover {
    .profile__userImage {
      background-color: ${({ isCreateProfile }) =>
        isCreateProfile && COLORS.WHITE};
    }

    .profile__userImage:after {
      content: '';
      display: block;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      border: 0.12rem solid white;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  .profiles__avatarWrapper {
    display: block;
    position: relative;
  }

  .profile__userImage {
    height: 10vw;
    width: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-width: 84px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    text-decoration: none;
    background-repeat: no-repeat;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-color: ${({ isCreateProfile }) =>
      isCreateProfile ? 'transparent' : '#333'};
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: none;
    background-image: ${({ userImg }) => `url(${userImg})`};
    opacity: ${({ manageMode }) => manageMode && '.5'};
  }

  .profile__pencilIcon {
    color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.WHITE};
    border-radius: 50%;
    padding: 0.2em;
  }

  .profile__addIcon {
    color: ${COLORS.GREY};
    font-size: 7vw;
    border-radius: 50%;
    padding: 0.2em;
  }

  .profiles__pencilIcon--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile__name {
    line-height: 1.2em;
    min-height: 1.8em;
    color: grey;
    display: block;
    text-align: center;
    font-size: 1.3vw;
    font-size: 12px;

    margin: 0.6em 0;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;

    @media screen and (min-width: 750px) {
      font-size: 1.3vw;
    }
  }

  &:hover {
    cursor: pointer;
    img {
      border: 0.15em solid #fff;
    }

    .profile__name {
      color: #fff;
    }
  }
  /* --- */
`;
