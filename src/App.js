import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // The Navbar component we created
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import VisionMission from './components/Vision/Vision';
import TechnologyInnovation from './components/TechnologyInnovation/TechnologyInnovation';
import Testimonials from './components/TestimonialsSection/TestimonialsSection'; // Your slider component
import Product from './components/Product/Product';
import Team from './components/Team/Team';
import Blog from './components/Blog/Blog';
import Careers from './components/Careers/Careers';
import Investors from './components/Investors/Investors';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound'; // Add the 404 page


// const Home = lazy(() => import('./components/Home/Home'));
// const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
// const VisionMission = lazy(() => import('./components/Vision/Vision'));
// const TechnologyInnovation = lazy(() => import('./components/TechnologyInnovation/TechnologyInnovation'));
// const Testimonials = lazy(() => import('./components/TestimonialsSection/TestimonialsSection'));
// const Product = lazy(() => import('./components/Product/Product'));
// const Team = lazy(() => import('./components/Team/Team'));
// const Blog = lazy(() => import('./components/Blog/Blog'));
// const Careers = lazy(() => import('./components/Careers/Careers'));
// const Investors = lazy(() => import('./components/Investors/Investors'));
// const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vision" element={<VisionMission />} />
        <Route path="/tech" element={<TechnologyInnovation />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
