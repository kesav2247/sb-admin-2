import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
    return(
   <div className={styles.container}>    <footer className="sticky-footer bg-white">
   <div className="container my-auto">
       <div className="copyright text-center my-auto">
           <span>Copyright &copy; Your Website 2021</span>
       </div>
   </div>
</footer></div>
    );
};


export default Footer;