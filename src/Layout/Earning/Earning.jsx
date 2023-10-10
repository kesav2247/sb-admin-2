import React from "react";
import styles from "./Earning.module.css"


const Earning = () => {


    const card = [

        {
            id: 1,
            text: <b>Earning(Monthly)</b>,
            value: <b>$40000</b>,
            icon: "fas fa-calendar fa-2x text-gray-300 text-gray-300",
            color: '#4e73df',

        },
        {
            id: 2,
            text: <b>Earning(Annual)</b>,
            value: <b>$215000</b>,
            icon: "fas fa-dollar-sign fa-2x text-gray-300 text-gray-300",
            color: '#1cc88a',

        },
        {
            id: 3,
            text: <b>Tasks</b>,
            value: <b>50%</b>,
            icon: "fas fa-clipboard-list fa-2x text-gray-300 text-gray-300",
            color: '#36b9cc',

        },
        {
            id: 4,
            text: <b>Pending Request</b>,
            value: <b>18</b>,
            icon: "fas fa-comments fa-2x text-gray-300 text-gray-300",
            color: '#f6c23e',


        },

    ]


    return (

        <div className={styles.container}>
            <div className="row">
                {card.map((item, id) => {
                    return (
                        
                            <div key={id} className=" col-md-3">
                                <div className={styles.band}>
                                <div className="card shadow ">
                                    <div className="card-body">
                                        <div className="flex flex-wrap item-center ">
                                            <div className=" flex flex-row">
                                                <div className='flex flex-col'>
                                                    <div className="text-xs font-bold  uppercase mb-1" style={{
                                                        color: item.color,

                                                    }}>
                                                        {item.text}
                                                    </div>
                                                    <div className="mb-0 font-bold text-gray-800 text-xl" style={{

                                                    }}>
                                                        {item.value}
                                                    </div>
                                                </div>
                                                <div className={styles.main}>
                                                    <i className={`${item.icon} text-gray-300`}></i>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
           
        </div>
       

    )
}

export default Earning;