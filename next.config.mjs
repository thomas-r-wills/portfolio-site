/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  distDir: isGitHubActions ? 'out' : '.next',
  trailingSlash: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  basePath: isGitHubActions ? '/portfolio-site' : '', // Set basePath for GitHub Pages
  assetPrefix: isGitHubActions ? '/portfolio-site/' : '', // Set assetPrefix for static files
  output: isGitHubActions ? 'export' : undefined, // Enable static export for GitHub Actions
};

export default nextConfig;
