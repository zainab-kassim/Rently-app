'use server'

import { revalidatePath } from "next/cache"; // Importing revalidatePath for cache revalidation
import Home from "@lib/database/models/home.model";
import { connectToDatabase } from "../database/mongoose"; // Importing the function to connect to MongoDB
import { handleError } from "../utils"; // Importing the error handler function
import User from "@lib/database/models/user.model";
import { redirect } from "next/navigation";



//create home 
export async function createHome({ homedata, userId }) {
    try {
        await connectToDatabase(); // Connect to MongoDB

        const foundOwner = await User.findById(userId);

        if (!foundOwner) {
            throw new Error('user not found');
        }

        const newHome = await Home.create({
            ...homedata, owner: foundOwner._id
        })


        return JSON.parse(JSON.stringify(newHome)); // Return the newly created prompt as a plain object
    } catch (error) {
        handleError(error); // Handle any errors

    } finally {
        o
        redirect('/profile/myhomes');
    }
}


//Get  all homes
export async function GetAllHomes() {
    try {

        await connectToDatabase();
        const homes = await Home.find().populate('owner');

        if (!homes) throw new Error("No homes found");
        return JSON.parse(JSON.stringify(homes));

    } catch (error) {
        handleError(error);
    }
}

//view a home by id
export async function GetHomeById({ homeId }) {
    try {
        await connectToDatabase();
        const foundHome = await Home.findbyId(homeId).populate('owner')
        if (!foundHome) throw new Error("cant view Home");
        return JSON.parse(JSON.stringify(foundHome))
    } catch (error) {
        handleError(error);
    }
}

//to edit a home by Id
export async function UpdateHomeById({ homedata, userId }) {
    try {
        await connectToDatabase();
        const HometoUpdate = await Home.findById(homedata._id);
        const updatedHome = await Prompt.findByIdAndUpdate(
            HometoUpdate._id,
            homedata,
            { new: true }
        )
        if (!HometoUpdate || HomeToUpdate.owner.toHexString() !== userId) {
            throw new Error("Unauthorized or home not found");
        }

        return JSON.parse(JSON.stringify(updatedHome));
    } catch (error) {
        handleError(error);
    }
}

//get all homes by a particular user
export async function GetOwnersHomes({ userId }) {
    try {

        await connectToDatabase();


        const foundOwner = await User.findById(userId);

        if (!foundOwner) {
            throw new Error('user not found');
        }
        const foundUserHomes = await Home.find({ author: foundOwner })


        if (!foundUserHomes) throw new Error("No homes found for this user"); // If no prompts are found, throw an error

        return JSON.parse(JSON.stringify(prompts));

    } catch (error) {
        handleError(error);
    }
}


//delete home
export async function DeleteHome({ HomeId }) {
    try {
        await connectToDatabase();
        const HometoDelete = await Home.findById(HomeId);
       if (!HomeToDelete) {
            throw new Error("Home not found"); 
        }

        // Delete the Home
        await Home.findByIdAndDelete(HomeToDelete._id);
    } catch (error) {
        handleError(error); // Handle any errors
    } finally {
        redirect('/profile');
    }
}