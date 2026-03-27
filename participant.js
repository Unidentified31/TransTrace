// TEMPORARY FILE FOR REVIEW
// Paste the participant.js content from GitHub here
// This file will be deleted after review

// Instructions:
// 1. Copy the entire participant.js from GitHub
// 2. Paste it here, replacing this comment
// 3. I'll review it and tell you what needs to be fixed
// 4. Then delete this file from Xcode



// TransTrace Participant Interface - Part 1: Core Setup & Translations
// Complete production-ready participant web application

// ============================================================================
// TRANSLATIONS
// ============================================================================

const translations = {
    en: {
        loading: "Loading your translation session...",
        "error-title": "Session Not Found",
        "error-invalid-link": "This link is no longer valid. It may have expired, already been used, or does not exist.",
        "layout-title": "Translation Setup",
        "layout-subtitle": "Choose your preferences for the translation workspace",
        "language-select": "Select Language",
        "font-select": "Choose Font",
        "font-serif": "Serif",
        "font-sans": "Sans Serif",
        "font-mono": "Monospace",
        "direction-select": "Text Direction",
        "direction-ltr": "Left to Right",
        "direction-rtl": "Right to Left",
        "layout-select": "Workspace Layout",
        "layout-side-by-side": "Side by Side",
        "layout-top-bottom": "Top & Bottom",
        "mic-required": "Microphone Required",
        "mic-description": "This study requires think-aloud recording. Please enable your microphone.",
        "mic-enable": "Enable Microphone",
        "mic-enabled": "Microphone enabled",
        "mic-denied": "Microphone access denied. You cannot proceed without enabling the microphone.",
        "device-compatible": "Your device is compatible with this study",
        "device-incompatible-desktop": "This study requires a computer. Please switch devices before continuing.",
        "device-incompatible-mobile": "This study requires a phone or tablet. Please switch devices before continuing.",
        continue: "Continue",
        "consent-title": "Informed Consent",
        "consent-subtitle": "Please read the following carefully before proceeding.",
        "data-notice-title": "Data Collected:",
        "data-notice-text": "Keystroke timing and sequences, and optional demographic information. No names, emails, or identifying information are stored.",
        "consent-decline": "I Do Not Wish to Participate",
        "consent-accept": "I Agree to Participate",
        "declined-title": "Thank You",
        "declined-message": "You have chosen not to participate. You may close this window.",
        "demographics-title": "Background Information",
        "demographics-subtitle": "All fields are optional. This helps contextualize the research.",
        "demo-gender": "Gender",
        "demo-gender-female": "Female",
        "demo-gender-male": "Male",
        "demo-gender-nonbinary": "Non-binary",
        "demo-gender-other": "Other",
        "demo-gender-prefer": "Prefer not to say",
        "demo-age": "Age",
        "demo-native-lang": "Native Language",
        "demo-target-lang": "Target Language",
        "demo-experience": "Years of Translation Experience",
        "demo-experience-select": "Select experience level",
        "demo-experience-less1": "Less than 1 year",
        "demo-experience-1-3": "1–3 years",
        "demo-experience-3-5": "3–5 years",
        "demo-experience-5-10": "5–10 years",
        "demo-experience-10plus": "10+ years",
        "demo-education": "College Level",
        "demo-education-select": "Select education level",
        "demo-education-college": "College Level",
        "demo-education-graduated": "Graduated",
        "demo-education-postgrad": "Postgraduate",
        "demo-major": "Major / Field of Study",
        back: "Back",
        "start-translating": "Start Translating",
        "source-text-header": "Source Text",
        "mt-output": "Machine Translation",
        "translation-header": "Your Translation",
        "post-edit-mode": "Post-Edit Mode",
        "record-start": "Start Recording",
        "record-stop": "Stop Recording",
        "submit-translation": "Submit Translation",
        "survey-title": "Quick Survey",
        "survey-subtitle": "Please answer the following questions about your translation experience.",
        "survey-skip": "Skip",
        "survey-submit": "Submit",
        "thankyou-title": "Thank You",
        "thankyou-message": "Your translation has been recorded.",
        words: "words"
    },
    
    ar: {
        loading: "جاري تحميل جلسة الترجمة...",
        "error-title": "الجلسة غير موجودة",
        "error-invalid-link": "هذا الرابط لم يعد صالحًا. ربما انتهت صلاحيته أو تم استخدامه بالفعل أو أنه غير موجود.",
        "layout-title": "إعداد الترجمة",
        "layout-subtitle": "اختر تفضيلاتك لمساحة عمل الترجمة",
        "language-select": "اختر اللغة",
        "font-select": "اختر الخط",
        "font-serif": "سيريف",
        "font-sans": "سانس سيريف",
        "font-mono": "أحادي المسافة",
        "direction-select": "اتجاه النص",
        "direction-ltr": "من اليسار إلى اليمين",
        "direction-rtl": "من اليمين إلى اليسار",
        "layout-select": "تخطيط مساحة العمل",
        "layout-side-by-side": "جنبًا إلى جنب",
        "layout-top-bottom": "أعلى وأسفل",
        "mic-required": "الميكروفون مطلوب",
        "mic-description": "تتطلب هذه الدراسة تسجيل التفكير بصوت عالٍ. يرجى تمكين الميكروفون.",
        "mic-enable": "تمكين الميكروفون",
        "mic-enabled": "تم تمكين الميكروفون",
        "mic-denied": "تم رفض الوصول إلى الميكروفون. لا يمكنك المتابعة بدون تمكين الميكروفون.",
        "device-compatible": "جهازك متوافق مع هذه الدراسة",
        "device-incompatible-desktop": "تتطلب هذه الدراسة جهاز كمبيوتر. يرجى تبديل الأجهزة قبل المتابعة.",
        "device-incompatible-mobile": "تتطلب هذه الدراسة هاتفًا أو جهازًا لوحيًا. يرجى تبديل الأجهزة قبل المتابعة.",
        continue: "متابعة",
        "consent-title": "الموافقة المستنيرة",
        "consent-subtitle": "يرجى القراءة بعناية قبل المتابعة.",
        "data-notice-title": "البيانات المجمعة:",
        "data-notice-text": "توقيت وتسلسلات ضغطات المفاتيح، والمعلومات الديموغرافية الاختيارية. لا يتم تخزين الأسماء أو رسائل البريد الإلكتروني أو المعلومات التعريفية.",
        "consent-decline": "لا أرغب في المشاركة",
        "consent-accept": "أوافق على المشاركة",
        "declined-title": "شكرًا لك",
        "declined-message": "لقد اخترت عدم المشاركة. يمكنك إغلاق هذه النافذة.",
        "demographics-title": "معلومات الخلفية",
        "demographics-subtitle": "جميع الحقول اختيارية. هذا يساعد في وضع البحث في سياقه.",
        "demo-gender": "الجنس",
        "demo-gender-female": "أنثى",
        "demo-gender-male": "ذكر",
        "demo-gender-nonbinary": "غير ثنائي",
        "demo-gender-other": "آخر",
        "demo-gender-prefer": "أفضل عدم الإفصاح",
        "demo-age": "العمر",
        "demo-native-lang": "اللغة الأم",
        "demo-target-lang": "اللغة المستهدفة",
        "demo-experience": "سنوات الخبرة في الترجمة",
        "demo-experience-select": "اختر مستوى الخبرة",
        "demo-experience-less1": "أقل من سنة",
        "demo-experience-1-3": "1-3 سنوات",
        "demo-experience-3-5": "3-5 سنوات",
        "demo-experience-5-10": "5-10 سنوات",
        "demo-experience-10plus": "أكثر من 10 سنوات",
        "demo-education": "المستوى التعليمي",
        "demo-education-select": "اختر المستوى التعليمي",
        "demo-education-college": "مستوى جامعي",
        "demo-education-graduated": "متخرج",
        "demo-education-postgrad": "دراسات عليا",
        "demo-major": "التخصص / مجال الدراسة",
        back: "رجوع",
        "start-translating": "ابدأ الترجمة",
        "source-text-header": "النص المصدر",
        "mt-output": "الترجمة الآلية",
        "translation-header": "ترجمتك",
        "post-edit-mode": "وضع التحرير اللاحق",
        "record-start": "ابدأ التسجيل",
        "record-stop": "أوقف التسجيل",
        "submit-translation": "إرسال الترجمة",
        "survey-title": "استبيان سريع",
        "survey-subtitle": "يرجى الإجابة على الأسئلة التالية حول تجربة الترجمة الخاصة بك.",
        "survey-skip": "تخطي",
        "survey-submit": "إرسال",
        "thankyou-title": "شكرًا لك",
        "thankyou-message": "تم تسجيل ترجمتك.",
        words: "كلمات"
    },
    
    es: {
        loading: "Cargando su sesión de traducción...",
        "error-title": "Sesión No Encontrada",
        "error-invalid-link": "Este enlace ya no es válido. Puede haber caducado, ya se usó o no existe.",
        "layout-title": "Configuración de Traducción",
        "layout-subtitle": "Elija sus preferencias para el espacio de trabajo de traducción",
        "language-select": "Seleccionar Idioma",
        "font-select": "Elegir Fuente",
        "font-serif": "Serif",
        "font-sans": "Sans Serif",
        "font-mono": "Monoespaciado",
        "direction-select": "Dirección del Texto",
        "direction-ltr": "Izquierda a Derecha",
        "direction-rtl": "Derecha a Izquierda",
        "layout-select": "Diseño del Espacio de Trabajo",
        "layout-side-by-side": "Lado a Lado",
        "layout-top-bottom": "Arriba y Abajo",
        "mic-required": "Micrófono Requerido",
        "mic-description": "Este estudio requiere grabación de pensamiento en voz alta. Por favor, habilite su micrófono.",
        "mic-enable": "Habilitar Micrófono",
        "mic-enabled": "Micrófono habilitado",
        "mic-denied": "Acceso al micrófono denegado. No puede continuar sin habilitar el micrófono.",
        "device-compatible": "Su dispositivo es compatible con este estudio",
        "device-incompatible-desktop": "Este estudio requiere una computadora. Por favor, cambie de dispositivo antes de continuar.",
        "device-incompatible-mobile": "Este estudio requiere un teléfono o tableta. Por favor, cambie de dispositivo antes de continuar.",
        continue: "Continuar",
        "consent-title": "Consentimiento Informado",
        "consent-subtitle": "Por favor, lea lo siguiente cuidadosamente antes de continuar.",
        "data-notice-title": "Datos Recopilados:",
        "data-notice-text": "Tiempo y secuencias de teclas, e información demográfica opcional. No se almacenan nombres, correos electrónicos ni información identificativa.",
        "consent-decline": "No Deseo Participar",
        "consent-accept": "Acepto Participar",
        "declined-title": "Gracias",
        "declined-message": "Ha elegido no participar. Puede cerrar esta ventana.",
        "demographics-title": "Información de Antecedentes",
        "demographics-subtitle": "Todos los campos son opcionales. Esto ayuda a contextualizar la investigación.",
        "demo-gender": "Género",
        "demo-gender-female": "Femenino",
        "demo-gender-male": "Masculino",
        "demo-gender-nonbinary": "No binario",
        "demo-gender-other": "Otro",
        "demo-gender-prefer": "Prefiero no decir",
        "demo-age": "Edad",
        "demo-native-lang": "Idioma Nativo",
        "demo-target-lang": "Idioma Objetivo",
        "demo-experience": "Años de Experiencia en Traducción",
        "demo-experience-select": "Seleccione nivel de experiencia",
        "demo-experience-less1": "Menos de 1 año",
        "demo-experience-1-3": "1–3 años",
        "demo-experience-3-5": "3–5 años",
        "demo-experience-5-10": "5–10 años",
        "demo-experience-10plus": "Más de 10 años",
        "demo-education": "Nivel Universitario",
        "demo-education-select": "Seleccione nivel educativo",
        "demo-education-college": "Nivel Universitario",
        "demo-education-graduated": "Graduado",
        "demo-education-postgrad": "Postgrado",
        "demo-major": "Especialidad / Campo de Estudio",
        back: "Atrás",
        "start-translating": "Comenzar a Traducir",
        "source-text-header": "Texto Fuente",
        "mt-output": "Traducción Automática",
        "translation-header": "Su Traducción",
        "post-edit-mode": "Modo Post-Edición",
        "record-start": "Iniciar Grabación",
        "record-stop": "Detener Grabación",
        "submit-translation": "Enviar Traducción",
        "survey-title": "Encuesta Rápida",
        "survey-subtitle": "Por favor, responda las siguientes preguntas sobre su experiencia de traducción.",
        "survey-skip": "Omitir",
        "survey-submit": "Enviar",
        "thankyou-title": "Gracias",
        "thankyou-message": "Su traducción ha sido registrada.",
        words: "palabras"
    },
    
    fr: {
        loading: "Chargement de votre session de traduction...",
        "error-title": "Session Introuvable",
        "error-invalid-link": "Ce lien n'est plus valide. Il a peut-être expiré, a déjà été utilisé ou n'existe pas.",
        "layout-title": "Configuration de Traduction",
        "layout-subtitle": "Choisissez vos préférences pour l'espace de travail de traduction",
        "language-select": "Sélectionner la Langue",
        "font-select": "Choisir la Police",
        "font-serif": "Serif",
        "font-sans": "Sans Serif",
        "font-mono": "Monospace",
        "direction-select": "Direction du Texte",
        "direction-ltr": "Gauche à Droite",
        "direction-rtl": "Droite à Gauche",
        "layout-select": "Disposition de l'Espace de Travail",
        "layout-side-by-side": "Côte à Côte",
        "layout-top-bottom": "Haut et Bas",
        "mic-required": "Microphone Requis",
        "mic-description": "Cette étude nécessite un enregistrement à voix haute. Veuillez activer votre microphone.",
        "mic-enable": "Activer le Microphone",
        "mic-enabled": "Microphone activé",
        "mic-denied": "Accès au microphone refusé. Vous ne pouvez pas continuer sans activer le microphone.",
        "device-compatible": "Votre appareil est compatible avec cette étude",
        "device-incompatible-desktop": "Cette étude nécessite un ordinateur. Veuillez changer d'appareil avant de continuer.",
        "device-incompatible-mobile": "Cette étude nécessite un téléphone ou une tablette. Veuillez changer d'appareil avant de continuer.",
        continue: "Continuer",
        "consent-title": "Consentement Éclairé",
        "consent-subtitle": "Veuillez lire attentivement ce qui suit avant de continuer.",
        "data-notice-title": "Données Collectées:",
        "data-notice-text": "Temps et séquences de frappe, et informations démographiques optionnelles. Aucun nom, e-mail ou information identificatoire n'est stocké.",
        "consent-decline": "Je Ne Souhaite Pas Participer",
        "consent-accept": "J'Accepte de Participer",
        "declined-title": "Merci",
        "declined-message": "Vous avez choisi de ne pas participer. Vous pouvez fermer cette fenêtre.",
        "demographics-title": "Informations de Contexte",
        "demographics-subtitle": "Tous les champs sont optionnels. Cela aide à contextualiser la recherche.",
        "demo-gender": "Genre",
        "demo-gender-female": "Féminin",
        "demo-gender-male": "Masculin",
        "demo-gender-nonbinary": "Non-binaire",
        "demo-gender-other": "Autre",
        "demo-gender-prefer": "Préfère ne pas dire",
        "demo-age": "Âge",
        "demo-native-lang": "Langue Maternelle",
        "demo-target-lang": "Langue Cible",
        "demo-experience": "Années d'Expérience en Traduction",
        "demo-experience-select": "Sélectionnez le niveau d'expérience",
        "demo-experience-less1": "Moins d'1 an",
        "demo-experience-1-3": "1–3 ans",
        "demo-experience-3-5": "3–5 ans",
        "demo-experience-5-10": "5–10 ans",
        "demo-experience-10plus": "Plus de 10 ans",
        "demo-education": "Niveau Universitaire",
        "demo-education-select": "Sélectionnez le niveau d'éducation",
        "demo-education-college": "Niveau Universitaire",
        "demo-education-graduated": "Diplômé",
        "demo-education-postgrad": "Troisième Cycle",
        "demo-major": "Spécialité / Domaine d'Étude",
        back: "Retour",
        "start-translating": "Commencer à Traduire",
        "source-text-header": "Texte Source",
        "mt-output": "Traduction Automatique",
        "translation-header": "Votre Traduction",
        "post-edit-mode": "Mode Post-Édition",
        "record-start": "Démarrer l'Enregistrement",
        "record-stop": "Arrêter l'Enregistrement",
        "submit-translation": "Soumettre la Traduction",
        "survey-title": "Enquête Rapide",
        "survey-subtitle": "Veuillez répondre aux questions suivantes sur votre expérience de traduction.",
        "survey-skip": "Passer",
        "survey-submit": "Soumettre",
        "thankyou-title": "Merci",
        "thankyou-message": "Votre traduction a été enregistrée.",
        words: "mots"
    },
    
    it: {
        loading: "Caricamento della sessione di traduzione...",
        "error-title": "Sessione Non Trovata",
        "error-invalid-link": "Questo link non è più valido. Potrebbe essere scaduto, già utilizzato o non esistere.",
        "layout-title": "Impostazione Traduzione",
        "layout-subtitle": "Scegli le tue preferenze per l'area di lavoro di traduzione",
        "language-select": "Seleziona Lingua",
        "font-select": "Scegli Font",
        "font-serif": "Serif",
        "font-sans": "Sans Serif",
        "font-mono": "Monospazio",
        "direction-select": "Direzione del Testo",
        "direction-ltr": "Da Sinistra a Destra",
        "direction-rtl": "Da Destra a Sinistra",
        "layout-select": "Layout dell'Area di Lavoro",
        "layout-side-by-side": "Affiancati",
        "layout-top-bottom": "Sopra e Sotto",
        "mic-required": "Microfono Richiesto",
        "mic-description": "Questo studio richiede la registrazione del pensiero ad alta voce. Si prega di abilitare il microfono.",
        "mic-enable": "Abilita Microfono",
        "mic-enabled": "Microfono abilitato",
        "mic-denied": "Accesso al microfono negato. Non puoi procedere senza abilitare il microfono.",
        "device-compatible": "Il tuo dispositivo è compatibile con questo studio",
        "device-incompatible-desktop": "Questo studio richiede un computer. Si prega di cambiare dispositivo prima di continuare.",
        "device-incompatible-mobile": "Questo studio richiede un telefono o tablet. Si prega di cambiare dispositivo prima di continuare.",
        continue: "Continua",
        "consent-title": "Consenso Informato",
        "consent-subtitle": "Si prega di leggere attentamente quanto segue prima di procedere.",
        "data-notice-title": "Dati Raccolti:",
        "data-notice-text": "Tempi e sequenze di digitazione e informazioni demografiche opzionali. Non vengono memorizzati nomi, email o informazioni identificative.",
        "consent-decline": "Non Desidero Partecipare",
        "consent-accept": "Accetto di Partecipare",
        "declined-title": "Grazie",
        "declined-message": "Hai scelto di non partecipare. Puoi chiudere questa finestra.",
        "demographics-title": "Informazioni di Base",
        "demographics-subtitle": "Tutti i campi sono facoltativi. Questo aiuta a contestualizzare la ricerca.",
        "demo-gender": "Genere",
        "demo-gender-female": "Femminile",
        "demo-gender-male": "Maschile",
        "demo-gender-nonbinary": "Non binario",
        "demo-gender-other": "Altro",
        "demo-gender-prefer": "Preferisco non dirlo",
        "demo-age": "Età",
        "demo-native-lang": "Lingua Nativa",
        "demo-target-lang": "Lingua di Destinazione",
        "demo-experience": "Anni di Esperienza nella Traduzione",
        "demo-experience-select": "Seleziona livello di esperienza",
        "demo-experience-less1": "Meno di 1 anno",
        "demo-experience-1-3": "1–3 anni",
        "demo-experience-3-5": "3–5 anni",
        "demo-experience-5-10": "5–10 anni",
        "demo-experience-10plus": "Più di 10 anni",
        "demo-education": "Livello Universitario",
        "demo-education-select": "Seleziona livello di istruzione",
        "demo-education-college": "Livello Universitario",
        "demo-education-graduated": "Laureato",
        "demo-education-postgrad": "Post Laurea",
        "demo-major": "Specializzazione / Campo di Studio",
        back: "Indietro",
        "start-translating": "Inizia a Tradurre",
        "source-text-header": "Testo Sorgente",
        "mt-output": "Traduzione Automatica",
        "translation-header": "La Tua Traduzione",
        "post-edit-mode": "Modalità Post-Editing",
        "record-start": "Avvia Registrazione",
        "record-stop": "Ferma Registrazione",
        "submit-translation": "Invia Traduzione",
        "survey-title": "Sondaggio Rapido",
        "survey-subtitle": "Si prega di rispondere alle seguenti domande sulla tua esperienza di traduzione.",
        "survey-skip": "Salta",
        "survey-submit": "Invia",
        "thankyou-title": "Grazie",
        "thankyou-message": "La tua traduzione è stata registrata.",
        words: "parole"
    }
};

// ============================================================================
// APP STATE & CONFIGURATION
// ============================================================================

class TransTraceParticipant {
    constructor() {
        // Always use Vercel API routes
        this.config = {
            apiBaseUrl: '/api/participate',
            supabaseUrl: 'https://itrqgtemcmhpzqqayldo.supabase.co',
            supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0cnFndGVtY21ocHpxcWF5bGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NzE3MDIsImV4cCI6MjA4ODM0NzcwMn0.XTsvGDO2AJeyHzMvEa58z6M-VdKMAgBVdtTBkqaMxMo',
            autoSaveInterval: 30000,
            keystrokeBufferSize: 50,
            pauseThreshold: 2000,
            useDirectSupabase: true // Set to true to bypass Vercel API (for testing)
        };
        
        this.state = {
            token: null,
            sessionId: null,
            sessionConfig: null,
            sessionStartTime: null,
            currentLanguage: 'en',
            selectedFont: 'serif',
            selectedDirection: 'ltr',
            selectedLayout: 'horizontal',
            micEnabled: false,
            isRecording: false,
            mediaRecorder: null,
            audioChunks: [],
            keystrokeBuffer: [],
            lastKeystrokeTime: 0,
            demographics: {},
            surveyResponses: {}
        };
        
        this.screens = {
            loading: document.getElementById('loading-screen'),
            error: document.getElementById('error-screen'),
            layout: document.getElementById('layout-screen'),
            consent: document.getElementById('consent-screen'),
            declined: document.getElementById('declined-screen'),
            demographics: document.getElementById('demographics-screen'),
            workspace: document.getElementById('workspace-screen'),
            survey: document.getElementById('survey-screen'),
            thankyou: document.getElementById('thankyou-screen')
        };
    }
    
    // ========================================================================
    // INITIALIZATION
    // ========================================================================
    
    async init() {
        console.log('TransTrace Participant Interface initializing...');
        
        // Extract token from URL
        this.state.token = this.getTokenFromURL();
        
        if (!this.state.token) {
            this.showError('No session token provided in URL');
            return;
        }
        
        // Load session configuration
        await this.loadSession();
    }
    
    getTokenFromURL() {
        const pathParts = window.location.pathname.split('/');
        const token = pathParts[pathParts.length - 1];
        
        // Also check query parameters as fallback
        const urlParams = new URLSearchParams(window.location.search);
        return token || urlParams.get('token');
    }
    
    async loadSession() {
        try {
            console.log('Loading session for token:', this.state.token);
            
            let data;
            
            // Try Vercel API first, fallback to direct Supabase
            if (!this.config.useDirectSupabase) {
                try {
                    const response = await fetch(`${this.config.apiBaseUrl}/${this.state.token}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        data = await response.json();
                    } else if (response.status === 404 || response.status === 410) {
                        throw new Error('Session not found or expired');
                    } else {
                        console.warn('Vercel API failed, trying direct Supabase...');
                        this.config.useDirectSupabase = true;
                    }
                } catch (apiError) {
                    console.warn('Vercel API error, trying direct Supabase:', apiError);
                    this.config.useDirectSupabase = true;
                }
            }
            
            // Direct Supabase fallback
            if (this.config.useDirectSupabase || !data) {
                console.log('Using direct Supabase connection...');
                data = await this.loadSessionFromSupabase();
            }
            
            if (!data) {
                throw new Error('Failed to load session configuration');
            }
            
            this.state.sessionConfig = data;
            this.state.sessionId = data.session_id;
            this.config.pauseThreshold = data.pause_threshold_ms || 2000;
            
            console.log('Session loaded:', data);
            
            // Send device info
            await this.sendDeviceInfo();
            
            // Show layout selection screen
            this.setupLayoutScreen();
            this.showScreen('layout');
            
        } catch (error) {
            console.error('Failed to load session:', error);
            this.showError(error.message);
        }
    }
    
    async loadSessionFromSupabase() {
        try {
            // 1. Get participant link by token
            const linkResponse = await fetch(
                `${this.config.supabaseUrl}/rest/v1/participant_links?token=eq.${this.state.token}&select=*`,
                {
                    headers: {
                        'apikey': this.config.supabaseAnonKey,
                        'Authorization': `Bearer ${this.config.supabaseAnonKey}`
                    }
                }
            );
            
            if (!linkResponse.ok) {
                throw new Error('Failed to fetch participant link');
            }
            
            const links = await linkResponse.json();
            
            if (!links || links.length === 0) {
                throw new Error('Session not found or expired');
            }
            
            const link = links[0];
            
            // Check if already used
            if (link.used_at) {
                throw new Error('This link has already been used');
            }
            
            // 2. Get project details
            const projectResponse = await fetch(
                `${this.config.supabaseUrl}/rest/v1/projects?id=eq.${link.project_id}&select=*`,
                {
                    headers: {
                        'apikey': this.config.supabaseAnonKey,
                        'Authorization': `Bearer ${this.config.supabaseAnonKey}`
                    }
                }
            );
            
            if (!projectResponse.ok) {
                throw new Error('Failed to fetch project');
            }
            
            const projects = await projectResponse.json();
            const project = projects[0];
            
            // 3. Create session
            const sessionResponse = await fetch(
                `${this.config.supabaseUrl}/rest/v1/sessions`,
                {
                    method: 'POST',
                    headers: {
                        'apikey': this.config.supabaseAnonKey,
                        'Authorization': `Bearer ${this.config.supabaseAnonKey}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=representation'
                    },
                    body: JSON.stringify({
                        project_id: link.project_id,
                        participant_code: link.participant_code || `P${Date.now()}`,
                        source_text: project.source_text,
                        status: 'in_progress',
                        started_at: new Date().toISOString()
                    })
                }
            );
            
            if (!sessionResponse.ok) {
                throw new Error('Failed to create session');
            }
            
            const sessions = await sessionResponse.json();
            const session = sessions[0];
            
            // 4. Mark link as used
            await fetch(
                `${this.config.supabaseUrl}/rest/v1/participant_links?id=eq.${link.id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'apikey': this.config.supabaseAnonKey,
                        'Authorization': `Bearer ${this.config.supabaseAnonKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        used_at: new Date().toISOString(),
                        session_id: session.id
                    })
                }
            );
            
            // Return formatted config
            return {
                session_id: session.id,
                project_title: project.title,
                source_text: project.source_text,
                translation_mode: project.translation_mode || 'from_scratch',
                mt_output: project.mt_output,
                think_aloud_enabled: project.think_aloud_enabled || false,
                consent_text: project.consent_text,
                survey_questions: project.survey_questions || [],
                pause_threshold_ms: 2000,
                required_device: project.required_device || 'any'
            };
            
        } catch (error) {
            console.error('Direct Supabase load failed:', error);
            throw error;
        }
    }
    
    async sendDeviceInfo() {
        const deviceInfo = this.getDeviceInfo();
        
        try {
            if (!this.config.useDirectSupabase) {
                await fetch(`${this.config.apiBaseUrl}/${this.state.token}/device`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(deviceInfo)
                });
            } else {
                // Update session with device info
                await fetch(
                    `${this.config.supabaseUrl}/rest/v1/sessions?id=eq.${this.state.sessionId}`,
                    {
                        method: 'PATCH',
                        headers: {
                            'apikey': this.config.supabaseAnonKey,
                            'Authorization': `Bearer ${this.config.supabaseAnonKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            device_type: deviceInfo.device_type,
                            device_os: deviceInfo.device_os
                        })
                    }
                );
            }
        } catch (error) {
            console.error('Failed to send device info:', error);
        }
    }
    
    getDeviceInfo() {
        const ua = navigator.userAgent;
        const isMobile = /Mobile|Android|iPhone|iPad|iPod/.test(ua);
        
        let os = 'Unknown';
        if (/Mac/.test(ua)) os = 'macOS';
        else if (/Windows/.test(ua)) os = 'Windows';
        else if (/Linux/.test(ua)) os = 'Linux';
        else if (/Android/.test(ua)) os = 'Android';
        else if (/iOS|iPhone|iPad/.test(ua)) os = 'iOS';
        
        return {
            device_type: isMobile ? 'mobile' : 'desktop',
            device_os: os,
            user_agent: ua,
            screen_width: window.screen.width,
            screen_height: window.screen.height
        };
    }
    
    // ========================================================================
    // SCREEN MANAGEMENT
    // ========================================================================
    
    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => screen.classList.remove('active'));
        this.screens[screenName].classList.add('active');
    }
    
    showError(message) {
        document.getElementById('error-message').textContent = message;
        this.showScreen('error');
    }
    
    // ========================================================================
    // INTERNATIONALIZATION
    // ========================================================================
    
    setLanguage(lang) {
        this.state.currentLanguage = lang;
        
        // Update HTML lang and dir attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }
    
    t(key) {
        return translations[this.state.currentLanguage][key] || translations.en[key] || key;
    }
    
    // ========================================================================
    // LAYOUT SCREEN SETUP
    // ========================================================================
    
    setupLayoutScreen() {
        // Language switcher
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.setLanguage(btn.dataset.lang);
            });
        });
        
        // Font picker
        document.querySelectorAll('.font-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.font-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.state.selectedFont = btn.dataset.font;
            });
        });
        
        // Direction toggle
        document.querySelectorAll('.dir-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.state.selectedDirection = btn.dataset.direction;
            });
        });
        
        // Layout picker
        document.querySelectorAll('.layout-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.layout-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.state.selectedLayout = card.dataset.layout;
            });
        });
        
        // Auto-select vertical layout on mobile
        if (window.innerWidth < 640) {
            document.querySelector('.layout-card[data-layout="vertical"]').click();
        }
        
        // Device compatibility check
        this.checkDeviceCompatibility();
        
        // Think-aloud setup
        if (this.state.sessionConfig.think_aloud_enabled) {
            document.getElementById('mic-notice').style.display = 'block';
            document.getElementById('enable-mic-btn').addEventListener('click', () => {
                this.requestMicrophonePermission();
            });
        }
        
        // Continue button
        document.getElementById('continue-layout-btn').addEventListener('click', () => {
            this.proceedFromLayout();
        });
    }
    
    checkDeviceCompatibility() {
        const deviceInfo = this.getDeviceInfo();
        const required = this.state.sessionConfig.required_device || 'any';
        
        if (required === 'any') return;
        
        const notice = document.getElementById('device-notice');
        const icon = document.getElementById('device-icon');
        const title = document.getElementById('device-title');
        const message = document.getElementById('device-message');
        
        notice.style.display = 'block';
        
        const isCompatible =
            (required === 'desktop' && deviceInfo.device_type === 'desktop') ||
            (required === 'mobile_tablet' && deviceInfo.device_type === 'mobile');
        
        if (isCompatible) {
            notice.classList.remove('error');
            notice.classList.add('success');
            icon.textContent = '✓';
            title.textContent = this.t('device-compatible');
            message.textContent = '';
        } else {
            notice.classList.remove('success');
            notice.classList.add('error');
            icon.textContent = '⚠️';
            title.textContent = 'Device Incompatible';
            message.textContent = required === 'desktop'
                ? this.t('device-incompatible-desktop')
                : this.t('device-incompatible-mobile');
            
            // Disable continue button
            document.getElementById('continue-layout-btn').disabled = true;
        }
    }
    
    async requestMicrophonePermission() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            stream.getTracks().forEach(track => track.stop());
            
            this.state.micEnabled = true;
            
            const status = document.getElementById('mic-status');
            status.style.display = 'block';
            status.className = 'notice success';
            status.innerHTML = `<p>${this.t('mic-enabled')}</p>`;
            
            document.getElementById('enable-mic-btn').style.display = 'none';
            
        } catch (error) {
            console.error('Microphone permission denied:', error);
            
            const status = document.getElementById('mic-status');
            status.style.display = 'block';
            status.className = 'notice error';
            status.innerHTML = `<p>${this.t('mic-denied')}</p>`;
            
            // Disable continue if mic is required
            document.getElementById('continue-layout-btn').disabled = true;
        }
    }
    
    proceedFromLayout() {
        // Check if mic is required but not enabled
        if (this.state.sessionConfig.think_aloud_enabled && !this.state.micEnabled) {
            alert(this.t('mic-denied'));
            return;
        }
        
        // Go to consent or skip to demographics
        if (this.state.sessionConfig.consent_text) {
            this.setupConsentScreen();
            this.showScreen('consent');
        } else {
            this.setupDemographicsScreen();
            this.showScreen('demographics');
        }
    }
    
    // ========================================================================
    // CONSENT SCREEN
    // ========================================================================
    
    setupConsentScreen() {
        document.getElementById('consent-text').textContent = this.state.sessionConfig.consent_text;
        
        document.getElementById('decline-btn').addEventListener('click', () => {
            this.showScreen('declined');
        });
        
        document.getElementById('accept-btn').addEventListener('click', async () => {
            // Record consent timestamp
            this.state.consentTimestamp = new Date().toISOString();
            
            this.setupDemographicsScreen();
            this.showScreen('demographics');
        });
    }
    
    // ========================================================================
    // DEMOGRAPHICS SCREEN
    // ========================================================================
    
    setupDemographicsScreen() {
        const form = document.getElementById('demographics-form');
        
        document.getElementById('back-from-demo-btn').addEventListener('click', () => {
            if (this.state.sessionConfig.consent_text) {
                this.showScreen('consent');
            } else {
                this.showScreen('layout');
            }
        });
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect demographics
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const age = document.getElementById('age').value;
            const nativeLang = document.getElementById('native-language').value;
            const targetLang = document.getElementById('target-language').value;
            const experience = document.getElementById('experience').value;
            const education = document.getElementById('education').value;
            const major = document.getElementById('major').value;
            
            this.state.demographics = {
                gender, age, nativeLang, targetLang,
                experience, education, major
            };
            
            // Start translation session
            this.startTranslation();
        });
    }
    
    // ========================================================================
    // TRANSLATION WORKSPACE
    // ========================================================================
    
    startTranslation() {
        this.state.sessionStartTime = Date.now();
        
        this.setupWorkspace();
        this.showScreen('workspace');
        this.startTimer();
        this.startAutoSave();
        
        // Start think-aloud recording if enabled
        if (this.state.sessionConfig.think_aloud_enabled && this.state.micEnabled) {
            setTimeout(() => {
                // Don't auto-start, let user control
                document.getElementById('record-btn').style.display = 'flex';
            }, 1000);
        }
    }
    
    setupWorkspace() {
        // Set project title
        document.getElementById('project-title').textContent = this.state.sessionConfig.project_title || 'Translation Session';
        
        // Apply layout
        const content = document.getElementById('workspace-content');
        content.className = `workspace-content ${this.state.selectedLayout}`;
        
        // Apply font
        const sourceText = document.getElementById('source-text');
        const editor = document.getElementById('translation-editor');
        sourceText.className = `source-text font-${this.state.selectedFont}`;
        editor.className = `translation-editor font-${this.state.selectedFont}`;
        
        // Apply direction
        editor.dir = this.state.selectedDirection;
        
        // Set source text
        sourceText.textContent = this.state.sessionConfig.source_text;
        
        // Handle post-edit mode
        if (this.state.sessionConfig.translation_mode === 'post-edit' && this.state.sessionConfig.mt_output) {
            editor.value = this.state.sessionConfig.mt_output;
            document.getElementById('mt-panel').style.display = 'block';
            document.getElementById('mt-text').textContent = this.state.sessionConfig.mt_output;
            document.getElementById('mode-badge').style.display = 'block';
            document.getElementById('mode-badge').textContent = this.t('post-edit-mode');
        } else {
            editor.placeholder = 'Begin typing your translation here…';
        }
        
        // Setup keystroke capture
        this.setupKeystrokeCapture(editor);
        
        // Word count
        editor.addEventListener('input', () => {
            this.updateWordCount();
        });
        this.updateWordCount();
        
        // Submit button
        document.getElementById('submit-btn').addEventListener('click', () => {
            this.submitTranslation();
        });
        
        // Record button
        document.getElementById('record-btn').addEventListener('click', () => {
            this.toggleRecording();
        });
    }
    
    setupKeystrokeCapture(editor) {
        let lastEventTime = Date.now();
        
        const recordKeystroke = (eventType, keyValue, additionalData = {}) => {
            const now = Date.now();
            const timeSinceStart = now - this.state.sessionStartTime;
            const timeSinceLastEvent = now - lastEventTime;
            
            // Detect pause
            if (timeSinceLastEvent > this.config.pauseThreshold && this.state.keystrokeBuffer.length > 0) {
                this.state.keystrokeBuffer.push({
                    session_id: this.state.sessionId,
                    event_type: 'pause',
                    key_value: null,
                    timestamp_ms: timeSinceStart - timeSinceLastEvent,
                    cursor_position: editor.selectionStart,
                    current_text: editor.value,
                    pause_duration: timeSinceLastEvent,
                    ...additionalData
                });
            }
            
            this.state.keystrokeBuffer.push({
                session_id: this.state.sessionId,
                event_type: eventType,
                key_value: keyValue,
                timestamp_ms: timeSinceStart,
                cursor_position: editor.selectionStart,
                current_text: editor.value,
                ...additionalData
            });
            
            lastEventTime = now;
            
            // Batch upload
            if (this.state.keystrokeBuffer.length >= this.config.keystrokeBufferSize) {
                this.flushKeystrokeBuffer();
            }
        };
        
        editor.addEventListener('keydown', (e) => {
            recordKeystroke('keydown', e.key);
        });
        
        editor.addEventListener('keyup', (e) => {
            recordKeystroke('keyup', e.key);
        });
        
        editor.addEventListener('paste', (e) => {
            const pastedText = e.clipboardData.getData('text');
            recordKeystroke('paste', pastedText);
        });
        
        editor.addEventListener('cut', (e) => {
            recordKeystroke('delete', 'cut');
        });
    }
    
    async flushKeystrokeBuffer() {
        if (this.state.keystrokeBuffer.length === 0) return;
        
        const keystrokes = [...this.state.keystrokeBuffer];
        this.state.keystrokeBuffer = [];
        
        try {
            if (!this.config.useDirectSupabase) {
                await fetch(`${this.config.apiBaseUrl}/${this.state.token}/keystrokes`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ keystrokes })
                });
            } else {
                // Direct Supabase insert
                await fetch(
                    `${this.config.supabaseUrl}/rest/v1/keystrokes`,
                    {
                        method: 'POST',
                        headers: {
                            'apikey': this.config.supabaseAnonKey,
                            'Authorization': `Bearer ${this.config.supabaseAnonKey}`,
                            'Content-Type': 'application/json',
                            'Prefer': 'return=minimal'
                        },
                        body: JSON.stringify(keystrokes)
                    }
                );
            }
            
            console.log(`Sent ${keystrokes.length} keystrokes`);
        } catch (error) {
            console.error('Failed to send keystrokes:', error);
            // Put them back for retry
            this.state.keystrokeBuffer.unshift(...keystrokes);
        }
    }
    
    updateWordCount() {
        const editor = document.getElementById('translation-editor');
        const text = editor.value.trim();
        const wordCount = text ? text.split(/\s+/).length : 0;
        document.getElementById('word-count').textContent = `${wordCount} ${this.t('words')}`;
    }
    
    startTimer() {
        setInterval(() => {
            const elapsed = Date.now() - this.state.sessionStartTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            document.getElementById('timer').textContent =
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }
    
    startAutoSave() {
        setInterval(() => {
            this.autoSave();
        }, this.config.autoSaveInterval);
    }
    
    async autoSave() {
        const status = document.getElementById('save-status');
        status.textContent = 'Saving...';
        
        await this.flushKeystrokeBuffer();
        
        status.textContent = 'Saved';
        status.classList.add('saved');
        
        setTimeout(() => {
            status.classList.remove('saved');
            status.textContent = 'Auto-saving...';
        }, 2000);
    }
    
    async toggleRecording() {
        if (!this.state.isRecording) {
            await this.startRecording();
        } else {
            await this.stopRecording();
        }
    }
    
    async startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.state.mediaRecorder = new MediaRecorder(stream);
            this.state.audioChunks = [];
            
            this.state.mediaRecorder.ondataavailable = (event) => {
                this.state.audioChunks.push(event.data);
            };
            
            this.state.mediaRecorder.start();
            this.state.isRecording = true;
            
            const btn = document.getElementById('record-btn');
            btn.classList.add('recording');
            document.getElementById('record-text').textContent = this.t('record-stop');
            
        } catch (error) {
            console.error('Failed to start recording:', error);
            alert('Failed to start recording. Please check microphone permissions.');
        }
    }
    
    async stopRecording() {
        if (this.state.mediaRecorder && this.state.isRecording) {
            this.state.mediaRecorder.stop();
            this.state.mediaRecorder.stream.getTracks().forEach(track => track.stop());
            this.state.isRecording = false;
            
            const btn = document.getElementById('record-btn');
            btn.classList.remove('recording');
            document.getElementById('record-text').textContent = this.t('record-start');
        }
    }
    
    // ========================================================================
    // SUBMISSION
    // ========================================================================
    
    async submitTranslation() {
        const editor = document.getElementById('translation-editor');
        const finalTranslation = editor.value.trim();
        
        if (!finalTranslation) {
            alert('Please provide a translation before submitting.');
            return;
        }
        
        if (!confirm('Are you sure you want to submit your translation? You cannot edit it after submission.')) {
            return;
        }
        
        // Stop recording if active
        if (this.state.isRecording) {
            await this.stopRecording();
        }
        
        // Flush remaining keystrokes
        await this.flushKeystrokeBuffer();
        
        // Calculate stats
        const duration = Math.floor((Date.now() - this.state.sessionStartTime) / 1000);
        
        // Upload audio if recorded
        let audioUrl = null;
        if (this.state.audioChunks.length > 0) {
            audioUrl = await this.uploadAudio();
        }
        
        // Submit session
        try {
            if (!this.config.useDirectSupabase) {
                const response = await fetch(`${this.config.apiBaseUrl}/${this.state.token}/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        final_translation: finalTranslation,
                        duration_seconds: duration,
                        demographics: this.state.demographics,
                        consent_timestamp: this.state.consentTimestamp,
                        audio_url: audioUrl,
                        completed_at: new Date().toISOString()
                    })
                });
                
                if (!response.ok) {
                    throw new Error('Failed to submit translation');
                }
            } else {
                // Direct Supabase update
                const updateData = {
                    final_translation: finalTranslation,
                    duration_seconds: duration,
                    status: 'completed',
                    completed_at: new Date().toISOString()
                };
                
                // Add demographics if provided
                if (this.state.demographics.gender) updateData.participant_gender = this.state.demographics.gender;
                if (this.state.demographics.age) updateData.participant_age = parseInt(this.state.demographics.age);
                if (this.state.demographics.nativeLang) updateData.participant_native_language = this.state.demographics.nativeLang;
                if (this.state.demographics.targetLang) updateData.participant_target_language = this.state.demographics.targetLang;
                if (this.state.demographics.experience) updateData.participant_experience = this.state.demographics.experience;
                if (this.state.demographics.education) updateData.participant_education = this.state.demographics.education;
                if (this.state.demographics.major) updateData.participant_major = this.state.demographics.major;
                
                if (this.state.consentTimestamp) {
                    updateData.consent_given = true;
                    updateData.consent_timestamp = this.state.consentTimestamp;
                }
                
                if (audioUrl) {
                    updateData.think_aloud_url = audioUrl;
                }
                
                await fetch(
                    `${this.config.supabaseUrl}/rest/v1/sessions?id=eq.${this.state.sessionId}`,
                    {
                        method: 'PATCH',
                        headers: {
                            'apikey': this.config.supabaseAnonKey,
                            'Authorization': `Bearer ${this.config.supabaseAnonKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updateData)
                    }
                );
            }
            
            console.log('Translation submitted successfully');
            
            // Show survey or thank you
            if (this.state.sessionConfig.survey_questions && this.state.sessionConfig.survey_questions.length > 0) {
                this.setupSurveyScreen();
                this.showScreen('survey');
            } else {
                this.showScreen('thankyou');
            }
            
        } catch (error) {
            console.error('Submission failed:', error);
            alert('Failed to submit translation. Please try again.');
        }
    }
    
    async uploadAudio() {
        try {
            const audioBlob = new Blob(this.state.audioChunks, { type: 'audio/webm' });
            
            if (!this.config.useDirectSupabase) {
                const formData = new FormData();
                formData.append('audio', audioBlob, `${this.state.sessionId}.webm`);
                
                const response = await fetch(`${this.config.apiBaseUrl}/${this.state.token}/audio`, {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    const data = await response.json();
                    return data.audio_url;
                }
            } else {
                // Direct Supabase Storage upload
                const fileName = `${this.state.sessionId}.webm`;
                const filePath = `think-aloud-recordings/${fileName}`;
                
                const uploadResponse = await fetch(
                    `${this.config.supabaseUrl}/storage/v1/object/think-aloud-recordings/${fileName}`,
                    {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${this.config.supabaseAnonKey}`,
                            'Content-Type': 'audio/webm'
                        },
                        body: audioBlob
                    }
                );
                
                if (uploadResponse.ok) {
                    // Return public URL
                    return `${this.config.supabaseUrl}/storage/v1/object/public/${filePath}`;
                }
            }
            
            return null;
        } catch (error) {
            console.error('Failed to upload audio:', error);
            return null;
        }
    }
    
    // ========================================================================
    // SURVEY SCREEN
    // ========================================================================
    
    setupSurveyScreen() {
        const container = document.getElementById('survey-questions');
        container.innerHTML = '';
        
        this.state.sessionConfig.survey_questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'survey-question';
            
            const questionText = document.createElement('div');
            questionText.className = 'survey-question-text';
            questionText.innerHTML = `${index + 1}. ${question.question}${question.required ? '<span class="survey-required">*</span>' : ''}`;
            questionDiv.appendChild(questionText);
            
            if (question.type === 'text') {
                const textarea = document.createElement('textarea');
                textarea.id = `survey-q-${question.id}`;
                textarea.required = question.required || false;
                textarea.rows = 4;
                textarea.style.cssText = 'width: 100%; padding: 12px; border: 2px solid var(--border-color); border-radius: var(--radius); font-family: inherit;';
                questionDiv.appendChild(textarea);
            }
            else if (question.type === 'scale') {
                const scaleContainer = document.createElement('div');
                scaleContainer.className = 'scale-container';
                
                const min = question.scale_min || 1;
                const max = question.scale_max || 10;
                
                for (let i = min; i <= max; i++) {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'scale-button';
                    btn.textContent = i;
                    btn.dataset.value = i;
                    btn.dataset.questionId = question.id;
                    
                    btn.addEventListener('click', function() {
                        scaleContainer.querySelectorAll('.scale-button').forEach(b => b.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                    
                    scaleContainer.appendChild(btn);
                }
                
                questionDiv.appendChild(scaleContainer);
                
                if (question.scale_min_label || question.scale_max_label) {
                    const labels = document.createElement('div');
                    labels.className = 'scale-labels';
                    labels.innerHTML = `<span>${question.scale_min_label || ''}</span><span>${question.scale_max_label || ''}</span>`;
                    questionDiv.appendChild(labels);
                }
            }
            else if (question.type === 'yes_no') {
                const btnContainer = document.createElement('div');
                btnContainer.style.cssText = 'display: flex; gap: 12px; margin-top: 8px;';
                
                const yesBtn = document.createElement('button');
                yesBtn.type = 'button';
                yesBtn.className = 'btn btn-secondary';
                yesBtn.textContent = 'Yes';
                yesBtn.dataset.value = 'yes';
                yesBtn.dataset.questionId = question.id;
                
                const noBtn = document.createElement('button');
                noBtn.type = 'button';
                noBtn.className = 'btn btn-secondary';
                noBtn.textContent = 'No';
                noBtn.dataset.value = 'no';
                noBtn.dataset.questionId = question.id;
                
                [yesBtn, noBtn].forEach(btn => {
                    btn.addEventListener('click', function() {
                        btnContainer.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
                        this.classList.add('active');
                    });
                });
                
                btnContainer.appendChild(yesBtn);
                btnContainer.appendChild(noBtn);
                questionDiv.appendChild(btnContainer);
            }
            else if (question.type === 'multiple_choice' && question.choices) {
                const choicesContainer = document.createElement('div');
                choicesContainer.style.cssText = 'display: flex; flex-direction: column; gap: 8px; margin-top: 8px;';
                
                question.choices.forEach(choice => {
                    const label = document.createElement('label');
                    label.className = 'radio-label';
                    
                    const radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = `survey-q-${question.id}`;
                    radio.value = choice;
                    radio.required = question.required || false;
                    
                    const span = document.createElement('span');
                    span.textContent = choice;
                    
                    label.appendChild(radio);
                    label.appendChild(span);
                    choicesContainer.appendChild(label);
                });
                
                questionDiv.appendChild(choicesContainer);
            }
            
            container.appendChild(questionDiv);
        });
        
        // Skip button
        document.getElementById('skip-survey-btn').addEventListener('click', () => {
            this.showScreen('thankyou');
        });
        
        // Submit survey
        document.getElementById('survey-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.submitSurvey();
        });
    }
    
    async submitSurvey() {
        const responses = {};
        
        this.state.sessionConfig.survey_questions.forEach(question => {
            if (question.type === 'text') {
                const textarea = document.getElementById(`survey-q-${question.id}`);
                responses[question.id] = textarea.value;
            }
            else if (question.type === 'scale') {
                const selected = document.querySelector(`.scale-button.selected[data-question-id="${question.id}"]`);
                responses[question.id] = selected ? selected.dataset.value : null;
            }
            else if (question.type === 'yes_no') {
                const selected = document.querySelector(`.btn.active[data-question-id="${question.id}"]`);
                responses[question.id] = selected ? selected.dataset.value : null;
            }
            else if (question.type === 'multiple_choice') {
                const radio = document.querySelector(`input[name="survey-q-${question.id}"]:checked`);
                responses[question.id] = radio ? radio.value : null;
            }
        });
        
        this.state.surveyResponses = responses;
        
        // Send survey responses
        try {
            if (!this.config.useDirectSupabase) {
                await fetch(`${this.config.apiBaseUrl}/${this.state.token}/survey`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ survey_responses: responses })
                });
            } else {
                // Direct Supabase update
                await fetch(
                    `${this.config.supabaseUrl}/rest/v1/sessions?id=eq.${this.state.sessionId}`,
                    {
                        method: 'PATCH',
                        headers: {
                            'apikey': this.config.supabaseAnonKey,
                            'Authorization': `Bearer ${this.config.supabaseAnonKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            survey_responses: responses
                        })
                    }
                );
            }
        } catch (error) {
            console.error('Failed to submit survey:', error);
        }
        
        this.showScreen('thankyou');
    }
}

// ============================================================================
// INITIALIZE APP
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('TransTrace Participant Interface loaded');
    window.transTraceApp = new TransTraceParticipant();
    window.transTraceApp.init();
});
