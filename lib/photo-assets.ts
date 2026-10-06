import heroAnalytics from '@/assets/photos/hero-marketing-analytics.jpg?url';
import photo0 from '@/assets/photos/find-your-business.jpg?url';
import photo1 from '@/assets/photos/industry-hospitality.jpg?url';
import photo2 from '@/assets/photos/industry-saas.jpg?url';
import photo3 from '@/assets/photos/turn-visits-into-enquiries-600.jpg?url';
import photo4 from '@/assets/photos/understand-marketing-results.jpg?url';
import photo5 from '@/assets/photos/reach-right-customers-600.jpg?url';
import photo6 from '@/assets/photos/reach-right-customers.jpg?url';
import photo7 from '@/assets/photos/industry-healthcare.jpg?url';
import photo8 from '@/assets/photos/customer-next-step.jpg?url';
import photo9 from '@/assets/photos/industry-travel.jpg?url';
import photo10 from '@/assets/photos/understand-marketing-results-600.jpg?url';
import photo11 from '@/assets/photos/industry-real-estate.jpg?url';
import photo12 from '@/assets/photos/customer-next-step-600.jpg?url';
import photo13 from '@/assets/photos/turn-visits-into-enquiries.jpg?url';
import photo14 from '@/assets/photos/industry-ecommerce.jpg?url';
import photo15 from '@/assets/photos/find-your-business-600.jpg?url';
const photos:Record<string,string>={
  'hero-marketing-analytics':heroAnalytics,
  'find-your-business':photo0,
  'industry-hospitality':photo1,
  'industry-saas':photo2,
  'turn-visits-into-enquiries-600':photo3,
  'understand-marketing-results':photo4,
  'reach-right-customers-600':photo5,
  'reach-right-customers':photo6,
  'industry-healthcare':photo7,
  'customer-next-step':photo8,
  'industry-travel':photo9,
  'understand-marketing-results-600':photo10,
  'industry-real-estate':photo11,
  'customer-next-step-600':photo12,
  'turn-visits-into-enquiries':photo13,
  'industry-ecommerce':photo14,
  'find-your-business-600':photo15
};
export function photoUrl(name:string){return photos[name]||photos['customer-next-step-600']}
