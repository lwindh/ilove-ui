import React, { useContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import { IMenuItemProps } from "./MenuItem";

export interface ISubMenuProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.FC<ISubMenuProps> = ({
  index,
  title,
  children,
  className,
}) => {
  const context = useContext(MenuContext);
  const classs = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });
  const renderChildren = () => {
    const childremComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return childElement;
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem");
      }
    });
    return <ul className="viking-submenu">{childremComponent}</ul>;
  };

  return (
    <li key={index} className={classs}>
      <div className="subMenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
