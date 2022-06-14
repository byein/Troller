import { SignBox } from '../../styles/sign/globalSignBox';

function SignForm({ children }: { children: React.ReactNode }) {
	return <SignBox>{children}</SignBox>;
}

export default SignForm;
