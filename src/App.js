import "./App.css";
import { starIcon } from "./assets";
import { Entry } from "./components";
import { useState } from "react";

function App() {
  const elements = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus elit metus, sit amet tempus nisi euismod congue. Pellentesque iaculis lacinia ipsum vitae viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse elementum luctus dolor vitae aliquet. Sed tempus viverra massa, vel dictum nibh facilisis.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus elit metus, sit amet tempus nisi euismod congue. Pellentesque iaculis lacinia ipsum vitae viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse elementum luctus dolor vitae aliquet. Sed tempus viverra massa, vel dictum nibh facilisis.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus elit metus, sit amet tempus nisi euismod congue. Pellentesque iaculis lacinia ipsum vitae viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse elementum luctus dolor vitae aliquet. Sed tempus viverra massa, vel dictum nibh facilisis.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus elit metus, sit amet tempus nisi euismod congue. Pellentesque iaculis lacinia ipsum vitae viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse elementum luctus dolor vitae aliquet. Sed tempus viverra massa, vel dictum nibh facilisis.",
    },
  ];
  const [active, setActive] = useState(null);
  return (
    <div className="App flex__center">
      <div className="accordion">
        <div className="accordion-header">
          <img src={starIcon} alt="star" />
          <h1>FAQs</h1>
        </div>

        <div className="accordion-elements">
          {elements.map((entry, index) => (
            <Entry
              title={entry.title}
              desc={entry.desc}
              active={active}
              setActive={setActive}
              index={index}
              key={"e" + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
