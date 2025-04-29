/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
    Linear Time เพราะ ต้องเข้าไปวนลูปทุกตัวเพื่อหา id ที่ต้องการ

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
    logrithmic เพราะ ข้อมูลมีการ sort เอาไว้แล้ว เพราะมีการแบ่งหาจากค่าตรงกลางไปเรื่อยๆ จนกว่าจะเจอ products นั้น

*/

/* 
Which function is more efficient and why?
Answer:
    findProductPrice เพราะ ใช้จำนวนรอบในการหาน้อยกว่า ยิ่งถ้าใช้กับข้อมูลจำนวนมาก 
    จะเห็นได้ชัดว่า logrithmic ใช้จำนวนรอบน้อยมาก เพราะ เริ่มจากการหาตรงกลางก่อน 
    แล้วดูว่าข้อมูลที่ต้องการนั้น มีค่ามากกว่าหรือน้อยกว่าค่าตรงกลาง ให้ไปหาต่อจากฝั่งนั้น
    แล้วหาค่าตรงกลางใหม่ ทำแบบนี้ไปเรื่อยๆ เทียบกับการวนลูปหาทุกตัวทีละตัวแล้วใช้เวลานานกว่ามาก
*/
