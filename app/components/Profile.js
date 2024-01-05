
'use client'
import React, { useState } from 'react'
import { signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  
  import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';
export default function Profile({session}) {
    const router = useRouter()
    const initialValues = {
        name: "",
        email: "",
      
      }

  
 

      const [values, setValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    }
  return (
    <Dialog>
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Avatar>
<AvatarImage src="https://github.com/shadcn.png" />
<AvatarFallback>CN</AvatarFallback>
</Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Mitt Konto</DropdownMenuLabel>
      <DropdownMenuSeparator />
        <DropdownMenuItem>
  <DialogTrigger>Ändra uppgifter</DialogTrigger>
  </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/posts')}>
Lägg till nyhet      </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem  onClick={(() => signOut())}>
        Logga ut      
              </DropdownMenuItem>
   
    </DropdownMenuContent>
  </DropdownMenu>
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
     <Input id="name" name="name" value={values.name} placeHolder={session?.user?.name} onChange={(e) => handleChange(e)} className="col-span-3" />
   </div>
   <div className="grid grid-cols-4 items-center gap-4">
     <Label htmlFor="username" className="text-right">
       Username
     </Label>
     <Input id="username" name="email" value={values.email} placeHolder={session?.user?.email} onChange={(e) => handleChange(e)} className="col-span-3" />
   </div>
 </div>
 <DialogFooter>
   <Button type="submit">Save changes</Button>
 </DialogFooter>
</DialogContent>
  </Dialog>
  )
}
