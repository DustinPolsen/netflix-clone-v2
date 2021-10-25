import styled from 'styled-components';

export const InnerColumn = styled.div`
  color: #fff;
  display: block;
  width: 98%;
  max-width: 1700px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  min-height: 250px;
  transition: all 0.2s ease -in;
  padding-bottom: 50px;
  margin-top: ${({ browseName }) => browseName && '6.99999993%'};
  overflow: hidden;

  h1 {
    text-align: center;
    padding: 50px;
  }

  .movie__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    grid-gap: 10px;
    list-style: none;

    @media screen and (max-width: 340px) {
      padding-left: 0;
    }

    .movie__card--extraInfo {
      background: #999;
      border-radius: 0 0 4px 4px;
      height: 5em;
      z-index: 6;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      width: 100%;
      visibility: inherit;
      opacity: 1;
      transition: 0.2s all ease-in;
    }

    .movie__card--extraInfo.inactive {
      visibility: hidden;
      opacity: 0;
      transition: all 0.2s ease-in;
    }

    .movie__card--parent {
      position: relative;
      max-width: 300px;
      margin: 0 auto;
      transition: transform 450ms;

      &:hover {
        transition: transform 450ms;
        transform: scale(1.08);
        opacity: 1;
        z-index: 3;
        cursor: pointer;
      }

      @media screen and (max-width: 340px) {
        width: 75vw;
        margin: 0 0;
      }

      img {
        width: 100%;
        height: auto;
        object-fit: contain;

        padding: 0 2px;
        border-radius: 4px;
      }
    }
  }
`;
