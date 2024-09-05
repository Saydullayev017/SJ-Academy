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

import Css1 from "../Components/CssComponents/LessonFirst";
import Css2 from "../Components/CssComponents/LessonSecond";
import Css3 from "../Components/CssComponents/LessonТhird";
import Css4 from "../Components/CssComponents/LessonFourth";
import Css5 from "../Components/CssComponents/LessonFifth";
import Css6 from "../Components/CssComponents/LessonSixth";
import Css7 from "../Components/CssComponents/LessonSeventh";
import Css8 from "../Components/CssComponents/LessonEighth";
import Css9 from "../Components/CssComponents/LessonNinth";
import Css10 from "../Components/CssComponents/LessonTenth";
import Css11 from "../Components/CssComponents/LessonEleventh";
import Css12 from "../Components/CssComponents/LessonTwelfth"
import Css13 from "../Components/CssComponents/LessonThirteenth"
import Css14 from "../Components/CssComponents/LessonFourteenth"
import Css15 from "../Components/CssComponents/LessonFifteenth"
import Css16 from "../Components/CssComponents/LessonSixteenth"
import Css17 from "../Components/CssComponents/LessonSeventeenth"
import Css18 from "../Components/CssComponents/LessonEighteenth"
import Css19 from "../Components/CssComponents/LessomNineteenth"
import Css20 from "../Components/CssComponents/LessonTwentieth"



import { 
  CssDocumentFirst,
  CssDocumentSecond,
  CssDocumentТhird,
  CssDocumentFourth,
  CssDocumentFifth,
  CssDocumentSixth,
  CssDocumentSeventh,
  CssDocumentEighth,
  CssDocumentNinth,
  CssDocumentTenth,
  CssDocumentEleventh
} from '../data/CssDocument'; 
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

{/* ------------------------------------------------------- */}
<Route path="/css" element={<Css />}>
  <Route index element={CssDocumentFirst.map((doc) => (
    <Css1 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

  <Route path="css2" element={CssDocumentSecond.map((doc) => (
    <Css2 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

  <Route path="css3" element={CssDocumentТhird.map((doc) => (
    <Css3 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

  <Route path="css4" element={CssDocumentFourth.map((doc) => (
    <Css4 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

<Route path="css5" element={CssDocumentFifth.map((doc) => (
    <Css5 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

<Route path="css6" element={CssDocumentSixth.map((doc) => (
    <Css6 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

<Route path="css7" element={CssDocumentSeventh.map((doc) => (
    <Css7 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

<Route path="css8" element={CssDocumentEighth.map((doc) => (
    <Css8 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

<Route path="css9" element={CssDocumentNinth.map((doc) => (
    <Css9 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

<Route path="css10" element={CssDocumentTenth.map((doc) => (
    <Css10 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

<Route path="css11" element={CssDocumentEleventh.map((doc) => (
    <Css11 key={doc.id} title={doc.title} content={doc.content} />
  ))} />

<Route path="css12" element={CssDocumentТhird.map((doc) => (
    <Css12 key={doc.id} title={doc.title} content={doc.content} />
  ))} />
  <Route path="css13" element={CssDocumentТhird.map((doc) => (
    <Css13 key={doc.id} title={doc.title} content={doc.content} />
  ))} />
  <Route path="css14" element={CssDocumentТhird.map((doc) => (
    <Css14 key={doc.id} title={doc.title} content={doc.content} />
  ))} />
  <Route path="css15" element={CssDocumentТhird.map((doc) => (
    <Css15 key={doc.id} title={doc.title} content={doc.content} />
  ))} />
  <Route path="css16" element={CssDocumentТhird.map((doc) => (
    <Css16 key={doc.id} title={doc.title} content={doc.content} />
  ))} />
  <Route path="css17" element={CssDocumentТhird.map((doc) => (
    <Css17 key={doc.id} title={doc.title} content={doc.content} />
  ))} />
  <Route path="css18" element={CssDocumentТhird.map((doc) => (
    <Css18 key={doc.id} title={doc.title} content={doc.content} />
  ))} />
  <Route path="css19" element={CssDocumentТhird.map((doc) => (
    <Css19 key={doc.id} title={doc.title} content={doc.content} />
  ))} />
  <Route path="css20" element={CssDocumentТhird.map((doc) => (
    <Css20 key={doc.id} title={doc.title} content={doc.content} />
  ))} />
</Route>

      <Route path="/js" element={<JavaScript />} />
      <Route path="/algo" element={<Algorithms />} />
    </Routes>
  );
};

export default AppRoutes;
