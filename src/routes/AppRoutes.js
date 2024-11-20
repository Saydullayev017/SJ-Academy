import React from "react"; // Импортируем библиотеку React
import { Routes, Route } from "react-router-dom"; // Импортируем компоненты для маршрутизации

import JavaScript from "../Components/JavaScript"; // Импортируем компонент JavaScript

import {
  JsDocumentFirst,
  JsDocumentSecond,
  JsDocumentТhird,
  JsDocumentFourth,
  JsDocumentFifth,
  JsDocumentSixth,
  JsDocumentSeventh,
  JsDocumentEighth,
  JsDocumentNinth,
  JsDocumentTenth,
  JsDocumentEleventh,
  JsDocumentTwelfth,
  JsDocumentThirteenth,
  JsDocumentFourteenth,
  JsDocumentFifteenth,
  JsDocumentSixteenth,
  JsDocumentSeventeenth,
  JsDocumentEighteenth,
  JsDocumentNineteenth,
  JsDocumentTwentieth,
  JsDocumentTwentyFirst,
  JsDocumentTwentySecond,
  JsDocumentTwentyThird,
  JsDocumentTwentyFourth,
  JsDocumentTwentyFifth,
  JsDocumentTwentySixth,
  JsDocumentTwentySeventh,
  JsDocumentTwentyEighth,
  JsDocumentTwentyNinth,
  JsDocumentThirtieth,
  JsDocumentThirtyFirst,
} from "../data/JsDocument";// Импортируем документы JavaScript из данных

import Intro from "../Components/Intro";// Импортируем компонент Intro

// Импортируем компоненты уроков JavaScript
import Lessonjs1 from "../Components/JsComponents/Lessonjs1";
import Lessonjs2 from "../Components/JsComponents/Lessonjs2";
import Lessonjs3 from "../Components/JsComponents/Lessonjs3";
import Lessonjs4 from "../Components/JsComponents/Lessonjs4";
import Lessonjs5 from "../Components/JsComponents/Lessonjs5";
import Lessonjs6 from "../Components/JsComponents/Lessonjs6";
import Lessonjs7 from "../Components/JsComponents/Lessonjs7";
import Lessonjs8 from "../Components/JsComponents/Lessonjs8";
import Lessonjs9 from "../Components/JsComponents/Lessonjs9";
import Lessonjs10 from "../Components/JsComponents/Lessonjs10";
import Lessonjs11 from "../Components/JsComponents/Lessonjs11";
import Lessonjs12 from "../Components/JsComponents/Lessonjs12";
import Lessonjs13 from "../Components/JsComponents/Lessonjs13";
import Lessonjs14 from "../Components/JsComponents/Lessonjs14";
import Lessonjs15 from "../Components/JsComponents/Lessonjs15";
import Lessonjs16 from "../Components/JsComponents/Lessonjs16";
import Lessonjs17 from "../Components/JsComponents/Lessonjs17";
import Lessonjs18 from "../Components/JsComponents/Lessonjs18";
import Lessonjs19 from "../Components/JsComponents/Lessonjs19";
import Lessonjs20 from "../Components/JsComponents/Lessonjs20";
import Lessonjs21 from "../Components/JsComponents/Lessonjs21";
import Lessonjs22 from "../Components/JsComponents/Lessonjs22";
import Lessonjs23 from "../Components/JsComponents/Lessonjs23";
import Lessonjs24 from "../Components/JsComponents/Lessonjs24";
import Lessonjs25 from "../Components/JsComponents/Lessonjs25";
import Lessonjs26 from "../Components/JsComponents/Lessonjs26";
import Lessonjs27 from "../Components/JsComponents/Lessonjs27";
import Lessonjs28 from "../Components/JsComponents/Lessonjs28";
import Lessonjs29 from "../Components/JsComponents/Lessonjs29";
import Lessonjs30 from "../Components/JsComponents/Lessonjs30";
import Lessonjs31 from "../Components/JsComponents/Lessonjs31";

// Компонент для определения маршрутов приложения
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />}></Route> {/* Главная страница с компонентом Intro */}

      {/* ------------------------------------------------------- */}
      <Route path="/js" element={<JavaScript />}> {/* Маршрут для JavaScript */}
        <Route
          path="js1"
          element={JsDocumentFirst.map((doc) => (
            <Lessonjs1 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js2"
          element={JsDocumentSecond.map((doc) => (
            <Lessonjs2 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js3"
          element={JsDocumentТhird.map((doc) => (
            <Lessonjs3 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js4"
          element={JsDocumentFourth.map((doc) => (
            <Lessonjs4 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="js5"
          element={JsDocumentFifth.map((doc) => (
            <Lessonjs5 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js6"
          element={JsDocumentSixth.map((doc) => (
            <Lessonjs6 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js7"
          element={JsDocumentSeventh.map((doc) => (
            <Lessonjs7 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js8"
          element={JsDocumentEighth.map((doc) => (
            <Lessonjs8 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js9"
          element={JsDocumentNinth.map((doc) => (
            <Lessonjs9 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js10"
          element={JsDocumentTenth.map((doc) => (
            <Lessonjs10 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js11"
          element={JsDocumentEleventh.map((doc) => (
            <Lessonjs11 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js12"
          element={JsDocumentTwelfth.map((doc) => (
            <Lessonjs12 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js13"
          element={JsDocumentThirteenth.map((doc) => (
            <Lessonjs13 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js14"
          element={JsDocumentFourteenth.map((doc) => (
            <Lessonjs14 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js15"
          element={JsDocumentFifteenth.map((doc) => (
            <Lessonjs15 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js16"
          element={JsDocumentSixteenth.map((doc) => (
            <Lessonjs16 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js17"
          element={JsDocumentSeventeenth.map((doc) => (
            <Lessonjs17 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js18"
          element={JsDocumentEighteenth.map((doc) => (
            <Lessonjs18 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js19"
          element={JsDocumentNineteenth.map((doc) => (
            <Lessonjs19 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js20"
          element={JsDocumentTwentieth.map((doc) => (
            <Lessonjs20 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js21"
          element={JsDocumentTwentyFirst.map((doc) => (
            <Lessonjs21 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js22"
          element={JsDocumentTwentySecond.map((doc) => (
            <Lessonjs22 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js23"
          element={JsDocumentTwentyThird.map((doc) => (
            <Lessonjs23 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js24"
          element={JsDocumentTwentyFourth.map((doc) => (
            <Lessonjs24 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js25"
          element={JsDocumentTwentyFifth.map((doc) => (
            <Lessonjs25 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js26"
          element={JsDocumentTwentySixth.map((doc) => (
            <Lessonjs26 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js27"
          element={JsDocumentTwentySeventh.map((doc) => (
            <Lessonjs27 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js28"
          element={JsDocumentTwentyEighth.map((doc) => (
            <Lessonjs28 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js29"
          element={JsDocumentTwentyNinth.map((doc) => (
            <Lessonjs29 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js30"
          element={JsDocumentThirtieth.map((doc) => (
            <Lessonjs30 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
        <Route
          path="js31"
          element={JsDocumentThirtyFirst.map((doc) => (
            <Lessonjs31 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
