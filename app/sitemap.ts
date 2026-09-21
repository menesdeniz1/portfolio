const SITE_URL = 'https://menesdeniz.com';

export default async function sitemap() {
  const routes = [''].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString()
  }));

  return [...routes];
}
