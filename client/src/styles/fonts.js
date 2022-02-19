import { css } from 'styled-components/macro';

const fonts = css`
  @font-face {
    font-family: 'Gotham';
    src: url('../fonts/Gotham-Book.woff2') format('woff2'),
    url('../fonts/Gotham-Book.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('../fonts/Gotham-Bold.woff2') format('woff2'),
    url('../fonts/Gotham-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('../fonts/Gotham-Black.woff2') format('woff2'),
    url('../fonts/Gotham-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
`;

export default fonts;