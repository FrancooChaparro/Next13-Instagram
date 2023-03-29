import styles from "../styles/Posts.module.css";
import {FaRegComment } from "react-icons/fa";
import {BsSave2 } from "react-icons/bs";
import {FiHeart, FiSend } from "react-icons/fi";
import { AiTwotoneHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export const Posts = ({ img }) => {

  return (
    <div className={styles.ContainerPost}>
        <div className={styles.ContainerHeader}>
            <div className={styles.ContainerImg}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMDhSEs5xCFP41FawGvDnYYjQdzDhSMVlhbAWp_Pa&s" alt="" />
            </div>
            <div className={styles.ContainerData}>
                    <div  className={styles.name}><span>Cristina Coria</span></div>
                    <div  className={styles.place}><span>Nuñez, ciudad de Buenos Aires</span></div> 
            </div>
            <div className={styles.ContainerDesplegable}>
                <span>. . .</span>
            </div>
        </div>



        <div className={styles.ContainerPhoto}>
            <img src={img} alt="" />
        </div>


        <div className={styles.ContainerIcons}>
                <div className={styles.ContainerIconsIzq}>
                     <div ><FiHeart /></div>
                    <div><FaRegComment /></div>
                    <div><FiSend /></div>
                 </div>
                 <div className={styles.ContainerIconsDer}>
                    <div >
                          <BsSave2 />
                    </div>
                 </div>    
        </div>
         <div className={styles.ContainerMG}>
            <div><span><AiTwotoneHeart style={{fontSize: "16px"}}/> 99 Likes</span></div>
         </div>



        <div className={styles.ContainerComments}>
           
          <div className={styles.ResponsiveComments}>
                   <input  type="text" placeholder='Escribe un comentario...' className={styles.ResponsiveInput} />
              </div>
            
        </div>
    </div>
  )
}
