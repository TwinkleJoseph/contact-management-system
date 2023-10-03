import axios from "axios";

export class UserServices {

    /**
     * Function to get all contacts from partner end point.
     * @param req 
     * @param res 
     */
    public async findAllUsers() {
        console.log('UserServices.findAllUsers() method')
        const users = [
          { id: 1, name: 'Adam Gilchrist', email: 'agill@april.biz', phone: '1-668-736-8031 x56442',"website": "hildegard.org", "company": {
              "name": "Romaguera-Crona"
            }},
          { id: 2, name: 'Maria Sharapova', email: 'sharapova@melissa.tv', phone: '010-692-6593 x09125',"website": "anastasia.net" , "company": {
              "name": "Deckow-Crist"
            }},
          { id: 3, name: 'Elvis Prisley', email: 'eprisley@yesenia.net', phone: '1-463-123-4447',"website": "ramiro.info", "company": {
              "name": "Elvis Prisley"
            } },
        ];
        return await users;
      }

}