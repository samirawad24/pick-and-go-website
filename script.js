/* =====================================================
   Pick & Go Rent A Car — script.js (landing page)
   Language toggle · Hamburger nav · Form → WhatsApp
   ===================================================== */

const WHATSAPP_NUMBER = '17542653882';

/* ---------- Fleet modal data ---------- */
const FLEET_DATA = {
  sedan: {
    en: { title: 'Compact / Sedan', avail: '1 vehicle available' },
    es: { title: 'Compacto / Sedán', avail: '1 vehículo disponible' },
    cars: [
      {
        name: 'Kia Forte',
        seats: 5,
        photo: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=700&q=85&auto=format&fit=crop',
        alt:   'Kia Forte — white compact sedan'
      }
    ]
  },
  suv: {
    en: { title: 'SUVs', avail: '4 vehicles available' },
    es: { title: 'SUVs', avail: '4 vehículos disponibles' },
    cars: [
      {
        name:  'Toyota RAV4',
        seats: 5,
        photo: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=700&q=85&auto=format&fit=crop',
        alt:   'Toyota RAV4 — silver compact SUV'
      },
      {
        name:  'Volkswagen Tiguan',
        seats: 5,
        photo: 'https://images.unsplash.com/photo-1507992963357-6285e8e6248b?w=700&q=85&auto=format&fit=crop',
        alt:   'Volkswagen Tiguan — white compact SUV'
      },
      {
        name:  'Volkswagen Tiguan — Navy',
        seats: 5,
        photo: 'https://images.unsplash.com/photo-1760713173223-59ef015ad368?w=700&q=85&auto=format&fit=crop',
        alt:   'Volkswagen Tiguan — navy blue compact SUV'
      }
    ]
  },
  minivan: {
    en: { title: 'XL Vehicles', avail: '3 vehicles available' },
    es: { title: 'Vehículos XL', avail: '3 vehículos disponibles' },
    cars: [
      {
        name:  'Honda Odyssey',
        seats: 8,
        photo: 'https://images.unsplash.com/photo-1737488247093-f4484eac67ae?w=700&q=85&auto=format&fit=crop',
        alt:   'Honda Odyssey — minivan'
      },
      {
        name:  'Toyota Sienna',
        seats: 8,
        photo: 'https://images.unsplash.com/photo-1648902180388-e52c0fdebcd4?w=700&q=85&auto=format&fit=crop',
        alt:   'Toyota Sienna — minivan'
      },
      {
        name:  'Chrysler Pacifica',
        seats: 8,
        photo: 'https://images.unsplash.com/photo-1623371857133-6d5552bbdc13?w=700&q=85&auto=format&fit=crop',
        alt:   'Chrysler Pacifica — silver family minivan'
      }
    ]
  },
  luxury: {
    en: { title: 'Luxury', avail: '2 vehicles available' },
    es: { title: 'Lujo', avail: '2 vehículos disponibles' },
    cars: [
      {
        name:  'Cadillac Escalade',
        seats: 8,
        photo: 'https://images.unsplash.com/photo-1683778547049-8d969766b441?w=700&q=85&auto=format&fit=crop',
        alt:   'Cadillac Escalade — black full-size luxury SUV'
      },
      {
        name:  'Chevrolet Suburban',
        seats: 8,
        photo: 'https://images.unsplash.com/photo-1769787301187-0fab290ba2f2?w=700&q=85&auto=format&fit=crop',
        alt:   'Chevrolet Suburban — black full-size SUV'
      }
    ]
  }
};

/* ---------- Translations ---------- */
const I18N = {
  en: {
    'nav.reserve':  'Reserve',
    'nav.fleet':    'Fleet',
    'nav.reviews':  'Reviews',
    'nav.why':      'Why Us',
    'nav.faq':      'FAQ',
    'nav.whatsapp': 'WhatsApp',

    'hero.eyebrow':  'South Florida · MIA & FLL · Ports · Hotel Delivery',
    'hero.title':    'Pick a car.<br/>Go anywhere.',
    'hero.subtitle': 'Premium rental cars in Miami & Fort Lauderdale. Reserve in 60 seconds. Instant reply via WhatsApp.',
    'hero.ctaWa':    'Chat on WhatsApp',
    'hero.ctaForm':  'Get a Quote →',

    'trust.rating':    '5-star rated · 100+ happy renters',
    'trust.fees':      'No hidden fees',
    'trust.service':   'Available 24/7',
    'trust.insurance': 'Insurance included',

    'form.title':      'Reserve your car',
    'form.subtitle':   "Tell us where, when, and what you need. We'll reply on WhatsApp within minutes.",
    'form.pickupLoc':  'Pickup location',
    'form.returnLoc':  'Return location',
    'form.locMIA':     'Miami International (MIA)',
    'form.locFLL':     'Fort Lauderdale (FLL)',
    'form.locPortMia': 'Port of Miami',
    'form.locPortFll': 'Port of Fort Lauderdale',
    'form.locHotel':   'Hotel / Residence',
    'form.vehicle':    'Vehicle type',
    'form.choose':     'Choose…',
    'form.catSedan':   'Compact / Sedan',
    'form.catSUV':     'SUV',
    'form.catMinivan': 'XL Vehicle (up to 8 seats)',
    'form.catLuxury':  'Luxury (Escalade / Suburban)',
    'form.catAny':     'No preference — recommend one',
    'form.pickupDate': 'Pickup date',
    'form.returnDate': 'Return date',
    'form.pickupTime': 'Pickup time',
    'form.name':       'Full name',
    'form.phone':      'Phone',
    'form.email':      'Email',
    'form.notes':      'Anything else?',
    'form.optional':   '(optional)',
    'form.submit':     'Get My Quote',
    'form.note':       'No commitment · Instant reply via WhatsApp',
    'form.skipWa':     'Prefer to chat directly? Message us on WhatsApp →',
    'form.trustLine':  '5.0 on Google · Usually replies in under 5 minutes',

    'fleet.title':        'Our Fleet',
    'fleet.subtitle':     'Pick the size that fits your trip.',
    'fleet.sedan.name':   'Compact / Sedan',
    'fleet.sedan.desc':   'Ideal for solo travelers and city driving. Fuel-efficient, easy to park, and comfortable.',
    'fleet.suv.name':     'SUV',
    'fleet.suv.desc':     'Spacious, comfortable, and versatile. Built for families, groups, and every kind of Florida adventure.',
    'fleet.minivan.name':  'XL Vehicles',
    'fleet.minivan.desc':  'Spacious minivans perfect for large families, group travel, and everything in between. All seat up to 8 passengers with plenty of room for luggage.',
    'fleet.luxury.name':   'Luxury',
    'fleet.luxury.desc':   'Travel in style. Our premium full-size SUVs are perfect for VIP arrivals, special occasions, and groups who want the best.',
    'fleet.cta':           'View Available Cars',
    'fleet.popular':       'Most Popular',

    'reviews.title':    'What our customers say',
    'reviews.subtitle': 'Real experiences from real renters in South Florida.',
    'reviews.r1.text':  '"Outstanding service as usual, car is spotless, new and always on time and stress free."',
    'reviews.r1.name':  'Francesco P.',
    'reviews.r1.loc':   'Google Review',
    'reviews.r2.text':  '"I came for two weeks with my daughter and rented two cars — one for Miami and another for the round trip to Orlando. They were punctual with deliveries, always available, and sent clear instructions for pickup and drop-off at both the port and the airports. Excellent service. Highly recommend if you come to Miami!"',
    'reviews.r2.name':  'Erika Saavedra',
    'reviews.r2.loc':   'Google Review',
    'reviews.r3.text':  '"Very professional service and spotless, new cars! I rented a van for a week and everything was great. Customer service was top-notch from the moment I contacted them until the very end. 100% recommended!!"',
    'reviews.r3.name':  'Mariano Leon',
    'reviews.r3.loc':   'Google Review',
    'reviews.r4.text':  '"Excellent service!! They delivered the car to the Port of Miami exactly when I needed it. New and reliable vehicles!! Great service from the entire team."',
    'reviews.r4.name':  'Renato Mendoza',
    'reviews.r4.loc':   'Google Review',

    'why.label':   'Why Pick & Go',
    'why.heading': "Renting a car in South Florida shouldn't feel like a chore.",
    'why.body':    "We come to you, hand you the keys, and get out of your way. No counters, no wait rooms, no surprise charges at checkout.",
    'why.l1':      'Airport, seaport & hotel delivery',
    'why.l2':      'No hidden fees — ever',
    'why.l3':      'Reserve via WhatsApp in 60 seconds',
    'why.l4':      'Insurance included on every rental',
    'why.l5':      'Skip the rental counter completely',
    'why.l6':      'Every car detailed before pickup',
    'why.l7':      'Local team — we know South Florida',
    'why.l8':      'Available 7 days a week',

    'faq.title':    'Frequently Asked Questions',
    'faq.subtitle': 'Quick answers to common questions. Still curious? WhatsApp us anytime.',
    'faq.q1': 'What are the requirements to rent a car?',
    'faq.a1': "Driver must be 21 or older with a valid driver's license (any country, Latin alphabet) and a major credit card in their own name. We may request a refundable security deposit at pickup.",
    'faq.q2': 'Is insurance included?',
    'faq.a2': 'Yes, every rental comes with full collision and liability insurance.',
    'faq.q3': 'Where can I pick up the car?',
    'faq.a3': 'Miami International Airport (MIA), Fort Lauderdale Airport (FLL), Port of Miami, Port of Fort Lauderdale, or your hotel/residence. We meet you at arrivals — no shuttle, no walk, no wait.',
    'faq.q4': 'How do I pay?',
    'faq.a4': "We accept all major credit cards. The card must be in the primary driver's name. A refundable security deposit is held at pickup and released after the car is returned.",
    'faq.q5': 'Can I change my reservation?',
    'faq.a5': 'Yes — you can change your reservation to a different date at any time. The amount paid stays on your account as credit toward your rescheduled rental. Please note all reservations are non-refundable. Just let us know at least 2 days before your original pickup date and we will take care of it.',
    'faq.q6': "What's included in every rental quote?",
    'faq.a6': 'Everything — no surprises at pickup or checkout. Every quote includes: full collision & liability insurance; unlimited mileage within Florida; all toll fees covered (no SunPass needed); one additional registered driver at no extra charge; and airport, seaport & hotel delivery fees. The price in your quote is exactly what you pay. Period.',
    'faq.q7': 'What if my flight is delayed?',
    'faq.a7': "We track your flight. Whether you land early or late, we'll be there. No extra charge for flight delays.",
    'faq.q8': 'Do you offer long-term rentals?',
    'faq.a8': "Yes — weekly and monthly rates are available with a discount. Mention your dates in the inquiry form and we'll send a custom quote.",

    'footer.desc':   'Premium rental cars for South Florida travelers.',
    'footer.ready':  'Ready to ride?',
    'footer.contact':'Contact',
    'footer.rights': 'All rights reserved.',

    'mobile.cta':       'Chat on WhatsApp — Book Now',
    'mobile.ctaDrawer': 'Chat on WhatsApp: 754-265-3882',
  },

  es: {
    'nav.reserve':  'Reservar',
    'nav.fleet':    'Flota',
    'nav.reviews':  'Reseñas',
    'nav.why':      'Por qué nosotros',
    'nav.faq':      'Preguntas',
    'nav.whatsapp': 'WhatsApp',

    'hero.eyebrow':  'Sur de Florida · MIA & FLL · Puertos · Entrega en hotel',
    'hero.title':    'Elige tu auto.<br/>Conduce a donde quieras.',
    'hero.subtitle': 'Renta de autos premium en Miami y Fort Lauderdale. Reserva en 60 segundos. Respuesta inmediata por WhatsApp.',
    'hero.ctaWa':    'Chat por WhatsApp',
    'hero.ctaForm':  'Cotizar →',

    'trust.rating':    'Calificación 5 estrellas · 100+ clientes felices',
    'trust.fees':      'Sin cargos ocultos',
    'trust.service':   'Disponibles 24/7',
    'trust.insurance': 'Seguro incluido',

    'form.title':      'Reserva tu auto',
    'form.subtitle':   'Cuéntanos dónde, cuándo y qué necesitas. Te responderemos por WhatsApp en minutos.',
    'form.pickupLoc':  'Lugar de entrega',
    'form.returnLoc':  'Lugar de devolución',
    'form.locMIA':     'Aeropuerto de Miami (MIA)',
    'form.locFLL':     'Aeropuerto de Fort Lauderdale (FLL)',
    'form.locPortMia': 'Puerto de Miami',
    'form.locPortFll': 'Puerto de Fort Lauderdale',
    'form.locHotel':   'Hotel / Residencia',
    'form.vehicle':    'Tipo de vehículo',
    'form.choose':     'Elegir…',
    'form.catSedan':   'Compacto / Sedán',
    'form.catSUV':     'SUV',
    'form.catMinivan': 'Vehículo XL (hasta 8 asientos)',
    'form.catLuxury':  'Lujo (Escalade / Suburban)',
    'form.catAny':     'Sin preferencia — recoméndame uno',
    'form.pickupDate': 'Fecha de entrega',
    'form.returnDate': 'Fecha de devolución',
    'form.pickupTime': 'Hora de entrega',
    'form.name':       'Nombre completo',
    'form.phone':      'Teléfono',
    'form.email':      'Correo electrónico',
    'form.notes':      '¿Algo más?',
    'form.optional':   '(opcional)',
    'form.submit':     'Solicitar cotización',
    'form.note':       'Sin compromiso · Respuesta inmediata por WhatsApp',
    'form.skipWa':     '¿Prefieres hablar directo? Escríbenos por WhatsApp →',
    'form.trustLine':  '5.0 en Google · Respondemos en menos de 5 minutos',

    'fleet.title':        'Nuestra Flota',
    'fleet.subtitle':     'Elige el tamaño ideal para tu viaje.',
    'fleet.sedan.name':   'Compacto / Sedán',
    'fleet.sedan.desc':   'Ideal para viajeros solos y manejo en ciudad. Económico, fácil de estacionar y cómodo.',
    'fleet.suv.name':     'SUV',
    'fleet.suv.desc':     'Espacioso, cómodo y versátil. Ideal para familias, grupos y todo tipo de aventuras en Florida.',
    'fleet.minivan.name':  'Vehículos XL',
    'fleet.minivan.desc':  'Minivans espaciosas ideales para familias grandes y grupos. Todos con capacidad para hasta 8 pasajeros y espacio para el equipaje.',
    'fleet.luxury.name':   'Lujo',
    'fleet.luxury.desc':   'Viaja con estilo. Nuestras SUVs premium de gran tamaño son perfectas para llegadas VIP, ocasiones especiales y grupos que buscan lo mejor.',
    'fleet.cta':           'Ver autos disponibles',
    'fleet.popular':       'Más Popular',

    'reviews.title':    'Lo que dicen nuestros clientes',
    'reviews.subtitle': 'Experiencias reales de clientes en el Sur de Florida.',
    'reviews.r1.text':  '"Servicio excepcional como siempre, el auto impecable, nuevo y siempre puntual. Sin estrés."',
    'reviews.r1.name':  'Francesco P.',
    'reviews.r1.loc':   'Reseña de Google',
    'reviews.r2.text':  '"Vine por dos semanas con mi hija y renté dos autos, uno para los primeros días en Miami y otro para el viaje de ida y vuelta a Orlando. Fueron puntuales, siempre al pendiente y me enviaron indicaciones claras para recoger y dejar los autos en el puerto y los aeropuertos. Excelente servicio. Lo súper recomiendo si vienes a Miami!"',
    'reviews.r2.name':  'Erika Saavedra',
    'reviews.r2.loc':   'Reseña de Google',
    'reviews.r3.text':  '"Servicio muy profesional y autos impecables y nuevos! Alquilé una camioneta por una semana y todo estuvo perfecto. El trato del equipo de primera desde que tuve contacto con ellos hasta el final. Lo recomiendo 100%!!"',
    'reviews.r3.name':  'Mariano Leon',
    'reviews.r3.loc':   'Reseña de Google',
    'reviews.r4.text':  '"¡Excelente Servicio!! Esta vez me lo dejaron en el Puerto de Miami con los horarios que necesitaba. Vehículos nuevos y sobre todo confiables. Gran atención de todo su equipo."',
    'reviews.r4.name':  'Renato Mendoza',
    'reviews.r4.loc':   'Reseña de Google',

    'why.label':   'Por qué Pick & Go',
    'why.heading': 'Rentar un auto en el Sur de Florida no debería ser complicado.',
    'why.body':    'Vamos a donde estás, te entregamos las llaves y nos hacemos a un lado. Sin mostradores, sin salas de espera, sin cobros sorpresa al final.',
    'why.l1':      'Entrega en aeropuertos, puertos y hoteles',
    'why.l2':      'Sin cargos ocultos — nunca',
    'why.l3':      'Reserva por WhatsApp en 60 segundos',
    'why.l4':      'Seguro incluido en cada renta',
    'why.l5':      'Olvídate del mostrador de renta',
    'why.l6':      'Cada auto detallado antes de la entrega',
    'why.l7':      'Equipo local — conocemos el Sur de Florida',
    'why.l8':      'Disponibles los 7 días de la semana',

    'faq.title':    'Preguntas frecuentes',
    'faq.subtitle': '¿Tienes dudas? Aquí están las respuestas. Si aún tienes preguntas, escríbenos por WhatsApp.',
    'faq.q1': '¿Cuáles son los requisitos para rentar un auto?',
    'faq.a1': 'El conductor debe tener 21 años o más, una licencia de conducir vigente (cualquier país, alfabeto latino) y una tarjeta de crédito a su nombre. Podemos pedir un depósito reembolsable al momento de la entrega.',
    'faq.q2': '¿El seguro está incluido?',
    'faq.a2': 'Sí, cada renta incluye seguro completo de colisión y responsabilidad civil.',
    'faq.q3': '¿Dónde puedo recoger el auto?',
    'faq.a3': 'Aeropuerto de Miami (MIA), Aeropuerto de Fort Lauderdale (FLL), Puerto de Miami, Puerto de Fort Lauderdale o tu hotel/residencia. Te recibimos en llegadas — sin shuttle, sin caminar, sin esperar.',
    'faq.q4': '¿Cómo se paga?',
    'faq.a4': 'Aceptamos todas las tarjetas de crédito principales. La tarjeta debe estar a nombre del conductor principal. Se retiene un depósito reembolsable al momento de la entrega y se libera al devolver el auto.',
    'faq.q5': '¿Puedo cambiar mi reserva?',
    'faq.a5': 'Sí — puedes cambiar tu reserva a otra fecha en cualquier momento. El monto pagado queda como crédito para tu nueva fecha. Ten en cuenta que las reservas no son reembolsables. Solo avísanos con al menos 2 días de anticipación antes de tu fecha original de entrega y nos encargamos.',
    'faq.q6': '¿Qué incluye cada cotización?',
    'faq.a6': 'Todo — sin sorpresas al recoger o devolver el auto. Cada cotización incluye: seguro completo de colisión y responsabilidad civil; millaje ilimitado dentro de Florida; todos los peajes cubiertos (sin necesidad de SunPass); un conductor adicional registrado sin costo extra; y los cargos de entrega en aeropuerto, puerto y hotel. El precio de tu cotización es exactamente lo que pagas. Sin excepciones.',
    'faq.q7': '¿Y si mi vuelo se retrasa?',
    'faq.a7': 'Hacemos seguimiento de tu vuelo. Llegues temprano o tarde, ahí estaremos. Sin cargos extra por retrasos.',
    'faq.q8': '¿Ofrecen rentas a largo plazo?',
    'faq.a8': 'Sí — tenemos tarifas semanales y mensuales con descuento. Menciona tus fechas en el formulario y te enviaremos una cotización personalizada.',

    'footer.desc':   'Renta de autos premium para viajeros del Sur de Florida.',
    'footer.ready':  '¿Listo para conducir?',
    'footer.contact':'Contacto',
    'footer.rights': 'Todos los derechos reservados.',

    'mobile.cta':       'Chat por WhatsApp — Reservar',
    'mobile.ctaDrawer': 'Chat por WhatsApp: 754-265-3882',
  }
};

/* ---------- Apply language ---------- */
function applyLanguage(lang) {
  if (!I18N[lang]) lang = 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang][key];
    if (val === undefined) return;
    if (val.includes('<')) el.innerHTML = val;
    else el.textContent = val;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
  const waMsg = lang === 'es'
    ? 'Hola%20Pick%20%26%20Go%20%E2%80%94%20quisiera%20rentar%20un%20auto.'
    : 'Hi%20Pick%20%26%20Go%20%E2%80%94%20I%27d%20like%20to%20rent%20a%20car.';
  document.querySelectorAll('a[href*="wa.me/17542653882"]').forEach(a => {
    a.href = 'https://wa.me/17542653882?text=' + waMsg;
  });
  try { localStorage.setItem('pg-lang', lang); } catch (e) {}
}

/* ---------- Hamburger menu ---------- */
function wireHamburger() {
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!toggle || !mobileNav) return;

  function closeNav() {
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    mobileNav.classList.toggle('is-open', open);
    mobileNav.setAttribute('aria-hidden', String(!open));
  });

  // Close when a nav link is clicked
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !mobileNav.contains(e.target)) {
      closeNav();
    }
  });
}

/* ---------- Toast notification ---------- */
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;
  toastText.textContent = msg;
  toast.classList.add('is-visible');
  const timer = setTimeout(() => toast.classList.remove('is-visible'), 6000);
  toast._timer = timer;
}

function wireToastClose() {
  const btn = document.getElementById('toast-close');
  const toast = document.getElementById('toast');
  if (!btn || !toast) return;
  btn.addEventListener('click', () => {
    clearTimeout(toast._timer);
    toast.classList.remove('is-visible');
  });
}

/* ---------- Date defaults ---------- */
function setDateDefaults() {
  const today = new Date().toISOString().split('T')[0];
  const pickup = document.getElementById('pickup_date');
  const ret    = document.getElementById('return_date');
  if (pickup) pickup.min = today;
  if (ret)    ret.min = today;
  if (pickup && ret) {
    pickup.addEventListener('change', () => {
      ret.min = pickup.value || today;
      if (ret.value && ret.value < pickup.value) ret.value = pickup.value;
    });
  }
}

/* ---------- Fleet modal ---------- */
function buildModalContent(category) {
  const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
  const data = FLEET_DATA[category];
  if (!data) return '';

  const isEs    = lang === 'es';
  const labels  = data[lang];
  const seatsLbl   = isEs ? 'asientos' : 'Seats';
  const requestLbl = isEs ? 'Solicitar este auto' : 'Request This Car';
  const notSureLbl = isEs ? '¿No sabes cuál elegir?' : "Not sure which one?";
  const helpLbl    = isEs ? 'Te ayudamos a encontrar el vehículo ideal.' : "We'll help you find the right fit.";
  const waBtnLbl   = isEs ? 'Escríbenos →' : 'Message Us →';
  const noteLbl    = isEs
    ? 'Todos los vehículos incluyen A/C, GPS, Bluetooth, Wi-Fi, Apple CarPlay y cargador de teléfono.'
    : 'All vehicles include A/C, GPS, Bluetooth, Wi-Fi, Apple CarPlay &amp; phone chargers.';
  const waBase     = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

  const carCards = data.cars.map(car => `
      <div class="modal-car-card">
        <div class="modal-car-photo">
          <img src="${car.photo}" alt="${car.alt}" loading="lazy" width="700" height="467" />
        </div>
        <div class="modal-car-body">
          <h4 class="modal-car-name">${car.name}</h4>
          <div class="modal-car-badges">
            <span class="badge-seat">${car.seats} ${seatsLbl}</span>
            <span class="badge-feature">A/C</span>
            <span class="badge-feature">GPS</span>
            <span class="badge-feature">Bluetooth</span>
            <span class="badge-feature">Wi-Fi</span>
            <span class="badge-feature">CarPlay</span>
            <span class="badge-feature">Charger</span>
          </div>
          <button type="button" class="btn btn-modal-car" data-car="${car.name}">
            ${requestLbl}
          </button>
        </div>
      </div>`).join('');

  const helpMsg = isEs
    ? `Hola Pick & Go — necesito ayuda para elegir el vehículo ideal para mi viaje.`
    : `Hi Pick & Go — I need help choosing the right vehicle for my trip.`;

  const gridClass = data.cars.length === 1 ? 'modal-cars-grid modal-single' : 'modal-cars-grid';

  const backLbl       = isEs ? '← Volver' : '← Back';
  const requestingLbl = isEs ? 'Solicitando:' : 'Requesting:';
  const locLbl        = isEs ? 'Lugar de entrega' : 'Pickup location';
  const pdateLbl      = isEs ? 'Fecha de entrega' : 'Pickup date';
  const rdateLbl      = isEs ? 'Fecha de devolución' : 'Return date';
  const nameLbl       = isEs ? 'Nombre completo' : 'Full name';
  const phoneLbl      = isEs ? 'Teléfono' : 'Phone';
  const submitMiniLbl = isEs ? 'Solicitar cotización' : 'Get My Quote';
  const locOpts = isEs
    ? `<option value="" disabled selected>Elegir…</option>
       <option value="Aeropuerto de Miami (MIA)">Aeropuerto de Miami (MIA)</option>
       <option value="Aeropuerto de Fort Lauderdale (FLL)">Aeropuerto de Fort Lauderdale (FLL)</option>
       <option value="Puerto de Miami">Puerto de Miami</option>
       <option value="Puerto de Fort Lauderdale">Puerto de Fort Lauderdale</option>
       <option value="Hotel / Residencia">Hotel / Residencia</option>`
    : `<option value="" disabled selected>Choose…</option>
       <option value="Miami International (MIA)">Miami International (MIA)</option>
       <option value="Fort Lauderdale (FLL)">Fort Lauderdale (FLL)</option>
       <option value="Port of Miami">Port of Miami</option>
       <option value="Port of Fort Lauderdale">Port of Fort Lauderdale</option>
       <option value="Hotel / Residence">Hotel / Residence</option>`;

  return `
    <div class="fleet-modal-header">
      <div>
        <h3 class="modal-title" id="fleetModalTitle">${labels.title}</h3>
        <p class="modal-avail">${labels.avail}</p>
      </div>
      <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <p class="modal-features-note">${noteLbl}</p>
    <div class="${gridClass}">${carCards}</div>
    <div class="modal-mini-form" id="modalMiniForm" style="display:none">
      <div class="mmf-header">
        <div>
          <span class="mmf-requesting">${requestingLbl}</span>
          <span class="mmf-car-name" id="mmfCarTitle"></span>
        </div>
        <button type="button" class="mmf-back-btn" id="modalMiniFormBack">${backLbl}</button>
      </div>
      <form class="mmf-form" id="mmfForm" novalidate>
        <input type="hidden" id="mmfCar" name="vehicle_type" />
        <div class="form-field">
          <label>${locLbl}</label>
          <select name="pickup_location" required>${locOpts}</select>
        </div>
        <div class="mmf-row">
          <div class="form-field">
            <label>${pdateLbl}</label>
            <input type="date" name="pickup_date" id="mmfPickupDate" required />
          </div>
          <div class="form-field">
            <label>${rdateLbl}</label>
            <input type="date" name="return_date" id="mmfReturnDate" required />
          </div>
        </div>
        <div class="mmf-row">
          <div class="form-field">
            <label>${nameLbl}</label>
            <input type="text" name="full_name" autocomplete="name" required />
          </div>
          <div class="form-field">
            <label>${phoneLbl}</label>
            <input type="tel" name="phone" autocomplete="tel" required />
          </div>
        </div>
        <button type="submit" class="btn btn-submit mmf-submit">${submitMiniLbl}</button>
      </form>
    </div>
    <div class="modal-footer-cta">
      <div>
        <p class="modal-footer-q">${notSureLbl}</p>
        <p class="modal-footer-sub">${helpLbl}</p>
      </div>
      <a href="${waBase}${encodeURIComponent(helpMsg)}" target="_blank" rel="noopener" class="btn-outline-navy">
        ${waBtnLbl}
      </a>
    </div>`;
}

function openFleetModal(category) {
  const overlay = document.getElementById('fleetModalOverlay');
  const content = document.getElementById('fleetModalContent');
  if (!overlay || !content) return;

  content.innerHTML = buildModalContent(category);
  document.getElementById('modalCloseBtn')?.addEventListener('click', closeFleetModal);
  wireModalMiniForm(document.documentElement.lang === 'es' ? 'es' : 'en');

  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  if (typeof fbq !== 'undefined') {
    fbq('track', 'ViewContent', { content_name: category });
  }
}

function closeFleetModal() {
  const overlay = document.getElementById('fleetModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ---------- Mini-form WhatsApp message ---------- */
function buildMiniFormMessage(data, lang) {
  const isEs = lang === 'es';
  const lines = isEs
    ? [
        'Hola Pick & Go — me gustaría reservar un auto.',
        '',
        `*Vehículo:* ${data.vehicle_type}`,
        `*Lugar de entrega:* ${data.pickup_location}`,
        `*Fecha de entrega:* ${data.pickup_date}`,
        `*Fecha de devolución:* ${data.return_date}`,
        '',
        `*Nombre:* ${data.full_name}`,
        `*Teléfono:* ${data.phone}`
      ]
    : [
        "Hi Pick & Go — I'd like to reserve a car.",
        '',
        `*Vehicle:* ${data.vehicle_type}`,
        `*Pickup location:* ${data.pickup_location}`,
        `*Pickup date:* ${data.pickup_date}`,
        `*Return date:* ${data.return_date}`,
        '',
        `*Name:* ${data.full_name}`,
        `*Phone:* ${data.phone}`
      ];
  return lines.join('\n');
}

function wireModalMiniForm(lang) {
  const isEs    = lang === 'es';
  const miniForm = document.getElementById('modalMiniForm');
  const grid     = document.querySelector('#fleetModalContent .modal-cars-grid');
  const featNote = document.querySelector('#fleetModalContent .modal-features-note');
  if (!miniForm) return;

  document.querySelectorAll('.btn-modal-car').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('mmfCar').value        = btn.dataset.car;
      document.getElementById('mmfCarTitle').textContent = btn.dataset.car;

      if (grid)     grid.style.display     = 'none';
      if (featNote) featNote.style.display = 'none';
      miniForm.style.display = '';

      const today      = new Date().toISOString().split('T')[0];
      const pickupDate = document.getElementById('mmfPickupDate');
      const returnDate = document.getElementById('mmfReturnDate');
      pickupDate.min   = today;
      returnDate.min   = today;
      pickupDate.addEventListener('change', () => {
        returnDate.min = pickupDate.value || today;
        if (returnDate.value && returnDate.value < pickupDate.value) returnDate.value = pickupDate.value;
      }, { once: true });

      miniForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  document.getElementById('modalMiniFormBack')?.addEventListener('click', () => {
    miniForm.style.display = 'none';
    if (grid)     grid.style.display     = '';
    if (featNote) featNote.style.display = '';
    document.getElementById('mmfForm').reset();
  });

  document.getElementById('mmfForm')?.addEventListener('submit', e => {
    e.preventDefault();
    if (!e.target.reportValidity()) return;
    const data = Object.fromEntries(new FormData(e.target).entries());
    const msg  = buildMiniFormMessage(data, lang);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    if (typeof fbq !== 'undefined') fbq('track', 'Lead');
    showToast(isEs
      ? '¡Gracias! Abrimos WhatsApp con tu consulta. Si no abrió la app, escríbenos al 754-265-3882.'
      : "Thanks! We opened WhatsApp with your details. If WhatsApp didn't open, text us at 754-265-3882."
    );
  });
}

function wireFleetModal() {
  document.querySelectorAll('.fleet-card[data-modal]').forEach(card => {
    card.addEventListener('click', () => openFleetModal(card.dataset.modal));
  });

  const overlay = document.getElementById('fleetModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeFleetModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeFleetModal();
  });
}

/* ---------- WhatsApp message builder ---------- */
function buildWhatsAppMessage(data, lang) {
  const L = (lang === 'es')
    ? {
        intro:      'Hola Pick & Go — me gustaría reservar un auto.',
        pickup:     'Lugar de entrega',
        returnLoc:  'Lugar de devolución',
        vehicle:    'Tipo de vehículo',
        pickupDate: 'Fecha de entrega',
        returnDate: 'Fecha de devolución',
        pickupTime: 'Hora de entrega',
        name:       'Nombre',
        phone:      'Teléfono',
        email:      'Correo',
        notes:      'Notas'
      }
    : {
        intro:      "Hi Pick & Go — I'd like to reserve a car.",
        pickup:     'Pickup location',
        returnLoc:  'Return location',
        vehicle:    'Vehicle type',
        pickupDate: 'Pickup date',
        returnDate: 'Return date',
        pickupTime: 'Pickup time',
        name:       'Name',
        phone:      'Phone',
        email:      'Email',
        notes:      'Notes'
      };

  const lines = [
    L.intro, '',
    `*${L.pickup}:* ${data.pickup_location}`,
    `*${L.returnLoc}:* ${data.return_location}`,
    `*${L.vehicle}:* ${data.vehicle_type}`,
    `*${L.pickupDate}:* ${data.pickup_date}`,
    `*${L.returnDate}:* ${data.return_date}`,
    `*${L.pickupTime}:* ${data.pickup_time}`,
    '',
    `*${L.name}:* ${data.full_name}`,
    `*${L.phone}:* ${data.phone}`,
    `*${L.email}:* ${data.email}`
  ];
  if (data.notes && data.notes.trim()) {
    lines.push('', `*${L.notes}:* ${data.notes.trim()}`);
  }
  return lines.join('\n');
}

/* ---------- Form submission ---------- */
function wireFormSubmit() {
  const form = document.querySelector('form.reserve-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const fd   = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const lang = (document.documentElement.lang === 'es') ? 'es' : 'en';

    // 1) Open WhatsApp (sync, from user gesture)
    const msg   = buildWhatsAppMessage(data, lang);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener');

    // 2) Fire Meta Pixel Lead event if pixel is present
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }

    // 3) Background POST to Netlify Forms
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(fd).toString()
      });
    } catch (err) {
      console.warn('Netlify form POST failed (WhatsApp still opened):', err);
    }

    // 4) Show success toast instead of alert
    const successMsg = (lang === 'es')
      ? '¡Gracias! Abrimos WhatsApp con tu consulta. Si no te abrió la app, escríbenos al 754-265-3882.'
      : "Thanks! We opened WhatsApp with your details. If WhatsApp didn't open, text us at 754-265-3882.";
    showToast(successMsg);
  });
}

/* ---------- Active nav link on scroll ---------- */
function wireScrollSpy() {
  const sections = ['top', 'reserve', 'fleet', 'reviews', 'why', 'faq'];
  const navLinks = document.querySelectorAll('.header-nav a, .mobile-nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('is-active-nav', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ---------- Scroll fade-in ---------- */
function wireFadeIn() {
  const targets = [
    ...document.querySelectorAll('.fleet-card'),
    ...document.querySelectorAll('.review-card'),
    ...document.querySelectorAll('.cred-badge'),
    ...document.querySelectorAll('.faq-item')
  ];
  targets.forEach((el, i) => {
    el.classList.add('fade-in');
    const delay = (i % 4);
    if (delay === 1) el.classList.add('delay-1');
    if (delay === 2) el.classList.add('delay-2');
    if (delay === 3) el.classList.add('delay-3');
  });
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  targets.forEach(el => obs.observe(el));
}

/* ---------- Animated counter ---------- */
function wireCountUp() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        obs.unobserve(el);
        let current = 0;
        const step = Math.ceil(target / 50);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + '+';
          if (current >= target) clearInterval(timer);
        }, 30);
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ---------- Sticky desktop book bar ---------- */
function wireStickyBar() {
  const bar = document.getElementById('stickyBookBar');
  const hero = document.getElementById('top');
  if (!bar || !hero) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => bar.classList.toggle('is-visible', !e.isIntersecting));
  }, { threshold: 0 });
  obs.observe(hero);
}

/* ---------- FAQ smooth animation ---------- */
function wireFaqAnimation() {
  document.querySelectorAll('.faq-item').forEach(details => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('div');
    if (!summary || !content) return;
    summary.addEventListener('click', (e) => {
      e.preventDefault();
      if (details.classList.contains('is-open')) {
        details.classList.remove('is-open');
        setTimeout(() => { details.open = false; }, 380);
      } else {
        details.open = true;
        requestAnimationFrame(() => details.classList.add('is-open'));
      }
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language, or auto-detect from browser
  let lang = 'en';
  try {
    const saved = localStorage.getItem('pg-lang');
    if (saved && I18N[saved]) {
      lang = saved;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith('es')) {
      lang = 'es';
    }
  } catch (e) {}
  applyLanguage(lang);

  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  wireHamburger();
  setDateDefaults();
  wireFleetModal();
  wireFormSubmit();
  wireToastClose();
  wireScrollSpy();
  wireFadeIn();
  wireCountUp();
  wireStickyBar();
  wireFaqAnimation();
});
