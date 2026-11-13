// Páginas de afiliado: shoppfy.site/<slug> mostra a mesma página de vendas,
// só que os botões de compra levam pro link de afiliado (code=...) da pessoa.
// Pra adicionar um afiliado novo: uma entrada aqui e pronto.
export type CheckoutLinks = { monthly: string; lifetime: string };

export const DEFAULT_CHECKOUT: CheckoutLinks = {
  monthly: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=wrtzxwu",
  lifetime: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=qlfvx7s",
};

export const AFFILIATES: Record<string, CheckoutLinks> = {
  online: {
    monthly:
      "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?code=1kt9m1r&offer=wrtzxwu",
    lifetime:
      "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?code=1kt9m1r&offer=qlfvx7s",
  },
  store: {
    monthly:
      "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?code=4uwti8a&offer=wrtzxwu",
    lifetime:
      "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?code=4uwti8a&offer=qlfvx7s",
  },
  // shoppfy.site/shop e shop.shoppfy.site (rewrite em next.config.ts).
  shop: {
    monthly:
      "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?code=1ayti1x&offer=wrtzxwu",
    lifetime:
      "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?code=1ayti1x&offer=qlfvx7s",
  },
  // shoppfy.site/meta: leads dos anúncios da Meta (Campanha 1, nov/2026). Sem afiliado;
  // a UTM chega no webhook da Applyfy (trackProps) e separa essas vendas das da live.
  meta: {
    monthly:
      "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=wrtzxwu&utm_source=meta&utm_medium=whatsapp&utm_campaign=c1-shopee-nov26",
    lifetime:
      "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=qlfvx7s&utm_source=meta&utm_medium=whatsapp&utm_campaign=c1-shopee-nov26",
  },
  // shoppfy.site/tiktok: leads dos anuncios do TikTok (Teste 1, nov/2026). Sem afiliado; a UTM separa essas vendas.
  tiktok: { monthly: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=wrtzxwu&utm_source=tiktok&utm_medium=whatsapp&utm_campaign=teste1-shopee-nov26", lifetime: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=qlfvx7s&utm_source=tiktok&utm_medium=whatsapp&utm_campaign=teste1-shopee-nov26" },
  // shoppfy.site/meta-fb2, /meta-g2 e /meta-g3: um link por anuncio da Meta (nov/2026). utm_content diz qual video vendeu.
  "meta-fb2": { monthly: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=wrtzxwu&utm_source=meta&utm_medium=whatsapp&utm_campaign=c1-shopee-nov26&utm_content=fb2", lifetime: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=qlfvx7s&utm_source=meta&utm_medium=whatsapp&utm_campaign=c1-shopee-nov26&utm_content=fb2" },
  "meta-g2": { monthly: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=wrtzxwu&utm_source=meta&utm_medium=whatsapp&utm_campaign=c1-shopee-nov26&utm_content=g2", lifetime: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=qlfvx7s&utm_source=meta&utm_medium=whatsapp&utm_campaign=c1-shopee-nov26&utm_content=g2" },
  "meta-g3": { monthly: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=wrtzxwu&utm_source=meta&utm_medium=whatsapp&utm_campaign=c1-shopee-nov26&utm_content=g3", lifetime: "https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=qlfvx7s&utm_source=meta&utm_medium=whatsapp&utm_campaign=c1-shopee-nov26&utm_content=g3" },
};
