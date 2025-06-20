
"use client"
import Showcase from "@/components/Showcase/Showcase";
import GeneratedBlog from "../GeneratedBlog/GeneratedBlog";
import { useState } from "react";


export default function HomePage() {
    const [isLoading, setIsLoading] = useState(false);
  return (
    <>

    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-300">
           <div className="items-center justify-items-center bg-white rounded-md shadow-amber-10 shadow-md">
      <Showcase setIsLoading={setIsLoading}/>
      <GeneratedBlog  isLoading={isLoading}/>

</div>
    </div>
    </>
  );
}
