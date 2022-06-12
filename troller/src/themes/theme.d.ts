import '@emotion/react';
declare module '@emotion/react' {
	export interface Theme {
		bgColor: string;
		btnColor: string;
		txtColor: {
			primary: string;
			selected: string;
		};
	}
}
