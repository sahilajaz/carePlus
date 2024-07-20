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
                     className="ml-2"
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