// Supply approved business details here. Never substitute a made-up phone number.
export const business = {
  name: 'Bengal Garden Nursery',
  preview: true,
  whatsapp: '', // International format, digits only, e.g. 91 followed by the number.
  phone: '',
  address: '',
  hours: '',
  map: '',
  deliveryAreas: [] as string[],
};
export const enquiry = (interest = 'plants for my space') => business.whatsapp
  ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hello, I am interested in ${interest}. My location or PIN code is [location]. Please share current availability, price, size, and delivery details.`)}`
  : '#contact';
