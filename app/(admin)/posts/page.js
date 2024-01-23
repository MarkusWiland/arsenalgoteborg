
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

import { DeleteButton } from '@/app/components/Buttons';
import EditPostButton from './components/EditPostButton';
export default async function Posts() {
  const posts = await getPosts();

  return (
   
    <Table className="mt-40">
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Title</TableHead>
        <TableHead>Author</TableHead>
        <TableHead>Body</TableHead>
        <TableHead>Created</TableHead>
        <TableHead>Updated</TableHead>
        <TableHead className="">Email</TableHead>
        
        <TableHead className="text-right"></TableHead>
      </TableRow>
    </TableHeader>
 
    <TableBody>
    
      {posts.map((invoice) => (
      
        <TableRow key={invoice.invoice}>
          <TableCell className="font-medium">{invoice.title}</TableCell>
          <TableCell>{invoice.body}</TableCell>
          <TableCell>{invoice.createdAt.toLocaleString()}</TableCell>
          <TableCell>{invoice.updatedAt.toLocaleString()}</TableCell>
          <TableCell>{invoice.email}</TableCell>
          <TableCell className="">{invoice.id}</TableCell>
         
        
            <TableCell className="flex space-x-2 text-center z-40">
              
              <EditPostButton post={invoice} />
              <DeleteButton postId={invoice.id}/>
              
              </TableCell>
        </TableRow>
      ))}
    </TableBody>
       
    <TableFooter>
      <TableRow>
        <TableCell colSpan={4}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
   
  
  )
}
