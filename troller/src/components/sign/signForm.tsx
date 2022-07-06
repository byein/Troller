import { SignBox } from '../../styles/sign/globalSignBox';

export interface FormData {
  eMail: string;
  password: string;
  password_again: string;
  lolName: string;
}

function SignForm({ children }: { children: React.ReactNode }) {
  return <SignBox>{children}</SignBox>;
}

export default SignForm;
