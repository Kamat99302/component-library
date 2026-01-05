# Component Library

Collection de composants React réutilisables avec variants multiples et customisation complète via props.

![Component Library Screenshot](./assets/img/component-library.PNG)

## 🎯 Fonctionnalités

- **Badge** : Labels avec 2 formes (square/pill) et 8 couleurs
- **Banner** : Alertes avec 4 status (success/warning/error/neutral) et 2 variants (multiline/singleline)
- **Card** : Cartes avec icône personnalisable et effet hover optionnel
- **Testimonial** : Témoignages avec layout adaptatif (avec/sans image)

## 🛠️ Technologies

- React
- Vite
- CSS
- react-icons

## 🚀 Installation
```bash
# Cloner le projet
git clone https://github.com/ton-username/component-library.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## 💡 Utilisation

### Badge
```jsx
import Badge from './Badge'

<Badge variant="pill" color="blue">Nouveau</Badge>
```

### Banner
```jsx
import Banner from './Banner'

<Banner status="success">Opération réussie !</Banner>
```

### Card
```jsx
import Card from './Card'

<Card 
  icon={<FaCloud />}
  title="Cloud Storage"
  description="Stockage sécurisé dans le cloud"
  hoverable
/>
```

### Testimonial
```jsx
import Testimonial from './Testimonial'

<Testimonial 
  name="Matthieu Juan"
  roleandLocation="Développeur"
  image={photo}
  testimonialBgColor="blue"
  testimonialTxtColor="white"
>
  Un excellent composant !
</Testimonial>
```

## 🎨 Défis techniques

1. **Système de configuration centralisé** : Objet `statusConfiguration` dans Banner pour mapper chaque status à sa config (couleur, icône, titre)

2. **Génération dynamique de classes CSS** : Utilisation de template literals pour créer des classes comme `badge-${variant} badge-${color}`

3. **Conditional rendering** : Layouts différents dans Testimonial selon la présence d'une image

4. **Props avec valeurs par défaut** : Gestion des props optionnelles pour plus de flexibilité

## 🌐 Démo en ligne

[Voir la démo](https://ton-lien-netlify.app)

## 📝 License

MIT