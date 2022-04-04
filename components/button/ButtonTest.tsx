import React from "react";
import { useTheme, Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(MuiButton)(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: theme.palette.error.main,
  color: theme.palette.grey[100],
  "&.Mui-disabled": {
    border: "2px solid black",
    borderRadius: "20%",
  },
}));

export type ButtonProperties = {
  text: string;
};

// default button
export const Button = (props: ButtonProperties) => {
  return <button>{props.text}</button>;
};

// styledButton class is from global.css
export const StyledButton = (props: ButtonProperties) => {
  return <button className="styledButton">{props.text}</button>;
};

// button used theme
export const ThemedButton = (props: ButtonProperties) => {
  const theme = useTheme();
  return (
    <button
      style={{
        padding: theme.spacing(4),
        backgroundColor: theme.palette.error.main,
        color: theme.palette.grey[100],
      }}
    >
      {props.text}
    </button>
  );
};

// use styled
export const OverriddenButton = (props: ButtonProperties) => {
  const theme = useTheme();
  return (
    <CustomButton variant="contained" color="secondary" disabled>
      {props.text}
    </CustomButton>
  );
};
