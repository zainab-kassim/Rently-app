'use server'

import { revalidatePath } from "next/cache"; // Importing revalidatePath for cache revalidation
import Home from "@lib/database/models/home.model";
import { connectToDatabase } from "../database/dbconnection"; // Importing the function to connect to MongoDB
import { handleError } from "../utils"; // Importing the error handler function
import User from "@lib/database/models/user.model";
import { redirect } from "next/navigation";



//create home 
export async function createHome({ home, userId }) {
    try {
        await connectToDatabase(); // Connect to MongoDB

        const foundOwner = await User.findById(userId);

        if (!foundOwner) {
            throw new Error('user not found');
        }

        const newHome = await Home.create({
            ...home, owner: foundOwner._id
        })


        return JSON.parse(JSON.stringify(newHome)); // Return the newly created prompt as a plain object
    } catch (error) {
        handleError(error); // Handle any errors
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
export async function GetHomeById(homeId) {
    try {
        await connectToDatabase();
        const foundHome = await Home.findById(homeId).populate('owner')
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
        const homeToUpdate = await Home.findById(homedata._id);
        if (!homeToUpdate || homeToUpdate.owner.toHexString() !== userId) {
            throw new Error("Unauthorized or home not found");
        }

        const updatedHome = await Home.findByIdAndUpdate(
            homeToUpdate._id,
            homedata,
            { new: true }
        );

        return JSON.parse(JSON.stringify(updatedHome));
    } catch (error) {
        handleError(error);
        throw new Error(error.message); // Re-throw the error to handle it in the form submission
    }
}


//get all homes by a particular user
export async function GetOwnersHomes({ userId }) {
    try {
        await connectToDatabase();
        console.log(userId);

        const foundOwner = await User.findOne({ clerkId: userId });
        console.log(`Found owner: ${foundOwner}`);

        if (!foundOwner) {
            throw new Error('user not found');
        }

        const foundUserHomes = await Home.find({ owner: foundOwner._id }).populate('owner');


        if (!foundUserHomes || foundUserHomes.length === 0) {
            throw new Error("No homes found for this user");
        }

        return JSON.parse(JSON.stringify(foundUserHomes));
    } catch (error) {
        console.error('Error in GetOwnersHomes:', error.message);
        handleError(error);
        throw error; // Rethrow the error to be handled by the calling function
    }
}

//delete home
export async function DeleteHome({ HomeId }) {
    try {
        await connectToDatabase();
        const HometoDelete = await Home.findById(HomeId);
        if (!HometoDelete) {
            throw new Error("Home not found");
        }

        // Delete the Home
        await Home.findByIdAndDelete(HometoDelete._id);
    } catch (error) {
        handleError(error); // Handle any errors
    }
}

