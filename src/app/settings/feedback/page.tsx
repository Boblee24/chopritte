const Feedback = () => {
  return (
    <div className="p-3 w-full">
      <div className="">
        <h1>How was your overall experience?</h1>
        <p>It will help us serve you better</p>
      </div>
      <div className="w-full flex justify-center items-center mt-9">
        <ul className="list-none flex justify-around w-full">
          <li className="text-[33px]">😡</li>
          <li className="text-[33px]">🤨</li>
          <li className="text-[33px]">🙂</li>
          <li className="text-[33px]">😁</li>
          <li className="text-[33px]">😍</li>
        </ul>
      </div>
      <div>
        <h1>What is Wrong?</h1>
        <ul className="list-none grid grid-cols-2 gap-4 gap-y-7 mt-4">
          <li className="w-[150px] flex justify-center items-center py-3 rounded-md shadow-top-bottom">
            Application Bugs
          </li>
          <li className="w-[150px] flex justify-center items-center py-3 rounded-md shadow-top-bottom">
            Slow Loading
          </li>
          <li className="w-[150px] flex justify-center items-center py-3 rounded-md shadow-top-bottom">
            Bad Interaction
          </li>
          <li className="w-[150px] flex justify-center items-center py-3 rounded-md shadow-top-bottom">
            Weak Functionality
          </li>
          <li className="w-[150px] flex justify-center items-center py-3 rounded-md shadow-top-bottom">
            Customer Services
          </li>
          <li className="w-[150px] flex justify-center items-center py-3 rounded-md shadow-top-bottom">
            Other Problems
          </li>
        </ul>
      </div>
      <div className="mt-9">
        <h1>Recommendations</h1>
        <textarea
          name="recommendation"
          id="recommend"
          placeholder="How can we do better?"
          className="w-full h-[200px] bg-[#C5C4C41A] rounded-md p-3 mt-4"
        ></textarea>
        <button className="w-full bg-[#E23E3E] py-3 rounded-md mt-4 font-semibold text-[#FFFFFF]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;
