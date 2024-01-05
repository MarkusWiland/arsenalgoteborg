"use client"

import { postData } from "../../../lib/action";

export default function FormAddPost() {
    return (
        <form action={async (formData) => {
            await postData(formData);
        }}>
 <div className="flex flex-col gap-2">
    <input type="text" name="title" />
        <textarea type="text" name="body" />
    
    <button type="submit">Skicka</button>
 </div>
        </form>
    )
}