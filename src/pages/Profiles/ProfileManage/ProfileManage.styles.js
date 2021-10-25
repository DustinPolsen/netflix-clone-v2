import styled from 'styled-components';
import { COLORS } from '../../../utils/generalUtils';

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

      @media screen (max-width: 800px) {
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

  .manageProfile__edit--parent {
    display: block;

    .manageProfile__edit--inputs {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;

      label {
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
        color: #fff;
        font-size: 1.3vw;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-indent: 0.1vw;

        &:focus {
          outline: none;
        }

        @media screen and (max-width: 800px) {
          font-size: 13px;
        }
      }
    }

    .manageProfile__edit--dropdowns,
    .manageProfile__edit--dropdown,
    .manageProfile__dropdown--nfDropDown {
      min-width: 18rem;
    }

    .manageProfile__edit--dropdowns {
      display: flex;
      flex-direction: column;

      .manageProfile__edit--dropdown {
        margin-top: 1rem;

        .manageProfile__dropdown--label {
          font-size: 1.3vw;
          margin-bottom: 7px;
          color: #ccc;
          font-weight: 400;
          @media screen and (max-width: 1000px) {
            font-size: 13px;
          }
        }
      }

      .manageProfile__dropdown--nfDropDown {
        position: relative;
        text-align: left;

        .manageProfile__dropdown--header {
          height: 2.5rem;
          padding-left: 10px;
          line-height: 2.5rem;
          letter-spacing: 1px;
          cursor: pointer;
          font-size: clamp(0.6rem, 2vw, 1.25rem);
          font-weight: 700;

          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.9);
          display: inline-block;
          color: #fff;
          background-color: ${COLORS.BLACK};

          appearance: none;

          border-radius: 0;
          position: relative;
          padding-right: 50px;

          &:hover {
            background-color: ${COLORS.BRIGHT_BLACK};
            filter: contrast(80%);
          }

          &:focus {
            outline: none;
          }

          .manageProfile__dropdown--arrow {
            border-color: #fff transparent transparent;
            border-style: solid;
            border-width: 5px 5px 0;
            height: 0;
            position: absolute;
            right: 10px;
            top: 44%;
            width: 0;
          }
        }
      }
      .manageProfile__dropdown--submenu {
        opacity: ${({ isDropdownShowing }) => (isDropdownShowing ? 1 : 0)};
        transition-duration: 150ms;
        overflow-x: hidden;
        z-index: 2;
        padding: 0;
        margin: 0;
        top: 2.5rem;
        left: 0;
        font-size: 14px;
        box-sizing: border-box;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.9);
        font-size: 13px;
        line-height: 21px;
        border: solid 1px rgba(255, 255, 255, 0.15);
        padding: 20px;
        overflow-y: scroll;
        max-height: 50vh;
        width: 350px;
        visibility: ${({ isDropdownShowing }) =>
          isDropdownShowing ? 'inherit' : 'hidden'};

        &::-webkit-scrollbar {
          display: none;
        }

        ul {
          display: flex;
          margin: 0;
          padding: 0;
          max-height: 300px;
          width: 350px;
          flex-flow: column wrap;
          flex-basis: 30%;

          list-style-type: none;

          li {
            flex: 0.5;
            padding: 0;
            line-height: 24px;
            display: block;
            cursor: pointer;
            user-select: ${({ isDropdownShowing }) =>
              isDropdownShowing ? 'inherit' : 'none'};

            color: ${COLORS.WHITE};
            box-sizing: border-box;
            position: relative;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;
