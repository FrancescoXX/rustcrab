import React from "react";

export default function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col justify-center items-center bg-background h-screen overflow-hidden">

      {/* Bottom-left gradient */}
      <div className="absolute w-[262px] h-[262px] bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[900px] -bottom-28 -left-48 transform translate-x-0"></div>

      {/* Bottom-right gradient */}
      <div className="absolute w-[262px] h-[262px] bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[900px] -top-28 -right-48 transform translate-x-0"></div>

      {children}
    </div>
  );
}
