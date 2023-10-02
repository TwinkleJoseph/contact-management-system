import { Request, Response } from "express";
import { PartnerServices } from "../services/partner.services";

export class UserController {

    public async findAllUsers(req: Request, res: Response) {
        try {
            console.log('UserController.findAllUsers() method');
            const partnerServices = new PartnerServices();

            // Fetch contacts from the partner API
            const partnerContacts = await partnerServices.getContacts();
            console.log('partner contacts ', partnerContacts);

            res.status(200).json(partnerContacts);
        } catch (error) {
            console.error('Error fetching contacts:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
