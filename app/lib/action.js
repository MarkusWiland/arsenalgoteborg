"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import prisma from "../utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

    export async function postData(formData) {
        const session = await getServerSession(authOptions);
        const title = formData.get("title");
        const body = formData.get("body");
       

        try {
            await prisma.post.create({
              data: {
                title: title,
                body: body,
                author: {
                  connect: {
                    email: session?.user?.email, 
                  },
                },
              },
            });
            redirect("/posts")
            
          } catch (error) {
            console.error("Error creating post:", error);
            throw error;
          }
          
    }


    export async function getPosts() {
        try {
          const posts = await prisma.post.findMany();
      
          return posts;
        } catch (error) {
          console.error("Error fetching published posts:", error);
          throw error;
        }
      }
    export async function getPublishedPosts() {
        try {
          const publishedPosts = await prisma.post.findMany({
            where: {
              published: true,
            },
          });
      
          // Return the array of published posts
          return publishedPosts;
        } catch (error) {
          // Handle errors
          console.error("Error fetching published posts:", error);
          throw error;
        }
      }

      export async function getUnPublishedPosts() {
        try {
          const publishedPosts = await prisma.post.findMany({
            where: {
              published: false,
            },
          });
      
          return publishedPosts;
        } catch (error) {
          console.error("Error fetching published posts:", error);
          throw error;
        }
      }
      
      export async function deletePost(postId) {
        try {
          await prisma.post.delete({
            where: {
              id: postId,
            },
          });
          revalidatePath("/posts");
        } catch (error) {
          console.error('Error deleting post:', error);
          throw error;
        }
      }