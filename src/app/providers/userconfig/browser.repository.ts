import { UserConfigRepository, UserConfig, createDefaultUserConfig } from './repository';
import * as Rx from 'rxjs/Rx';
import Datastore from 'nedb';


export class BrowserUserConfigRepository implements UserConfigRepository {
    userConfigBehaviourSubject = new Rx.BehaviorSubject<UserConfig>(null);

    constructor() {
        this.userConfigBehaviourSubject.next(createDefaultUserConfig());
    }

    setConfig(config: UserConfig) {
        this.userConfigBehaviourSubject.next(config);
    }
}

