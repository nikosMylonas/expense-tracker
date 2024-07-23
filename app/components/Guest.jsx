import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
    return (
        <div className="guest">
            <h2 className="h2-center">Welcome</h2>
            <p>Please sign in to manage your transactions.</p>
            <SignInButton className="btn btn-signin" />
        </div>
    );
};
export default Guest;
