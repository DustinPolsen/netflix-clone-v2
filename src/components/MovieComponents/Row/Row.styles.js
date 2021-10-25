import styled from 'styled-components';
import { COLORS } from '../../../utils/generalUtils';

export const StyledRow = styled.div`
  margin: 3vw 0;
  /* margin-left: 20px; */
  width: 100%;
  position: relative;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: hidden;

  /* if the parent element is pos: relative and child is pos: absolute
    the child will be positioned around the parent.
    */

  .row__headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .row__pagination {
      visibility: hidden;
      transition: all 250ms ease-in-out;
      padding: 0;
      list-style-type: none;

      width: 100px;
      position: absolute;
      right: 0;
      top: calc(var(--slider-py) - 60px);
      .indicator {
        width: 12px;
        height: 2px;
        background-color: ${COLORS.TOO_MANY_GREYS};
        display: inline-block;
        margin-left: 2px;

        &.active {
          background-color: #aaa;
        }
      }
    }
  }

  &:hover {
    .slider__nav,
    .row__pagination {
      visibility: visible;
    }
  }

  .slider__nav {
    transition: all 0.2s ease-in;
    visibility: hidden;
    outline: none;
    top: ${({ isLargeRow }) => (isLargeRow ? '12%' : '22%')};
    z-index: 3;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ isLargeRow }) => (isLargeRow ? '85%' : '70%')};
    background: rgba(20, 20, 20, 0.6);
    border-radius: 2px;
    backdrop-filter: blur(2px);

    &:hover {
      background: rgba(20, 20, 20, 0.9);

      .icon {
        /* font-size: 1.8rem; */
        transform: scale(1.4);

        /* font-weight: 700; */
      }
    }

    border: none;
    color: ${COLORS.WHITE};
    width: 4rem;

    .icon {
      font-size: 1.5rem;
      transition: all 250ms ease-in-out;
    }

    &.prev {
      left: 0;
      .row__gradient {
        background-image: linear-gradient(
          to right,
          #111 30%,
          rgba(24, 24, 24, 0) 100%
        );
      }
    }

    &.next {
      right: 0;

      .icon {
        /* position: relative;
        right: -100px; */
      }

      .row__gradient {
        background-image: linear-gradient(
          to left,
          #111 30%,
          rgba(24, 24, 24, 0) 100%
        );
        right: 10px;
      }
    }

    .row__gradient {
      height: 100%;
      width: 100px;
      position: relative;
    }
  }

  &:last-of-type {
    padding-bottom: 50px;
    overflow: hidden;
    z-index: 0;
  }

  .row__title {
    font-size: 1.4vw;
    color: #e5e5e5;
    font-weight: 700;
    margin: 0.5em 4% 0.5em 4%;
    text-decoration: none;
    display: inline-block;
    min-width: 6em;
    vertical-align: bottom;
    line-height: 1.25vw;

    @media screen and (max-width: 800px) {
      font-size: 12px;
    }
  }

  .row__posters {
    box-sizing: border-box;
    overflow-x: visible;
    display: flex;
    overflow-y: hidden;
    transition: ${({ skipTransition, transitionTime }) =>
      skipTransition
        ? 'none'
        : `transform ${transitionTime}ms ease-in-out`}; // this is for when it jumps back to beginning of slide when you press forward or backwards on last poster
    transform: ${({ translateXValue }) => `translateX(${translateXValue}px)`};
    padding: 20px;
    position: relative;
    outline: 0;
    z-index: 2;
    padding-left: 4%;
    padding-right: 4%;
    width: ${({ containerWidth }) => `${containerWidth}px`};
  }

  .row__posters::-webkit-scrollbar {
    display: none;
  }

  .row__poster {
    object-fit: contain;
    transition: transform 450ms;
    max-width: 25vw;
    max-height: 140px;
    box-sizing: border-box;
    z-index: 1;
    display: block;
    position: relative;
    white-space: normal;
    padding: 0 2px;
    border-radius: 4px;
    cursor: pointer;

    &:hover:not(.row__posterLarge) {
      transform: scale(1.08);
      opacity: 1;
      z-index: 3;
    }
  }

  .row__posterLarge {
    max-height: 200px;
    max-width: 25vw;
    top: 0;
    left: 0;
    transition: transform 450ms;

    &:hover {
      transform: scale(1.09);
      opacity: 1;
      z-index: 3;
    }

    @media screen and (min-width: 600px) {
      max-height: 400px;
      max-width: 25vw;
    }
  }
`;
