/**
 * Shares product information via WhatsApp
 * @param {Object} product - The product information
 * @param {string} product.name - Product name
 * @param {number} product.price - Product price
 * @param {string} product.image - Product image URL
 * @param {string} product._id - Product ID
 */
export const shareToWhatsApp = (product) => {
  const phoneNumber = "+918589868486";

  // Format price with commas (Indian locale)
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(product.price);

  const message = `Hello! I'm interested in purchasing:\n\n*${product.name.trim()}*\nPrice: ${formattedPrice}\nProduct ID: ${product._id}\nImage: ${product.image}\n\nPlease provide me with payment and delivery details.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
};
