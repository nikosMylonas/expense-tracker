import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
    const user = await checkUser();
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">ExpenseTracker</div>
                    <div className="clerk-menu">
                        <SignedOut>
                            <SignInButton className="btn btn-signin" />
                        </SignedOut>
                        <SignedIn>
                            <UserButton className="btn btn-user" />
                        </SignedIn>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Header;
