export class NotificationMsgModel {
    codeMsg: string;
    typeMsg: string;
    Message: string;

    constructor(code: string = '0', tpm: string = '', msg: string = '')
    {
        this.codeMsg = code;
        this.typeMsg = tpm;

        //TODO: we need to use in the future a pipe for Translate de msg, the translate pipe will use a resource depend on language env
        // this.Message = msg | translate
        this.Message = msg;
    }
}
