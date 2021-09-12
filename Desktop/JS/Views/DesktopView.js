import {dragElement} from "./dragElement.js";

export class DesktopView {
    constructor() {
        this.date = document.getElementById("date");
        this.time = document.getElementById("time");
        this.start = document.getElementById("start");
        this.startWindow = document.getElementById("startWindow");
        this.startWindow.style.visibility = 'hidden';
        this.notepad = document.getElementById('notepad');
        this.calculator = document.getElementById('calculator');
        this.InitIcons();
    }

    InitIcons(){
        this.calculatorImage = new Image();
        this.notepadImage = new Image();
        this.calculatorImage.src = '../Pictures/calculator.png';
        this.notepadImage.src = '../Pictures/notepad.png';
    }

    CloseApplication(app){
        let desktop = document.getElementById('desktop');
        desktop.removeChild(app);
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
        notepadWindow.style.flexDirection = 'column';
        notepadWindow.style.position = 'absolute';
        let textArea = document.createElement('textarea');
        textArea.style.width = 'inherit';
        textArea.style.height = 'inherit';
        textArea.style.border = '0';
        textArea.style.padding = '0';
        textArea.style.margin = '0';
        textArea.style.resize = 'none';

        this.BuildTopBarOfApplication(notepadWindow);
        notepadWindow.appendChild(textArea);
        desktop.appendChild(notepadWindow);
        dragElement(notepadWindow);
    }

    BuildTopBarOfApplication(app){
        let top = document.createElement('div');
        top.id = app.id + 'Top'
        top.style.borderBottom = '1px black solid'
        top.style.width = '500px';
        top.style.height = '20px';
        top.style.backgroundColor = 'gray';
        top.style.display = 'flex';
        top.style.justifyContent = 'flex-end'
        let XButton = document.createElement('button');
        XButton.innerHTML = 'X';
        XButton.className = 'applicationButtons';
        XButton.id = 'close';
        let MinusButton = document.createElement('button');
        MinusButton.innerHTML = '_';
        MinusButton.id = 'minus';
        MinusButton.className = 'applicationButtons';
        let ResizeButton = document.createElement('button');
        ResizeButton.innerHTML = '+';
        ResizeButton.id = 'resize';
        ResizeButton.className = 'applicationButtons';
        top.appendChild(XButton);
        top.appendChild(MinusButton);
        top.appendChild(ResizeButton);
        app.appendChild(top);
    }

    StartMenu() {
        this.start.addEventListener("click", () => this.OpenCLoseStartWindow(this.startWindow))
    }

    OpenCLoseStartWindow(startWindow) {
        if(startWindow.style.visibility === 'hidden'){
            startWindow.style.visibility = 'visible';
        }else{
            startWindow.style.visibility = 'hidden';
        }
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

    ClickOnApplicationButton(onClickButton){
        let buttons = document.getElementsByClassName('applicationButtons');
        for(let button of buttons){
            button.addEventListener('click', () => {
                onClickButton(button);
            })
        }
    }

    MinusTheApplication(app){
        app.style.visibility = 'hidden';
    }

    AddApplicationToTaskBar(appPicture, app){
        let leftTaskBar = document.getElementById('leftTaskBar');
        leftTaskBar.appendChild(appPicture);
        appPicture.addEventListener('click', () => {
            app.style.visibility = 'visible';
            appPicture.remove();
        })
    }

    GetFullScreen(app, button){
        let top = app.firstChild;
        let data = app.lastChild;
        if(button.innerHTML === '+'){
            app.style.width = '100%';
            app.style.height = '96%';
            top.style.width = '100%';
            data.style.width = '100%';
            data.style.height = '95.5%';
            app.style.position = 'fixed';
            app.style.left = '0';
            app.style.top = '0';
            button.innerHTML = '-'
        }else{
            app.style.width = app.originalWidth;
            app.style.height = app.originalHeight;
            top.style.width = app.originalWidth;
            app.style.position = 'absolute';
            app.style.top = '0';
            button.innerHTML = '+'
        }

    }

    AddApplicationListToSTartWindow(applications){
        for(const [key, value] of Object.entries(applications)){
            let div = document.createElement('div')
            div.className = 'startWindowApplications';
            div.id = key + 'StartWindows';
            div.appendChild(value);
            div.innerHTML += key;
            this.startWindow.appendChild(div);
        }
    }

    getRealTime() {
        let now = new Date();
        let hh = now.getHours();
        let mm = now.getMinutes();
        let ss = now.getSeconds();
        let dd = now.getDate();
        let MM = now.getMonth() + 1;
        let yyyy = now.getFullYear()
        this.date.innerHTML = dd + "/" + MM + "/" + yyyy;
        this.time.innerHTML = hh + ":" + mm + ":" + ss;
    }

}