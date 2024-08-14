---
title: Herramientas de desarrollo
---

Para este proyecto se han empleado diferentes herramientas disponibles para poder finalizar en la medida de lo posible este proyecto.

A continuación se listaran todas ellas y el proposito que se les dio.

1. React
2. Typescript
3. UIkit
4. Zustand
5. Axios
6. Chart.js
7. React Query

## Herramientas base

1. Bun
2. Vite
3. Conocimientos base en:
   - HTML
   - CSS
   - JS

## Otras herramientas secundarias

1. clsx
2. msw
3. sweetAlert2
4. astro
5. date-fns

## Descripción de Herramientas

A continuación una breve descripcion de las herramientas:

### React

Biblioteca para la creacion y construcciones de componentes dinámicos para procesar y presentar la informacion al usuario.

### Typescript

Super set del lenguaje de programación _javascript_; potente herramienta para definir tipos de datos y estructuras. Permite minimizar los errores por mala definicion de datos.

### UIkit

Framework css con diferentes reglas y componentes predefinidos para un desarrollo más rápido y solido.

### Zustand

Herramienta para el almacenamiento y administración de estados globales dentro de la aplicacion.
Una alternativa al popular _redux_

### Axios

Herramienta para realizar peticiones _http_ en los servicios REST API

### Chart.js

Herramienta para crear gráficas dinámicas a partir de los datos obtenidos por las peticines a las _API_ s y otros servicios disponibles.

### React Query

Herramienta que nos permite realizar las peticiones a los diferentes servicios, además de manejar los estados de la misma peticiones.
A través de hooks disponibles, se puede manejar el estado de carga y errores, como principales características; pero no únicas
de esta herramienta.

### Bun

Entorno de trabajo similar a **Node** y **npm** con caracteristicas adicionales que permiten trabajar de manera similar
a como se haria con las herramientas antes mencionadas.

### Vite

Herramienta para desarrollo de proyectos en _front-end_ que permite trabajar con diferentes frameworks, como: 1. preact 2. React 2. svelte 3. qwik 4. Vue 5. Angular
Es una alternativa más completa a webpack

### clsx

Una herramienta simple pero poderosa para manejar las _clases_ de los elementos en **HTML** lo que facilita de
cierta forma el estilizado de elementos y componentes ya que permite asignar o remover atributos de clase de manera
dinámica,algo similar a lo que pudiera ser **tailwind css**

### MSW

**msw** o _Mock Service Worker_ es una herramienta que permite simular un servidor.
Este intercepta las peticiones realizadas por axios o fetch, si algún manejador esta definido con una URL que haga match
a la peticion solicitada, esta entrega los datos definidos en lugar realizar una peticion real alservidor.
Esta herramienta es de gra utilidad si se esta desarrollando algun componente que dependa de los datos y/o servicios
de una REST API que aun no esta definida o terminada; también es útil para poder hacer pruebas unitarias a componentes
que requieren de datos de servidor para probar su buen funcionamiento.

### sweetAlert2

Una herramienta simple y elegante para poder dar notificaciones e información útil al usuario.

### Astro (starlight)

Framework simple de javascript para crear paginas y secciones; dentro de sus componentes "**astro**" se puede
insertar otros componentes de diferentes frameworks y librerias como react. Esto debido a sus concepto de islas
que permite trabajar con pequeños fragmentos de codigo sin alterar el pryecto.
En este caso Nos ayudo a desarrollor esta simple documentación de manera simple y rapida mediante la herramienta _starlight_.

### date-fns
Biblioteca en javascrit para manejo y manipulacion de fechas, realizar operaciones y dar formato