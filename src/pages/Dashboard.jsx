import { useState } from "react";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import CardBox from "@/Components/CardBox";
import StepperComponent from "@/Components/StepperComponent";


// You need to add a functionality where only the dashboard of the `account` is displayed
// You need to add a functionality where in order to access the dashboard the user has to connect wallet
export default function Dashboard() {
    const { account, isWeb3Enabled } = useMoralis();
    const [display, setDisplay] = useState(null);

    const handleSidebarClick = (itemName) => {
        setDisplay(itemName);
    };


    return (
        <div>
            <div className="sidebar">
                <ul>
                    <li><a href="#" onClick={() => handleSidebarClick("professional id")}>My professional ID</a></li>
                    <li><a href="#" onClick={() => handleSidebarClick("progress")}>My progress</a></li>
                    <li><a href="#" onClick={() => handleSidebarClick("edu ver")}>Education Verification</a></li>
                </ul>

            </div>
            <div className="content">
                {display === "professional id" && <CardBox tokenId={0} isInMarketplace={false}/>}
                {display === "progress" && <StepperComponent />}
                {display === "edu ver" && <h1>Your Edu verification goes here {account}</h1>}
            </div>
        </div>

    );
}