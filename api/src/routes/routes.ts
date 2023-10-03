import { Request, Response } from "express"
import { UserController } from "../controllers/user.controller";

export class Routes {

    private userController : UserController


    constructor (){

        this.userController = new UserController()
    }

    

    public routes (app: any): void {
        console.log('Routes.routes() start')

       
        app.route('/api/users').get(this.userController.findAllUsers)
        .post(this.userController.createUser)            



    }
}