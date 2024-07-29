import dummyData from "@/data/dummy.json";

const Holdings = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">My Holdings</h2>
      <ul>
        {dummyData.holdings.map((holding) => (
          <li key={holding.id} className="flex justify-between mb-2">
            <span>{holding.name}</span>
            <span>
              {holding.quantity} @ {holding.price} INR
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Holdings;
