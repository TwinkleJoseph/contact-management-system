import axios from "axios";

export class PartnerServices {

    /**
     * Function to get all contacts from partner end point.
     * @param req 
     * @param res 
     */
    public async getContacts() {
        console.log('PartnerServices.getPartnerContacts() method')
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
          } catch (error) {
            console.error('Error fetching contacts:', error);
            throw new Error('Failed to fetch contacts from the external API');
          }
      }

}