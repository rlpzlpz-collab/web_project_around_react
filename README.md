# Alrededor de los EE.UU. (React)

Proyecto del Sprint 11: migración de la página "Alrededor de los EE.UU." de HTML, CSS y JavaScript a **React con TypeScript**, usando Vite como herramienta de construcción.

## Descripción

Aplicación web que muestra el perfil de un usuario y una galería de tarjetas con lugares. Todo el marcado original se migró a componentes funcionales de React (TSX).

## Funcionalidades

- Renderizado del perfil de usuario y de las tarjetas de lugares.
- Ventanas emergentes (popups) para:
  - Editar perfil
  - Editar avatar
  - Agregar un nuevo lugar
  - Ver una imagen en grande
- Cierre de las ventanas emergentes con el ícono de cerrar.
- Manejo de estado con hooks de React.

## Tecnologías

- React 19
- TypeScript
- Vite
- ESLint
- HTML5 y CSS3 (metodología BEM)

## Estructura del proyecto

```
web_project_around_react/
├── public/
│   ├── blocks/
│   │   ├── card.css
│   │   ├── cards.css
│   │   ├── content.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── page.css
│   │   ├── popup.css
│   │   └── profile.css
│   ├── images/
│   │   ├── add-icon.svg
│   │   ├── close.svg
│   │   ├── delete-icon.svg
│   │   ├── edit-icon.svg
│   │   ├── favicon.svg
│   │   ├── like-active.svg
│   │   ├── like-inactive.svg
│   │   └── placeholder.jpg
│   └── vendor/
│       ├── fonts/
│       │   ├── Inter-Black.woff2
│       │   ├── Inter-Medium.woff2
│       │   └── Inter-Regular.woff2
│       ├── fonts.css
│       └── normalize.css
├── src/
│   ├── assets/
│   │   ├── avatar.jpg
│   │   ├── hero.png
│   │   ├── logo.svg
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── App.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── Header/
│   │   │   └── Header.tsx
│   │   └── Main/
│   │       ├── Main.tsx
│   │       ├── Card/
│   │       │   └── Card.tsx
│   │       └── Popup/
│   │           ├── Popup.tsx
│   │           ├── EditAvatar/
│   │           │   └── EditAvatar.tsx
│   │           ├── EditProfile/
│   │           │   └── EditProfile.tsx
│   │           ├── ImagePopup/
│   │           │   └── ImagePopup.tsx
│   │           └── NewCard/
│   │               └── NewCard.tsx
│   ├── types/
│   │   └── types.ts
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Instalación y uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/rlpzlpz-collab/web_project_around_react.git
   ```

2. Entra a la carpeta e instala las dependencias:

   ```bash
   cd web_project_around_react
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

### Otros scripts

| Comando           | Descripción                         |
| ----------------- | ----------------------------------- |
| `npm run build`   | Compila el proyecto para producción |
| `npm run preview` | Vista previa de la compilación      |
| `npm run lint`    | Revisa el código con ESLint         |

## Autor

**Ricardo López López**
GitHub: [@rlpzlpz-collab](https://github.com/rlpzlpz-collab)
