import React from "react";
import styles from "./Content.module.css"


let Content = () => {
    return(
<div className={styles.container}>
    <div className="row">
        <div className={styles.content}>
         <h3>Dashboard</h3>
         <a href="#/">
         <i class="fas fa-download fa-sm text-white mt-2 px-2"></i>
         Generate Report
         </a>
        </div>
    </div>
</div>
    )
}

export default Content