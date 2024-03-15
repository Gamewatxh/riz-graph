import { ConnectButton } from "@web3uikit/web3";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();

    const handleClickHome = () => {
        router.push('/landing');
    };

    const handleClickMarketplace = () => {
        router.push('/Marketplace');
    };

    const handleClickRegisterInChain = () => {
        router.push('/Body');
    };

    const handleClickBlog = () => {
        router.push('/Blog');
    };

    return (
        <nav className="nav--bar">
            <h1>
                Top Talent Chain
            </h1>
            <div className="right--side">
                <label onClick={handleClickHome} className="nav-item">
                    Home
                </label>
                <label onClick={handleClickMarketplace} className="nav-item">
                    Marketplace
                </label>
                <label onClick={handleClickRegisterInChain} className="nav-item">
                    Register in Chain
                </label>
                <label onClick={handleClickBlog} className="nav-item">
                    Blog
                </label>
                <ConnectButton chainId={11155111} />
            </div>
            <style jsx>{`
                .nav--bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                }
                .right--side {
                    display: flex;
                    align-items: center;
                }
                .nav-item {
                    display: inline-block;
                    margin-right: 1rem;
                    cursor: pointer;
                }
            `}</style>
        </nav>
    );
}
