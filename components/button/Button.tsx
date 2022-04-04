import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProperties,
} from "@mui/material";
import { styled } from "@mui/system";

export type ButtonProperties = Omit<MuiButtonProperties, "variant"> & {
  variant?: "fill" | "transparent" | "text" | "underline";
  text: string;
};

const BaseButton = styled(MuiButton)<ButtonProperties>(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingRight: theme.spacing(10),
  paddingLeft: theme.spacing(10),
  borderRadius: theme.spacing(1),
}));
const TransparentButton = styled(BaseButton)<ButtonProperties>(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.primary.dark}`,
  "&.Mui-disabled": {
    color: theme.palette.grey[400],
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.light}`,
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
const FilledButton = styled(BaseButton)<ButtonProperties>(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.secondary,
  "&.Mui-disabled": {
    color: theme.palette.grey[400],
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.light}`,
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
const TextButton = styled(BaseButton)<ButtonProperties>(({ theme }) => ({
  backgroundColor: "transparent",
  "&.Mui-disabled": {
    color: theme.palette.primary.light,
  },
}));
const UnderlinedButton = styled(TextButton)<ButtonProperties>(({ theme }) => ({
  textDecoration: "underline",
}));

// default button
export const FinalButton: React.FC<ButtonProperties> = (props) => {
  const { text, variant = "fill", ...others } = props;
  switch (variant) {
    case "fill":
      return <FilledButton {...others}>{text}</FilledButton>;
    case "transparent":
      return <TransparentButton {...others}>{text}</TransparentButton>;
    case "underline":
      return <UnderlinedButton {...others}>{text}</UnderlinedButton>;
    case "text":
      return (
        <TextButton variant="text" {...others}>
          {text}
        </TextButton>
      );
  }
};
