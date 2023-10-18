import "./App.css";
import { useState } from "react";
import { list } from "./constants/accordionData";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggle = (id) => {
    if (selectedItem === id) {
      return setSelectedItem(null);
    }
    setSelectedItem(id);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold underline text-yellow-400 m-2 p-1">
        My Accordion
      </h2>
      <div>
        {list.map((item) => {
          return (
            <div
              className="border border-solid border-black m-2 bg-yellow-100"
              key={item.id}
            >
              <div
                className="font-semibold mx-1 my-0.5 p-0.5 text-red-500 flex justify-between items-center"
                onClick={() => toggle(item.id)}
              >
                {item.question}
                <span className="text-2xl my-0.5">
                  {selectedItem === item.id ? "-" : "+"}
                </span>
              </div>
              <div
                className={`font-normal mx-1 p-0.5 ${
                  selectedItem === item.id ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
