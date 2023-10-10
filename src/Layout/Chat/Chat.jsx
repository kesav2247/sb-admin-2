import React from "react";
import styles from "./Chat.module.css" 
// import linechat from "./linechat.png"

let Chat = () => {
    return (
        <div className={styles.container}>
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">

                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                            <div className="dropdown no-arrow">
                                <a className="dropdown-toggle" href="/#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="/#">Action</a>
                                    <a className="dropdown-item" href="/#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/#">Something else here</a>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="chart-area "> 
                            <div className={styles.linechat}>
                                    <img  src="https://d1hj4to4g9ba46.cloudfront.net/questions/462025.PNG" alt="linechat" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
                               
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="/#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="/#">Action</a>
                                            <a class="dropdown-item" href="/#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="/#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card-body">
                                    <div class="chart-pie pt-4 pb-2">
                                        <div className={styles.pichat}>
                                        <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/03/Doughnut-Chart-in-Excel-Example-1-5.png" alt="pichat" />
                                        </div>
                                    </div>
                                    <div class="mt-4 text-center small">
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-primary"></i> Direct
                                        </span>
                                        &nbsp;
                                        &nbsp;
                                          &nbsp;
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-success"></i> Social
                                        </span>
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-info"></i> Referral
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        
    )
}

export default Chat; 