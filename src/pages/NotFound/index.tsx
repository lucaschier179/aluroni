import { ReactComponent as NotFoundImage } from "assets/notFound/not_found.svg";
import classNames from "classnames";
import stylesTema from "styles/Tema.module.scss";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true,
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          <BiArrowBack size={32} />
          {"Voltar"}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}