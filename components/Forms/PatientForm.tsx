"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Form} from "@/components/ui/form"
import CustomFormField from "./CustomFormField"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { userFormValidation } from "@/lib/validation"
import { useRouter } from 'next/navigation' 
import { createUser } from "@/lib/action/patient.action"

export enum formFieldType {
    INPUT = 'input', 
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'date_picker',
    SELECT = "select",
    SKELETON = 'skeleton'
}


const PatientForm = () => {
  const[Loading , setLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof userFormValidation>>({
    resolver: zodResolver(userFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone: "",
    },
  })

  
  const onSubmit = async (values: z.infer<typeof userFormValidation>) => {
    setLoading(true)
    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone
      }

      const newUser = await createUser(user)

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
    console.log("click")
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
         placeholder="Jhon Doe"
         iconSrc="/assets/logo/user.png"
         iconAlt="user"
         />
           <CustomFormField 
         fieldType={formFieldType.INPUT}
         control={form.control}
         name="email"
         label="Email"
         placeholder="jhondoe@jmastery"
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