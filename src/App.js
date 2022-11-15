import React, {useState} from "react";
import './style.css';
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
              <div className="card-container" >
                <div className="card ">
                <div className="card-body">
                  <div className="template" key={val.id}>
                  <h3 className="card-title">{val.title}</h3>
                  <div className="cls-desc">{val.about}</div>
                  <div className="card-read">Read</div>
                      <img src={val.image} alt="" className="card-media"/>
                  </div> 
                  
                  
                </div>
                </div>
              </div>
                )
              })
          }
        </div>
        </div>
    </>
  )
}

export default App;
