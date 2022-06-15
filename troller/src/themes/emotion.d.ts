import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    bgColor: string;
    btnColor: string;
    borderColor: string;
    txtColor: {
      primary: string;
      selected: string;
    };
  }
}
