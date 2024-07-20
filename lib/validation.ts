import { Phone } from "lucide-react"
import { z } from "zod"

export const userFormValidation = z.object({
    name: z.string().min(2, "Username must be at least 2 characters.")
    .max(50 , "Name must be atmost 50 characters. "),
    email:z.string().email("Inavlid email address"),
    phone:z.string().refine((phone) =>  /^\+\d{10,15}$/.test(phone), "Invalid phone number")
  })