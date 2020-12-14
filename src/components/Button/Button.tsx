import classNames from "classnames";

export enum ButtonSize {
    Large = "lg",
    Small = "sm",
    Default = 'normal'
}

export enum ButtonType {
    Primary = "primary",
    Defalut = "defalut",
    Danger = "danger",
    Link = "link",
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps =Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
    const { btnType, className,  disabled, size, children, href, ...rest } = props;

    //btn, btn-lg, btn-primary
    const classes = classNames("btn", className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === ButtonType.Link && disabled,
    });

    if (btnType === ButtonType.Link && href) {
        return (
            <a 
                className={classes}
                href={href}
                {...rest}
            >
                {children}
            </a>
        );
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...rest}
            >
                {children}
            </button>
        );
    }
};

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Defalut
}

export default Button;