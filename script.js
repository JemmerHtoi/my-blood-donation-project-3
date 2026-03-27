// Register Form ရှိမရှိ အရင်စစ်မယ်
const regForm = document.querySelector('.reg-form');

if (regForm) {
    regForm.onsubmit = function(e) {
        e.preventDefault(); 
        alert("Registration Successful!");
        window.location.href = 'otp.html'; 
    };
}
// HTML ထဲက oninput ကနေ လှမ်းခေါ်မယ့် function
function moveToNext(current, index) {
    const inputs = document.querySelectorAll('.otp-input');
    
    // ဂဏန်းတစ်ခု ရိုက်ပြီးတာနဲ့ နောက်တစ်ကွက်ကို focus လုပ်ခြင်း
    if (current.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
    }
} 

// ပုံထဲက Line 12 ကနေ 26 အထိ နေရာမှာ ဒါလေးကို အစားထိုးလိုက်ပါ
let timeLeft = 60;
const secondsDisplay = document.getElementById("seconds");
const timerSpan = document.getElementById("timer-text");
const resendLink = document.getElementById("resend-link");

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        if (secondsDisplay) secondsDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            if (timerSpan) timerSpan.style.display = "none";
            if (resendLink) resendLink.style.display = "inline";
        }
    }, 1000);
}

function moveNext(current, nextFieldID) {
    // လက်ရှိ box မှာ စာလုံးပါဝင်မှု ရှိ၊ မရှိ စစ်တယ်
    if (current.value.length >= 1) {
        // နောက်ထပ် box id ရှိခဲ့ရင် အဲ့ဒီ box ကို focus သွားခိုင်းမယ်
        if (nextFieldID !== "") {
            document.getElementById(nextFieldID).focus();
        }
    }
}

// Input အားလုံးကို ယူမယ်
const inputs = document.querySelectorAll('.otp-inputs input');

inputs.forEach((input, index) => {
    input.addEventListener('keydown', function(e) {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            // Backspace နှိပ်ပြီး လက်ရှိ box က အလွတ်ဖြစ်နေရင် ရှေ့ box ကို ပြန်သွားမယ်
            inputs[index - 1].focus();
        }
    });
});

function verifyOTP() {
    alert("Successfully verified!");
}

// Resend OTP function ကိုလည်း အောက်နားမှာ ထပ်ထည့်ပေးပါ
function resendOTP() {
    alert("OTP has been resent!");
    location.reload(); 
}

// ဒါက ပုံထဲက Line 29 အတိုင်းပဲ ရှိနေရပါမယ်
window.onload = startTimer;







