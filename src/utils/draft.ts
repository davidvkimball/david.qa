import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get all posts, filtering out posts whose filenames start with _ unless in dev environment
 */
export async function getFilteredPosts() {
  const posts = await getCollection('posts');
  return posts.filter((post: CollectionEntry<'posts'>) => {
    const isDraft = post.id.startsWith('_');
    return !isDraft || (isDraft && import.meta.env.DEV); // Include drafts only in dev
  });
}

/**
 * Get all posts sorted by publication date, filtering out posts whose filenames start with _ unless in dev environment
 */
export async function getSortedFilteredPosts() {
  const posts = await getFilteredPosts();
  return posts.sort((a, b) => {
    // Handle null or undefined pubDate by falling back to 0 (earliest date)
    const aDate = a.data.pubDate ? a.data.pubDate.getTime() : 0;
    const bDate = b.data.pubDate ? b.data.pubDate.getTime() : 0;
    return bDate - aDate; // Sort descending
  });
}