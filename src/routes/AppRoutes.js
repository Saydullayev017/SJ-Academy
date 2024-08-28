import React from "react";
import { Routes, Route } from "react-router-dom";
import Html from "../Components/Html";
import Css from "../Components/Css";
import JavaScript from "../Components/JavaScript";
import Algorithms from "../Components/algorithms";

import Lesson1 from "../Components/HtmlComponents/LessonFirst";
import Lesson2 from "../Components/HtmlComponents/LessonSecond";
import Lesson3 from "../Components/HtmlComponents/LessonТhird";
import Lesson4 from "../Components/HtmlComponents/LessonFourth";
import Lesson5 from "../Components/HtmlComponents/LessonFifth";
import Lesson6 from "../Components/HtmlComponents/LessonSixth";
import Lesson7 from "../Components/HtmlComponents/LessonSeventh";
import Lesson8 from "../Components/HtmlComponents/LessonEighth";
import Lesson9 from "../Components/HtmlComponents/LessonNinth";
import Lesson10 from "../Components/HtmlComponents/LessonTenth";
import Lesson11 from "../Components/HtmlComponents/LessonEleventh";

import {
  HtmlDocumentFirst,
  HtmlDocumentSecond,
  HtmlDocumenеТhird,
  HtmlDocumentFourth,
  HtmlDocumentFifth,
  HtmlDocumentSixth,
  HtmlDocumentSeventh,
  HtmlDocumentEighth,
  HtmlDocumentNinth,
  HtmlDocumentTenth,
  HtmlDocumentEleventh,
} from "../data/HtmlDocument";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Html />}>
        <Route
          index
          element={HtmlDocumentFirst.map((doc) => (
            <Lesson1 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />


        <Route
          path="/les2"
          element={HtmlDocumentSecond.map((doc) => (
            <Lesson2 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="/les3"
          element={HtmlDocumenеТhird.map((doc) => (
            <Lesson3 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="/les4"
          element={HtmlDocumentFourth.map((doc) => (
            <Lesson4 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="/les5"
          element={HtmlDocumentFifth.map((doc) => (
            <Lesson5 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="/les6"
          element={HtmlDocumentSixth.map((doc) => (
            <Lesson6 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="/les7"
          element={HtmlDocumentSeventh.map((doc) => (
            <Lesson7 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="/les8"
          element={HtmlDocumentEighth.map((doc) => (
            <Lesson8 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="/les9"
          element={HtmlDocumentNinth.map((doc) => (
            <Lesson9 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="/les10"
          element={HtmlDocumentTenth.map((doc) => (
            <Lesson10 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />

        <Route
          path="/les11"
          element={HtmlDocumentEleventh.map((doc) => (
            <Lesson11 key={doc.id} title={doc.title} content={doc.content} />
          ))}
        />
      </Route>
      <Route path="/css" element={<Css />} />
      <Route path="/js" element={<JavaScript />} />
      <Route path="/algo" element={<Algorithms />} />
    </Routes>
  );
};

export default AppRoutes;
