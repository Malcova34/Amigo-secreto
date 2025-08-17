# 🎁 Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.

![Amigo Secreto](assets/amigo-secreto.png)

## 📋 Descripción

**Amigo Secreto** es una aplicación web que permite a los usuarios crear listas de amigos y realizar sorteos aleatorios para determinar quién será el "amigo secreto". Es perfecta para organizar intercambios de regalos en fiestas, oficinas, o cualquier evento especial.

## ✨ Funcionalidades

- **➕ Agregar amigos**: Ingresa nombres mediante un campo de texto y botón "Añadir"
- **✅ Validación de entrada**: Evita agregar nombres vacíos con alertas informativas
- **📝 Lista visible**: Visualiza todos los nombres agregados en tiempo real
- **🎲 Sorteo aleatorio**: Selecciona un amigo secreto de forma aleatoria
- **⌨️ Soporte de teclado**: Agrega nombres presionando la tecla Enter
- **🎨 Interfaz moderna**: Diseño responsive y atractivo

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con variables CSS y flexbox
- **JavaScript (Vanilla)**: Lógica de la aplicación sin dependencias externas
- **Google Fonts**: Tipografías Inter y Merriweather

## 📁 Estructura del Proyecto

```
challenge-amigo-secreto_esp-main/
├── index.html          # Estructura principal de la aplicación
├── style.css           # Estilos y diseño visual
├── app.js              # Lógica de la aplicación
├── assets/             # Recursos gráficos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Documentación del proyecto
```

## 🔧 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No se requieren dependencias adicionales

### Pasos para Ejecutar

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL-del-repositorio]
   cd challenge-amigo-secreto_esp-main
   ```

2. **Abrir la aplicación**
   - Abre el archivo `index.html` en tu navegador web
   - O utiliza un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server
   ```

3. **¡Listo para usar!**
   - Accede a `http://localhost:8000` si usas servidor local
   - O simplemente abre `index.html` directamente en el navegador

## 📖 Cómo Usar la Aplicación

1. **Agregar amigos**:
   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en "Añadir" o presiona Enter
   - El nombre aparecerá en la lista debajo

2. **Sortear amigo secreto**:
   - Asegúrate de tener al menos un amigo en la lista
   - Haz clic en el botón "Sortear amigo"
   - ¡El resultado aparecerá destacado en pantalla!

## 🎯 Características Técnicas

### Validaciones Implementadas
- ✅ Campos vacíos no se agregan a la lista
- ✅ Espacios en blanco se eliminan automáticamente
- ✅ Alertas informativas para guiar al usuario
- ✅ Validación antes de sortear (mínimo un amigo)

### Algoritmo de Sorteo
- Utiliza `Math.random()` para generar números aleatorios
- Implementa `Math.floor()` para obtener índices enteros
- Garantiza distribución uniforme entre todos los participantes

### Accesibilidad
- Etiquetas ARIA para lectores de pantalla
- Navegación por teclado (Enter para agregar)
- Contraste de colores apropiado
- Estructura semántica HTML

## 🎨 Personalización

### Colores
Los colores se definen mediante variables CSS en `:root`:
```css
--color-primary: #4B69FD;    /* Azul principal */
--color-secondary: #FFF9EB;  /* Fondo claro */
--color-button: #fe652b;     /* Botón de sorteo */
```

### Fuentes
- **Títulos**: Merriweather (serif, elegante)
- **Texto**: Inter (sans-serif, legible)


## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado como parte del desafío de programación para fortalecer habilidades en lógica de programación y desarrollo web.

---

**¡Disfruta organizando tus intercambios de amigo secreto!** 🎉 