import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "@/utils/logger";

//CRUD

/**
 * Method to obtain all user from collection "User" in mongo server
 */
export const GetAllUser = async (): Promise<any[] | undefined> => {
    try{
        let userModel = userEntity();

        //Search all user
        return await userModel.find();
    } catch (error){
        LogError(`[ORM ERROR]: Getting All User: ${error}`);
    }

}

//TODO: 
//Get user by id
//get user by email
//delete user by id
//create new user
// update User by id