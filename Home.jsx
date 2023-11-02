import React, { useEffect, useState } from "react";
import Note from "./Note";
function Home() {
    const [text, setText] = useState('');
    const [content, setContent] = useState([]);

    function handleChange(event) {
        setText(event.target.value);
    }

    function addNote() {
        if (text.trim() !== '') { 
            setContent([...content, text]); 
            setText(''); 
        }
    }

    return (
        <div>
            <div className="my-24 mx-96">
            
                <textarea
                    onChange={handleChange}
                    value={text}
                    cols={70}
                    rows={15}
                    placeholder="Enter Text..."
                    className="resize-none text-2xl text-center txt opacity-60 shadow-2xl"
                ></textarea>
                <button
                    onClick={addNote}
                    className="text-3xl bg-green-500 text-yellow-50 p-5 rounded-full cursor-pointer shadow-2xl relative left-7"
                >
                    <i class="fa-solid fa-plus"></i>
                </button>
            
            </div>
            <div className="flex justify-evenly w-3/4 h-full flex-wrap" id="notearea">
                {content.map((text, index) => (
                    <Note key={index} msg={text} />
                ))}
            </div>
        </div>
    );
}

export default Home;
