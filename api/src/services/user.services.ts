import { getCustomRepository } from "typeorm";
import { User } from "../entities/user";
import { UserRepository } from "../repositories/user.repository";

export class UserServices {

    userRepository: UserRepository 

    constructor (){
      this.userRepository = getCustomRepository(UserRepository)
    }


    public async createOrUpdateUser(reqUser: User) {
      console.log('UserServices.createOrUpdateUser() method',JSON.stringify(reqUser))
      const user:User = new User()
    
      user.name = reqUser.name
      user.username = reqUser.username
      user.email = reqUser.email
      user.phone = reqUser.phone
      user.website = reqUser.website
      return await this.userRepository.createOrUpdateUser(user)
    }

    /**
     * Function to get all contacts from contacts database
     * @param req 
     * @param res 
     */
    public async findAllUsers() {
        console.log('UserServices.findAllUsers() method')
        return await this.userRepository.findAllUsers()
      }

}