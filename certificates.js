// Certificates Page JavaScript - Interactive functionality

// Certificate data with comprehensive information
const certificateData = [
    // Business Intelligence & Analytics - Complete Track
    {
        id: 1,
        title: "Introduction to Power BI",
        category: "business-intelligence",
        track: "Business Intelligence & Analytics - Complete Track ⭐",
        provider: "DataCamp",
        completionDate: "2024-09-15",
        duration: "4 hours",
        difficulty: "Beginner",
        description: "Comprehensive introduction to Power BI Desktop, covering data connections, basic transformations, and report creation.",
        skills: ["Power BI Desktop", "Data Connections", "Basic DAX", "Report Design"],
        image: "https://kimi-web-img.moonshot.cn/img/cdn.corporatefinanceinstitute.com/2a12ad7f448bde0a7701f4d3d45497e913341bb2.png",
        outcomes: [
            "Mastered Power BI Desktop interface and navigation",
            "Learned to connect to various data sources",
            "Created first interactive dashboard",
            "Understood basic data modeling concepts"
        ]
    },
    {
        id: 2,
        title: "Data Preparation in Power BI",
        category: "business-intelligence",
        track: "Business Intelligence & Analytics - Complete Track ⭐",
        provider: "DataCamp",
        completionDate: "2024-09-20",
        duration: "6 hours",
        difficulty: "Intermediate",
        description: "Advanced data preparation techniques using Power Query Editor for data cleaning and transformation.",
        skills: ["Power Query", "Data Cleaning", "Data Transformation", "M Language"],
        image: "https://kimi-web-img.moonshot.cn/img/cdn.corporatefinanceinstitute.com/2a12ad7f448bde0a7701f4d3d45497e913341bb2.png",
        outcomes: [
            "Advanced data cleaning and transformation skills",
            "Mastery of Power Query Editor",
            "Understanding of M language basics",
            "Ability to handle complex data scenarios"
        ]
    },
    {
        id: 3,
        title: "Data Visualization in Power BI",
        category: "business-intelligence",
        track: "Business Intelligence & Analytics - Complete Track ⭐",
        provider: "DataCamp",
        completionDate: "2024-09-25",
        duration: "5 hours",
        difficulty: "Intermediate",
        description: "Creating effective visualizations and understanding visualization best practices in Power BI.",
        skills: ["Chart Selection", "Visual Design", "Interactive Elements", "Formatting"],
        image: "https://kimi-web-img.moonshot.cn/img/cdn.corporatefinanceinstitute.com/2a12ad7f448bde0a7701f4d3d45497e913341bb2.png",
        outcomes: [
            "Created compelling and informative visualizations",
            "Mastered chart selection for different data types",
            "Learned advanced formatting techniques",
            "Built interactive dashboard elements"
        ]
    },
    {
        id: 4,
        title: "Exploratory Data Analysis in Power BI",
        category: "business-intelligence",
        track: "Business Intelligence & Analytics - Complete Track ⭐",
        provider: "DataCamp",
        completionDate: "2024-10-02",
        duration: "6 hours",
        difficulty: "Intermediate",
        description: "Exploratory data analysis techniques using Power BI for data discovery and insight generation.",
        skills: ["EDA Techniques", "Statistical Analysis", "Pattern Recognition", "Insight Generation"],
        image: "https://kimi-web-img.moonshot.cn/img/cdn.corporatefinanceinstitute.com/2a12ad7f448bde0a7701f4d3d45497e913341bb2.png",
        outcomes: [
            "Conducted comprehensive exploratory data analysis",
            "Identified patterns and anomalies in data",
            "Generated actionable business insights",
            "Applied statistical methods in Power BI"
        ]
    },
    {
        id: 5,
        title: "Data Modeling in Power BI",
        category: "business-intelligence",
        track: "Business Intelligence & Analytics - Complete Track ⭐",
        provider: "DataCamp",
        completionDate: "2024-10-10",
        duration: "8 hours",
        difficulty: "Advanced",
        description: "Advanced data modeling concepts including relationships, calculated columns, and measures.",
        skills: ["Data Modeling", "DAX Functions", "Relationships", "Calculated Columns"],
        image: "https://kimi-web-img.moonshot.cn/img/cdn.corporatefinanceinstitute.com/2a12ad7f448bde0a7701f4d3d45497e913341bb2.png",
        outcomes: [
            "Built complex data models",
            "Mastered advanced DAX functions",
            "Optimized data relationships",
            "Created sophisticated calculations"
        ]
    },
    {
        id: 6,
        title: "Case Study: Analyzing Customer Churn in Power BI",
        category: "business-intelligence",
        track: "Business Intelligence & Analytics - Complete Track ⭐",
        provider: "DataCamp",
        completionDate: "2024-10-15",
        duration: "4 hours",
        difficulty: "Advanced",
        description: "Real-world case study applying Power BI skills to analyze customer churn patterns and predict retention.",
        skills: ["Business Analysis", "Churn Analysis", "Predictive Modeling", "Case Study Methodology"],
        image: "https://kimi-web-img.moonshot.cn/img/cdn.corporatefinanceinstitute.com/2a12ad7f448bde0a7701f4d3d45497e913341bb2.png",
        outcomes: [
            "Applied skills to real business problem",
            "Built predictive churn model",
            "Created actionable business recommendations",
            "Demonstrated end-to-end analytics workflow"
        ]
    },
    {
        id: 7,
        title: "Report Design in Power BI",
        category: "business-intelligence",
        track: "Business Intelligence & Analytics - Complete Track ⭐",
        provider: "DataCamp",
        completionDate: "2024-10-20",
        duration: "5 hours",
        difficulty: "Intermediate",
        description: "Best practices for report design, layout optimization, and creating professional business reports.",
        skills: ["Report Design", "Layout Optimization", "Professional Presentation", "User Experience"],
        image: "https://kimi-web-img.moonshot.cn/img/cdn.corporatefinanceinstitute.com/2a12ad7f448bde0a7701f4d3d45497e913341bb2.png",
        outcomes: [
            "Designed professional business reports",
            "Applied UX principles to dashboard design",
            "Optimized report performance",
            "Created publication-ready deliverables"
        ]
    },
    {
        id: 8,
        title: "User-Oriented Design in Power BI",
        category: "business-intelligence",
        track: "Business Intelligence & Analytics - Complete Track ⭐",
        provider: "DataCamp",
        completionDate: "2024-10-25",
        duration: "4 hours",
        difficulty: "Advanced",
        description: "User-centered design principles for creating intuitive and effective Power BI solutions.",
        skills: ["User Experience Design", "Intuitive Navigation", "User Testing", "Design Thinking"],
        image: "https://kimi-web-img.moonshot.cn/img/cdn.corporatefinanceinstitute.com/2a12ad7f448bde0a7701f4d3d45497e913341bb2.png",
        outcomes: [
            "Applied user-centered design methodology",
            "Created intuitive navigation systems",
            "Conducted user testing and iteration",
            "Built user-friendly analytics solutions"
        ]
    },

    // Data Science & Time Series
    {
        id: 9,
        title: "Introduction to SQL",
        category: "data-science",
        track: "Data Science & Time Series",
        provider: "DataCamp",
        completionDate: "2024-08-15",
        duration: "4 hours",
        difficulty: "Beginner",
        description: "Foundational SQL skills for data manipulation and analysis, covering basic queries and database operations.",
        skills: ["SQL Queries", "Database Operations", "Data Filtering", "Join Operations"],
        image: "https://kimi-web-img.moonshot.cn/img/www.w3schools.com/1c01ed75480b7732ab0a5463a1fc29018bd3680d.jpg",
        outcomes: [
            "Mastered basic SQL syntax and queries",
            "Learned to filter and sort data effectively",
            "Understood database relationships",
            "Performed basic data analysis with SQL"
        ]
    },
    {
        id: 10,
        title: "Time Series Analysis in Python",
        category: "data-science",
        track: "Data Science & Time Series",
        provider: "DataCamp",
        completionDate: "2024-11-01",
        duration: "6 hours",
        difficulty: "Intermediate",
        description: "Comprehensive introduction to time series analysis using Python, including forecasting and trend analysis.",
        skills: ["Time Series Analysis", "Python", "Forecasting", "Trend Analysis"],
        image: "https://kimi-web-img.moonshot.cn/img/priyadogra.com/3f578b23c1a4eb1a5768982848e9be3df0d60dac.jpg",
        outcomes: [
            "Analyzed time series data patterns",
            "Built forecasting models",
            "Identified trends and seasonality",
            "Applied statistical methods to temporal data"
        ]
    },
    {
        id: 11,
        title: "Manipulating Time Series Data in Python",
        category: "data-science",
        track: "Data Science & Time Series",
        provider: "DataCamp",
        completionDate: "2024-11-05",
        duration: "5 hours",
        difficulty: "Intermediate",
        description: "Advanced techniques for handling, cleaning, and transforming time series data using pandas and other Python libraries.",
        skills: ["Pandas", "Data Cleaning", "Time Series Transformation", "Python Programming"],
        image: "https://kimi-web-img.moonshot.cn/img/priyadogra.com/3f578b23c1a4eb1a5768982848e9be3df0d60dac.jpg",
        outcomes: [
            "Mastered time series data manipulation",
            "Learned advanced pandas techniques",
            "Handled missing values and anomalies",
            "Transformed time series for analysis"
        ]
    },
    {
        id: 12,
        title: "Visualizing Time Series Data in Python",
        category: "data-science",
        track: "Data Science & Time Series",
        provider: "DataCamp",
        completionDate: "2024-11-10",
        duration: "4 hours",
        difficulty: "Intermediate",
        description: "Creating effective visualizations for time series data using matplotlib, seaborn, and plotly.",
        skills: ["Data Visualization", "Matplotlib", "Seaborn", "Plotly"],
        image: "https://kimi-web-img.moonshot.cn/img/priyadogra.com/3f578b23c1a4eb1a5768982848e9be3df0d60dac.jpg",
        outcomes: [
            "Created compelling time series visualizations",
            "Used multiple visualization libraries",
            "Displayed trends and patterns effectively",
            "Built interactive time series plots"
        ]
    },

    // Data Engineering
    {
        id: 13,
        title: "Data Manipulation with pandas",
        category: "data-engineering",
        track: "Data Engineering",
        provider: "DataCamp",
        completionDate: "2024-07-20",
        duration: "6 hours",
        difficulty: "Intermediate",
        description: "Comprehensive pandas training for data manipulation, analysis, and preparation tasks.",
        skills: ["Pandas", "Data Manipulation", "Data Analysis", "DataFrame Operations"],
        image: "https://kimi-web-img.moonshot.cn/img/priyadogra.com/3f578b23c1a4eb1a5768982848e9be3df0d60dac.jpg",
        outcomes: [
            "Mastered pandas DataFrame operations",
            "Performed complex data manipulations",
            "Optimized data processing workflows",
            "Handled various data formats and types"
        ]
    },
    {
        id: 14,
        title: "Introduction to Importing Data in Python",
        category: "data-engineering",
        track: "Data Engineering",
        provider: "DataCamp",
        completionDate: "2024-07-25",
        duration: "3 hours",
        difficulty: "Beginner",
        description: "Essential skills for importing data from various sources including CSV, Excel, databases, and web APIs.",
        skills: ["Data Import", "File I/O", "API Integration", "Data Sources"],
        image: "https://kimi-web-img.moonshot.cn/img/priyadogra.com/3f578b23c1a4eb1a5768982848e9be3df0d60dac.jpg",
        outcomes: [
            "Imported data from multiple sources",
            "Handled various file formats",
            "Connected to web APIs",
            "Automated data ingestion processes"
        ]
    },

    // Machine Learning
    {
        id: 15,
        title: "Understanding Machine Learning",
        category: "machine-learning",
        track: "Machine Learning",
        provider: "DataCamp",
        completionDate: "2024-08-01",
        duration: "4 hours",
        difficulty: "Beginner",
        description: "Foundational concepts of machine learning including supervised and unsupervised learning techniques.",
        skills: ["Machine Learning Basics", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
        image: "https://kimi-web-img.moonshot.cn/img/images.template.net/e86dbda870caf87d2b86525cb929101777ed6054.jpg",
        outcomes: [
            "Understood core ML concepts and terminology",
            "Learned about different learning types",
            "Explored model evaluation techniques",
            "Gained foundation for advanced ML topics"
        ]
    },
    {
        id: 16,
        title: "Dimensionality Reduction in Python",
        category: "machine-learning",
        track: "Machine Learning",
        provider: "DataCamp",
        completionDate: "2024-08-10",
        duration: "5 hours",
        difficulty: "Advanced",
        description: "Advanced techniques for reducing data dimensionality using PCA, t-SNE, and other methods.",
        skills: ["PCA", "t-SNE", "Dimensionality Reduction", "Feature Engineering"],
        image: "https://kimi-web-img.moonshot.cn/img/images.template.net/e86dbda870caf87d2b86525cb929101777ed6054.jpg",
        outcomes: [
            "Applied PCA for dimensionality reduction",
            "Used t-SNE for visualization",
            "Improved model performance",
            "Enhanced data understanding"
        ]
    },

    // Technical Skills
    {
        id: 17,
        title: "Unit Testing for Data Science in Python",
        category: "technical-skills",
        track: "Technical Skills",
        provider: "DataCamp",
        completionDate: "2024-09-01",
        duration: "4 hours",
        difficulty: "Intermediate",
        description: "Best practices for testing data science code using pytest and other testing frameworks.",
        skills: ["Unit Testing", "Pytest", "Code Quality", "Test-Driven Development"],
        image: "https://kimi-web-img.moonshot.cn/img/www.w3schools.com/69f567feca9d37ac570eca5dc81c547333bdf053.jpg",
        outcomes: [
            "Implemented comprehensive test suites",
            "Used pytest for data science projects",
            "Improved code reliability and quality",
            "Adopted test-driven development practices"
        ]
    },
    {
        id: 18,
        title: "Introduction to Data Visualization with Matplotlib",
        category: "technical-skills",
        track: "Technical Skills",
        provider: "DataCamp",
        completionDate: "2024-07-10",
        duration: "4 hours",
        difficulty: "Beginner",
        description: "Foundational data visualization techniques using matplotlib for creating informative charts and plots.",
        skills: ["Matplotlib", "Plot Creation", "Chart Customization", "Visual Design"],
        image: "https://kimi-web-img.moonshot.cn/img/www.w3schools.com/69f567feca9d37ac570eca5dc81c547333bdf053.jpg",
        outcomes: [
            "Created various types of data visualizations",
            "Customized plots for better communication",
            "Applied design principles to charts",
            "Built publication-quality graphics"
        ]
    },

    // Research & Professional Development
    {
        id: 19,
        title: "Academic Research Foundations: Quantitative",
        category: "professional-development",
        track: "Research & Professional Development",
        provider: "University Program",
        completionDate: "2024-06-15",
        duration: "20 hours",
        difficulty: "Advanced",
        description: "Comprehensive training in quantitative research methodologies and academic writing standards.",
        skills: ["Research Methodology", "Academic Writing", "Statistical Analysis", "Critical Thinking"],
        image: "https://kimi-web-img.moonshot.cn/img/www.successcertificates.com/bccbb343d4d1164c6094072ac71ba8a478b09dad.jpg",
        outcomes: [
            "Mastered quantitative research methods",
            "Improved academic writing skills",
            "Enhanced critical analysis abilities",
            "Developed research project management skills"
        ]
    },
    {
        id: 20,
        title: "Professional Skills: Resume Writing, Mental Health, Stress Management",
        category: "professional-development",
        track: "Research & Professional Development",
        provider: "Professional Development Institute",
        completionDate: "2024-06-30",
        duration: "8 hours",
        difficulty: "Beginner",
        description: "Essential professional skills including resume optimization, mental health awareness, and stress management techniques.",
        skills: ["Resume Writing", "Mental Health Awareness", "Stress Management", "Professional Development"],
        image: "https://kimi-web-img.moonshot.cn/img/interaction-training.com/893ebb600d02695c3b6a8dcc8d519760ec0ca64f.png",
        outcomes: [
            "Created compelling professional resume",
            "Developed mental health awareness",
            "Learned effective stress management techniques",
            "Enhanced overall professional effectiveness"
        ]
    }
];

// Timeline data for achievement tracking
const timelineData = [
    {
        date: "2024-06-15",
        title: "Research Foundations Completed",
        description: "Started professional development journey with academic research training",
        category: "milestone",
        certificates: ["Academic Research Foundations: Quantitative"]
    },
    {
        date: "2024-07-10",
        title: "Technical Skills Foundation",
        description: "Established core technical competencies in data visualization and programming",
        category: "technical",
        certificates: ["Introduction to Data Visualization with Matplotlib", "Data Manipulation with pandas"]
    },
    {
        date: "2024-08-15",
        title: "SQL Proficiency Achieved",
        description: "Mastered database querying and data retrieval skills",
        category: "technical",
        certificates: ["Introduction to SQL"]
    },
    {
        date: "2024-09-15",
        title: "Power BI Journey Begins",
        description: "Started comprehensive Business Intelligence certification track",
        category: "milestone",
        certificates: ["Introduction to Power BI"]
    },
    {
        date: "2024-10-25",
        title: "Business Intelligence Mastery",
        description: "Completed advanced Power BI certification track with case study experience",
        category: "milestone",
        certificates: ["User-Oriented Design in Power BI"]
    },
    {
        date: "2024-11-10",
        title: "Time Series Analysis Expertise",
        description: "Achieved proficiency in time series analysis and forecasting",
        category: "technical",
        certificates: ["Visualizing Time Series Data in Python"]
    }
];

// Global variables
let currentFilter = 'all';
let skillsRadarChart = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeCertificatesPage();
});

function initializeCertificatesPage() {
    // Initialize scroll reveal animations
    initScrollReveal();
    
    // Initialize filter functionality
    initFilters();
    
    // Initialize certificates grid
    renderCertificatesGrid();
    
    // Initialize skills radar chart
    initSkillsRadarChart();
    
    // Initialize skill progress bars
    initSkillProgressBars();
    
    // Initialize achievement counters
    initAchievementCounters();
    
    // Initialize timeline
    renderTimeline();
    
    // Initialize p5.js background
    initP5Background();
    
    // Initialize mobile menu
    initMobileMenu();
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter
            currentFilter = this.dataset.filter;
            
            // Animate filter change
            anime({
                targets: '#certificates-grid .certificate-card',
                opacity: 0,
                scale: 0.8,
                duration: 300,
                easing: 'easeInOutQuad',
                complete: function() {
                    renderCertificatesGrid();
                    anime({
                        targets: '#certificates-grid .certificate-card',
                        opacity: 1,
                        scale: 1,
                        duration: 500,
                        delay: anime.stagger(100),
                        easing: 'easeOutElastic(1, .8)'
                    });
                }
            });
        });
    });
}

function renderCertificatesGrid() {
    const grid = document.getElementById('certificates-grid');
    const filteredCertificates = currentFilter === 'all' 
        ? certificateData 
        : certificateData.filter(cert => cert.category === currentFilter);

    grid.innerHTML = '';

    filteredCertificates.forEach((certificate, index) => {
        const card = createCertificateCard(certificate, index);
        grid.appendChild(card);
    });
}

function createCertificateCard(certificate, index) {
    const card = document.createElement('div');
    card.className = 'certificate-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const completionDate = new Date(certificate.completionDate);
    const formattedDate = completionDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    card.innerHTML = `
        <div class="relative">
            <img src="${certificate.image}" alt="${certificate.title}" class="w-full h-48 object-cover">
            <div class="absolute top-4 right-4">
                <div class="certificate-badge bg-white rounded-full p-2 shadow-lg">
                    <svg class="w-6 h-6 text-sage" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span class="inline-block bg-sage text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                    ${certificate.track.split(' - ')[0]}
                </span>
            </div>
        </div>
        
        <div class="p-6">
            <h3 class="text-xl font-bold text-charcoal mb-2 line-clamp-2">${certificate.title}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">${certificate.description}</p>
            
            <div class="flex items-center justify-between mb-4">
                <span class="text-sm text-gray-500">${certificate.provider}</span>
                <span class="text-sm font-medium text-sage">${certificate.duration}</span>
            </div>
            
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-sm text-gray-500">${formattedDate}</span>
                </div>
                <span class="px-2 py-1 bg-${getDifficultyColor(certificate.difficulty)}-100 text-${getDifficultyColor(certificate.difficulty)}-800 rounded-full text-xs font-medium">
                    ${certificate.difficulty}
                </span>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
                ${certificate.skills.slice(0, 3).map(skill => 
                    `<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">${skill}</span>`
                ).join('')}
                ${certificate.skills.length > 3 ? `<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">+${certificate.skills.length - 3} more</span>` : ''}
            </div>
            
            <button onclick="openCertificateModal(${certificate.id})" class="w-full bg-sage text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                View Details
            </button>
        </div>
    `;

    return card;
}

function getDifficultyColor(difficulty) {
    switch(difficulty.toLowerCase()) {
        case 'beginner': return 'green';
        case 'intermediate': return 'yellow';
        case 'advanced': return 'red';
        default: return 'gray';
    }
}

function initSkillsRadarChart() {
    const chartDom = document.getElementById('skills-radar-chart');
    skillsRadarChart = echarts.init(chartDom);

    const option = {
        title: {
            text: 'Skills Proficiency',
            left: 'center',
            textStyle: {
                color: '#2C2C2C',
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        radar: {
            indicator: [
                { name: 'Data Analysis', max: 100 },
                { name: 'Business Intelligence', max: 100 },
                { name: 'Machine Learning', max: 100 },
                { name: 'Data Engineering', max: 100 },
                { name: 'Statistical Analysis', max: 100 },
                { name: 'Programming', max: 100 },
                { name: 'Data Visualization', max: 100 },
                { name: 'Research Methods', max: 100 }
            ],
            shape: 'polygon',
            splitNumber: 4,
            axisName: {
                color: '#7A8471',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: '#E5E7EB'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(122, 132, 113, 0.1)', 'rgba(139, 157, 195, 0.1)']
                }
            }
        },
        series: [{
            name: 'Skills',
            type: 'radar',
            data: [{
                value: [92, 88, 85, 82, 90, 94, 89, 87],
                name: 'Current Skills',
                areaStyle: {
                    color: 'rgba(122, 132, 113, 0.3)'
                },
                lineStyle: {
                    color: '#7A8471',
                    width: 3
                },
                itemStyle: {
                    color: '#7A8471',
                    borderColor: '#fff',
                    borderWidth: 2
                }
            }],
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        }]
    };

    skillsRadarChart.setOption(option);

    // Make chart responsive
    window.addEventListener('resize', function() {
        skillsRadarChart.resize();
    });
}

function initSkillProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.dataset.width;
                
                anime({
                    targets: bar,
                    width: width + '%',
                    duration: 1500,
                    delay: 500,
                    easing: 'easeOutQuart'
                });
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
}

function initAchievementCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                
                anime({
                    targets: counter,
                    innerHTML: [0, target],
                    duration: 2000,
                    delay: 500,
                    easing: 'easeOutQuart',
                    round: 1
                });
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item scroll-reveal';
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        const date = new Date(item.date);
        const formattedDate = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        timelineItem.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-6 mb-4">
                <div class="flex items-start justify-between mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-charcoal mb-2">${item.title}</h3>
                        <p class="text-gray-600 mb-3">${item.description}</p>
                    </div>
                    <div class="ml-4 text-right">
                        <div class="text-sm text-gray-500">${formattedDate}</div>
                        <div class="inline-block px-2 py-1 bg-sage text-white rounded-full text-xs font-medium mt-2">
                            ${item.certificates.length} certificate${item.certificates.length > 1 ? 's' : ''}
                        </div>
                    </div>
                </div>
                
                <div class="space-y-2">
                    ${item.certificates.map(cert => 
                        `<div class="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">• ${cert}</div>`
                    ).join('')}
                </div>
            </div>
        `;
        
        container.appendChild(timelineItem);
    });
}

function openCertificateModal(certificateId) {
    const certificate = certificateData.find(cert => cert.id === certificateId);
    if (!certificate) return;
    
    const modal = document.getElementById('certificate-modal');
    const content = document.getElementById('certificate-modal-content');
    
    const completionDate = new Date(certificate.completionDate);
    const formattedDate = completionDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    content.innerHTML = `
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="lg:w-1/3">
                <img src="${certificate.image}" alt="${certificate.title}" class="w-full rounded-lg shadow-lg mb-4">
                <div class="bg-gray-50 rounded-lg p-4">
                    <h4 class="font-bold text-charcoal mb-3">Certificate Details</h4>
                    <div class="space-y-2 text-sm">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Provider:</span>
                            <span class="font-medium">${certificate.provider}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Completed:</span>
                            <span class="font-medium">${formattedDate}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Duration:</span>
                            <span class="font-medium">${certificate.duration}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Difficulty:</span>
                            <span class="font-medium px-2 py-1 bg-${getDifficultyColor(certificate.difficulty)}-100 text-${getDifficultyColor(certificate.difficulty)}-800 rounded-full text-xs">
                                ${certificate.difficulty}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="lg:w-2/3">
                <h2 class="text-3xl font-bold text-charcoal mb-4">${certificate.title}</h2>
                <p class="text-lg text-gray-600 mb-6">${certificate.description}</p>
                
                <div class="mb-6">
                    <h3 class="text-xl font-bold text-charcoal mb-3">Learning Track</h3>
                    <div class="bg-sage/10 rounded-lg p-4">
                        <p class="text-sage font-medium">${certificate.track}</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h3 class="text-xl font-bold text-charcoal mb-3">Skills Acquired</h3>
                    <div class="flex flex-wrap gap-2">
                        ${certificate.skills.map(skill => 
                            `<span class="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">${skill}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="mb-6">
                    <h3 class="text-xl font-bold text-charcoal mb-3">Learning Outcomes</h3>
                    <ul class="space-y-2">
                        ${certificate.outcomes.map(outcome => 
                            `<li class="flex items-start space-x-3">
                                <svg class="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <span class="text-gray-700">${outcome}</span>
                            </li>`
                        ).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Animate modal appearance
    anime({
        targets: modal.querySelector('.bg-white'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

function closeCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    
    anime({
        targets: modal.querySelector('.bg-white'),
        scale: [1, 0.8],
        opacity: [1, 0],
        duration: 200,
        easing: 'easeInQuart',
        complete: function() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

function initP5Background() {
    // Simple particle system for background
    new p5((p) => {
        let particles = [];
        
        p.setup = function() {
            let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.id('p5-canvas');
            canvas.parent(document.body);
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6),
                    alpha: p.random(0.1, 0.3)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(122, 132, 113, particle.alpha * 255);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('certificate-modal');
    if (e.target === modal) {
        closeCertificateModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCertificateModal();
    }
});

// Add smooth scrolling for navigation links
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