/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  distDir: isGitHubActions ? 'out' : '.next',
  trailingSlash: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  // Enable static export for GitHub Actions
  output: isGitHubActions ? 'export' : undefined,
};

// Uncomment the lines below for local development with Next.js
// nextConfig.distDir = '.next';

export default nextConfig;


