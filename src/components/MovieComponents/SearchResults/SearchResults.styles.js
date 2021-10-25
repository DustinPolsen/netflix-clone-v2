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
  overflow: hidden;

  h1 {
    text-align: center;
    padding: 50px;
  }

  .search__searchList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    grid-gap: 10px;
    list-style: none;

    @media screen and (max-width: 340px) {
      padding-left: 0;
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
