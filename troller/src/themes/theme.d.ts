import '@emotion/react'; //해결해야 할 문제
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
