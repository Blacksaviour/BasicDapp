import { useWalletConnection } from "./hooks/useWalletConnection";
import { SUPPORTED_CHAINS } from "./constants";
import ConnectButton from "./components/ConnectButton";
import "./App.css";

function App() {
  const {
    account,
    balance,
    chainId,
    connectWallet,
    disconnectWallet,
    getBalance,
  } = useWalletConnection();
  const chain = SUPPORTED_CHAINS.find((item) => item.chainId === chainId);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Wallet Dashboard</h1>
      <div className="card">
        <p>
          <strong>Connected Account:</strong> {account || "Not connected"}
        </p>
        <p>
          <strong>Chain:</strong> {chain ? chain.name : chainId || "Not connected"}
        </p>
        <ConnectButton
          account={account}
          balance={balance}
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
          getBalance={getBalance}
        />
      </div>
    </div>
  );
}

export default App;
