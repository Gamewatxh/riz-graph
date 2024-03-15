import { ConnectButton } from "@web3uikit/web3";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();

    const handleClickHome = () => {
        router.push('/LandingPage');
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
                <label onClick={handleClickHome}>
                    Home
                </label>
                <label onClick={handleClickMarketplace}>
                    Marketplace
                </label>
                <label onClick={handleClickRegisterInChain}>
                    Register in Chain
                </label>
                <label onClick={handleClickBlog}>
                    Blog
                </label>
                <ConnectButton chainId={11155111} />
            </div>
        </nav>
    );
}
