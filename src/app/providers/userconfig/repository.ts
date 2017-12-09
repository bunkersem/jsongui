import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export const createDefaultUserConfig = (): UserConfig => {
    return {
        title: 'userConfig',
        text: {
            indentation: {
                type: 'spaces',
                amount: 4,
            }
        },
        entry: {
                JSONContentEntryMethod: 'textbox-1',
                JSONSchemaEntryMethod: 'textbox-1',
            }
        }
}


export interface UserConfigRepository {
    userConfigBehaviourSubject: BehaviorSubject<UserConfig>;

}

export interface UserConfig {
    title: 'userConfig',
    text: {
        indentation: {
            type: string,
            amount: number,
        }
    }
    entry: {
        JSONContentEntryMethod: string,
        JSONSchemaEntryMethod: string,
    }
}
