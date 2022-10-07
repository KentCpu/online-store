export interface IUser {
    readonly id: string;
    readonly email: string;
    readonly nickname: string;
    isActivated: boolean;
    avatar?: string;
}