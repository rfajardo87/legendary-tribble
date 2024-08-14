---
    title: Estructura
    descripcion: Estructura de carpetas
---

A continuacion se describe la estructura de carpetas del proyecto para una mejor comprensión del desarrollo:

## api

Contiene la definicion de instancias que conectan con los diferntes servicios que se usaran.
Tambien estan definidas las funciones que realizan las diferentes peticiones con los métodos **HTTP**

### crm

Funciones y peticiones a los servicios _CRM_

### google

Funciones con las peticiones hacia los servicios de **Google Ads** y **Google Analytics**

### meta

Peticiones a los servicios de **Meta** (facebook)

## assets

Contiene los diferentes recursos locales como imagenes, fuentes, estilos, etc.

## components

Contiene los componentes básicos y reutilizables en la aplicación

## content

Contiene los archivos markdown de esta documentación

## helpers

Contiene archivos con funciones genericas que pueden utilizarse en diversas partes del proyecto. Esto con la inteción de no repetir el mismo código en diferentes partes.

## mock
El servicio de simlacion de datos cuando se necesite realizar alguna peticion a través de un callback o un ajax.

## pages
Es la parte central del proyecto; aquí se contiene los componentes que se presenta principal mente al usuario,
componentes que tiene cierta lógica para realizar las peticiones necesarias, procesar la información 
y presentar al usario.

## stores
Esta carpeta contiene los diferentes almacenamientos de datos tanto globales con _zustand_ como para los componentes mediante contextos propios de react.

## types
contiene las definciones de las estructuras y tipos manejados en el proyecto; para facilitar el desarrollo y minimizar los errores.
