import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Subdomínios de afiliado: shop.shoppfy.site mostra a página de vendas com
  // os links de checkout do afiliado 1ayti1x (entrada "shop") (ver src/lib/affiliates.ts).
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "shop.shoppfy.site" }],
        destination: "/shop",
      },
    ];
  },
};

export default nextConfig;
