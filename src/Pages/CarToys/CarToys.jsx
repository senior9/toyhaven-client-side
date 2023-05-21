import React, { useEffect, useState } from 'react';
import SingleToy from '../SingleToys/SingleToy';


const CarToys = () => {
    const [toys,setToys] =useState([]);

    useEffect(()=>{
        fetch('cars-toys.json')
      .then(res=>res.json())
      .then(data=>setToys(data.toys))
    },[])
    return (
        <div className='container mx-auto custom-bg mb-2'>
            <div className='space-y-4 grid grid-cols-3 mx-12 items-end justify-items-center  py-8 justify-center gap-x-2 '>
            {
                toys.map(toy => <SingleToy
                key={toy.id}
                SingleToy={toy}
                ></SingleToy>)
            }
        </div>
        </div>
    );
};

export default CarToys;