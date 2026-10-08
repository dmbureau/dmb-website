// This is Zoho's publishable web-to-lead form configuration, not an OAuth credential.
type WebsiteEnquiry = {name:string;email:string;company:string;website:string;market:string;industry:string;service:string;package:string;budget:string;problem:string};
export async function sendEnquiryToZoho(values:WebsiteEnquiry,reference:string):Promise<boolean>{
 const body=new URLSearchParams({
  xnQsjsdp:'2a9cebe37350f095a1f0e4b312f4253eaac2033738b25b0edbfd79c29d1517b3',
  xmIwtLD:'03bfefd8cc6895f5fae2a736c3fd24d2a6bdfce296cbf71ed6a031b3252df218ab8486f31820b46177d3d928e176d8f4',
  actionType:'TGVhZHM=',returnURL:'https://dmbureau.cloud/contact',zc_gad:'',aG9uZXlwb3Q:'',
  Company:values.company||'Individual enquiry','Last Name':values.name,Email:values.email,Website:values.website,
  Description:['DMB website enquiry', 'Reference: '+reference,'Market: '+values.market,'Industry: '+(values.industry||'Not selected'),'Service: '+(values.service||'Not selected'),'Package: '+(values.package||'Not selected'),'Budget: '+(values.budget||'Not provided'),'','Business challenge:',values.problem].join('\n')
 });
 try{
  const response=await fetch('https://crm.zoho.in/crm/WebToLeadForm',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','Referer':'https://dmbureau.cloud/','Origin':'https://dmbureau.cloud'},body:body.toString(),redirect:'manual',signal:AbortSignal.timeout(8000)});
  // A HTTP acknowledgement is not proof of inbox delivery; verify records in CRM.
  return response.status>=200&&response.status<400;
 }catch{return false}
}
