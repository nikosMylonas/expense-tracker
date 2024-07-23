const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <footer>
            <div className="container-center px-4 py-8 text-white">
                Copyright &copy; {year} ExpenseTracker - All Rights Reserved
            </div>
        </footer>
    );
};
export default Footer;
