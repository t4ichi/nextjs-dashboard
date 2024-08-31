/** @type {import('next').NextConfig} */

export const experimental_ppr = true;
const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
