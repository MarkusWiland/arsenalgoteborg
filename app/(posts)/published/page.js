import { getPublishedPosts, getUnPublishedPosts } from '@/app/lib/action';
import React from 'react'

export default async function PublishedPosts() {
    const publishedPosts = await getPublishedPosts();
    const unPublishedPosts = await getUnPublishedPosts();
    const handlePublishClick = async (postId) => {
        try {
          const updatedPosts = unPublishedPosts.map((post) =>
            post.id === postId ? { ...post, published: true } : post
          );
          return updatedPosts;
        } catch (error) {
          console.error("Error updating post status:", error);
        }
      };

  return (
    <div className="mt-40 flex gap-8">
        <div>
            <h1>Published Posts</h1>
            {publishedPosts.map((post) => (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    
                </div>
            ))}
        </div>
        <div>
            <h1>UnPublished Posts</h1>
            {unPublishedPosts.map((post) => (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
               
                </div>
            ))}
        </div>
    </div>
  )
}
