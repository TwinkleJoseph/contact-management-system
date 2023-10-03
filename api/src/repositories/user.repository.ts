import { EntityManager, EntityRepository } from "typeorm";
import { User } from "../entities/user";


@EntityRepository(User)
export class UserRepository {
    

    constructor (private manager: EntityManager){

    }

    public async createOrUpdateUser (newUser: User) {
      console.log('UserRepository.createOrUpdateUser() start')
      const user = await this.manager.save(newUser)
      return user
    }

}