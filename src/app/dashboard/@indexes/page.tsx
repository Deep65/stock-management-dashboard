import dummyData from "@/data/dummy.json";

const Page = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-max">
      <h2 className="text-2xl font-bold mb-4">Indexes</h2>
      <ul>
        {dummyData.indexes.map((index) => (
          <li key={index.id} className="flex justify-between mb-2">
            <span>{index.name}</span>
            <span>{index.price} INR</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
