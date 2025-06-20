"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";


const Showcase = ({ setIsLoading }: { setIsLoading: (val: boolean) => void }) => {


      const handleGenerate = () => {
    setIsLoading(true);

    // Simulate API call or actual generation logic here
    setTimeout(() => {
      setIsLoading(false); // remove this line if generation happens in GeneratedBlog
    }, 3000);
  };

  return (
    <>
   
        <div className="">
       <div className="p-4">
       <h2 className="text-3xl font-extrabold "> Welcome To Vlog to Blog!</h2> 
       <span className="text-black font-light text-sm">🎬 ➡️ ✍️ Repurpose your video into a beautifully written blog post — just share the link below.</span>
       </div>
       <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="link" className="font-bold">Enter your Youtube Link here:</Label>
        <div className="p-2 flex w-full max-w-sm items-center gap-2">
        
         <Input type="link" placeholder="Paste your video Link here" />
            <Button type="submit" variant="outline" onClick={handleGenerate}>
        Generate Blog
      </Button> 
       </div>
   </div>

        </div>

   
      
    </>
  );
};

export default Showcase;
