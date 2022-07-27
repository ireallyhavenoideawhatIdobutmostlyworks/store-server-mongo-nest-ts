import {v4 as uuidv4} from 'uuid';
import { Response } from './response'; 

export class ResponseCreator {

    private constructor(){}


    public static response(): Response {
        return new Response(new Date().getTime(), uuidv4());
    }
}


