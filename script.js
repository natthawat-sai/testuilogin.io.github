// ดึง Element ต่างๆ มาใช้งาน
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');

const btnNext1 = document.getElementById('btn-next-1');
const btnNext2 = document.getElementById('btn-next-2');
const btnBack1 = document.getElementById('btn-back-1');
const btnBack2 = document.getElementById('btn-back-2');
const btnFinish = document.getElementById('btn-finish');

const ind1 = document.getElementById('indicator-1');
const ind2 = document.getElementById('indicator-2');
const ind3 = document.getElementById('indicator-3');

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-msg');

// ไปหน้า 2 (ยืนยันตัวตน)
btnNext1.addEventListener('click', () => {
    // เช็คว่ารหัสผ่านตรงกันไหม
    if (password.value !== confirmPassword.value && confirmPassword.value !== '') {
        confirmPassword.classList.add('error');
        errorMsg.classList.remove('hidden');
        return; 
    } else {
        confirmPassword.classList.remove('error');
        errorMsg.classList.add('hidden');
    }

    step1.classList.add('hidden');
    step2.classList.remove('hidden');
    ind2.classList.add('active');
});

// ย้อนกลับมาหน้า 1
btnBack1.addEventListener('click', () => {
    step2.classList.add('hidden');
    step1.classList.remove('hidden');
    ind2.classList.remove('active');
});

// ไปหน้า 3 (ตั้งค่าข้อมูลสุขภาพ)
btnNext2.addEventListener('click', () => {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
    ind3.classList.add('active');
});

// ย้อนกลับมาหน้า 2
btnBack2.addEventListener('click', () => {
    step3.classList.add('hidden');
    step2.classList.remove('hidden');
    ind3.classList.remove('active');
});

// ปุ่มเสร็จสิ้น
btnFinish.addEventListener('click', () => {
    alert("สมัครสมาชิกและบันทึกข้อมูลสุขภาพสำเร็จ! ยินดีต้อนรับสู่ Health App");
});
