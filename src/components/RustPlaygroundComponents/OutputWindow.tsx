import React from "react";
import "./Terminal.css";

export interface OutputType {
  isCompiled: boolean;
  output: string;
  statusCode: number;
  memory: string;
  cpuTime: string;
  compilationStatus: number;
}
const OutputWindow = ({ output }: { output: OutputType }) => {
  return (
    <div className="terminal-card">
      <div className="terminal-body">
        <pre>Output</pre>
        <div className="terminal-header rounded-md mt-2">
          {output.output !== "" ? (
            <div>
              <div>
                <span
                  className={`${
                    output.isCompiled ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {output.isCompiled ? "Success" : "Compilation Failed"}
                </span>
              </div>
              <div>
                <span>{output.output}</span>
              </div>
              <div>
                <span>Memory: {output.memory}</span>
              </div>
              <div>
                <span>CPU Time: {output.cpuTime}</span>
              </div>
            </div>
          ) : (
            <div>
              <span>Output will be displayed here</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutputWindow;
