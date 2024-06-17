import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { ProductTemplate, productArray } from "./Product";
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
  const [perPage, setPerPage] = React.useState(15);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(Math.ceil(productArray.length / perPage));
  const [endIndex, setEndIndex] = React.useState(currentPage * perPage);

  console.log("startIndex: " + ((currentPage - 1) * perPage + 1));
  console.log("endIndex: " + (Math.min(endIndex, productArray.length)));  
  
  const currentItems = productArray.slice(((currentPage - 1) * perPage), (Math.min(endIndex, productArray.length)) );
  console.log(currentItems);

  React.useEffect(() => {
    const tp = Math.ceil(productArray.length / perPage);
    setTotalPages(tp);
  }, [perPage]);

  React.useEffect(() => {
    setEndIndex(currentPage * perPage);
  }, [currentPage, perPage]);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handlePerPageChange = (event) => {
    const eventValue = parseInt(event.target.value) || 0;
    if (eventValue.length <= 2) {
      setPerPage(eventValue);
    }
  };

  const handlePerPageKP = (event) => {
    const key = event.key;
    const newValue = perPage + key;

    if (newValue.length > 2) {
      event.preventDefault();
    }
  };

  const handlePerPageBlur = () => {
    if (perPage == "" || perPage == 0) {
      setPerPage(16);
    }
  };

  return (
    <div className="grid">
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
              <p>
                Showing {(currentPage - 1) * perPage + 1}-
                {Math.min(endIndex, productArray.length)} of{" "}
                {productArray.length} results
              </p>
            </div>
          </div>
          <div className="gccRight">
            <p className="filterSpecs">Show</p>
            <input
              type="number"
              value={perPage}
              onChange={handlePerPageChange}
              onKeyPress={handlePerPageKP}
              onBlur={handlePerPageBlur}
            ></input>
          </div>
        </div>
      </div>
      <div className="gridContent">
        {currentItems.map((item) => {
          return <ProductTemplate key={item.id} props={item} />;
        })}
      </div>
      <div className="gridPageControler">
        <div className="gridPagination">
          {Array.from(Array(totalPages), (item, index) => {
            return (
              <button
                className={`pageNumberBtn ${
                  index + 1 === currentPage ? "active" : ""
                }`}
                key={index + 1}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            id="paginationNext"
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
