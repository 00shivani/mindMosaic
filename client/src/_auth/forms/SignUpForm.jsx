// SignUpForm.jsx

import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import "../../css/SignUpForm.css";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpValidation } from "../../lib/validation";
import Loader from "../../components/shared/Loader";
import { Link } from "react-router-dom";

const SignUpForm = () => {
    const isLoading = false; 

    // 1. Define your form.
    const form = useForm({
        values: z.infer<typeof SignUpValidation,
        resolver: zodResolver(SignUpValidation),
        defaultValues: {
            gallery: "",
            name: "",
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    const onSubmit = async () => {
        try {
            const values = form.getValues();
            console.log ("Form Values: ", values);

        } catch (error) {
            console.error ("error creating user account", error);
        }
    };
    return (
        <Form {...form}>
            <div id="signUpForm" className="sm:w-420 m-20 flex-center flex-col">
                <img id="logo" src="./assets/images/minimal_orange_mm_logo.png" alt="mind-Mosaic logo" />
                <p id="signUpDescription" className="text-light-3 small-medium md:base-regular mt-2 text-center">Begin creating your Mind Mosaic™ today!</p>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col w-full">
                    <FormField
                        control={form.control}
                        name="gallery"
                        defaultValue=""
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gallery Title</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="@ArtPop13" className="shad-input"{...field} />
                                </FormControl>
                                <FormDescription>
                                    {/* {none} */}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        defaultValue=""
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Lady Gaga" className="shad-input"{...field} />
                                </FormControl>
                                <FormDescription>
                                   {/* none */}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        defaultValue=""
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="lady@gaga.com" className="shad-input"{...field} />
                                </FormControl>
                                <FormDescription>
                                    {/* none */}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        defaultValue=""
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="" className="shad-input"{...field} />
                                </FormControl>
                                <FormDescription>
                                    {/* none atm */}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" id="signUpBtn" className="w-full mt-4 shad-button_primary" onClick={() => onSubmit()}>
                        { isLoading ? (
                            <div className="loader flex-center">
                              <Loader /> 
                            </div>
                        ): "Sign up"}
                    </Button>

                    <p id="logInMessage" className="text-small-regular text-light-2 text-center mt-2">
                        Already have an account? 
                        <Link to="/sign-in" id="logInLink" className="text-small-semibold ml-1">Log in</Link>
                    </p>
                </form>
            </div>
        </Form>

    )
}


export default SignUpForm;