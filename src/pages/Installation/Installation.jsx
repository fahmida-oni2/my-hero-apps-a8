import React, { useEffect, useState } from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
const Installation = () => {
    const [install, setInstall] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect( () => {
        const saveApp = JSON.parse(localStorage.getItem('install'))
        if (saveApp) {
            setInstall(saveApp)
        }
    },[]
 )
    const sortItem = (() => {
        if (sortOrder === 'size-asc'){
            return [...install] .sort((p,q) => p.size - q.size)
        }
        else if (sortOrder === 'size-desc'){
            return [...install] .sort((p,q) => q.size - p.size)
        }
        else {
           return  install
        }
    })()


    const handleRemove = id => {
        const existingApp =JSON.parse(localStorage.getItem('install'))
        let updatedApp = existingApp.filter(a=> a.id !== id)
        setInstall(updatedApp)
        localStorage.setItem('install',JSON.stringify(updatedApp))
    }

   
    return (

        <div className='flex flex-col min-h-screen bg-base-200'>
           <div className='pt-10'>
                    <h1 className='text-[#001931] text-3xl font-bold text-center py-2'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
         </div>

          <div className='lg:flex justify-between items-center mt-5 pl-5 pr-5 mb-5 '>
                      <div className='font-bold text-2xl pb-5 lg:pb-0'> 
                         ({sortItem.length}) Apps Found
                     </div>
            <label className='form-control w-full max-w-xs'>
               <select 
               className='select select-bordered'
               value={sortOrder}
               onChange={e => setSortOrder(e.target.value)}
               >
                <option value="none">Sort by Size</option>
                <option value="size-asc">Low-&gt;High</option>
                <option value="size-desc">High-&gt;Low</option>
               </select>
            </label>
        </div>

       <div className='space-y-3 p-5'>
            { sortItem.map(a =>(
 <div key={a.id} className="card card-side bg-base-100 shadow-sm grid lg:flex ">
                    <figure className='mr-5 w-40 h-40 '>
                        <img className='p-3 flex items-center'
                            src={a.image}
                            alt={a.title} />
                    </figure>

                    <div className='card-body'>
                        <h1 className='font-bold'>{a.title}</h1>
                        <div className='flex gap-2 mt-5'>
                            <div className='mr-2 flex gap-1'> 
                                <img className='h-4 w-4' src={downloadImg} alt="" />
                                <p className='text-[#00D390]'>{a.downloads}</p>
                            </div>
                            <div className='mr-2 10 flex gap-1'>
                                <img className='h-4 w-4' src={ratingImg} alt="" />
                                <p className='text-orange-500'>{a.ratingAvg}</p>
                            </div>
                            <div className='mr-2'>
                             <p>{a.size}MB</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center pr-5">
                        <button onClick={ ()=>handleRemove(a.id)} className="btn  bg-[#00D390] text-white">Uninstall</button>
                    </div>
                </div>
                    
                    
                
    
            ) )}
       
</div>


        </div>
        
    );
};

export default Installation;