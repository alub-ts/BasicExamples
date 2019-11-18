import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TerminalHttpProvider } from "@terminal-packages/sdk";
import Web3 from "web3";

window.web3 = new Web3(window.terminal.ethereum);
//skale endpoint = http://sip1.skalenodes.com:10046 configure in metamask as rpc endpoint
function App() {
  const test = () => {
    window.web3.eth.getTransaction(
      "0x46053709b461e47f58ab67e40a7309a5db3f5dfd9bdeba586467b4e95993b9ce",
      (err, res) => {
        console.log(err);
        console.log(res);
      }
    );
  };
  const test2 = () => {
    window.web3.eth.getBalance(
      "0xaD7d7543188e13b63699eEF2f0B963d6d589B47D",
      (err, res) => {
        console.log(err);
        console.log(res);
      }
    );
    //window.web3.eth.getBalance('0xaD7d7543188e13b63699eEF2f0B963d6d589B47D').then(console.log)
  };
  const test3 = () => {
    //can not use promises without terminal.window.etherum
    window.web3.eth.getBlockNumber().then(console.log);
  };
  return (
    <div className="App">
      <button onClick={() => test()}>Test</button>
      <button onClick={() => test2()}>Test2</button>
      <button onClick={() => test3()}>BlockNumber</button>
    </div>
  );
}

export default App;
