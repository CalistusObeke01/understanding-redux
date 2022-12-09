import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw, selectAmount } from "./reducer/amountSlice";

export default function App() {
  const amount = useSelector(selectAmount);
  const dispatch = useDispatch();
  const [isDeposit, setDeposit] = useState("");
  const [isWithdrawal, setWithdrawal] = useState("");

  return (
    <div className="App">
      <h1 className="title">Understanding Redux</h1>
      <p className="sub-title">Cash inflow and outflow mechanism with redux</p>
      <div className="amount-container">
        <h3>Amount:</h3>&nbsp;&nbsp; <span className="amount">{amount}</span>
      </div>
      <div className="input-container">
        <input
          type="number"
          value={isDeposit}
          onChange={(e) => setDeposit(e.target.value)}
          placeholder="Amount"
          className="input-fund"
        />
        <button
          className="btn"
          onClick={() => {
            dispatch(deposit(Number(isDeposit)));
            setDeposit("");
          }}
        >
          Deposit
        </button>
      </div>
      <div className="input-container">
        <input
          type="number"
          value={isWithdrawal}
          onChange={(e) => setWithdrawal(e.target.value)}
          placeholder="Amount"
          className="input-fund"
        />
        <button
          className="btn"
          onClick={() => {
            dispatch(withdraw(Number(isWithdrawal)));
            setWithdrawal("");
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}
