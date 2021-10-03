import React, { useEffect, useState } from "react";
import FindYourItemsDetail from "../FindYourItemsDetail/FindYourItemsDetail";
import Navbar from "../Navbar/Navbar";

const FindYourItems = () => {
  const [foundItems, setFoundItems] = useState([]);
  useEffect(() => {
    fetch("https://nameless-waters-10044.herokuapp.com/lostItems")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFoundItems(data);
      });
  }, []);
  return (
    <section>
      <div className="mt-2">
        <Navbar></Navbar>
      </div>
      <div>
        {/* {foundItems.map((foundItem) => (
          <FindYourItemsDetail
            key={foundItem._id}
            foundItem={foundItems}
          ></FindYourItemsDetail>
        ))} */}
        <FindYourItemsDetail foundItem={foundItems}></FindYourItemsDetail>
      </div>
    </section>
  );
};

export default FindYourItems;
