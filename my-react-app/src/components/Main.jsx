import { useId } from "react";

export default function Main(props) {
    const useIdBase = useId();

    function handleChange(e) {
        props.setSelected(e.target.value);
    }

    return (
        <main className="w-[80vw] mx-auto text-2xl pt-4 ">
            <p className="font-bold">Question {props.questionNumber} of 5</p>
            <p>{props.question}</p>
            <form className="my-4 flex flex-col space-y-4">
                {["A", "B", "C", "D"].map((opt) => (
                    <label
                        key={opt}
                        htmlFor={useIdBase + opt}
                        className="w-full h-10 border-1 border-gray-400 flex items-center space-x-4 pl-4 rounded-lg"
                    >
                        <input
                            type="radio"
                            name="options"
                            value={opt}
                            id={useIdBase + opt}
                            checked={props.selected === opt}
                            onChange={handleChange}
                        />
                        {props.options[opt]}
                    </label>
                ))}
            </form>
        </main>
    );
}
