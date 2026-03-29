import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Add your custom playwright configuration overrides here
  timeout: 60000,
  use: {
    baseURL: 'http://localhost:8080',
  },
});

// WhatsApp configuration for "Llamar ahora" functionality
// Phone number: +34XXXXXXXXX (Replace with actual phone number)
// Default message: "Hola, necesito información sobre sus servicios legales"
// WhatsApp link format: https://wa.me/phoneNumber?text=message
