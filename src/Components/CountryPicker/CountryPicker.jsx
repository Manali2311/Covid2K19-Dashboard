import React ,{useState , useEffect} from 'react';
import {NativeSelect , FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchcountries } from '../../api';

const CountryPicker = ({handlecountrychange}) =>{

    const [fetchedcontries , setfetchedcontries] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () =>{
            setfetchedcontries(await fetchcountries());
        }

        fetchAPI();
    },[setfetchedcontries]);

    //  console.log(fetchedcontries);

    return(
       <FormControl className={styles.container}>
           <NativeSelect defaultValue="" onChange={(e)=>handlecountrychange(e.target.value)}>
               <option value="">Global</option>
               {fetchedcontries.map((country , i)=> 
               <option value={country} key={i}>{country}</option>
               )}
           </NativeSelect>
       </FormControl>
    )
}
export default CountryPicker;