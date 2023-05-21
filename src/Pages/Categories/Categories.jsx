import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {
  return (
    <div className="mt-5 mb-5 custom-navbar ">
      <div className="navbar mx-auto container ">
        <Tabs>
          <TabList>
            <div className="container gap-3 mx-auto">
              <button className="text-white mx-auto" to="/">
                <Tab>Title 1</Tab>
              </button>
              <button className="text-white mx-auto" to="/">
                <Tab>Title 2</Tab>
              </button>
              <button className="text-white mx-auto" to="/">
                <Tab>Title 3</Tab>
              </button>
            </div>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
