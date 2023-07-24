import { ReactComponent as NotFoundImage } from "assets/notFound/not_found.svg";
import classNames from "classnames";
import stylesTema from "styles/Tema.module.scss";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true,
    })}>
      <NotFoundImage />
    </div>
  );
}