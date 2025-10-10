import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAppData from '../../Hooks/useAppData';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'
import { ToastContainer, toast } from 'react-toastify';
import Chart from '../../components/Chart/Chart';
import ErrorApp from '../../components/ErrorApp/ErrorApp';
const AppDetails = () => {
    const {id} = useParams()
    const {appData, loading, error} = useAppData()
    const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
        const checkInstallationStatus = () => {
            if (!id || !appData) return;
            const currentData = appData.find(d => String(d.id) === id);
            if (!currentData) return;
            const installedApps = JSON.parse(localStorage.getItem('install') || '[]');
            const appFound = installedApps.some(app => String(app.id) === String(currentData.id));
            setIsInstalled(appFound);
        };
        checkInstallationStatus();
    }, [id, appData]);

    if (loading) {
        return <p>Loading......</p>
    }
    if (error) {
        return <p>Error loading app data.</p>
    }
    const data = appData.find (d => String(d.id) === id)
    if (!data) {
        return <ErrorApp></ErrorApp>;
    }
    const {image,title,downloads,companyName,ratingAvg,reviews,size,description} = data;

  

 const handleInstallButton = () => {
        const existingApp =JSON.parse(localStorage.getItem('install'))
        let updatedApp = []
        if (existingApp){
            updatedApp = [...existingApp, data]
        }
        else{
            updatedApp.push(data)
        }
        localStorage.setItem('install',JSON.stringify(updatedApp))
        setIsInstalled(true);
          toast.success('App is installing')
           
    }

 
    return (
        <div className='flex flex-col min-h-screen bg-base-200'>
            <section>
                <div className='lg:flex grid grid-cols-1 gap-5 m-10  items-center  '>
                <div className=' mr-10'>
                    <img className='lg:w-full md:w-[200px] w-[250px] mx-auto lg:object-cover shadow-xl  border-gray-500   ' src={image} alt="" />
                </div>
                <div className='space-y-3 p-5'> 
                    <h1 className='font-extrabold text-3xl'>{title}</h1>
                    <p className='font-semibold text-[#627382] '>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
                    <div className='border-b-1 border-solid border-b-gray-300 mt-5'>

                    </div>
                    <div className='flex gap-2 mt-5'>
                        <div className='mr-10'>
                            <img className='h-5 w-5' src={downloadImg} alt="" />
                            <p className='text-[#627382]'>Downloads</p>
                            <h1 className='font-extrabold text-2xl'>{downloads}</h1>
                        </div>
                        <div className='mr-10'>
                            <img className='h-5 w-5' src={ratingImg} alt="" />
                            <p className='text-[#627382]'>Average Ratings</p>
                            <h1  className='font-extrabold text-2xl'>{ratingAvg}</h1>
                        </div>
                        <div className='mr-10'>
                            <img className='h-5 w-5' src={reviewImg} alt="" />
                            <p className='text-[#627382]'>Total Reviews</p>
                            <h1  className='font-extrabold text-2xl'>{reviews}</h1>
                        </div>
                    </div>
                    <button  onClick={handleInstallButton} style={{backgroundColor: isInstalled ? 'gray' : '#28a745'}} className='btn bg-[#00D390] text-white'  disabled={isInstalled} > {isInstalled ? 'Installed' : `Install Now (${size} MB)`}</button>
                </div>
            </div>
            <div className='border-b-2 border-solid border-b-gray-400 mb-5 ml-7 mr-7'>

            </div>
            </section>

            <section className='space-y-3 m-10'>
                <h1 className='font-bold text-2xl'>Ratings</h1>
                <Chart></Chart>  
            </section>

                 <div className='border-b-2 border-solid border-b-gray-400 mb-5 ml-7 mr-7'>

            </div>

            <section className='space-y-3 m-10'>
                <h1 className='font-bold text-2xl'>Description</h1>
                <p>{description}</p>
            </section>

               <ToastContainer />
        </div>
    );
};

export default AppDetails;