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

const CARS = [
  { id: 'sedan',   rate: 55,  img: 'img/sedan.jpg', models: 'Kia Forte' },
  { id: 'suv',     rate: 75,  img: 'img/suv.jpg', models: 'Toyota RAV4, VW Tiguan' },
  { id: 'minivan', rate: 95,  img: 'img/minivan.jpg', models: 'Honda Odyssey, Toyota Sienna, Chrysler Pacifica' },
  { id: 'luxury',  rate: 160, img: 'img/luxury.jpg', models: 'Cadillac Escalade, Chevrolet Suburban' }
];

const LOCATIONS = ['mia', 'fll', 'portmia', 'portfll', 'hotel'];

/* Icons: Phosphor (bold, star is fill), inlined so nothing extra loads */
const ICON_PATHS = {
  'pause': '<path d="M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"/>',
  'play': '<path d="M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"/>',
  'airplane-landing': '<path d="M256,216a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24H244A12,12,0,0,1,256,216Zm-27.24-24.45L52.14,142.09A44.13,44.13,0,0,1,20,99.72V48A20,20,0,0,1,46.32,29l5.48,1.83a12,12,0,0,1,7.49,7.3L69.2,65.59,92,72.09V48a20,20,0,0,1,26.32-19l5.48,1.83a12,12,0,0,1,7.27,6.74l21.75,51.85,59,16.49A44.12,44.12,0,0,1,244,148.32V180a12,12,0,0,1-15.24,11.55ZM220,148.32a20.05,20.05,0,0,0-14.65-19.27L140.77,111a12,12,0,0,1-7.84-6.91L116,63.71V88a12,12,0,0,1-15.29,11.54L56.71,87a12,12,0,0,1-8-7.46L44,66.48V99.72A20.07,20.07,0,0,0,58.61,119L220,164.18Z"/>',
  'arrow-left': '<path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"/>',
  'caret-right': '<path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"/>',
  'check': '<path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"/>',
  'coins': '<path d="M188,86.11V84c0-14.62-10.83-27.55-30.51-36.4C140.87,40.12,119,36,96,36S51.13,40.12,34.51,47.6C14.83,56.45,4,69.38,4,84v40c0,14.62,10.83,27.55,30.51,36.4A131.67,131.67,0,0,0,68,169.88V172c0,14.62,10.83,27.55,30.51,36.4C115.13,215.88,137,220,160,220s44.87-4.12,61.49-11.6C241.17,199.55,252,186.62,252,172V132C252,109.86,226.71,92.08,188,86.11ZM228,132c0,7.75-21.77,22.48-61.81,23.88C180.33,147.4,188,136.3,188,124V110.44C213.88,115.15,228,125.48,228,132ZM107.37,147.63c-3.63.24-7.42.37-11.37.37-5.08,0-9.89-.22-14.43-.61a10.94,10.94,0,0,0-1.14-.09c-1.51-.14-3-.3-4.43-.48V130.93A187,187,0,0,0,96,132a187,187,0,0,0,20-1.07v15.89c-2.49.3-5.07.56-7.75.75C108,147.58,107.66,147.6,107.37,147.63ZM164,117.14V124c0,4.78-8.28,12.21-24,17.54v-15a115.32,115.32,0,0,0,17.49-6.13Q160.93,118.86,164,117.14ZM96,60c44,0,68,15.85,68,24s-24,24-68,24S28,92.15,28,84,52,60,96,60ZM28,124v-6.86q3.08,1.71,6.51,3.26A115.32,115.32,0,0,0,52,126.53v15C36.28,136.21,28,128.78,28,124Zm64,48v0c1.33,0,2.66,0,4,0q5.44,0,10.77-.32,4.45,1.57,9.23,2.86v15C100.28,184.21,92,176.78,92,172Zm48,22.82V178.94A186.45,186.45,0,0,0,160,180a187,187,0,0,0,20-1.07v15.89a170.08,170.08,0,0,1-40,0Zm64-5.28v-15a115.32,115.32,0,0,0,17.49-6.13q3.44-1.54,6.51-3.26V172C228,176.78,219.72,184.21,204,189.54Z"/>',
  'key': '<path d="M196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Zm48,22.74A84.3,84.3,0,0,1,160.11,180H160a83.52,83.52,0,0,1-23.65-3.38l-7.86,7.87A12,12,0,0,1,120,188H108v12a12,12,0,0,1-12,12H84v12a12,12,0,0,1-12,12H40a20,20,0,0,1-20-20V187.31a19.86,19.86,0,0,1,5.86-14.14l53.52-53.52A84,84,0,1,1,244,98.74ZM202.43,53.57A59.48,59.48,0,0,0,158,36c-32,1-58,27.89-58,59.89a59.69,59.69,0,0,0,4.2,22.19,12,12,0,0,1-2.55,13.21L44,189v23H60V200a12,12,0,0,1,12-12H84V176a12,12,0,0,1,12-12h19l9.65-9.65a12,12,0,0,1,13.22-2.55A59.58,59.58,0,0,0,160,156h.08c32,0,58.87-26.07,59.89-58A59.55,59.55,0,0,0,202.43,53.57Z"/>',
  'map-pin': '<path d="M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"/>',
  'phone': '<path d="M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"/>',
  'road-horizon': '<path d="M237.88,202.46a12,12,0,0,1-16.34-4.58L153,76H140v4a12,12,0,0,1-24,0V76H103L34.46,197.88a12,12,0,1,1-20.92-11.76L75.48,76H24a12,12,0,0,1,0-24H232a12,12,0,0,1,0,24H180.52l61.94,110.12A12,12,0,0,1,237.88,202.46ZM128,108a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V120A12,12,0,0,0,128,108Zm0,56a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V176A12,12,0,0,0,128,164Z"/>',
  'shield-check': '<path d="M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36Zm-4,76c0,35.71-13.09,64.69-38.91,86.15A126.28,126.28,0,0,1,128,219.38a126.14,126.14,0,0,1-37.09-21.23C65.09,176.69,52,147.71,52,112V60H204ZM79.51,144.49a12,12,0,1,1,17-17L112,143l47.51-47.52a12,12,0,0,1,17,17l-56,56a12,12,0,0,1-17,0Z"/>',
  'star': '<path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"/>',
  'steering-wheel': '<path d="M144,144a16,16,0,1,1-16-16A16,16,0,0,1,144,144Zm92-16A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-70.45,28h41.63c.79-2.21,1.49-4.47,2.09-6.76a116,116,0,0,0-162.54,0q.9,3.44,2.09,6.76H90.45a20.07,20.07,0,0,1,18.73,13l16.06,42.93c.92,0,1.83.07,2.76.07s1.82,0,2.72-.07l16.1-43A20.09,20.09,0,0,1,165.55,156ZM44.41,119.73a139.85,139.85,0,0,1,167.18,0,84,84,0,0,0-167.18,0Zm53.08,86.51L87.68,180H62.1A84.46,84.46,0,0,0,97.49,206.24ZM193.9,180H168.32l-9.84,26.25A84.35,84.35,0,0,0,193.9,180Z"/>',
  'users': '<path d="M125.18,156.94a64,64,0,1,0-82.36,0,100.23,100.23,0,0,0-39.49,32,12,12,0,0,0,19.35,14.2,76,76,0,0,1,122.64,0,12,12,0,0,0,19.36-14.2A100.33,100.33,0,0,0,125.18,156.94ZM44,108a40,40,0,1,1,40,40A40,40,0,0,1,44,108Zm206.1,97.67a12,12,0,0,1-16.78-2.57A76.31,76.31,0,0,0,172,172a12,12,0,0,1,0-24,40,40,0,1,0-10.3-78.67,12,12,0,1,1-6.16-23.19,64,64,0,0,1,57.64,110.8,100.23,100.23,0,0,1,39.49,32A12,12,0,0,1,250.1,205.67Z"/>',
  'whatsapp-logo': '<path d="M187.3,159.06A36.09,36.09,0,0,1,152,188a84.09,84.09,0,0,1-84-84A36.09,36.09,0,0,1,96.94,68.7,12,12,0,0,1,110,75.1l11.48,23a12,12,0,0,1-.75,12l-8.52,12.78a44.56,44.56,0,0,0,20.91,20.91l12.78-8.52a12,12,0,0,1,12-.75l23,11.48A12,12,0,0,1,187.3,159.06ZM236,128A108,108,0,0,1,78.77,224.15L46.34,235A20,20,0,0,1,21,209.66l10.81-32.43A108,108,0,1,1,236,128Zm-24,0A84,84,0,1,0,55.27,170.06a12,12,0,0,1,1,9.81l-9.93,29.79,29.79-9.93a12.1,12.1,0,0,1,3.8-.62,12,12,0,0,1,6,1.62A84,84,0,0,0,212,128Z"/>',
};

function icon(name) {
  return '<svg class="ic" viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor" aria-hidden="true">' + (ICON_PATHS[name] || '') + '</svg>';
}

/* ---------- Translations ---------- */
const T = {
  en: {
    'preview.note': 'Preview only. Prices are samples and photos are placeholders.',

    'hero.title': 'Your rental car, waiting at arrivals.',
    'hero.sub': 'We deliver to MIA, FLL, the cruise ports and your hotel. Insurance, tolls and delivery are in the price.',
    'hero.callLabel': 'Call to reserve',

    'nav.cars': 'Cars',
    'nav.pickup': 'Pickup',
    'nav.reviews': 'Reviews',
    'nav.faq': 'Questions',

    'facts.google': 'on Google, 21 reviews',
    'facts.hours': 'pickup, any day of the year',
    'facts.places': 'both cruise ports and hotels',
    'facts.langBig': 'EN / ES',
    'facts.lang': 'we answer in both',

    'covers.title': 'What your price covers',
    'covers.lede': 'Your quote includes taxes and everything below. We hold a refundable security deposit at pickup.',
    'covers.i1': 'Collision and liability insurance',
    'covers.i2': 'Unlimited miles within Florida',
    'covers.i3': 'Tolls, with no SunPass to buy',
    'covers.i4': 'One additional driver',
    'covers.i5': 'Delivery to the airport, port or hotel',

    'fleet.title': 'Choose your car',
    'fleet.lede': 'Ten vehicles, from a compact sedan to a Cadillac Escalade.',
    'fleet.photoNote': 'Photos show the type of vehicle, not the exact model. Your car will be one of the models listed.',
    'fleet.cta': 'Get price',

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

    'reviews.title': '21 reviews on Google',
    'reviews.note': 'Excerpts from public Google reviews. Some are translated.',
    'reviews.link': 'Read every review',
    'reviews.source': 'Google review',

    'faq.title': 'Questions',

    'closing.title': 'Questions before you book? Call us.',
    'closing.sub': 'Talk to a person, in English or Spanish, before you pay anything.',
    'closing.call': 'Call ' + PHONE_DISPLAY,
    'closing.wa': 'Message on WhatsApp',

    'footer.area': 'Car rental in Miami and Fort Lauderdale. Based in Weston, Florida.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
    'footer.refunds': 'Refund Policy',
    'footer.cookies': 'Cookie Policy',

    'doc.title': 'Pick & Go Rent A Car | Car rental in Miami and Fort Lauderdale',
    'a11y.skip': 'Skip to booking',
    'a11y.newTab': '(opens in a new tab)',
    'a11y.english': 'English',
    'a11y.spanish': 'Spanish',
    'video.pause': 'Pause background video',
    'video.play': 'Play background video',
    'alt.sedan': 'White sedan parked beside the ocean',
    'alt.suv': 'Silver SUV parked in front of trees',
    'alt.minivan': 'Gray minivan seen from behind',
    'alt.luxury': 'Black full-size SUV in a dark setting',
    'alt.drive': 'Open highway under a cloudy sky, seen from the road',

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
    'fn.contactNote': 'By continuing you agree that we may call, text or WhatsApp you at this number about this quote. We send no marketing. See our <a href="privacy.html">Privacy Policy</a>.',
    'fn.errDates': 'Choose your pickup date, time and return date.',
    'fn.errOrder': 'The return date has to be after the pickup date.',
    'fn.errContact': 'Enter your name and a phone number we can reach.',
    'fn.day': 'day',
    'fn.days': 'days',
    'fn.total': 'Estimated total',
    'fn.rateLine': '${rate} per day for {days}.',
    'fn.sample': 'Sample price for this preview.',
    'fn.confirm': 'This is an estimate. We confirm your final price, taxes included, before you pay.',
    'fn.refund': 'Reservations are non-refundable. You can move your dates if you tell us 2 days ahead. <a href="refunds.html">Refund Policy</a>',
    'fn.i1': 'Insurance, tolls and delivery included',
    'fn.i2': 'Unlimited miles within Florida',
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
    'hero.callLabel': 'Llama y reserva',

    'nav.cars': 'Autos',
    'nav.pickup': 'Entrega',
    'nav.reviews': 'Reseñas',
    'nav.faq': 'Preguntas',

    'facts.google': 'en Google, 21 reseñas',
    'facts.hours': 'entregas, todos los días del año',
    'facts.places': 'los dos puertos y hoteles',
    'facts.langBig': 'ES / EN',
    'facts.lang': 'atendemos en ambos',

    'covers.title': 'Lo que cubre tu precio',
    'covers.lede': 'Tu cotización incluye impuestos y todo lo de abajo. En la entrega retenemos un depósito reembolsable.',
    'covers.i1': 'Seguro de colisión y responsabilidad civil',
    'covers.i2': 'Millaje ilimitado dentro de Florida',
    'covers.i3': 'Peajes, sin comprar SunPass',
    'covers.i4': 'Un conductor adicional',
    'covers.i5': 'Entrega en aeropuerto, puerto u hotel',

    'fleet.title': 'Elige tu auto',
    'fleet.lede': 'Diez vehículos, desde un sedán compacto hasta una Cadillac Escalade.',
    'fleet.photoNote': 'Las fotos muestran el tipo de vehículo, no el modelo exacto. Tu auto será uno de los modelos indicados.',
    'fleet.cta': 'Ver precio',

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

    'reviews.title': '21 reseñas en Google',
    'reviews.note': 'Extractos de reseñas públicas de Google. Algunas están traducidas.',
    'reviews.link': 'Lee todas las reseñas',
    'reviews.source': 'Reseña de Google',

    'faq.title': 'Preguntas',

    'closing.title': '¿Dudas antes de reservar? Llámanos.',
    'closing.sub': 'Habla con una persona, en español o inglés, antes de pagar.',
    'closing.call': 'Llama al ' + PHONE_DISPLAY,
    'closing.wa': 'Escribe por WhatsApp',

    'footer.area': 'Renta de autos en Miami y Fort Lauderdale. Con base en Weston, Florida.',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos y condiciones',
    'footer.refunds': 'Política de reembolsos',
    'footer.cookies': 'Política de cookies',

    'doc.title': 'Pick & Go Rent A Car | Renta de autos en Miami y Fort Lauderdale',
    'a11y.skip': 'Ir a la reserva',
    'a11y.newTab': '(se abre en una pestaña nueva)',
    'a11y.english': 'Inglés',
    'a11y.spanish': 'Español',
    'video.pause': 'Pausar el video de fondo',
    'video.play': 'Reproducir el video de fondo',
    'alt.sedan': 'Sedán blanco estacionado junto al mar',
    'alt.suv': 'SUV plateada estacionada frente a unos árboles',
    'alt.minivan': 'Minivan gris vista desde atrás',
    'alt.luxury': 'SUV negra de tamaño completo en un entorno oscuro',
    'alt.drive': 'Carretera despejada bajo un cielo nublado, vista desde el camino',

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
    'fn.contactNote': 'Al continuar aceptas que te llamemos o te escribamos por SMS o WhatsApp a este número sobre esta cotización. No enviamos publicidad. Consulta nuestra <a href="privacy.html">Política de privacidad</a>.',
    'fn.errDates': 'Elige la fecha y hora de entrega y la fecha de devolución.',
    'fn.errOrder': 'La devolución tiene que ser después de la entrega.',
    'fn.errContact': 'Escribe tu nombre y un teléfono donde podamos ubicarte.',
    'fn.day': 'día',
    'fn.days': 'días',
    'fn.total': 'Total estimado',
    'fn.rateLine': '${rate} por día, {days}.',
    'fn.sample': 'Precio de muestra para esta vista previa.',
    'fn.confirm': 'Es un estimado. Confirmamos tu precio final, con impuestos, antes de que pagues.',
    'fn.refund': 'Las reservas no son reembolsables. Puedes cambiar tus fechas si avisas con 2 días de anticipación. <a href="refunds.html">Política de reembolsos</a>',
    'fn.i1': 'Seguro, peajes y entrega incluidos',
    'fn.i2': 'Millaje ilimitado dentro de Florida',
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

/* Excerpts from real Google reviews, kept short */
const REVIEWS = [
  { name: 'Erika Saavedra',
    en: 'They were punctual with deliveries, always available, and sent clear instructions for pickup and drop-off at the port and the airports.',
    es: 'Fueron puntuales, siempre al pendiente y me enviaron indicaciones claras para recoger y dejar los autos en el puerto y los aeropuertos.' },
  { name: 'Mariano Leon',
    en: 'Very professional service and spotless, new cars. I rented a van for a week and everything was great.',
    es: 'Servicio muy profesional y autos impecables y nuevos. Alquilé una camioneta por una semana y todo estuvo perfecto.' },
  { name: 'Renato Mendoza',
    en: 'They delivered the car to the Port of Miami exactly when I needed it. New and reliable vehicles.',
    es: 'Me lo dejaron en el Puerto de Miami con los horarios que necesitaba. Vehículos nuevos y sobre todo confiables.' },
  { name: 'Francesco P.',
    en: 'Outstanding service as usual, car is spotless, new and always on time and stress free.',
    es: 'Servicio excepcional como siempre, el auto impecable, nuevo y siempre puntual. Sin estrés.' }
];

const FAQ = {
  en: [
    ['What do I need to rent?', "The driver must be 21 or older, with a valid license from any country (Latin alphabet) and a major credit card in their own name. We may hold a refundable security deposit at pickup."],
    ['Is insurance included?', 'Yes. Collision and liability insurance come with every rental. Your rental agreement lists the coverage limits and any deductible.'],
    ['Where can I pick up the car?', 'Miami International (MIA), Fort Lauderdale (FLL), Port of Miami, Port Everglades, or your hotel or residence. At the airports we meet you at arrivals, so you skip the shuttle and the counter.'],
    ['How do I pay?', "With any major credit card in the main driver's name. We hold a refundable security deposit at pickup and release it when you return the car."],
    ['Can I change my reservation?', 'You can move it to another date if you tell us at least 2 days before pickup. The amount you paid stays as credit toward the new dates. Reservations are non-refundable.'],
    ['What does the price cover?', 'Collision and liability insurance, unlimited miles within Florida, tolls (no SunPass needed), one additional driver, and delivery to the airport, port or hotel. You pay the amount on your quote.'],
    ['What if my flight is delayed?', 'We track your flight and show up when you land, early or late. Delays cost you nothing extra.'],
    ['Do you rent by the week or month?', 'Yes, and both come with a discount. Call us with your dates and we will quote it.']
  ],
  es: [
    ['¿Qué necesito para rentar?', 'El conductor debe tener 21 años o más, una licencia vigente de cualquier país (alfabeto latino) y una tarjeta de crédito a su nombre. Podemos retener un depósito reembolsable en la entrega.'],
    ['¿El seguro está incluido?', 'Sí. Cada renta incluye seguro de colisión y responsabilidad civil. Tu contrato de renta indica los límites de cobertura y cualquier deducible.'],
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
let lastRenderedStep = 0;
let badFields = [];

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

/* Attributes for a required field; marks it invalid and points at the error text */
function req(id) {
  return 'required aria-required="true"' + (badFields.includes(id) ? ' aria-invalid="true" aria-describedby="fnErr"' : '');
}

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
      <span><strong>${t('car.' + car.id)}</strong>, ${t('car.from')} $${car.rate}${t('car.perDay')}</span>
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
        <span class="car-opt-meta car-opt-seats">${icon('users')} ${t('car.' + c.id + '.seats')}</span>
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
          <input type="date" id="fPickupDate" min="${today}" value="${state.pickupDate}" ${req('fPickupDate')} />
        </div>
        <div class="field">
          <label for="fPickupTime">${t('fn.pickupTime')}</label>
          <select id="fPickupTime" ${req('fPickupTime')}>${times}</select>
        </div>
        <div class="field">
          <label for="fReturnDate">${t('fn.returnDate')}</label>
          <input type="date" id="fReturnDate" min="${state.pickupDate || today}" value="${state.returnDate}" ${req('fReturnDate')} />
        </div>
        <div class="field">
          <label for="fReturnLoc">${t('fn.returnLoc')}</label>
          <select id="fReturnLoc">
            <option value="same"${state.returnLoc === 'same' ? ' selected' : ''}>${t('fn.same')}</option>
            ${locOpts(state.returnLoc)}
          </select>
        </div>
      </div>
      ${state.error ? `<p class="fn-error" id="fnErr" role="alert">${t(state.error)}</p>` : ''}
      <div class="fn-actions">
        <button type="button" class="btn btn-ghost" data-go="1" aria-label="${t('fn.back')}">${icon('arrow-left')}</button>
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
          <input type="text" id="fName" autocomplete="name" value="${esc(state.name)}" ${req('fName')} />
        </div>
        <div class="field field-full">
          <label for="fPhone">${t('fn.phone')}</label>
          <input type="tel" id="fPhone" autocomplete="tel" inputmode="tel" value="${esc(state.phone)}" ${req('fPhone')} />
        </div>
      </div>
      ${state.error ? `<p class="fn-error" id="fnErr" role="alert">${t(state.error)}</p>` : ''}
      <div class="fn-actions">
        <button type="button" class="btn btn-ghost" data-go="2" aria-label="${t('fn.back')}">${icon('arrow-left')}</button>
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
          <p class="quote-models">${car.models}</p>
        </div>
      </div>
      <dl class="quote-trip">
        <div><dt>${t('fn.pickupLoc')}</dt><dd>${niceDate(state.pickupDate)}, ${state.pickupTime}<br/>${t('loc.' + state.pickupLoc)}</dd></div>
        <div><dt>${t('fn.returnLoc')}</dt><dd>${niceDate(state.returnDate)}${sameReturn ? '' : '<br/>' + t('loc.' + returnLocKey())}</dd></div>
      </dl>
      <div class="quote-total">
        <span>${t('fn.total')}</span>
        <b>$${total.toLocaleString('en-US')}</b>
      </div>
    </div>
    <p class="quote-note">${t('fn.rateLine', { rate: car.rate, days: daysLabel(days) })} ${t('fn.confirm')}${SAMPLE_RATES ? ' ' + t('fn.sample') : ''}</p>
    <ul class="quote-incl">
      <li>${icon('check')}<span>${t('fn.i1')}</span></li>
      <li>${icon('check')}<span>${t('fn.i2')}</span></li>
    </ul>
    <div class="quote-actions">
      <a class="btn btn-primary btn-lg btn-block" href="tel:${PHONE_TEL}" data-track="call_quote">${icon('phone')}<span>${t('fn.call')}</span></a>
      <a class="btn btn-wa btn-block" href="${waLink(quoteMessage())}" target="_blank" rel="noopener" data-track="wa_quote">${icon('whatsapp-logo')}<span>${t('fn.wa')} <span class="sr-only">${t('a11y.newTab')}</span></span></a>
    </div>
    <p class="fn-small fn-refund">${t('fn.refund')}</p>
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
  root.classList.remove('fn-enter');
  if (lastRenderedStep && lastRenderedStep !== state.step) {
    void root.offsetWidth;
    root.classList.add('fn-enter');
  }
  lastRenderedStep = state.step;
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

/* Re-render with the error shown and put focus on the first field that needs fixing */
function failStep() {
  renderFunnel({ focus: false });
  const first = document.getElementById(badFields[0]);
  if (first) first.focus();
}

function goStep(n, opts) {
  state.step = n;
  state.error = '';
  badFields = [];
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
    badFields = [];
    if (!a) badFields.push('fPickupDate');
    if (!state.pickupTime) badFields.push('fPickupTime');
    if (!b) badFields.push('fReturnDate');
    if (badFields.length) { state.error = 'fn.errDates'; return failStep(); }
    if (b <= a) { badFields = ['fReturnDate']; state.error = 'fn.errOrder'; return failStep(); }
    goStep(3);
  });

  const f3 = $('#fnForm3');
  if (f3) f3.addEventListener('submit', e => {
    e.preventDefault();
    readFields();
    const digits = state.phone.replace(/\D/g, '');
    badFields = [];
    if (state.name.trim().length < 2) badFields.push('fName');
    if (digits.length < 7) badFields.push('fPhone');
    if (badFields.length) { state.error = 'fn.errContact'; return failStep(); }
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
      <div class="fleet-photo"><img src="${c.img}" alt="${esc(t('alt.' + c.id))}" width="800" height="500" loading="lazy" /></div>
      <div class="fleet-body">
        <h3>${t('car.' + c.id)}</h3>
        <p class="fleet-models">${c.models}</p>
        <p class="fleet-blurb">${t('car.' + c.id + '.blurb')}</p>
        <p class="fleet-seats">${icon('users')} ${t('car.' + c.id + '.seats')}</p>
        <div class="fleet-foot">
          <span class="fleet-price">${t('car.from')} <b>$${c.rate}</b>${t('car.perDay')}</span>
          <button type="button" class="btn btn-navy" data-fleet="${c.id}">${t('fleet.cta')}${icon('caret-right')}</button>
        </div>
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
      <blockquote>“${esc(r[lang] || r.en)}”</blockquote>
      <figcaption>${esc(r.name)}<span>${t('reviews.source')}</span></figcaption>
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

/* ---------- Background video control ---------- */
function syncVideoButton() {
  const btn = $('#videoToggle'), v = $('.hero-video');
  if (!btn || !v) return;
  const paused = v.paused;
  btn.innerHTML = icon(paused ? 'play' : 'pause');
  btn.setAttribute('aria-label', t(paused ? 'video.play' : 'video.pause'));
}

/* ---------- Language ---------- */
function applyLanguage(next) {
  readFields();
  lang = T[next] ? next : 'en';
  document.documentElement.lang = lang;
  document.title = t('doc.title');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.setAttribute('alt', t(el.dataset.i18nAlt)); });
  syncVideoButton();
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
  document.documentElement.classList.add('js');

  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  const stars = $('#scoreStars');
  if (stars) stars.innerHTML = icon('star').repeat(5);

  ['googleLinkFacts', 'googleLinkReviews'].forEach(id => {
    const a = document.getElementById(id);
    if (a) a.href = GOOGLE_REVIEWS_URL;
  });

  document.querySelectorAll('.lang button').forEach(b => {
    b.addEventListener('click', () => applyLanguage(b.dataset.lang));
  });

  const video = $('.hero-video'), videoBtn = $('#videoToggle');
  if (video && videoBtn) {
    videoBtn.addEventListener('click', () => { if (video.paused) video.play().catch(() => {}); else video.pause(); });
    video.addEventListener('play', syncVideoButton);
    video.addEventListener('pause', syncVideoButton);
  }

  const barPrice = $('#barPrice');
  if (barPrice) barPrice.addEventListener('click', scrollToFunnel);

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-track]');
    if (el) track(el.dataset.track, { car: state.car || '' });
  });

  applyLanguage(initialLanguage());

  /* Sections fade up once as they enter the viewport */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('main > section:not(.hero)').forEach(el => { el.classList.add('reveal'); io.observe(el); });
  }
});
