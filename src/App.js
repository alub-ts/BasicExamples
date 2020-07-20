import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";

const web3Provider = window.ethereum;
const web3 = new Web3(web3Provider);

function App() {
  const sendTx = () => {
    web3.eth.getAccounts().then((accounts) => {
      console.log(accounts);

      web3.eth
        .sendTransaction({
          from: accounts[0],
          to: accounts[0], //sends to itself
          value: web3.utils.toWei(".01", "ether"),
        })
        .then(console.log);
    });
  };

  const verify = () => {
    web3Provider.enable();
    console.log("signed in");
  };

  const test = () => {
    web3.eth.getBlockNumber().then(console.log);
  };
  return (
    <div className="App">
      <button onClick={() => verify()}>Enable MM</button>
      <button onClick={() => sendTx()}>Send Tx</button>
      <button onClick={() => test()}>BlockNumber</button>
    </div>
  );
}

export default App;
