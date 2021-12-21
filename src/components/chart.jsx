import * as React from 'react';
import Typography from '@mui/material/Typography';
import Chart from '../images/chart.png';



export default function BasicButtons() {
  return (
   
    <Typography>
         
      <div class="chart-box-wrap">
         <div class="canvas-box">
               <img src={Chart} alt="chart" />

               <div class="canvas-dropdown">
                    <select>
                     <option>Status</option> 
                     <option>Status</option> 
                     <option>Status</option> 
                    </select>
               </div>     
         </div>    
         <div class="canvas-box-list">
            <ul>
               <li> <i class="round"></i> Draft</li>
               <li> <i class="round"></i> Pending to review</li>
               <li> <i class="round"></i> Pending to accept</li>
               <li> <i class="round"></i> Validated</li>
               <li> <i class="round"></i> Sent</li>
               <li> <i class="round"></i> Accepted</li>
               <li> <i class="round"></i> Rejected</li>
               <li> <i class="round"></i> Expired</li>

            </ul>
         </div> 
      </div>    

    </Typography>
  );
}