# ProgressBars30


Bienvenido a **ProgressBars30**, un proyecto que presenta 30 diseños innovadores de barras de progreso con animaciones únicas, creado con HTML, CSS y JavaScript. Este proyecto es ideal para desarrolladores que buscan inspiración o componentes reutilizables para sus aplicaciones web.

URL del proyecto: [https://github.com/decagraff/ProgressBars](https://github.com/decagraff/ProgressBars)

## Características

- 30 estilos únicos de barras de progreso
- Animaciones fluidas y personalizables
- Código limpio y comentado para fácil reutilización
- Funcionalidad para copiar el código HTML, CSS y JS de cada barra

## Instalación y Uso

### Requisitos

- Node.js y npm instalados
- Un navegador web moderno

### Instrucciones

1. **Clona el Repositorio**:
   ```bash
   git clone https://github.com/decagraff/ProgressBars.git
   cd ProgressBars30
   ```

2. **Instala Dependencias**:
   ```bash
   npm install express ejs
   ```

3. **Inicia el Servidor**:
   ```bash
   node index.js
   ```

4. **Abre en el Navegador**:
   - Visita http://localhost:3020 para ver las 30 barras de progreso

5. **Explora y Copia**:
   - Haz clic en "Ver código" para ver el código de cada barra
   - Usa el botón "Copiar" para copiar el código al portapapeles

## Tutorial para Contribuir

¿Quieres agregar una nueva barra de progreso? ¡Sigue estos pasos!

### Agregar un Nuevo Progress Bar

1. **Fork y Clona**:
   - Haz un fork del repositorio y clónalo localmente:
   ```bash
   git clone https://github.com/TU_USUARIO/ProgressBars.git
   ```

2. **Crea una Nueva Rama**:
   ```bash
   git checkout -b nueva-barra
   ```

3. **Edita los Archivos**:
   - **HTML**: En `views/index.ejs`, agrega un nuevo `<div class="progress-container type-XX">` con el siguiente número (e.g., type-31).
   - **CSS**: En `public/css/styles.css`, define el estilo para `.type-XX .progress` y su animación correspondiente en `@keyframes`.
   - **JS**: En `public/js/progress.js`:
     - Agrega un caso en `updateProgressBar` para el nuevo tipo
     - Añade el estilo en `cssStyles` y el código JS en `jsCode` dentro de `showCode`

4. **Prueba Localmente**:
   - Inicia el servidor (`node index.js`) y verifica que tu nueva barra funcione

5. **Commit y Push**:
   ```bash
   git add .
   git commit -m "Agrega nueva barra de progreso tipo XX"
   git push origin nueva-barra
   ```

6. **Crea un Pull Request**:
   - Ve a tu fork en GitHub y crea un PR hacia `decagraff/ProgressBars30`

### Ejemplo de Nueva Barra

**CSS**:
```css
.type-31 .progress {
    width: 80px;
    height: 80px;
    background: #ff4500;
    border-radius: 50%;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
```

**JS** (en progress.js):
```javascript
// En updateProgressBar:
case 31: progressElement.style.transform = `translateY(${percent/5}px)`; break;

// En cssStyles:
31: `.type-31 .progress { ... }`,

// En jsCode:
31: `const progress = document.getElementById('bar-31'); ...`,
```

## Cómo Copiar y Usar un Progress Bar

1. Haz clic en "Ver código" en la barra deseada
2. Copia el HTML, CSS y JS mostrados usando los botones "Copiar"
3. Pégalos en tu proyecto:
   - HTML en tu archivo .html o .ejs
   - CSS en tu archivo .css
   - JS en tu archivo .js o dentro de `<script>`