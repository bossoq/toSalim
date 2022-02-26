const words = [
  'ไม่ใช่สลิ่มนะ',
  'ไม่ใช่ติ่งลุงตู่',
  'เราคนไทยเหมือนกัน',
  'รักชาติ',
  'ชังชาติ',
  'ขายชาติ',
  'ไม่สำนึกในบุญคุณ',
  'หนักแผ่นดิน',
  'เนรคุณแผ่นดิน',
  'เราคือผู้อยู่อาศัย',
  'ล้มเจ้า',
  'ส้มเน่า',
  'เผาไทย',
  'เห่อหมอยคลั่งชาติฝรั่ง',
  'ขุ่นพ่อง',
  'รังนกสีฟ้า',
  'เก่งอยู่หลังคีย์บอร์ด',
  'ต่างชาติชักใยอยู่เบื้องหลัง',
  'ชักศึกเข้าบ้าน',
  'มีทุกอย่างที่ดีเพราะใคร',
  'พวกเผาบ้านเผาเมือง',
  'จำนำข้าว',
  'ศูนย์รวมจิตใจของชาติ',
  'ให้มันจบที่เรือนจำ',
  'ตอบแทนบุญคุณแผ่นดิน',
  'ควายแดง',
  'สวะส้ม',
  'ด่าทุกเรื่องที่รัฐออกนโยบาย',
  'ไอแม้ว',
  'ฟังคำเตือนจากผู้ใหญ่บ้าง',
  'ไม่รักชาติก็ออกจากประเทศไป',
  'เด็กๆพวกนี้มันคิดเองไม่ได้หรอก',
  'ไม่พอใจก็ไปอยู่ประเทศอื่น',
  'ไม่ได้อยู่ฝั่งไหน',
  'ด่ารัฐบาลก็ด่าไป',
  'อาบน้ำร้อนมาก่อน',
  'พวกหัวรุนแรง',
  'โดนจูงจมูก',
  'ลุงเป็นคนดี',
  'เป็นกลาง',
  'พวกอันธพาล',
  'ต้องเริ่มต้นที่ตัวเองก่อน',
  'พวกขี้ข้าทักษิณ',
  'ซ้ายจัดดัดจริต',
  'โง่ไม่มีสมอง',
  'ไม่เคารพผู้หลักผู้ใหญ่',
  'เป็นบุคคลสาธารณะ',
  'ทำไมไม่ยืน',
  'ประชามติ',
  'บังอาจก้าวล่วง',
  'เชียร์ลุง',
  'ม๊อบสวะ',
  'ไอ้เจ็กกบฎ',
  'รับไปห้าร้อย',
  'ลุงตู่เป็นคนดี',
  'ลุงตู่อยู่บ้านเมืองสงบ',
  'บ้านเมืองสงบ',
  'ระบอบทักษิณ',
  'สมบูรณาญาสิทธิทุน',
  'นี่คือการปฏิวัติที่อ่อนละมุน',
  'รัฐประหารโดยสันติวิธี',
  'คนดี',
  'ก็ไม่ได้ชอบลุงตู่นะ',
  'หนึ่งคือนายกฯ',
  'มึงมาไล่ดูสิ',
  'ลูกหลานอยู่ไม่ได้วันหน้า',
  'ไปให้ตำรวจยิงหรอ',
  'จะกี่รัฐบาลก็เหมือนกันหมด',
  'เอาเวลาไปหาเงินเลี้ยงปากท้องเถอะ',
  'เก่งมากก็ไปเป็นนายกฯเองสิ',
  'แค่รถฉีดน้ำจะไปกลัวทำไม',
  'ท่านทรงงานหนัก',
  'โดนแค่ฉีดน้ำทำเป็นบ่น',
  'หัวก้าวหน้า',
  'สัตว์นรก',
  'คนไทยทั้งประเทศ',
  'ขอพูดแรงๆ',
  'จะเปลี่ยนแปลงประเทศ',
  'ถ้าคนไทยฆ่ากันเอง',
  'ถ้าพวกมึงเป็นอะไรขึ้นมา',
  'เห็นเราเงียบ',
  'ถ้าพ่อมองลงมา',
  'พวกคอมมิวนิสต์',
  'อยากได้เสรีภาพมากเกินไป',
  'หัดศึกษาประวัติศาสตร์บ้างนะ',
  'ถอยกันคนละก้าว',
  'เจ้าจะทำอะไรก็เรื่องของเค้า',
  'จ่ายภาษีหรือเปล่า',
  'ม็อบมุ้งมิ้ง',
  'ทำไมไม่เคารพความเห็นต่าง',
  'เด็กๆเอาแต่เล่นโซเชียล',
  'รัฐบาลมีผลงานเยอะแยะ',
  'คิดต่างได้',
  'รักประยุทธ์',
  'ไปฟังคนไม่จบ',
  'ก่อนจะสานต่ออุดมการณ์เพื่อชาติ',
  'คุณภาพชีวิตจะดีขึ้น',
  'ทำร้ายตำรวจ',
  'เยาวชนปลดแอ๊ก',
  'ลุงตู่สู้ๆ',
  'เราจะทำตามสัญญา',
  'นายกคนปัจจุบัน',
  'ไม่ยอมกลับมารับโทษ',
  'ถ้ามึงไม่ชั่ว',
  'สลิ่ม',
  'พวกสามกีบ',
  'หมูขึ้นราคาบ่นกันแพง',
  'ถ้าความรู้น้อย',
  'ผักชีแพงก็ด่า',
  'ต้มจืดตำลึง',
  'ขอประนามการกระทำของคุณ',
  'ตำรวจดีๆ',
  'ฝั่งประชาธิปไตยเหี้ยอะไร',
]

export default words
