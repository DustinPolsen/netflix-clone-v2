import { COLORS } from '../../../utils/generalUtils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.BRIGHT_BLACK};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .manageProfile__centeredDiv {
    opacity: 1;
    transform: scale(1);
    transition-duration: 450ms;
    transition-delay: 200ms;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .manageProfile__actionsContainer {
    display: block;
    text-align: left;
    position: relative;

    h1 {
      font-size: 4vw;
      margin: 0;
      color: ${COLORS.WHITE};
      font-weight: 400;
      user-select: none;

      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
    }

    h2 {
      font-size: 1.3vw;
      color: ${COLORS.GREY_H2};
      font-weight: 400;
      user-select: none;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;

      @media screen and (max-width: 800px) {
        font-size: 13px;
      }
    }

    .profile__deleteWarning {
      width: 25vw;
      text-align: initial;
      display: flex;
      color: ${COLORS.WHITE};
      align-items: center;
      user-select: none;
    }

    .profile__name {
      line-height: 1.2em;
      min-height: 1.8em;
      color: grey;
      display: block;
      text-align: center;
      font-size: 1.3vw;
      margin: 0.6em 0;
      text-overflow: ellipsis;
      overflow: hidden;

      @media screen and (max-width: 800px) {
        font-size: 12px;
      }
    }

    .manageProfile__metaData {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      padding: 2em 0;

      &.entry {
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
      }

      .profile__avatar {
        white-space: nowrap;
        margin-right: 1.5vw;
        width: 8vw;
        min-width: 80px;
        max-width: 180px;
      }

      .avatar__box {
        position: relative;
      }

      .avatar__img {
        opacity: 1;
        transform: scale(1);
        transition-duration: 400ms;
        height: 8vw;
        width: 8vw;
        max-height: 180px;
        max-width: 180px;
        min-height: 80px;
        min-width: 80px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
      }
    }

    .buttons__container {
      display: flex;
      flex-flow: row wrap;
    }

    .profile__button {
      display: block;
      margin: 2em 0 1em 0;
      font-size: 1.2vw;
      border: 1px solid grey;
      color: grey;
      text-transform: uppercase;
      padding: 0.5em 1.5em;
      letter-spacing: 2px;
      cursor: pointer;
      background-color: transparent;
      display: inline-block;
      margin-right: 20px;
      font-weight: 600;

      @media screen and (max-width: 800px) {
        font-size: 13px;
      }

      &:focus {
        outline: none;
      }

      &:hover {
        border: 1px solid ${COLORS.WHITE};
        color: ${COLORS.WHITE};
      }

      &:first-of-type {
        background-color: ${COLORS.WHITE};
        color: ${COLORS.BLACK};

        &:hover {
          background: ${COLORS.RED};
          color: ${COLORS.WHITE};
          border: 1px solid ${COLORS.RED};
        }
      }
    }
  }

  .manageProfile__add--parent {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .manageProfile__edit--inputs {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 15px;

      .manageProfile__name--label {
        clip: rect(1px 1px 1px 1px) !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        height: 1px !important;
        overflow: hidden !important;
        position: absolute !important;
        white-space: nowrap !important;
        width: 1px !important;
      }

      input {
        width: 18em;
        height: 2em;
        background: #666;
        border: 1px solid transparent;
        margin: 0 0.8em 0 0;
        padding: 0.2em 0.6em;
        color: ${COLORS.WHITE};
        font-size: 1.3vw;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-indent: 0.1vw;

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: #c9c7c7;
        }

        @media screen and (max-width: 800px) {
          font-size: 13px;
        }
      }
    }
  }

  .manageProfile__optionWrapper {
    display: block;

    .optionWrapper__addKids--option {
      display: flex;
      align-items: center;
      margin: 5px 0;
      position: relative;

      div {
        overflow: hidden;

        .option__checkIcon {
          position: relative;
          width: 100%;
          height: 100%;
          pointer-events: none;
          color: #99a1a7;
        }
      }

      span {
        color: ${COLORS.WHITE};
        font-weight: 400;
        font-size: 1.3vw;

        @media screen and (max-width: 800px) {
          font-size: 13px;
        }
      }

      input[type='checkbox'] {
        display: none;
      }

      input[type='checkbox'] + label {
        font-size: 7px;
        border: 1px solid #333;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        display: inline-block;
        position: relative;
        margin-right: 0.5em;
        font-size: 0.8vw;
        width: 2.5em;
        height: 2.5em;
      }

      input[type='checkbox']:checked + label {
        border: 1px solid #333;
        color: #99a1a7;
      }
    }
  }
`;
