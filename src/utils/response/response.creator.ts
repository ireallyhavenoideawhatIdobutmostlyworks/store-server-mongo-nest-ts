import {v4 as uuidv4} from 'uuid';
import { Response } from './response'; 
import { ResponseStatus } from './response.status';

export class ResponseCreator {

    private constructor(){}


    public static response(status: ResponseStatus): Response {
        if(status === ResponseStatus.ERROR) {
            return new Response(new Date().getTime(), uuidv4(), status, 'Please contact to administrator with UUID number')
        }

        return new Response(new Date().getTime(), uuidv4(), status);
    }
    
}


