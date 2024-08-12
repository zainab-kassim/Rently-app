import { auth } from '@clerk/nextjs/server'; // Clerk authentication utility for accessing current user
import { redirect } from "next/navigation"; // Function to handle page redirection
import CreateHouseform from "@components/shared/createHouseform";
import { getUserById } from "@lib/actions/user.action";
import { GetByIdForm, GetHomeById } from '@lib/actions/home.action';





export default async function CreateUpdatePage({params: {id}}) {

  // Retrieve the current user's ID from Clerk authentication
  const { userId } = auth();


  // Redirect to the sign-in page if the user ID is not found (i.e., user is not authenticated)
  if (!userId) redirect('/sign-in');


  // Fetch the user details from the database using the retrieved user ID
  const user = await getUserById(userId);

  const home= await GetHomeById(id);
 


  return (
    <div>
      {/* Render the form for creating a prompt, passing the action type and user ID */}
      <CreateHouseform
        action='Update'
        userId={user._id}
        header='Edit A Home'
        data={home}
      />
    </div>

    
  )
}