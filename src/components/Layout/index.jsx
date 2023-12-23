import { Outlet } from "react-router-dom";
import Header from "./Header";

import * as S from "./index.styled";

function Layout() {
  return (
    <S.Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </S.Container>
  );
}

export default Layout;
