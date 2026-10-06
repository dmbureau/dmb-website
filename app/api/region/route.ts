export function GET(request:Request){
 const country=(request as Request & {cf?:{country?:string}}).cf?.country||request.headers.get('cf-ipcountry');
 const valid=country&&/^[A-Z]{2}$/.test(country)&&!['XX','T1'].includes(country)?country:null;
 return Response.json({country:valid},{headers:{'Cache-Control':'private, no-store'}});
}
