import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  variant?: "h6" | "subtitle1";
  action?: ReactNode;
};

export const Wrapper: FC<Props> = ({
  children,
  title,
  variant = "h6",
  action,
}) => {
  return (
    <StyledPaper variant="outlined">
      <StyledTypography variant={variant}>{title}</StyledTypography>
      <Action>{action}</Action>
      {children}
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  line-height: 1;
`;

const Action = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
