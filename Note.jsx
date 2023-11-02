import React from "react";

function Note(text) {
    return (
        <div className="relative left-8">
             <textarea cols={20} rows={6} placeholder={text.msg} className="resize-none text-2xl text-center txt opacity-60 shadow-2xl " id="note" readOnly></textarea><br></br>
             <div className="relative left-44">
                <button className="bg-green-500 text-2xl p-2 rounded-full shadow-2xl cursor-pointer relative right-2"><i class="fa-regular fa-pen-to-square"></i></button>
                <button className="bg-red-600 text-2xl p-2 rounded-full shadow-2xl cursor-pointer"><i class="fa-solid fa-trash-can"></i></button>
             </div>
        </div>
    );
}

export default Note;