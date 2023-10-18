import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Img, Text } from "components";
import Header from '../../components/Header'
import AboutFooter from "components/AboutFooter";

const LineagePage = () => {
  useEffect(() => {
    AOS.init({offset: 450,
      duration: 800,});
  }, [])
  return (
    <>
    <div className="bg-black-900 w-full">
      <div className=" flex flex-col  font-spacemono  ">
      <Header/>
        <div className="flex items-center w-full">
          <div className="md:h-[4527px] sm:h-[4574px] h-[4576px] md:px-5 relative w-full">
            <div className="absolute flex flex-col md:gap-10 gap-72 h-full inset-[0] justify-center m-auto w-full">
              <div className="flex flex-col sm:h-[1634px] h-[1635px] md:h-[1835px] justify-end items-center relative w-full">
                <Img data-aos="fade-out"
                  className="h-[1133px] mb-[174px] mt-auto mx-auto object-cover w-[62%]"
                  src="https://necessarydisorder.files.wordpress.com/2018/03/approxsun.gif"
                  alt="generationsimag"
                />
                <Text data-aos="fade-in" className="mb-[0px] flex justify-center text-center items-center md:text-5xl text-[40px] text-white-A700"
                    size="txtSpaceMonoBold40">
                  <>
                  Generations are project bodies representing <br /> through LINEAGE AND ENTROPY that is build <br/> under the foundation.
                  </>
                </Text>
                <div className="absolute flex flex-col md:gap-10 mt-0  inset-[0] items-center justify-center sm:px-5 w-full">
                  <Text
                    className="mb-[180px] flex justify-center items-center md:text-5xl text-[200px] text-white-A700"
                    size="txtSpaceMonoBold200"
                  >
                    GENERATIONS
                  </Text>
                </div>
              </div>
              <div data-aos="fade-right" className="flex flex-col justify-start ml-52 md:ml-[0]">
                <Text
                  className="md:ml-[0] ml-[-160px] sm:text-4x md:text-[38px] text-[40px] text-gray-400 tracking-[8.00px] w-[52%] sm:w-full"
                  size="txtSpaceMonoBold40"
                >
                  LINEAGE represent STEM in the structure, which get support
                  through ROOT (which is WEU foundation)
                </Text>
                <Text data-aos="fade-left"
                  className="md:ml-[0] ml-[635px] sm:text-4xl md:text-[38px] text-[40px] text-gray-400 tracking-[8.00px] w-[61%] sm:w-full"
                  size="txtSpaceMonoBold40"
                >
                  LINEAGE work is to transport support, grants, research,
                  product development to ENTROPY which represent LEAFS, FLOWERS
                  & FRUITS (applications and products)
                </Text>
                <Text data-aos="fade-right"
                  className="md:ml-[0] ml-[-160px] mr-[628px] mt-[49px] sm:text-4xl md:text-[38px] text-[40px] text-gray-400 tracking-[8.00px] w-[61%] sm:w-full"
                  size="txtSpaceMonoBold40"
                >
                  which are build to innovate, collaborate and grow new worlds
                  in the field of finance to self sovereign applications.
                </Text>
                <Text data-aos="fade-left"
                  className="mt-[205px] sm:text-4xl ml-[-160px] md:text-[38px] text-[40px] text-gray-400 tracking-[8.00px] w-[52%] sm:w-full"
                  size="txtSpaceMonoBold40"
                >
                  LINEAGE represents major protocol bodies under WEU ecosystem .
                  Lineage builds the initial setups for products
                </Text>
                <Text data-aos="fade-right"
                  className="md:ml-[0] ml-[697px] sm:text-4xl md:text-[38px] text-[40px] text-gray-400 tracking-[8.00px] w-[52%] sm:w-full"
                  size="txtSpaceMonoBold40"
                >
                  ENTROPY are sub-protocols that builds application on the
                  infrastructure of LINEAGE. LINEAGE support entropy through
                  funds specifically provided for development & research
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[4%] flex sm:flex-col flex-row sm:gap-10 items-start justify-between left-[10%] w-[52%]">
              <div className="flex flex-col md:gap-10 gap-[608px] justify-start">
                <Text data-aos="fade-in"
                  className="md:text-5xl text-[80px] mb-20 text-white-A700"
                  size="txtSpaceMonoBold80"
                >
                  LINEAGE
                </Text>
                <Img data-aos="fade-in"
                  className="h-[259px] md:h-auto md:ml-[0] ml-[50px] object-cover"
                  src="images/img_vector.png"
                  alt="vector"
                />
              </div>
            </div>
            <Text data-aos="fade-in"
              className="absolute bottom-[17%] right-[11%] md:text-5xl text-[80px] text-white-A700"
              size="txtSpaceMonoBold80"
            >
              ENTROPY
            </Text>
            <Img data-aos="fade-right"
              className="absolute h-[259px] object-cover right-[9%] top-[46%]"
              src="images/img_vector.png"
              alt="vector_One"
            />
            <Img
              className="absolute h-[1831px] left-[0] object-cover top-[27%]"
              src="images/img_topographic6.png"
              alt="topographicSix"
            />
            <Img
              className="absolute bottom-[3%] h-[1702px] object-cover right-[0]"
              src="images/img_topographic7.png"
              alt="topographicSeven"
            />
          </div>
        </div>
        <div className="flex flex-col font-inter items-end md:px-10 sm:px-5 px-[58px] w-full">
          <div className="md:h-[1320px] sm:h-[961px] h-[991px] relative w-[87%] md:w-full">
           
            
          </div>
        </div>
      </div>
      </div>
      <div className="bg-black-900">
      <AboutFooter/>

      </div>
    </>
  );
};

export default LineagePage;
