export default function Header(props) {
    return(
        <header className="flex space-x-4 border-b-1 border-gray-500 items-center justify-between p-4">
            <h1 className="text-3xl font-bold">QuizTime</h1>
            <button className="h-fit w-fit rounded-lg p-4 flex items-center bg-blue-500 hover:bg-blue-600 text-white text-2xl cursor-pointer" onClick={props.createQuiz}>
                Start a new quiz
            </button>

        </header>
    )
}