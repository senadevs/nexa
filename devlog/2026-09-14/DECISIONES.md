# Decisiones — Nexa

## 2026-09-14 · Base y experiencia inmersiva

- **Astro estático:** se mantiene Astro para entregar HTML rápido, SEO técnico claro y JavaScript solo donde aporta interacción.
- **Three.js + GSAP ScrollTrigger:** se usa una sola escena WebGL coordinada por scroll para las transformaciones 3D; GSAP gobierna el progreso y no comparte propiedades animadas con otra librería.
- **3D fuera del hero:** el hero prioriza vídeo, imágenes, mensaje y conversión. La profundidad 3D vive en una sección narrativa propia para no competir con el contenido principal.
- **Fallback obligatorio:** cada escena mantiene una imagen editorial visible si WebGL no está disponible, en móvil o con movimiento reducido.
- **Contenido como estructura:** las seis áreas de servicio son desplegables y tienen copy e imagen propios; la página de trabajos queda separada para poder crecer en SEO y casos de estudio.
- **Calidad del repositorio:** se excluyen dependencias, artefactos de Astro y builds generadas del control de versiones mediante `.gitignore`.
- **Spatial scroll:** los bloques narrativos usan pequeñas trayectorias laterales, diagonales y de profundidad; la escena Three.js central conserva el cambio de formas y no se fuerza el efecto en móvil.
- **Reversión de interacción:** se elimina el spatial scroll multidireccional porque no representa la experiencia buscada; se conserva solo el 3D narrativo central, más controlado.
- **Paleta Nexa:** se adopta la referencia del logo como fuente visual: carbón `#272727`, gris grafito `#686A6D`, coral `#F36B48`, melocotón `#FFAD98` y blanco `#F8F8F7`.
- **Contacto sin backend inicial:** el formulario genera un `mailto:` con los datos del proyecto para permitir contacto inmediato sin introducir todavía un servicio externo o credenciales de servidor.
- **WhatsApp provisional:** se deja el enlace aislado con un número placeholder; debe sustituirse por el número real de Nexa antes de publicar.
- **Logo oficial:** se usa `NEXA LOGO.svg` como asset de marca en lugar de reconstruir el wordmark con HTML; se recorta únicamente el espacio vacío del `viewBox` para conservar proporción y legibilidad.
- **Ticker continuo:** la franja de disciplinas funciona como marquee autónomo con contenido duplicado y loop lineal; no se liga al scroll para mantener una velocidad constante.
- **Trabajo con contexto:** la home muestra una selección editorial de casos con disciplina y resultado narrativo; `/trabajos` queda como archivo ampliado para crecer con casos reales y métricas aprobadas.
- **Trabajo a ancho completo:** la sección no reserva una columna lateral para etiquetas ocultas; el contenido editorial usa todo el contenedor disponible.
- **Remoto Git por HTTPS:** el remoto se configura con HTTPS porque el repositorio está disponible, pero el acceso SSH del equipo devolvía `Repository not found`.
