/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F3856',
        'primary-light': '#A8DADC',
        'primary-dark': '#1F3856',
        'secondary': '#F4F4F4',
        'tertiary': '#D9CAB3',
        'grey-dark': '#5C5C5C',
      },
      fontSize: {
        'sm': '0.64rem',
        'tiny': '0.8rem',
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '1.56rem',
        '2xl': '1.95rem',
        '3xl': '2.44rem',
        '4xl': '3.05rem',
        '5xl': '3.81rem',
        '6xl': '4.77rem',
        '7xl': '5.96rem',
      },  
      fontFamily: {
        title: ["var(--font-poppins)", "sans-serif"],
        subtitle: ["var(--font-raleway)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
      },
      screens: {
        'sm': "640px",  // 📱 Mobiles moyens (iPhone 12, Galaxy S)
        'md': "768px",  // 📟 Tablettes (iPad Mini, Air)
        'lg': "1024px", // 💻 Laptops (MacBook Air, Surface Pro)
        'xl': "1280px", // 🖥️ Grands écrans (iMac, 1080p)
        "2xl": "1536px", // ⚡ Écrans très larges (1440p, 4K)
      },
      spacing: {
        // Espacements en `rem` pour mobile/tablette
        'xs': '1rem',      // Espace pour les écrans extra petits (petits mobiles)
        'sm': '1.5rem',    // Espace pour les écrans de taille petite (mobiles/tablettes)
        'md': '2rem',      // Espace pour les écrans moyens (tablettes)
        
        // Espacements en `vw` pour les grands écrans (desktop)
        'lg': '4vw',       // Espace pour les grands écrans (ordinateurs de bureau, portables)

        // Espacements pour le padding
        'xs-px': '1rem',   // Padding horizontal pour mobile
        'sm-px': '1.5rem', // Padding horizontal pour tablette
        'md-px': '2rem',   // Padding horizontal pour tablette
        'lg-px': '4vw',    // Padding horizontal pour grand écran
        'xs-py': '1rem',   // Padding vertical pour mobile
        'sm-py': '1.5rem', // Padding vertical pour tablette
        'md-py': '2rem',   // Padding vertical pour tablette
        'lg-py': '4vw',    // Padding vertical pour grand écran
        
        // Espacements pour les marges verticales (my)
        'xs-mx': '1rem',   // Marges horizontales pour petits écrans
        'sm-mx': '1.5rem', // Marges horizontales pour tablettes
        'md-mx': '2rem',   // Marges horizontales pour tablettes
        'lg-mx': '4vw',    // Marges horizontales pour grand écran
        'xs-my': '1rem',   // Marges verticales pour petits écrans
        'sm-my': '1.5rem', // Marges verticales pour tablettes
        'md-my': '2rem',   // Marges verticales pour tablettes
        'lg-my': '4vw',    // Marges verticales pour grand écran

        // Espacement pour les gaps (grilles/flex)
        'xs-gap': '1rem',  // Gap pour les petits écrans
        'sm-gap': '1.5rem',// Gap pour tablettes
        'md-gap': '2rem',  // Gap pour tablettes/écrans moyens
        'lg-gap': '4vw',   // Gap pour grand écran (desktop)

      },
    },
  },
  plugins: [],
}

