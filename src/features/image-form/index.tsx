import {FaRegImage} from "react-icons/fa6";
import styles from './index.module.css';
import {useState} from "react";
import {Image} from "@components/Image";

export const ImageForm = () => {

  const [image, setImage] = useState<File>();

  return (<article> { image ? <Image name={image.name} image={URL.createObjectURL(image)} /> :
      <form className={styles.form}>
        <div className={styles["wrapper-no-image"]}>
          <FaRegImage size={80} style={{
            color: "#b0b0b0"
          }}/>
          <input type="file" onChange={(event) => {
            setImage(event.target.files?.[0]);
          }} />
        </div>
      </form>
  }
  </article>)

}