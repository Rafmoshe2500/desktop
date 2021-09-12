import {DesktopView} from "./Views/DesktopView.js";
import {DesktopModel} from "./Models/DesktopModel.js";
import {DesktopController} from "./Controllers/DesktopController.js";

const desktopController = new DesktopController(new DesktopView(), new DesktopModel());
