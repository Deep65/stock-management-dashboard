import dummyData from "@/data/dummy.json";

const Page = () => {
  return (
    <>
      <div className="bg-white p-4 text-black shadow-md rounded-lg w-max ">
        <h2 className="text-2xl font-bold mb-4">F&O</h2>
        <ul>
          {dummyData.fno.map((index) => (
            <li key={index.id} className="flex justify-between mb-2 gap-4">
              <span>{index.name}</span>
              <span>{index.price} INR</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page;
