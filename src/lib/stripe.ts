const PAYMENT_LINKS = {
  training: 'https://buy.stripe.com/8wMdRo3lE3fi3yE4go',
  guide: 'https://buy.stripe.com/8wM7t07BU3fi9X29AH',
  support: 'https://buy.stripe.com/eVa14C7BU8zCfhm5ku',
  'website-deposit': 'https://buy.stripe.com/aEU5kS2hA7vy8SY28l',
  'mobile-app-deposit': 'https://buy.stripe.com/6oEcNk5tM3fi0ms3co'
};

export function redirectToPayment(products: string[]) {
  if (products.length === 0) return;
  
  const product = products[0];
  const paymentLink = PAYMENT_LINKS[product as keyof typeof PAYMENT_LINKS];
  
  if (paymentLink) {
    window.location.href = paymentLink;
  }
}