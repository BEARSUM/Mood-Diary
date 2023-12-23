import { css } from "styled-components";

const sizes = {
  small: 600,
  medium: 768,
  large: 1200,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first, ...interpolations) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {});

export { media };
