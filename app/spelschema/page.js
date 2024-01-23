import React from 'react'
import { getSpelSchema } from '../lib/action';
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
    import ArsenalIcon from '@/app/utils/svgIcons';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import { AddGameDay } from '../components/Buttons';
export default async function Spelschema() {
    const session = await getServerSession(authOptions);
    const spelschema = await getSpelSchema();
    
  return (
    <div className="mt-40">
        <div className="flex justify-between items-center"><h1>Spelschema</h1>
        <div><AddGameDay post={spelschema}/></div></div>
        <Table>
      
      <TableHeader>
        <TableRow>
       
          <TableHead>Hemmalag</TableHead>
          <TableHead>Bortalag</TableHead>
          <TableHead>Tid</TableHead>
          <TableHead>Kanal</TableHead>
          <TableHead >Resultat</TableHead>
          <TableHead className="text-right">Podcast</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {spelschema.map((spelschema) => (

             <TableRow>
             <TableCell><div className="flex gap-2">
            {spelschema?.homeTeam}</div></TableCell>
             <TableCell ><div className="flex gap-2">
             {spelschema?.awayIcon} {spelschema?.awayTeam}</div></TableCell>
             <TableCell >{spelschema?.gameDate.toLocaleString("sv-SE")}</TableCell>
             <TableCell >{spelschema?.channel}</TableCell>
             <TableCell >{spelschema?.win ? <div className="text-green-500">{spelschema?.result}</div> : <div className="text-red-500">{spelschema?.result}</div>}</TableCell>
           <TableCell>{session ? <Button>Edit</Button> : null}</TableCell>
           </TableRow>
        ))
        }
      
      </TableBody>
 
    </Table>
      
    </div>
  )
}
