import dummyData from "@/data/dummy.json";

const Page = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-max">
      <h2 className="text-2xl font-bold mb-4">Mutual Funds</h2>
      <ul>
        {dummyData.mutualFunds.map((fund) => (
          <li key={fund.id} className="flex justify-between mb-2">
            <span>{fund.name}</span>
            <span>{fund.price} INR</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
