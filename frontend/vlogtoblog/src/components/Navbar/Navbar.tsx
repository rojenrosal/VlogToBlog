"use client";

import Link from "next/link";
import React from "react";


const Navbar = () => {


  return (
    <>
      <div className="flex flex-wrap bg-blue-500">
        <div className="sm:flex items-stretch justify-between grow lg:mb-0  py-5 pb-3 px-5 flex-1 mr-10 text-white font-extrabold">
       <div>
    <Link href="/" >   <h1 className="text-3xl"> Vlog to Blog</h1> </Link>
       <span className="text-black font-light text-sm"> an AI Video to Blog Genarator</span>
       </div>
            <div className="mt-2" >
                <Link href="/login"  className="hover:underline">Login</Link></div>
        </div>
   
      </div>
    </>
  );
};

export default Navbar;
