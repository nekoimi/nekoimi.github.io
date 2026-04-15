export default function getPostSlug(id: string) {
  return id.replace(/\.md$/, '');
}
