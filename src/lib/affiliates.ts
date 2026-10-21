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
      "https://checkout.applyfy.com.br/checkout/cmow2y5if02ce1ylqgwa5pmo7?code=rb0ks0z&offer=1MVF1H1",
    lifetime:
      "https://checkout.applyfy.com.br/checkout/cmow2y5if02ce1ylqgwa5pmo7?code=rb0ks0z&offer=2TF00TB",
  },
};
