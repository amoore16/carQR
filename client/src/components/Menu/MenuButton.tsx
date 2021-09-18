import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

export enum ButtonTypeEnum {
  BUTTON = "button",
  ICONBUTTON = "iconButton",
}

interface MenuButtonProps {
  buttonType: ButtonTypeEnum;
  title?: string;
  open: boolean;
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MenuButton(props: MenuButtonProps) {
  const buttonType = props.buttonType;
  return (
    <>
      {buttonType === ButtonTypeEnum.BUTTON && (
        <Button
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={props.open ? "true" : undefined}
          onClick={(event) => props.handleButtonClick(event)}
          sx={{ mr: 2 }}
          title="Login"
          color="inherit"
        >
          {props.title}
        </Button>
      )}
      {buttonType === ButtonTypeEnum.ICONBUTTON && (
        <IconButton
          size="large"
          edge="start"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={props.open ? "true" : undefined}
          onClick={(event) => props.handleButtonClick(event)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      )}
    </>
  );
}
