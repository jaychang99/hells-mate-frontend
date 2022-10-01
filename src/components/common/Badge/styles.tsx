import styled from "@emotion/styled";

interface StyleProps {
  warningLevel: number;
}

const colors = ["#007bff", "#eab412", "#dc3545"];

export const StyledBadge = styled.div<StyleProps>`
  border: 1px solid ${({ warningLevel }) => colors[warningLevel]};
  border-radius: 20px;
  padding: 10px 80px;
  color: ${({ warningLevel }) => colors[warningLevel]};
`;
