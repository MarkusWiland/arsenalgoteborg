
'use client'
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { editPost } from '@/app/lib/action';

export default function DialogButton({ children, post }) {
  
  const [formData, setFormData] = useState(post[0]);
    console.log("formData", formData)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await saveSpelSchema(formData.id, formData); // Anropa editPost-funktionen med postens ID och det redigerade innehållet
 
    } catch (error) {
      console.error('Error editing post:', error);
      // Hantera eventuella fel här
    }
  };

  return (
    <>
    <Dialog>
        <DialogTrigger>
         {children}
        </DialogTrigger>
        {post && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to the profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {Object.keys(formData).map((key) => (
                <div className="grid grid-cols-4 items-center gap-4" key={key}>
                  <Label htmlFor={key} className="text-right">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Label>
                  <Input
                    id={key}
                    name={key}
                    disabled={key === 'id' || key === 'createdAt' || key === 'updatedAt' }
                    placeholder={key}
                  
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              ))}
              <div>
                <Textarea
                  name="message"
                  placeholder="Type your message here."
                  value={formData.body}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSave}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
