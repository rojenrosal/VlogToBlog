"use client";

import { LoaderCircle } from "lucide-react";


const GeneratedBlog = ({ isLoading }: { isLoading: boolean }) => {
    


  return (
    <>
      <div className="items-center justify-items-center bg-white  pt-4">
      
       <div className="p-4">
       <h2 className="text-3xl font-extrabold "> Generated Blog:</h2> 
     </div>
      
      <div className="mt-4 mb-4 p-4">
        { isLoading ?   <div className="flex flex-row justify-center items-center">
        <LoaderCircle className="text-red-300 mr-2 h-10 w-10 animate-spin" />
      </div>: <span> test</span>}

      </div>
        </div>
   
     
    </>
  );
};

export default GeneratedBlog;
