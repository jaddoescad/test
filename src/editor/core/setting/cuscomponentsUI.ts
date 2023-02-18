import {
  createPlateUI,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  StyledElement,
  withProps
} from "@udecode/plate";
import { css } from "styled-components";

export const components = createPlateUI({
  [ELEMENT_H1]: withProps(StyledElement, {
    as: "h1",
    styles: {
      root: [
        css`
          margin: 0;
          font-size: 1.875em;
          font-weight: 500;
        `
      ]
    }
  }),
  [ELEMENT_H2]: withProps(StyledElement, {
    as: "h2",
    styles: {
      root: [
        css`
          margin: 0;
          font-size: 1.5em;
          font-weight: 500;
        `
      ]
    }
  }),
  [ELEMENT_H3]: withProps(StyledElement, {
    as: "h3",
    styles: {
      root: [
        css`
          margin: 0;
          font-size: 1.25em;
          font-weight: 500;
        `
      ]
    }
  }),
  [ELEMENT_H4]: withProps(StyledElement, {
    as: "h4",
    styles: {
      root: [
        css`
          margin: 0;
          font-size: 1.1em;
          font-weight: 500;
        `
      ]
    }
  })
});
