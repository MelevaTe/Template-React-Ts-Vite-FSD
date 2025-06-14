declare module "*.scss" {
	interface IClassNames {
		[className: string]: string;
	}
	const classnames: IClassNames;
	export = classnames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
	import type { FC, SVGProps } from "react";
	const content: FC<SVGProps<SVGElement>>;
	export default content;
}

// declare const __IS_DEV__: boolean;
// declare const __API__: string;
// declare const __CLIENT_ID_GOOGLE__: string;

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
		}
	: T;

type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T;
};
