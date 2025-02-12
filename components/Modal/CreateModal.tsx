'use client'
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Eye, Pen, Plus } from "lucide-react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { createPost, updatePost } from "@/services/api";
import { useState } from "react";
import { toast } from "sonner";

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  body: Yup.string().required('Body is required'),
});

export const CreateModal = () => {
  const [open, setOpen] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (formData: Omit<post, 'id' | 'userId'>) => {
      return createPost(formData);
    },
    onSuccess: (data) => {
      toast.success('Success')
      formik.setSubmitting(false)
      setOpen(false)
    },
    onError: (error) => {
      toast.error('Error Occured')
    }
  })

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    validationSchema,
    onSubmit: (values) => {
      mutate(values)
      console.log(values);
      // Handle form submission
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="flex justify-between ">
          <p>Create</p>
          <Plus className="stroke-pryColor" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={formik.handleSubmit}>
          <DialogHeader className="mb-5">
            <DialogTitle className="text-xl">
              Create post
            </DialogTitle>
            {/* <strong className="mt-3 text-sm font-medium underline">
              UserId: {data.userId}
            </strong> */}
          </DialogHeader>
          <div className="grid gap-5">
            <div className=" ">
              <Label htmlFor="title" title="Title">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
              ) : null}
            </div>
            <div>
              <Label htmlFor="body">Body</Label>
              <Textarea
                id="body"
                name="body"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.body}
                rows={10}
              />
              {formik.touched.body && formik.errors.body ? (
                <div>{formik.errors.body}</div>
              ) : null}
            </div>
          </div>
          <DialogFooter className=" mt-5">
            <Button type="button" onClick={formik.submitForm} disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}