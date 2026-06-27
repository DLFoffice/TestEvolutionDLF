// ============================================================
// firebase-config.js
// ใส่ค่าจากโปรเจกต์ Firebase ของคุณที่นี่
// ดูได้จาก: Firebase Console > Project settings > General > Your apps > Web app
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyClGVb-JamhIV9PvqWPBwMlrIBSDNjvUCY",
  authDomain: "dataform-38690.firebaseapp.com",
  projectId: "dataform-38690",
  storageBucket: "dataform-38690.firebasestorage.app",
  messagingSenderId: "395560547219",
  appId: "1:395560547219:web:6d0efb2866a56833ffee66"
};

// ชื่อ collection หลักใน Firestore ที่ใช้เก็บข้อมูลทุกแบบฟอร์ม
export const COLLECTION = "dltv_submissions";

// ตั้งเป็น true เพื่อทดสอบระบบแบบไม่ต่อ Firebase (บันทึกลงเครื่องชั่วคราว/ดาวน์โหลด JSON)
// ตั้งเป็น false เมื่อกรอกค่า firebaseConfig ด้านบนเรียบร้อยและพร้อมใช้งานจริง
export const OFFLINE_MODE = true;
