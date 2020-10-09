import { IpcMainEvent, IpcRendererEvent } from 'electron'

export interface IpcChannelInterface {
 getName(): string;
 handle(event: IpcMainEvent | IpcRendererEvent, request: IpcRequest): void;
}

export interface IpcRequest {
 params: string;
}
// TODO
export const channelActionTypes = {
 SAVE_NOTE: 'SAVE_NOTE',
}
