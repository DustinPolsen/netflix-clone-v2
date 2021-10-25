import styled from 'styled-components';

export const StyledFooter = styled.footer`
  .footer__content {
    color: grey;
    max-width: 980px;
    margin: 20px auto 0;
    padding: 0 4% 0.3%;
    position: relative;
    bottom: 0;
    left: 0;
  }

  .footer__link-wrapper {
    list-style-type: none;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    margin-bottom: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    @media (min-width: 800px) {
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
    }
  }

  .footer__link {
    color: grey;
    margin-right: 15px;
    text-decoration: none;
    cursor: pointer;
  }

  .footer__social-links {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }

  .footer__member-links {
    font-size: 13px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -moz-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin: 0 0 14px 0;
    padding: 0;

    li {
      list-style-type: none;

      margin-bottom: 16px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .footer__link {
        margin-right: 0;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .footer__service-code {
    margin-bottom: 20px;
    font-size: 13px;
    padding: 0.5em;
    background: 0 0;
    color: grey;
    border: solid 1px grey;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }

  .footer__copyright {
    font-size: 11px;
    margin-bottom: 15px;
  }
`;
