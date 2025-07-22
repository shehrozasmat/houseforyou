export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // In development, use the path as is (assuming images are in the public directory)
  // In production (GitHub Pages), prepend the base path
  const basePath = import.meta.env.DEV ? '' : '/houseforyou';
  
  return `${basePath}/${cleanPath}`;
};