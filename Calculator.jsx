import React, { useEffect, useState } from "react";
import { createContext } from "react";
import Form from "./Form";
export const themecontext = createContext();
function Calculator() {
  const [drop, setDrop] = useState();
  console.log(drop);
  const [input1, setInput1] = useState(5);
  const [input2, setInput2] = useState(Number);
  const [output, setOutput] = useState(0);
  console.log(input1);
  console.log(input2);
  console.log(output);
  useEffect(() => {
    switch (drop) {
      case "add":
        // let add = +;
        setOutput(parseInt(input1) + parseInt(input2));
        // parseInt(setOutput);
        break;
      case "sub":
        setOutput(input1 - input2);

        break;
      case "mul":
        setOutput(input1 * input2);

        break;
      case "div":
        setOutput(input1 / input2);

        break;

      default:
        break;
    }
  }, [drop, input1, input2, output]);
  return (
    <themecontext.Provider value={(input1, setInput1)}>
      <div>
        <div className="flex justify-center space-x-8 ">
          select:
          <select
            className="border"
            onChange={(e) => {
              setDrop(e.target.value);
            }}
          >
            <option value={""}>choose</option>
            <option value={"add"}>add</option>
            <option value={"sub"}>sub</option>
            <option value={"mul"}>mul</option>
            <option value={"div"}>division</option>
          </select>
          input1:
          <input
            className=" border"
            type={"number"}
            onChange={(e) => setInput1(e.target.value)}
          />
          input2:
          <input
            className=" border"
            type={"number"}
            onChange={(e) => setInput2(e.target.value)}
          />
          result:
          <input className=" border" value={output} type={"text"} />
        </div>
      </div>
      {/* <Form /> */}
    </themecontext.Provider>
  );
}

export default Calculator;
