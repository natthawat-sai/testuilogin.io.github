// ดึง Element ต่างๆ มาใช้งาน
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');

const btnNext1 = document.getElementById('btn-next-1');
const btnNext2 = document.getElementById('btn-next-2');
const btnBack1 = document.getElementById('btn-back-1');
const btnFinish = document.getElementById('btn-finish');

const ind1 = document.getElementById('indicator-1');
const ind2 = document.getElementById('indicator-2');
const ind3 = document.getElementById('indicator-3');

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-msg');

// ฟังก์ชันสำหรับเปลี่ยนหน้า (จาก Step 1 ไป Step 2)
btnNext1.addEventListener('click', () => {
    // Basic Validation: เช็คว่ารหัสผ่านตรงกันไหม
    if (password.value !== confirmPassword.value && confirmPassword.value !== '') {
        confirmPassword.classList.add('error');
        errorMsg.classList.remove('hidden');
        return; // หยุดทำงานถ้ารหัสไม่ตรง
    } else {
        confirmPassword.classList.remove('error');
        errorMsg.classList.add('hidden');
    }

    // ซ่อนหน้า 1 แสดงหน้า 2
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
    
    // อัปเดต Progress Bar
    ind2.classList.add('active');
});

// ฟังก์ชันกดย้อนกลับจาก Step 2 มา Step 1
btnBack1.addEventListener('click', () => {
    step2.classList.add('hidden');
    step1.classList.remove('hidden');
    ind2.classList.remove('active');
});

// ฟังก์ชันสำหรับเปลี่ยนหน้า (จาก Step 2 ไป Step 3)
btnNext2.addEventListener('click', () => {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
    ind3.classList.add('active');
});

// ฟังก์ชันสำหรับปุ่มสุดท้าย (จำลองว่าสมัครสำเร็จ)
btnFinish.addEventListener('click', () => {
    alert("สมัครสมาชิกสำเร็จ! ยินดีต้อนรับสู่ Health App");
    // ปกติจะ Redirect ไปหน้าหลักของแอป
});
