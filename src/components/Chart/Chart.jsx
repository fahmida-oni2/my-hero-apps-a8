import React from 'react';
import { BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer, Legend} from'recharts';
import useAppData from '../../Hooks/useAppData';
import { useParams } from 'react-router';

const Chart = () => {
 const {id} = useParams()
 const {appData, loading, error} = useAppData()
  if (loading) {
        return <p>Loading......</p>
    }
    if (error) {
        return <p>Error loading app data.</p>
    }
   const data = appData.find (d => String(d.id) === id)
   console.log(data)
    const {ratings} = data
  const chartData = [...ratings].reverse();

  
  return (
   
            <div style={{ width: '100%', height: 350, padding: '20px', backgroundColor: '#f5f7f9' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e0e0e0" />
          <XAxis 
            type="number" 
            tickLine={false} 
            axisLine={false}
            stroke="#999" 
          />
          
          <YAxis 
            dataKey="name" 
            type="category" 
            tickLine={false} 
            axisLine={false}
            stroke="#999"
          />
          
          <Tooltip 
            cursor={{ fill: 'gray' }} 
            formatter={(value) => [value, " Count"]}
          />
         <Legend />
          <Bar 
            dataKey="count" 
            fill='#FF8811' 
            barSize={30} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
        )
    }
export default Chart;