import React, { useState } from "react";
import styles from "./Sidebar.module.css"


const Sidebar = () => {

    const [isactive, setisactive] = useState(false)


    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.main}>
                    <a href="/#" className={styles.logo}>
                        <div className={styles.rotate}>
                            <i className="fas fa-laugh-wink icon"><span>SB ADMIN<sup>2</sup></span> </i>
                        </div>

                    </a>
                    <hr className="bordercolour" />

                    <a href="/#" className={styles.dashbord}>
                        <div>
                            <i className="fas fa-fw fa-tachometer-alt "></i>
                            <span>Dashboard</span>
                        </div>
                    </a>
                    <hr className="bordercolour" />
                    <div>
                        INTERFACE
                    </div>
                    <br />
                    <div className={styles.dropdown}>
                        <div className={styles.dropdownbtn}>
                            <i className="fas fa-fw fa-cog "></i>
                            <span onClick={(e) => setisactive(!isactive)}>&nbsp;&nbsp;Components</span>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
                        </div>
                        {isactive && (
                            <div className={styles.dropdowncontent}>
                                <div className={styles.dropdownitem}>
                                    <h6 className={styles.collapsheader}>CUSTOM COMPONENTS:</h6>
                                </div>
                                <div className={styles.dropdownitem}>
                                    <p>Buttons</p>
                                </div>
                                <div className={styles.dropdownitem}>
                                    <p>Cards</p>
                                </div>
                            </div>

                        )}
                    </div>
                    <br />
                    <div className={styles.utility}>
                        <div className={styles.utilitybtn}>
                            <i class="fas fa-fw fa-cog w-1/10 text-left"></i>
                            <span>&nbsp;&nbsp;Utilities</span>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <i className="fa-solid fa-chevron-right "></i>
                        </div>
                    </div>
                    <hr className="bordercolour" />
                    <div>
                        ADDONS
                    </div>
                    <br />
                    <div>
                        <div >
                            <i className="fas fa-fw fa-folder w-1/10 text-left"></i>
                            <span>&nbsp;&nbsp;Pages</span>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
                        </div>
                    </div>
                    <br />
                    <div>
                        <i className="fas fa-fw fa-chart-area w-1/10 text-left"></i>
                        <span>&nbsp;&nbsp;Charts</span>
                    </div>
                    <br />
                    <div>
                        <i className="fas fa-fw fa-table w-1/10 text-left"></i>
                        <span>&nbsp;&nbsp;Tables</span>
                    </div>
                    <hr className="bordercolour" />
                    <div className={styles.sidebarbtn}>
                        <button ><i className="fa-solid fa-chevron-left "></i></button>
                    </div>

                    <div className={styles.sidebarcard}>
                    <img src="https://strong-cucurucho-f2380e.netlify.app/static/media/rocket.6040710aad72134879f57e28762e010d.svg" alt="" />

                    <p><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>

                    <button><a className={styles.upgradebtn} href="https://startbootstrap.com/theme/sb-admin-pro">
                        Upgrade to pro!
                    </a></button>
                    </div>




                </div>



            </div>
        </>

    );
};


export default Sidebar;