[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Calculadora de coste total de propiedad (TCO) para energía industrial y plantilla Excel de comparación de costes de combustible (gas natural vs. GLP vs. electricidad vs. diésel)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/869c90a4-4548-491b-b4ae-65b7bca29c50" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-TCO%20Financial%20Model-orange)

**Una calculadora interactiva de coste total de propiedad (TCO) para energía industrial y un modelo de hoja de cálculo en Excel diseñados para comparar gas natural, GLP, electricidad y diésel sobre una base normalizada de energía útil ($/GJ). Evalúa la inversión de capital (CAPEX) en calefacción industrial, los gastos de explotación (OPEX), la eficiencia térmica de calderas, el COP de bombas de calor y los costes de posesión a lo largo del ciclo de vida dentro de un marco estandarizado de economía de la ingeniería—disponible como calculadora web gratuita y plantilla Excel descargable.**

**Sin registro. Sin instalación. Pruébala gratis en tu navegador.**

Usa la aplicación web interactiva para un cribado inicial rápido, o descarga el modelo de hoja de cálculo en Excel desbloqueado para auditorías financieras detalladas, el guardado de múltiples escenarios y presentaciones a clientes—respaldado por una garantía de devolución de dinero de 30 días sin preguntas.

> 🌐 **Abrir la calculadora web gratuita**  
> [Calculadora web interactiva de costes energéticos industriales y TCO (Edición de navegador)](https://hyvoid.github.io/industrial-energy-tco-calculator/)
>
> 📥 **Obtener el modelo completo de hoja de cálculo**  
> [Descargar la plantilla Excel editable de TCO energético industrial y comparación de combustibles](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)

---

## Qué te ayuda a seguir y decidir: mapeo de puntos débiles a soluciones

En lugar de comparar tarifas de servicios públicos de forma aislada, este kit de economía de la ingeniería sigue y resuelve los puntos ciegos críticos en las evaluaciones de **descarbonización industrial**, **sustitución de calderas** y **electrificación de plantas**:

| Métrica de seguimiento objetivo / punto débil | El punto ciego analítico habitual | Cómo este modelo de TCO lo resuelve y sigue |
| :--- | :--- | :--- |
| **Coste normalizado de energía útil ($/GJ o $/MMBtu)** | Comparar precios brutos de combustible ($/kWh, $/Therm, $/Liter) sin ajustar por las pérdidas de conversión. | Sigue el **calor útil entregado** al tener en cuenta la eficiencia térmica de la caldera de combustión (%) y el COP de la bomba de calor industrial. |
| **CAPEX de infraestructura anualizado y WACC** | Tratar las tasas de conexión a la red de gas, las mejoras de subestaciones eléctricas o los tanques de almacenamiento como costes hundidos. | Sigue la **amortización del CAPEX** inicial a lo largo del ciclo de vida del activo usando tu **tasa de descuento (WACC)** específica mediante el factor de recuperación del capital. |
| **OPEX de ciclo de vida mixto y tarifas fijas de servicios públicos** | Ignorar los cargos mensuales por demanda punta, las cuotas de medición y los programas de mantenimiento preventivo. | Sigue tanto el gasto variable en combustible como los cargos fijos del servicio para obtener un verdadero **coste total de posesión (TCO) anual**. |
| **Sensibilidad cruzada al precio del combustible y análisis de equilibrio** | Las hojas de cálculo estáticas se rompen cuando los mercados de materias primas fluctúan o se introduce el precio del carbono. | Sigue la **sensibilidad al precio del combustible en múltiples escenarios**, actualizando dinámicamente la clasificación económica a medida que cambian las tarifas eléctricas o los precios del gas. |
| **Compromisos entre electrificación y combustibles fósiles** | Suponer que las bombas de calor industriales son demasiado caras debido a las altas tarifas eléctricas por kWh. | Cuantifica el **compromiso exacto entre OPEX y CAPEX**, mostrando cuándo la alta eficiencia del COP compensa las tarifas eléctricas y los costes de equipo más elevados. |

En lugar de preguntar:
> *"¿Qué tarifa de combustible parece más barata sobre el papel?"*

Este modelo financiero responde a la pregunta que realmente enfrentan las partes interesadas de proyectos de capital:
> **"¿Qué solución de calefacción y energía industrial ofrece el menor coste de ciclo de vida ajustado al riesgo para el perfil operativo específico de nuestra planta?"**

---

## Cómo ejecutar un análisis de costes de combustible industrial y TCO (flujo de trabajo de inicio rápido)

Obtener comparaciones financieras y de ingeniería listas para auditoría toma menos de 5 minutos. La arquitectura separa limpiamente las entradas del proyecto, los parámetros termodinámicos, las fórmulas financieras y las capas de información ejecutiva.

### Paso 1: Configurar los parámetros base de la planta y financieros
Abre el módulo **Project Input** para establecer las condiciones límite operativas y financieras base de tu instalación:
- **Demanda anual de energía útil** (GJ/año o MMBtu/año)
- **Horas de operación de la planta** (horas/año para el cálculo del factor de capacidad)
- **Coste medio ponderado de capital (WACC / tasa de descuento %)**
- **Periodo de depreciación del equipo y amortización del CAPEX** (años)

*Acción:* Pon a prueba tus números base al instante con la [calculadora TCO gratuita de navegador](https://hyvoid.github.io/industrial-energy-tco-calculator/).

---

### Paso 2: Introducir tarifas de servicios públicos, eficiencia del equipo y presupuestos de CAPEX
Rellena las tablas de parámetros con tus tarifas locales de servicios públicos y las cotizaciones de ingeniería de los proveedores:
- **Tarifas comerciales de combustible:** tarifas de gas natural, precios de GLP a granel, tarifas eléctricas industriales y costes del diésel.
- **Rendimiento termodinámico:** eficiencia térmica de calderas de gas/diésel (%) y coeficiente de rendimiento (COP) de la bomba de calor industrial.
- **Costes de capital y fijos:** inversión en infraestructura de gas/red, cargos mensuales por demanda de servicios públicos y costes anuales de O&M.

*No se requiere mantenimiento de fórmulas: todas las conversiones de unidades y normalizaciones de poder calorífico ocurren automáticamente.*

---

### Paso 3: Auditar el panel de TCO automatizado y la clasificación LCOH
Cambia al **Executive Summary Dashboard** para revisar la salida de economía de la ingeniería en tiempo real:
- **Consumo anual de combustible** (en unidades nativas de facturación y unidades energéticas normalizadas)
- **Desglose de CAPEX anualizado frente a OPEX variable**
- **Coste nivelado del calor (LCOH) / coste normalizado por GJ útil**
- **Clasificación económica automatizada** entre gas natural, GLP, electricidad y diésel

---

### Paso 4: Ejecutar análisis de sensibilidad al precio del combustible y exportar a Excel para un modelado reutilizable
Simula la volatilidad del mercado de materias primas ajustando las tarifas de combustible, el WACC o los supuestos de CAPEX para poner a prueba tu decisión de inversión.

> 💡 **¿Necesitas guardar tus escenarios, personalizar fórmulas o presentar ante la dirección?**  
> Aunque la versión de navegador es ideal para el cribado en una sola sesión, los proyectos de capital reales requieren auditoría iterativa, colaboración en equipo y documentación permanente.  
> 👉 **[Descarga aquí la plantilla Excel completa desbloqueada](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)** para guardar líneas base de proyectos ilimitadas, auditar la fórmula de cada celda subyacente, personalizar hojas para distintas ubicaciones de planta y exportar gráficos listos para la dirección en tus propuestas de aprobación de CAPEX.

---

## La lógica de negocio y la metodología

Para cerrar la brecha de comunicación entre **Ingeniería de Procesos** (que piensa en kW, COP y eficiencia térmica) y **Finanzas Corporativas** (que piensa en WACC, VAN y amortización del CAPEX), este kit implementa una metodología analítica de 4 etapas:

1. **Normalización termodinámica de la energía (el estándar del "GJ útil"):**  
   Los combustibles brutos se facturan en unidades incompatibles (p. ej., $/kWh para electricidad, $/m³ o $/MMBtu para gas natural, $/liter para diésel, $/ton para GLP). Comparar precios unitarios brutos es matemáticamente erróneo porque una caldera de gas que opera al 82% de eficiencia térmica pierde el 18% de su energía adquirida por la chimenea, mientras que una bomba de calor industrial con un COP de 3.2 entrega 3.2 unidades de calor útil por cada 1 unidad de energía eléctrica adquirida. Este modelo aplica la **Normalización Termodinámica del Primer Principio**, convirtiendo todas las entradas de combustible en **coste por gigajulio útil entregado ($/GJ útil)** basándose en los poderes caloríficos inferiores (LHV) y las eficiencias de conversión del sistema.
2. **Coste anual equivalente (EAC) y modelado de recuperación del capital:**  
   Las transiciones energéticas industriales—como pasar de GLP a una red de gas natural, o electrificar un sistema de vapor—requieren inversiones de capital (CAPEX) iniciales muy diferentes. Simplemente dividir el CAPEX por los años del proyecto ignora el valor temporal del dinero. Este kit utiliza el método del **factor de recuperación del capital (CRF)**:
   $$\text{Annualized CAPEX} = \text{CAPEX} \times \frac{r(1+r)^n}{(1+r)^n - 1}$$
   *(donde $r$ es el WACC corporativo/tasa de descuento y $n$ es la vida económica del activo).* Esto convierte inversiones de infraestructura iniciales irregulares en un coste anual equivalente exacto que puede sumarse directamente a los gastos de explotación anuales.
3. **Contabilidad de OPEX de absorción total:**  
   Más allá del consumo variable de combustible, las facturas de servicios públicos industriales conllevan estructuras fijas importantes—como cargos por demanda eléctrica punta, tasas de reserva de capacidad de gasoductos y mantenimiento de equipos especializados (p. ej., ajuste de quemadores frente a revisiones de compresores). La metodología agrega **CAPEX anualizado + coste variable de combustible + tarifas fijas de servicios públicos + O&M anual** para derivar el verdadero **coste nivelado del calor (LCOH)** y el **TCO anual**.
4. **Matriz de sensibilidad determinista y punto de equilibrio:**  
   Dado que los activos industriales operan durante 10 to 25 years, una decisión basada en precios spot de la energía expone a la empresa a un grave riesgo de materias primas. El modelo desacopla los parámetros de ingeniería estáticos de las variables de mercado volátiles, permitiendo **pruebas de sensibilidad instantáneas en condiciones de ceteris paribus** para identificar los umbrales exactos de equilibrio de precios entre combustibles competidores.

---

## Por qué construí esto: cerrar la brecha entre ingeniería y finanzas

Muchas decisiones de inversión en energía industrial fracasan durante la revisión ejecutiva porque las partes interesadas evalúan métricas aisladas en lugar de un modelo económico unificado:

- **Ingenieros de planta y mecánicos** se centran en la eficiencia térmica de combustión y el COP de las bombas de calor.
- **Finanzas corporativas y CFO** examinan los obstáculos del CAPEX inicial y las tasas de descuento WACC.
- **Gerentes de instalaciones y operaciones** priorizan la estabilidad del OPEX anual y la fiabilidad del mantenimiento.
- **Equipos de contratación de energía** se centran puramente en negociar tarifas unitarias de combustible más bajas.

Una caldera de gas natural puede ofrecer una tarifa de combustible por unidad baja, pero requerir $500,000 en zanjas y CAPEX de conexión a la red de gas. Una bomba de calor industrial eléctrica puede enfrentarse a tarifas de servicios públicos por kWh más altas, pero lograr un COP de 3.5x que reduce drásticamente el volumen total de energía. Un sistema de GLP o diésel puede minimizar el CAPEX inicial, pero perder dinero por el alto OPEX variable de combustible a escala de producción.

El verdadero cuello de botella analítico no es la falta de datos—es la ausencia de un **marco estandarizado de economía de la ingeniería**. Construí este libro para normalizar cada vector energético competidor en un único lenguaje empresarial: **energía útil entregada idéntica, supuestos financieros WACC idénticos y estructuras de coste de ciclo de vida idénticas.**

---

## Hojas de cálculo estándar frente a este marco de TCO para energía industrial

| Dimensión de evaluación | Hojas de cálculo internas ad hoc (sin esta herramienta) | Marco de decisión de TCO estandarizado (con esta herramienta) |
| :--- | :--- | :--- |
| **Eficiencia termodinámica y COP** | Las tarifas nominales de combustible ($/kWh frente a $/m³) se comparan directamente sin ajustar por la eficiencia de conversión, lo que genera clasificaciones de coste falsas. | Normaliza automáticamente los poderes caloríficos, la eficiencia térmica de la caldera (%) y el COP de la bomba de calor en el **coste por GJ útil entregado ($/GJ)**. |
| **CAPEX de infraestructura y WACC** | La construcción inicial de gasoductos, las mejoras de transformadores o las instalaciones de tanques se omiten de los cálculos de coste unitario de combustible. | Aplica el **factor de recuperación del capital (CRF)** usando tu WACC corporativo para amortizar el CAPEX en un coste anual equivalente (EAC). |
| **Alineación interdepartamental** | La ingeniería modela BTU/hr en una hoja mientras las finanzas modelan el flujo de caja en otra, lo que genera conclusiones conflictivas en las propuestas de CAPEX. | Unifica los parámetros de ingeniería termodinámica y las métricas de finanzas corporativas dentro de un único **motor de cálculo transparente y listo para auditoría**. |
| **Estructura de tarifas de servicios públicos y O&M** | Los cargos mensuales fijos por demanda, las tasas de conexión a la red y los costes diferenciales de mantenimiento se pasan por alto, subestimando el OPEX en un 15–30%. | Incorpora **tasas fijas de servicio, cargos por demanda y programas anuales de O&M** junto al consumo variable de combustible. |
| **Volatilidad del precio de materias primas** | Cambiar un único precio de combustible o tasa de descuento requiere reescribir manualmente fórmulas en múltiples pestañas rotas. | El **análisis de sensibilidad dinámico** recalcula instantáneamente las clasificaciones de ciclo de vida y los puntos de equilibrio en $/GJ cuando cambian los supuestos de mercado. |
| **Horizonte de inversión de ciclo de vida** | Los proyectos se juzgan únicamente por el coste operativo del Año 1 o el retorno simple, ocultando pasivos de coste de ciclo de vida a 10-to-20-year. | Evalúa **combustible, CAPEX de infraestructura, mantenimiento y costes de financiación de forma concurrente** a lo largo de todo el ciclo de vida del activo. |

---

## Para quién es esto: roles objetivo y casos de uso industrial

Este kit está diseñado para profesionales técnicos y comerciales que necesitan una **plantilla Excel o calculadora web lista para auditoría** para justificar proyectos de capital sin construir modelos financieros complejos desde cero:

- **Consultores de energía industrial y auditores energéticos:** Úsalo como un **generador de propuestas para clientes y plantilla de análisis financiero ASHRAE Level 2/3** al evaluar cambios de combustible, electrificación de plantas u hojas de ruta de descarbonización térmica.
- **Ingenieros mecánicos, de procesos y de planta:** Úsalo como una **calculadora de sustitución de calderas y dimensionado de bombas de calor industriales** para traducir las ganancias de eficiencia termodinámica (COP frente a eficiencia de combustión) en métricas financieras listas para el CFO.
- **Ingenieros de ventas de HVAC comercial y cleantech:** Úsalo como una **calculadora interactiva de ROI y TCO para apoyo a ventas** durante llamadas de descubrimiento con clientes para demostrar cómo los equipos de alta eficiencia (p. ej., bombas de calor eléctricas, biomasa o calderas de alta eficiencia) reducen el coste total de ciclo de vida a pesar de un CAPEX inicial más alto.
- **Gerentes de instalaciones y directores de operaciones de planta:** Úsalo como una **hoja de previsión de presupuesto de servicios públicos y justificación de CAPEX** al planificar retrofits de equipos antiguos, conversiones de GLP a gas natural fuera de la red o la eliminación gradual de generadores/calderas de diésel.
- **Analistas financieros corporativos y controladores de CAPEX:** Úsalo como un **modelo de valoración de economía de la ingeniería estandarizado** para auditar las afirmaciones de los proveedores, aplicar tasas de obstáculo WACC consistentes y poner a prueba el VAN del proyecto frente a la volatilidad de los precios de la energía.
- **Contratistas EPC y empresas de diseño-construcción:** Úsalo como una **matriz de comparación de ofertas técnico-comercial** durante estudios pre-FEED y de viabilidad para presentar compensaciones transparentes de coste de ciclo de vida con múltiples opciones a los propietarios del proyecto.

---

## Escenarios de uso y casos de energía industrial frecuentemente preguntados

Si buscas un modelo fiable para evaluar cualquiera de los siguientes escenarios de proyecto de capital, este kit está preconfigurado para manejar las matemáticas:

- **Electrificación industrial y descarbonización:** *¿Cómo calculo el punto de equilibrio de TCO entre una bomba de calor industrial eléctrica y una caldera de gas natural de vapor/agua caliente?*
- **Análisis de cambio de combustible fuera de la red:** *¿Cuál es la comparación real de coste de ciclo de vida al cambiar una planta de fabricación de diésel o GLP a granel a gas natural por red, teniendo en cuenta el CAPEX de la red de gas?*
- **Modelado del coste nivelado del calor (LCOH):** *¿Cómo normalizo diferentes unidades de facturación de combustible (kWh, Therms, Litros, kg, GJ, MMBtu) en una única métrica comparable para una propuesta ejecutiva de CAPEX?*
- **Pruebas de estrés de tarifas y precio del carbono:** *¿A qué relación de precio electricidad-gas (Spark Gap) la electrificación de la planta se vuelve económicamente viable para procesos de fabricación continua frente a por lotes?*

---

## Acerca de Theseus Workshop

Construyo marcos ligeros y transparentes de apoyo a decisiones basados en Excel y navegador para problemas de asignación operativa y de capital donde hay demasiadas variables interactuantes para evaluar mentalmente.

En lugar de construir plataformas SaaS empresariales hinchadas o software de simulación de caja negra, me centro en empaquetar razonamientos de ingeniería y finanzas repetibles en modelos limpios y auditables que cierran la brecha entre la viabilidad técnica y la realidad comercial.

El principio de diseño central detrás de cada kit es simple:
> **"¿Qué datos exactos deben normalizarse en un solo lugar para que la decisión de capital óptima se vuelva matemáticamente obvia?"**

---
*Palabras clave: Calculadora de coste total de propiedad (TCO) para energía industrial, plantilla Excel de comparación de costes de combustible, hoja de cálculo de coste nivelado del calor (LCOH), modelo de ROI de caldera frente a bomba de calor, calculadora de costes de gas natural frente a GLP frente a electricidad, plantilla de economía de la ingeniería CAPEX OPEX.*

---

## Detalles técnicos

<details>
<summary><strong>Para revisores técnicos, practicantes de Excel y colaboradores</strong></summary>

## Arquitectura del libro

El libro sigue una arquitectura en capas que separa la entrada de datos, los supuestos de ingeniería, la lógica de cálculo y la información ejecutiva. Esta separación minimiza el mantenimiento de fórmulas al tiempo que hace que cada cálculo sea rastreable hasta una única fuente de verdad.

```text
                 Project Inputs
                        │
                        ▼
             Project Input Parameters
                        │
                        ▼
          Fuel & Infrastructure Assumptions
                        │
                        ▼
             Calculation Engine (TCO)
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▼
Sensitivity Analysis          Executive Dashboard
          │                           │
          └─────────────┬─────────────┘
                        ▼
               Commercial Recommendation
```

| Capa | Hojas de cálculo principales | Responsabilidad |
|--------|-------------------|----------------|
| Navegación | Home | Orientación al usuario y flujo de trabajo |
| Capa de entrada | Project Input | Supuestos operativos específicos del proyecto |
| Capa de parámetros | Fuel Assumptions, Infrastructure Assumptions | Supuestos de ingeniería y finanzas mantenidos en un solo lugar |
| Capa de cálculo | Calculation Engine | Conversión de energía útil, uso anual de combustible, TCO, coste normalizado |
| Capa de análisis | Sensitivity | Pruebas de escenarios de mercado y cambios de clasificación |
| Capa de presentación | Dashboard | Apoyo a decisiones ejecutivas |
| Capa de gobernanza | Assumption Register, User Guide | Auditabilidad y procedimientos operativos |

### Flujo de información

```
Project Inputs
      │
      ▼
Engineering Assumptions
      │
      ▼
Physical Energy Conversion
      │
      ▼
Fuel Consumption
      │
      ▼
Operating Cost
      │
      ▼
Infrastructure Cost
      │
      ▼
Annualized CAPEX
      │
      ▼
Total Cost of Ownership
      │
      ▼
Normalized Cost per Useful Energy
      │
      ▼
Economic Ranking
```

Cada cálculo posterior referencia las hojas de parámetros anteriores en lugar de constantes codificadas. Como resultado, actualizar un precio de combustible, la eficiencia del equipo, la tasa de descuento o la inversión en infraestructura refresca automáticamente cada cálculo dependiente en todo el libro.

---

## Tres trampas que atrapan incluso a analistas energéticos experimentados

### Trampa 1 — Comparar precios de combustible en lugar de energía útil entregada

Se toma una decisión de compra porque el gas natural parece más barato que la electricidad en función del precio por unidad.

Por desgracia, esas unidades no son directamente comparables.

El gas natural, el GLP, el diésel y la electricidad utilizan sistemas de medición física y eficiencias de conversión diferentes.

Comparar únicamente los precios de contratación ignora la cantidad de energía útil realmente entregada al proceso.

| Comparación | Enfoque incorrecto | Enfoque correcto |
|------------|-------------------|------------------|
| Métrica principal | Precio del combustible | Coste por GJ útil |
| Rendimiento del equipo | Ignorado | Eficiencia y COP incluidos |
| Resultado | Clasificación engañosa | Base económica comparable |

El libro convierte primero cada opción en una salida de energía útil idéntica antes de que comience cualquier comparación financiera.

Esto garantiza que las tecnologías competidoras se evalúen sobre un rendimiento térmico equivalente en lugar de unidades de compra incompatibles.

<details>
<summary>Lógica de fórmulas</summary>

Demanda de energía útil

↓

Combustible físico requerido

↓

Eficiencia del equipo

↓

Consumo anual de combustible

↓

Coste anual de combustible

</details>

---

### Trampa 2 — Ignorar la inversión en infraestructura

Se hace una recomendación de proyecto utilizando únicamente el coste operativo anual.

Meses después, el presupuesto de implementación revela que una opción requiere mejoras eléctricas significativas, instalación de gasoductos, equipos de regulación de presión o infraestructura de almacenamiento.

La recomendación original se vuelve repentinamente poco atractiva desde el punto de vista financiero.

Al incorporar la inversión en infraestructura directamente en el coste de posesión de ciclo de vida, el libro evita que el gasto de capital se convierta en una idea de última hora.

En lugar de preguntar

> "¿Qué opción tiene el menor coste operativo?"

el modelo pregunta

> "¿Qué opción cuesta menos poseer a lo largo del tiempo?"

La recomendación corregida incluye:

- CAPEX de infraestructura
- Mantenimiento anual
- Recuperación del capital
- Cargos fijos de servicios públicos
- Gasto en combustible

Solo después de combinar estos componentes se pueden comparar de forma justa dos soluciones técnicamente viables.

<details>
<summary>Lógica de fórmulas</summary>

```
Annual Infrastructure CAPEX
        +
Annual Maintenance Cost
        +
Annual Fuel Cost
        +
Annual Fixed Charges
        =
Annual TCO
```

</details>

---

### Trampa 3 — Suponer que los precios actuales de la energía se mantendrán constantes

Muchas decisiones de inversión se aprueban utilizando los precios actuales del mercado como si representaran los próximos diez o quince años.

Los mercados energéticos rara vez se comportan así.

Los precios del gas natural fluctúan.

Las tarifas eléctricas cambian.

Los precios del diésel responden a las interrupciones del suministro global.

Los mercados de GLP varían significativamente según la región.

Una recomendación que parece óptima hoy puede convertirse en la segunda o tercera mejor opción después de un movimiento de precios modesto.

En lugar de presentar una única "mejor respuesta", el libro evalúa cuán robusta permanece cada solución bajo supuestos cambiantes.

| Escenario | Hoja de cálculo tradicional | Este libro |
|-----------|------------------------|---------------|
| Cambios en el precio del combustible | Reconstrucción manual | Recálculo automático |
| Revisión del CAPEX | Múltiples fórmulas actualizadas manualmente | Actualización central de parámetros |
| Comparación de clasificaciones | Difícil | Automática |
| Evaluación de escenarios | Un caso a la vez | Múltiples escenarios comparables |

Las decisiones comerciales se vuelven significativamente más fiables porque las partes interesadas pueden ver **si una recomendación sigue siendo óptima bajo una incertidumbre de mercado realista**, en lugar de solo bajo los supuestos actuales.

<details>
<summary>Lógica de fórmulas</summary>

```
Parameter Update
        │
        ▼
Fuel Cost
        │
        ▼
Annual TCO
        │
        ▼
Normalized Cost
        │
        ▼
Economic Ranking
```

</details>

---

## Escenario de ejemplo

Una planta de fabricación de alimentos planea reemplazar su sistema de generación de vapor envejecido.

El equipo de ingeniería identifica cuatro alternativas técnicamente viables:

- Caldera de gas natural
- Caldera de GLP
- Bomba de calor eléctrica
- Caldera de diésel

El proyecto requiere aproximadamente **18,000 GJ útiles** de energía térmica anual, opera **5,200 horas por año** y usa una **tasa de descuento del 8%** con un **periodo de recuperación del capital de 15-year**.

Mirando únicamente los precios del combustible, el equipo de contratación inicialmente favorece el gas natural porque tiene el coste unitario de combustible más bajo.

Sin embargo, una vez que los supuestos del proyecto se introducen en el libro, el motor de cálculo evalúa mucho más que el gasto en combustible.

El modelo determina automáticamente:

- El consumo de combustible físico requerido tras tener en cuenta la eficiencia del equipo.
- El coste anual de compra de combustible.
- Los cargos mensuales fijos de red.
- La inversión en infraestructura requerida.
- El gasto anual de mantenimiento.
- El coste de infraestructura anualizado usando la tasa de descuento seleccionada.
- El coste total anual de posesión.
- El coste normalizado por GJ útil.
- La clasificación económica general.

El análisis revela que, aunque la bomba de calor eléctrica compra energía más cara, su COP significativamente mayor reduce el consumo de energía requerido lo suficiente como para compensar tanto los precios de la electricidad como los costes de infraestructura más altos.

Mientras tanto, la opción de diésel requiere una inversión en infraestructura comparativamente pequeña, pero se convierte en la solución más cara una vez que se consideran los costes operativos anuales.

En lugar de presentar varios cálculos de ingeniería desconectados, el libro produce una única comparación comercial donde cada alternativa se evalúa usando supuestos y metodología financiera idénticos.

Los tomadores de decisiones pueden por tanto justificar recomendaciones usando la economía de ciclo de vida en lugar de componentes de coste aislados.

---

## Referencia de fórmulas

<details>
<summary>Hoja Project Input</summary>

| Fórmula | Propósito |
|---------|----------|
| IF | Conversión de unidades entre MWh y GJ útil |
| Data Validation | Integridad de las entradas |
| Named Ranges | Gestión central de parámetros |

</details>

<details>
<summary>Supuestos de combustible</summary>

| Fórmula | Propósito |
|---------|----------|
| MAP() | Evaluar cada tipo de combustible dinámicamente |
| LAMBDA() | Aplicar una lógica de conversión idéntica |
| IF() | Separar los cálculos de eficiencia de combustión de los de COP de bomba de calor |

</details>

<details>
<summary>Supuestos de infraestructura</summary>

| Fórmula | Propósito |
|---------|----------|
| BYROW() | Agregar la inversión en infraestructura por tecnología |
| SUM() | Consolidación del CAPEX |
| Dynamic Arrays | Expansión automática cuando se añaden nuevas tecnologías |

</details>

<details>
<summary>Motor de cálculo</summary>

| Fórmula | Propósito |
|---------|----------|
| MAP() | Consumo anual de combustible físico |
| PMT() | Inversión en infraestructura anualizada |
| Dynamic Arrays | Cálculos de coste operativo anual |
| RANK.EQ() | Clasificación económica automática |
| Array Arithmetic | Coste normalizado por GJ útil |

</details>

<details>
<summary>Análisis de sensibilidad</summary>

| Fórmula | Propósito |
|---------|----------|
| Dynamic Arrays | Generación de matrices de escenarios |
| Parameter References | Actualizaciones centrales de supuestos |
| Ranking Functions | Análisis de estabilidad de la recomendación |

</details>

## Reglas de validación

| Campo | Regla de validación | Comportamiento del error |
|-------|-----------------|----------------|
| Energía útil anual | Debe ser mayor que cero | Cálculo bloqueado |
| Horas de operación | Valor numérico positivo | Advertencia mostrada |
| Tasa de descuento | 0–100% | Porcentaje no válido rechazado |
| Periodo de amortización | Entero positivo | Anualización deshabilitada hasta corregirse |
| Precio del combustible | No puede ser negativo | Cálculos de coste suspendidos |
| Eficiencia del equipo | Entre 0% y 100% | Advertencia de validación |
| COP de bomba de calor | Mayor que cero | Cálculos de electricidad impedidos |
| CAPEX de infraestructura | No puede ser negativo | CAPEX anualizado no disponible |
| Cargo mensual fijo | No puede ser negativo | Advertencia de TCO anual |
| Tasa de mantenimiento | Entre 0% y 100% | Advertencia de cálculo de O&M |

</details>

---

## Otras herramientas de esta serie

- **Kit de planificación de costes laborales y capacidad de fabricación** — Analiza la utilización de la plantilla, el coste laboral, las horas extra y la capacidad de producción usando un modelo operativo unificado.
- **Kit de planificación de inventario adaptado a la demanda** — Equilibra la inversión en inventario, los plazos de los proveedores y los niveles de servicio con una planificación de reposición basada en escenarios.
- **Kit de libro mayor de inventario para venta minorista y fabricación** — Conecta compras, producción, movimientos de almacén y valoración de inventario en un único libro.
- **Kit de planificación de nómina y capacidad anual de la plantilla empresarial** — Consolida la nómina, las horas laborales anuales, la capacidad de personal y el presupuesto laboral en múltiples departamentos.
- **Kit de inteligencia de operaciones y vacancia de propiedades de alquiler** — Sigue la ocupación, los cambios de reservas, la exposición a la vacancia y el rendimiento operativo de carteras de múltiples propiedades.

---

## Licencia

Este proyecto está licenciado bajo la **Licencia Apache 2.0**.

Eres libre de usar, modificar y adaptar este libro para fines personales o comerciales de acuerdo con los términos de la Licencia Apache 2.0.

Debe incluirse una copia de la licencia con cualquier redistribución u obra derivada.

---

**Si este libro ayuda a mejorar tus decisiones de inversión energética, considera darle al repositorio una ⭐ para apoyar futuras herramientas de apoyo a decisiones.**
