"use client"

import { postData } from "../lib/action";

export default function Form() {
    return (
        <form action={async (formData) => {
            await postData(formData);
        }}>
 <div>
    <input type="text" name="title" />
        <textarea type="text" name="body" />
    
    <button type="submit">Skicka</button>
 </div>
        </form>
    )
}