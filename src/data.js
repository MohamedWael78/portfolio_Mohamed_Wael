export const portfolioDataEN = {
  sectionDescriptions: {
    skills: "My technical arsenal is a carefully curated blend of data engineering, artificial intelligence, and software development tools. I continuously refine these skills to architect robust, scalable, and highly predictive systems tailored for complex business challenges.",
    projects: "Below is a comprehensive showcase of my professional portfolio. Each case study represents a unique fusion of domain expertise and advanced technological application, from predictive analytics to automated computer vision.",
    education: "A solid theoretical foundation paired with rigorous practical application. My academic journey has been defined by a relentless pursuit of engineering excellence and cutting-edge data science methodologies.",
    certifications: "In the rapidly evolving landscape of AI and Data, continuous learning is non-negotiable. These professional validations reflect my commitment to mastering industry-standard tools and cloud architectures."
  },
  personal: {
    name: "Mohamed Wael Mohamed",
    title: "Applied Artificial Intelligence & Data Analyst",
    email: "mohamedwael2077@gmail.com",
    linkedin: "https://linkedin.com/in/mohamed-wael-mohamed-9772803a4",
    github: "https://github.com/MohamedWael78",
    avatar: "/profile-photo.jpg",
    about: "I am a dedicated Applied AI and Data Analysis specialist with a foundational background in Agricultural Engineering from Mansoura University. My unique interdisciplinary perspective allows me to bridge the vast gap between traditional engineering principles and advanced, data-driven software solutions. \n\nRecently, I completed a rigorous, nine-month intensive training program in Applied Artificial Intelligence and Data Analysis through the prestigious Digital Pioneers Initiative (in collaboration with MCIT and the Military Academy). Throughout this program, I honed my expertise in machine learning, deep neural networks, and cloud technologies.\n\nI am deeply passionate about building intelligent systems that do more than just process information—they understand it, predict future trends, and deliver actionable insights. Whether it involves designing automated IoT systems for precision agriculture or creating complex financial forecasting dashboards in Power BI, my ultimate focus remains on driving tangible, systemic impact."
  },
  skills: [
    { category: "Programming & Frameworks", items: ["Python", "SQL", "FastAPI", "NumPy", "Pandas", "Scikit-Learn"] },
    { category: "AI & Machine Learning", items: ["Machine Learning", "Deep Learning", "TensorFlow", "Keras"] },
    { category: "Data Visualization", items: ["Power BI", "Tableau", "Excel"] },
    { category: "Cloud", items: ["Azure Cloud", "AWS Cloud"] },
    { category: "Analysis", items: ["SPSS", "Power BI", "Tableau", "Excel"] }
  ],
  allSkills: ["SQL", "Python", "Machine Learning", "Deep Learning", "Power BI", "Tableau", "AWS Cloud", "Azure Cloud", "FastAPI", "NumPy", "Pandas", "TensorFlow", "Pytorch", "Keras", "Scikit-Learn"],
  projects: [
    {
      title: "Saudi Dialect Sentiment Analysis",
      description: "Developed an advanced Natural Language Processing (NLP) model trained specifically on a vast corpus of Saudi Arabian dialect data. The goal was to accurately predict user sentiment from localized textual inputs. Built using Deep Learning architectures, specifically LSTM and Transformer models, and integrated seamlessly into a responsive web application for real-time inference.",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800",
      tags: ["Deep Learning", "NLP", "Python", "TensorFlow"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "Real-time Defect Detection",
      description: "Engineered and implemented a highly robust Computer Vision system designed to detect manufacturing defects on high-speed assembly lines in real-time. By leveraging customized YOLOv8 models optimized for edge device deployment, the system achieved a remarkable 98% accuracy, drastically reducing human error in quality assurance.",
      image: "/assets/defect-detection-mockup.png",
      tags: ["Computer Vision", "OpenCV", "YOLOv8", "Machine Learning"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "Retail Sales Forecasting AI",
      description: "Designed a comprehensive, end-to-end data pipeline that ingests years of historical retail data. Utilizing advanced predictive algorithms including XGBoost and Time Series Analysis, the system outputs hyper-accurate, interactive sales forecasts directly into an operational Power BI environment.",
      image: "/assets/sales-forecast-mockup.png",
      tags: ["Time Series", "XGBoost", "Power BI", "Data Analysis"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "Customer Churn Predictor",
      description: "Engineered a predictive analytics solution targeted at identifying at-risk customers for an expanding e-commerce platform. The project combined complex SQL data extraction, rigorous statistical analysis, and Random Forest classification models to highlight behavioral patterns, ultimately leading to a 15% reduction in customer churn.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Scikit-Learn", "SQL", "Classification", "Python"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "IoT Smart Irrigation with AWS",
      description: "Architected an end-to-end smart irrigation system utilizing numerous IoT sensors deployed directly in agricultural fields. The data streams seamlessly to AWS Cloud infrastructure, where an active machine learning model evaluates soil moisture and live weather forecast APIs to predict and automate the mathematically optimal watering schedules.",
      image: "/assets/smart-irrigation-mockup.png",
      tags: ["AWS Cloud", "IoT", "Machine Learning", "Agriculture"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "Automated Crop Monitoring System",
      description: "Spearheaded the development of an automated monitoring software suite utilizing state-of-the-art computer vision algorithms. The system scans and detects early phenotypic signs of crop disease, communicating directly with smart logic controllers to dynamically adjust and isolate nutrient delivery to affected zones.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      tags: ["Computer Vision", "Automated Control", "Python", "Deep Learning"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "Retail Analytics Power BI Dashboard",
      description: "Developed and deployed a highly interactive, comprehensive Power BI dashboard for a major retail chain. The dashboard processes and aggregates millions of rows of sales data to visualize critical KPIs, regional sales trends, spatial performance, and inventory levels in real-time, functioning as the primary hub for executive decision-making.",
      image: "/assets/power-bi-retail-mockup.png",
      tags: ["Power BI", "Data Analysis", "SQL", "Dashboarding"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "Financial Forecasting Power BI",
      description: "Created a sophisticated, interactive financial forecasting model entirely within the Power BI ecosystem. This project leveraged deeply complex DAX calculations and data molding to project upcoming revenue growth, identify fiscal bleeding, and mathematically optimize future budget allocations across multiple corporate departments.",
      image: "/assets/power-bi-finance-mockup.png",
      tags: ["Power BI", "DAX", "Finance", "Predictive Modeling"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "Physical Capability & Health Predictor",
      description: "Developed an AI-powered diagnostic application that predicts individual physical limitations and health capabilities based on anthropometric variables and age. The project involved the rigorous training and comparative benchmarking of six distinct AI classification models. It culminates in an intuitive web app built with Python, FastAPI, and React.js.",
      image: "/assets/health-ai-mockup.png",
      tags: ["Python", "FastAPI", "React.js", "Scikit-Learn"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "Hotel Booking Intelligence",
      description: "Spearheaded a comprehensive data mining project focused entirely on analyzing legacy hotel behavior to predict future cancellation rates. Utilized advanced SQL for data structuring, extensive Exploratory Data Analysis (EDA) to uncover hidden booking patterns, and Power BI to construct an actionable command dashboard.",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
      tags: ["SQL", "Power BI", "EDA", "Data Analysis"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "Smart Irrigation Thesis Project",
      description: "My crowning graduation project: A deeply integrated hardware-software solution combining physical sensors, localized data modeling, and automated control logic to universally optimize irrigation water consumption in standard agricultural setups.",
      image: "/assets/irrigation-thesis-mockup.png",
      tags: ["Arduino", "Sensors", "Automated Control", "Irrigation"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    }
  ],
  education: [
    {
      period: "Dec 2025 — Aug 2026",
      degree: "Applied Artificial Intelligence and Data Analysis Training",
      institution: "Digital Pioneers Initiative (MCIT & Military Academy)",
      description: "A comprehensive nine-month intensive program focusing on advanced AI, data science, and analytical techniques relevant to modern industry needs. The syllabus heavily emphasized real-world scenarios, forcing students to architect enterprise-level models and deploy them to cloud architectures.",
      highlights: ["Machine Learning", "Deep Learning", "Applied Statistics", "Data Analysis", "Data Mining & Data Visualization", "Cloud Computing"]
    },
    {
      period: "2019 — 2023",
      degree: "B.Sc. in Agricultural Engineering",
      institution: "Mansoura University",
      description: "Graduated with a 'Very Good' overall academic grade. As culmination of my studies, I conceptualized and developed a 'Smart Irrigation System' for my graduation project—awarded an 'Excellent' grade—which seamlessly merged principles of physical hydrology with automation and logic control.",
      highlights: ["Smart Irrigation System", "Automation", "Engineering Principles", "Thermodynamics", "Hydraulics"]
    }
  ],
  certifications: [
    { name: "Python DataCamp Mastery", issuer: "DataCamp", icon: "Code" },
    { name: "Google Data Analytics Certificate", issuer: "Google", icon: "Scan" },
    { name: "Power BI Data Analyst (PL-300)", issuer: "Microsoft", icon: "BarChart3" },
    { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", icon: "Cloud" }
  ],
  experience: [
    {
      period: "2024 — Present",
      role: "AI & Data Solutions Architect (Freelance)",
      company: "Independent Client Collaborations",
      description: "Providing bespoke consultative data architecture and AI modeling services. I regularly design, evaluate, and deploy specific machine learning algorithms targeted at predictive analysis. Furthermore, I architect interactive business intelligence dashboards allowing diverse corporate clients to visualize deeply granular metrics.",
      technologies: ["Python", "Power BI", "FastAPI", "SQL", "Scikit"]
    },
    {
      period: "2022 — 2025",
      role: "Sales & Quantitative Operations Manager",
      company: "Raya Computers",
      description: "Directed high-level sales strategies while simultaneously leading rigorous operational management for IT solutions. Implemented novel data-driven approaches capable of evaluating sales pipelines, forecasting quarterly demand using specialized analytical models, and delivering robustly customized revenue reports to executive boards.",
      technologies: ["Excel", "Power BI", "SQL", "Management", "Operations"]
    },
    {
      period: "2025 — 2026",
      role: "AI & Data Specialist Fellow",
      company: "Digital Pioneers Initiative (MCIT & Military Academy)",
      description: "Undertook a prestigious nine-month fellowship dedicated entirely to the Applied AI & Data Analysis track. Mastered the mathematics behind deep learning and statistics. Designed scalable AI/ML pipelines and navigated modern Azure cloud frameworks. Explored the futuristic paradigms of Agentic AI systems for predictive analytics.",
      technologies: ["Python", "Power BI", "SQL", "Azure", "Deep Learning"]
    }
  ]
};

export const portfolioDataAR = {
  sectionDescriptions: {
    skills: "ترسانتي التقنية هي مزيج منتقى بعناية من هندسة البيانات، والذكاء الاصطناعي، وأدوات تطوير البرمجيات. أقوم باستمرار بصقل هذه المهارات لهندسة أنظمة قوية، وقابلة للتوسع، وعالية الدقة التنبؤية، ومصممة خصيصاً لمواجهة التحديات المؤسسية المعقدة.",
    projects: "فيما يلي عرض شامل لمحفظة أعمالي الاحترافية. تُمثل كل حالة دراسية اندماجاً فريداً بين الخبرة الميدانية والتطبيقات التكنولوجية المتقدمة، بدءاً من التحليلات التنبؤية ووصولاً إلى أنظمة رؤية الحاسب الآلية.",
    education: "أساس نظري صلب مقترن بالتطبيق العملي الصارم. اتسمت رحلتي الأكاديمية بالسعي الدؤوب لتحقيق التميز الهندسي وتطبيق أحدث منهجيات علوم البيانات والذكاء الاصطناعي.",
    certifications: "في المشهد التقني سريع التطور للذكاء الاصطناعي والبيانات، أصبح التعلم المستمر ضرورة حتمية للنجاح. تعكس هذه الاعتمادات المهنية التزامي بإتقان أدوات الذكاء القياسية وهندسات الحوسبة السحابية."
  },
  personal: {
    name: "محمد وائل محمد",
    title: "متخصص في الذكاء الاصطناعي التطبيقي وتحليل البيانات",
    email: "mohamedwael2077@gmail.com",
    linkedin: "https://linkedin.com/in/mohamed-wael-mohamed-9772803a4",
    github: "https://github.com/MohamedWael78",
    avatar: "/profile-photo.jpg",
    about: "أنا متخصص شغوف ومتفانٍ في الذكاء الاصطناعي التطبيقي وتحليل البيانات، مع وجود أساس أكاديمي متين في الهندسة الزراعية والنظم الآلية من جامعة المنصورة. تمنحني هذه الخلفية التقنية المتداخلة منظوراً فريداً وسعة استثنائية لسد الفجوة بين المبادئ الهندسية التقليدية وبين الحلول البرمجية المتطورة والقائمة على البيانات.\n\nتخرجت مؤخراً بنجاح من برنامج تدريبي مكثف وصارم استمر قرابة التسعة أشهر، ضمن مسار الذكاء الاصطناعي التطبيقي وعلوم البيانات بقيادة مبادرة رواد مصر الرقمية (بالتعاون المشترك بين وزارة الاتصالات والأكاديمية العسكرية). وخلال هذا البرنامج المكثف، تمكنت من تطوير خبراتي وهندسة معرفتي بشكل تام في نطاقات تعلم الآلة (Machine Learning)، وبناء الشبكات العصبية العميقة، والبنى التحتية السحابية.\n\nإن شغفي الحقيقي يكمن في هندسة وبناء أنظمة بالغة الذكاء لا تكتفي بمجرد معالجة المعلومات الجامدة، بل تتعداها لفهم الأنماط، والتنبؤ بالتوجهات المستقبلية، وتقديم استبصارات ورؤى تحليلية تدعم اتخاذ القرارات. وسواء كان ذلك بنمذجة مجسات وعقول إلكترونية للزراعة الدقيقة، أو بناء لوحات تحكم مالية إحصائية بالغة التعقيد، فإن التركيز والغاية دائماً وأبداً ينصب نحو ترك تأثير عملي ومنهجي مستدام."
  },
  skills: [
    { category: "البرمجة وإطارات العمل", items: ["Python", "SQL", "FastAPI", "NumPy", "Pandas", "Scikit-Learn"] },
    { category: "الذكاء الاصطناعي وتعلم الآلة", items: ["Machine Learning", "Deep Learning", "TensorFlow", "Keras"] },
    { category: "تصوير البيانات", items: ["Power BI", "Tableau", "Excel"] },
    { category: "الخدمات السحابية", items: ["Azure Cloud", "AWS Cloud"] },
    { category: "التحليل", items: ["SPSS", "Power BI", "Tableau", "Excel"] }
  ],
  allSkills: ["SQL", "Python", "Machine Learning", "Deep Learning", "Power BI", "Tableau", "AWS Cloud", "Azure Cloud", "FastAPI", "NumPy", "Pandas", "TensorFlow", "Pytorch", "Keras", "Scikit-Learn"],
  projects: [
    {
      title: "تحليل المشاعر لللهجة السعودية",
      description: "نموذج NLP متقدم تم تدريبه حصرياً على بيانات ونصوص مكتوبة باللهجة السعودية الدارجة بغية بناء توقع إيجابي/سلبي دقيق للمشاعر من النصوص والألفاظ الدقيقة. بني النظام استناداً على الخوارزميات العميقة المعقدة (LSTM و Transformers) وتم دمجه وتركيبه كلياً كواجهة برمجية ضمن تطبيق ويب لتوصيل نتيجة مباشرة وفورية للمستخدم.",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800",
      tags: ["Deep Learning", "NLP", "Python", "TensorFlow"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "نظام رؤية الآلة لكشف العيوب المصنعية",
      description: "هندسة وبناء نظام استثنائي ذو صلابة فائقة لـ (رؤية الحاسب - Computer Vision)، صُمم بدقة لاكتشاف وتحديد العيوب الدقيقة جداً للخطوط التصنيعية شديدة السرعة في الوقت الفعلي. عن طريق استخدام نماذج YOLOv8 وإعدادها للعمل بكفاءة على الحوسبة الطرفية، سجل النظام مستوى دقة بنسبة 98% مساهماً بخفض أخطاء الفحص اليدوي.",
      image: "/assets/defect-detection-mockup.png",
      tags: ["Computer Vision", "OpenCV", "YOLOv8", "Machine Learning"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "توقع مستقبل مبيعات التجزئة الذكي",
      description: "سلسلة بناء هيكلية شاملة تولت معالجة بيانات تاريخية ضخمة لسلاسل مبيعات كبرى. بعد عمليات تنظيف ومعالجة دقيقة، تم تغذية النماذج التنبؤية (مثل XGBoost والسلاسل الزمنية) لتُصدر في النهاية نتائج استشرافية دقيقة عن الحجم المستقبلي للطلب والمبيعات وتجسيدها بلوحات Power BI حية.",
      image: "/assets/sales-forecast-mockup.png",
      tags: ["Time Series", "XGBoost", "Power BI", "Data Analysis"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "نظام التنبؤ الاستراتيجي بتسرب العملاء",
      description: "ابتكار برمجية تنبؤية فائقة الدقة لتحديد العملاء ذوي التوجه المرتفع لهجر أو ترك خدمة المنصة التجارية (Churn Risk). جمع المشروع بين فنون الاستخراج السلس والعميق بالاستعلامات الهيكلية (SQL) والخواص الجبرية لخوارزمية تصنيف أشجار الغابات العشوائية، ليسفر عنه تراجع ملحوظ في معدل الخسارة بـ 15%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Scikit-Learn", "SQL", "Classification", "Python"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "منظومة الري الذكي السحابية (AWS)",
      description: "بناء هيكل ري تقني متكامل الأركان يعتمد على مصفوفة مستشعرات لإنترنت الأشياء (IoT) المدمجة بعمق الأرض الزراعية. حيث ترسل تلك المجسات قراءاتها مباشرة وبسرعة فائقة لخوادم الحوسبة السحابية من نوع AWS، وهناك يقوم نموذج التعلم الآلي بمعايرة جداول المياه وفقاً للرطوبة وتوقعات الطقس بشكل ديناميكي كامل.",
      image: "/assets/smart-irrigation-mockup.png",
      tags: ["AWS Cloud", "IoT", "Machine Learning", "Agriculture"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "المرصد الآلي الذكي للمحاصيل",
      description: "تصدرت هذه المهمة عملية بناء شبكة معالجة تصويرية متقدمة لخوارزميات الكمبيوتر فيزون لدراسة الطور الظاهري للنبات، وتحديد أي علامات مبكرة ومجهرية تحذيرية للإصابات المرضية أو الإجهاد البيئي، والاتصال مركزياً بأذرع رش الري الذكي للعزل والدعم المستهدف مباشرة.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      tags: ["Computer Vision", "Automated Control", "Python", "Deep Learning"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "مركز تحليلات بيانات المبيعات (Power BI)",
      description: "تصميم وإطلاق نظام قيادة تفاعلي عالي التشابك والعمق باستخدام Power BI لسلسلة بيع ضخمة. قادرة هذه اللوحات على سحق وتصفية ومعالجة ملايين السجلات لمعاملات المبيعات للوصول لرؤى دقيقة وتصوير بصري فائق الأهمية، يشمل تقييم مؤشرات الأداء الحيوية، والحصص المناطقية، والجرد الآني.",
      image: "/assets/power-bi-retail-mockup.png",
      tags: ["Power BI", "Data Analysis", "SQL", "Dashboarding"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "النمذجة الرياضية للتنبؤ المالي",
      description: "إنشاء وتشكيل مجسّمات وحسابات مالية متقدمة وتفاعلية جداً ضمن النظام البيئي الشامل لـPower BI. وظّف هذا المشروع قواعد حسابية شديدة التشعب في (DAX) لتوقع منحنيات نمو العوائد وتأطير السياسات التي تضمن التحسين المستقبلي لتخصيصات وميزانيات الشركة وحماية مقدراتها المالية.",
      image: "/assets/power-bi-finance-mockup.png",
      tags: ["Power BI", "DAX", "Finance", "Predictive Modeling"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "المُقيّم الذكي للقدرة البدنية والصحية",
      description: "منظومة تشخيصية حديثة ومدعومة بسحر الذكاء الاصطناعي للتنبؤ بدقة فائقة بالقيود والقدرات الجسدية للأفراد بالاعتماد على المدخلات الأنثروبومترية الأساسية. تكلف المشروع باختبار، تنقيح ومقارنة وم فاضلة بين ستة من خوارزميات التصنيف. وبلغ الأمر أوجه بطرح واجهة مستخدم ناعمة بالاستعانة بـ Python، FastAPI، و React.js.",
      image: "/assets/health-ai-mockup.png",
      tags: ["Python", "FastAPI", "React.js", "Scikit-Learn"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "نظام الاستخبارات والتحليلات الفندقية",
      description: "تولي قيادة وتنسيق مشروع كبير للتنقيب المعُممق والغوص في البيانات التاريخية للحجوزات لاكتشاف الأنماط الخفية ومعدلات الإلغاء. تم استغلال الاستعلامات الهيكلية المنظمة (SQL)، ثم تنفيذ التحليل الاستكشافي المتميز للمتغيرات الشديدة (EDA)، وإنهاء العمل بنماذج بصرية استراتيجية.",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
      tags: ["SQL", "Power BI", "EDA", "Data Analysis"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    },
    {
      title: "مشروع الري الذكي للأطروحة",
      description: "التتويج الأكاديمي الشامل لرحلتي: حل برمجي وفيزيائي مترابط يجمع العتاد الصلب والحساسات الرطوبية بنموذج تحكم ذكي دقيق لتخصيص الاستهلاك المائي بكفاءة وتوجيهه للمناطق الحيوية والمفتقرة بالبيئات والمحاور الزراعية العادية.",
      image: "/assets/irrigation-thesis-mockup.png",
      tags: ["Arduino", "Sensors", "Automated Control", "Irrigation"],
      link: "#",
      github: "https://github.com/MohamedWael78"
    }
  ],
  education: [
    {
      period: "ديسمبر 2025 — أغسطس 2026",
      degree: "برنامج زمالة الذكاء الاصطناعي التطبيقي وتكنولوجيا البيانات",
      institution: "مبادرة رواد مصر الرقمية (وزارة الاتصالات المفتوحة والأكاديمية العسكرية MTI)",
      description: "برنامج تأهيلي احترافي مكثف استمر طيلة تسعة أشهر لتدريس والتدرب على تقنيات الذكاء الاصطناعي الأرقى والأشد عمقاً. لقد اعتمد النهج على محاكاة الظروف الواقعية، حيث لزم تقديم ونشر موديلات وتطبيقات برمجية عالية الأداء على السحابة، وضمان دقتها الفائقة في قطاعات الأعمال.",
      highlights: ["Machine Learning", "Deep Learning", "Applied Statistics", "Data Analysis", "Data Mining & Data Visualization", "Cloud Computing"]
    },
    {
      period: "2019 — 2023",
      degree: "بكالوريوس في الهندسة الزراعية المنظومية",
      institution: "جامعة المنصورة - مصر",
      description: "التخرج بتقدير أكاديمي متفوق وبدرجة (جيد جداً)، ليتوج هذا العناء الطويل بتقديم وبناء هندسي متكامل لـ 'نظام الري المائي الذكي' ضمن أطروحة التخرج. نالت الفكرة تقديرا مبجلاً من لجنة المناقشة (بدرجة امتياز)، لإبرازها توافقاً هندسياً بين أسس ومفاهيم الميكانيكا والدوائر المنطقية المؤتمتة.",
      highlights: ["Smart Irrigation System", "Automation", "Engineering Principles", "Thermodynamics", "Hydraulics"]
    }
  ],
  certifications: [
    { name: "إتقان ومسار لغة Python", issuer: "DataCamp", icon: "Code" },
    { name: "منظومة تحليلات البيانات من جووجل", issuer: "Google", icon: "Scan" },
    { name: "شهادة محلل بيانات معتمد - Power BI (PL-300)", issuer: "Microsoft", icon: "BarChart3" },
    { name: "أساسيات الحوسبة السحابية Azure", issuer: "Microsoft", icon: "Cloud" }
  ],
  experience: [
    {
      period: "2024 — الوقت الحالي",
      role: "مستشار ومعماري حلول بيانات وذكاء اصطناعي (حر)",
      company: "تعاون استشاري مستقل",
      description: "توفير خدمات استشارية وتقنية متقدمة في مجال هيكلة وتنظيم البيانات والنمذجة العميقة. أصمم بانتظام وأنفّذ وأقيّم خوارزميات تعلم آلي دقيقة مصممة لتحقيق الرؤى التنبؤية، كما أقوم بتطوير لوحات القيادة ولوحات أعمال إحصائية (BI) سريعة الاستجابة لتمكين الكيانات المختلفة من دراسة مؤشراتها.",
      technologies: ["Python", "Power BI", "FastAPI", "SQL", "Scikit"]
    },
    {
      period: "2022 — 2025",
      role: "مدير المبيعات والاستراتيجية التشغيلية للبيانات",
      company: "حواسيب راية (Raya Computers)",
      description: "توجيه وتطوير المخططات والإجراءات الملموسة للمبيعات بجانب الرقابة الدقيقة والكثيفة لسير منظومة الحلول التكنولوجية. طبّقت مفاهيم وآليات مستمدة من التنقيب التنبؤي لتقييم وقياس الطلب وخطوط العرض، ونجحت في تحييد الأزمات بتزويد الهيئات الإدارية بتقارير كمية دقيقة دعمت كفاءة اتخاذ القرارات بوضوح.",
      technologies: ["Excel", "Power BI", "SQL", "Management", "Operations"]
    },
    {
      period: "2025 — 2026",
      role: "زميل باحث مختص بالنماذج والمنظومات التنبؤية",
      company: "مبادرة رواد مصر الرقمية (منحة حكومية)",
      description: "استثمار فترة تسعة أشهر بتركيز جامح لكسر الحواجز في مسار علوم البيانات والتحليل العميق (Applied AI & Data Analysis). حيث تم سبر أغوار الجبر والإحصاء المستخدم بالتعلم الآلي. وتم التدرب عملياً على البث المباشر للأنظمة الخوارزمية عبر Microsoft Azure، واكتشاف ثرورة من نماذج الـتصرف الآلية الصانعة للقرار (Agentic AI Systems).",
      technologies: ["Python", "Power BI", "SQL", "Azure", "Deep Learning"]
    }
  ]
};
