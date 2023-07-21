import Menu from "components/Menu";
import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./Routes.module.scss";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <header className={styles.header}>
          <div className={styles.header__text}>
            A Casa do Código e da Massa
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
      </Router>
    </main>
  );
}
