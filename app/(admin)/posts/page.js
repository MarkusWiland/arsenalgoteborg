import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import { getPosts } from '@/app/lib/action';
  import { Button } from "@/components/ui/button"
  import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from "@/components/ui/dialog"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
import { DeleteButton } from '@/app/components/Buttons';
export default async function Posts() {
    const posts = await getPosts();
  return (
    <Dialog>
    <Table className="mt-40">
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
    <DialogTrigger>

      <TableRow>
        
        <TableHead className="w-[100px]">Title</TableHead>
        <TableHead>Author</TableHead>
        <TableHead>Body</TableHead>
        <TableHead className="">Email</TableHead>
        <TableHead className="text-center">Delete</TableHead>
      </TableRow>
      </DialogTrigger>

    </TableHeader>
    <TableBody>
      {posts.map((invoice) => (
          <DialogTrigger>

        <TableRow key={invoice.invoice}>
          <TableCell className="font-medium">{invoice.title}</TableCell>
          <TableCell>{invoice.body}</TableCell>
          <TableCell>{invoice.email}</TableCell>
          <TableCell className="">{invoice.id}</TableCell>
            <TableCell className="text-center z-40"><DeleteButton postId={invoice.id}/></TableCell>
        </TableRow>
        </DialogTrigger>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={4}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
    <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
            Name
            </Label>
            <Input id="name" name="name" placeHolder="John Doe" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
            Email
            </Label>
            <Input id="email" name="email" placeHolder="
            asd" className="col-span-3" />
            </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
   </DialogContent>
   </Dialog>
  )
}
