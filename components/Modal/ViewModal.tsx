import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "postcss";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Eye } from "lucide-react";


export function ViewModal({ data }:{ data:post}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex justify-between w-full">
        <p>View</p>
        <Eye className="stroke-pryColor" />   
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-xl">View post 
            <br />
            <br />
            
          </DialogTitle>
          <strong className=" mt-3 text-sm font-medium underline">UserId: {data.userId}</strong>
          <DialogDescription className=" font-semibold text-black/90">
           {data.title}
          </DialogDescription>
        </DialogHeader>
         {data.body}
      </DialogContent>
    </Dialog>
  )
}
