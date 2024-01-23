"use client"

import { Input } from "@/components/ui/input";
import { postData } from "../../../lib/action";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FormAddPost() {
    return (
        <form action={async (formData) => {
            await postData(formData);
        }}>
 <div className="flex flex-col gap-2">
    <Input type="text" name="title" placeHolder="Titel"/>
    <Input type="text" name="title" placeHolder="Titel"/>
        <Textarea type="text" name="body" placeHolder="Meddelande..."/>
    
    <Button type="submit">Skicka</Button>
 </div>
        </form>
    )
}