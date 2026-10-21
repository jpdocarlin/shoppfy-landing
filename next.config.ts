import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Subdomínios de afiliado: shop.shoppfy.site mostra a página de vendas com
  // os links de checkout do afiliado 1ayti1x (entrada "shop") (ver src/lib/affiliates.ts).
  async rewrites() {
    // beforeFiles: senão a página "/" (que existe) é servida antes do rewrite.
    return {
      beforeFiles: [
      {
        source: "/",
        has: [{ type: "host", value: "shop.shoppfy.site" }],
        destination: "/shop",
      },
      ],
    };
  },
};

export default nextConfig;
