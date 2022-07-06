import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    bgColor: {
      blue: string;
      gray: string;
      anotherOne: string;
    };
    borderColor: string;
    validation: {
      resolve: string;
      error: string;
    };
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
