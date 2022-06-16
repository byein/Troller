import "@emotion/react";

declare module '@emotion/react' {
	export interface Theme {
		bgColor: string;
		borderColor: string;
		btnColor: {
			primary: string;
			onHover: string;
		};
		txtColor: {
			primary: string;
			selected: string;
		};
	}
}
