import { Injectable } from '@angular/core';
import { UserConfigRepository } from './repository';
import { BrowserUserConfigRepository } from './browser.repository';
import { ElectronService } from '../electron.service';
import { ElectronUserConfigRepository } from './electron.repository';

@Injectable()
export class UserConfigService {

    public repository: UserConfigRepository;
    constructor(electronService: ElectronService) {
        if (electronService.isElectron()) {
            this.repository = new ElectronUserConfigRepository();
        } else {
            this.repository = new BrowserUserConfigRepository();
        }
    }

}
