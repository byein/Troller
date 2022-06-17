import { SignBox } from '../../styles/sign/globalSignBox';

export interface ISignType {
	email: string;
	password: string;
	password_again?: string;
	nickname?: string;
}

function SignForm({ children }: { children: React.ReactNode }) {
	return <SignBox>{children}</SignBox>;
}

export default SignForm;
