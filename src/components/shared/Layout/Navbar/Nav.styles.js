import styled from 'styled-components';
import { COLORS } from '../../../../utils/generalUtils';

export const StyledNav = styled.nav`
  background: ${({ isShowing }) => isShowing && COLORS.BRIGHT_BLACK};
  top: 0;
  z-index: 1000;
  position: ${({ browseName }) => (browseName ? 'relative' : 'fixed')};

  width: 100%;
  display: flex;
  padding: 20px;
  height: 30px;
  transition-timing-function: ease-in;
  transition: all 0.5s;

  .nav__innerColumn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    max-width: 1900px;
    margin-right: auto;
    margin-left: auto;
    padding: ${({ logoOnly }) => (logoOnly ? 'inherit' : '0 4%')};
  }

  .nav__left {
    display: flex;
    flex-flow: row-nowrap;
    align-items: center;
    .nav__left--linkList {
      display: flex;
      align-items: center;
      flex-flow: row-nowrap;
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        margin-left: 18px;

        a {
          display: block;
          color: #fff;
          text-decoration: none;

          &.active {
            font-weight: bold;
          }
        }

        &:hover {
          a {
            transition: color 0.4s ease-in-out;

            color: #e5e5e5;
          }
        }
      }
    }
  }

  .nav__logo {
    width: 80px;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
  }

  .nav__avatar {
    width: 30px;
    object-fit: contain;
    border-radius: 4px;
    cursor: pointer;
  }

  .nav__secondaryNavigation {
    display: flex;
    align-items: center;
    padding-right: 20px;
    color: #fff;
  }

  .nav__icon {
    cursor: pointer;
  }

  .nav__icon.search {
    &:hover {
      cursor: ${({ searchMode }) => (!searchMode ? 'pointer' : 'inherit')};
    }
  }

  .nav__icon.arrow {
    transform: rotate(180deg); // facing downward
    transition: transform 0.2s ease-in-out;

    &.active {
      transform: rotate(360deg); // facing upward, rotating from left.
    }
  }

  .nav__searchContainer {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0%;
  }

  .nav__searchInput {
    visibility: ${({ searchMode }) => (!searchMode ? 'hidden' : 'inherit')};
    width: ${({ searchMode }) => (!searchMode ? '0px' : '300px')};

    transition: visibility 50ms ease-in-out;
    transition: width 0.2s ease-in-out;

    border: 1px solid ${COLORS.WHITE};
    background-color: ${COLORS.BLACK};
    color: ${COLORS.WHITE};
    padding: 5px;
    &::placeholder {
      color: ${COLORS.GREY};
    }
  }

  .nav__profileContainer {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  .nav__browseName {
    color: #fff;
    font-size: 2.5rem;
    font-size: clamp(1rem, 2vw, 2.5rem);
  }
`;

export const Dropdown = styled.div`
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  .nav__dropDown {
    transition: all 0.2s ease-in;
    position: absolute;
    min-width: 10em;
    top: 3em;
    right: 2em;
    z-index: 5;
    opacity: ${({ isActive }) => (isActive ? 0.8 : 0)};
    opacity: ${({ background, isActive }) => background && isActive && 0.9};
    background: ${COLORS.BLACK};

    &:hover {
      opacity: 0.96;
    }

    .hr {
      color: #999;
      background: #999;
      width: 100%;
      height: 0.1em;
      opacity: 0.6;
      z-index: 6;
      margin: 0;
    }

    .dropDown__items {
      padding: 1em;

      color: white;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
      li {
        list-style-type: none;
        font-size: clamp(0.5rem, 2vw, 0.8rem);
        font-weight: 400;
        color: ${COLORS.WHITE};
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
        opacity: 1;
        span:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .dropDown__items:not(:first-of-type) {
    li {
      font-weight: 500;
    }
  }

  .nav__dropDown--arrow {
    position: absolute;
    top: 0.9em;
    color: white;
    z-index: 6;
    transform: rotate(180deg);
    font-size: 2rem;
    left: 0;
    opacity: ${({ isActive }) => (isActive ? 0.8 : 0)};
    transition: all 0.2s ease-in;
  }
`;

export const SecondaryNav = styled.nav`
  top: 0;
  z-index: 1;

  position: ${({ hasBrowseName }) => hasBrowseName && 'sticky'};
  background: ${({ hasBrowseName }) => hasBrowseName && COLORS.BLACK};

  width: 100%;
  display: flex;
  padding: 20px;
  height: 30px;
  transition-timing-function: ease-in;
  transition: all 0.5s;

  .nav__innerColumn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    max-width: 1900px;
    margin-right: auto;
    margin-left: auto;
    padding: ${({ logoOnly }) => (logoOnly ? 'inherit' : '0 4%')};
  }

  .nav__browseName {
    color: #fff;
    font-size: 2.5rem;
    font-size: clamp(1rem, 2vw, 2.5rem);
    user-select: none;
  }
`;
