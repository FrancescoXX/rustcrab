import React, { useState } from "react";
// import CodeEditor from "./RustPlaygroundComponents/CodeEditor";
import CodeEditorWindow from "./RustPlaygroundComponents/CodeEditor";
import { Loader2, PlayIcon } from "lucide-react";
import OutputWindow, {
  OutputType,
} from "./RustPlaygroundComponents/OutputWindow";
import axios from "axios";
// import { headers } from "next/headers";

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none`,
  content: `max-w-[1400px]  flex justify-between`,
};

const RustCompilerSection = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState({});
  const [running, setRunning] = useState(false);

  const onRun = async () => {
    setRunning(true);
    const data = {
      clientId: process.env.NEXT_PUBLIC_JDOODLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_JDOODLE_CLIENT_SECRET,
      script: code,
      language: "rust",
      versionIndex: "0",
    };
    const res = await axios.post("/api/execute-code", {
      data: data,
    });
    if (res.status === 200) {
      const data = res.data;
      setOutput(data);
      setRunning(false);
    }
  };
  const handleCodeChange = (
    key: string,
    value: React.SetStateAction<string>
  ) => {
    if (key === "code") {
      setCode(value);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <div className="flex flex-row justify-between items-center w-10/12 mb-5">
        <h2 className="text-4xl font-bold  text-current">Rust Playground</h2>
        <button
          disabled={running}
          onClick={onRun}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          {running ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <PlayIcon size={24} />
          )}
        </button>
      </div>

      <div className={style.wrapper}>
        <div className={`${style.content} w-11/12`}>
          <CodeEditorWindow onChange={handleCodeChange} theme={"vs-dark"} />
          <OutputWindow output={output as OutputType} />
        </div>
      </div>
    </div>
  );
};

export default RustCompilerSection;
