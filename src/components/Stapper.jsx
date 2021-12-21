import * as React from 'react';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function BasicButtons() {
  return (
   
    <Typography>
         
    <div class="stapper-wrap">
      <div class="stapp-box">
          <div class="stapp-count">
              <h4>Maker</h4>
              <span class="number-box">1</span>
              <h5>Draft</h5>
          </div> 
          <div class="stapp-count">
              <h4>&nbsp;</h4>
              <span class="number-box">2</span>
              <h5>Pending to review</h5>
          </div>
          <div class="stapp-count">
              <h4>Checker</h4>
              <span class="number-box">3</span>
              <h5>Validated</h5>
          </div>  
          <div class="stapp-count">
              <h4>&nbsp;</h4>
              <span class="number-box">4</span>
              <h5>Sent</h5>
          </div> 
          <div class="stapp-count">
              <h4>Recipient</h4>
              <span class="number-box">5</span>
              <h5>Accepted</h5>
          </div>       
      </div>

      <div class="stapp-content-box">
        <div class="stapp-row">
            <div class="stapp-col">
              <label>ID</label>
              <h3>012345</h3>
            </div>
            <div class="stapp-col">
              <label>Name</label>
              <h3>Report's Name</h3>
            </div>
            <div class="stapp-col">
              <label>Product</label>
              <h3>AnnexIV</h3>
            </div>
        </div>

        <div class="stapp-row">
            <div class="stapp-col">
              <label>ID</label>
              <h3>012345</h3>
            </div>
            <div class="stapp-col">
              <label>Name</label>
              <h3>Report's Name</h3>
            </div>
            <div class="stapp-col">
              <label>Product</label>
              <h3>AnnexIV</h3>
            </div>
        </div>


        <div class="stapp-row">
            <div class="stapp-col">
              <label>ID</label>
              <h3>012345</h3>
            </div>
            <div class="stapp-col">
              <label>Name</label>
              <h3>Report's Name</h3>
            </div>
            <div class="stapp-col">
              <label>Product</label>
              <h3>AnnexIV</h3>
            </div>
        </div>


      </div>

      <div class="stapp-footer">
          <a href="#" class="pluse-btn"> <AddIcon/> Parameters </a>
          <a href="#" class="pluse-btn"><AddIcon/> Comments </a>
          <a href="#" class="pluse-btn"> <AddIcon/> Status log </a>
          <a href="#" class="btn"> Read </a>
          <a href="#" class="border-btn"> <KeyboardArrowDownIcon/> Change status </a>
      </div>

    </div>

    </Typography>
  );
}