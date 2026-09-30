const ConnectButton = ({
  account,
  balance,
  connectWallet,
  disconnectWallet,
  getBalance,
}) => {
  return (
    <>
      {account ? (
        <>
          <p>Balance: {balance ?? "Loading..."} ETH</p>
          <button onClick={getBalance}>Refresh balance</button>
          <button onClick={disconnectWallet}>Disconnect</button>
        </>
      ) : (
        <button onClick={connectWallet}>Connect</button>
      )}
    </>
  );
};

export default ConnectButton;