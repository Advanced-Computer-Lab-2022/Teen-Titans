import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import jsPDF from 'jspdf';
const Notes = () => {
    const [notes, setNotes] = useState('')
    const getNotes = () => {
        const doc = new jsPDF();
        doc.setFontSize(30)
        doc.html(notes, {
            async callback(doc) {
                await doc.save('notes.pdf');
            },
        })
    }
    return (
        <div>
            <div className="editor">
                <CKEditor
                    editor={ClassicEditor}
                    data={notes}

                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setNotes(data)
                    }}
                />
                <button className="display-courses-btn" onClick={() => getNotes()}>Download Notes</button>
            </div>
        </div>
    );
};

export default Notes;