const WHATSAPP_NUMBER = "96181917684";
const LEAD_EMAIL = "takkaads@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojbpnow";

const translations = {
  "en": {
    "navPlans": "Plans",
    "navMethod": "How it works",
    "navFree": "Free review",
    "navFaq": "FAQ",
    "navCta": "Get started",
    "heroEyebrow": "Not an agency. Experts with you on every decision.",
    "heroTitle": "<span>Running your own ads?</span><span>Or about to start?</span>",
    "heroLead": "Guidance, consulting and follow-up plans for business owners. You run your campaigns; we tell you what to stop, what to change and where to spend, so you sell more with the same budget.",
    "heroCtaPlans": "See the plans",
    "heroCtaFree": "Free review of your account",
    "trustOne": "You stay in charge of your account",
    "trustTwo": "We're with you before every decision",
    "trustThree": "Plans from $29 a month",
    "panelTitle": "What you get every week",
    "panelFrom": "Plans start at",
    "panelPer": "per month · no long contract",
    "diagOne": "A review of your account numbers",
    "diagTwo": "An answer before you change your budget",
    "diagThree": "A clear list of decisions you carry out yourself",
    "stripFrom": "Monthly plans from",
    "stripFreeValue": "Free",
    "stripFree": "Quick review of your account",
    "stripPlatforms": "Meta · TikTok · Snapchat",
    "stripAgency": "Agency dependency",
    "notAgencyEyebrow": "Who ADNEX is for",
    "notAgencyTitle": "Business owners who run their own ads, or plan to start.",
    "notAgencyBody": "We don't take over your account or run campaigns for you. We review your numbers, tell you the right decision, and you carry it out. You understand your account and save agency fees.",
    "problemEyebrow": "The problem",
    "problemTitle": "Most ad money is lost on small decisions nobody explained to you.",
    "problemOneTitle": "You spend without knowing what drove the sale",
    "problemOneBody": "There are too many numbers, and it isn't clear which ad wins and which should stop.",
    "problemTwoTitle": "You change budgets on gut feeling",
    "problemTwoBody": "Scaling or pausing at the wrong time can send a campaign back to zero.",
    "problemThreeTitle": "An agency is expensive, and alone it's hard",
    "problemThreeBody": "You need an expert to check with before you decide, without paying a full agency retainer.",
    "plansEyebrow": "Plans",
    "plansTitle": "Pick the plan that fits where you are",
    "plansSub": "All prices in USD. Save 20% when you pay 3 months upfront.",
    "monthlyGroup": "Monthly plans",
    "onceGroup": "One-time services",
    "perMonth": "/ month",
    "planCta": "Subscribe",
    "planCtaFree": "Request the review",
    "planCtaOnce": "Request",
    "freeWord": "Free",
    "badgePopular": "Most popular",
    "planCommunityName": "ADNEX Community",
    "planCommunityFor": "Learn and ask alongside other business owners",
    "planCommunityList": "<li>Private WhatsApp group for members</li><li>Weekly live Q&amp;A with our experts</li><li>Ready-made guides: launch steps, reading your numbers, ad ideas</li><li>Answers in the group within 48 hours</li>",
    "planPersonalName": "Personal follow-up",
    "planPersonalFor": "For your own account, on one platform",
    "planPersonalList": "<li>Everything in ADNEX Community</li><li>Weekly review of your account by voice note</li><li>Private WhatsApp replies within 24 hours</li><li>A 30-minute monthly call to plan the month</li>",
    "planGrowthName": "Growth follow-up",
    "planGrowthFor": "For businesses spending more, on two platforms",
    "planGrowthList": "<li>Everything in Personal follow-up</li><li>Two platforms instead of one</li><li>Reviews twice a week</li><li>Our feedback on your ads before they go live</li><li>Same-day replies and two calls a month</li>",
    "planQuickName": "Quick review",
    "planQuickFor": "Find out where the problem is",
    "planQuickList": "<li>Send us screenshots of your account</li><li>Get a voice note with the 3 biggest problems</li>",
    "planAuditName": "Full account review",
    "planAuditFor": "If your campaigns are already running",
    "planAuditList": "<li>A written report with 10 decisions in priority order</li><li>A 20-minute call to walk you through it</li><li>Credited to your first month if you subscribe within 7 days</li>",
    "planLaunchName": "Launch plan",
    "planLaunchFor": "If you're about to start advertising",
    "planLaunchList": "<li>A written launch plan: platform, budget, audience, ad ideas</li><li>A checklist of what to set up before launch (pixel and landing page)</li>",
    "referralNote": "Bring a business owner who subscribes, and get a month free.",
    "methodEyebrow": "How it works",
    "methodTitle": "You carry it out. We're with you at every step.",
    "stepOneTitle": "You send us your account",
    "stepOneBody": "Screenshots or view-only access. We never change anything in your account.",
    "stepTwoTitle": "We review the numbers",
    "stepTwoBody": "We explain in plain language what's happening and what's wasting your money.",
    "stepThreeTitle": "You get clear decisions",
    "stepThreeBody": "What to stop, what to scale, what to test, and in what order.",
    "stepFourTitle": "We follow up with you",
    "stepFourBody": "Every week we look at the results together and set the next step.",
    "freeEyebrow": "Try us for free",
    "freeTitle": "Send screenshots of your account and get its 3 biggest problems in a voice note.",
    "secondaryCta": "Message us on WhatsApp",
    "mobileWhatsapp": "WhatsApp",
    "faqEyebrow": "FAQ",
    "faqTitle": "Before you start.",
    "faqOneQ": "Do you run my ads for me?",
    "faqOneA": "No. ADNEX is not an agency. You run your account; we review it and guide you before every decision.",
    "faqTwoQ": "I have no experience. Is this for me?",
    "faqTwoA": "Yes. The launch plan is made for people about to start, and the Community has step-by-step guides.",
    "faqThreeQ": "Which platforms do you cover?",
    "faqThreeA": "Meta (Facebook and Instagram), TikTok and Snapchat.",
    "faqFourQ": "How do I pay?",
    "faqFourA": "Once you pick a plan, we send you the payment methods available in your country on WhatsApp.",
    "faqFiveQ": "Can I cancel?",
    "faqFiveA": "Yes. Plans are monthly, and you can stop before the next month.",
    "faqSixQ": "Which countries do you work in?",
    "faqSixA": "Lebanon, Iraq, Jordan, Syria, Qatar and Kuwait.",
    "applyEyebrow": "Start here",
    "applyTitle": "Tell us where you are, and we'll get back to you on WhatsApp.",
    "applyBody": "Fill in the form and we'll contact you to agree on the right plan and payment method.",
    "applyOne": "Reply within one working day",
    "applyTwo": "The quick review is free",
    "applyThree": "We never ask for your account password",
    "fieldName": "Name",
    "fieldBusiness": "Business name",
    "fieldCountry": "Country",
    "fieldPhone": "WhatsApp number",
    "fieldStage": "Where are you now?",
    "fieldPlan": "Plan you're interested in",
    "cLb": "Lebanon (+961)",
    "cIq": "Iraq (+964)",
    "cJo": "Jordan (+962)",
    "cSy": "Syria (+963)",
    "cQa": "Qatar (+974)",
    "cKw": "Kuwait (+965)",
    "cOther": "Another country",
    "stageRunning": "I'm running ads now",
    "stageStarting": "I'm planning to start",
    "optFree": "Quick review (free)",
    "optAudit": "Full account review ($49)",
    "optLaunch": "Launch plan ($69)",
    "optCommunity": "ADNEX Community ($29/month)",
    "optPersonal": "Personal follow-up ($69/month)",
    "optGrowth": "Growth follow-up ($129/month)",
    "optUnsure": "Not sure, help me choose",
    "fieldBudget": "Monthly ad budget",
    "budgetZero": "Haven't started yet",
    "budgetOne": "Less than $500",
    "budgetTwo": "$500 – $2,000",
    "budgetThree": "$2,000 – $5,000",
    "budgetFour": "More than $5,000",
    "fieldChallenge": "What's your biggest problem or question?",
    "formSubmit": "Send request",
    "formNote": "We'll reply on WhatsApp within one working day.",
    "formSuccess": "Got it. We'll reply on WhatsApp within one working day.",
    "formSending": "Sending your request...",
    "formError": "Something went wrong. Try again or message us on WhatsApp.",
    "footerText": "Guidance and follow-up for business owners who run their own ads."
  },
  "ar": {
    "navPlans": "الباقات",
    "navMethod": "كيف نشتغل",
    "navFree": "تشخيص مجاني",
    "navFaq": "أسئلة",
    "navCta": "ابدأ الآن",
    "heroEyebrow": "مش وكالة. فريق خبراء معك في كل قرار.",
    "heroLead": "خطط توجيه واستشارات ومتابعة لأصحاب المشاريع. إنت بتدير حملاتك، ونحن نقول لك شو توقف، وشو تغيّر، ووين تصرف، حتى تبيع أكثر بنفس الميزانية.",
    "heroCtaPlans": "شوف الباقات",
    "heroCtaFree": "تشخيص مجاني لحسابك",
    "trustOne": "إنت المسؤول عن حسابك",
    "trustTwo": "نحن معك قبل كل قرار",
    "trustThree": "باقات تبدأ من 29$ شهرياً",
    "panelTitle": "شو بتاخد كل أسبوع",
    "panelFrom": "الباقات تبدأ من",
    "panelPer": "في الشهر · بدون عقد طويل",
    "diagOne": "مراجعة لأرقام حسابك",
    "diagTwo": "رد على سؤالك قبل ما تغيّر الميزانية",
    "diagThree": "قائمة قرارات واضحة تنفّذها بنفسك",
    "stripFrom": "بداية الاشتراك الشهري",
    "stripFreeValue": "مجاني",
    "stripFree": "تشخيص سريع لحسابك",
    "stripPlatforms": "ميتا · تيك توك · سناب",
    "stripAgency": "اعتماد على وكالة",
    "notAgencyEyebrow": "لمين ADNEX؟",
    "notAgencyTitle": "لأصحاب المشاريع اللي بيديروا إعلاناتهم بنفسهم، أو ناويين يبدأوا.",
    "notAgencyBody": "ما منستلم حسابك ولا منشغّل الحملات بدالك. منراجع أرقامك، ومنقول لك شو القرار الصح، وإنت بتنفّذ. هيك بتفهم حسابك، وبتوفّر مصاريف الوكالة.",
    "problemEyebrow": "المشكلة",
    "problemTitle": "أغلب الفلوس بتضيع بقرارات صغيرة ما حدا شرحها لك.",
    "problemOneTitle": "بتصرف وما بتعرف شو اللي جاب البيع",
    "problemOneBody": "الأرقام كثيرة، ومش واضح أي إعلان رابح وأي إعلان لازم يوقف.",
    "problemTwoTitle": "بتغيّر الميزانية على الإحساس",
    "problemTwoBody": "تكبير أو إيقاف بوقت غلط ممكن يرجّع الحملة لنقطة الصفر.",
    "problemThreeTitle": "الوكالة غالية، ولوحدك صعب",
    "problemThreeBody": "بدك حدا خبير ترجع له قبل القرار، بدون ما تدفع اشتراك وكالة كامل.",
    "plansEyebrow": "الباقات",
    "plansTitle": "اختار الباقة اللي بتناسب مرحلتك",
    "plansSub": "كل الأسعار بالدولار. وفّر 20% إذا دفعت 3 أشهر مقدّماً.",
    "monthlyGroup": "الاشتراكات الشهرية",
    "planCommunityName": "مجتمع ADNEX",
    "planCommunityFor": "لتتعلّم وتسأل مع أصحاب مشاريع مثلك",
    "perMonth": "/ شهرياً",
    "planCta": "اشترك",
    "badgePopular": "الأكثر طلباً",
    "planPersonalName": "متابعة شخصية",
    "planPersonalFor": "لحسابك إنت، على منصة واحدة",
    "planGrowthName": "متابعة نمو",
    "planGrowthFor": "لمشروع بيصرف أكثر وعلى منصتين",
    "onceGroup": "خدمات لمرة وحدة",
    "planQuickName": "تشخيص سريع",
    "planQuickFor": "لتعرف وين المشكلة",
    "freeWord": "مجاني",
    "planCtaFree": "اطلب التشخيص",
    "planAuditName": "تشخيص كامل",
    "planAuditFor": "إذا عندك حملات شغّالة",
    "planCtaOnce": "اطلب",
    "planLaunchName": "خطة البداية",
    "planLaunchFor": "إذا ناوي تبدأ إعلاناتك",
    "referralNote": "جيب صاحب مشروع يشترك، وخود شهر مجاني.",
    "methodEyebrow": "كيف نشتغل",
    "methodTitle": "إنت بتنفّذ، ونحن معك بكل خطوة.",
    "stepOneTitle": "بتبعت لنا حسابك",
    "stepOneBody": "سكرينات أو صلاحية مشاهدة فقط. ما منغيّر شي بحسابك.",
    "stepTwoTitle": "منراجع الأرقام",
    "stepTwoBody": "منشرح لك بلغة بسيطة شو عم يصير، وشو اللي عم يضيّع فلوسك.",
    "stepThreeTitle": "بتاخد قرارات واضحة",
    "stepThreeBody": "شو توقف، شو تكبّر، شو تجرّب، وبأي ترتيب.",
    "stepFourTitle": "منتابع معك",
    "stepFourBody": "كل أسبوع منشوف النتيجة سوا ومنحدد الخطوة الجاية.",
    "freeEyebrow": "جرّبنا ببلاش",
    "freeTitle": "ابعت سكرينات من حسابك، وخود أكبر 3 مشاكل فيه برسالة صوتية.",
    "secondaryCta": "راسلنا واتساب",
    "faqEyebrow": "أسئلة",
    "faqTitle": "قبل ما تبدأ.",
    "faqOneQ": "هل بتديروا إعلاناتي عني؟",
    "faqOneA": "لا. ADNEX مش وكالة. إنت بتدير حسابك، ونحن منراجع ومنوجّهك قبل كل قرار.",
    "faqTwoQ": "ما عندي خبرة، بنفع لي؟",
    "faqTwoA": "إيه. خطة البداية مخصّصة للي ناوي يبدأ، ومجتمع ADNEX فيه ملفات خطوة بخطوة.",
    "faqThreeQ": "أي منصات بتغطّوا؟",
    "faqThreeA": "ميتا (فيسبوك وإنستغرام)، تيك توك، وسناب شات.",
    "faqFourQ": "كيف بدفع؟",
    "faqFourA": "بعد ما تختار الباقة، منبعت لك على واتساب طرق الدفع المتاحة ببلدك.",
    "faqFiveQ": "بقدر ألغي الاشتراك؟",
    "faqFiveA": "إيه، الاشتراك شهري وبتقدر توقفه قبل الشهر الجاي.",
    "faqSixQ": "بأي دول بتشتغلوا؟",
    "faqSixA": "لبنان، العراق، الأردن، سوريا، قطر والكويت.",
    "applyEyebrow": "ابدأ من هون",
    "applyTitle": "قلّنا وين وصلت، ومنرجع لك على واتساب.",
    "applyBody": "عبّي الفورم، ومنتواصل معك لنتفق على الباقة المناسبة وطريقة الدفع.",
    "applyOne": "رد خلال يوم عمل",
    "applyTwo": "التشخيص السريع مجاني",
    "applyThree": "ما منطلب كلمة سر حسابك",
    "fieldName": "الاسم",
    "fieldBusiness": "اسم المشروع",
    "fieldCountry": "البلد",
    "cLb": "لبنان (961+)",
    "cIq": "العراق (964+)",
    "cJo": "الأردن (962+)",
    "cSy": "سوريا (963+)",
    "cQa": "قطر (974+)",
    "cKw": "الكويت (965+)",
    "cOther": "بلد آخر",
    "fieldPhone": "رقم واتساب",
    "fieldStage": "وين وصلت؟",
    "stageRunning": "عم دير إعلاناتي حالياً",
    "stageStarting": "ناوي أبدأ",
    "fieldPlan": "الباقة اللي بتهمّك",
    "optFree": "تشخيص سريع (مجاني)",
    "optAudit": "تشخيص كامل ($49)",
    "optLaunch": "خطة البداية ($69)",
    "optCommunity": "مجتمع ADNEX ($29 شهرياً)",
    "optPersonal": "متابعة شخصية ($69 شهرياً)",
    "optGrowth": "متابعة نمو ($129 شهرياً)",
    "optUnsure": "مش متأكد، ساعدوني",
    "fieldBudget": "ميزانية الإعلانات بالشهر",
    "budgetZero": "لسه ما بلّشت",
    "budgetOne": "أقل من 500$",
    "budgetTwo": "500$ – 2,000$",
    "budgetThree": "2,000$ – 5,000$",
    "budgetFour": "أكثر من 5,000$",
    "fieldChallenge": "شو أكبر مشكلة أو سؤال عندك؟",
    "formSubmit": "أرسل الطلب",
    "formNote": "منرد عليك على واتساب خلال يوم عمل.",
    "footerText": "توجيه ومتابعة لأصحاب المشاريع اللي بيديروا إعلاناتهم بنفسهم.",
    "mobileWhatsapp": "واتساب",
    "heroTitle": "<span>بتدير إعلاناتك بنفسك؟</span><span>أو ناوي تبدأ؟</span>",
    "planCommunityList": "<li>جروب واتساب خاص بالمشتركين</li><li>لايف أسبوعي للأسئلة مع الخبراء</li><li>ملفات جاهزة: خطوات الإطلاق، قراءة الأرقام، أفكار الإعلانات</li><li>رد على سؤالك بالجروب خلال 48 ساعة</li>",
    "planPersonalList": "<li>كل اللي بمجتمع ADNEX</li><li>مراجعة أسبوعية لحسابك برسالة صوتية</li><li>رد خاص على واتساب خلال 24 ساعة</li><li>مكالمة شهرية 30 دقيقة لخطة الشهر</li>",
    "planGrowthList": "<li>كل اللي بالمتابعة الشخصية</li><li>منصتين بدل منصة وحدة</li><li>مراجعة مرتين بالأسبوع</li><li>رأينا بالإعلانات قبل ما تنزل</li><li>رد بنفس اليوم ومكالمتين بالشهر</li>",
    "planQuickList": "<li>بتبعت لنا سكرينات من حسابك</li><li>منرد عليك برسالة صوتية فيها أكبر 3 مشاكل</li>",
    "planAuditList": "<li>تقرير مكتوب فيه 10 قرارات مرتّبة حسب الأولوية</li><li>مكالمة 20 دقيقة نشرح فيها التقرير</li><li>المبلغ بينخصم من أول شهر إذا اشتركت خلال 7 أيام</li>",
    "planLaunchList": "<li>خطة إطلاق مكتوبة: المنصة، الميزانية، الجمهور، أفكار الإعلانات</li><li>قائمة اللي لازم تجهّزه قبل الإطلاق (البيكسل وصفحة الهبوط)</li>",
    "formSuccess": "وصل طلبك. منرد عليك على واتساب خلال يوم عمل.",
    "formSending": "عم نبعت طلبك...",
    "formError": "صار خطأ. جرّب مرة ثانية أو راسلنا على واتساب."
  }
};

const state = { lang: (()=>{try{return localStorage.getItem("adnexHighCrLang")}catch(e){return null}})() || "ar" };

function whatsappUrl() {
  const text =
    state.lang === "ar"
      ? "مرحبا ADNEX، بدي أعرف أكثر عن باقات التوجيه والمتابعة."
      : "Hi ADNEX, I'd like to know more about your guidance and follow-up plans.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function fieldValue(form, name) {
  const field = form.elements[name];
  return field ? field.value.trim() : "";
}

function leadEmailUrl(form) {
  const challenge = form.querySelector("textarea")?.value.trim() || "";
  const subject =
    state.lang === "ar"
      ? "طلب خطة توجيه من موقع ADNEX"
      : "ADNEX guidance plan request";
  const body =
    state.lang === "ar"
      ? [
          "طلب جديد من موقع ADNEX:",
          "",
          `الاسم: ${fieldValue(form, "name")}`,
          `اسم المشروع: ${fieldValue(form, "business")}`,
          `رقم الهاتف: ${fieldValue(form, "phone")}`,
          `الميزانية الإعلانية الشهرية: ${fieldValue(form, "budget")}`,
          `التحدي الحالي: ${challenge}`,
        ].join("\n")
      : [
          "New request from ADNEX website:",
          "",
          `Full name: ${fieldValue(form, "name")}`,
          `Business name: ${fieldValue(form, "business")}`,
          `Phone number: ${fieldValue(form, "phone")}`,
          `Monthly ad budget: ${fieldValue(form, "budget")}`,
          `Current challenge: ${challenge}`,
        ].join("\n");

  return `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function leadPayload(form) {
  return {
    name: fieldValue(form, "name"),
    business: fieldValue(form, "business"),
    phone: fieldValue(form, "phone"),
    country: fieldValue(form, "country"),
    stage: fieldValue(form, "stage"),
    plan: fieldValue(form, "plan"),
    budget: fieldValue(form, "budget"),
    challenge: fieldValue(form, "challenge"),
    language: state.lang,
    source: "ADNEX Website",
    submittedAt: new Date().toISOString(),
  };
}

function applyLanguage(lang) {
  state.lang = lang;
  try { localStorage.setItem("adnexHighCrLang", lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[lang][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const value = translations[lang][node.dataset.i18nHtml];
    if (value) node.innerHTML = value;
  });
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.textContent = lang === "ar" ? "English" : "عربي";
  });
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsappUrl();
  });
}

function animateCounters() {
  document.querySelectorAll("[data-count]").forEach((node) => {
    const target = Number(node.dataset.count);
    const steps = 36;
    let current = 0;
    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        node.textContent = String(Math.round(target));
        clearInterval(timer);
      } else {
        node.textContent = String(Math.round(current));
      }
    }, 28);
  });
}

document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(state.lang === "ar" ? "en" : "ar"));
});

document.querySelector("[data-menu-toggle]").addEventListener("click", () => {
  document.querySelector(".topbar").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => document.querySelector(".topbar").classList.remove("open"));
});

document.querySelector("[data-lead-form]").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const note = document.querySelector("[data-form-note]");
  const button = form.querySelector('button[type="submit"]');
  note.textContent = translations[state.lang].formSending;
  button.disabled = true;

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadPayload(form)),
    });
    if (!response.ok) throw new Error("Form submission failed");
    note.textContent = translations[state.lang].formSuccess;
    form.reset();
  } catch (error) {
    note.textContent = translations[state.lang].formError;
  } finally {
    button.disabled = false;
  }
});

document.querySelectorAll("[data-plan]").forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.getElementById("f-plan");
    if (select) select.value = link.dataset.plan;
  });
});

applyLanguage(state.lang);
