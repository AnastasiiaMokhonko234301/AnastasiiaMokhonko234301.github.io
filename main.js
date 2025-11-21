// Portfolio Website JavaScript - Main functionality

// Global variables
let projects = [];
let currentFilter = 'all';
let skillsChart = null;
let languageChart = null;
let currentProjectIndex = 0;
let totalProjects = 8;

// Project data with comprehensive information
const projectData = [
    {
        id: 1,
        title: "Potato Leaf Disease Classification",
        role: "computer-vision",
        category: "ml-engineer",
        image: "resources/project-covers/leaf-disease.jpg",
        description: "Advanced computer vision system for automated detection and classification of potato leaf diseases using deep learning.",
        technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "CNN", "Image Processing"],
        githubUrl: "https://github.com/AnastasiiaMokhonko234301/portfolio_projects/tree/main/CV_FarmersBuddy",
        client: "Breda University of Applied Sciences",
        duration: "2 months",
        outcomes: [
            "Achieved 96% accuracy in disease classification",
            "Identified 12 different potato leaf diseases",
            "Reduced diagnostic time by 85%",
            "Enabled early intervention for crop protection"
        ],
        detailedDescription: "Developed a sophisticated computer vision pipeline for automated potato leaf disease classification. The system uses convolutional neural networks to analyze plant images and identify various diseases including late blight, early blight, and bacterial infections. The solution provides farmers with real-time diagnostic capabilities to enable early intervention and protect crop yields."
    },
    {
        id: 2,
        title: "Plant Root Segmentation & Robotic Control",
        role: "computer-vision",
        category: "data-engineer",
        image: "resources/project-covers/root-segmentation.jpg",
        description: "Integrated system for automated plant root analysis and robotic control for precision agriculture applications.",
        technologies: ["Python", "OpenCV", "ROS", "PyTorch", "Image Segmentation", "Robotics"],
        githubUrl: "https://github.com/AnastasiiaMokhonko234301/portfolio_projects/tree/main/CV_RootSegmentation%26RoboticControl",
        client: "NPEC (Netherlands Plant Eco-phenotyping Centre)",
        duration: "2 months",
        outcomes: [
            "Achieved 94% accuracy in root segmentation",
            "Integrated with robotic control systems",
            "Reduced manual labor by 60%",
            "Improved crop yield prediction accuracy"
        ],
        detailedDescription: "This advanced project combines computer vision with robotics to create an automated plant root analysis system. The solution segments root structures from soil imagery and integrates with robotic control systems for automated plant handling and analysis. The system enables large-scale phenotyping studies and provides valuable insights into plant growth patterns and root development."
    },
    {
        id: 3,
        title: "Goal Prediction for NAC Breda",
        role: "ml-engineer",
        category: "data-scientist",
        image: "resources/project-covers/nac-football.jpg",
        description: "Machine learning model for predicting football match outcomes and player performance analysis.",
        technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
        githubUrl: "https://github.com/AnastasiiaMokhonko234301/portfolio_projects/tree/main/ML_GoalPrediction_NAC",
        client: "NAC Breda Football Club",
        duration: "2 months",
        outcomes: [
            "75% accuracy in match outcome prediction",
            "Identified key performance indicators",
            "Enhanced team strategy decisions"
        ],
        detailedDescription: "Developed predictive models for football match outcomes using historical data, player statistics, and team performance metrics. The system provides actionable insights for coaching staff and team management."
    },
    {
        id: 4,
        title: "Content Intelligence Agency",
        role: "nlp",
        category: "data-scientist",
        image: "resources/project-covers/emotion-detection.jpg",
        description: "Natural language processing system for content analysis and intelligence gathering.",
        technologies: ["Python", "NLTK", "SpaCy", "Transformers", "BERT"],
        githubUrl: "https://github.com/AnastasiiaMokhonko234301/portfolio_projects/tree/main/NLP_ContentIntelligenceAgency",
        client: "Content Intelligence Agency",
        duration: "4 months",
        outcomes: [
            "Automated content categorization with 92% accuracy",
            "Reduced manual review time by 80%",
            "Enhanced content quality metrics"
        ],
        detailedDescription: "Built an advanced NLP pipeline for content analysis, sentiment analysis, and automated categorization. The system processes large volumes of text data to extract meaningful insights and patterns."
    },
    {
        id: 5,
        title: "Human Trafficking Data Analysis",
        role: "data-analyst",
        category: "data-analyst",
        image: "resources/project-covers/human-trafficking.jpg",
        description: "Data analysis project supporting UN SDG 16 with comprehensive trafficking pattern analysis.",
        technologies: ["Python", "R", "Tableau", "SQL", "Power BI"],
        githubUrl: "https://github.com/AnastasiiaMokhonko234301/portfolio_projects/tree/main/Human_Trafficking_Data_Analysis_(SDG16)",
        client: "Breda University of Applied Sciences",
        duration: "2 months",
        outcomes: [
            "Identified trafficking hotspots and patterns",
            "Provided data-driven policy recommendations",
            "Contributed to UN SDG 16 initiatives"
        ],
        detailedDescription: "Comprehensive data analysis project examining human trafficking patterns globally. The analysis supports policy-making and intervention strategies aligned with UN Sustainable Development Goal 16."
    },
    {
        id: 6,
        title: "ANWB Traffic Prediction",
        role: "ml-engineer",
        category: "data-engineer",
        image: "resources/project-covers/traffic-prediction.jpg",
        description: "Machine learning system for traffic flow prediction and route optimization.",
        technologies: ["Python", "Apache Spark", "Kafka", "TensorFlow", "PostgreSQL"],
        githubUrl: "https://github.com/AnastasiiaMokhonko234301/portfolio_projects/tree/main/ML_ANWB",
        client: "ANWB (Dutch Automobile Association)",
        duration: "2 months",
        outcomes: [
            "85% accuracy in traffic prediction",
            "Reduced travel time by 15%",
            "Improved route recommendation system"
        ],
        detailedDescription: "Developed a real-time traffic prediction system using machine learning models and big data technologies. The system processes streaming traffic data to provide accurate predictions and route recommendations."
    },
    {
        id: 7,
        title: "Policy Research for SMEs",
        role: "data-analyst",
        category: "data-analyst",
        image: "resources/project-covers/cybersecurity-smes.jpg",
        description: "Data-driven policy research and analysis for small and medium enterprises.",
        technologies: ["R", "Python", "SPSS", "Excel", "Power BI"],
        githubUrl: "https://github.com/AnastasiiaMokhonko234301/portfolio_projects/tree/main/Policy_Research_for_SMEs",
        client: "Digiwerkplaats",
        duration: "2 months",
        outcomes: [
            "Comprehensive SME policy analysis",
            "Data-driven policy recommendations",
            "Impact assessment framework"
        ],
        detailedDescription: "Conducted comprehensive policy research and analysis for small and medium enterprises. The project involved statistical analysis, impact assessment, and policy recommendation development."
    },
    {
        id: 8,
        title: "Medical Imaging AI System",
        role: "computer-vision",
        category: "ml-engineer",
        image: "resources/project-covers/medical-ai.jpg",
        description: "Deep learning system for medical image analysis and automated diagnostics in healthcare applications.",
        technologies: ["Python", "PyTorch", "Medical Imaging", "Deep Learning", "3D CNN"],
        githubUrl: "#",
        client: "Healthcare Research Partner",
        duration: "Ongoing",
        outcomes: [
            "Currently in active development",
            "Developing advanced deep learning models",
            "Focus on medical image segmentation",
            "Collaborative research project"
        ],
        detailedDescription: "Ongoing research project focused on developing deep learning solutions for medical image analysis. The project involves advanced computer vision techniques and 3D convolutional neural networks for automated diagnostic support in healthcare settings. Work is conducted under confidentiality agreement with research partners.",
        isWorkInProgress: true
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    try {
        // Initialize all components
        initializeNavigation();
        initializeHeroAnimations();
        initializeProjectFilters();
        initializeProjects();
        initializeProjectNavigation(); // Add this line
        initializeSkills();
        // GitHub integration removed - using certifications preview instead
        initializeContactForm();
        initializeScrollReveal();
        initializeP5Background();
        
        console.log('Portfolio initialized successfully');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
    }
}

// Project Navigation functionality
function initializeProjectNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const projectsContainer = document.getElementById('projects-container');
    const navDots = document.querySelectorAll('.nav-dot');
    const progressBar = document.getElementById('progress-bar');
    
    if (!projectsContainer || !prevBtn || !nextBtn) return;
    
    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        if (currentProjectIndex > 0) {
            currentProjectIndex--;
            updateProjectView();
        }
    });
    
    // Next button click handler
    nextBtn.addEventListener('click', () => {
        if (currentProjectIndex < totalProjects - 1) {
            currentProjectIndex++;
            updateProjectView();
        }
    });
    
    // Navigation dots click handlers
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentProjectIndex = index;
            updateProjectView();
        });
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    projectsContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    projectsContainer.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = startX - endX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0 && currentProjectIndex < totalProjects - 1) {
                // Swipe left - next project
                currentProjectIndex++;
                updateProjectView();
            } else if (swipeDistance < 0 && currentProjectIndex > 0) {
                // Swipe right - previous project
                currentProjectIndex--;
                updateProjectView();
            }
        }
    }
    
    // Update project view function
    function updateProjectView() {
        const projectSlides = document.querySelectorAll('.project-slide');
        const currentProjectSpan = document.getElementById('current-project');
        
        // Update scroll position
        if (projectsContainer) {
            const slideWidth = projectSlides[0].offsetWidth;
            projectsContainer.scrollTo({
                left: slideWidth * currentProjectIndex,
                behavior: 'smooth'
            });
        }
        
        // Update counter
        if (currentProjectSpan) {
            currentProjectSpan.textContent = currentProjectIndex + 1;
        }
        
        // Update navigation dots
        navDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentProjectIndex);
        });
        
        // Update progress bar
        if (progressBar) {
            const progressPercent = ((currentProjectIndex + 1) / totalProjects) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
        
        // Update arrow button states
        prevBtn.style.opacity = currentProjectIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentProjectIndex === totalProjects - 1 ? '0.5' : '1';
        
        // Animate outcome items
        const outcomeItems = document.querySelectorAll('.outcome-item');
        outcomeItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        });
    }
    
    // Initialize view
    updateProjectView();
    
    // Handle scroll events to sync navigation
    projectsContainer.addEventListener('scroll', debounce(() => {
        const projectSlides = document.querySelectorAll('.project-slide');
        if (projectSlides.length > 0) {
            const slideWidth = projectSlides[0].offsetWidth;
            const scrollLeft = projectsContainer.scrollLeft;
            const newIndex = Math.round(scrollLeft / slideWidth);
            
            if (newIndex !== currentProjectIndex && newIndex >= 0 && newIndex < totalProjects) {
                currentProjectIndex = newIndex;
                updateProjectView();
            }
        }
    }, 100));
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentProjectIndex > 0) {
            currentProjectIndex--;
            updateProjectView();
        } else if (e.key === 'ArrowRight' && currentProjectIndex < totalProjects - 1) {
            currentProjectIndex++;
            updateProjectView();
        }
    });
}

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for INTERNAL navigation links only
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle same-page hash links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            }
            // Let external links (certificates.html, about.html) work normally
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-sage');
        const href = link.getAttribute('href');
        if (href === `#${current}` || href === `index.html#${current}`) {
            link.classList.add('text-sage');
        }
    });
}

// Hero section animations
function initializeHeroAnimations() {
    // Simple text display for name (no animation)
    const nameElement = document.getElementById('typed-name');
    if (nameElement) {
        nameElement.textContent = 'Anastasiia Mokhonko';
    }

    // Simple text display for role (no animation)
    const roleElement = document.getElementById('typed-role');
    if (roleElement) {
        roleElement.textContent = 'Data Science & AI Student';
    }
}

// Project filtering system
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            setActiveFilter(button);
            filterProjects(filter);
        });
    });
}

function setActiveFilter(activeButton) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

function filterProjects(filter) {
    currentFilter = filter;
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectRole = card.getAttribute('data-role');
        const projectCategory = card.getAttribute('data-category');
        
        const shouldShow = filter === 'all' || 
                          projectRole === filter || 
                          projectCategory === filter;
        
        if (shouldShow) {
            card.style.display = 'block';
            anime({
                targets: card,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 600,
                easing: 'easeOutCubic',
                delay: Math.random() * 200
            });
        } else {
            anime({
                targets: card,
                opacity: 0,
                translateY: -30,
                duration: 300,
                easing: 'easeInCubic',
                complete: () => {
                    card.style.display = 'none';
                }
            });
        }
    });
}

// Project cards initialization
function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projectData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
    
    // Animate project cards on load
    anime({
        targets: '.project-card',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutCubic'
    });
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer';
    card.setAttribute('data-role', project.role);
    card.setAttribute('data-category', project.category);
    card.onclick = () => openProjectModal(project);
    
    card.innerHTML = `
        <div class="relative h-48 overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
            <div class="absolute top-4 right-4">
                <span class="bg-sage text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${project.role.replace('-', ' ').toUpperCase()}
                </span>
            </div>
            ${project.isWorkInProgress ? `
            <div class="absolute top-4 left-4">
                <span class="bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                    Work in Progress
                </span>
            </div>
            ` : ''}
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-charcoal">${project.title}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies.slice(0, 3).map(tech => 
                    `<span class="bg-cream text-charcoal px-3 py-1 rounded-full text-sm font-medium">${tech}</span>`
                ).join('')}
                ${project.technologies.length > 3 ? `<span class="text-gray-500 text-sm">+${project.technologies.length - 3} more</span>` : ''}
            </div>
            <div class="flex justify-between items-center text-sm text-gray-500">
                <span>Client: ${project.client}</span>
                <span>${project.duration}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Project modal functionality
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    
    if (!modal || !modalContent) return;
    
    modalContent.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-6">
                <div class="space-y-4">
                    <div>
                        <h4 class="font-bold text-charcoal mb-2">Technologies Used</h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => 
                                `<span class="bg-sage text-white px-3 py-1 rounded-full text-sm font-medium">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-charcoal mb-2">Project Details</h4>
                        <div class="text-sm text-gray-600 space-y-1">
                            <p><strong>Client:</strong> ${project.client}</p>
                            <p><strong>Duration:</strong> ${project.duration}</p>
                            <p><strong>Role:</strong> ${project.role.replace('-', ' ').toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-3xl font-bold mb-4 text-charcoal">${project.title}</h3>
                <p class="text-gray-600 mb-6">${project.detailedDescription}</p>
                
                <div class="mb-6">
                    <h4 class="font-bold text-charcoal mb-3">Key Outcomes</h4>
                    <ul class="space-y-2">
                        ${project.outcomes.map(outcome => 
                            `<li class="flex items-start space-x-2">
                                <svg class="w-5 h-5 text-sage mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-gray-600">${outcome}</span>
                            </li>`
                        ).join('')}
                    </ul>
                </div>
                
                <div class="flex space-x-4">
                    ${project.githubUrl !== '#' ? `
                    <a href="${project.githubUrl}" target="_blank" class="bg-charcoal text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>View on GitHub</span>
                    </a>
                    ` : `
                    <div class="bg-gray-100 text-gray-600 px-6 py-3 rounded-lg flex items-center space-x-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>Project in Progress</span>
                    </div>
                    `}
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
        duration: 400,
        easing: 'easeOutCubic'
    });
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    anime({
        targets: modal.querySelector('.bg-white'),
        scale: [1, 0.8],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeInCubic',
        complete: () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

// Skills visualization
function initializeSkills() {
    initializeSkillBars();
    initializeSkillsChart();
}

function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                anime({
                    targets: entry.target,
                    width: `${width}%`,
                    duration: 1000,
                    delay: 200,
                    easing: 'easeOutCubic'
                });
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

function initializeSkillsChart() {
    const chartElement = document.getElementById('skills-chart');
    if (!chartElement) return;
    
    skillsChart = echarts.init(chartElement);
    
    const option = {
        tooltip: {},
        radar: {
            indicator: [
                { name: 'Machine Learning', max: 100 },
                { name: 'Computer Vision', max: 100 },
                { name: 'NLP', max: 100 },
                { name: 'Data Analysis', max: 100 },
                { name: 'Data Engineering', max: 100 },
                { name: 'Business Intelligence', max: 100 }
            ],
            radius: '70%',
            axisLine: {
                lineStyle: {
                    color: '#7A8471'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#8B9DC3'
                }
            }
        },
        series: [{
            name: 'Skills',
            type: 'radar',
            data: [{
                value: [90, 85, 80, 95, 75, 85],
                name: 'Current Level',
                areaStyle: {
                    color: 'rgba(122, 132, 113, 0.3)'
                },
                lineStyle: {
                    color: '#7A8471'
                },
                itemStyle: {
                    color: '#8B9DC3'
                }
            }]
        }]
    };
    
    skillsChart.setOption(option);
    
    // Responsive chart
    window.addEventListener('resize', () => {
        if (skillsChart) {
            skillsChart.resize();
        }
    });
}

// Certifications preview - data handled by certificates page
// No additional code needed here

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    // Initialize EmailJS
    emailjs.init('F9UYKjBiLXkfo9toQ');
    
    contactForm.addEventListener('submit', handleContactSubmit);
}

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Send email using EmailJS
        await emailjs.send('service_e1qhqmf', 'template_9vrx9mv', {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        });
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        e.target.reset();
        
    } catch (error) {
        console.error('Error sending message:', error);
        showNotification('Failed to send message. Please try again or email me directly at mohonko.anastasia@gmail.com', 'error');
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

async function simulateFormSubmission(data) {
    // This function is no longer needed - keeping for compatibility
    return Promise.resolve(data);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Scroll reveal animations
function initializeScrollReveal() {
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

// P5.js background animation
function initializeP5Background() {
    new p5((p) => {
        let particles = [];
        let numParticles = 50;
        
        p.setup = function() {
            let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.id('p5-canvas');
            
            // Initialize particles
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                let particle = particles[i];
                
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(122, 132, 113, 50);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
                
                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    let other = particles[j];
                    let distance = p.dist(particle.x, particle.y, other.x, other.y);
                    
                    if (distance < 100) {
                        p.stroke(139, 157, 195, 30);
                        p.strokeWeight(1);
                        p.line(particle.x, particle.y, other.x, other.y);
                    }
                }
            }
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
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

// Handle window resize
window.addEventListener('resize', debounce(() => {
    if (skillsChart) skillsChart.resize();
    if (languageChart) languageChart.resize();
}, 250));

// Handle escape key for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log('Portfolio JavaScript loaded successfully');