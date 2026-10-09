from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import math
OUT=Path('public/animations');OUT.mkdir(exist_ok=True)
W,H=720,480
C={'bg':'#eef4ef','ink':'#173e35','mid':'#4e7465','mint':'#b4fd83','cream':'#fffaf0','orange':'#ee9671','white':'#ffffff','line':'#d0e0d4'}
font_path='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
F=lambda n:ImageFont.truetype(font_path,n)
labels={'strategy':('A clearer marketing plan','Understand. Prioritise. Improve.'),'search':('Be found by the right people','Search visibility to useful enquiries.'),'advertising':('Make every ad lead somewhere','Audience. Message. Landing page.'),'social':('Give your business a voice','Relevant content. Real conversations.'),'conversion':('Make the next step easier','A clear offer and a simpler enquiry.'),'analytics':('Connect marketing to enquiries','Measure the customer journey.'),'global':('Based in India. Connected globally.','One bureau. Your market. Your customers.'),'real-estate':('Help buyers find their next home','Property discovery to viewing enquiries.'),'hospitality':('Turn discovery into stay enquiries','Rooms. Experiences. Direct bookings.'),'healthcare':('Make your care easier to find','Clear services and appointment enquiries.'),'travel':('Bring the next journey closer','Destinations to tailored trip enquiries.'),'saas':('Turn product interest into demos','Explain value. Guide the next step.'),'ecommerce':('Move from browsing to buying','Products. Confidence. Checkout.'),'professional':('Put your expertise in front of buyers','Clear services and business enquiries.'),'education':('Help learners choose their next step','Courses to admission enquiries.'),'recruitment':('Connect the right people and roles','Clear requirements. Suitable enquiries.'),'logistics':('Make your service coverage clear','Routes. Requirements. Quote enquiries.'),'energy':('Bring solar enquiries into focus','Property needs to installation plans.')}

def rr(d,b,fill,r=14,outline=None,w=2):d.rounded_rectangle(b,radius=r,fill=fill,outline=outline,width=w)
def text(d,xy,s,n=16,col='ink'):d.text(xy,s,font=F(n),fill=C.get(col,col))
def line(d,pts,col='ink',w=3):d.line(pts,fill=C.get(col,col),width=w,joint='curve')
def circle(d,x,y,r,col):d.ellipse((x-r,y-r,x+r,y+r),fill=C.get(col,col))
def panel(d,x=157,y=158,w=406,h=218):
 rr(d,(x+7,y+10,x+w+7,y+h+10),C['line'],18);rr(d,(x,y,x+w,y+h),C['white'],18)
 rr(d,(x,y,x+w,y+32),C['ink'],14)
 for k,col in enumerate(['orange','mint','cream']):circle(d,x+18+k*14,y+16,3,col)
 text(d,(x+64,y+8),'DIGITAL MARKETING BUREAU',10,'white')
 return x,y+32,w,h-32

def flow(d,t,words=('Discover','Understand','Enquire')):
 y=408
 for i,word in enumerate(words):
  x=126+i*173;rr(d,(x,y,x+135,y+29),C['ink'] if i==int(t*3)%3 else C['white'],12)
  text(d,(x+14,y+6),word,12,'white' if i==int(t*3)%3 else 'ink')
  if i<2:
   line(d,[(x+140,y+14),(x+166,y+14)],'mid',2)
   xx=x+141+int((t*3%1)*23);circle(d,xx,y+14,3,'orange')

def scene(theme,t):
 im=Image.new('RGB',(W,H),C['bg']);d=ImageDraw.Draw(im)
 # Quiet graphic grid, rounded frame and DMB signature.
 for x in range(30,W,30):
  for y in range(20,H,30):circle(d,x,y,1,'line')
 rr(d,(22,20,698,460),C['bg'],24,C['line'],2)
 text(d,(46,39),'DMB / '+theme.replace('-',' ').upper(),11,'mid')
 title,sub=labels[theme];text(d,(46,67),title,25);text(d,(47,107),sub,14,'mid')
 pulse=math.sin(t*math.pi*2)
 if theme=='global':
  cx,cy=347,270;rr(d,(85,170,180,201),C['ink'],10);text(d,(108,177),'INDIA',14,'white')
  d.ellipse((cx-96,cy-96,cx+96,cy+96),fill=C['white'],outline=C['ink'],width=3)
  for r in [35,67]:d.ellipse((cx-r,cy-96,cx+r,cy+96),outline=C['line'],width=2)
  for dy in [-45,0,45]:line(d,[(cx-85,cy+dy),(cx+85,cy+dy)],'line',2)
  for i,(x,y,lab) in enumerate([(535,195,'EUROPE'),(544,264,'ASIA'),(527,335,'AMERICAS')]):
   line(d,[(cx+40,cy),(x-12,y+12)],'mid',2);rr(d,(x-6,y-4,x+99,y+30),C['white'],10)
   text(d,(x+4,y+5),lab,11);phase=(t+i/3)%1;px=cx+40+(x-12-cx-40)*phase;py=cy+(y+12-cy)*phase;circle(d,px,py,5,'orange')
  line(d,[(180,185),(cx-70,cy)],'mid',2);circle(d,cx+13,cy+10,8,'mint')
 elif theme in ['strategy','analytics']:
  x,y,w,h=panel(d)
  for i,label in enumerate(['SEARCH','ADS','ENQUIRIES']):
   xx=x+20+i*126;rr(d,(xx,y+20,xx+113,y+70),C['bg'],10);text(d,(xx+10,y+35),label,11)
  for i in range(5):
   xx=x+27+i*42;hh=30+i*13+int(pulse*9);rr(d,(xx,y+161-hh,xx+25,y+161),C['mint'] if i%2==0 else C['ink'],5)
  rr(d,(x+269,y+90,x+384,y+161),C['cream'],10);text(d,(x+280,y+107),'CLEAR NEXT',11);text(d,(x+280,y+128),'STEPS',15)
  if theme=='strategy':
   rr(d,(78,242,188,303),C['orange'],12);text(d,(91,256),'YOUR GOAL',11);text(d,(90,277),'Start here',13)
 elif theme=='search':
  x,y,w,h=panel(d);rr(d,(x+20,y+18,x+w-20,y+53),C['bg'],16)
  d.ellipse((x+33,y+29,x+43,y+39),outline=C['mid'],width=2);line(d,[(x+42,y+38),(x+47,y+43)],'mid',2)
  text(d,(x+61,y+28),'Find a service for your business',12)
  for i in range(3):
   yy=y+69+i*34;rr(d,(x+22,yy,x+34,yy+12),C['mint'],4);line(d,[(x+48,yy+4),(x+236-i*21,yy+4)],'ink',4);line(d,[(x+48,yy+17),(x+291-i*15,yy+17)],'line',3)
  rr(d,(x+305,y+83,x+375,y+145),C['ink'],12);text(d,(x+315,y+97),'FIND',12,'white');text(d,(x+316,y+118),'DMB',14,'mint')
  yy=y+64+int((t*3%1)*85);line(d,[(x+16,yy),(x+w-16,yy)],'orange',2)
 elif theme in ['advertising','conversion','saas','ecommerce']:
  x,y,w,h=panel(d)
  rr(d,(x+18,y+18,x+167,y+152),C['bg'],12);rr(d,(x+30,y+29,x+154,y+80),C['ink'],8)
  text(d,(x+41,y+46),{'advertising':'YOUR AD','conversion':'YOUR OFFER','saas':'PRODUCT','ecommerce':'PRODUCT'}[theme],13,'mint')
  for k in range(2):line(d,[(x+31,y+96+k*12),(x+135-k*15,y+96+k*12)],'mid',3)
  rr(d,(x+28,y+126,x+152,y+144),C['mint'],6)
  line(d,[(x+178,y+88),(x+216,y+88)],'ink',3);circle(d,x+179+int(t*37),y+88,5,'orange')
  rr(d,(x+229,y+18,x+384,y+152),C['cream'],12);text(d,(x+245,y+33),{'advertising':'LANDING PAGE','conversion':'ENQUIRY FORM','saas':'BOOK A DEMO','ecommerce':'CHECKOUT'}[theme],11)
  for k in range(2):rr(d,(x+243,y+61+k*28,x+368,y+81+k*28),C['white'],5,C['line'])
  rr(d,(x+243,y+122,x+368,y+143),C['ink'],6);text(d,(x+254,y+126),'NEXT STEP',11,'white')
  circle(d,x+367,y+143,12,'mint');line(d,[(x+361,y+143),(x+366,y+148),(x+373,y+138)],'ink',2)
 elif theme=='social':
  for i,(x,y) in enumerate([(153,183),(289,159),(425,183)]):
   rr(d,(x+5,y+8,x+135,y+186),C['line'],16);rr(d,(x,y,x+130,y+180),C['white'],16)
   circle(d,x+22,y+22,9,'mint');line(d,[(x+40,y+20),(x+109,y+20)],'mid',3)
   rr(d,(x+12,y+42,x+118,y+121),C['ink'] if i==1 else C['bg'],9)
   text(d,(x+24,y+70),['CONTENT','YOUR STORY','CONNECT'][i],11,'mint' if i==1 else 'ink')
   for k in range(2):line(d,[(x+14,y+137+k*11),(x+108-k*13,y+137+k*11)],'line',3)
   circle(d,x+103,y+163,5+int((pulse+1)*2),'orange')
 else:
  x,y,w,h=panel(d)
  # Service-specific scene within a consistent website card.
  rr(d,(x+20,y+18,x+207,y+162),C['bg'],12)
  ix,iy=x+43,y+38
  if theme=='real-estate':
   d.polygon([(ix,iy+58),(ix+66,iy+7),(ix+132,iy+58)],fill=C['ink']);rr(d,(ix+15,iy+55,ix+116,iy+123),C['cream'],4);rr(d,(ix+57,iy+80,ix+78,iy+123),C['orange'],3)
   for xx in [ix+28,ix+89]:rr(d,(xx,iy+70,xx+17,iy+88),C['mint'],2)
  elif theme in ['hospitality','healthcare','professional','education']:
   rr(d,(ix+20,iy+8,ix+128,iy+123),C['ink'],8)
   for row in range(3):
    for col in range(3):rr(d,(ix+34+col*28,iy+25+row*25,ix+49+col*28,iy+38+row*25),C['mint'] if (row+col)%2 else C['white'],3)
   if theme=='healthcare':
    rr(d,(ix+59,iy-4,ix+88,iy+25),C['orange'],5);line(d,[(ix+73,iy+1),(ix+73,iy+20)],'white',5);line(d,[(ix+64,iy+10),(ix+82,iy+10)],'white',5)
   else:text(d,(ix+34,iy+104),{'hospitality':'HOTEL','professional':'EXPERTS','education':'LEARN'}[theme],12,'white')
  elif theme=='travel':
   d.polygon([(ix,iy+123),(ix+58,iy+33),(ix+99,iy+123)],fill=C['mid']);d.polygon([(ix+52,iy+123),(ix+119,iy+17),(ix+158,iy+123)],fill=C['ink']);circle(d,ix+22,iy+22,15,'orange')
   xx=ix+20+int(t*120);line(d,[(xx,iy+60),(xx+28,iy+53),(xx+16,iy+74),(xx+17,iy+52),(xx+6,iy+41)],'mint',4)
  elif theme=='recruitment':
   for i in range(3):
    xx=ix+24+i*51;circle(d,xx,iy+31,16,'orange' if i==1 else 'mid');rr(d,(xx-20,iy+53,xx+20,iy+92),C['ink'],13)
   rr(d,(ix+33,iy+103,ix+127,iy+124),C['mint'],6);text(d,(ix+49,iy+106),'MATCH',12)
  elif theme=='logistics':
   rr(d,(ix+5,iy+49,ix+96,iy+103),C['ink'],7);rr(d,(ix+97,iy+66,ix+140,iy+103),C['orange'],7);rr(d,(ix+105,iy+73,ix+131,iy+87),C['white'],3)
   circle(d,ix+31,iy+104,13,'ink');circle(d,ix+118,iy+104,13,'ink');line(d,[(ix+3,iy+124),(ix+153,iy+124)],'line',3)
   xx=ix+int(t*150);line(d,[(xx,iy+125),(xx+17,iy+125)],'mint',4)
  elif theme=='energy':
   circle(d,ix+132,iy+26,20,'orange')
   d.polygon([(ix+17,iy+58),(ix+123,iy+58),(ix+142,iy+117),(ix,iy+117)],fill=C['ink'])
   for k in range(1,4):line(d,[(ix+17+k*26,iy+60),(ix+k*34,iy+115)],'mint',2)
   line(d,[(ix+9,iy+86),(ix+131,iy+86)],'mint',2)
  rr(d,(x+227,y+24,x+383,y+153),C['cream'],12);text(d,(x+242,y+39),'YOUR CUSTOMER',11)
  for k in range(2):line(d,[(x+243,y+67+k*14),(x+363-k*15,y+67+k*14)],'line',4)
  rr(d,(x+242,y+109,x+367,y+138),C['ink'],8);text(d,(x+253,y+117),{'real-estate':'VIEWING','hospitality':'BOOK A STAY','healthcare':'APPOINTMENT','travel':'PLAN A TRIP','professional':'GET IN TOUCH','education':'ADMISSIONS','recruitment':'ROLE ENQUIRY','logistics':'GET A QUOTE','energy':'SOLAR ENQUIRY'}[theme],11,'white')
  circle(d,x+359,y+142,10+int((pulse+1)*2),'mint')
 flow(d,t)
 return im

for theme in labels:
 frames=[scene(theme,k/24) for k in range(24)]
 frames[0].save(OUT/(theme+'.webp'),quality=86)
 # One shared palette prevents flicker between frames.
 palette=frames[0].quantize(colors=96)
 indexed=[f.quantize(palette=palette,dither=Image.Dither.NONE) for f in frames]
 indexed[0].save(OUT/(theme+'.gif'),save_all=True,append_images=indexed[1:],duration=160,loop=0,optimize=True,disposal=1)
 print(theme,(OUT/(theme+'.gif')).stat().st_size)
