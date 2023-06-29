import styled from "styled-components";
import { css } from "styled-components";

type SpacerProps = {
  spacing: number;
  orientation?: "vertical" | "horizontal";
};

const StyledSpacer = styled.div<SpacerProps>`
  ${({ orientation, spacing }) => css`
    ${orientation === "vertical" ? "height" : "width"}: ${spacing * 8}px;
  `}
`;

export const Spacer: React.FC<SpacerProps> = ({
  orientation = "vertical",
  spacing,
}) => <StyledSpacer orientation={orientation} spacing={spacing} />;
