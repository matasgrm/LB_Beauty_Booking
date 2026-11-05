// LILY BETHAN BEAUTY — EDIT THIS FILE TO PERSONALISE THE BOOKING WEBSITE.
window.BEAUTY_CONFIG = {
  businessName: 'Lily Bethan Beauty',
  instagramHandle: '', // e.g. lilybethanbeauty (without @)
  email: '',           // e.g. hello@example.com
  whatsappNumber: '', // UK format, no + or spaces, e.g. 447700900123
  bookingProviderUrl: '', // OPTIONAL: Square / Fresha / Booksy link for REAL-TIME confirmed bookings
  location: 'Leamington Spa, Warwickshire',
  address: '',         // Optional studio address
  logoPath: '',        // Optional: e.g. 'logo.png' uploaded alongside index.html
  currency: 'GBP',
  services: [
    { id: 'biab', category: 'Nails', name: 'BIAB Nails', duration: 60, price: null, description: 'Builder gel manicure for beautiful, strong-looking natural nails.' },
    { id: 'gel', category: 'Nails', name: 'Gel Manicure', duration: 45, price: null, description: 'Long-lasting colour and a beautifully finished manicure.' },
    { id: 'nailart', category: 'Nails', name: 'Nail Art', duration: 30, price: null, description: 'Personalised nail details. Add this to your nail appointment.' },
    { id: 'lvl', category: 'Lashes', name: 'LVL Lash Lift', duration: 60, price: null, description: 'Lift and enhance the appearance of your natural lashes.' },
    { id: 'microneedling', category: 'Skin', name: 'Microneedling', duration: 60, price: null, description: 'A skin treatment requiring a consultation and suitability check.' }
  ],
  openingHours: 'Appointments by arrangement',
  cancellationPolicy: 'Appointment requests are not confirmed until you receive a personal confirmation. Cancellation and deposit terms will be provided when confirming your booking.',
  privacyNote: 'Details you enter are used only to prepare your booking enquiry. This static website does not save your personal information to a database.'
};
