import React from "react";
import { ArrowDownIcon } from "@heroicons/react/solid";

function FooterContent() {
  return (
    <footer className="relative top-[150px] flex items-center justify-start">
      <p className="inline w-auto text-5xl font-extrabold ml-72 font-eloquialight ">
        Scroll
      </p>
      <ArrowDownIcon className="inline w-12 h-12" />
    </footer>
  );
}

export default FooterContent;
