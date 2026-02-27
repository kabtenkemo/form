<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مؤسسة شباب قادرون - محافظة الجيزة | انضم الآن</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Tajawal', sans-serif; }
        .glass { background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
        .animated-bg {
            background: linear-gradient(-45deg, #0f172a, #1e293b, #7f1d1d, #0f172a);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
        }
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        select option { background: #1e293b; color: white; }
    </style>
</head>
<body class="animated-bg min-h-screen flex flex-col items-center justify-start p-4 pt-10">

    <div class="max-w-xl w-full flex justify-around items-center mb-8 px-6 bg-white/10 rounded-2xl py-6 backdrop-blur-md shadow-lg border border-white/5">
        <div class="flex flex-col items-center flex-1">
            <img src="وزارة الشباب.png" alt="وزارة الشباب والرياضة" class="h-28 w-auto object-contain mb-2 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
            <span class="text-xs text-white/90 font-bold tracking-wide">وزارة الشباب والرياضة</span>
        </div>

        <div class="flex flex-col items-center flex-1">
            <img src="شباب قادرون.png" alt="شباب قادرون" class="h-28 w-auto object-contain mb-2 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
            <span class="text-xs text-white/90 font-bold tracking-wide">شباب قادرون</span>
        </div>
    </div>

    <div class="max-w-xl w-full glass rounded-3xl shadow-2xl overflow-hidden mb-10">
        
        <div class="relative p-8 text-center bg-black/20">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-red-600 rounded-full"></div>
            <h2 class="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-l from-red-400 to-red-700">
                مؤسسة شباب قادرون - محافظة الجيزة
            </h2>
            <p class="text-slate-400 mt-2">سجل بياناتك للانضمام لاقوي و افضل الكورسات المعتمدة من مؤسسة شباب قادرون - محافظة الجيزة و وزارة الشباب و الرياضة</p>
        </div>

        <form id="courseForm" class="p-8 space-y-5">
            
            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-1 mr-1">الاسم الكامل</label>
                <input type="text" name="full_name" required placeholder="أحمد محمد علي"
                    class="w-full bg-slate-800/40 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-slate-600 text-right">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-1 mr-1">النوع</label>
                    <select name="gender" required class="w-full bg-slate-800/40 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all">
                        <option value="" disabled selected>اختر النوع</option>
                        <option value="ذكر">ذكر</option>
                        <option value="أنثى">أنثى</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-1 mr-1">الوظيفة الحالية</label>
                    <input type="text" name="job" required placeholder="مثلاً: طالب، مهندس..."
                        class="w-full bg-slate-800/40 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-slate-600">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-1 mr-1 text-right">رقم الواتساب</label>
                    <input type="tel" name="phone" required placeholder="01xxxxxxxxx"
                        class="w-full bg-slate-800/40 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-slate-600">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-1 mr-1 text-right">تاريخ الميلاد</label>
                    <input type="date" name="birth_date" required
                        class="w-full bg-slate-800/40 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all">
                </div>
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-1 mr-1 text-right">البريد الإلكتروني</label>
                <input type="email" name="email" required placeholder="name@example.com"
                    class="w-full bg-slate-800/40 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all">
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-1 mr-1 text-right">الرقم القومي (14 رقم)</label>
                <input type="text" name="national_id" required maxlength="14" minlength="14" placeholder="2XXXXXXXXXXXXX"
                    class="w-full bg-slate-800/40 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-red-600 outline-none tracking-widest text-center font-mono">
            </div>

            <button type="submit" id="submitBtn"
                class="relative w-full overflow-hidden group py-4 bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-red-950/40 transform active:scale-95">
                <span id="btnText" class="flex items-center justify-center gap-2 text-lg">تأكيد الحجز</span>
                <div class="absolute inset-0 w-1/4 h-full bg-white/10 skew-x-[-30deg] -translate-x-full group-hover:translate-x-[400%] transition-all duration-1000"></div>
            </button>
        </form>
    </div>

   <div id="successModal" class="fixed inset-0 bg-slate-950/90 hidden items-center justify-center p-4 z-50">
        <div class="bg-slate-800 border border-red-700/50 p-8 rounded-3xl text-center max-w-sm w-full shadow-2xl transform transition-all">
            <div class="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                <svg class="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-2">تم الحجز بنجاح!</h3>
            <p class="text-slate-300 mb-6 text-sm leading-relaxed">
                خطوة واحدة تفصلك عن البداية.. <br>
                <strong>يجب عليك الانضمام لمجموعة الواتساب</strong> لمتابعة التعليمات وموعد الكورس:
            </p>

            <a href="https://chat.whatsapp.com/E9YlBlhiHL9GvMfBcyVM5G" 
               target="_blank"
               class="flex items-center justify-center gap-2 w-full py-4 mb-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-lg shadow-lg shadow-green-900/20 transition-all transform hover:scale-105 active:scale-95">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82l.303.18c1.397.831 3.013 1.27 4.673 1.271 4.89 0 8.871-3.981 8.873-8.87 0-2.371-.922-4.599-2.598-6.276-1.675-1.677-3.903-2.599-6.273-2.6-4.89 0-8.872 3.981-8.875 8.87-.001 1.75.513 3.456 1.484 4.947l.204.311-.997 3.639 3.73-.978zm11.599-5.228c-.303-.151-1.791-.882-2.069-.982-.278-.1-.48-.151-.681.151-.202.302-.782.982-.959 1.183-.177.201-.354.226-.657.076-.303-.151-1.28-.472-2.439-1.506-.902-.805-1.51-1.799-1.687-2.102-.177-.302-.019-.465.132-.615.136-.135.303-.352.455-.528.151-.177.202-.302.303-.503.101-.202.051-.377-.025-.528-.076-.151-.681-1.637-.933-2.245-.245-.592-.494-.511-.681-.521-.177-.009-.379-.01-.581-.01-.202 0-.53.076-.808.377-.278.302-1.061 1.031-1.061 2.516 0 1.485 1.082 2.92 1.233 3.122.151.202 2.129 3.251 5.158 4.556.72.311 1.282.497 1.72.636.724.23 1.381.197 1.901.12.58-.087 1.791-.73 2.044-1.435.252-.704.252-1.308.177-1.434-.076-.126-.278-.201-.581-.352z"/>
                </svg>
                اضغط هنا لدخول الجروب
            </a>

            <button onclick="location.reload()" class="w-full py-2 text-slate-400 hover:text-white transition-colors text-sm">
                إغلاق النافذة
            </button>
        </div>
    </div>

    <script>
        document.getElementById('courseForm').onsubmit = async (e) => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const modal = document.getElementById('successModal');

            btn.disabled = true;
            btnText.innerText = "جاري الحجز...";

            const formData = Object.fromEntries(new FormData(e.target));

            try {
                const res = await fetch('/.netlify/functions/save-data', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (res.ok) { 
                    modal.style.display = 'flex'; 
                    e.target.reset(); 
                } else { 
                    alert('حدث خطأ في السيرفر، حاول مرة أخرى.'); 
                }
            } catch (err) { 
                alert('فشل الاتصال بالإنترنت.'); 
            } finally { 
                btn.disabled = false; 
                btnText.innerText = "تأكيد الحجز"; 
            }
        };
    </script>
</body>
</html>
