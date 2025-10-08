import React from 'react';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router';
import Card from '../../components/Card/Card';
import useAppData from '../../Hooks/useAppData';

const Home = () => {
    const {appData,loading,error} = useAppData()
    const featuredApp = appData.slice(0,8)
    return (
        <div>
            <Banner></Banner>

            <section className=' text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] lg:min-h-[200px] p-10 mt-0'>
                <h1 className='text-center font-bold text-3xl'>Trusted by Millions, Built for You</h1>
                <div className='lg:flex justify-evenly p-5 '>
                    <div className='space-y-2'>
                        <p className='text-center'>Total Downloads</p>
                        <h1 className='text-center font-extrabold text-4xl'>29.6M</h1>
                        <p className='text-center'>21% more than last month</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-center'>Total Reviews</p>
                        <h1 className='text-center font-extrabold text-4xl'>906K</h1>
                        <p className='text-center'>46% more than last month</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-center'>Active Apps</p>
                        <h1 className='text-center font-extrabold text-4xl'>132+</h1>
                        <p className='text-center'>31 more will Launch</p>
                    </div>
                </div>
            </section>
            <section className='mt-10 space-y-3 flex-1 max-w-screen mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 '>
                <div>
                    <h1 className='text-[#001931] text-3xl font-bold text-center py-2'>Trending Apps</h1>
                    <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                    featuredApp.map(data => (
                        <Card key={data.id} data={data}></Card>
                    ))
                }
                </div>
                <div className='flex justify-center items-center'>
                    <Link className='btn w-3xs  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl' to='/apps'>Show All</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;