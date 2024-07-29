import dummyData from "@/data/dummy.json";

const Gold = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Gold</h2>
      <ul>
        {dummyData.gold.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span>{item.price} INR</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gold;
