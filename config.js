// LB BEAUTY — EDIT THIS FILE TO PERSONALISE THE BOOKING WEBSITE.
window.BEAUTY_CONFIG = {
  businessName: 'LB Beauty',
  instagramHandle: 'lily.b.beauty', // e.g. lilybethanbeauty (without @)
  email: 'matas2f@yahoo.co.uk',           // e.g. hello@example.com
  whatsappNumber: '', // UK format, no + or spaces, e.g. 447700900123
  bookingProviderUrl: '', // OPTIONAL: Square / Fresha / Booksy link for REAL-TIME confirmed bookings
  location: 'Leamington Spa, Warwickshire',
  address: '',         // Optional studio address
  logoPath: 'assets/lb-beauty-logo.png',        // Optional: e.g. 'logo.png' uploaded alongside index.html
  currency: 'GBP',
  services: [
    { id: 'nails', category: 'Nails', name: 'Nail Appointment', duration: 60, price: 35, description: 'Beautifully finished nails, personalised to your style.' },
    { id: 'lvl', category: 'Lashes', name: 'LVL Lashes', duration: 60, price: 60, description: 'A natural-looking lift and enhancement for your lashes.' },
    { id: 'microneedling', category: 'Skin', name: 'Microneedling', duration: 60, price: 80, description: 'Per-session skin treatment, subject to consultation and suitability.' }
  ],
  // Paste three PUBLIC Instagram post/reel URLs here to show real work at the bottom.
  // Instagram does not allow GitHub Pages to automatically fetch the latest three posts.
  instagramPosts: ['', '', ''],
  openingHours: 'Appointments by arrangement',
  cancellationPolicy: 'Appointment requests are not confirmed until you receive a personal confirmation. Cancellation and deposit terms will be provided when confirming your booking.',
  privacyNote: 'Details you enter are used only to prepare your booking enquiry. This static website does not save your personal information to a database.'
};
