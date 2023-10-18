import React from 'react'
import { Text, Img } from "components";
import { Link } from 'react-router-dom';

const index = () => {
  return (
   
    <div>
       <header className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-end left-[0] z-50 w-full">
          <Img
              className="md:flex-1 h-[110px] sm:h-auto mb-[22px] object-cover rounded-[50%] w-[100%] md:w-full"
              src="images/img_ellipse28.png"
              alt="ellipseTwentyEight"
            />
          <Link to="/">    <Text
              className="mb-[99px] ml-7 md:ml-[0] md:mt-0 mt-[46px] text-2xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[6.00px]"
              size="txtSpaceMonoBold30"
            >
              <>
                WEU
                <br />
                FOUNDATION
              </>
            </Text></Link>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 gap-[50px] items-center justify-end mb-[132px] ml-52 md:ml-[0] md:mt-0 mt-[61px] pb-0.5 pr-0.5 w-[63%] md:w-full cursor-pointer">
           <Link to="/about">   <Text
                className="bg-transparent font-bold hover:shadow-2xl hover:shadow-white-A700 hover:bg-slate-200 hover:text-black-900 h-12 py-3 delay-50 transition-all ease-in-out rounded-[5%] cursor-pointer leading-[normal] min-w-[116px] text-2xl sm:text-[26px] md:text-[28px] text-center   text-white-A700 tracking-[6.00px]"
                size="xs"
              >
                About
              </Text></Link>
              <Text
                className="bg-transparent  hover:bg-slate-200 hover:shadow-2xl hover:shadow-white-A700 hover:text-black-900 h-12 py-3 delay-50 transition-all ease-in-out rounded-[5%] cursor-pointer font-bold leading-[normal] min-w-[204px] text-2xl sm:text-[26px] md:text-[28px] text-center text-white-A700 tracking-[6.00px]"
                size="xs"
              >
                Community
              </Text>
             <Link to="/orchestra"> <Text className="bg-transparent hover:bg-slate-200 hover:shadow-2xl hover:shadow-white-A700 hover:text-black-900 h-12 py-3 rounded-[5%] cursor-pointer font-bold leading-[normal] min-w-[263px] text-2xl sm:text-[26px]  md:text-[28px] delay-50 transition-all ease-in-out text-center text-white-A700 tracking-[6.00px]">
                Orchestra
              </Text></Link>
              <Text
                className="mr-[7px] text-2xl font-extrabold hover:shadow-2xl hover:shadow-white-A700 hover:bg-slate-200 delay-50 transition-all ease-in-out hover:text-black-900 h-12 py-3 rounded-[5%] cursor-pointer sm:text-[26px]  md:text-[28px] text-white-A700 tracking-[6.00px]"
                size="txtSpaceMonoBold30"
              >
                Research
              </Text>
            </div>
          </header>
    </div>
  )
}

export default index
