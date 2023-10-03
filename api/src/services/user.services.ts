import { getCustomRepository } from "typeorm";
import { User } from "../entities/user";
import { UserRepository } from "../repositories/user.repository";

export class UserServices {

    userRepository: UserRepository 

    constructor (){
      this.userRepository = getCustomRepository(UserRepository)
    }


    public async createOrUpdateUser(reqUser: User) {
      console.log('BoatServices.createBoat() method')
      return await this.userRepository.createOrUpdateUser(reqUser)
    }

    /**
     * Function to get all contacts from contacts database
     * @param req 
     * @param res 
     */
    public async findAllUsers() {
        console.log('UserServices.findAllUsers() method')
        const users = [
          { id: 11, name: 'Adam Gilchrist', email: 'agill@april.biz', phone: '1-668-736-8031 x56442',"website": "hildegard.org", "company": {
              "name": "Romaguera-Crona"
            }},
          { id: 12, name: 'Maria Sharapova', email: 'sharapova@melissa.tv', phone: '010-692-6593 x09125',"website": "anastasia.net" , "company": {
              "name": "Deckow-Crist"
            }},
          { id: 13, name: 'Elvis Prisley', email: 'eprisley@yesenia.net', phone: '1-463-123-4447',"website": "ramiro.info", "company": {
              "name": "Elvis Prisley"
            } },
        ];
        return await users;
      }

}