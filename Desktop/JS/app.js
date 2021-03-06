import {DesktopView} from "./Views/DesktopView.js";
import {DesktopModel} from "./Models/DesktopModel.js";
import {DesktopController} from "./Controllers/DesktopController.js";
import {Notepad} from "./Views/Notepad.js";

const applications = {
    'notepad': new Notepad()
}
const desktopController = new DesktopController(new DesktopView(applications), new DesktopModel());
