import React from "react";
import profilePicture from "../../../public/images/profilepicture.jpg";
import Image from "next/image";

function Jumbotron() {
  return (
    <div className="relative">
      <div className="ml-72 max-w-fit h-fit">
        <h1 className="p-0 leading-none max-w-fit h-fit ">
          <span className="transform translate-y-10 tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            A
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            g
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            u
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            s
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            t
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            i
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            n
          </span>
        </h1>
      </div>
      <div className="ml-72 max-w-fit h-fit">
        <h1 className="p-0 leading-none max-w-fit h-fit ">
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            G
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            u
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            e
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            v
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            a
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            r
          </span>
          <span className="tracking-tighter	antialiased text-[18.25rem] font-helveticamedium">
            a
          </span>
        </h1>
      </div>
      <div className="absolute inset-y-0 right-[-150px]">
        <Image
          src={profilePicture}
          alt="A dude, with a white background"
          width={340}
          height={550}
        />
      </div>
    </div>
  );
}

export default Jumbotron;
