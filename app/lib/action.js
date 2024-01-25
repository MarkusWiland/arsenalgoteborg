"use server"
import { format, subDays } from 'date-fns';
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
          const posts = await prisma.post.findMany({
            orderBy: {
              createdAt: 'desc',
            },
          });
      
          return posts;
        } catch (error) {
          console.error("Error fetching published posts:", error);
          throw error;
        }
      }
      export async function getSpelSchema() {
        try {
          const spelschemas = await prisma.spelschema.findMany();
      
          return spelschemas;
        } catch (error) {
          console.error("Error fetching published spelschema:", error);
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
      export async function editPost(postId, formData) {

        try {
          // Uppdatera inläggets body med det nya värdet
          await prisma.post.update({
            where: {
              id: postId,
            },
            data: {
              name: formData.name,
              email: formData.email,
              body: formData.body,
            },
          });
          revalidatePath("/posts");
          } catch (error) {
          console.error('Error editing post:', error);
          // Hantera eventuella fel här
        }
      };

      export async function getNearestPastSpelSchema() {
        try {
          const currentDate = new Date(); // Dagens datum och tid
          const formattedCurrentDate = format(currentDate, 'yyyy-MM-dd'); // Formatera dagens datum
      
          const nearestSchema = await prisma.spelschema.findFirst({
            where: {
              gameDate: {
                lte: currentDate, // Hitta datum som är mindre än eller lika med dagens datum
              },
            },
            orderBy: {
              gameDate: 'desc', // Sortera i fallande ordning (senaste först)
            },
          });
      
          if (nearestSchema) {
            // Det närmaste datumet bakåt har hittats
            console.log(`Närmaste datumet bakåt är ${nearestSchema.gameDate}`);
            return nearestSchema;
          } else {
            // Ingen matchande datum hittades
            console.log('Ingen matchande datum hittades');
            return null;
          }
        } catch (error) {
          console.error("Error fetching nearest past spelschema:", error);
          throw error;
        } finally {
          await prisma.$disconnect(); // Stäng anslutningen när du är klar
        }
      }
