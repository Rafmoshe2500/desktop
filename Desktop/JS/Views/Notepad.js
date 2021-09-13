export class Notepad {
    constructor() {
        this.notepad = document.getElementById('notepad');
    }
    AddNotepadToView(){
        let desktop = document.getElementById('desktop');
        let notepadWindow = document.createElement('div');
        notepadWindow.id = 'notepad';
        notepadWindow.style.width = '500px';
        notepadWindow.originalWidth = '500px';
        notepadWindow.style.height = '500px';
        notepadWindow.originalHeight = '500px';
        notepadWindow.style.padding = '0';
        notepadWindow.style.border = '1px black solid';
        notepadWindow.style.flexDirection = 'column-reverse';
        notepadWindow.style.position = 'absolute';
        let textArea = document.createElement('textarea');
        textArea.style.width = 'inherit';
        textArea.style.height = 'inherit';
        textArea.style.border = '0';
        textArea.style.padding = '0';
        textArea.style.margin = '0';
        textArea.style.resize = 'none';
        notepadWindow.appendChild(textArea);
        desktop.appendChild(notepadWindow);
        return notepadWindow;
    }

    OpenNotepadFromDesktop(open){
        this.notepad.addEventListener('dblclick', () => {
            open();
        });
    }

    OpenNotepadFromStartMenu(open){
        const notepad = document.getElementById('notepadStartWindows')
        notepad.addEventListener('click', () => {
            open();
            this.startWindow.style.visibility = 'hidden';
        });
    }
}