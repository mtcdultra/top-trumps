import "bootstrap/dist/css/bootstrap.min.css";
import '../components/Cards.css'
import "./style.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Api } from "../services/Api";
import { Cards } from "../components/Cards";

import React, { useEffect, useState } from "react";

function App() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    Api.get("/collections").then((response) => {
      setCollections(response.data);
    });
  }, []);

  return (
    // <div className="border">
      <div className="table">
      <Tabs defaultActiveKey="0" id="uncontrolled-tab-example" className="tabs-item">
        {Object.values(collections).map((collection, index) => {
          return (
            <Tab eventKey={index} title={Object.keys(collection)} key={index} className='tabs'>
              {Object.values(collection)[0].map((item, index) => {
                return (
                  <div>
                    <Cards item={item} collection={Object.keys(collection)} />
                  </div>
                );
              })}
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default App;
