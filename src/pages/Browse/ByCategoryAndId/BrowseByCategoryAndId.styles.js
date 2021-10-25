import styled from 'styled-components';

export const InnerColumn = styled.div`
  color: #fff;
  display: block;
  width: 98%;
  max-width: 1700px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  min-height: 40vh;
  transition: all 0.2s ease -in;

  padding-bottom: 50px;
  overflow: hidden;

  h1 {
    text-align: left;
    padding: 50px;
    @media screen and (max-width: 340px) {
      padding: 50px 0;
      font-size: 10vw;
    }
  }

  .search__searchList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 10px;
    list-style: none;

    @media screen and (max-width: 340px) {
      padding-left: 0;
    }

    picture {
      position: relative;
      max-width: 300px;
      margin: 0 auto;
      @media screen and (max-width: 340px) {
        width: 75vw;
        margin: 0 0;
      }
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        transition: transform 450ms;

        padding: 0 2px;
        border-radius: 4px;

        &:hover {
          transform: scale(1.08);
          opacity: 1;
          z-index: 3;
          cursor: pointer;
        }
      }
    }
  }
`;
