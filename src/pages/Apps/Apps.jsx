import React from 'react';
import useAppData from '../../Hooks/useAppData';
import Card from '../../components/Card/Card';
import { Link } from 'react-router';
import { CiSearch } from "react-icons/ci";

const Apps = () => {
    const {appData} = useAppData()
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='pt-10'>
                    <h1 className='text-[#001931] text-3xl font-bold text-center py-2'>Our All Applications</h1>
                    <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
         </div>
           <div className='flex justify-between items-center mt-5 pl-5 pr-5 mb-5'>
             <div className='font-bold text-2xl'> 
                ({appData.length}) Apps Found
            </div>
             <Link className='btn w-3xs pl-0  ' to='/apps' ><CiSearch className='h-10 w-5' />Search Apps</Link>
           </div>
           <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                    appData.map(data => (
                        <Card key={data.id} data={data}></Card>
                    ))
                }
                </div>
        </div>
    );
};

export default Apps;