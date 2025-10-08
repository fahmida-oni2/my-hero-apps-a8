import React from 'react';
import Banner from '../../components/Banner/Banner';

const Home = () => {
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
        </div>
    );
};

export default Home;