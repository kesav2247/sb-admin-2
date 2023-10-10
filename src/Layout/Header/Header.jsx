import React from "react";
import styles from "./Header.module.css"


const Header = () => {
    return(
   <div className={styles.container}>
    <div className={styles.nav}>
        <div className={styles.formcontent}>
      <form >
        <input type="text" placeholder="Search For..." />
        <button><i class="fas fa-search fa-sm"></i></button>
      </form>
      </div>
      <div className={styles.Headerarea}>
        <a href="#/" className={styles.Headerlogo}>
      <i className="fas fa-bell fa-fw"></i>
      <span className={styles.upperarea}>3+</span>
      </a>
      </div>
      <div className={styles.mail}>
        <a href="#/" className={styles.mailinside}>
        <i class="fas fa-envelope fa-fw"></i>
        <span className={styles.uppertext}>7</span>
        </a>
      </div>
      <div className={styles.verticaline}>
      </div>
      <div className={styles.Name}>
        <a href="#/">
            <p>Kesavan J</p>
        </a>
      </div>
      <div className={styles.image}> 
      <img src="https://strong-cucurucho-f2380e.netlify.app/static/media/profile.28817a9a525894d99d681c82d5f3a257.svg" alt="" />
      </div>
        </div>
       
   </div>
    );
};


export default Header;