"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form} from "@/components/ui/form"
import CustomFormField from "./CustomFormField"

export enum formFieldType {
    INPUT = 'input', 
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'date_picker',
    SELECT = "select",
    SKELETON = 'skeleton'
}


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const PatientForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
         <h1 className="header">Hi There 👋</h1>
         <p className="text-dark-700">schedule your first appointment.</p>
        </section>
         <CustomFormField 
         fieldType={formFieldType.INPUT}
         control={form.control}
         name="name"
         label="full name"
         placeholder="jhon doe"
         iconSrc="../assets/logo/Logo.svg"
         iconAlt="user"
         />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}


export default  PatientForm