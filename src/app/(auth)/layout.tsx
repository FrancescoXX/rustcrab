import Header from "@/components/Header";
import React from "react";

export default function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <><Header /><div className="absolute w-[262px] h-[262px] bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[600px] -top-64 left-1/2 transform -translate-x-1/2"></div><div className="relative flex flex-col justify-center items-center bg-background h-screen overflow-hidden">

      <div className="absolute w-[262px] h-[262px] bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[900px] -top-28 -right-48 transform translate-x-0"></div>

      {children}
    </div></>
  );
}
