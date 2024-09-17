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
} from "../data/HtmlDocument";

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
import Css12 from "../Components/CssComponents/LessonTwelfth";
import Css13 from "../Components/CssComponents/LessonThirteenth";
import Css14 from "../Components/CssComponents/LessonFourteenth";
import Css15 from "../Components/CssComponents/LessonFifteenth";
import Css16 from "../Components/CssComponents/LessonSixteenth";
import Css17 from "../Components/CssComponents/LessonSeventeenth";
import Css1 from "../Components/CssComponents/LessonFirst";


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
  CssDocumentEleventh,
  CssDocumentTwelfth,
  CssDocumentThirteenth,
  CssDocumentFourteenth,
  CssDocumentFifteenth,
  CssDocumentSixteenth,
  CssDocumentSeventeenth,
} from '../data/CssDocument'; 

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
  JsDocumentSeventeenth
} from '../data/JsDocument';
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
      <Route path="css12" element={CssDocumentTwelfth.map((doc) => (
          <Css12 key={doc.id} title={doc.title} content={doc.content} />
        ))} />
        <Route path="css13" element={CssDocumentThirteenth.map((doc) => (
          <Css13 key={doc.id} title={doc.title} content={doc.content} />
        ))} />
        <Route path="css14" element={CssDocumentFourteenth.map((doc) => (
          <Css14 key={doc.id} title={doc.title} content={doc.content} />
        ))} />
        <Route path="css15" element={CssDocumentFifteenth.map((doc) => (
          <Css15 key={doc.id} title={doc.title} content={doc.content} />
        ))} />
        <Route path="css16" element={CssDocumentSixteenth.map((doc) => (
          <Css16 key={doc.id} title={doc.title} content={doc.content} />
        ))} />
        <Route path="css17" element={CssDocumentSeventeenth.map((doc) => (
          <Css17 key={doc.id} title={doc.title} content={doc.content} />
        ))} />
      </Route>
{/* ------------------------------------------------------- */}
<Route path="/js" element={<JavaScript />}>
    <Route index element={JsDocumentFirst.map((doc) => (
        <Lessonjs1 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
        <Route path="js2" element={JsDocumentSecond.map((doc) => (
        <Lessonjs2 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js3" element={JsDocumentТhird.map((doc) => (
        <Lessonjs3 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
                <Route path="js4" element={JsDocumentFourth.map((doc) => (
        <Lessonjs4 key={doc.id} title={doc.title} content={doc.content} />
    ))} />

            <Route path="js5" element={JsDocumentFifth.map((doc) => (
        <Lessonjs5 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js6" element={JsDocumentSixth.map((doc) => (
        <Lessonjs6 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js7" element={JsDocumentSeventh.map((doc) => (
        <Lessonjs7 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js8" element={JsDocumentEighth.map((doc) => (
        <Lessonjs8 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js9" element={JsDocumentNinth.map((doc) => (
        <Lessonjs9 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js10" element={JsDocumentTenth.map((doc) => (
        <Lessonjs10 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js11" element={JsDocumentEleventh.map((doc) => (
        <Lessonjs11 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js12" element={JsDocumentTwelfth.map((doc) => (
        <Lessonjs12 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js13" element={JsDocumentThirteenth.map((doc) => (
        <Lessonjs13 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js14" element={JsDocumentFourteenth.map((doc) => (
        <Lessonjs14 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js15" element={JsDocumentFifteenth.map((doc) => (
        <Lessonjs15 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js16" element={JsDocumentSixteenth.map((doc) => (
        <Lessonjs16 key={doc.id} title={doc.title} content={doc.content} />
    ))} />
            <Route path="js17" element={JsDocumentSeventeenth.map((doc) => (
        <Lessonjs17 key={doc.id} title={doc.title} content={doc.content} />
    ))} />

</Route>

      <Route path="/algo" element={<Algorithms />} />
    </Routes>
  );
};

export default AppRoutes;
