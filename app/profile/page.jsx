import styles from "../page.module.css";
import Franco from "../../images/Franco.jpg"
import { VscSettingsGear } from "react-icons/vsc";
import { BsPostcard } from "react-icons/bs";
import { FaRegCaretSquareLeft } from "react-icons/fa";
import { BsSave2 } from "react-icons/bs";
import { RiFolderUserLine } from "react-icons/ri";
import Image from 'next/image'

export default function Profile() {
  return (
    <div className={styles.ContainerProfile}>
<div className={styles.HeaderProfile}>
    <div className={styles.ContainerImg}>
        <Image src={Franco} alt="img" />
    </div>
    <div className={styles.ContainerData}>
        <div className={styles.top}>
          <div> <span>Franco Chaparro</span> </div>
          <div><button style={{marginTop: "2px"}}> <strong><span style={{fontSize: "12px"}}>Editar Perfil</span></strong></button></div>
          <div><VscSettingsGear style={{marginTop: "13px",fontSize: "19px"}}/></div>
        </div>
        <div className={styles.mid}>
          <div> <strong>1000</strong> posts</div>
          <div> <strong>1000</strong> followers</div>
          <div> <strong>1000</strong> following</div>
        </div>
        <div className={styles.bot}>
           <div> <span className={styles.Subtitle}><strong>Franco Chaparro</strong></span></div>
           <div><span className={styles.hash}>#ReactJS #JavaScript #Nodejs</span> </div>
        </div>
    </div>
</div>
<div className={styles.BodyProfile}>
      <div className={styles.BodyMenu}>
          <div><span><BsPostcard />  POSTS</span></div>
          <div><span><FaRegCaretSquareLeft />  IGTV</span></div>
          <div><span><BsSave2 />  SAVED</span></div>
          <div><span><RiFolderUserLine />  TAGGED</span></div>
      </div>
      <div className={styles.BodyPosts}>
        <div className={styles.ImgCont}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" /></div>
        <div className={styles.ImgCont}><img src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg" alt="" /></div>
        <div className={styles.ImgCont}><img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
      </div>
</div>
</div>
  );
}


