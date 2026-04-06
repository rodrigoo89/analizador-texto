# ANALIZADOR DE TEXTO

> Herramienta web para analizar texto en tiempo real — conteo de letras, estadísticas y más.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)

---

## ¿Qué hace?

Ingresás un texto y tres letras, y la app te devuelve al instante:

- **Conteo de apariciones** de cada una de las 3 letras elegidas
- **Total de palabras** en el texto
- **Primera y última letra** del texto
- **Detección de la palabra «Python»** dentro del texto
- **Texto con las palabras en orden invertido**

---

## Demo

🔗 [Ver app en vivo](https://analizador-texto-rodrigoo89.vercel.app)

---

## Tecnologías

| Tecnología | Uso                          |
| ---------- | ---------------------------- |
| Next.js 15 | Framework principal          |
| React 19   | Componentes y estado         |
| TypeScript | Tipado estático              |
| CSS-in-JS  | Estilos inline con variables |
| Vercel     | Deploy y hosting             |

---

## Correr localmente

**Requisitos:** Node.js 18+

```bash
# 1. Clonar el repositorio
git clone https://github.com/rodrigoo89/analizador-texto.git

# 2. Entrar a la carpeta
cd analizador-texto

# 3. Instalar dependencias
npm install

# 4. Correr en modo desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Cómo usarlo

1. **Escribí** cualquier texto en el campo principal
2. **Ingresá 3 letras** que quieras buscar dentro del texto
3. Hacé click en **→ Analizar texto**
4. ¡Listo! Los resultados aparecen al instante

---

## Origen del proyecto

Esta app nació como un script de Python de línea de comandos:

```python
texto = input("Escribe todo lo que quieras: ")
letras = input("Ingresa 3 letras: ")
# ...
```

Y fue migrada a una interfaz web moderna con React y Next.js.

---

## Estructura del proyecto

```
analizador-texto/
├── app/
│   └── page.tsx       # Componente principal
├── public/
│   └── favicon.ico    # Ícono de la app
├── README.md
└── package.json
```

---

## Autor

**rodrigoo89** — [@rodrigoo89](https://github.com/rodrigoo89)

---

_Hecho con 🧡 y muchas ganas de aprender._
