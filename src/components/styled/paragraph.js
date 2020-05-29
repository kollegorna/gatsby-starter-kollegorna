import styled, { css } from "styled-components"
import { rem } from "polished"

const paragraphStyles = css`
  line-height: 1.6;
  font-size: ${rem(18)};
  word-break: break-word;

  @media ${(props) => props.theme.smallDown} {
    font-size: ${rem(16)};
  }
`

const Paragraph = styled.p`
  ${paragraphStyles}
`

export { Paragraph, paragraphStyles }
