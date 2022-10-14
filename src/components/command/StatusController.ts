import { FailCommand, FailWithCheckCommand, NotPlayingCommand, PalyingCommand, StatusChanger, StatusType, SuccessCommand } from './ResultActions';


export class StatusController {
    private changeTosSccess: StatusChanger;
    private changeToFail: StatusChanger;
    private changeToFailWithCheck: StatusChanger;
    private pchangeToPaying: StatusChanger;
    private changeToNotPlaying: StatusChanger;

    constructor() {
        this.changeTosSccess = new SuccessCommand();
        this.changeToFail = new FailCommand();
        this.changeToFailWithCheck = new FailWithCheckCommand();
        this.pchangeToPaying = new PalyingCommand();
        this.changeToNotPlaying = new NotPlayingCommand();
    }

    
    setStatus(result: StatusType) {
        switch (result) {
            case 'success':
                this.changeTosSccess.execute();
                break;
            case 'fail':
                this.changeToFail.execute();
                break;
            case 'failWithCheck':
                this.changeToFailWithCheck.execute();
                break;
            case 'playing':
                this.pchangeToPaying.execute();
                break;
            case 'notPlaying':
                this.changeToNotPlaying.execute();
                break;
            default:
                break;
        }
    }
}