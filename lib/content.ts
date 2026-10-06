import servicesData from '@/content/services.json';
export const services = servicesData.services;
import industriesData from '@/content/industries.json';
export const industries = industriesData.industries;
export const groups = ["All services","Online advertising","Google search & content","Website improvements","Tracking & reports","Business enquiries & follow-up","Social media"];
export type Service = typeof services[number];
export type Industry = typeof industries[number];
