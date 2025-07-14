import React from "react";

export default function Navigation(props) {
  const baseClass = "h-fit w-fit rounded-lg p-4 flex items-center text-center";

  const getBtnClass = (isDisabled) => {
    const bgColor = isDisabled ? "bg-blue-200" : "bg-blue-500 hover:bg-blue-600";
    const cursor = isDisabled ? "cursor-not-allowed" : "cursor-pointer";
    return `${baseClass} ${bgColor} ${cursor} text-white`;
  };

  
  
  return (
    <div className="w-[80vw] mx-auto text-sm md:text-2xl mt-4 flex justify-between items-center">
      <button
        onClick={props.previous}
        disabled={props.prevDisability}
        type="button"
        className={getBtnClass(props.prevDisability)}
      >
        Previous
      </button>
      <button className={getBtnClass(false)} onClick={props.submit}>
        Submit
      </button>
      <button onClick={props.next} disabled={props.nextDisability} type="button" className={getBtnClass(props.nextDisability)} > Next </button>
    </div>
  );
}
