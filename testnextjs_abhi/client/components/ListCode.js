// Table name : list_code

import React, { useEffect } from "react";
import axios from 'axios';

const ListCode = () => {    
    
    useEffect(() =>{
        let response = []
        let updatedata = []

        const getAllTableRecordFunction1 = async (var_link) => {
            // response = await axios.get(`${process.env.API_URL}api/${var_link}/`);

            response = await axios.get(`${var_link}/`);

            console.log("response is : ", response.data)                
        }
        getAllTableRecordFunction1('url_check');

        const getAllTableRecordFunction = async (var_link) => {                        

            // response = await axios.get(`${process.env.API_URL}api/${var_link}/`);

            response = await axios.get(`${var_link}/`);

            updatedata = await response.data.v_out_data;

            console.log("updatedata is : ", updatedata)                  
              
        }
        getAllTableRecordFunction('url_param_view_check');

    }, [])   
    
    return (
                
        <>
            
        </>        
    );
};

export default ListCode;
