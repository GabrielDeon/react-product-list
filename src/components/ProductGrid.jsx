import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ProductGrid() {
  //Filter Hooks and Handlers
  const [showOptions, setShowOptions] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState("");

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (filter) => {
    setSelectedFilter(filter);
    setShowOptions(false);
  };

  //Show Elements Hooks and Handlers
  const [showValue, setShowValue] = React.useState(16);

  const handleShowValueChange = (event) => {
    const eventValue = event.target.value;
    if (eventValue.length <= 2) {
      setShowValue(eventValue);
    }
  };

  const handleShowValueKP = (event) => {
    const key = event.key;
    const newValue = showValue + key;

    if (newValue.length > 2) {
      event.preventDefault();
    }
  };

  const handleShowValueBlur = () => {
    if (showValue == "") {
      setShowValue(16);
    }
  };

  return (
    <div>
      <div className="gridControler">
        <div className="gridControlerContent">
          <div className="gccLeft">
            <div className="gccLeftFilter">
              <button className="filterButton" onClick={handleButtonClick}>
                <FontAwesomeIcon className="filterIcon" icon={faSliders} />
                <p className="filterSpecs">Filter</p>
              </button>
              {showOptions && (
                <div className="filter-options">
                  <button onClick={() => handleOptionClick("none")}>
                    {"None"}
                  </button>
                  <button onClick={() => handleOptionClick("name")}>
                    {"Name (A...Z)"}
                  </button>
                  <button onClick={() => handleOptionClick("price")}>
                    {"Price (Higher...Low)"}
                  </button>
                </div>
              )}
            </div>
            <div className="filterInfo">
              <p>Showing 1-16 of 32 results</p>
            </div>
          </div>
          <div className="gccRight">
            <p className="filterSpecs">Show</p>
            <input
              type="number"
              value={showValue}
              onChange={handleShowValueChange}
              onKeyPress={handleShowValueKP}
              onBlur={handleShowValueBlur}
            ></input>
          </div>
        </div>
      </div>
      <div className="gridContent"></div>
      <div className="gridPageControler"></div>
    </div>
  );
}

export default ProductGrid;
