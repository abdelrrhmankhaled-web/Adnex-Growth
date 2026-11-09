const WHATSAPP_NUMBER = "96181917684";
const LEAD_EMAIL = "takkaads@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojbpnow";

const translations = {
  "en": {
    "navPlans": "Plans",
    "navMethod": "How it works",
    "navFree": "Free review",
    "navFaq": "FAQ",
    "navCta": "Get Guidance Plan",
    "availability": "Limited onboarding slots this month",
    "heroEyebrow": "Not an agency. Your growth guidance room.",
    "heroTitle": "<span>No Agency Dependency.</span><span>Manage Ads. Grow Sales.</span>",
    "heroLead": "ADNEX helps you reduce unnecessary marketing costs, make smarter campaign decisions, and turn expert guidance into clearer sales growth.",
    "positioningNote": "You stay in control. Our experts guide your decisions so every campaign move has a sales-growth reason.",
    "primaryCta": "Get My Guidance Plan",
    "secondaryCta": "WhatsApp an Expert",
    "trustOne": "You manage your campaigns",
    "trustTwo": "We guide every key decision",
    "trustThree": "Lower marketing dependency",
    "panelTitle": "Sales Growth Guidance Preview",
    "growthScore": "Sales-growth clarity",
    "scoreLabel": "after expert guidance",
    "diagOne": "Know which spend to stop first",
    "diagTwo": "Get advice before changing budgets",
    "diagThree": "Turn guidance into sales-focused actions",
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
    "plansTitle": "Choose the plan that fits your stage",
    "plansSub": "All prices in USD. Save 20% when you pay 3 months upfront.",
    "planAuditName": "Full account review",
    "planAuditFor": "Find out where your budget is lost",
    "oneTime": "/ one time",
    "planAuditList": "<li>A full review of your ad account</li><li>A written report with 10 decisions in priority order</li><li>A 20-minute call to walk you through it</li><li>Credited to your first month if you subscribe within 7 days</li>",
    "planCtaOnce": "Request the review",
    "planCommunityName": "ADNEX Community",
    "planCommunityFor": "Learn and ask alongside other business owners",
    "perMonth": "/ month",
    "planCommunityList": "<li>Private WhatsApp group for members</li><li>Weekly live Q&amp;A with our experts</li><li>Ready-made guides: launch steps, reading your numbers, ad ideas</li><li>Answers in the group within 48 hours</li>",
    "planCta": "Subscribe now",
    "badgePopular": "Most popular",
    "planPersonalName": "Personal follow-up",
    "planPersonalFor": "For your own account, on one platform",
    "planPersonalList": "<li>Everything in ADNEX Community</li><li>Weekly review of your account by voice note</li><li>Private WhatsApp replies within 24 hours</li><li>A 30-minute monthly call to plan the month</li>",
    "planGrowthName": "Growth follow-up",
    "planGrowthFor": "For businesses advertising on two platforms",
    "planGrowthList": "<li>Everything in Personal follow-up</li><li>Two platforms instead of one</li><li>Reviews twice a week</li><li>Our feedback on your ads before they go live</li><li>Same-day replies and two calls a month</li>",
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
    "planCtaFree": "Request the free review",
    "faqEyebrow": "FAQ",
    "faqTitle": "Before you start.",
    "faqOneQ": "Do you run my ads for me?",
    "faqOneA": "No. ADNEX is not an agency. You run your account; we review it and guide you before every decision.",
    "faqTwoQ": "I have no experience. Is this for me?",
    "faqTwoA": "Yes. The Community includes step-by-step guides, and Personal follow-up stays with you from your first ad.",
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
    "cLb": "Lebanon (+961)",
    "cIq": "Iraq (+964)",
    "cJo": "Jordan (+962)",
    "cSy": "Syria (+963)",
    "cQa": "Qatar (+974)",
    "cKw": "Kuwait (+965)",
    "cOther": "Another country",
    "fieldPhone": "WhatsApp number",
    "fieldStage": "Where are you now?",
    "stageRunning": "I'm running ads now",
    "stageStarting": "I'm planning to start",
    "fieldPlan": "Plan you're interested in",
    "optFree": "Quick review (free)",
    "optAudit": "Full account review ($49)",
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
    "footerText": "Guidance and follow-up for business owners who run their own ads.",
    "mobileWhatsapp": "WhatsApp",
    "formSuccess": "Got it. We'll reply on WhatsApp within one working day.",
    "formSending": "Sending your request...",
    "formError": "Something went wrong. Try again or message us on WhatsApp."
  },
  "ar": {
    "navPlans": "الباقات",
    "navMethod": "آلية العمل",
    "navFree": "تشخيص مجاني",
    "navFaq": "الأسئلة الشائعة",
    "navCta": "احصل على خطة توجيه",
    "availability": "أماكن انضمام محدودة هذا الشهر",
    "heroEyebrow": "لسنا وكالة. نحن غرفة توجيه لنموك.",
    "heroTitle": "<span>بدون اعتماد على وكالة.</span><span>أدر حملاتك. وزد مبيعاتك.</span>",
    "heroLead": "ADNEX تساعدك تقلل مصاريف التسويق غير الضرورية، وتتخذ قرارات حملات أذكى، وتحول توجيه الخبراء إلى نمو مبيعات أوضح.",
    "positioningNote": "أنت تبقى المتحكم. خبراؤنا يوجهون قراراتك حتى يكون لكل حركة في الحملة سبب مرتبط بنمو المبيعات.",
    "primaryCta": "احصل على خطة توجيه",
    "secondaryCta": "تحدث مع خبير واتساب",
    "trustOne": "أنت تدير حملاتك",
    "trustTwo": "نحن نوجه قراراتك المهمة",
    "trustThree": "اعتماد أقل على التسويق الخارجي",
    "panelTitle": "معاينة توجيه نمو المبيعات",
    "growthScore": "وضوح نمو المبيعات",
    "scoreLabel": "بعد توجيه الخبير",
    "diagOne": "اعرف أي صرف توقفه أولاً",
    "diagTwo": "خذ نصيحة قبل تغيير الميزانيات",
    "diagThree": "حوّل التوجيه إلى إجراءات تزيد المبيعات",
    "stripFrom": "بداية الاشتراك الشهري",
    "stripFreeValue": "مجاني",
    "stripFree": "تشخيص سريع لحسابك",
    "stripPlatforms": "ميتا · تيك توك · سناب شات",
    "stripAgency": "اعتماد على وكالة",
    "notAgencyEyebrow": "لمن ADNEX؟",
    "notAgencyTitle": "لأصحاب المشاريع الذين يديرون إعلاناتهم بأنفسهم، أو يخططون للبدء.",
    "notAgencyBody": "لا نتولّى إدارة حسابك ولا نشغّل الحملات نيابةً عنك. نراجع أرقامك، ونخبرك بالقرار الصحيح، وأنت تنفّذه. بذلك تفهم حسابك، وتوفّر تكاليف الوكالة.",
    "problemEyebrow": "المشكلة",
    "problemTitle": "معظم ميزانية الإعلانات تضيع في قرارات صغيرة لم يشرحها لك أحد.",
    "problemOneTitle": "تصرف دون أن تعرف ما الذي جلب المبيعات",
    "problemOneBody": "الأرقام كثيرة، وليس واضحاً أي إعلان ناجح وأي إعلان يجب إيقافه.",
    "problemTwoTitle": "تغيّر الميزانية بناءً على الإحساس",
    "problemTwoBody": "زيادة الميزانية أو الإيقاف في التوقيت الخطأ قد يعيد الحملة إلى نقطة الصفر.",
    "problemThreeTitle": "الوكالة مكلفة، والعمل وحدك صعب",
    "problemThreeBody": "تحتاج إلى خبير ترجع إليه قبل القرار، دون أن تدفع اشتراك وكالة كاملاً.",
    "plansEyebrow": "الباقات",
    "plansTitle": "اختر الباقة المناسبة لمرحلتك",
    "plansSub": "جميع الأسعار بالدولار. وفّر 20% عند الدفع لثلاثة أشهر مقدّماً.",
    "planAuditName": "التشخيص الكامل",
    "planAuditFor": "لمعرفة أين تضيع ميزانيتك",
    "oneTime": "/ مرة واحدة",
    "planAuditList": "<li>مراجعة كاملة لحسابك الإعلاني</li><li>تقرير مكتوب يتضمن 10 قرارات مرتّبة حسب الأولوية</li><li>مكالمة لمدة 20 دقيقة لشرح التقرير</li><li>يُخصم المبلغ من أول شهر إذا اشتركت خلال 7 أيام</li>",
    "planCtaOnce": "اطلب التشخيص",
    "planCommunityName": "مجتمع ADNEX",
    "planCommunityFor": "للتعلّم وطرح الأسئلة مع أصحاب مشاريع مثلك",
    "perMonth": "/ شهرياً",
    "planCommunityList": "<li>مجموعة واتساب خاصة بالمشتركين</li><li>بث مباشر أسبوعي للأسئلة مع الخبراء</li><li>أدلّة جاهزة: خطوات الإطلاق، وقراءة الأرقام، وأفكار الإعلانات</li><li>رد على أسئلتك في المجموعة خلال 48 ساعة</li>",
    "planCta": "اشترك الآن",
    "badgePopular": "الأكثر طلباً",
    "planPersonalName": "المتابعة الشخصية",
    "planPersonalFor": "متابعة حسابك أنت على منصة واحدة",
    "planPersonalList": "<li>كل مزايا مجتمع ADNEX</li><li>مراجعة أسبوعية لحسابك برسالة صوتية</li><li>رد خاص عبر واتساب خلال 24 ساعة</li><li>مكالمة شهرية لمدة 30 دقيقة لوضع خطة الشهر</li>",
    "planGrowthName": "متابعة النمو",
    "planGrowthFor": "للمشاريع التي تُعلن على منصتين",
    "planGrowthList": "<li>كل مزايا المتابعة الشخصية</li><li>منصتان بدلاً من منصة واحدة</li><li>مراجعة مرتين في الأسبوع</li><li>رأينا في إعلاناتك قبل نشرها</li><li>رد في اليوم نفسه ومكالمتان شهرياً</li>",
    "referralNote": "رشّح صاحب مشروع يشترك معنا، واحصل على شهر مجاني.",
    "methodEyebrow": "آلية العمل",
    "methodTitle": "أنت تنفّذ، ونحن معك في كل خطوة.",
    "stepOneTitle": "ترسل لنا حسابك",
    "stepOneBody": "لقطات شاشة أو صلاحية مشاهدة فقط. لا نغيّر أي شيء في حسابك.",
    "stepTwoTitle": "نراجع الأرقام",
    "stepTwoBody": "نشرح لك بلغة بسيطة ما يحدث، وما الذي يُهدر ميزانيتك.",
    "stepThreeTitle": "تحصل على قرارات واضحة",
    "stepThreeBody": "ماذا توقف، وماذا تزيد، وماذا تجرّب، وبأي ترتيب.",
    "stepFourTitle": "نتابع معك",
    "stepFourBody": "كل أسبوع نراجع النتائج معاً ونحدد الخطوة التالية.",
    "freeEyebrow": "جرّبنا مجاناً",
    "freeTitle": "أرسل لقطات شاشة من حسابك، واحصل على أكبر 3 مشكلات فيه برسالة صوتية.",
    "planCtaFree": "اطلب التشخيص المجاني",
    "faqEyebrow": "الأسئلة الشائعة",
    "faqTitle": "قبل أن تبدأ.",
    "faqOneQ": "هل تديرون إعلاناتي نيابةً عني؟",
    "faqOneA": "لا. ADNEX ليست وكالة. أنت تدير حسابك، ونحن نراجعه ونوجّهك قبل كل قرار.",
    "faqTwoQ": "ليست لدي خبرة، هل الخدمة مناسبة لي؟",
    "faqTwoA": "نعم. مجتمع ADNEX يتضمن أدلّة خطوة بخطوة، والمتابعة الشخصية ترافقك من أول إعلان.",
    "faqThreeQ": "ما المنصات التي تغطّونها؟",
    "faqThreeA": "ميتا (فيسبوك وإنستغرام)، وتيك توك، وسناب شات.",
    "faqFourQ": "كيف أدفع؟",
    "faqFourA": "بعد اختيار الباقة، نرسل لك عبر واتساب طرق الدفع المتاحة في بلدك.",
    "faqFiveQ": "هل يمكنني إلغاء الاشتراك؟",
    "faqFiveA": "نعم، الاشتراك شهري ويمكنك إيقافه قبل بداية الشهر التالي.",
    "faqSixQ": "في أي دول تعملون؟",
    "faqSixA": "لبنان، والعراق، والأردن، وسوريا، وقطر، والكويت.",
    "applyEyebrow": "ابدأ من هنا",
    "applyTitle": "أخبرنا أين وصلت، وسنتواصل معك عبر واتساب.",
    "applyBody": "املأ النموذج، وسنتواصل معك للاتفاق على الباقة المناسبة وطريقة الدفع.",
    "applyOne": "رد خلال يوم عمل واحد",
    "applyTwo": "التشخيص السريع مجاني",
    "applyThree": "لا نطلب كلمة مرور حسابك",
    "fieldName": "الاسم",
    "fieldBusiness": "اسم المشروع",
    "fieldCountry": "الدولة",
    "cLb": "لبنان (961+)",
    "cIq": "العراق (964+)",
    "cJo": "الأردن (962+)",
    "cSy": "سوريا (963+)",
    "cQa": "قطر (974+)",
    "cKw": "الكويت (965+)",
    "cOther": "دولة أخرى",
    "fieldPhone": "رقم واتساب",
    "fieldStage": "أين وصلت؟",
    "stageRunning": "أدير إعلاناتي حالياً",
    "stageStarting": "أخطط للبدء",
    "fieldPlan": "الباقة التي تهمّك",
    "optFree": "تشخيص سريع (مجاني)",
    "optAudit": "التشخيص الكامل (49$)",
    "optCommunity": "مجتمع ADNEX (29$ شهرياً)",
    "optPersonal": "المتابعة الشخصية (69$ شهرياً)",
    "optGrowth": "متابعة النمو (129$ شهرياً)",
    "optUnsure": "لست متأكداً، ساعدوني في الاختيار",
    "fieldBudget": "ميزانية الإعلانات الشهرية",
    "budgetZero": "لم أبدأ بعد",
    "budgetOne": "أقل من 500$",
    "budgetTwo": "500$ – 2,000$",
    "budgetThree": "2,000$ – 5,000$",
    "budgetFour": "أكثر من 5,000$",
    "fieldChallenge": "ما أكبر مشكلة أو سؤال لديك؟",
    "formSubmit": "أرسل الطلب",
    "formNote": "سنرد عليك عبر واتساب خلال يوم عمل واحد.",
    "footerText": "توجيه ومتابعة لأصحاب المشاريع الذين يديرون إعلاناتهم بأنفسهم.",
    "mobileWhatsapp": "واتساب",
    "formSuccess": "تم استلام طلبك. سنرد عليك عبر واتساب خلال يوم عمل واحد.",
    "formSending": "جارٍ إرسال طلبك...",
    "formError": "حدث خطأ. حاول مرة أخرى أو تواصل معنا عبر واتساب."
  }
};

const state = { lang: (()=>{try{return localStorage.getItem("adnexHighCrLang")}catch(e){return null}})() || "ar" };

function whatsappUrl() {
  const text =
    state.lang === "ar"
      ? "مرحباً ADNEX، أود معرفة المزيد عن باقات التوجيه والمتابعة."
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
animateCounters();
