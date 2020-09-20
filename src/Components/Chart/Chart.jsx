import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { dailydata } from '../../api';
import styles from './Chart.module.css';

const Chart = ({data : {confirmed,recovered,deaths},country}) => {
    const [dailyydata, setdailydata] = useState([]);

    useEffect(() => {
        const Fetchapi = async () => {
            setdailydata(await dailydata());
        }

        // console.log(dailyydata);

        Fetchapi();
    }, []);

    const Linechart = (
        dailyydata.length ?
            (<Line
                data={{
                    labels: dailyydata.map(({ date }) => date),
                    datasets: [{
                        data: dailyydata.map(({ confirmed }) => confirmed),
                        label: "Infected",
                        fill: true,
                        borderColor: "#3333ff",
                    }, {
                        data: dailyydata.map(({ deaths }) => deaths),
                        label: "Deaths",
                        fill: true,
                        borderColor: "red",
                    }],
                }}
            />) : null
    );

    const Barchart =(
confirmed?
<Bar 
data={{
    labels:['Infected','Recovered', 'Deaths'],
    datasets:[{
        label:'people',
        backgroundColor:['blue','green','red'],
        data:[confirmed.value , recovered.value, deaths.value]
    }]
}}
options={{
    legend:{display:false},
    title:{display:true , text:`Current state in ${country}`},
}}
/>
:null
    );

    return (
       <div className={styles.container}>
{country ? Barchart : Linechart}
       </div>
    )
}
export default Chart;