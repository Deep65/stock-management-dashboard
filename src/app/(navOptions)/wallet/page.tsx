import dummyData from "@/data/dummy.json";

const Wallet = () => {
  const wallet = dummyData.wallet;
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">My Wallet</h2>
      <p>
        <strong>Balance:</strong> {wallet.balance} INR
      </p>
      <h3 className="text-xl font-semibold mt-4">Transactions</h3>
      <ul>
        {wallet.transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between mb-2">
            <span>{transaction.type}</span>
            <span>{transaction.amount} INR</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wallet;
