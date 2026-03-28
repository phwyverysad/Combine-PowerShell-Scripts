const scriptData = [
    { id: 10, name: "ปรับแต่ง Windows (WinUtil)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/winutil.ps1 | iex", category: "System", icon: "ph-wrench" },
    { id: 3, name: "PowerPlan (KernelOS)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/Install_powerplan.ps1 | iex", category: "System", icon: "ph-lightning" },
    { id: 9, name: "Clean Ram", cmd: "irm https://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/clean_ram.ps1 | iex", category: "System", icon: "ph-broom" },
    { id: 1, name: "ล็อกไมค์ (Lock Mic)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/lock_mic.ps1 | iex", category: "System", icon: "ph-microphone-slash" },
    { id: 12, name: "สร้างจุดย้อนระบบ (Restore)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/system_restore.ps1 | iex", category: "System", icon: "ph-clock-counter-clockwise" },
    { id: 13, name: "เมนูทางลัด Power/BIOS", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/menu_options.ps1 | iex", category: "System", icon: "ph-power" },
    { id: 5, name: "โหลด OS ทับ (Atlas/ReviOS)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/playbook_downloader.ps1 | iex", category: "OS", icon: "ph-hard-drive" },
    { id: 21, name: "เปิดใช้งาน Windows (แท้)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/activate_windowsall.ps1 | iex", category: "OS", icon: "ph-key" },
    { id: 22, name: "เปลี่ยนรุ่น Windows", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/change_windows_edition.ps1 | iex", category: "OS", icon: "ph-swap" },
    { id: 23, name: "เช็คสถานะ Activate", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/check_status_windows.ps1 | iex", category: "OS", icon: "ph-info" },
    { id: 29, name: "ลงวินโดวส์ใหม่", cmd: "irm https://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/windows1011 | iex", category: "OS", icon: "ph-disc" },
    { id: 20, name: "เปิดใช้งาน Microsoft 365", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/activate_365.ps1 | iex", category: "OS", icon: "ph-briefcase" },
    { id: 16, name: "จัดการไดรเวอร์ (IObit)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/IObit_Driver_Booster_Pro.ps1 | iex", category: "Apps", icon: "ph-cpu" },
    { id: 15, name: "Revo Uninstaller Pro", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/revo_uninstaller_pro.ps1 | iex", category: "Apps", icon: "ph-trash" },
    { id: 19, name: "IDM (โหลดไว)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/idm_build.ps1 | iex", category: "Apps", icon: "ph-download-simple" },
    { id: 8, name: "Discord 3 ตัว", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/discord.ps1 | iex", category: "Apps", icon: "ph-discord-logo" },
    { id: 26, name: "Web Browser", cmd: "irm https://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/browser.ps1 | iex", category: "Apps", icon: "ph-globe-hemisphere-west" },
    { id: 27, name: "X-Mouse Button Control", cmd: "irm https://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/X-Mouse_Button_Control.ps1 | iex", category: "Apps", icon: "ph-mouse" },
    { id: 28, name: "Partition Wizard Pro", cmd: "irm https://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/MiniTool_Partition_Wizard_Pro.ps1 | iex", category: "Apps", icon: "ph-hard-drives" },
    { id: 11, name: "ฝากไฟล์ & แชร์ไฟล์", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/Upload_Share_Files.ps1 | iex", category: "Apps", icon: "ph-cloud-arrow-up" },
    { id: 18, name: "ย่อลิ้งก์ให้สั้น (Short Link)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/cut_link.ps1 | iex", category: "Apps", icon: "ph-link" },
    { id: 17, name: "ติดตั้งส่วนเสริม (Dev Tools)", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/dev_tools.ps1 | iex", category: "Apps", icon: "ph-puzzle-piece" },
    { id: 6, name: "แปลงไฟล์ .py เป็น .exe", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/py_to_exe.ps1 | iex", category: "Apps", icon: "ph-file-code" },
    { id: 2, name: "เสกเกม (Steam)", cmd: "irm https://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/import_games_steam.ps1 | iex", category: "Gaming", icon: "ph-game-controller" },
    { id: 14, name: "Lossless Scaling", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/lossless_scaling.ps1 | iex", category: "Gaming", icon: "ph-arrows-out-simple" },
    { id: 7, name: "Minecraft for Windows", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/minecraft_for_windows.ps1 | iex", category: "Gaming", icon: "ph-cube" },
    { id: 4, name: "Spotify Premium", cmd: "irm https://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/spotify_premium.ps1 | iex", category: "Gaming", icon: "ph-spotify-logo" },
    { id: 30, name: "Remove Windows Defender", cmd: "irm https://gist.github.com/phwyverysad/719da2821717ab9b6ec83e1cca2a0298/raw/e88ce7ded6eeb52a488ff5632a5e9e9dee73da68/RemoveWindowsDefender.ps1 | iex", category: "Security", icon: "ph-shield-slash" },
    { id: 24, name: "Avast Premium", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/avast_premium_security.ps1 | iex", category: "Security", icon: "ph-shield-check" },
    { id: 25, name: "Malwarebytes Premium", cmd: "irm http://raw.githubusercontent.com/phwyverysad/-/refs/heads/main/powershell/malwarebytes_premium.ps1 | iex", category: "Security", icon: "ph-bug-beetle" }
];

const categories = [
    { id: "All", name: "หน้าแรก (ทั้งหมด)", icon: "ph-squares-four" },
    { id: "System", name: "ปรับแต่งระบบ", icon: "ph-sliders-horizontal" },
    { id: "OS", name: "จัดการ Windows", icon: "ph-windows-logo" },
    { id: "Apps", name: "แอป & เครื่องมือ", icon: "ph-app-window" },
    { id: "Gaming", name: "เกม & สื่อบันเทิง", icon: "ph-game-controller" },
    { id: "Security", name: "ความปลอดภัย", icon: "ph-shield" }
];

let currentCategory = "All";
let searchTerm = "";
const cuteItems =

window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        document.body.classList.add('fade-in');
        createBgParticles();
    }, 1500);
});

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault(); return false;
    }
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function(e) {
    createRipple(e, this);
    document.body.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.className = 'ph-bold ph-sun'; localStorage.setItem('theme', 'dark');
    } else {
        icon.className = 'ph-bold ph-moon'; localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeToggle.querySelector('i').className = 'ph-bold ph-sun';
}

function createRipple(event, element) {
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    const rect = element.getBoundingClientRect();
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    const existingRipple = element.querySelector('.ripple');
    if (existingRipple) existingRipple.remove();
    element.appendChild(circle);
}

document.addEventListener('click', function(e) {
    if(e.target.tagName.toLowerCase() === 'input' || e.target.closest('.copy-btn') || e.target.closest('.action-btn') || e.target.closest('.menu-item')) return;
    const numParticles = Math.floor(Math.random() * 6) + 6;
    for(let i=0; i<numParticles; i++) {
        let particle = document.createElement('div');
        particle.className = 'cute-particle';
        particle.innerText = cuteItems[Math.floor(Math.random() * cuteItems.length)];
        particle.style.left = e.pageX + 'px'; particle.style.top = e.pageY + 'px';
        const angle = Math.random() * Math.PI * 2;
        const velocity = 100 + Math.random() * 150;
        particle.style.setProperty('--tx', `${Math.cos(angle) * velocity}px`);
        particle.style.setProperty('--ty', `${Math.sin(angle) * velocity}px`);
        particle.style.setProperty('--rot', `${(Math.random() - 0.5) * 720}deg`);
        particle.style.setProperty('--scale', Math.random() * 1 + 0.5);
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }
});

function createBgParticles() {
    if(window.innerWidth <= 768) return;
    const container = document.getElementById('particles-container');
    for(let i=0; i<30; i++) {
        let p = document.createElement('div');
        p.className = 'bg-particle';
        p.style.left = `${Math.random() * 100}vw`;
        p.style.width = p.style.height = `${Math.random() * 4 + 2}px`;
        p.style.setProperty('--duration', `${Math.random() * 10 + 10}s`);
        p.style.setProperty('--alpha', Math.random() * 0.5 + 0.1);
        p.style.animationDelay = `${Math.random() * 20}s`;
        container.appendChild(p);
    }
}

function setupMagneticButtons() {
    if(window.innerWidth <= 768) return;
    const magnets = document.querySelectorAll('.magnetic-btn');
    magnets.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const h = rect.width / 2;
            const w = rect.height / 2;
            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - w;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });
}
setupMagneticButtons();

function setupTiltEffect() {
    if(window.innerWidth <= 768) return;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            const glare = card.querySelector('.card-glare');
            if(glare) {
                glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4), transparent 50%)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            const glare = card.querySelector('.card-glare');
            if(glare) glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4), transparent 60%)`;
        });
    });
}

const observerOptions = { root: document.getElementById('content-scroll'), threshold: 0.1, rootMargin: "0px 0px 50px 0px" };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function typeText(element, text) {
    if(element.typingTimeout) clearTimeout(element.typingTimeout);
    element.innerHTML = '';
    let i = 0;
    element.setAttribute('data-text', text);
    element.classList.remove('typing-text');
    void element.offsetWidth;
    element.classList.add('typing-text');
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            element.typingTimeout = setTimeout(typing, 30);
        }
    }
    typing();
}

function renderMenu() {
    const menuList = document.getElementById('menu-list');
    let menuHtml = '<div class="menu-title">หมวดหมู่สคริปต์</div>';
    categories.forEach(cat => {
        const isActive = currentCategory === cat.id ? 'active' : '';
        menuHtml += `<div class="menu-item ${isActive}" onclick="changeCategory('${cat.id}', '${cat.name}')">
            <i class="${isActive ? 'ph-fill' : 'ph-bold'} ${cat.icon}"></i><span>${cat.name}</span></div>`;
    });
    menuList.innerHTML = menuHtml;
}

function changeCategory(id, name) {
    if (currentCategory === id && searchTerm === "") return; 
    currentCategory = id; searchTerm = ""; document.getElementById('search-input').value = "";
    
    const titleEl = document.getElementById('category-title');
    typeText(titleEl, name);
    
    const countEl = document.getElementById('item-count');
    countEl.style.animation = 'none';
    void countEl.offsetWidth;
    countEl.style.animation = null;
    
    document.getElementById('content-scroll').scrollTo({ top: 0, behavior: 'smooth' });
    renderMenu(); renderCards();
}

document.getElementById('search-input').addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase(); 
    renderCards();
    const titleEl = document.getElementById('category-title');
    
    if (titleEl.typingTimeout) clearTimeout(titleEl.typingTimeout);

    if(searchTerm !== "") {
        titleEl.innerText = `ผลการค้นหา: "${e.target.value}"`;
        currentCategory = "Search"; renderMenu();
    } else changeCategory("All", "หน้าแรก (ทั้งหมด)");
});

function renderCards() {
    const grid = document.getElementById('card-grid'); 
    grid.innerHTML = '';
    
    let filteredData = searchTerm !== "" 
        ? scriptData.filter(i => i.name.toLowerCase().includes(searchTerm) || i.category.toLowerCase().includes(searchTerm))
        : currentCategory !== "All" ? scriptData.filter(i => i.category === currentCategory) : scriptData;
        
    document.getElementById('item-count').innerText = `พบ ${filteredData.length} รายการ`;
    
    if (filteredData.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 100px 20px; color: var(--text-muted); animation: appFadeIn 1s;">
            <i class="ph-fill ph-ghost" style="font-size: 6rem; margin-bottom: 24px; filter: drop-shadow(0 0 20px var(--accent-glow)); animation: floatLogo 3s infinite;"></i>
            <h2 style="font-size: 1.8rem; color: var(--text-main); margin-bottom: 12px; font-weight: 800;">ไม่พบสคริปต์ที่คุณค้นหา</h2>
            <p style="font-size: 1.1rem;">ลองค้นหาด้วยคำอื่นดูสิ 🦇</p></div>`; 
        return;
    }
    
    filteredData.forEach((item, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'card-wrapper';
        
        wrapper.innerHTML = `
            <div class="card" onclick="triggerCardCopy(event, '${item.cmd}', 'btn-${item.id}', 'terminal-${item.id}')">
                <div class="card-glare"></div>
                <div class="card-header">
                    <div class="card-icon"><i class="ph ${item.icon}"></i></div>
                    <div class="card-title">${item.name}</div>
                </div>
                
                <div class="terminal-box" id="terminal-${item.id}">
                    <div class="terminal-header">
                        <div class="dot dot-red"></div>
                        <div class="dot dot-yellow"></div>
                        <div class="dot dot-green"></div>
                    </div>
                    <div class="code-content">${item.cmd}</div>
                </div>

                <button class="copy-btn" id="btn-${item.id}">
                    <i class="ph-bold ph-copy"></i> <span>คัดลอกคำสั่ง</span>
                </button>
            </div>`;
        grid.appendChild(wrapper);
        observer.observe(wrapper);
    });
    
    setTimeout(setupTiltEffect, 100);
}

function triggerCardCopy(e, text, btnId, terminalId) {
    if(window.getSelection().toString().length > 0) return;
    
    if (!e.target.closest('.copy-btn')) {
        createRipple(e, e.currentTarget);
    }
    const btnElement = document.getElementById(btnId);
    copyToClipboard(text, btnElement, terminalId);
}

let toastTimeout;
function copyToClipboard(text, btnElement, terminalId) {
    navigator.clipboard.writeText(text).then(() => {
        const terminalBox = document.getElementById(terminalId); 
        const originalHtml = `<i class="ph-bold ph-copy"></i> <span>คัดลอกคำสั่ง</span>`;
        
        terminalBox.classList.remove('flash'); 
        void terminalBox.offsetWidth; 
        terminalBox.classList.add('flash');
        
        btnElement.innerHTML = `<i class="ph-bold ph-check"></i> <span>คัดลอกสำเร็จ!</span>`;
        btnElement.style.background = 'var(--accent-main)'; 
        btnElement.style.color = '#fff';
        btnElement.style.borderColor = 'transparent';
        btnElement.style.boxShadow = '0 10px 25px var(--accent-glow)';
        
        const toast = document.getElementById('toast'); 
        
        toast.classList.remove('show');
        void toast.offsetWidth; 
        
        toast.classList.add('show');
        
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2500); 
        
        setTimeout(() => {
            btnElement.innerHTML = originalHtml; 
            btnElement.style.background = ''; 
            btnElement.style.color = '';
            btnElement.style.borderColor = '';
            btnElement.style.boxShadow = '';
        }, 2500);
        
    }).catch(() => alert("เบราว์เซอร์ของคุณไม่รองรับการคัดลอก กรุณาทำแบบแมนนวล"));
}

renderMenu(); 
renderCards();
