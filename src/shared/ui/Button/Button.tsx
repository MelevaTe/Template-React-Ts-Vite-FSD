import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { memo } from "react";
import cls from "./Button.module.scss";
import type { Mods } from "../../lib/classNames/classNames";
import { classNames } from "../../lib/classNames/classNames";

export enum ButtonTheme {
	ACCENT = "accent",
	TRANSPARENT = "transparent",
	CLEAR = "clear",
	CLEAR__INVERTED = "clear-inverted",
	OUTLINE = "outline",
	OUTLINE_RED = "outline-red",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "background-inverted",
}

export enum ButtonSize {
	S = "size-s",
	M = "size-m",
	L = "size-l",
	XL = "size-xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		disabled,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	};

	return (
		<button
			className={classNames(cls.button, mods, [
				className,
				cls[theme],
				cls[size],
			])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
