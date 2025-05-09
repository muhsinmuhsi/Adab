/**
 * Shares product information via WhatsApp
 * @param {Object} product - The product information
 * @param {string} product.name - Product name
 * @param {number} product.price - Product price
 * @param {string} product.image - Product image URL
 * @param {string} product._id - Product ID
 */
export const shareToWhatsApp = (product) => {
    // Phone number (replace with your business WhatsApp number)
    const phoneNumber = "1234567890"; 
    
    // Create message
    const message = `Hello! I'm interested in purchasing:\n\n*${product.name}*\nPrice: $${product.price.toFixed(2)}\nProduct ID: ${product._id}\n\nPlease provide me with payment and delivery details.`;
    
    // Encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
  };