import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Trash2 } from "lucide-react";
import { deletePost } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState } from "react";


export function DeleteModal({ data }: { data: post }) {
  const [open, setOpen] = useState(false);
  const { mutate } = useMutation({
    mutationFn: async (formData: post) => {
      return deletePost(formData);
    },
    onSuccess: (data) => {
      toast.success('Success')
      setOpen(false)
    },
    onError: (error) => {
      toast.error('Error Occured')
    }
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex justify-between w-full">
          <p className="">Delete</p>
          <Trash2 className="stroke-red-700" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-500 text-xl">Delete post
            <br />
            <br />
          </DialogTitle>
          <DialogDescription className=" font-semibold text-black/90">
            Are you sure you want to delete - <span className=" font-mono">{data.title}</span> 
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"destructive"} onClick={()=>mutate(data)}>DELETE</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
