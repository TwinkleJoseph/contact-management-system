import { Request, Response } from "express"

export class Routes {


    constructor (){
    }

    

    public routes (app: any): void {
        console.log('Routes.routes() start')

        // This "health check" route can be used to verify if the server is up.
        app.route('/api/users').get((_req:Request, resp: Response) => {
            const users = [
                { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031 x56442',"website": "hildegard.org", "company": {
                    "name": "Romaguera-Crona"
                  }},
                { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', phone: '010-692-6593 x09125',"website": "anastasia.net" , "company": {
                    "name": "Deckow-Crist"
                  }},
                { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', phone: '1-463-123-4447',"website": "ramiro.info", "company": {
                    "name": "Romaguera-Jacobson"
                  } },
              ];
            resp.status(200).send(users)
        })

    }
}