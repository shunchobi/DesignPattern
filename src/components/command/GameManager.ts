
import { StatusController } from './StatusController';


export class GameManager {

    private statusController: StatusController;

    constructor() {
        this.statusController = new StatusController()
    }

    success() {
        this.statusController.setStatus('success');
    }
    fail() {
        this.statusController.setStatus('fail');
    }
    failWithCheck() {
        this.statusController.setStatus('failWithCheck');
    }
    playing() {
        this.statusController.setStatus('playing');
    }
    notPlaying() {
        this.statusController.setStatus('notPlaying');
    }
}
