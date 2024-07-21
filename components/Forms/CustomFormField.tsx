"use client"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, Field } from "react-hook-form"
import { formFieldType } from "./PatientForm"
import Image from "next/image"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


interface CustomProps {
    control: Control<any>,
    fieldType: formFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean
    children?:React.ReactNode,
    renderSekelton?: (Field: any) => React.ReactNode
}

const RenderField = ({field , props}: {field:any , props:CustomProps}) => {
    switch(props.fieldType) {
        case formFieldType.INPUT:
            return(
               <div className="flex rounded-md border border-dark-500 bg-dark-400">
                 {props.iconSrc && (
                    <Image
                    src={props.iconSrc}
                     height={24}
                     width={24}
                     alt={props.iconAlt || "icon"}
                     className="ml-2 h-5 mt-3"
                    />

                 )}
                  <FormControl>
                  <Input
                  type="text"
                  placeholder={props.placeholder}
                  {...field}
                  className="shad-input border-0"
                  />
                  </FormControl>
               </div>
            )

           case formFieldType.PHONE_INPUT:
             return(
              <FormControl>
               <PhoneInput
               defaultCountry="US"
               placeholder={props.placeholder}
              international
              withCountryCallingCode
              value={field.value }
              onChange={field.onChange}
              className="input-phone"
            />
            </FormControl> 
             )
    }
}


const CustomFormField = (props: CustomProps) => {
    const {control , fieldType , name ,label} = props
    return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1">
            {
            fieldType !== formFieldType.CHECKBOX && label && ( 
            <FormLabel>{label}</FormLabel> 
         ) }
         <RenderField field={field} props={props}/>
         <FormMessage className="shad-error"/>
          </FormItem>
        )}
      />
    )
}

export default CustomFormField