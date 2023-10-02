import { Request, Response } from "express"

export class Routes {


    constructor (){
    }

    

    public routes (app: any): void {
        console.log('Routes.routes() start')

        // This "health check" route can be used to verify if the server is up.
        app.route('/api/contacts').get((_req:Request, resp: Response) => {
            const contacts = [
                { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031 x56442' },
                { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', phone: '010-692-6593 x09125' },
                { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', phone: '1-463-123-4447' },
              ];
            resp.status(200).send(contacts)
        })

    }
}