import Link from "next/link";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
//import HireMe from '../sub/HireMe'
import { LinkedInIcon } from "@/constants";

const Footer = () => {
  return (
    <div className="w-full h-full text-gray-200 bg-transparent shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer gap-3">
              <SiGmail />
              <span>Akremzayane@gmail.com</span>
            </p>
          </div>

          {/* <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'> About</div>
                    <div className='font-bold text-[16px]'> <HireMe/></div>
                    
              
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
