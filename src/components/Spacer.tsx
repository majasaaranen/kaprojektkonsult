import styled from "styled-components";
import { css } from "styled-components";

type SpacerProps = {
  orientation?: "vertical" | "horizontal";
  spacing?: number;
};

const getSpacing = (spacing: number): number => {
  switch (spacing) {
    default:
      return spacing;
  }
};

const StyledSpacer = styled.div<SpacerProps>`
  ${({ orientation, spacing }) => css`
    ${orientation === "vertical" ? "height" : "width"}: ${getSpacing(
      spacing ?? 1
    ) * 8}px;
  `}
`;

export const Spacer: React.FC<SpacerProps> = ({
  orientation = "vertical",
  spacing,
}) => <StyledSpacer orientation={orientation} spacing={spacing} />;
