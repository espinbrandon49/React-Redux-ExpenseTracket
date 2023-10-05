import React from 'react'

export default function Balance({balance, formatter}) {
  return (
    <div className="balancesubheading">
      <h4>Your Balance</h4>
      <h2>{formatter.format(balance)}</h2>
    </div>
  )
}
