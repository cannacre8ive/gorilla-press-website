import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Labels from './pages/Labels';
import Cannabis from './pages/Cannabis';
import Materials from './pages/Materials';
import FilePrep from './pages/FilePrep';
import About from './pages/About';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import { Privacy, Terms } from './pages/Legal';
import Thanks from './pages/Thanks';
import NotFound from './pages/NotFound';

const meta={
  '/':'The Gorilla Press — Short-Run Label Printing in Oregon',
  '/labels':'Short-Run Label Printing in Oregon | The Gorilla Press',
  '/cannabis':'Cannabis Label Printing in Oregon | The Gorilla Press',
  '/materials':'Label Materials | The Gorilla Press',
  '/file-prep':'Label File Preparation Guide | The Gorilla Press',
  '/about':'About The Gorilla Press',
  '/quote':'Request a Quote | The Gorilla Press',
  '/contact':'Contact | The Gorilla Press',
  '/privacy':'Privacy | The Gorilla Press',
  '/production-terms':'Production Terms | The Gorilla Press',
  '/thanks':'Request Received | The Gorilla Press'
};
function Meta(){const {pathname}=useLocation();useEffect(()=>{document.title=meta[pathname]||'The Gorilla Press';let robots=document.querySelector('meta[name="robots"]');if(!robots){robots=document.createElement('meta');robots.name='robots';document.head.appendChild(robots);}robots.content=pathname==='/thanks'?'noindex,nofollow':'index,follow,max-image-preview:large';},[pathname]);return null;}
export default function App(){return <><Meta/><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="labels" element={<Labels/>}/><Route path="cannabis" element={<Cannabis/>}/><Route path="materials" element={<Materials/>}/><Route path="file-prep" element={<FilePrep/>}/><Route path="about" element={<About/>}/><Route path="quote" element={<Quote/>}/><Route path="contact" element={<Contact/>}/><Route path="privacy" element={<Privacy/>}/><Route path="production-terms" element={<Terms/>}/><Route path="thanks" element={<Thanks/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></>}
