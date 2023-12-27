import { Routes, Route } from "react-router-dom";
import * as Pages from "pages";
import * as Layouts from "layouts";

import "./globals.scss";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<Layouts.Auth />}>
          <Route path="/sign-in" element={<Pages.SignIn />} />
          <Route path="/home" element={<Pages.SignUp />} />
        </Route>
        <Route element={<Layouts.Home />}>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/feed" element={<Pages.Feed />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
