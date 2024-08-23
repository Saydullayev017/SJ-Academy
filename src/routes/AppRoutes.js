import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Html from '../components/Html';
import Css from '../components/Css';
import JavaScript from '../components/JavaScript';
import Algorithms from '../components/Algorithms';
import Lesson1 from '../components/HtmlComponents/Lesson1';
import Lesson2 from '../components/HtmlComponents/Lesson2';
import Lesson3 from '../components/HtmlComponents/Lesson3';
import Lesson4 from '../components/HtmlComponents/Lesson4';
import Lesson5 from '../components/HtmlComponents/Lesson5';
import { HtmlDocumentFirst,HtmlDocumentSecond } from '../data/HtmlDocument';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Html />}>
        <Route index element={HtmlDocumentFirst.map(doc => (
          <Lesson1 key={doc.id} title={doc.title} content={doc.content} />
        ))}/>
        <Route path='/les2' element={HtmlDocumentSecond.map(doc => (
          <Lesson2 key={doc.id} title={doc.title} content={doc.content} />
        ))}/>
        <Route path='/les3' element={<Lesson3 />}/>
        <Route path='/les4' element={<Lesson4 />}/>
        <Route path='/les5' element={<Lesson5 />}/>
      </Route>
      <Route path='/css' element={<Css />} />
      <Route path='/js' element={<JavaScript />} />
      <Route path='/algo' element={<Algorithms />} />
    </Routes>
  );
};

export default AppRoutes;