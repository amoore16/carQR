import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuButton, { ButtonTypeEnum } from "./MenuButton";
import { Link } from "react-router-dom";

interface BasicMenuProps {
  buttonType: ButtonTypeEnum;
  menuItems: menuItem[];
  title?: string;
}

interface menuItem {
  name: string;
  to: string;
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BasicMenu(props: BasicMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handling click", event);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuButtonProps = {
    buttonType: props.buttonType,
    open: open,
    handleButtonClick: handleClick,
    title: props.title,
  };

  return (
    <div>
      <MenuButton {...menuButtonProps} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {props.menuItems.map((menuItem, i) => (
          <MenuItem
            onClick={handleClose}
            key={i}
            component={Link}
            to={menuItem.to}
          >
            {menuItem.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
