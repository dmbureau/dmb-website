export const motionThemes = ['strategy','search','advertising','social','conversion','analytics','global','real-estate','hospitality','healthcare','travel','saas','ecommerce','professional','education','recruitment','logistics','energy'] as const;
export type MotionTheme = typeof motionThemes[number];
export function motionTheme(name:string):MotionTheme {
 const n=name.toLowerCase();
 if(/international|market|global/.test(n))return 'global';
 if(/real-estate|home-services/.test(n))return 'real-estate';
 if(/hospitality/.test(n))return 'hospitality';
 if(/healthcare/.test(n))return 'healthcare';
 if(/travel/.test(n))return 'travel';
 if(/saas/.test(n))return 'saas';
 if(/ecommerce/.test(n))return 'ecommerce';
 if(/education/.test(n))return 'education';
 if(/recruitment/.test(n))return 'recruitment';
 if(/logistics/.test(n))return 'logistics';
 if(/solar|energy/.test(n))return 'energy';
 if(/professional/.test(n))return 'professional';
 if(/analytics|tracking|measure-qualified|lead-quality/.test(n))return 'analytics';
 if(/paid-social|linkedin-advertising|ads|advertising|ppc|retarget|performance-marketing|clicks-but/.test(n))return 'advertising';
 if(/social/.test(n))return 'social';
 if(/conversion|landing|website|speed|traffic-but|home-priority|email|automation|b2b/.test(n))return 'conversion';
 if(/seo|search|google-business|organic|content/.test(n))return 'search';
 return 'strategy';
}
export function motionUrl(name:string,still=false){return '/animations/'+motionTheme(name)+(still?'.webp':'.gif')}
export const motionAlt:Record<MotionTheme,string>={strategy:'Animated illustration of a marketing plan connecting customer needs, channels and enquiries',search:'Animated search results illustration connecting a relevant service page to a customer enquiry',advertising:'Animated paid advertising illustration showing targeting, an ad and a matching landing page',social:'Animated social media content illustration with connected posts and conversations',conversion:'Animated landing page illustration guiding a visitor towards a clear enquiry form',analytics:'Animated measurement illustration connecting search, advertising and enquiries',global:'Animated globe illustration connecting an India-based marketing team with international markets','real-estate':'Animated property marketing illustration connecting a home listing with a viewing enquiry',hospitality:'Animated hotel marketing illustration connecting accommodation discovery with a booking enquiry',healthcare:'Animated healthcare marketing illustration connecting a clinic service with an appointment enquiry',travel:'Animated travel marketing illustration connecting destinations with a trip enquiry',saas:'Animated SaaS marketing illustration showing product discovery and a demo request',ecommerce:'Animated ecommerce marketing illustration showing product discovery and checkout',professional:'Animated professional services illustration connecting expertise with a business enquiry',education:'Animated education marketing illustration showing course discovery and an admission enquiry',recruitment:'Animated recruitment marketing illustration connecting role requirements with suitable candidates',logistics:'Animated logistics marketing illustration connecting service coverage with a delivery quote',energy:'Animated solar marketing illustration connecting an installation enquiry with a property assessment'};
