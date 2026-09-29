import { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [account, setAccount] = useState("Not connected");
  const [chainId, setChainId] = useState(0);

  useEffect(() => {
    async function setUp() {
      if (!window.ethereum) {
        console.log("MetaMask is not installed");
        return;
      }

      // 1. Fetch initial account and chain ID
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }

      const currentChainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      setChainId(parseInt(currentChainId, 16));

      // 2. Listen for account changes and update UI state
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount("Not connected");
        }
      });

      // 3. Listen for chain changes and update UI state
      window.ethereum.on("chainChanged", (hexChainId) => {
        setChainId(parseInt(hexChainId, 16));
      });
    }

    setUp();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Wallet Dashboard</h1>
      <div className="card">
        <p>
          <strong>Connected Account:</strong> {account}
        </p>
        <p>
          <strong>Chain ID:</strong> {chainId !== 0 ? chainId : "Loading..."}
        </p>
      </div>
    </div>
  );
}

export default App;
