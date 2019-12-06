import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  TerminalHttpProvider,
  SourceType,
  EnvironmentTypes
} from "@terminal-packages/sdk";
import Web3 from "web3";

const web3 = new Web3(window.terminal.ethereum);

function App() {
  const sendTx = () => {
    web3.eth.getAccounts().then(accounts => {
      console.log(accounts);
      web3.eth
        .sendTransaction({
          from: accounts[0],
          to: accounts[0],
          value: web3.utils.toWei(".01", "ether")
        })
        .then(console.log);
    });
  };
  const test = () => {
    web3.eth.getBlockNumber().then(console.log);
  };
  return (
    <div className="App">
      <button onClick={() => sendTx()}>Send Tx</button>
      <button onClick={() => test()}>BlockNumber</button>
    </div>
  );
}

export default App;
