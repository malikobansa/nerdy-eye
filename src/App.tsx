import {
  BrowserRouter,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { TalentsPage } from "./TalentsPage";
import { TalentsMobile } from "./TalentsMobile";
import { TalentsPage1 } from "./TalentsPage1";
import { TalentsMobile1 } from "./TalentsMobile1";
import { useEffect } from "react";
import "./css/TalentsPage.module.css";
import  Media from 'react-media';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/talents-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/talents-page":
        title = "";
        metaDescription = "";
        break;
      case "/talents-mobile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TalentsPage />} />

      <Route path="/talents-mobile" element={<TalentsMobile />} />

      <Route path="/talents-page" element={<TalentsPage1 />} />

      <Route path="/talents-mobile" element={<TalentsMobile1 />} />
    </Routes>
  );
}
export default App;
