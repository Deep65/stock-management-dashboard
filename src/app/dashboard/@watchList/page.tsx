import dummyData from "@/data/dummy.json";

const Page = () => {
  return (
    <div className="p-4  w-max bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
      <ul>
        {dummyData.watchlist.map((stock) => (
          <li key={stock.id} className="flex justify-between mb-2 gap-4">
            <span>{stock.name}</span>
            <span>{stock.price} INR</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
