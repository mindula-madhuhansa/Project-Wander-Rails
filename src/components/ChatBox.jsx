import useSuggestionState from "../hooks/useSuggestionState";
import { FaClipboard } from "react-icons/fa";

export default function ChatBox() {
  const isLoading = useSuggestionState((state) => state.isLoading);
  const message = useSuggestionState((state) => state.message);

  const handleClipboard = () => {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = message.join("\n");
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Text copied to clipboard!");
  };

  return (
    <div className="w-full relative">
      <div className="m-auto my-8 bg-white py-4 px-8 drop-shadow-md rounded-2xl min-h-[700px]">
        {isLoading ? (
          <div className="text-lg text-gray-700">Generating...</div>
        ) : (
          <div className="text-lg text-gray-700">
            <>
              {message.map((line, index) => (
                <p
                  className={
                    line.trim().toLowerCase().startsWith("day")
                      ? "font-bold text-xl text-red-800 mt-4"
                      : line.trim().endsWith(":")
                      ? "font-bold text-lg"
                      : ""
                  }
                  key={index}
                >
                  {line}
                </p>
              ))}

              <button
                className="bg-primary hover:bg-secondary duration-300 flex justify-center items-center p-4 absolute bottom-10 right-10"
                onClick={handleClipboard}
              >
                <FaClipboard size={32} color="white" />
              </button>
            </>
          </div>
        )}
      </div>
    </div>
  );
}
