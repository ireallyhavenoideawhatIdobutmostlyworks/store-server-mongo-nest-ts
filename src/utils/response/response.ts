export class Response {

    public constructor(timestamp: number, uuid: number, status: string, info?: string ) {
        this.timestamp = timestamp;
        this.uuid = uuid;
        this.status = status;
        this.info = info;
    }


    public readonly timestamp: number;
    public readonly uuid: number;
    public readonly status: string;
    public readonly info: string;
}