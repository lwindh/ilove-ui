import classNames from "classnames";

interface IBaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: string;
    btnType?: string;
    shape?: string;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps =Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    const { btnType, className,  disabled, size, children, href , shape, ...rest } = props;

    //btn, btn-lg, btn-primary
    const classes = classNames("btn", className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        [`btn-${shape}`]: shape,
        disabled: btnType === 'link' && disabled,
    });

    if (btnType === 'link' && href) {
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
    btnType: 'default'
}

export default Button;