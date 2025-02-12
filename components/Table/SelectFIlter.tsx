import * as React from "react"

 import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select"
import { filterKeys } from "./PostTable"

 export const FIlterByKey =[ 'title', 'body']
export function SelectFilter({ currentValue, setValue }: { currentValue: string, setValue: (val: filterKeys) => void }) {
    
  return (
    <Select value={currentValue} onValueChange={setValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filter by:</SelectLabel>
          {FIlterByKey.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
