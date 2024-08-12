"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {
    Form,
} from "@/components/ui/form"
import { CustomField } from "./CustomField"
import { isBase64Image } from "@lib/utils"
import { useUploadThing } from "@lib/uploadthing"
import { createHome, UpdateHomeById } from "@lib/actions/home.action"
import { handleError } from "@lib/utils"
import Loader from "@components/ui/loader"






//Define form schema
export const formSchema = z.object({
    price: z.string().min(1, "Price is required"),
    title: z.string().min(1, "Title is required"),
    phonenumber: z.string().min(1, "Phone number is required"),
    img: z.string().min(4, "4 Images are required"),
    location: z.string().min(1, "Location is required"),
    description: z.string().min(1, "Description is required"),
});



export default function CreateHouseform({ action, data = null, userId, header }) {
    //hook to call the upload process to upload thing
    const { startUpload } = useUploadThing("media")


    //state to store the image file
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    //router to route to paths
    const router = useRouter();

    // Define the default values
    const defaultValues = {
        price: "",
        title: "",
        phonenumber: "",
        img: "",
        location: "",
        description: "",
    };

    // Set initial form values based on action type and provided data
    const initialValues = data && action === 'Update' ? {
        price: data?.price || "",
        title: data?.title || "",
        phonenumber: data?.phonenumber || "",
        img: data?.img || [],
        location: data?.location || "",
        description: data?.description || "",
    } : defaultValues;


    // Initialize the form with react-hook-form and Zod resolver
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues
    });

    //function to handle image change
    function handleImage(e, fieldChange) {
        e.preventDefault();


        const fileReader = new FileReader();
        if (e.target.files && e.target.files.length === 4) {
            
            const file = e.target.files[0];


            setFiles(Array.from(e.target.files));


            if (!file.type.includes("image")) return;


            fileReader.onload = async (event) => {
                const imageDataUrl = event.target?.result?.toString() || "";
                fieldChange(imageDataUrl);
            };


            fileReader.readAsDataURL(file);
        }
    }


    //handle form sumission
    async function onSubmit(values) {
        setLoading(true)

        console.log('it is triggered')
        const imageValue = values.img;
        const hasImageChanged = isBase64Image(imageValue);


        if (hasImageChanged) {
            const imgRes = await startUpload(files);

            if (imgRes.length>0) {

                const urlArray=imgRes.map((index)=>({
                 url:index.url
                }))
                values.img=urlArray
                

            }
        }

        const homeData = {
            _id: data?._id,
            title: values.title,
            phonenumber: values.phonenumber,
            price: values.price,
            location: values.location,
            description: values.description,
            img: values.img
        };

        if (action == 'Add') {
            try {
                const newHome = await createHome({
                    home: homeData,
                    userId
                });
                if (newHome) {

                    router.push('/myhomes')
                }
            } catch (error) {
                handleError(error)
                setLoading(false);
            }

        } if (action == 'Update') {
            try {
                const homeToUpdate = await UpdateHomeById({ homedata: homeData, userId })
                if (homeToUpdate) {
                    setLoading(false)
                    console.log('Redirecting to:', `/homes/${homeToUpdate._id}`);
                    router.push(`/homes/${homeToUpdate._id}`)
                }
            } catch (error) {
                console.log(error)
                setLoading(false);
            }

        }
    }
    if (loading) {
        return <Loader />;
    }




    return (
        <div className="flex flex-col mt-20 items-center justify-center min-h-screen">
            <h1 className="text-3xl font-semibold mb-3">{header}</h1>
            <Form className='mx-auto' {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="cursor-pointer  pb-10">
                    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg border-t-2 border-t-slate-100 space-y-8">
                        <CustomField
                            control={form.control}
                            name='title'
                            formLabel='Enter the title'
                            className='w-full'
                            render={({ field }) => (
                                <Input {...field} className="w-full px-3 py-2 border rounded-md focus:outline-none" />
                            )}
                        />
                        <CustomField
                            control={form.control}
                            name='price'
                            formLabel='Enter the price'
                            className='w-full'
                            render={({ field }) => (
                                <Input
                                    {...field}

                                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                                />
                            )}
                        />
                        <CustomField
                            control={form.control}
                            name='phonenumber'
                            formLabel='Enter the Phonenumber'
                            className='w-full'
                            render={({ field }) => (
                                <Input
                                    {...field}

                                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                                />
                            )}
                        />
                        <CustomField
                            control={form.control}
                            name='location'
                            formLabel='Enter the location'
                            className='w-full'
                            render={({ field }) => (
                                <Input {...field} className="w-full px-3 py-2 border rounded-md focus:outline-none" />
                            )}
                        />
                        <CustomField
                            control={form.control}
                            name='description'
                            formLabel='Enter the description'
                            className='w-full'
                            render={({ field }) => (
                                <Textarea rows={4} {...field} className="w-full px-5 py-2 border rounded-md focus:outline-none" />
                            )}
                        />
                        <CustomField
                            control={form.control}
                            name='img'
                            formLabel='Pick an image'
                            className='w-full'
                            render={({ field }) => (
                                <>
                                    {field.value && (
                                        <img
                                            src={field.value}
                                            alt="Current image"
                                            className="mb-2 w-48 h-48 object-cover border rounded-md"
                                        />
                                    )}
                                    <Input
                                        accept="image/*"
                                        onChange={(e) => { handleImage(e, field.onChange) }}
                                        type='file'
                                        multiple
                                        className="w-full px-5 py-2 border rounded-md focus:outline-none cursor-pointer"
                                    />
                                </>
                            )}
                        />
                        <Button type="submit" className="w-full px-4 py-2 bg-slate-950 text-white rounded-md hover:bg-slate-900 focus:outline-none focus:bg-slate-800">
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </div>

    )
}

