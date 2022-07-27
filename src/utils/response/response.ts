export class Response {

    public constructor(timestamp: number, id: number) {
        this.timestamp = timestamp;
        this.id = id;
    }


    public readonly timestamp: number;
    public readonly id: number;
}