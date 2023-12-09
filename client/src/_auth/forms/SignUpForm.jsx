import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

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

const SignUpForm = () => {

    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(SignUpValidation),
        defaultValues: {
            name: "",
            galleryName: "",
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <div className="sm:w-420 m-20 flex-center flex-col">
                <img src="./assets/images/minimal_orange_mm_logo.png" alt="mind-Mosaic logo" />
                <p className="text-light-3 small-medium md:base-regular mt-2">Begin creating your Mind Mosaic™ by entering your details below.</p>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col w-full">
                    <FormField
                        control={form.control}
                        name="Gallery"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gallery Title</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="@ArtPop13" className="shad-input"{...field} />
                                </FormControl>
                                <FormDescription>
                                    This will be your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Full Name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Lady Gaga" className="shad-input"{...field} />
                                </FormControl>
                                <FormDescription>
                                    Your name will be displayed on your profile.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="lady@gaga.com" className="shad-input"{...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Password"
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
                    <Button type="submit" className="flex-col gap-5 w-full mt-4 shad-button_primary"
                    >Submit
                    </Button>
                </form>
            </div>
        </Form>

    )
}


export default SignUpForm;