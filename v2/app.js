/* =====================================================
   Pick & Go Rent A Car: v2 preview
   Language toggle · Booking funnel · Call / WhatsApp
   ===================================================== */

const PHONE_TEL     = '+17542653882';
const PHONE_DISPLAY = '754-265-3882';
const WHATSAPP      = '17542653882';

/* Leads: set to a FormSubmit ajax URL before launch, e.g.
   'https://formsubmit.co/ajax/you@example.com'. Empty = nothing is sent. */
const LEAD_ENDPOINT = '';

/* Daily rates below are SAMPLES for the preview. Replace with real rates
   and set SAMPLE_RATES to false before launch. */
const SAMPLE_RATES = true;

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?sca_esv=e8b56c3c652e1040&sxsrf=ANbL-n7cTqkbdTKSvxShdJ5PpKPdV7AKxA:1780978365495&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOT3UT9Q0zT21IhzlQjdLKtOHNw2s08PCSvA9-8YTrZeCY7npVMgBnilEBLt1qc9nxWIjI25SOd4G2Ju2xTfeKl1hIf8-HBP2LqLZi8vmkX7vtRdJcg%3D%3D&q=PICK+%26+GO+RENT+A+CAR+Weston+Reviews&sa=X&ved=2ahUKEwj6vs-2pfmUAxWbmYQIHRxTBYQQ0bkNegQIPBAF&biw=1920&bih=919&dpr=1';

const IMG = id => `https://images.unsplash.com/${id}?w=640&q=80&auto=format&fit=crop`;

const CARS = [
  { id: 'sedan',   rate: 55,  img: IMG('photo-1623869675781-80aa31012a5a'), models: 'Kia Forte' },
  { id: 'suv',     rate: 75,  img: IMG('photo-1617469767053-d3b523a0b982'), models: 'Toyota RAV4 · VW Tiguan' },
  { id: 'minivan', rate: 95,  img: IMG('photo-1623371857133-6d5552bbdc13'), models: 'Honda Odyssey · Toyota Sienna · Chrysler Pacifica' },
  { id: 'luxury',  rate: 160, img: IMG('photo-1683778547049-8d969766b441'), models: 'Cadillac Escalade · Chevrolet Suburban' }
];

const LOCATIONS = ['mia', 'fll', 'portmia', 'portfll', 'hotel'];

/* ---------- Translations ---------- */
const T = {
  en: {
    'preview.note': 'Preview only. Prices are samples and photos are placeholders.',

    'hero.title': 'Your rental car, waiting at arrivals.',
    'hero.sub': 'We deliver to MIA, FLL, the cruise ports and your hotel. Insurance, tolls and delivery are in the price.',
    'hero.callLabel': 'Call us',
    'hero.fact1': '5.0 on Google from 21 reviews',
    'hero.fact2': 'Open 24/7',
    'hero.fact3': 'English and Spanish',

    'covers.title': 'What your price covers',
    'covers.lede': 'You pay the amount on your quote. We add nothing at pickup.',
    'covers.i1': 'Collision and liability insurance',
    'covers.i2': 'Unlimited miles within Florida',
    'covers.i3': 'Tolls, with no SunPass to buy',
    'covers.i4': 'One additional driver',
    'covers.i5': 'Delivery to the airport, port or hotel',

    'fleet.title': 'Choose your car',
    'fleet.lede': 'Ten vehicles, from a sedan for two to an Escalade for the whole group.',
    'fleet.cta': 'Get the price',

    'car.sedan': 'Sedan',
    'car.suv': 'SUV',
    'car.minivan': 'Minivan',
    'car.luxury': 'Luxury SUV',
    'car.sedan.seats': '5 seats',
    'car.suv.seats': '5 seats',
    'car.minivan.seats': 'Up to 8 seats',
    'car.luxury.seats': 'Up to 8 seats',
    'car.sedan.blurb': 'Easy to park and light on gas.',
    'car.suv.blurb': 'Room for five and the luggage.',
    'car.minivan.blurb': 'The whole family in one car.',
    'car.luxury.blurb': 'Full-size comfort for groups and special trips.',
    'car.from': 'from',
    'car.perDay': '/day',

    'how.title': 'How pickup works',
    'how.h1': 'Before you land',
    'how.p1': 'We track your flight. If it runs late, you pay nothing extra.',
    'how.h2': 'At arrivals',
    'how.p2': 'We meet you with the car. You sign, take the keys and go. You skip the counter and the shuttle.',
    'how.h3': 'Going home',
    'how.p3': 'Return the car at the airport, the port or your hotel, whichever is on your way.',

    'reviews.title': '5.0 on Google',
    'reviews.link': 'Read all 21 reviews',
    'reviews.source': 'Google review',

    'faq.title': 'Questions',

    'closing.title': 'Questions before you book? Call us.',
    'closing.sub': 'We answer in English and Spanish, and we can hold a car for you on the call.',
    'closing.call': 'Call ' + PHONE_DISPLAY,
    'closing.wa': 'Message on WhatsApp',

    'footer.area': 'Miami and Fort Lauderdale, Florida',

    'bar.call': 'Call',
    'bar.price': 'Get price',

    'fn.step': 'Step {n} of 3',
    'fn.t1': 'Which car do you need?',
    'fn.t2': 'When and where?',
    'fn.t3': 'Where do we send your price?',
    'fn.t4': 'Your price',
    'fn.change': 'Change',
    'fn.back': 'Back',
    'fn.continue': 'Continue',
    'fn.showPrice': 'Show my price',
    'fn.pickupLoc': 'Pickup',
    'fn.returnLoc': 'Return',
    'fn.same': 'Same place',
    'fn.pickupDate': 'Pickup date',
    'fn.returnDate': 'Return date',
    'fn.pickupTime': 'Pickup time',
    'fn.selectTime': 'Select',
    'fn.name': 'Your name',
    'fn.phone': 'Phone or WhatsApp number',
    'fn.contactNote': 'We use your number for this reservation and nothing else.',
    'fn.errDates': 'Choose your pickup date, time and return date.',
    'fn.errOrder': 'The return date has to be after the pickup date.',
    'fn.errContact': 'Enter your name and a phone number we can reach.',
    'fn.day': 'day',
    'fn.days': 'days',
    'fn.total': 'Estimated total',
    'fn.rateLine': '${rate} per day for {days}.',
    'fn.sample': 'Sample price for this preview.',
    'fn.confirm': 'We confirm the car and the final price when you call.',
    'fn.i1': 'Insurance, tolls and delivery included',
    'fn.i2': 'Unlimited miles within Florida',
    'fn.i3': 'Move your dates up to 2 days before pickup',
    'fn.call': 'Call to lock it in',
    'fn.wa': 'Send it on WhatsApp',
    'fn.callback': 'Have us call you',
    'fn.callbackDone': 'Got it, {name}. We will call you at {phone}.',
    'fn.previewNoSend': 'Preview: nothing is sent yet.',
    'fn.edit': 'Edit details',

    'loc.mia': 'Miami Airport (MIA)',
    'loc.fll': 'Fort Lauderdale Airport (FLL)',
    'loc.portmia': 'Port of Miami',
    'loc.portfll': 'Port Everglades (Fort Lauderdale)',
    'loc.hotel': 'Hotel or residence',

    'wa.general': "Hi Pick & Go, I'd like to rent a car.",
    'wa.intro': "Hi Pick & Go, I'd like to reserve this car:",
    'wa.car': 'Car',
    'wa.pickup': 'Pickup',
    'wa.return': 'Return',
    'wa.at': 'at',
    'wa.estimate': 'Estimate on the site',
    'wa.name': 'Name',
    'wa.phone': 'Phone'
  },

  es: {
    'preview.note': 'Vista previa. Los precios son de muestra y las fotos son provisionales.',

    'hero.title': 'Tu auto te espera en llegadas.',
    'hero.sub': 'Entregamos en MIA, FLL, los puertos de cruceros y tu hotel. El precio incluye seguro, peajes y entrega.',
    'hero.callLabel': 'Llámanos',
    'hero.fact1': '5.0 en Google con 21 reseñas',
    'hero.fact2': 'Abierto 24/7',
    'hero.fact3': 'Español e inglés',

    'covers.title': 'Lo que cubre tu precio',
    'covers.lede': 'Pagas el monto de tu cotización. No sumamos nada en la entrega.',
    'covers.i1': 'Seguro de colisión y responsabilidad civil',
    'covers.i2': 'Millaje ilimitado dentro de Florida',
    'covers.i3': 'Peajes, sin comprar SunPass',
    'covers.i4': 'Un conductor adicional',
    'covers.i5': 'Entrega en aeropuerto, puerto u hotel',

    'fleet.title': 'Elige tu auto',
    'fleet.lede': 'Diez vehículos, desde un sedán para dos hasta una Escalade para todo el grupo.',
    'fleet.cta': 'Ver el precio',

    'car.sedan': 'Sedán',
    'car.suv': 'SUV',
    'car.minivan': 'Minivan',
    'car.luxury': 'SUV de lujo',
    'car.sedan.seats': '5 asientos',
    'car.suv.seats': '5 asientos',
    'car.minivan.seats': 'Hasta 8 asientos',
    'car.luxury.seats': 'Hasta 8 asientos',
    'car.sedan.blurb': 'Fácil de estacionar y gasta poco.',
    'car.suv.blurb': 'Espacio para cinco y el equipaje.',
    'car.minivan.blurb': 'Toda la familia en un solo auto.',
    'car.luxury.blurb': 'Tamaño completo para grupos y viajes especiales.',
    'car.from': 'desde',
    'car.perDay': '/día',

    'how.title': 'Cómo funciona la entrega',
    'how.h1': 'Antes de aterrizar',
    'how.p1': 'Seguimos tu vuelo. Si se retrasa, no pagas nada extra.',
    'how.h2': 'En llegadas',
    'how.p2': 'Te recibimos con el auto. Firmas, tomas las llaves y te vas. Te ahorras el mostrador y el shuttle.',
    'how.h3': 'Al regresar',
    'how.p3': 'Devuelve el auto en el aeropuerto, el puerto o tu hotel, donde te quede mejor.',

    'reviews.title': '5.0 en Google',
    'reviews.link': 'Lee las 21 reseñas',
    'reviews.source': 'Reseña de Google',

    'faq.title': 'Preguntas',

    'closing.title': '¿Dudas antes de reservar? Llámanos.',
    'closing.sub': 'Atendemos en español e inglés, y podemos apartar tu auto en la llamada.',
    'closing.call': 'Llama al ' + PHONE_DISPLAY,
    'closing.wa': 'Escribe por WhatsApp',

    'footer.area': 'Miami y Fort Lauderdale, Florida',

    'bar.call': 'Llamar',
    'bar.price': 'Ver precio',

    'fn.step': 'Paso {n} de 3',
    'fn.t1': '¿Qué auto necesitas?',
    'fn.t2': '¿Cuándo y dónde?',
    'fn.t3': '¿A dónde enviamos tu precio?',
    'fn.t4': 'Tu precio',
    'fn.change': 'Cambiar',
    'fn.back': 'Atrás',
    'fn.continue': 'Continuar',
    'fn.showPrice': 'Ver mi precio',
    'fn.pickupLoc': 'Entrega',
    'fn.returnLoc': 'Devolución',
    'fn.same': 'Mismo lugar',
    'fn.pickupDate': 'Fecha de entrega',
    'fn.returnDate': 'Fecha de devolución',
    'fn.pickupTime': 'Hora de entrega',
    'fn.selectTime': 'Elegir',
    'fn.name': 'Tu nombre',
    'fn.phone': 'Teléfono o WhatsApp',
    'fn.contactNote': 'Usamos tu número para esta reserva y nada más.',
    'fn.errDates': 'Elige la fecha y hora de entrega y la fecha de devolución.',
    'fn.errOrder': 'La devolución tiene que ser después de la entrega.',
    'fn.errContact': 'Escribe tu nombre y un teléfono donde podamos ubicarte.',
    'fn.day': 'día',
    'fn.days': 'días',
    'fn.total': 'Total estimado',
    'fn.rateLine': '${rate} por día, {days}.',
    'fn.sample': 'Precio de muestra para esta vista previa.',
    'fn.confirm': 'Confirmamos el auto y el precio final cuando llamas.',
    'fn.i1': 'Seguro, peajes y entrega incluidos',
    'fn.i2': 'Millaje ilimitado dentro de Florida',
    'fn.i3': 'Cambia tus fechas hasta 2 días antes de la entrega',
    'fn.call': 'Llama y asegura tu auto',
    'fn.wa': 'Enviar por WhatsApp',
    'fn.callback': 'Prefiero que me llamen',
    'fn.callbackDone': 'Listo, {name}. Te llamamos al {phone}.',
    'fn.previewNoSend': 'Vista previa: todavía no se envía nada.',
    'fn.edit': 'Editar datos',

    'loc.mia': 'Aeropuerto de Miami (MIA)',
    'loc.fll': 'Aeropuerto de Fort Lauderdale (FLL)',
    'loc.portmia': 'Puerto de Miami',
    'loc.portfll': 'Port Everglades (Fort Lauderdale)',
    'loc.hotel': 'Hotel o residencia',

    'wa.general': 'Hola Pick & Go, quisiera rentar un auto.',
    'wa.intro': 'Hola Pick & Go, quisiera reservar este auto:',
    'wa.car': 'Auto',
    'wa.pickup': 'Entrega',
    'wa.return': 'Devolución',
    'wa.at': 'a las',
    'wa.estimate': 'Estimado en la web',
    'wa.name': 'Nombre',
    'wa.phone': 'Teléfono'
  }
};

const REVIEWS = [
  { name: 'Erika Saavedra',
    en: 'I came for two weeks with my daughter and rented two cars, one for Miami and another for the round trip to Orlando. They were punctual with deliveries, always available, and sent clear instructions for pickup and drop-off at both the port and the airports.',
    es: 'Vine por dos semanas con mi hija y renté dos autos, uno para los primeros días en Miami y otro para el viaje de ida y vuelta a Orlando. Fueron puntuales, siempre al pendiente y me enviaron indicaciones claras para recoger y dejar los autos en el puerto y los aeropuertos.' },
  { name: 'Mariano Leon',
    en: 'Very professional service and spotless, new cars! I rented a van for a week and everything was great. Customer service was top-notch from the moment I contacted them until the very end.',
    es: 'Servicio muy profesional y autos impecables y nuevos! Alquilé una camioneta por una semana y todo estuvo perfecto. El trato del equipo de primera desde que tuve contacto con ellos hasta el final.' },
  { name: 'Renato Mendoza',
    en: 'Excellent service!! They delivered the car to the Port of Miami exactly when I needed it. New and reliable vehicles!! Great service from the entire team.',
    es: '¡Excelente Servicio!! Esta vez me lo dejaron en el Puerto de Miami con los horarios que necesitaba. Vehículos nuevos y sobre todo confiables. Gran atención de todo su equipo.' },
  { name: 'Francesco P.',
    en: 'Outstanding service as usual, car is spotless, new and always on time and stress free.',
    es: 'Servicio excepcional como siempre, el auto impecable, nuevo y siempre puntual. Sin estrés.' }
];

const FAQ = {
  en: [
    ['What do I need to rent?', "The driver must be 21 or older, with a valid license from any country (Latin alphabet) and a major credit card in their own name. We may hold a refundable security deposit at pickup."],
    ['Is insurance included?', 'Yes. Collision and liability insurance come with every rental.'],
    ['Where can I pick up the car?', 'Miami International (MIA), Fort Lauderdale (FLL), Port of Miami, Port Everglades, or your hotel or residence. At the airports we meet you at arrivals, so you skip the shuttle and the counter.'],
    ['How do I pay?', "With any major credit card in the main driver's name. We hold a refundable security deposit at pickup and release it when you return the car."],
    ['Can I change my reservation?', 'You can move it to another date if you tell us at least 2 days before pickup. The amount you paid stays as credit toward the new dates. Reservations are non-refundable.'],
    ['What does the price cover?', 'Collision and liability insurance, unlimited miles within Florida, tolls (no SunPass needed), one additional driver, and delivery to the airport, port or hotel. You pay the amount on your quote.'],
    ['What if my flight is delayed?', 'We track your flight and show up when you land, early or late. Delays cost you nothing extra.'],
    ['Do you rent by the week or month?', 'Yes, and both come with a discount. Call us with your dates and we will quote it.']
  ],
  es: [
    ['¿Qué necesito para rentar?', 'El conductor debe tener 21 años o más, una licencia vigente de cualquier país (alfabeto latino) y una tarjeta de crédito a su nombre. Podemos retener un depósito reembolsable en la entrega.'],
    ['¿El seguro está incluido?', 'Sí. Cada renta incluye seguro de colisión y responsabilidad civil.'],
    ['¿Dónde puedo recoger el auto?', 'Aeropuerto de Miami (MIA), Aeropuerto de Fort Lauderdale (FLL), Puerto de Miami, Port Everglades, o tu hotel o residencia. En los aeropuertos te recibimos en llegadas, así te ahorras el shuttle y el mostrador.'],
    ['¿Cómo se paga?', 'Con cualquier tarjeta de crédito a nombre del conductor principal. Retenemos un depósito reembolsable en la entrega y lo liberamos cuando devuelves el auto.'],
    ['¿Puedo cambiar mi reserva?', 'Puedes moverla a otra fecha si nos avisas al menos 2 días antes de la entrega. El monto pagado queda como crédito para las nuevas fechas. Las reservas no son reembolsables.'],
    ['¿Qué cubre el precio?', 'Seguro de colisión y responsabilidad civil, millaje ilimitado dentro de Florida, peajes (sin SunPass), un conductor adicional y la entrega en aeropuerto, puerto u hotel. Pagas el monto de tu cotización.'],
    ['¿Y si mi vuelo se retrasa?', 'Seguimos tu vuelo y llegamos cuando aterrizas, temprano o tarde. Los retrasos no te cuestan nada extra.'],
    ['¿Rentan por semana o por mes?', 'Sí, y ambas tienen descuento. Llámanos con tus fechas y te cotizamos.']
  ]
};

/* ---------- State ---------- */
let lang = 'en';
const state = {
  step: 1,
  car: null,
  pickupLoc: 'mia',
  returnLoc: 'same',
  pickupDate: '',
  pickupTime: '',
  returnDate: '',
  name: '',
  phone: '',
  error: '',
  callbackAsked: false
};

/* ---------- Helpers ---------- */
const $ = sel => document.querySelector(sel);

function t(key, vars) {
  let s = (T[lang] && T[lang][key]) || T.en[key] || key;
  if (vars) Object.keys(vars).forEach(k => { s = s.split('{' + k + '}').join(vars[k]); });
  return s;
}

function esc(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function track(name, params) {
  if (typeof gtag === 'function') gtag('event', name, params || {});
  if (typeof fbq === 'function' && name === 'lead') fbq('track', 'Lead');
}

function carById(id) { return CARS.find(c => c.id === id); }

/* yyyy-mm-dd for a local Date */
function isoDate(d) {
  const p = n => String(n).padStart(2, '0');
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
}

/* Parse yyyy-mm-dd as a local date (new Date(str) would read it as UTC) */
function parseDate(str) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(str || '');
  return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
}

function addDays(str, n) {
  const d = parseDate(str);
  if (!d) return '';
  d.setDate(d.getDate() + n);
  return isoDate(d);
}

function rentalDays() {
  const a = parseDate(state.pickupDate), b = parseDate(state.returnDate);
  if (!a || !b) return 0;
  return Math.max(1, Math.round((b - a) / 86400000));
}

function niceDate(str) {
  const d = parseDate(str);
  return d ? d.toLocaleDateString(lang === 'es' ? 'es-US' : 'en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : '';
}

function daysLabel(n) { return n + ' ' + t(n === 1 ? 'fn.day' : 'fn.days'); }

function returnLocKey() { return state.returnLoc === 'same' ? state.pickupLoc : state.returnLoc; }

function hourLabel(h) {
  const suffix = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return h12 + ':00 ' + suffix;
}

function waLink(text) { return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text); }

function quoteMessage() {
  const car = carById(state.car);
  const days = rentalDays();
  const lines = [
    t('wa.intro'), '',
    '*' + t('wa.car') + ':* ' + t('car.' + car.id) + ' (' + car.models + ')',
    '*' + t('wa.pickup') + ':* ' + niceDate(state.pickupDate) + ' ' + t('wa.at') + ' ' + state.pickupTime + ', ' + t('loc.' + state.pickupLoc),
    '*' + t('wa.return') + ':* ' + niceDate(state.returnDate) + ', ' + t('loc.' + returnLocKey()),
    '*' + t('wa.estimate') + ':* $' + (car.rate * days) + ' (' + daysLabel(days) + ')',
    '',
    '*' + t('wa.name') + ':* ' + state.name,
    '*' + t('wa.phone') + ':* ' + state.phone
  ];
  return lines.join('\n');
}

function saveLead(extra) {
  if (!LEAD_ENDPOINT) return;
  const car = carById(state.car);
  const days = rentalDays();
  const body = Object.assign({
    _subject: 'New quote request: ' + state.name,
    name: state.name,
    phone: state.phone,
    car: car ? car.id : '',
    pickup: state.pickupDate + ' ' + state.pickupTime + ' ' + state.pickupLoc,
    return: state.returnDate + ' ' + returnLocKey(),
    days: days,
    estimate: car ? '$' + car.rate * days : '',
    language: lang
  }, extra || {});
  fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(body)
  }).catch(() => {});
}

/* ---------- Funnel rendering ---------- */
function pickedBar() {
  const car = carById(state.car);
  if (!car) return '';
  return `<div class="fn-picked">
      <span><strong>${t('car.' + car.id)}</strong> · ${t('car.from')} $${car.rate}${t('car.perDay')}</span>
      <button type="button" class="link-btn" data-go="1">${t('fn.change')}</button>
    </div>`;
}

function stepHead(n, titleKey) {
  const progress = n <= 3 ? `<p class="fn-progress">${t('fn.step', { n })}</p>` : '';
  return `${progress}<h2 class="fn-title" id="fnTitle" tabindex="-1">${t(titleKey)}</h2>`;
}

function renderStep1() {
  const rows = CARS.map(c => `
    <button type="button" class="car-opt${state.car === c.id ? ' is-picked' : ''}" data-car="${c.id}">
      <img src="${c.img}" alt="" width="84" height="60" loading="lazy" />
      <span>
        <span class="car-opt-name">${t('car.' + c.id)}</span>
        <span class="car-opt-meta">${c.models}</span>
        <span class="car-opt-meta">${t('car.' + c.id + '.seats')}</span>
      </span>
      <span class="car-opt-price">${t('car.from')}<b>$${c.rate}</b>${t('car.perDay')}</span>
    </button>`).join('');
  return stepHead(1, 'fn.t1') + rows;
}

function renderStep2() {
  const locOpts = sel => LOCATIONS.map(k => `<option value="${k}"${sel === k ? ' selected' : ''}>${t('loc.' + k)}</option>`).join('');
  let times = `<option value=""${state.pickupTime ? '' : ' selected'} disabled>${t('fn.selectTime')}</option>`;
  for (let h = 0; h < 24; h++) {
    const label = hourLabel(h);
    times += `<option value="${label}"${state.pickupTime === label ? ' selected' : ''}>${label}</option>`;
  }
  const today = isoDate(new Date());
  return stepHead(2, 'fn.t2') + pickedBar() + `
    <form id="fnForm2" novalidate>
      <div class="fields">
        <div class="field field-full">
          <label for="fPickupLoc">${t('fn.pickupLoc')}</label>
          <select id="fPickupLoc">${locOpts(state.pickupLoc)}</select>
        </div>
        <div class="field">
          <label for="fPickupDate">${t('fn.pickupDate')}</label>
          <input type="date" id="fPickupDate" min="${today}" value="${state.pickupDate}" />
        </div>
        <div class="field">
          <label for="fPickupTime">${t('fn.pickupTime')}</label>
          <select id="fPickupTime">${times}</select>
        </div>
        <div class="field">
          <label for="fReturnDate">${t('fn.returnDate')}</label>
          <input type="date" id="fReturnDate" min="${state.pickupDate || today}" value="${state.returnDate}" />
        </div>
        <div class="field">
          <label for="fReturnLoc">${t('fn.returnLoc')}</label>
          <select id="fReturnLoc">
            <option value="same"${state.returnLoc === 'same' ? ' selected' : ''}>${t('fn.same')}</option>
            ${locOpts(state.returnLoc)}
          </select>
        </div>
      </div>
      ${state.error ? `<p class="fn-error" role="alert">${t(state.error)}</p>` : ''}
      <div class="fn-actions">
        <button type="button" class="btn btn-ghost" data-go="1">${t('fn.back')}</button>
        <button type="submit" class="btn btn-primary">${t('fn.continue')}</button>
      </div>
    </form>`;
}

function renderStep3() {
  return stepHead(3, 'fn.t3') + pickedBar() + `
    <form id="fnForm3" novalidate>
      <div class="fields">
        <div class="field field-full">
          <label for="fName">${t('fn.name')}</label>
          <input type="text" id="fName" autocomplete="name" value="${esc(state.name)}" />
        </div>
        <div class="field field-full">
          <label for="fPhone">${t('fn.phone')}</label>
          <input type="tel" id="fPhone" autocomplete="tel" inputmode="tel" value="${esc(state.phone)}" />
        </div>
      </div>
      ${state.error ? `<p class="fn-error" role="alert">${t(state.error)}</p>` : ''}
      <div class="fn-actions">
        <button type="button" class="btn btn-ghost" data-go="2">${t('fn.back')}</button>
        <button type="submit" class="btn btn-primary">${t('fn.showPrice')}</button>
      </div>
      <p class="fn-small">${t('fn.contactNote')}</p>
    </form>`;
}

function renderStep4() {
  const car = carById(state.car);
  const days = rentalDays();
  const total = car.rate * days;
  const sameReturn = returnLocKey() === state.pickupLoc;
  const callback = state.callbackAsked
    ? `<p class="callback-done" role="status">${t('fn.callbackDone', { name: esc(state.name.split(' ')[0]), phone: esc(state.phone) })}${LEAD_ENDPOINT ? '' : ' ' + t('fn.previewNoSend')}</p>`
    : '';
  return stepHead(4, 'fn.t4') + `
    <div class="quote">
      <div class="quote-top">
        <img src="${car.img}" alt="" width="96" height="68" />
        <div>
          <p class="quote-car">${t('car.' + car.id)}</p>
          <p class="quote-trip">${niceDate(state.pickupDate)}, ${state.pickupTime} · ${niceDate(state.returnDate)}<br/>${t('loc.' + state.pickupLoc)}${sameReturn ? '' : ' · ' + t('loc.' + returnLocKey())}</p>
        </div>
      </div>
      <div class="quote-total">
        <span>${t('fn.total')}</span>
        <b>$${total.toLocaleString('en-US')}</b>
      </div>
    </div>
    <p class="quote-note">${t('fn.rateLine', { rate: car.rate, days: daysLabel(days) })} ${SAMPLE_RATES ? t('fn.sample') : t('fn.confirm')}</p>
    <ul class="quote-incl">
      <li>${t('fn.i1')}</li>
      <li>${t('fn.i2')}</li>
      <li>${t('fn.i3')}</li>
    </ul>
    <div class="quote-actions">
      <a class="btn btn-primary btn-lg btn-block" href="tel:${PHONE_TEL}" data-track="call_quote">${t('fn.call')} · ${PHONE_DISPLAY}</a>
      <a class="btn btn-wa btn-block" href="${waLink(quoteMessage())}" target="_blank" rel="noopener" data-track="wa_quote">${t('fn.wa')}</a>
    </div>
    ${callback}
    <div class="quote-foot">
      ${state.callbackAsked ? '<span></span>' : `<button type="button" class="link-btn" id="fnCallback">${t('fn.callback')}</button>`}
      <button type="button" class="link-btn" data-go="2">${t('fn.edit')}</button>
    </div>`;
}

function renderFunnel(opts) {
  const root = $('#funnel');
  if (!root) return;
  const html = [null, renderStep1, renderStep2, renderStep3, renderStep4][state.step]();
  root.innerHTML = html;
  bindFunnel();
  if (opts && opts.focus) {
    const title = $('#fnTitle');
    if (title) title.focus({ preventScroll: true });
  }
  if (opts && opts.scroll) scrollToFunnel();
}

function scrollToFunnel() {
  const el = $('#book');
  if (!el) return;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

function goStep(n, opts) {
  state.step = n;
  state.error = '';
  renderFunnel(Object.assign({ focus: true }, opts));
  track('funnel_step', { step: n, car: state.car || '' });
}

function chooseCar(id, opts) {
  state.car = id;
  state.callbackAsked = false;
  goStep(2, opts);
}

function bindFunnel() {
  const root = $('#funnel');

  root.querySelectorAll('[data-car]').forEach(btn => {
    btn.addEventListener('click', () => chooseCar(btn.dataset.car, { scroll: needsScroll() }));
  });

  root.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', () => { readFields(); goStep(+btn.dataset.go); });
  });

  const pd = $('#fPickupDate'), rd = $('#fReturnDate');
  if (pd && rd) {
    pd.addEventListener('change', () => {
      state.pickupDate = pd.value;
      if (pd.value) {
        rd.min = pd.value;
        if (!rd.value || rd.value <= pd.value) {
          rd.value = addDays(pd.value, 5);
          state.returnDate = rd.value;
        }
      }
    });
  }

  const f2 = $('#fnForm2');
  if (f2) f2.addEventListener('submit', e => {
    e.preventDefault();
    readFields();
    const a = parseDate(state.pickupDate), b = parseDate(state.returnDate);
    if (!a || !b || !state.pickupTime) { state.error = 'fn.errDates'; return renderFunnel({ focus: false }); }
    if (b <= a) { state.error = 'fn.errOrder'; return renderFunnel({ focus: false }); }
    goStep(3);
  });

  const f3 = $('#fnForm3');
  if (f3) f3.addEventListener('submit', e => {
    e.preventDefault();
    readFields();
    const digits = state.phone.replace(/\D/g, '');
    if (state.name.trim().length < 2 || digits.length < 7) { state.error = 'fn.errContact'; return renderFunnel({ focus: false }); }
    state.name = state.name.trim();
    state.phone = state.phone.trim();
    state.callbackAsked = false;
    saveLead();
    track('lead', { car: state.car });
    goStep(4);
  });

  const cb = $('#fnCallback');
  if (cb) cb.addEventListener('click', () => {
    state.callbackAsked = true;
    saveLead({ callback_requested: 'yes' });
    track('callback_request', { car: state.car });
    renderFunnel({ focus: false });
  });
}

/* Copy whatever is on screen into state so Back / language switch keeps it */
function readFields() {
  const v = id => { const el = document.getElementById(id); return el ? el.value : null; };
  const set = (key, id) => { const val = v(id); if (val !== null) state[key] = val; };
  set('pickupLoc', 'fPickupLoc');
  set('returnLoc', 'fReturnLoc');
  set('pickupDate', 'fPickupDate');
  set('pickupTime', 'fPickupTime');
  set('returnDate', 'fReturnDate');
  set('name', 'fName');
  set('phone', 'fPhone');
}

/* Only scroll when the funnel title is hidden under the header or off screen */
function needsScroll() {
  const el = $('#book');
  if (!el) return false;
  const top = el.getBoundingClientRect().top;
  return top < 60 || top > window.innerHeight * 0.5;
}

/* ---------- Static sections ---------- */
function renderFleet() {
  const grid = $('#fleetGrid');
  if (!grid) return;
  grid.innerHTML = CARS.map(c => `
    <article class="fleet-card">
      <img src="${c.img}" alt="${esc(c.models)}" width="640" height="400" loading="lazy" />
      <div class="fleet-body">
        <div class="fleet-row">
          <h3>${t('car.' + c.id)}</h3>
          <span class="fleet-price">${t('car.from')} <b>$${c.rate}</b>${t('car.perDay')}</span>
        </div>
        <p class="fleet-models">${c.models}</p>
        <p class="fleet-blurb">${t('car.' + c.id + '.seats')}. ${t('car.' + c.id + '.blurb')}</p>
        <div class="fleet-spacer"></div>
        <button type="button" class="btn btn-navy btn-block" data-fleet="${c.id}">${t('fleet.cta')}</button>
      </div>
    </article>`).join('');
  grid.querySelectorAll('[data-fleet]').forEach(btn => {
    btn.addEventListener('click', () => { readFields(); chooseCar(btn.dataset.fleet, { scroll: true }); });
  });
}

function renderReviews() {
  const grid = $('#reviewsGrid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(r => `
    <figure class="review">
      <div class="review-stars" aria-label="5 / 5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <blockquote>${esc(r[lang] || r.en)}</blockquote>
      <cite>${esc(r.name)}<span>${t('reviews.source')}</span></cite>
    </figure>`).join('');
}

function renderFaq() {
  const list = $('#faqList');
  if (!list) return;
  list.innerHTML = (FAQ[lang] || FAQ.en).map(([q, a]) => `
    <details class="faq-item">
      <summary>${esc(q)}</summary>
      <p>${esc(a)}</p>
    </details>`).join('');
}

/* ---------- Language ---------- */
function applyLanguage(next) {
  readFields();
  lang = T[next] ? next : 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  document.querySelectorAll('a[data-wa]').forEach(a => { a.href = waLink(t('wa.general')); });
  renderFunnel();
  renderFleet();
  renderReviews();
  renderFaq();
  try { localStorage.setItem('pg-lang', lang); } catch (e) {}
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem('pg-lang');
    if (saved && T[saved]) return saved;
  } catch (e) {}
  return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  ['googleLinkHero', 'googleLinkReviews'].forEach(id => {
    const a = document.getElementById(id);
    if (a) a.href = GOOGLE_REVIEWS_URL;
  });

  document.querySelectorAll('.lang button').forEach(b => {
    b.addEventListener('click', () => applyLanguage(b.dataset.lang));
  });

  const barPrice = $('#barPrice');
  if (barPrice) barPrice.addEventListener('click', scrollToFunnel);

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-track]');
    if (el) track(el.dataset.track, { car: state.car || '' });
  });

  applyLanguage(initialLanguage());
});
