import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
       <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
           <Navbar />
          <Hero />
         </div>
         <About />
         <Experience />
         
         
         {/* <Feedbacks /> */}
         <div className='relative z-0'>
         <Tech />
          <Works />
           <Contact />
           <StarsCanvas />
         </div>
       </div>
     </BrowserRouter>
  );
}

export default App;

// 