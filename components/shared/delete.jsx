"use client";

import { useRouter } from 'next/navigation';
import { useState, useTransition } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DeleteHome } from "@lib/actions/home.action";
import { Button } from "../ui/button";

export const DeleteConfirmation = ({ HomeId }) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        startTransition(async () => {
            try {
                await DeleteHome({ HomeId });
                router.push('/myhomes'); // Redirect after successful deletion
            } catch (err) {
                setError(err.message || 'An error occurred while deleting the home');
            }
        });
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild className="w-full rounded-md">
                <Button
                    type="button"
                    className="button w-30 txt-base font-medium "
                    variant="destructive"
                >
                    Delete home
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="flex flex-col gap-10">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to delete this home?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="p-16-regular">
                        This will permanently delete this home
                    </AlertDialogDescription>
                </AlertDialogHeader>

                {error && <div className="text-red-500">{error}</div>}

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="border bg-red-500 text-white hover:bg-red-600"
                        onClick={handleDelete}
                    >
                        {isPending ? "Deleting..." : "Delete"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
