import { Request, Response } from "express";
import { PartnerServices } from "../services/partner.services";
import { connection } from "../connections/db";
import { UserServices } from "../services/user.services";
import { Constants } from "../common/app.constants";
import { User } from "../entities/user";

export class UserController {

    /**
     * Function to create add a new user to the swim lane
     * @param req 
     * @param res 
     */
    public createUser(req: Request, res: Response) {
      console.log('UserController.createUser() method')
      const userServices:UserServices = new UserServices()
      connection
        .then(async () => {
          console.log('After connection successful')
          const newUser = await userServices.createOrUpdateUser(req.body)
          console.log('after service call',newUser)
          if (newUser !== null && typeof (newUser) !== Constants.UNDEFINED) {
            console.log('Response json',newUser)
            res.status(Constants.OK)
              .json({
                message: Constants.SUCCESSFULLY_CREATED_MESSAGE,
                user: newUser
              })
          } else {
            console.log('Unexpected error', newUser)
          }
          console.log('Response from UserController.createUser() is', res.statusCode)
        })
        .catch(error => {
          console.log('Exception occured in UserController.createUser() method ', JSON.stringify(error))
        })
    }

    public async findAllUsers(req: Request, res: Response) {
        try {
            console.log('UserController.findAllUsers() method');
            const partnerServices = new PartnerServices();
            const userServices = new UserServices()

            connection
            .then(async () => {
              // Fetch contacts from the partner API
              const partnerContacts = await partnerServices.getContacts();
              console.log('partner contacts ', partnerContacts);
              /** Fetch contacts from contacts database */
              const localUsers = await userServices.findAllUsers();

              if (localUsers !== null && typeof (localUsers) !== Constants.UNDEFINED) {
                // Combine the responses
                // Append localUsers to partnerContacts
                const combinedContacts = partnerContacts.concat(localUsers);

                res.status(Constants.OK).json(combinedContacts);
              } 
            })
            .catch(error => {
              console.log('Exception occured in UserController.findAllUsers() method ', JSON.stringify(error))
            })

        } catch (error) {
            console.error('Error fetching contacts:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    /**
     * Method to map the request entity to db entity for persistence.
     * Typeorm will throw run time error if request object is send
     * directly to database.
     * @param user 
     * @param reqUser 
     * @returns 
     */
    private mapRequestToEntity(user:User, reqUser: User): User {
      console.log('Inside mapRequestToEntity', user)
      if(user == null || typeof (user) === Constants.UNDEFINED){
        user = new User()
      }

      user.name = reqUser.name
      user.userName = reqUser.userName
      user.email = reqUser.email
      user.phone = reqUser.phone
      return user

  }
}
