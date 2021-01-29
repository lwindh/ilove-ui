import React from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";

type AlertTypes = "success" | "info" | "error" | "warning";
interface AlertProps {
  className?: string;
  /**标题 */
  message: string;
  /**描述 */
  description?: string;
  /**类型 四种可选 */
  type?: AlertTypes;
  /**是否显示关闭图标 */
  closable?: boolean;
  /**关闭alert时触发的事件 */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
/**
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ### 引用方法
 * 
 * ~~~js
 * import { Alert } from 'vikingship'
 * ~~~
 */
export const Alert: React.FC<AlertProps> = ({
  message,
  description,
  type,
  closable,
  className,
  onClose,
}) => {
  const [closed, setClosed] = React.useState(false);
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
    "alert-motion-leave": closed,
    "alert-motion-leave-active": closed,
  });
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClosed(true);
    onClose?.(e);
  };
  const renderCloseIcon = () =>
  closable ? (
      <button
        type="button"
        onClick={handleClose}
        className={`alert-close-icon`}
        tabIndex={0}
      >
        <Icon icon="times" size="1x" theme="light"/>
      </button>
    ) : null;
  return (
    <div data-show={!closed} className={classes} role="alert">
      <div className={`alert-content`}>
        <div className={`alert-message`}>{message}</div>
        <div className={`alert-description`}>{description}</div>
      </div>
      {renderCloseIcon()}
    </div>
  );
};

Alert.defaultProps = {
  type: "info",
  closable: true,
};

Alert.displayName = 'Alert';
export default Alert;
