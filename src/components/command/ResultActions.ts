
import { useCommandData } from "../../store/commandStore";

export interface StatusChanger {
    execute(): void;
}
export type StatusType = 'success' | 'fail' | 'failWithCheck' | 'playing' | 'notPlaying';

class Data {
    public static statusData = useCommandData()
}

export class SuccessCommand implements StatusChanger{
    status: StatusType = 'success';
    statusData = useCommandData();
    execute(): void {
        Data.statusData.setGameStatus(this.status);
    }
}

export class FailCommand implements StatusChanger{
    status: StatusType = 'fail';
    execute(): void {
        Data.statusData.setGameStatus(this.status);
    }
}

export class FailWithCheckCommand implements StatusChanger{
    status: StatusType = 'failWithCheck';
    execute(): void {
        Data.statusData.setGameStatus(this.status);
    }
}

export class PalyingCommand implements StatusChanger{
    status: StatusType = 'playing';
    execute(): void {
        Data.statusData.setGameStatus(this.status);
    }
}

export class NotPlayingCommand implements StatusChanger{
    status: StatusType = 'notPlaying';
    execute(): void {
        Data.statusData.setGameStatus(this.status);
    }
}
