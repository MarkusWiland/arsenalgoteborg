'use client'
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { deletePost } from "../lib/action"
import DialogButton from "./Dialog"

export  function LogOut() {
return (
    <Button type="submit" onClick={() => signIn("github")}>Logga in</Button>
)

}

export function DeleteButton({postId}) {
    const handleDelete = async () => {
        try {
          await deletePost(postId); // Anropa deletePost-funktionen med postId
          // Uppdatera din UI eller lista med inlägg efter borttagning av posten
        } catch (error) {
          console.error('Error deleting post:', error);
          // Hantera eventuella fel här
        }
      };
    return (
<Button onClick={handleDelete}>X</Button>    )
    
    }

    export function EditButton() {
   
      return (
  <Button>Edit</Button>    )
      
      }

      export function AddGameDay({post}) {
   
        return (
          <DialogButton post={post}>

    <Button>Lägg till speldag</Button>    
          </DialogButton>)
        
        }