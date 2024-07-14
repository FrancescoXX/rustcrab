import React from "react";

export default function SubstackEmbed() {
  return (
    <div className="flex flex-col items-center my-8 w-full max-w-md mx-auto">
      <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 text-center">
        Join 2400+ Rust Devs. Subscribe to get exclusive stuff
      </h2>
      <div className="flex justify-center w-full">
        <iframe
          src="https://francescociulla.substack.com/embed"
          width="100%"
          height="290"
          style={{
            border: "5px solid #ea580c",
            background: "white",
            borderRadius: "15px",
            overflow: "hidden",
          }}
          className="shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
