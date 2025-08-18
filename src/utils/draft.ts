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
  return [...posts].sort((a, b) => {
    // Primary sort by date (descending)
    const aDate = a.data.date ? a.data.date.getTime() : 0;
    const bDate = b.data.date ? b.data.date.getTime() : 0;
    if (aDate !== bDate) return bDate - aDate; // Sort by date if different

    // Secondary sort by id (ascending) to preserve stability
    return a.id.localeCompare(b.id);
  });
}