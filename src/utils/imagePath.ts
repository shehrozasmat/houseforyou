export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Check if we're in production environment
  // For GitHub Pages, we always need the /houseforyou prefix in production
  const isProduction = import.meta.env.PROD || import.meta.env.MODE === 'production' || !import.meta.env.DEV;
  const basePath = isProduction ? '/houseforyou' : '';
  
  return `${basePath}/${cleanPath}`;
};