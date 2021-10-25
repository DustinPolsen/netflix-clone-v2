import styled from 'styled-components';
import { Box, DialogContent } from '@material-ui/core';
import { COLORS } from '../../../utils/generalUtils';

export const StyledGrid = styled.div`
  color: ${COLORS.WHITE};

  h2 {
    user-select: none;
    font-weight: 700;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));

    @media screen and (min-width: 360px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    overflow-y: hidden;
    max-height: ${({ showMoreRecommendedMovies }) =>
      showMoreRecommendedMovies ? 'inherit' : '60em'};

    li {
      user-select: none;
      cursor: pointer;
      picture {
        width: 100%;

        img {
          display: block;
          width: 100%;
          border-radius: 4px;
        }
      }

      .modal__recommendedMovie--metaData {
        background-color: ${COLORS.DARK_GREY};
        border-radius: 0 0 4px 4px;
        min-height: 200px;
        max-height: 200px;
        overflow-y: hidden;
        padding: 0 0 0.5rem 0;

        .recommendedMovie__MetaData--firstLine {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          padding: 1em;

          h4 {
            display: flex;
            flex: 1;
          }
        }

        p {
          line-height: 20px;
          padding: 0 1em 1em;
          font-size: clamp(0.6rem, 4vw, 0.8rem);
          margin: 0;
          color: ${COLORS.BRIGHT_GREY};
        }
      }
    }
  }

  .modal__sectionDivider {
    position: relative;
    width: 100%;
    height: 6em;
    border-bottom: 2px solid #404040;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    margin: auto;

    box-sizing: inherit;

    &.collapsed {
      margin-top: -6em;
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(#181818),
        color-stop(20%, rgba(24, 24, 24, 0.7)),
        color-stop(30%, rgba(24, 24, 24, 0.4)),
        color-stop(50%, transparent)
      );
      background-image: -webkit-linear-gradient(
        bottom,
        #181818 0,
        rgba(24, 24, 24, 0.7) 20%,
        rgba(24, 24, 24, 0.4) 30%,
        transparent 50%
      );
      background-image: -moz-
        oldlinear-gradient(
          bottom,
          #181818 0,
          rgba(24, 24, 24, 0.7) 20%,
          rgba(24, 24, 24, 0.4) 30%,
          transparent 50%
        );
      background-image: -o-linear-gradient(
        bottom,
        #181818 0,
        rgba(24, 24, 24, 0.7) 20%,
        rgba(24, 24, 24, 0.4) 30%,
        transparent 50%
      );
      background-image: linear-gradient(
        to top,
        #181818 0,
        rgba(24, 24, 24, 0.7) 20%,
        rgba(24, 24, 24, 0.4) 30%,
        transparent 50%
      );
    }

    .modal__sectionDivider--expandButton {
      position: absolute;
      min-width: 32px;
      min-height: 32px;
      max-width: 42px;
      max-height: 42px;
      border-width: 2px;
      background-color: rgba(42, 42, 42, 0.6);
      border-color: rgba(255, 255, 255, 0.5);
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      border: 1px solid rgba(255, 255, 255, 0.7);
      color: white;
      bottom: 0;
      -webkit-transform: translateY(50%);
      -moz-transform: translateY(50%);
      -ms-transform: translateY(50%);
      -o-transform: translateY(50%);
      transform: translateY(50%);

      -webkit-box-align: center;
      align-items: center;
      appearance: none;
      cursor: pointer;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      opacity: 1;
      padding: 0.8rem;
      user-select: none;
      will-change: background-color, color;
      word-break: break-word;
      white-space: nowrap;
      border-radius: 50%;

      &:focus {
        outline: none;
      }

      &:hover {
        filter: contrast(0.5);
      }

      .modal__expandIcon {
        color: ${COLORS.WHITE};
      }
    }
  }
`;

export const StyledBox = styled(Box)`
  cursor: pointer;
  position: absolute;
  right: 2.5%;
  top: 10px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.VERY_BRIGHT_BLACK};
  width: fit-content;
  height: auto;
  border-radius: 50%;
  padding: 0.4% 0.4% 0% 0.4%;
`;

export const StyledDialogContent = styled(DialogContent)`
  .modal__container {
    @media screen and (min-width: 420px) {
      padding: 0 3em;
    }
    display: block;
  }

  .modal__details--metaData {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    column-gap: 2em;
    -webkit-column-gap: 2em;

    a {
      color: #fff;
      text-decoration: none;
      line-height: 20px;
      word-break: break-word;

      &:hover {
        text-decoration: underline;
      }
    }

    .metaData__left {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
      box-sizing: inherit;

      .metaData__left--infoWrapper {
        box-sizing: inherit;
        color: #fff;
        display: flex;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        align-items: center;
        user-select: none;
        .movie__scoreContainer {
          display: flex;
          margin-right: 0.5em;

          .movie__score {
            white-space: unset;
            color: ${COLORS.GREEN};
            display: inline-block;
            font-weight: 700;
          }
        }

        .metaData__secondLine {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .movie__year {
            margin-right: 0.5em;
            font-size: 16px;
          }
        }
      }
    }

    .metaData__right {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;

      .metaData__right--tags {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        max-height: 10em;
        overflow-y: scroll;
        text-overflow: ellipsis;
        &::-webkit-scrollbar {
          display: none;
        }

        span {
          color: #777;
          user-select: none;
        }
        font-size: 14px;
        line-height: 20px;
        margin: 0.5em;
        margin-left: 0;
        word-break: break-word;
      }
    }
  }
`;

export const StyledVideo = styled.div`
  div {
    pointer-events: none;
  }

  .modal__loading--container {
    height: 400px;
    width: 100%;
    background: ${COLORS.BLACK};
    display: flex;
    justify-content: center;
  }
`;
