// WhatsApp utility for "Llamar ahora" functionality
export const WHATSAPP_CONFIG = {
  phoneNumber: '+34624164536', // Updated phone number
  defaultMessage: 'Hola, necesito información sobre sus servicios legales',
};

/**
 * Generates a WhatsApp link with the configured phone number and optional message
 * @param message - Optional custom message (uses default if not provided)
 * @returns WhatsApp URL
 */
export const generateWhatsAppLink = (message?: string): string => {
  const finalMessage = message || WHATSAPP_CONFIG.defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  const encodedPhone = WHATSAPP_CONFIG.phoneNumber.replace(/[^\d+]/g, '');
  
  return `https://wa.me/${encodedPhone}?text=${encodedMessage}`;
};

/**
 * Opens WhatsApp with the configured phone number and optional message
 * @param message - Optional custom message
 */
export const openWhatsApp = (message?: string): void => {
  const whatsappUrl = generateWhatsAppLink(message);
  window.open(whatsappUrl, '_blank');
};
