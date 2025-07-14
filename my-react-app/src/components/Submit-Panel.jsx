export default function Submit(props) {
    return(
        <div className=" text-4xl font-bold text-blue-600 flex items-center justify-center fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <div className="bg-amber-50 p-4 rounded-lg shadow-md">
                <p>You scored  {props.score} /{props.quizLength} </p>
            </div>
            

        </div>
    )

}