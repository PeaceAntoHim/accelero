// Language translations
const translations = {
    id: {
        // Navigation
        'nav-home': 'Beranda',
        'nav-about': 'Tentang',
        'nav-donate': 'Donasi',
        'nav-volunteer': 'Relawan',
        'nav-partnership': 'Kemitraan',
        'nav-impact': 'Dampak',

        // Hero
        'hero-title': 'Tingkatkan Literasi & Numerasi Anak Indonesia',
        'hero-subtitle': 'Bergabung dengan Yayasan Accelero untuk mendukung program Teaching at the Right Level (TaRL) di sekolah-sekolah yang membutuhkan',
        'cta-donate': 'Donasi Sekarang',
        'cta-volunteer': 'Jadi Relawan',
        'stat-students': 'Siswa Terbantu',
        'stat-schools': 'Sekolah Mitra',
        'stat-volunteers': 'Relawan Aktif',
        'video-text': 'Tonton Video Program TaRL',
        'cost-text': 'per anak per program',
        'improvement-text': 'peningkatan kemampuan',

        // Impact Stats
        'impact-title': 'Dampak Nyata Program Kami',
        'impact-desc': 'Sejak 2024, kami telah membantu ribuan anak Indonesia meningkatkan kemampuan literasi dan numerasi melalui metode Teaching at the Right Level',
        'stat-label-1': 'Siswa Terbantu',
        'stat-desc-1': 'Anak-anak mendapat pembelajaran yang tepat',
        'stat-label-2': 'Sekolah Mitra',
        'stat-desc-2': 'Sekolah yang mengimplementasikan TaRL',
        'stat-label-3': 'Peningkatan Kemampuan',
        'stat-desc-3': 'Rata-rata peningkatan literasi & numerasi',
        'stat-label-4': 'Relawan Aktif',
        'stat-desc-4': 'Mahasiswa dan profesional yang terlibat',
        'funding-title': 'Target Fundraising Wave 1',
        'funding-desc': 'Rp 15,000,000 untuk mendukung 1,000 anak di 20 sekolah',
        'funding-status': '68% tercapai • 342 donor • 28 hari tersisa',

        // About
        'about-title': 'Bagaimana Program TaRL Bekerja',
        'about-desc': 'Teaching at the Right Level memastikan setiap anak belajar sesuai kemampuannya, bukan berdasarkan usia atau kelas',
        'step-1-title': 'Assessment Awal',
        'step-1-desc': 'Mengevaluasi kemampuan literasi dan numerasi setiap siswa',
        'step-2-title': 'Kelompok Belajar',
        'step-2-desc': 'Membagi siswa berdasarkan kemampuan, bukan usia',
        'step-3-title': 'Pembelajaran Aktif',
        'step-3-desc': 'Metode mengajar yang interaktif dan menyenangkan',
        'step-4-title': 'Evaluasi Berkala',
        'step-4-desc': 'Memantau kemajuan dan menyesuaikan pembelajaran',

        // Donation
        'donate-title': 'Pilih Cara Anda Membantu',
        'donate-desc': 'Setiap donasi akan langsung berdampak pada pembelajaran anak-anak Indonesia',
        'project-label': 'Pilih Proyek',
        'project-desc-1': '150 siswa membutuhkan program literasi dasar',
        'project-status-1': 'Dana terkumpul: Rp 2,400,000 / Rp 4,500,000',
        'project-desc-2': '200 siswa membutuhkan program numerasi',
        'project-status-2': 'Dana terkumpul: Rp 3,200,000 / Rp 6,000,000',
        'amount-label': 'Jumlah Donasi',
        'amount-impact-1': '3 anak, 1 bulan',
        'amount-impact-2': '6 anak, 1 bulan',
        'amount-impact-3': '15 anak, 1 bulan',
        'amount-impact-4': '1 anak, program penuh',
        'frequency-label': 'Frekuensi',
        'frequency-onetime': 'Sekali',
        'frequency-monthly': 'Bulanan',
        'impact-text': 'Donasi Anda akan membantu anak-anak mendapat pendidikan yang berkualitas',
        'motivation-label': 'Apa alasan Anda membantu kami hari ini?',
        'motivation-placeholder': 'Pilih alasan...',
        'motivation-1': 'Percaya pada pentingnya pendidikan',
        'motivation-2': 'Ingin membantu anak-anak Indonesia',
        'motivation-3': 'Melihat dampak nyata program ini',
        'motivation-4': 'Program CSR perusahaan',
        'motivation-5': 'Lainnya',
        'message-label': 'Tinggalkan Pesan (Opsional)',
        'donate-button': 'Donasi Sekarang',

        // Volunteer
        'volunteer-title': 'Bergabung Sebagai Relawan',
        'volunteer-desc': 'Bantu kami mengajarkan literasi dan numerasi langsung ke sekolah-sekolah',
        'form-name': 'Nama Lengkap',
        'form-phone': 'No. Telefon',
        'form-city': 'Kota',
        'form-skills': 'Keahlian',
        'skill-1': 'Mengajar Bahasa Indonesia',
        'skill-2': 'Mengajar Matematika',
        'skill-3': 'Pendampingan Siswa',
        'skill-4': 'Pelatihan Guru',
        'skill-5': 'Dokumentasi',
        'skill-6': 'Administrasi',
        'form-availability': 'Ketersediaan',
        'availability-placeholder': 'Pilih ketersediaan...',
        'availability-1': 'Akhir pekan',
        'availability-2': 'Hari kerja',
        'availability-3': 'Fleksibel',
        'availability-4': 'Saat libur saja',
        'form-experience': 'Pengalaman',
        'volunteer-submit': 'Daftar Sebagai Relawan',

        // Partnership
        'partnership-title': 'Kemitraan Korporat',
        'partnership-desc': 'Wujudkan program CSR yang berdampak nyata untuk pendidikan Indonesia',
        'benefits-title': 'Manfaat Kemitraan',
        'benefit-1': 'Laporan dampak yang transparan dan terukur',
        'benefit-2': 'Sertifikat dan pengakuan kemitraan resmi',
        'benefit-3': 'Dokumentasi kegiatan berkualitas tinggi',
        'benefit-4': 'Akses ke data dan riset program pendidikan',
        'benefit-5': 'Kesempatan employee engagement',
        'benefit-6': 'Media coverage dan publikasi positif',
        'partnership-form-title': 'Hubungi Kami',
        'company-name': 'Nama Perusahaan',
        'contact-name': 'Nama Kontak',
        'contact-position': 'Jabatan',
        'contact-phone': 'No. Telefon',
        'partnership-type': 'Jenis Kemitraan',
        'partnership-placeholder': 'Pilih jenis kemitraan...',
        'partnership-funding': 'Pendanaan Program',
        'partnership-employee': 'Employee Volunteering',
        'partnership-inkind': 'Donasi Barang/Jasa',
        'partnership-longterm': 'Kemitraan Jangka Panjang',
        'partnership-message': 'Pesan',
        'partnership-submit': 'Kirim Proposal',

        // Impact Stories
        'impact-stories-title': 'Dampak Nyata Program TaRL',
        'impact-stories-desc': 'Lihat bagaimana program kami mengubah kehidupan anak-anak Indonesia',
        'story-1': '"Sekarang saya bisa membaca buku cerita sendiri. Program ini membuat belajar jadi menyenangkan!"',
        'teacher-position': 'Guru SDN 05 Jayapura',
        'story-2': '"Metode TaRL sangat membantu. Siswa belajar sesuai kemampuan mereka, hasilnya luar biasa."',
        'volunteer-student': 'Relawan Mahasiswa UI',
        'story-3': '"Mengajar dengan program Accelero memberikan pengalaman yang sangat berharga bagi saya."',
        'transparency-title': 'Transparansi Keuangan',
        'transparency-desc': 'Laporan penggunaan dana untuk memastikan akuntabilitas program',
        'expense-program': 'Program Langsung',
        'expense-admin': 'Administrasi',
        'expense-fundraising': 'Fundraising',
        'expense-reserve': 'Dana Cadangan',
        'download-report': 'Download Laporan Lengkap',

        // Footer
        'footer-about': 'Yayasan Accelero berkomitmen meningkatkan literasi dan numerasi dasar melalui program after-school berbasis TaRL.',
        'footer-programs': 'Program',
        'footer-program-1': 'Teaching at the Right Level',
        'footer-program-2': 'Perpustakaan Sekolah',
        'footer-program-3': 'Pelatihan Guru',
        'footer-program-4': 'Evaluasi & Riset',
        'footer-contact': 'Kontak',
        'footer-copyright': '© 2025 Accelero Foundation. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service'
    },

    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-donate': 'Donate',
        'nav-volunteer': 'Volunteer',
        'nav-partnership': 'Partnership',
        'nav-impact': 'Impact',

        // Hero
        'hero-title': 'Advancing Foundational Literacy & Numeracy in Indonesia',
        'hero-subtitle': 'Join Accelero Foundation in delivering Teaching at the Right Level (TaRL) programs to underserved schools',
        'cta-donate': 'Donate Now',
        'cta-volunteer': 'Volunteer',
        'stat-students': 'Students Helped',
        'stat-schools': 'Partner Schools',
        'stat-volunteers': 'Active Volunteers',
        'video-text': 'Watch TaRL Program Video',
        'cost-text': 'per child per program',
        'improvement-text': 'ability improvement',

        // Impact Stats
        'impact-title': 'Real Impact of Our Programs',
        'impact-desc': 'Since 2024, we have helped thousands of Indonesian children improve their literacy and numeracy skills through the Teaching at the Right Level method',
        'stat-label-1': 'Students Helped',
        'stat-desc-1': 'Children receiving appropriate learning',
        'stat-label-2': 'Partner Schools',
        'stat-desc-2': 'Schools implementing TaRL',
        'stat-label-3': 'Ability Improvement',
        'stat-desc-3': 'Average improvement in literacy & numeracy',
        'stat-label-4': 'Active Volunteers',
        'stat-desc-4': 'Students and professionals involved',
        'funding-title': 'Fundraising Target Wave 1',
        'funding-desc': 'Rp 15,000,000 to support 1,000 children in 20 schools',
        'funding-status': '68% achieved • 342 donors • 28 days left',

        // About
        'about-title': 'How TaRL Program Works',
        'about-desc': 'Teaching at the Right Level ensures every child learns according to their ability, not based on age or grade',
        'step-1-title': 'Initial Assessment',
        'step-1-desc': 'Evaluating each student\'s literacy and numeracy abilities',
        'step-2-title': 'Learning Groups',
        'step-2-desc': 'Dividing students based on ability, not age',
        'step-3-title': 'Active Learning',
        'step-3-desc': 'Interactive and engaging teaching methods',
        'step-4-title': 'Regular Evaluation',
        'step-4-desc': 'Monitoring progress and adjusting learning',

        // Donation
        'donate-title': 'Choose Your Impact',
        'donate-desc': 'Every donation directly impacts Indonesian children\'s learning',
        'project-label': 'Select Project',
        'project-desc-1': '150 students need basic literacy program',
        'project-status-1': 'Funds raised: Rp 2,400,000 / Rp 4,500,000',
        'project-desc-2': '200 students need numeracy program',
        'project-status-2': 'Funds raised: Rp 3,200,000 / Rp 6,000,000',
        'amount-label': 'Donation Amount',
        'amount-impact-1': '3 children, 1 month',
        'amount-impact-2': '6 children, 1 month',
        'amount-impact-3': '15 children, 1 month',
        'amount-impact-4': '1 child, full program',
        'frequency-label': 'Frequency',
        'frequency-onetime': 'One-time',
        'frequency-monthly': 'Monthly',
        'impact-text': 'Your donation will help children receive quality education',
        'motivation-label': 'What\'s your reason for giving today?',
        'motivation-placeholder': 'Choose reason...',
        'motivation-1': 'Believe in the importance of education',
        'motivation-2': 'Want to help Indonesian children',
        'motivation-3': 'See the real impact of this program',
        'motivation-4': 'Corporate CSR program',
        'motivation-5': 'Others',
        'message-label': 'Leave a Message (Optional)',
        'donate-button': 'Donate Now',

        // Volunteer
        'volunteer-title': 'Join as a Volunteer',
        'volunteer-desc': 'Help us teach literacy and numeracy directly in schools',
        'form-name': 'Full Name',
        'form-phone': 'Phone Number',
        'form-city': 'City',
        'form-skills': 'Skills',
        'skill-1': 'Teaching Indonesian',
        'skill-2': 'Teaching Mathematics',
        'skill-3': 'Student Mentoring',
        'skill-4': 'Teacher Training',
        'skill-5': 'Documentation',
        'skill-6': 'Administration',
        'form-availability': 'Availability',
        'availability-placeholder': 'Choose availability...',
        'availability-1': 'Weekends',
        'availability-2': 'Weekdays',
        'availability-3': 'Flexible',
        'availability-4': 'Holidays only',
        'form-experience': 'Experience',
        'volunteer-submit': 'Register as Volunteer',

        // Partnership
        'partnership-title': 'Corporate Partnership',
        'partnership-desc': 'Create meaningful CSR programs that impact Indonesian education',
        'benefits-title': 'Partnership Benefits',
        'benefit-1': 'Transparent and measurable impact reports',
        'benefit-2': 'Official partnership certificates and recognition',
        'benefit-3': 'High-quality program documentation',
        'benefit-4': 'Access to educational program data and research',
        'benefit-5': 'Employee engagement opportunities',
        'benefit-6': 'Media coverage and positive publicity',
        'partnership-form-title': 'Contact Us',
        'company-name': 'Company Name',
        'contact-name': 'Contact Name',
        'contact-position': 'Position',
        'contact-phone': 'Phone Number',
        'partnership-type': 'Partnership Type',
        'partnership-placeholder': 'Choose partnership type...',
        'partnership-funding': 'Program Funding',
        'partnership-employee': 'Employee Volunteering',
        'partnership-inkind': 'In-kind Donations',
        'partnership-longterm': 'Long-term Partnership',
        'partnership-message': 'Message',
        'partnership-submit': 'Send Proposal',

        // Impact Stories
        'impact-stories-title': 'Real Impact of TaRL Programs',
        'impact-stories-desc': 'See how our programs are changing the lives of Indonesian children',
        'story-1': '"Now I can read storybooks by myself. This program makes learning fun!"',
        'teacher-position': 'Teacher at SDN 05 Jayapura',
        'story-2': '"The TaRL method is very helpful. Students learn according to their abilities, the results are amazing."',
        'volunteer-student': 'UI Student Volunteer',
        'story-3': '"Teaching with the Accelero program gives me very valuable experience."',
        'transparency-title': 'Financial Transparency',
        'transparency-desc': 'Fund utilization report to ensure program accountability',
        'expense-program': 'Direct Programs',
        'expense-admin': 'Administration',
        'expense-fundraising': 'Fundraising',
        'expense-reserve': 'Reserve Fund',
        'download-report': 'Download Full Report',

        // Footer
        'footer-about': 'Accelero Foundation is committed to improving foundational literacy and numeracy through TaRL-based after-school programs.',
        'footer-programs': 'Programs',
        'footer-program-1': 'Teaching at the Right Level',
        'footer-program-2': 'School Libraries',
        'footer-program-3': 'Teacher Training',
        'footer-program-4': 'Evaluation & Research',
        'footer-contact': 'Contact',
        'footer-copyright': '© 2025 Accelero Foundation. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service'
    }
};

// Global variables
let currentLanguage = 'id';
let selectedProject = null;
let selectedAmount = null;
let videoPlaying = false;
let videoProgress = 0;
let videoInterval;


// DOM elements
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateLanguage(currentLanguage);
    startVideoSimulation();
});

function initializeEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submissions
    const volunteerForm = document.getElementById('volunteer-form');
    const partnershipForm = document.getElementById('partnership-form');

    if (volunteerForm) {
        volunteerForm.addEventListener('submit', handleVolunteerSubmit);
    }

    if (partnershipForm) {
        partnershipForm.addEventListener('submit', handlePartnershipSubmit);
    }

    // Custom amount input
    const customAmountInput = document.getElementById('custom-amount');
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            const amount = parseInt(this.value);
            if (amount > 0) {
                selectedAmount = amount;
                updateImpactPreview(amount);
                // Remove selection from preset buttons
                document.querySelectorAll('.amount-btn').forEach(btn => {
                    btn.classList.remove('border-primary-500', 'bg-primary-50');
                    btn.classList.add('border-gray-200');
                });
            }
        });
    }
}

// Language switching
function switchLanguage(lang) {
    currentLanguage = lang;
    updateLanguage(lang);

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-primary-100', 'text-primary-700');
        btn.classList.add('text-gray-600');
    });

    event.target.classList.add('active', 'bg-primary-100', 'text-primary-700');
    event.target.classList.remove('text-gray-600');

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function updateLanguage(lang) {
    const t = translations[lang];

    // Update all translatable elements
    Object.keys(t).forEach(key => {
        const elements = document.querySelectorAll(`.${key}`);
        elements.forEach(el => {
            el.textContent = t[key];
        });
    });

    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    const navTexts = ['nav-home', 'nav-about', 'nav-donate', 'nav-volunteer', 'nav-partnership', 'nav-impact'];

    navLinks.forEach((link, index) => {
        if (navTexts[index] && t[navTexts[index]]) {
            link.textContent = t[navTexts[index]];
        }
    });
}

// Navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Donation functionality
function selectProject(projectId) {
    selectedProject = projectId;

    // Update UI
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.remove('border-primary-500', 'bg-primary-50');
        card.classList.add('border-gray-200');
    });

    event.currentTarget.classList.remove('border-gray-200');
    event.currentTarget.classList.add('border-primary-500', 'bg-primary-50');

    // Check radio button
    const radio = event.currentTarget.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
    }
}

function selectAmount(amount) {
    selectedAmount = amount;

    // Update UI
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('border-primary-500', 'bg-primary-50');
        btn.classList.add('border-gray-200');
    });

    event.currentTarget.classList.remove('border-gray-200');
    event.currentTarget.classList.add('border-primary-500', 'bg-primary-50');

    // Clear custom amount
    const customInput = document.getElementById('custom-amount');
    if (customInput) {
        customInput.value = '';
    }

    updateImpactPreview(amount);
}

function updateImpactPreview(amount) {
    const impactPreview = document.getElementById('impact-preview');
    const impactText = document.querySelector('.impact-text');

    if (!impactPreview || !impactText) return;

    let message = '';
    const t = translations[currentLanguage];

    if (amount >= 500000) {
        message = currentLanguage === 'id'
            ? `Donasi Rp${amount.toLocaleString()} akan mendukung 1 anak menyelesaikan program TaRL penuh selama 3 bulan`
            : `Your Rp${amount.toLocaleString()} donation will support 1 child to complete the full 3-month TaRL program`;
    } else if (amount >= 250000) {
        const children = Math.floor(amount / 15000);
        message = currentLanguage === 'id'
            ? `Donasi Rp${amount.toLocaleString()} akan membantu ${children} anak mendapat buku bacaan dan pembelajaran selama 1 bulan`
            : `Your Rp${amount.toLocaleString()} donation will help ${children} children get books and learning for 1 month`;
    } else if (amount >= 50000) {
        const children = Math.floor(amount / 15000);
        message = currentLanguage === 'id'
            ? `Donasi Rp${amount.toLocaleString()} akan membantu ${children} anak mendapat akses pembelajaran TaRL`
            : `Your Rp${amount.toLocaleString()} donation will help ${children} children access TaRL learning`;
    } else {
        message = t['impact-text'];
    }

    impactText.textContent = message;
}

function processDonation() {
    // Validate required fields
    if (!selectedProject && !document.querySelector('input[name="project"]:checked')) {
        alert(currentLanguage === 'id' ? 'Silakan pilih proyek terlebih dahulu' : 'Please select a project first');
        return;
    }

    const amount = selectedAmount || parseInt(document.getElementById('custom-amount').value);
    if (!amount || amount < 15000) {
        alert(currentLanguage === 'id' ? 'Jumlah donasi minimal Rp15.000' : 'Minimum donation amount is Rp15,000');
        return;
    }

    // In a real implementation, this would integrate with payment gateway
    const confirmMessage = currentLanguage === 'id'
        ? `Anda akan mendonasikan Rp${amount.toLocaleString()}. Lanjutkan ke pembayaran?`
        : `You will donate Rp${amount.toLocaleString()}. Continue to payment?`;

    if (confirm(confirmMessage)) {
        // Simulate payment process
        showPaymentModal(amount);
    }
}

function showPaymentModal(amount) {
    // Create a simple modal for payment simulation
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-qrcode text-2xl text-green-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    ${currentLanguage === 'id' ? 'Pembayaran QRIS' : 'QRIS Payment'}
                </h3>
                <p class="text-gray-600 mb-6">
                    ${currentLanguage === 'id'
        ? `Scan QR code untuk mendonasikan Rp${amount.toLocaleString()}`
        : `Scan QR code to donate Rp${amount.toLocaleString()}`}
                </p>
                
                <!-- QR Code placeholder -->
                <div class="w-48 h-48 bg-gray-100 mx-auto mb-6 flex items-center justify-center">
                    <div class="w-40 h-40 bg-black opacity-20 flex items-center justify-center">
                        <i class="fas fa-qrcode text-4xl text-gray-600"></i>
                    </div>
                </div>
                
                <div class="flex gap-4">
                    <button onclick="closePaymentModal()" class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        ${currentLanguage === 'id' ? 'Batal' : 'Cancel'}
                    </button>
                    <button onclick="simulatePaymentSuccess()" class="flex-1 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                        ${currentLanguage === 'id' ? 'Simulasi Berhasil' : 'Simulate Success'}
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closePaymentModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.remove();
    }
}

function simulatePaymentSuccess() {
    closePaymentModal();

    // Show success message
    const successModal = document.createElement('div');
    successModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    successModal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-check text-2xl text-green-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    ${currentLanguage === 'id' ? 'Donasi Berhasil!' : 'Donation Successful!'}
                </h3>
                <p class="text-gray-600 mb-6">
                    ${currentLanguage === 'id'
        ? 'Terima kasih atas dukungan Anda. Email konfirmasi dan e-sertifikat akan segera dikirim.'
        : 'Thank you for your support. Confirmation email and e-certificate will be sent soon.'}
                </p>
                <button onclick="closeSuccessModal()" class="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                    ${currentLanguage === 'id' ? 'Tutup' : 'Close'}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(successModal);
}

function closeSuccessModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.remove();
    }
}

// Form submissions
function handleVolunteerSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);

    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i>${currentLanguage === 'id' ? 'Mengirim...' : 'Submitting...'}`;
    submitBtn.disabled = true;

    setTimeout(() => {
        alert(currentLanguage === 'id'
            ? 'Pendaftaran relawan berhasil dikirim! Tim kami akan menghubungi Anda dalam 1-2 hari kerja.'
            : 'Volunteer registration submitted successfully! Our team will contact you within 1-2 business days.');

        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        e.target.reset();
    }, 2000);
}

function handlePartnershipSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);

    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i>${currentLanguage === 'id' ? 'Mengirim...' : 'Sending...'}`;
    submitBtn.disabled = true;

    setTimeout(() => {
        alert(currentLanguage === 'id'
            ? 'Proposal kemitraan berhasil dikirim! Tim kami akan merespons dalam 3-5 hari kerja.'
            : 'Partnership proposal submitted successfully! Our team will respond within 3-5 business days.');

        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        e.target.reset();
    }, 2000);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }
});

function playVideo() {
    const modal = document.getElementById('video-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Start video simulation
    startVideoPlayback();
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';

    // Stop video simulation
    stopVideoPlayback();
}

function togglePlayPause() {
    const icon = document.getElementById('play-pause-icon');

    if (videoPlayin`g) {
        // Pause
        icon.className = 'fas fa-play text-lg ml-0.5';
        videoPlaying = false;
        clearInterval(videoInterval);
    } else {
        // Play
        icon.className = 'fas fa-pause text-lg';
        videoPlaying = true;
        startVideoProgress();
    }
}

function startVideoSimulation() {
    // Add loading effect periodically
    setInterval(() => {
        const loading = document.querySelector('.video-loading');
        if (Math.random() < 0.1) { // 10% chance every interval
            loading.classList.add('show');
            setTimeout(() => {
                loading.classList.remove('show');
            }, 2000);
        }
    }, 10000);
}

function startVideoPlayback() {
    videoPlaying = true;
    videoProgress = 0;

    const playPauseIcon = document.getElementById('play-pause-icon');
    playPauseIcon.className = 'fas fa-pause text-lg';

    startVideoProgress();
}

function stopVideoPlayback() {
    videoPlaying = false;
    videoProgress = 0;
    clearInterval(videoInterval);

    // Reset progress
    const progressBar = document.getElementById('video-progress');
    const currentTime = document.getElementById('current-time');

    if (progressBar) progressBar.style.width = '0%';
    if (currentTime) currentTime.textContent = '0:00';
}

function startVideoProgress() {
    videoInterval = setInterval(() => {
        if (videoProgress < 100) {
            videoProgress += 0.5; // Increment by 0.5% every 100ms

            const progressBar = document.getElementById('video-progress');
            const currentTime = document.getElementById('current-time');

            if (progressBar) {
                progressBar.style.width = videoProgress + '%';
            }

            if (currentTime) {
                const seconds = Math.floor((videoProgress / 100) * 225); // 3:45 = 225 seconds
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                currentTime.textContent = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
            }
        } else {
            // Video finished
            clearInterval(videoInterval);
            videoPlaying = false;
            const playPauseIcon = document.getElementById('play-pause-icon');
            playPauseIcon.className = 'fas fa-play text-lg ml-0.5';
        }
    }, 100);
}
console.log('Accelero Foundation website loaded ✨');