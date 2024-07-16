"use client";
import RustCompilerSection from "@/components/RustCompilerSection";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <RustCompilerSection />;
      </div>
    </div>
  );
};

export default page;
