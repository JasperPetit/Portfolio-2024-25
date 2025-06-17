// Navigation mobile
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar avec effet oval au scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Données des projets pour les modals
const projectsData = {
  project1: {
    title: "Site Trésor de Banlieue - Travail en équipe",
    description:
      "Développement collaboratif d'un site web pour promouvoir et mettre en valeur l'évennement. Ce projet a été réalisé en équipe avec une approche agile et une répartition claire des tâches.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git", "Travail collaboratif"],
    details: [
      "Lors de ce projet, moi et 5 de mes camarades avont été chargé de réaliser un site web fictif pour un évennement culturel de notre choix. Nous devions, pour cela ,créer une feuille de route, tenir un journal de bord et organiser les taches de chacun.",
      "Mes mission principales ont été : la prise de contact avec les organisateur/ la création, en colaboration avec les autres memebres, du journal de bord et la feuille de route / la realisation de l'interview du directeur de l'exposition / La rédaction des textes du site / L'envoi, en tant que chef d'équipe, des rendu au chargé de projet",
      "Notre choix s'est porté sur Trésor de Banlieue, une exposition organisé par L'association des Banlieue a Gennevilliers. Cette dernniere exposait pendant 4 mois des oeuvres venant de toute les banlieue de France, mettant ainsi en valeur ses differents aspects et faisant decouvrir une autre face de la France.",
      "La principale difficulté que nous avons rencontré a été la réalisation du site, qui nous a demandés beaucoup de temps et d'invesstissement mais nous a permis d'en apprendre beaucoup sur le sujet et amelioerer nos competences. Ce projet a donc été tres enrichissant et m'a permis de développer a la fois mes competences technique mais également organisationnel.",
    ],
    images: [
      {
        src: "images/tb1.png",
        alt: "Page d'accueil Trésors de Banlieues 2026",
        description: "Page d'acceuil du site",
      },
      {
        src: "images/tb2.png",
        alt: "Page Édition 2025",
        description: "Page sur lédition 2025",
      },
      {
        src: "images/tb3.png",
        alt: "Page Our Team",
        description: "Page de la résentation de l'équipe",
      },
      {
        src: "images/tb4.png",
        alt: "Profils des membres",
        description: "Détails des membres de l'équipe avec leurs rôles",
      },
      {
        src: "images/tb5.png",
        alt: "Feuille de route du projet",
        description: "Organisation et planification du travail en équipe",
      },
    ],
  },
  project2: {
    title: "Implémentation d'algorithmes Python",
    description:
      "Réalisation de projets variés en Python, incluant le développement d'algorithmes pour l'analyse de réseaux sociaux et l'implémentation de fonctions de traitement de données complexes.",
    technologies: ["Python", "Algorithmes", "Tests unitaires"],
    details: [
      "Développement d'algorithmes d'analyse de réseaux sociaux",
      "Implémentation de fonctions de comptage et d'analyse",
      "Gestion des structures de données complexes",
      "Création de tests unitaires pour valider les fonctions",
      "Optimisation des performances algorithmiques",
      "Documentation complète du code",
    ],
    images: [
      {
        src: "images/py1.png",
        alt: "SAE Étude de communautés dans un réseau social",
        description: "Document de présentation du projet avec calendrier et évaluation",
      },
      {
        src: "images/py2.png",
        alt: "Code Python - Fonction nb_amis",
        description: "Implémentation de la fonction de comptage d'amis avec tests unitaires",
      },
    ],
  },
  project3: {
    title: "Gestion Base de Données",
    description:
      "Conception, optimisation et gestion complète d'une base de données sur PostgreSQL avec modélisation des données et requêtes complexes.",
    technologies: ["PostgreSQL", "AGL", "SQL", "Modélisation", "Analyse de données"],
    details: [
      "Analyse des besoins et modélisation conceptuelle",
      "Création du modèle logique et physique",
      "Implémentation sur PostgreSQL",
      "Optimisation des requêtes complexes",
      "Gestion des contraintes et des index",
      "Analyse et traitement de grandes quantités de données",
      "Documentation technique complète",
    ],
    images: [
      {
        src: "images/bd1.png",
        alt: "Structure de la base de données PostgreSQL",
        description: "Interface SQL Shell montrant les tables et requêtes de la base de données",
      },
      {
        src: "images/bd2.png",
        alt: "Analyse de données avec Excel",
        description: "Feuille de calcul avec traitement et analyse de données complexes",
      },
    ],
  },
  project4: {
    title: "Jeu d'échec - Développement d'une application",
    description:
      "Développement d'une application complète de jeu d'échecs en Java avec interface en ligne de commande, implémentation complète des règles du jeu et architecture orientée objet.",
    technologies: ["Java", "Programmation orientée objet", "Algorithmes", "UML"],
    details: [
      "Conception de l'architecture avec diagramme UML",
      "Implémentation des règles complètes du jeu d'échecs",
      "Interface en ligne de commande avec plateau textuel",
      "Gestion des différents types de pièces (Roi, Dame, Tour, etc.)",
      "Système de validation des coups et détection d'échec",
      "Architecture orientée objet avec classes Joueur, Partie, Echiquier",
      "Tests et débogage de la logique de jeu",
    ],
    images: [
      {
        src: "images/ec1.png",
        alt: "Interface de démarrage du jeu d'échecs Java",
        description: "Écran d'accueil avec art ASCII et instructions de jeu",
      },
      {
        src: "images/ec2.png",
        alt: "Plateau d'échecs en mode texte",
        description: "Partie en cours avec plateau textuel et notation des pièces",
      },
      {
        src: "images/ec3.png",
        alt: "Diagramme UML du jeu d'échecs",
        description: "Architecture des classes avec relations entre Joueur, Partie, Echiquier et Pièces",
      },
    ],
  },
  project5: {
    title: "Installation de services réseau",
    description:
      "Configuration et déploiement de services réseau essentiels dans un environnement Linux, incluant serveur web, DNS, DHCP et mise en place de politiques de sécurité.",
    technologies: ["Linux", "Réseau", "Administration système", "Sécurité"],
    details: [
      "Installation et configuration d'un serveur web Apache",
      "Mise en place d'un serveur DNS avec BIND",
      "Configuration du service DHCP",
      "Implémentation de règles de pare-feu",
      "Monitoring et supervision des services",
      "Documentation des procédures d'installation",
    ],
  },
  project6: {
    title: "Gestion d'un projet",
    description:
      "Planification, organisation et suivi complet d'un projet informatique en utilisant les méthodologies de gestion de projet, avec affectation des ressources et diagrammes de planification.",
    technologies: ["Gestion de projet", "Diagramme de PERT", "Diagramme de GANTT", "Planification"],
    details: [
      "Définition du cahier des charges et des objectifs",
      "Affectation des ressources humaines et matérielles",
      "Planification avec diagrammes de PERT et GANTT",
      "Gestion des dépendances entre les tâches",
      "Suivi de l'avancement et gestion des risques",
      "Coordination d'équipe et répartition des responsabilités",
      "Documentation complète du projet",
    ],
    images: [
      {
        src: "images/p1.png",
        alt: "Document de gestion de projet",
        description: "Affectation des ressources humaines et matérielles avec diagrammes de PERT et GANTT",
      },
    ],
  },
}

// Variable globale pour stocker les images du projet actuel
let currentProjectImages = []

// Fonction pour formater le texte du projet Trésor de Banlieue
function formatTresorText(text) {
  // Mettre "Trésor de Banlieue" en italique et cliquable
  text = text.replace(
    /Trésor de Banlieue/g,
    '<em><a href="https://nimble-phoenix-410880.netlify.app/" target="_blank" style="color: #3498db; text-decoration: none;">Trésor de Banlieue</a></em>',
  )

  // Mettre "l'académie de Banlieue" en italique
  text = text.replace(/l'académie de Banlieue/g, "<em>l'académie de Banlieue</em>")
  text = text.replace(/L'association des Banlieue/g, "<em>L'association des Banlieue</em>")

  // Traiter les listes avec ":"
  if (text.includes(":")) {
    const parts = text.split(":")
    if (parts.length === 2) {
      const listItems = parts[1]
        .split("/")
        .map((item) => item.trim())
        .filter((item) => item.length > 0)
      if (listItems.length > 1) {
        const listHTML = listItems.map((item) => `<li>${item}</li>`).join("")
        return `${parts[0]}:<ul style="margin: 10px 0; padding-left: 20px;">${listHTML}</ul>`
      }
    }
  }

  return text
}

// Fonction pour ouvrir le modal d'un projet
function openProjectModal(projectId) {
  const modal = document.getElementById("projectModal")
  const modalContent = document.getElementById("modalContent")

  if (projectsData[projectId]) {
    const project = projectsData[projectId]

    // Générer le HTML pour les images
    let imagesHTML = ""
    if (project.images && project.images.length > 0) {
      if (typeof project.images[0] === "object") {
        // Stocker les images dans la variable globale
        currentProjectImages = project.images

        // Nouvelles images avec objets
        imagesHTML = project.images
          .map(
            (image, index) => `
    <div class="modal-image-container" onclick="openLightbox(${index})">
      <img src="${image.src}" alt="${image.alt}" class="modal-project-image">
      <p class="image-description">${image.description}</p>
      <div class="image-overlay">
        <i class="fas fa-search-plus"></i>
        <span>Cliquer pour agrandir</span>
      </div>
    </div>
  `,
          )
          .join("")
      } else {
        // Réinitialiser pour les projets sans vraies images
        currentProjectImages = []
        // Anciennes images avec placeholders
        imagesHTML = project.images
          .map(
            (image) => `
      <div class="modal-image">
        <div style="text-align: center;">
          <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 10px; display: block;"></i>
          <p style="font-size: 0.9rem;">${image}</p>
        </div>
      </div>
    `,
          )
          .join("")
      }
    } else {
      // Pas d'images pour ce projet
      currentProjectImages = []
      imagesHTML = `
        <div style="text-align: center; padding: 40px; color: #7f8c8d;">
          <i class="fas fa-info-circle" style="font-size: 2rem; margin-bottom: 15px; display: block;"></i>
          <p>Aucune image disponible pour ce projet.</p>
        </div>
      `
    }

    modalContent.innerHTML = `
            <h2>${project.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 20px; line-height: 1.6;">${project.description}</p>
            
            <h3 style="color: #2c3e50; margin: 25px 0 15px 0;">Technologies utilisées</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 25px;">
                ${project.technologies.map((tech) => `<span style="background: #3498db; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.9rem;">${tech}</span>`).join("")}
            </div>
            
            <h3 style="color: #2c3e50; margin: 25px 0 15px 0;">Détails du projet</h3>
            <ul style="margin-bottom: 25px; line-height: 1.8;">
                ${project.details
                  .map((detail) => {
                    const formattedDetail = projectId === "project1" ? formatTresorText(detail) : detail
                    return `<li style="margin-bottom: 8px;">${formattedDetail}</li>`
                  })
                  .join("")}
            </ul>
            
            <h3 style="color: #2c3e50; margin: 25px 0 15px 0;">Images du projet</h3>
            <div class="modal-images">
                ${imagesHTML}
            </div>
        `
  } else {
    modalContent.innerHTML = `
            <h2>Nouveau Projet</h2>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">Cet espace est réservé pour un futur projet.</p>
            
            <h3 style="color: #2c3e50; margin: 25px 0 15px 0;">Comment ajouter votre projet :</h3>
            <ol style="line-height: 1.8; margin-bottom: 25px;">
                <li>Ajoutez vos captures d'écran dans le dossier images</li>
                <li>Modifiez le fichier script.js pour ajouter les détails</li>
                <li>Mettez à jour la description dans index.html</li>
                <li>Personnalisez les technologies utilisées</li>
            </ol>
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 10px; border-left: 4px solid #27ae60;">
                <p style="color: #27ae60; font-weight: 600;">
                    <i class="fas fa-lightbulb"></i> 
                    Conseil : Documentez bien vos projets avec des descriptions détaillées et des visuels attractifs !
                </p>
            </div>
        `
  }

  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Fonction pour fermer le modal
function closeProjectModal() {
  const modal = document.getElementById("projectModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Variables pour la lightbox
let currentImageIndex = 0
let currentImages = []

// Fonction pour ouvrir la lightbox
function openLightbox(imageIndex) {
  if (currentProjectImages.length === 0) return

  currentImages = currentProjectImages
  currentImageIndex = imageIndex

  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightboxImg")
  const lightboxDescription = document.getElementById("lightboxDescription")
  const imageCounter = document.getElementById("imageCounter")

  const currentImage = currentImages[imageIndex]
  lightboxImg.src = currentImage.src
  lightboxImg.alt = currentImage.alt
  lightboxDescription.textContent = currentImage.description
  imageCounter.textContent = `${imageIndex + 1} / ${currentImages.length}`

  lightbox.style.display = "block"
  document.body.style.overflow = "hidden"

  // Animation d'entrée
  setTimeout(() => {
    lightbox.classList.add("active")
  }, 10)
}

// Fonction pour fermer la lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox")
  lightbox.classList.remove("active")

  setTimeout(() => {
    lightbox.style.display = "none"
    document.body.style.overflow = "auto"
  }, 300)
}

// Navigation dans la lightbox
function navigateLightbox(direction) {
  if (direction === "next") {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length
  } else {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length
  }

  const currentImage = currentImages[currentImageIndex]
  const lightboxImg = document.getElementById("lightboxImg")
  const lightboxDescription = document.getElementById("lightboxDescription")
  const imageCounter = document.getElementById("imageCounter")

  // Animation de transition
  lightboxImg.style.opacity = "0"

  setTimeout(() => {
    lightboxImg.src = currentImage.src
    lightboxImg.alt = currentImage.alt
    lightboxDescription.textContent = currentImage.description
    imageCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`
    lightboxImg.style.opacity = "1"
  }, 150)
}

// Fonction de filtrage des projets
function filterProjects(category) {
  const projectCards = document.querySelectorAll(".project-card")
  const filterBtns = document.querySelectorAll(".filter-btn")

  // Mettre à jour les boutons actifs
  filterBtns.forEach((btn) => btn.classList.remove("active"))
  document.querySelector(`[data-filter="${category}"]`).classList.add("active")

  // Filtrer les projets
  projectCards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block"
      setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, 100)
    } else {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      setTimeout(() => {
        card.style.display = "none"
      }, 300)
    }
  })
}

// Event listeners pour les filtres
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter
      filterProjects(filter)
    })
  })
})

// Fermer le modal en cliquant à l'extérieur
window.addEventListener("click", (e) => {
  const modal = document.getElementById("projectModal")
  if (e.target === modal) {
    closeProjectModal()
  }
})

// Fermer le modal avec la touche Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal()
  }
})

// Event listeners pour la lightbox
document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightbox")
  if (lightbox && lightbox.style.display === "block") {
    if (e.key === "Escape") {
      closeLightbox()
    } else if (e.key === "ArrowLeft") {
      navigateLightbox("prev")
    } else if (e.key === "ArrowRight") {
      navigateLightbox("next")
    }
  }
})

// Fonction pour télécharger le CV
function downloadCV() {
  // Créer un lien de téléchargement
  const link = document.createElement("a")
  link.href = "cv/CV_Jasper_Petit.pdf" // Remplacez par le chemin vers votre CV
  link.download = "CV_Jasper_Petit.pdf"
  link.target = "_blank"

  // Simuler le clic pour déclencher le téléchargement
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Feedback visuel
  const button = document.querySelector(".cv-btn")
  const originalText = button.innerHTML
  button.innerHTML = '<i class="fas fa-check"></i> CV téléchargé !'
  button.style.background = "linear-gradient(135deg, #27ae60, #229954)"

  setTimeout(() => {
    button.innerHTML = originalText
    button.style.background = ""
  }, 2000)
}

// Animation au scroll pour les éléments
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observer tous les éléments avec animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".info-card, .project-card, .contact-item")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Gestion du formulaire de contact
document.querySelector(".contact-form form").addEventListener("submit", function (e) {
  e.preventDefault()

  // Simulation d'envoi
  const button = this.querySelector("button")
  const originalText = button.textContent

  button.textContent = "Envoi en cours..."
  button.disabled = true

  setTimeout(() => {
    button.textContent = "Message envoyé !"
    button.style.background = "#27ae60"

    setTimeout(() => {
      button.textContent = originalText
      button.disabled = false
      button.style.background = ""
      this.reset()
    }, 2000)
  }, 1500)
})

// Effet de typing pour le titre principal
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Lancer l'effet de typing au chargement
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero h1")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    typeWriter(heroTitle, originalText, 50)
  }
})

// Animation des barres de progression des compétences
document.addEventListener("DOMContentLoaded", () => {
  const skillTags = document.querySelectorAll(".skill-tag")

  skillTags.forEach((tag) => {
    const progressBar = tag.querySelector(".progress-bar")
    const targetWidth = progressBar.getAttribute("data-width")

    tag.addEventListener("mouseenter", () => {
      setTimeout(() => {
        progressBar.style.width = targetWidth + "%"
      }, 100)
    })

    tag.addEventListener("mouseleave", () => {
      progressBar.style.width = "0%"
    })
  })
})

// Observer pour les animations des compétences au scroll
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillCategories = entry.target.querySelectorAll(".skill-category")
        skillCategories.forEach((category, index) => {
          setTimeout(() => {
            category.style.opacity = "1"
            category.style.transform = "translateY(0)"
          }, index * 200)
        })
      }
    })
  },
  {
    threshold: 0.3,
  },
)

// Observer la section des compétences
document.addEventListener("DOMContentLoaded", () => {
  const skillsGrid = document.querySelector(".skills-grid")
  if (skillsGrid) {
    // Initialiser l'état des catégories
    const skillCategories = skillsGrid.querySelectorAll(".skill-category")
    skillCategories.forEach((category) => {
      category.style.opacity = "0"
      category.style.transform = "translateY(30px)"
      category.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    })

    skillsObserver.observe(skillsGrid)
  }
})
