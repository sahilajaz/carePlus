"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Form} from "@/components/ui/form"
import CustomFormField from "./CustomFormField"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"

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
  const[Loading , setLoading] = useState(false)

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
         label="Full Name"
         placeholder="jhon doe"
         iconSrc="/assets/logo/user.png"
         iconAlt="user"
         />
           <CustomFormField 
         fieldType={formFieldType.INPUT}
         control={form.control}
         name="email"
         label="Email"
         placeholder="jhondoe@jmastery.pro"
         iconSrc="/assets/logo/email.png"
         iconAlt="email"
         />
          <CustomFormField 
         fieldType={formFieldType.PHONE_INPUT}
         control={form.control}
         name="phone number"
         label="Phone Number"
         placeholder="+000342045334"
         iconSrc="/assets/logo/Lead icon.png"
         iconAlt="phone_num"
         />
       <SubmitButton isloading={Loading} >Get Started</SubmitButton>
    </form>
  </Form>
  )
}


export default  PatientForm