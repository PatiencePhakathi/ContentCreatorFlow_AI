import type { ContentType } from '../types';
export interface Template { id:string; name:string; category:string; type:ContentType; description:string; topic:string; tone:string; }
export const templates:Template[]=[
{id:'li-career',name:'Career announcement',category:'LinkedIn',type:'LinkedIn post',description:'Share a career milestone with a polished professional voice.',topic:'A new career milestone',tone:'Professional'},
{id:'li-grad',name:'Graduation announcement',category:'LinkedIn',type:'LinkedIn post',description:'Turn graduation into an authentic, engaging LinkedIn story.',topic:'Graduating and entering the technology industry',tone:'Inspirational'},
{id:'li-job',name:'Job-seeking post',category:'LinkedIn',type:'LinkedIn post',description:'Introduce your skills and what kind of opportunity you are seeking.',topic:'Looking for a junior software development opportunity',tone:'Friendly'},
{id:'li-insight',name:'Industry insight',category:'LinkedIn',type:'LinkedIn post',description:'Share a useful perspective on a technology trend.',topic:'How generative AI is changing software development',tone:'Professional'},
{id:'email-intro',name:'Professional introduction',category:'Email',type:'Professional email',description:'Introduce yourself clearly to a new professional contact.',topic:'Professional introduction and networking',tone:'Formal'},
{id:'email-follow',name:'Follow-up email',category:'Email',type:'Professional email',description:'Follow up after an interview, meeting, or application.',topic:'Following up after a job interview',tone:'Professional'},
{id:'email-network',name:'Networking email',category:'Email',type:'Professional email',description:'Ask for a short conversation or career advice.',topic:'Requesting a brief networking conversation',tone:'Friendly'},
{id:'email-thanks',name:'Thank-you email',category:'Email',type:'Professional email',description:'Send a concise and genuine thank-you note.',topic:'Thanking someone for their time and guidance',tone:'Warm'},
{id:'mkt-promo',name:'Product promotion',category:'Marketing',type:'Marketing copy',description:'Create concise copy for a product or service promotion.',topic:'Promoting a new productivity app',tone:'Persuasive'},
{id:'mkt-campaign',name:'Social media campaign',category:'Marketing',type:'Marketing copy',description:'Create a campaign message with a clear call to action.',topic:'Launching a social media campaign',tone:'Creative'},
{id:'mkt-product',name:'Product description',category:'Marketing',type:'Product description',description:'Describe a product using benefits, features and a clear value proposition.',topic:'A smart reusable water bottle',tone:'Persuasive'}
];
