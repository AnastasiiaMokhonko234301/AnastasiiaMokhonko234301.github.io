// Enhanced Certificates Page JavaScript - Complete Implementation with PDF Viewer Fix

const certificatesData = [
    // Business Intelligence & Analytics
    {
        id: 1,
        title: "Introduction to Power BI",
        category: "business-intelligence",
        domain: "Business Intelligence & Analytics",
        provider: "DataCamp",
        description: "Comprehensive introduction to Power BI for data visualization and business intelligence, covering dashboard creation and data modeling fundamentals.",
        skills: ["Power BI", "Data Visualization", "Business Intelligence", "Dashboard Design"],
        completedDate: "2024-01-15",
        validUntil: null,
        credentialId: "DC-POWERBI-001",
        verificationUrl: null,
        estimatedHours: 4,
        difficulty: "Beginner",
        featured: true,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Business_Intelligence/Introduction to Power BI.pdf",
        image: "resources/certificates-jpg/Business_Intelligence/Introduction to Power BI.jpg"
    },
    {
        id: 2,
        title: "Data Preparation in Power BI",
        category: "business-intelligence",
        domain: "Business Intelligence & Analytics",
        provider: "DataCamp",
        description: "Advanced data preparation and cleaning techniques in Power BI, focusing on ETL processes and data transformation workflows.",
        skills: ["Power BI", "Data Cleaning", "ETL", "Data Transformation"],
        completedDate: "2024-01-20",
        validUntil: null,
        credentialId: "DC-POWERBI-002",
        verificationUrl: null,
        estimatedHours: 5,
        difficulty: "Intermediate",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Business_Intelligence/Data Preparation in Power BI.pdf",
        image: "resources/certificates-jpg/Business_Intelligence/Data Preparation in Power BI.jpg"
    },
    {
        id: 3,
        title: "Data Visualization in Power BI",
        category: "business-intelligence",
        domain: "Business Intelligence & Analytics",
        provider: "DataCamp",
        description: "Creating compelling visualizations and reports in Power BI with advanced charting techniques and interactive elements.",
        skills: ["Power BI", "Data Visualization", "Report Design", "Charts"],
        completedDate: "2024-02-01",
        validUntil: null,
        credentialId: "DC-POWERBI-003",
        verificationUrl: null,
        estimatedHours: 4,
        difficulty: "Intermediate",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Business_Intelligence/Data Visualization in Power BI.pdf",
        image: "resources/certificates-jpg/Business_Intelligence/Data Visualization in Power BI.jpg"
    },
    {
        id: 4,
        title: "Exploratory Data Analysis in Power BI",
        category: "business-intelligence",
        domain: "Business Intelligence & Analytics",
        provider: "DataCamp",
        description: "Performing comprehensive exploratory data analysis using Power BI tools and statistical analysis techniques.",
        skills: ["EDA", "Power BI", "Data Analysis", "Statistical Analysis"],
        completedDate: "2024-02-10",
        validUntil: null,
        credentialId: "DC-POWERBI-004",
        verificationUrl: null,
        estimatedHours: 6,
        difficulty: "Intermediate",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Business_Intelligence/Exploratory Data Analysis in Power BI.pdf",
        image: "resources/certificates-jpg/Business_Intelligence/Exploratory Data Analysis in Power BI.jpg"
    },
    {
        id: 5,
        title: "Data Modeling in Power BI",
        category: "business-intelligence",
        domain: "Business Intelligence & Analytics",
        provider: "DataCamp",
        description: "Building efficient data models and establishing relationships in Power BI with advanced DAX formulations.",
        skills: ["Data Modeling", "Power BI", "Relationships", "DAX"],
        completedDate: "2024-02-15",
        validUntil: null,
        credentialId: "DC-POWERBI-005",
        verificationUrl: null,
        estimatedHours: 8,
        difficulty: "Advanced",
        featured: true,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Business_Intelligence/Data Modeling in Power BI.pdf",
        image: "resources/certificates-jpg/Business_Intelligence/Data Modeling in Power BI.jpg"
    },
    {
        id: 6,
        title: "Case Study: Analyzing Customer Churn in Power BI",
        category: "business-intelligence",
        domain: "Business Intelligence & Analytics",
        provider: "DataCamp",
        description: "Real-world case study analyzing customer churn using Power BI, implementing predictive analytics and business metrics.",
        skills: ["Customer Analytics", "Power BI", "Churn Analysis", "Business Metrics"],
        completedDate: "2024-03-01",
        validUntil: null,
        credentialId: "DC-POWERBI-006",
        verificationUrl: null,
        estimatedHours: 6,
        difficulty: "Advanced",
        featured: true,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Business_Intelligence/Case Study Analyzing Customer Churn in Power BI.pdf",
        image: "resources/certificates-jpg/Business_Intelligence/Case Study Analyzing Customer Churn in Power BI.jpg"
    },
    {
        id: 7,
        title: "Report Design in Power BI",
        category: "business-intelligence",
        domain: "Business Intelligence & Analytics",
        provider: "DataCamp",
        description: "Advanced report design principles and best practices in Power BI, focusing on user experience and visual hierarchy.",
        skills: ["Report Design", "Power BI", "UX Design", "Dashboard Layout"],
        completedDate: "2024-03-10",
        validUntil: null,
        credentialId: "DC-POWERBI-007",
        verificationUrl: null,
        estimatedHours: 5,
        difficulty: "Intermediate",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Business_Intelligence/Report Design in Power BI.pdf",
        image: "resources/certificates-jpg/Business_Intelligence/Report Design in Power BI.jpg"
    },
    {
        id: 8,
        title: "User-Oriented Design in Power BI",
        category: "business-intelligence",
        domain: "Business Intelligence & Analytics",
        provider: "DataCamp",
        description: "Creating user-friendly and intuitive Power BI reports with focus on accessibility and user experience design.",
        skills: ["UX Design", "Power BI", "User Experience", "Interface Design"],
        completedDate: "2024-03-20",
        validUntil: null,
        credentialId: "DC-POWERBI-008",
        verificationUrl: null,
        estimatedHours: 4,
        difficulty: "Advanced",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Business_Intelligence/User-Oriented Design in Power BI.pdf",
        image: "resources/certificates-jpg/Business_Intelligence/User-Oriented Design in Power BI.jpg"
    },

    // Data Science & Time Series
    {
        id: 9,
        title: "Introduction to SQL",
        category: "data-science",
        domain: "Data Science & Time Series",
        provider: "DataCamp",
        description: "Fundamentals of SQL for data manipulation and querying, covering joins, aggregations, and database design principles.",
        skills: ["SQL", "Database Queries", "Data Manipulation", "Joins"],
        completedDate: "2024-04-01",
        validUntil: null,
        credentialId: "DC-SQL-001",
        verificationUrl: null,
        estimatedHours: 8,
        difficulty: "Beginner",
        featured: true,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Data_Science/Introduction to SQL.pdf",
        image: "resources/certificates-jpg/Data_Science/Introduction to SQL.jpg"
    },
    {
        id: 10,
        title: "Time Series Analysis in Python",
        category: "data-science",
        domain: "Data Science & Time Series",
        provider: "DataCamp",
        description: "Comprehensive time series analysis using Python libraries, including forecasting models and trend analysis.",
        skills: ["Time Series", "Python", "Statistical Analysis", "Forecasting"],
        completedDate: "2024-09-15",
        validUntil: null,
        credentialId: "DC-TS-001",
        verificationUrl: null,
        estimatedHours: 10,
        difficulty: "Intermediate",
        featured: true,
        recentlyEarned: true,
        pdfPath: "resources/certificates-pdf/Data_Science/Time Series Analysis in Python.pdf",
        image: "resources/certificates-jpg/Data_Science/Time Series Analysis in Python.jpg"
    },
    {
        id: 11,
        title: "Manipulating Time Series Data in Python",
        category: "data-science",
        domain: "Data Science & Time Series",
        provider: "DataCamp",
        description: "Advanced techniques for manipulating and processing time series data using pandas and specialized libraries.",
        skills: ["Time Series", "Python", "pandas", "Data Processing"],
        completedDate: "2024-10-01",
        validUntil: null,
        credentialId: "DC-TS-002",
        verificationUrl: null,
        estimatedHours: 6,
        difficulty: "Intermediate",
        featured: false,
        recentlyEarned: true,
        pdfPath: "resources/certificates-pdf/Data_Science/Manipulating Time Series Data in Python.pdf",
        image: "resources/certificates-jpg/Data_Science/Manipulating Time Series Data in Python.jpg"
    },
    {
        id: 12,
        title: "Visualizing Time Series Data in Python",
        category: "data-science",
        domain: "Data Science & Time Series",
        provider: "DataCamp",
        description: "Creating effective visualizations for time series data analysis using matplotlib, seaborn, and plotly.",
        skills: ["Time Series", "Data Visualization", "Python", "matplotlib"],
        completedDate: "2024-10-15",
        validUntil: null,
        credentialId: "DC-TS-003",
        verificationUrl: null,
        estimatedHours: 5,
        difficulty: "Intermediate",
        featured: false,
        recentlyEarned: true,
        pdfPath: "resources/certificates-pdf/Data_Science/Visualizing Time Series Data in Python.pdf",
        image: "resources/certificates-jpg/Data_Science/Visualizing Time Series Data in Python.jpg"
    },

    // Data Engineering
    {
        id: 13,
        title: "Data Manipulation with pandas",
        category: "data-engineering",
        domain: "Data Engineering",
        provider: "DataCamp",
        description: "Master data manipulation techniques using pandas library, including advanced filtering, grouping, and merging operations.",
        skills: ["pandas", "Python", "Data Manipulation", "Data Cleaning"],
        completedDate: "2024-04-15",
        validUntil: null,
        credentialId: "DC-PANDAS-001",
        verificationUrl: null,
        estimatedHours: 8,
        difficulty: "Intermediate",
        featured: true,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Data_Engineering/Data Manipulation with pandas.pdf",
        image: "resources/certificates-jpg/Data_Engineering/Data Manipulation with pandas.jpg"
    },
    {
        id: 14,
        title: "Introduction to Importing Data in Python",
        category: "data-engineering",
        domain: "Data Engineering",
        provider: "DataCamp",
        description: "Learn to import data from various sources into Python, including APIs, databases, and different file formats.",
        skills: ["Python", "Data Import", "File Handling", "APIs"],
        completedDate: "2024-05-01",
        validUntil: null,
        credentialId: "DC-IMPORT-001",
        verificationUrl: null,
        estimatedHours: 6,
        difficulty: "Beginner",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Data_Engineering/Introduction to Importing Data in Python.pdf",
        image: "resources/certificates-jpg/Data_Engineering/Introduction to Importing Data in Python.jpg"
    },

    // Machine Learning
    {
        id: 15,
        title: "Understanding Machine Learning",
        category: "machine-learning",
        domain: "Machine Learning",
        provider: "DataCamp",
        description: "Foundational concepts and principles of machine learning, including supervised and unsupervised learning algorithms.",
        skills: ["Machine Learning", "Algorithms", "Model Training", "Evaluation"],
        completedDate: "2024-05-15",
        validUntil: null,
        credentialId: "DC-ML-001",
        verificationUrl: null,
        estimatedHours: 7,
        difficulty: "Beginner",
        featured: true,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Machine_Learning/Understanding Machine Learning.pdf",
        image: "resources/certificates-jpg/Machine_Learning/Understanding Machine Learning.jpg"
    },
    {
        id: 16,
        title: "Dimensionality Reduction in Python",
        category: "machine-learning",
        domain: "Machine Learning",
        provider: "DataCamp",
        description: "Advanced dimensionality reduction techniques including PCA, t-SNE, and UMAP for machine learning applications.",
        skills: ["Dimensionality Reduction", "PCA", "Python", "Feature Engineering"],
        completedDate: "2024-11-01",
        validUntil: null,
        credentialId: "DC-DR-001",
        verificationUrl: null,
        estimatedHours: 8,
        difficulty: "Advanced",
        featured: true,
        recentlyEarned: true,
        pdfPath: "resources/certificates-pdf/Machine_Learning/Dimensionality Reduction in Python.pdf",
        image: "resources/certificates-jpg/Machine_Learning/Dimensionality Reduction in Python.jpg"
    },

    // Technical Skills
    {
        id: 17,
        title: "Unit Testing for Data Science in Python",
        category: "technical",
        domain: "Technical Skills",
        provider: "DataCamp",
        description: "Best practices for testing data science code and pipelines, ensuring code quality and reliability.",
        skills: ["Unit Testing", "Python", "Code Quality", "pytest"],
        completedDate: "2024-06-01",
        validUntil: null,
        credentialId: "DC-TEST-001",
        verificationUrl: null,
        estimatedHours: 6,
        difficulty: "Intermediate",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Software_Engineering/Unit Testing for Data Science in Python.pdf",
        image: "resources/certificates-jpg/Software_Engineering/Unit Testing for Data Science in Python.jpg"
    },
    {
        id: 18,
        title: "Introduction to Data Visualization with Matplotlib",
        category: "technical",
        domain: "Technical Skills",
        provider: "DataCamp",
        description: "Creating effective data visualizations using matplotlib, covering basic to advanced plotting techniques.",
        skills: ["matplotlib", "Data Visualization", "Python", "Plotting"],
        completedDate: "2024-06-15",
        validUntil: null,
        credentialId: "DC-VIZ-001",
        verificationUrl: null,
        estimatedHours: 5,
        difficulty: "Beginner",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Data_Visualization/Introduction to Data Visualization with Matplotlib.pdf",
        image: "resources/certificates-jpg/Data_Visualization/Introduction to Data Visualization with Matplotlib.jpg"
    },

    // Research & Professional Development
    {
        id: 19,
        title: "Academic Research Foundations: Quantitative",
        category: "professional",
        domain: "Research & Professional Development",
        provider: "DataCamp",
        description: "Foundations of quantitative research methods and statistical analysis for academic and professional research.",
        skills: ["Research Methods", "Statistics", "Quantitative Analysis", "Academic Writing"],
        completedDate: "2024-07-01",
        validUntil: null,
        credentialId: "DC-RESEARCH-001",
        verificationUrl: null,
        estimatedHours: 8,
        difficulty: "Advanced",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Research/Academic Research Foundations Quantitative.pdf",
        image: "resources/certificates-jpg/Research/Academic Research Foundations Quantitative.jpg"
    },
    {
        id: 20,
        title: "Professional Skills: Resume Writing, Mental Health, Stress Management",
        category: "professional",
        domain: "Research & Professional Development",
        provider: "DataCamp",
        description: "Essential professional development skills for career growth, including personal wellness and professional communication.",
        skills: ["Resume Writing", "Mental Health", "Stress Management", "Professional Development"],
        completedDate: "2024-08-01",
        validUntil: null,
        credentialId: "DC-PROF-001",
        verificationUrl: null,
        estimatedHours: 4,
        difficulty: "Beginner",
        featured: false,
        recentlyEarned: false,
        pdfPath: "resources/certificates-pdf/Professional_Development/Reduce Stress and Anxiety by Managing Your Nervous System.pdf",
        image: "resources/certificates-jpg/Professional_Development/Reduce Stress and Anxiety by Managing Your Nervous System.jpg"
    }
];

// Global variables
let filteredCertificates = [...certificatesData];
let currentSort = 'title-asc'; // title-asc, title-desc, date-asc, date-desc
let currentFilter = 'all';
let currentSearchTerm = '';
let skillsRadarChart = null;

// Initialize certificates page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('certificates-grid')) {
        initializeCertificatesPage();
    }
});

function initializeCertificatesPage() {
    showLoading();
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        hideLoading();
        renderCertificates(certificatesData);
        initializeFilters();
        initializeSearch();
        initializeSort();
        initializeNavigation();
        updateCounts();
        updateStatistics();
        initializeSkillsChart();
    }, 800);
}

function showLoading() {
    const loadingSection = document.getElementById('loading-section');
    const certificatesSection = document.querySelector('.certificates-section');
    
    if (loadingSection && certificatesSection) {
        loadingSection.style.display = 'block';
        certificatesSection.style.display = 'none';
        
        // Generate skeleton cards
        const loadingGrid = document.querySelector('.loading-grid');
        if (loadingGrid) {
            loadingGrid.innerHTML = Array(6).fill(0).map(() => `
                <div class="certificate-skeleton">
                    <div class="skeleton-header"></div>
                    <div class="skeleton-content">
                        <div class="skeleton-line"></div>
                        <div class="skeleton-line short"></div>
                        <div class="skeleton-tags"></div>
                    </div>
                </div>
            `).join('');
        }
    }
}

function hideLoading() {
    const loadingSection = document.getElementById('loading-section');
    const certificatesSection = document.querySelector('.certificates-section');
    
    if (loadingSection && certificatesSection) {
        loadingSection.style.display = 'none';
        certificatesSection.style.display = 'block';
    }
}

function renderCertificates(certificates) {
    const grid = document.getElementById('certificates-grid');
    if (!grid) return;

    if (certificates.length === 0) {
        const noResults = document.getElementById('no-results');
        if (noResults) {
            noResults.style.display = 'block';
        }
        grid.innerHTML = '';
        return;
    }

    const noResults = document.getElementById('no-results');
    if (noResults) {
        noResults.style.display = 'none';
    }

    grid.innerHTML = certificates.map(cert => `
        <div class="certificate-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" data-category="${cert.category}" data-id="${cert.id}">
            ${cert.recentlyEarned ? '<div class="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">New!</div>' : ''}
            ${cert.featured ? '<div class="absolute top-4 right-4 bg-sage text-white px-3 py-1 rounded-full text-sm font-medium z-10">Featured</div>' : ''}
            
            <!-- Certificate Image -->
            <div class="relative h-48 overflow-hidden">
                <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="w-full h-full bg-gradient-to-br from-sage to-bluegray flex items-center justify-center text-white text-6xl hidden">
                    <i class="fas fa-${getCategoryIcon(cert.category)}"></i>
                </div>
            </div>
            
            <div class="p-6">
                <div class="mb-3">
                    <div class="text-sm text-sage font-medium mb-1">${cert.domain}</div>
                    <h3 class="text-xl font-bold text-charcoal line-clamp-2">${cert.title}</h3>
                </div>
                
                <div class="flex items-center text-gray-600 text-sm mb-3">
                    <i class="fas fa-graduation-cap mr-2"></i>
                    <span>${cert.provider}</span>
                </div>
                
                <div class="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                    <span class="flex items-center">
                        <i class="fas fa-calendar-alt mr-1"></i>
                        ${formatDate(cert.completedDate)}
                    </span>
                    <span class="flex items-center">
                        <i class="fas fa-clock mr-1"></i>
                        ${cert.estimatedHours}h
                    </span>
                    <span class="flex items-center text-${cert.difficulty.toLowerCase() === 'beginner' ? 'green' : cert.difficulty.toLowerCase() === 'intermediate' ? 'yellow' : 'red'}-600">
                        <i class="fas fa-signal mr-1"></i>
                        ${cert.difficulty}
                    </span>
                </div>
                
                <p class="text-gray-600 text-sm line-clamp-3 mb-4">${cert.description}</p>
                
                <div class="flex flex-wrap gap-1 mb-4">
                    ${cert.skills.slice(0, 3).map(skill => `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">${skill}</span>`).join('')}
                    ${cert.skills.length > 3 ? `<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">+${cert.skills.length - 3}</span>` : ''}
                </div>
                
                <div class="flex gap-2">
                    <button class="flex-1 bg-sage text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm font-medium" onclick="viewCertificate('${cert.pdfPath}', '${cert.title}')" title="View Certificate">
                        <i class="fas fa-eye mr-1"></i>
                        View PDF
                    </button>
                    <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm" onclick="openCertificateModal(${cert.id})" title="More Details">
                        <i class="fas fa-info-circle"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add animation class to cards
    setTimeout(() => {
        document.querySelectorAll('.certificate-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, index * 100);
        });
    }, 100);
}

function getCategoryIcon(category) {
    const icons = {
        'business-intelligence': 'chart-bar',
        'data-science': 'database',
        'data-engineering': 'cogs',
        'machine-learning': 'brain',
        'technical': 'code',
        'professional': 'user-graduate'
    };
    return icons[category] || 'certificate';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short'
    });
}

// FIXED PDF VIEWER FUNCTION
function viewCertificate(pdfPath, title) {
    const modal = document.getElementById('pdf-viewer-modal');
    const iframe = document.getElementById('pdf-iframe');
    const titleElement = document.getElementById('pdf-title');
    const downloadBtn = document.getElementById('download-pdf');
    const openTabBtn = document.getElementById('open-pdf-tab');
    
    console.log('Opening PDF:', pdfPath);
    
    if (modal && iframe) {
        // Set title
        if (titleElement) titleElement.textContent = `${title} - Certificate`;
        
        // Clear previous content and show loading
        iframe.src = '';
        iframe.style.background = '#f5f5f5 url("data:image/svg+xml,%3csvg width=\'50\' height=\'50\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 50 50\'%3e%3cpath d=\'M25 5A20 20 0 1 1 5 25\' fill=\'none\' stroke=\'%23666\' stroke-width=\'3\' stroke-linecap=\'round\'%3e%3canimateTransform attributeName=\'transform\' type=\'rotate\' dur=\'1s\' values=\'0 25 25;360 25 25\' repeatCount=\'indefinite\'/%3e%3c/path%3e%3c/svg%3e") center center no-repeat';
        
        // Try to load PDF with error handling
        const loadPDF = () => {
            // First, check if file exists
            fetch(pdfPath, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        // PDF exists, load it
                        iframe.src = pdfPath;
                        iframe.onload = () => {
                            iframe.style.background = 'none';
                        };
                        iframe.onerror = () => {
                            showPDFError(pdfPath, title);
                        };
                    } else {
                        throw new Error(`PDF not found (${response.status})`);
                    }
                })
                .catch(error => {
                    console.error('Error loading PDF:', error);
                    showPDFError(pdfPath, title);
                });
        };
        
        // Setup download button
        if (downloadBtn) {
            downloadBtn.onclick = () => {
                const link = document.createElement('a');
                link.href = pdfPath;
                link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                trackCertificateDownload(title);
            };
        }
        
        // Setup open in new tab button
        if (openTabBtn) {
            openTabBtn.onclick = () => {
                window.open(pdfPath, '_blank');
            };
        }
        
        // Show modal
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        modal.style.opacity = '0';
        document.body.style.overflow = 'hidden';
        
        // Animate modal in
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
        });
        
        // Load PDF
        loadPDF();
        
        trackCertificateView(title);
    } else {
        // Fallback - open in new tab
        console.log('Modal elements not found, opening PDF in new tab');
        window.open(pdfPath, '_blank');
    }
}

function showPDFError(pdfPath, title) {
    const iframe = document.getElementById('pdf-iframe');
    if (iframe) {
        iframe.style.background = 'none';
        iframe.srcdoc = `
            <div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Arial,sans-serif;color:#666;text-align:center;padding:20px;background:#f9f9f9;">
                <div>
                    <div style="font-size:48px;color:#ddd;margin-bottom:20px;">📄</div>
                    <h3 style="color:#666;margin-bottom:10px;">Certificate Preview Not Available</h3>
                    <p style="margin-bottom:10px;">The PDF file could not be loaded in the viewer.</p>
                    <p style="font-size:12px;color:#999;margin-bottom:20px;">Path: ${pdfPath}</p>
                    <button onclick="parent.window.open('${pdfPath}', '_blank')" 
                            style="padding:12px 24px;background:#7A8471;color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:500;">
                        🔗 Try Opening in New Tab
                    </button>
                    <div style="margin-top:15px;">
                        <button onclick="parent.closePdfViewer()" 
                                style="padding:8px 16px;background:transparent;color:#666;border:1px solid #ddd;border-radius:6px;cursor:pointer;font-size:12px;">
                            Close Viewer
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

function closePdfViewer() {
    const modal = document.getElementById('pdf-viewer-modal');
    const iframe = document.getElementById('pdf-iframe');
    
    if (modal) {
        // Animate out
        modal.style.opacity = '0';
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Clear iframe content
            if (iframe) {
                iframe.src = '';
                iframe.srcdoc = '';
                iframe.style.background = 'none';
            }
        }, 300);
    }
}

function initializeSearch() {
    const searchInput = document.getElementById('certificate-search');
    const clearButton = document.getElementById('clear-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                searchInput.value = '';
                currentSearchTerm = '';
                clearButton.style.display = 'none';
                applyFilters();
            });
        }
    }
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    currentSearchTerm = searchTerm;
    
    const clearButton = document.getElementById('clear-search');
    if (clearButton) {
        clearButton.style.display = searchTerm ? 'block' : 'none';
    }
    
    applyFilters();
    trackSearch(searchTerm);
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            currentFilter = filter;
            applyFilters();
            trackFilter(filter);
        });
    });
}

function initializeSort() {
    const sortToggle = document.getElementById('sort-toggle');
    
    if (sortToggle) {
        sortToggle.addEventListener('click', () => {
            toggleSort();
        });
    }
}

function toggleSort() {
    const sortToggle = document.getElementById('sort-toggle');
    const icon = sortToggle.querySelector('i');
    
    switch (currentSort) {
        case 'title-asc':
            currentSort = 'title-desc';
            icon.className = 'fas fa-sort-alpha-up';
            sortToggle.childNodes[sortToggle.childNodes.length - 1].textContent = ' Sort Z-A';
            break;
        case 'title-desc':
            currentSort = 'date-desc';
            icon.className = 'fas fa-calendar-alt';
            sortToggle.childNodes[sortToggle.childNodes.length - 1].textContent = ' Newest First';
            break;
        case 'date-desc':
            currentSort = 'date-asc';
            icon.className = 'fas fa-calendar-alt';
            sortToggle.childNodes[sortToggle.childNodes.length - 1].textContent = ' Oldest First';
            break;
        case 'date-asc':
            currentSort = 'title-asc';
            icon.className = 'fas fa-sort-alpha-down';
            sortToggle.childNodes[sortToggle.childNodes.length - 1].textContent = ' Sort A-Z';
            break;
    }
    
    applyFilters();
}

function applyFilters() {
    let filtered = [...certificatesData];
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(cert => cert.category === currentFilter);
    }
    
    // Apply search filter
    if (currentSearchTerm) {
        filtered = filtered.filter(cert => 
            cert.title.toLowerCase().includes(currentSearchTerm) ||
            cert.description.toLowerCase().includes(currentSearchTerm) ||
            cert.provider.toLowerCase().includes(currentSearchTerm) ||
            cert.skills.some(skill => skill.toLowerCase().includes(currentSearchTerm))
        );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        switch (currentSort) {
            case 'title-asc':
                return a.title.localeCompare(b.title);
            case 'title-desc':
                return b.title.localeCompare(a.title);
            case 'date-asc':
                return new Date(a.completedDate) - new Date(b.completedDate);
            case 'date-desc':
                return new Date(b.completedDate) - new Date(a.completedDate);
            default:
                return 0;
        }
    });
    
    filteredCertificates = filtered;
    renderCertificates(filtered);
    updateResultsInfo();
}

function updateResultsInfo() {
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        const count = filteredCertificates.length;
        const total = certificatesData.length;
        
        if (currentSearchTerm || currentFilter !== 'all') {
            resultsCount.textContent = `Showing ${count} of ${total} certificates`;
        } else {
            resultsCount.textContent = `Showing ${count} certificates`;
        }
    }
}

function updateCounts() {
    const counts = {
        'all': certificatesData.length,
        'business-intelligence': certificatesData.filter(c => c.category === 'business-intelligence').length,
        'data-science': certificatesData.filter(c => c.category === 'data-science').length,
        'data-engineering': certificatesData.filter(c => c.category === 'data-engineering').length,
        'machine-learning': certificatesData.filter(c => c.category === 'machine-learning').length,
        'technical': certificatesData.filter(c => c.category === 'technical').length,
        'professional': certificatesData.filter(c => c.category === 'professional').length
    };
    
    Object.keys(counts).forEach(category => {
        const countElement = document.getElementById(`count-${category}`);
        if (countElement) {
            countElement.textContent = counts[category];
        }
    });
}

function updateStatistics() {
    const totalCerts = document.getElementById('total-certificates');
    if (totalCerts) {
        totalCerts.textContent = certificatesData.length;
    }

    // Animate counters
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        animateCounter(counter, target);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

function initializeSkillsChart() {
    // Initialize skills visualization if container exists
    const skillsContainer = document.getElementById('skills-radar-chart');
    if (skillsContainer && typeof Chart !== 'undefined') {
        createSkillsRadarChart();
    }
}

function createSkillsRadarChart() {
    // This would be implemented if Chart.js is available
    // For now, we'll create a simple progress bar representation
    const skillsData = [
        { skill: 'Business Intelligence', level: 95 },
        { skill: 'Data Science', level: 88 },
        { skill: 'Machine Learning', level: 85 },
        { skill: 'Data Engineering', level: 82 },
        { skill: 'Programming', level: 90 },
        { skill: 'Research Methods', level: 87 }
    ];

    const container = document.getElementById('skills-radar-chart');
    if (container) {
        container.innerHTML = skillsData.map(item => `
            <div class="skill-item">
                <div class="skill-label">${item.skill}</div>
                <div class="skill-bar">
                    <div class="skill-progress" data-width="${item.level}"></div>
                </div>
                <div class="skill-percentage">${item.level}%</div>
            </div>
        `).join('');
    }
}

function openCertificateModal(certId) {
    const cert = certificatesData.find(c => c.id === certId);
    if (!cert) return;
    
    const modal = document.getElementById('certificate-modal');
    const modalBody = document.getElementById('certificate-modal-body');
    
    modalBody.innerHTML = `
        <div class="certificate-modal-header">
            <div class="modal-certificate-icon">
                <i class="fas fa-${getCategoryIcon(cert.category)}"></i>
            </div>
            <div class="modal-header-content">
                <h2 class="modal-certificate-title">${cert.title}</h2>
                <div class="modal-certificate-meta">
                    <span class="provider">
                        <i class="fas fa-graduation-cap"></i>
                        ${cert.provider}
                    </span>
                    <span class="domain">
                        <i class="fas fa-folder"></i>
                        ${cert.domain}
                    </span>
                    <span class="date">
                        <i class="fas fa-calendar-alt"></i>
                        Completed ${formatDate(cert.completedDate)}
                    </span>
                    <span class="difficulty difficulty-${cert.difficulty.toLowerCase()}">
                        <i class="fas fa-signal"></i>
                        ${cert.difficulty}
                    </span>
                </div>
                ${cert.recentlyEarned ? '<span class="badge new">Recently Earned!</span>' : ''}
                ${cert.featured ? '<span class="badge featured">Featured Certificate</span>' : ''}
            </div>
        </div>
        
        <div class="certificate-modal-content">
            ${cert.image ? `
            <div class="modal-section">
                <div class="certificate-image-container">
                    <img src="${cert.image}" alt="${cert.title}" class="certificate-image">
                </div>
            </div>
            ` : ''}
            
            <div class="modal-section">
                <h3>Description</h3>
                <p>${cert.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Certificate Details</h3>
                <div class="certificate-details-grid">
                    <div class="detail-item">
                        <span class="detail-label">Duration:</span>
                        <span class="detail-value">${cert.estimatedHours} hours</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Difficulty:</span>
                        <span class="detail-value difficulty-${cert.difficulty.toLowerCase()}">${cert.difficulty}</span>
                    </div>
                    ${cert.credentialId ? `
                    <div class="detail-item">
                        <span class="detail-label">Credential ID:</span>
                        <span class="detail-value">${cert.credentialId}</span>
                    </div>
                    ` : ''}
                    ${cert.validUntil ? `
                    <div class="detail-item">
                        <span class="detail-label">Valid Until:</span>
                        <span class="detail-value">${formatDate(cert.validUntil)}</span>
                    </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Skills & Competencies</h3>
                <div class="modal-skills">
                    ${cert.skills.map(skill => `<span class="skill-tag large">${skill}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="viewCertificate('${cert.pdfPath}', '${cert.title}')">
                    <i class="fas fa-external-link-alt"></i>
                    View Full Certificate
                </button>
                ${cert.verificationUrl ? `
                <button class="btn btn-secondary" onclick="window.open('${cert.verificationUrl}', '_blank')">
                    <i class="fas fa-check-circle"></i>
                    Verify Certificate
                </button>
                ` : ''}
                <button class="btn btn-outline" onclick="closeCertificateModal()">
                    <i class="fas fa-times"></i>
                    Close
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function clearAllFilters() {
    currentFilter = 'all';
    currentSearchTerm = '';
    currentSort = 'title-asc';
    
    // Reset UI
    const searchInput = document.getElementById('certificate-search');
    if (searchInput) {
        searchInput.value = '';
    }
    
    const clearButton = document.getElementById('clear-search');
    if (clearButton) {
        clearButton.style.display = 'none';
    }
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    const allButton = document.querySelector('[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
    
    const sortToggle = document.getElementById('sort-toggle');
    if (sortToggle) {
        const icon = sortToggle.querySelector('i');
        icon.className = 'fas fa-sort-alpha-down';
        sortToggle.childNodes[sortToggle.childNodes.length - 1].textContent = ' Sort A-Z';
    }
    
    applyFilters();
}

function initializeNavigation() {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            if (e.target.closest('#certificate-modal')) {
                closeCertificateModal();
            } else if (e.target.closest('#pdf-viewer-modal')) {
                closePdfViewer();
            }
        }
    });
    
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCertificateModal();
            closePdfViewer();
        }
    });
}

// Analytics and tracking functions
function trackCertificateView(certTitle) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'certificate_view', {
            'certificate_name': certTitle,
            'event_category': 'certificates'
        });
    }
    console.log(`Certificate viewed: ${certTitle}`);
}

function trackCertificateDownload(certTitle) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'certificate_download', {
            'certificate_name': certTitle,
            'event_category': 'certificates'
        });
    }
    console.log(`Certificate downloaded: ${certTitle}`);
}

function trackSearch(searchTerm) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'certificate_search', {
            'search_term': searchTerm,
            'event_category': 'certificates'
        });
    }
}

function trackFilter(filter) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'certificate_filter', {
            'filter_type': filter,
            'event_category': 'certificates'
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Intersection Observer for animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.certificate-card, .stat-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', initializeScrollAnimations);

console.log('Enhanced certificates page with fixed PDF viewer initialized successfully!');