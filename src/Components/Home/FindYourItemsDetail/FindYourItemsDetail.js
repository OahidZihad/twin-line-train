import React from "react";

const FindYourItemsDetail = ({ foundItem }) => {
  console.log("foundItem", foundItem);
  return (
    <div className="container-fluid">
      <div className="row">
        {foundItem.map((item) => (
          <div className="col-md-3">
            <div
              className="card text-white bg-danger ms-2 me-2 mt-4"
              style={{ width: "100%", height: "250px", overflow: "auto" }}
            >
              <div class="card-header">Founder: {item.email}</div>
              <div class="card-body">
                <h5 class="card-title">{item.item}</h5>
                <p class="card-text">{item.description}</p>
              </div>
              <div className="card-footer" style={{ fontSize: "12px" }}>
                Found Date: {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindYourItemsDetail;
