import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Categories.css";
import SingleToy from "../SingleToys/SingleToy";

const Categories = () => {
  // const toys = useLoaderData();
  const [activeTab, setActiveTab] = useState(0);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch data and set the toys state
    fetch("http://localhost:5000/collections")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  // console.log(toys);
  return (
    <div className="mt-5 mb-5 custom-navbar container mx-auto ">
      <div className="">
        <Tabs>
          <TabList className="text-white tablist">
            <Tab onClick={() => setActiveTab(0)}>Racing Cars</Tab>
            <Tab onClick={() => setActiveTab(1)}>Sports Cars</Tab>
            <Tab onClick={() => setActiveTab(2)}>Classic Cars</Tab>
          </TabList>

          <TabPanel>
           
              
              <div className='container mx-auto custom-bg mb-2'>
            <div className='space-y-4 grid grid-cols-3 mx-12 items-end justify-items-center  py-8 justify-center gap-x-2 '>
            {toys
              .filter((toy) => toy.subcategory_id === 1)
              .map((toy) => (
                <SingleToy key={toy.id} SingleToy={toy} />
              ))}  
        </div>
        </div>
          </TabPanel>
          <TabPanel>
            
               <div className='container mx-auto custom-bg mb-2'>
            <div className='space-y-4 grid grid-cols-3 mx-12 items-end justify-items-center  py-8 justify-center gap-x-2 '>
            {toys
              .filter((toy) => toy.subcategory_id === 2)
              .map((toy) => (
                <SingleToy key={toy.id} SingleToy={toy} />
              ))}
        </div>
        </div>
          </TabPanel>
          <TabPanel>
            
               <div className='container mx-auto custom-bg mb-2'>
            <div className='space-y-4 grid grid-cols-3 mx-12 items-end justify-items-center  py-8 justify-center gap-x-2 '>
            {toys
              .filter((toy) => toy.subcategory_id === 3)
              .map((toy) => (
                <SingleToy key={toy.id} SingleToy={toy} />
              ))}
        </div>
        </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
