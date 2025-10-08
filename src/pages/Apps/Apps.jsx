import React, { useState } from 'react';
import useAppData from '../../Hooks/useAppData';
import Card from '../../components/Card/Card';
import { Link } from 'react-router';
import { CiSearch } from "react-icons/ci";

const Apps = () => {
    const {appData} = useAppData()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term 
    ? appData.filter(appData => 
        appData.title.toLocaleLowerCase().includes(term)
    )
    : appData
    console.log(searchedApps)
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='pt-10'>
                    <h1 className='text-[#001931] text-3xl font-bold text-center py-2'>Our All Applications</h1>
                    <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
         </div>
           <div className='lg:flex justify-between items-center mt-5 pl-5 pr-5 mb-5 '>
             <div className='font-bold text-2xl pb-5 lg:pb-0'> 
                ({searchedApps.length}) Apps Found
            </div>
                <label className="input gap-0">
  <span className="label"><CiSearch className='h-10 w-5' /></span>
  <input value={search} onChange={e=> setSearch(e.target.value)} type="search" placeholder="Search Apps" />
</label>
           </div>
           <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                    searchedApps.map(data => (
                        <Card key={data.id} data={data}></Card>
                    ))
                }
                </div>
        </div>
    );
};

export default Apps;