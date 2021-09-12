export class DesktopController{
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.onLoad();
        setInterval(this.view.getRealTime, 1000);
        this.onStartCLick();
        this.view.OpenNotepadFromDesktop(this.onOpenNotepad);
        this.view.OpenNotepadFromStartMenu(this.onOpenNotepad);
    }

    onLoad(){
        this.model.apllications['notepad'] = this.view.notepadImage;
        this.model.apllications['calculator'] = this.view.calculatorImage;
    }

    onStartCLick = () => {
        this.view.startButton()
        this.view.AddApplicationListToSTartWindow(this.model.apllications);
    }

    onOpenNotepad = () => {
        this.view.AddNotepadToView();
        this.view.ClickOnApplicationButton(this.StrategyClickedButton);
    }

    StrategyClickedButton = (button) => {
        const app = button.parentElement.parentElement;
        switch (button.id) {
            case 'close':
                this.view.CloseApplication(app);
                break;
            case 'resize':
                this.view.GetFullScreen(app, button);
                break;
            case 'minus':
                this.view.MinusTheApplication(app)
                this.view.AddApplicationToTaskBar(this.model.apllications[app.id], app)
                break;
        }
    }

}