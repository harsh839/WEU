import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Img, Text } from "components";
import Header from '../../components/Header'
import AboutFooter from '../../components/AboutFooter'

const LandingPagePage = () => {
  
  useEffect(() => {
    AOS.init({offset: 450,
      duration: 800,});
  }, [])
  return (
    <>
     <Header/>
     
      <div className="bg-black-900 font-montserrat h-[2577px] mx-auto pb-[106px] md:pl-10 sm:pl-5 pl-[106px] relative w-full">
     
        <div className="absolute flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[1630px] top-[0] w-1/5">
          
          <div data-aos="fade-in" className="flex absolute justify-center items-center gap-20 mt-[500px] mb-[-100%]">
            
        <Text className="text-gray-400 text-5xl font-bold hover:text-white-A700 transition-all ease-in-out hover:shadow-xl">
          Orchestra
        </Text>
        <Text className="text-gray-400 text-5xl font-bold hover:text-white-A700 transition-all ease-in-out hover:shadow-xl">
         Introspect
        </Text>
        <Text className="text-gray-400 text-5xl font-bold hover:text-white-A700 transition-all ease-in-out hover:shadow-xl">
          Conformal
        </Text>
          
        
        </div>
          <div className="h-[145px] relative w-full">
            
            <div data-aos="fade-out" className=" flex justify-center text-center items-center hover:shadow-2xl bg-gray-400 hover:shadow-white-A700 h-[125px] m-auto rounded-[72px] w-[80%]"></div>
            <Button 
              className="absolute bottom-[36%] inset-x-[0] mx-auto sm:text-[20.19px] md:text-[22.19px] text-[24.19px] text-black-900 text-center tracking-[1.45px] "
              size="txtMontserratRomanExtraBold2419"
            >
              <>
                EXPLORE
                <br />
                TRUTH
              </>
            </Button>
          </div>
        </div>
       
        <div className="absolute font-spacemono md:h-[1493px] h-[1523px] pb-[103px] right-[0] top-[0] md:w-full w-screen">
          <div className="absolute h-[1393px] md:h-[1493px] right-[0] top-[0] w-[95%] md:w-full">
            
            <Img data-aos="fade-out"
              className="relative h-[1393px] items-center flex justify-center  inset-y-[0] left-[0] mb-auto mt-[100px] object-cover w-screen"
              src="https://necessarydisorder.files.wordpress.com/2017/11/agif2.gif"
              alt="imageFour"
            />
            <Text data-aos="fade-out"  className="absolute bottom-[40%] inset-x-[0] mx-auto sm:text-[20.19px] md:text-[22.19px] text-[44.19px] text-gray-300 text-center tracking-[1.45px] z-20"
              size="txtMontserratRomanExtraBold2419">
              <>
              Leveraging Human- Machine coordination <br /> for building self-sovereign <br /> infrastructures
              </>
            </Text>
             
            <Img data-aos="fade-left"
              className="absolute h-[727px] object-cover right-[0] top-[0]"
              src="images/img_capa1.png"
              alt="capaOne"
            />
          </div>
          {/* <Header/> */}

          <Text data-aos="fade-in"
            className="absolute bottom-[7%] flex items-center justify-center  sm:text-[45.15px] text-[45px] md:text-[51.15px] text-gray-400 uppercase w-screen"
            size="txtSpaceMonoBold5915"
          >
            “Trust can be broken, but Truth cannot be”
          </Text>
        </div>
        
      </div>
      <div className="bg-black-900">
      <AboutFooter/>

      </div>
     
    </>
  );
};

export default LandingPagePage;
