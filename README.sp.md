[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Kit de herramientas de apoyo a decisiones para costes de energía industrial y coste total de propiedad (TCO)

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**Compara gas natural, GLP (LPG), electricidad y diésel sobre una base de energía útil real—combinando coste de combustible, eficiencia de equipos, inversión en infraestructura y coste de propiedad a lo largo del ciclo de vida en un único marco de decisión gratuito, sin instalación, disponible en formato Navegador y Excel.**

**Sin registro. Sin instalación. Gratis en tu navegador.**

Prueba la versión de navegador gratis. Si necesitas la versión Excel, puedes comprarla con una garantía de devolución de 30 días sin preguntas.
>
> 🌐 **Abrir en el navegador**  
> [Versión HTML en línea](https://hyvoid.github.io/Industrial-Energy-Cost-Total-Cost-of-Ownership-TCO-Decision-Support-Toolkit/)
>
> 📥 **Descargar Excel**  
> [compra de la plantilla Excel](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)

---

## En qué te ayuda a decidir

En lugar de comparar solo los precios del combustible, este kit ayuda a evaluar el impacto empresarial completo de soluciones de energía industrial alternativas.

Proporciona visibilidad sobre:

- El coste total de propiedad (TCO) anual de cada opción energética competidora.
- El coste por unidad de energía útil tras contabilizar la eficiencia de los equipos y el COP de las bombas de calor.
- Los requisitos de inversión en infraestructura antes de seleccionar una fuente de energía.
- Si el ahorro operativo justifica una mayor inversión de capital.
- Cómo afectan los cambios en los precios del combustible a la solución preferida.
- Qué opción energética sigue siendo económicamente resiliente bajo diferentes condiciones de mercado.

En lugar de preguntar:

> «¿Qué combustible es el más barato?»

el libro responde a la pregunta que realmente enfrentan los tomadores de decisiones:

> **«¿Qué solución energética ofrece el menor coste de ciclo de vida para este proyecto?»**

---

## Flujo de trabajo de inicio rápido

Obtener resultados significativos requiere solo unos minutos porque el libro separa las entradas del proyecto, los supuestos de ingeniería, los cálculos y los informes en capas dedicadas.

### 1. Configurar los supuestos del proyecto

Abre la hoja **Project Input** e introduce la información que define el proyecto.

Los parámetros típicos incluyen:

- Demanda anual de energía útil
- Horas de funcionamiento
- Tasa de descuento (WACC)
- Periodo de amortización del CAPEX

Estos valores normalmente permanecen estables durante una evaluación y solo necesitan actualizarse cuando cambian los supuestos del proyecto.

---

### 2. Actualizar los supuestos de energía e infraestructura

Mantén la información de mercado actualizada dentro de las hojas de parámetros dedicadas.

Las entradas típicas incluyen:

- Precios de gas natural
- Precios de GLP (LPG)
- Tarifas de electricidad
- Precios de diésel
- Eficiencia de los equipos
- COP de las bombas de calor
- Cargos de servicio mensuales
- Inversión en infraestructura
- Costes de mantenimiento anuales

Ninguna fórmula de cálculo requiere edición.

---

### 3. Revisar la comparación generada automáticamente

Cambia al panel de control.

El libro recalcula inmediatamente:

- Consumo anual de combustible
- Gasto anual de combustible
- CAPEX anualizado
- Costes operativos fijos
- Coste total de propiedad (TCO)
- Coste normalizado por Useful GJ
- Clasificación económica de cada opción disponible

No se requiere recálculo manual ni mantenimiento de fórmulas.

---

### 4. Probar diferentes escenarios de mercado

Ajusta los precios del combustible, los supuestos de CAPEX o los parámetros financieros para simular condiciones de mercado cambiantes.

El análisis de sensibilidad se actualiza automáticamente, permitiendo evaluar múltiples escenarios comerciales sin reconstruir el modelo.

> **Establece los supuestos una vez. Actualiza los datos de mercado cuando sea necesario. Revisa la recomendación. Actualiza cada vez que cambie el mercado.**

---

## Por qué construí esto

Muchas decisiones de inversión en energía industrial parecen sencillas porque los equipos de decisión a menudo comparan solo el precio del combustible anunciado.

Lamentablemente, el precio del combustible rara vez es el número que determina la economía a largo plazo.

Una solución de gas natural puede requerir la construcción de una tubería.

Una bomba de calor eléctrica puede consumir electricidad más cara pero lograr un coeficiente de rendimiento (COP) significativamente mayor.

Una instalación de GLP puede evitar una infraestructura costosa pero incurrir en mayores costes operativos con el tiempo.

Una solución diésel puede parecer atractiva para proyectos pequeños mientras se vuelve cada vez más cara una vez que el consumo anual alcanza la escala de producción.

Estos proyectos se convierten con frecuencia en discusiones donde cada parte interesada aporta una métrica diferente.

Los equipos de ingeniería se centran en la eficiencia térmica.

Los departamentos financieros evalúan el gasto de capital.

Los gerentes de operaciones priorizan los costes operativos anuales.

Compras negocia los contratos de combustible.

Debido a que cada participante mide un número diferente, las comparaciones se vuelven inconsistentes.

El verdadero problema analítico no es la falta de datos.

Es la falta de un marco de decisión común.

Construí este libro para normalizar cada opción competidora en el mismo lenguaje empresarial:

- energía útil entregada idéntica,
- supuestos financieros idénticos,
- estructura de coste de ciclo de vida idéntica.

En lugar de debatir métricas aisladas, cada opción se evalúa contra un marco económico coherente.

El objetivo no es probar que una fuente de energía es universalmente mejor que otra.

El objetivo es identificar qué solución produce el menor coste total de propiedad (TCO) bajo las condiciones de funcionamiento específicas de un proyecto determinado.

Por ejemplo, dos propuestas competidoras pueden parecer inicialmente favorables al gas natural porque su precio de combustible es menor que el de la electricidad.

Tras incorporar el COP de las bombas de calor, la inversión en infraestructura, el mantenimiento anual, los cargos fijos de servicios públicos y la recuperación del capital, la electricidad puede producir un menor coste de ciclo de vida anual a pesar de tener una tarifa energética unitaria más alta.

Sin normalizar cada variable en un modelo TCO común, esa conclusión es difícil de alcanzar con confianza.

Este libro empaqueta ese razonamiento analítico en un marco de apoyo a decisiones reutilizable en lugar de una hoja de cálculo puntual.

---

## Problemas comunes de evaluación de energía industrial que resuelve

| Problema | Sin esta herramienta | Con esta herramienta |
|----------|-------------------|----------------|
| Los precios del combustible se comparan directamente a pesar de las diferentes eficiencias. | Se supone incorrectamente que el precio de combustible más bajo es la solución más barata. | Cada opción se normaliza a la energía útil entregada antes de la comparación. |
| La inversión en infraestructura se ignora durante la evaluación de proveedores. | Las opciones intensivas en capital parecen artificialmente atractivas. | El CAPEX se anualiza y se incorpora al coste total de propiedad (TCO). |
| Diferentes departamentos usan diferentes supuestos financieros. | Ingeniería y finanzas llegan a conclusiones contradictorias. | Todos los escenarios comparten un marco de cálculo coherente. |
| Se omiten los cargos fijos de servicios públicos. | El coste operativo se subestima sistemáticamente. | Las tarifas de servicio fijas se incluyen junto a los costes variables de combustible. |
| Los precios del mercado cambian después de la evaluación inicial. | Cada escenario requiere reconstruir las hojas de cálculo manualmente. | El análisis de sensibilidad actualiza automáticamente las clasificaciones con supuestos revisados. |
| Problema | Sin esta herramienta | Con esta herramienta |
|----------|-------------------|----------------|
| Los proyectos de energía se evalúan usando solo el coste operativo del primer año. | El coste de propiedad a largo plazo permanece oculto hasta después de la implementación. | El combustible, la infraestructura, el mantenimiento y la financiación se evalúan juntos a lo largo del ciclo de vida del activo. |

---

## Para quién es

Este kit está diseñado para profesionales que necesitan comparar opciones de energía industrial o comercial usando supuestos financieros y de ingeniería coherentes en lugar de cifras de coste aisladas.

Es particularmente valioso para:

- Consultores de energía industrial que preparan propuestas para clientes.
- Ingenieros mecánicos y de procesos que comparan tecnologías de calefacción.
- Equipos de ventas comerciales que evalúan soluciones energéticas competidoras.
- Propietarios de instalaciones que planifican proyectos de reemplazo de equipos.
- Analistas financieros que realizan análisis de inversión de ciclo de vida.
- Contratistas EPC que preparan comparaciones técnico-comerciales.
- Fabricantes que evalúan escenarios futuros de costes operativos.

No se requiere experiencia en hojas de cálculo.

Los usuarios simplemente actualizan los supuestos del proyecto, revisan el panel de control y comparan las recomendaciones resultantes.

La edición Navegador está destinada a la evaluación rápida durante las discusiones, mientras que la edición Excel proporciona el modelo analítico completo para la revisión técnica y financiera.

Este libro **no** está destinado a reemplazar sistemas de gestión de energía empresarial, plataformas SCADA o software de simulación de ingeniería detallada.

En cambio, llena el vacío de decisión que existe antes de que comience la ingeniería detallada—cuando múltiples soluciones técnicamente viables deben compararse de forma rápida, coherente y transparente.

---

## Acerca de

Construyo herramientas ligeras de apoyo a decisiones basadas en Excel y el navegador para situaciones donde simplemente hay demasiadas variables para evaluar mentalmente.

En lugar de crear software empresarial, me centro en convertir el razonamiento analítico repetible en marcos reutilizables que ayudan a las personas a tomar mejores decisiones operativas con menos trabajo manual.

La pregunta central detrás de cada proyecto es simple:

> **«¿Qué información debe aparecer en un solo lugar para que la próxima decisión sea obvia?»**

El **kit de herramientas de apoyo a decisiones para costes de energía industrial y coste total de propiedad (TCO)** es un ejemplo de ese enfoque—reuniendo supuestos de ingeniería, análisis financiero, cálculo de costes de ciclo de vida y comparación comercial dentro de un libro transparente que cualquiera puede revisar, auditar y adaptar.

---

## Detalles técnicos

<details>
<summary><strong>Para revisores técnicos, practicantes de Excel y colaboradores</strong></summary>

## Arquitectura del libro

El libro sigue una arquitectura en capas que separa la entrada de datos, los supuestos de ingeniería, la lógica de cálculo y los informes ejecutivos. Esta separación minimiza el mantenimiento de fórmulas y hace que cada cálculo sea rastreable hasta una única fuente de verdad.

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

| Capa | Hojas principales | Responsabilidad |
|--------|-------------------|----------------|
| Navegación | Home | Orientación del usuario y flujo de trabajo |
| Capa de entrada | Project Input | Supuestos operativos específicos del proyecto |
| Capa de parámetros | Fuel Assumptions, Infrastructure Assumptions | Supuestos de ingeniería y financieros mantenidos en un solo lugar |
| Capa de cálculo | Calculation Engine | Conversión de energía útil, consumo anual de combustible, TCO, coste normalizado |
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

Cada cálculo posterior referencia las hojas de parámetros anteriores en lugar de constantes codificadas. Como resultado, actualizar un precio de combustible, la eficiencia de un equipo, la tasa de descuento o la inversión en infraestructura refresca automáticamente cada cálculo dependiente en todo el libro.

---

## Tres trampas que atrapan incluso a analistas de energía experimentados

### Trampa 1 — Comparar precios del combustible en lugar de energía útil entregada

Se toma una decisión de compra porque el gas natural parece más barato que la electricidad sobre una base de precio por unidad.

Lamentablemente, esas unidades no son directamente comparables.

El gas natural, el GLP, el diésel y la electricidad usan todos sistemas de medición físicos diferentes y eficiencias de conversión diferentes.

Comparar solo los precios de adquisición ignora la cantidad de energía útil realmente entregada al proceso.

| Comparación | Enfoque incorrecto | Enfoque correcto |
|------------|-------------------|------------------|
| Métrica principal | Precio del combustible | Coste por Useful GJ |
| Rendimiento de equipos | Ignorado | Eficiencia y COP incluidos |
| Resultado | Clasificación engañosa | Base económica comparable |

El libro convierte primero cada opción en una salida de energía útil idéntica antes de que comience cualquier comparación financiera.

Esto asegura que las tecnologías competidoras se evalúen sobre un rendimiento térmico equivalente en lugar de unidades de compra incompatibles.

<details>
<summary>Lógica de fórmulas</summary>

Useful Energy Demand

↓

Required Physical Fuel

↓

Equipment Efficiency

↓

Annual Fuel Consumption

↓

Annual Fuel Cost

</details>

---

### Trampa 2 — Ignorar la inversión en infraestructura

Se hace una recomendación de proyecto usando solo el coste operativo anual.

Meses más tarde, el presupuesto de implementación revela que una opción requiere mejoras eléctricas significativas, instalación de una tubería de gas, equipos de regulación de presión o infraestructura de almacenamiento.

La recomendación original se vuelve repentinamente poco atractiva financieramente.

Al incorporar la inversión en infraestructura directamente en el coste de propiedad a lo largo del ciclo de vida, el libro evita que el gasto de capital se convierta en una idea posterior.

En lugar de preguntar

> «¿Qué opción tiene el menor coste operativo?»

el modelo pregunta

> «¿Qué opción cuesta menos poseer con el tiempo?»

La recomendación corregida incluye:

- CAPEX de infraestructura
- Mantenimiento anual
- Recuperación del capital
- Cargos fijos de servicios públicos
- Gasto de combustible

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

### Trampa 3 — Suponer que los precios de energía de hoy se mantendrán constantes

Muchas decisiones de inversión se aprueban usando los precios del mercado de hoy como si representaran los próximos diez o quince años.

Los mercados de energía rara vez se comportan así.

Los precios del gas natural fluctúan.

Las tarifas de electricidad cambian.

Los precios del diésel responden a perturbaciones de la oferta mundial.

Los mercados de GLP varían significativamente según la región.

Una recomendación que parece óptima hoy puede convertirse en la segunda o tercera mejor opción después de un movimiento de precio modesto.

En lugar de presentar una única «mejor respuesta», el libro evalúa cuán robusta permanece cada solución bajo supuestos cambiantes.

| Escenario | Hoja de cálculo tradicional | Este libro |
|-----------|------------------------|---------------|
| Cambios en el precio del combustible | Reconstrucción manual | Recálculo automático |
| Revisión del CAPEX | Múltiples fórmulas actualizadas manualmente | Actualización central de parámetros |
| Comparación de clasificaciones | Difícil | Automática |
| Evaluación de escenarios | Un caso a la vez | Múltiples escenarios comparables |

Las decisiones comerciales se vuelven significativamente más fiables porque las partes interesadas pueden ver **si una recomendación sigue siendo óptima bajo una incertidumbre de mercado realista**, en lugar de solo bajo los supuestos de hoy.

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

- Natural Gas Boiler
- LPG Boiler
- Electric Heat Pump
- Diesel Boiler

El proyecto requiere aproximadamente **18.000 Useful GJ** de energía térmica anual, funciona **5.200 horas por año** y usa una **tasa de descuento del 8 %** con un **periodo de recuperación del capital de 15 años**.

Mirando solo los precios del combustible, el equipo de adquisiciones favorece inicialmente el gas natural porque tiene el menor coste de combustible unitario.

Sin embargo, una vez que los supuestos del proyecto se introducen en el libro, el motor de cálculo evalúa mucho más que el gasto de combustible.

El modelo determina automáticamente:

- El consumo de combustible físico requerido tras contabilizar la eficiencia de los equipos.
- El coste anual de compra de combustible.
- Los cargos de red fijos mensuales.
- La inversión en infraestructura requerida.
- El gasto anual de mantenimiento.
- El coste de infraestructura anualizado usando la tasa de descuento seleccionada.
- El coste total anual de propiedad.
- El coste normalizado por Useful GJ.
- La clasificación económica general.

El análisis revela que aunque la bomba de calor eléctrica compra energía más cara, su COP significativamente mayor reduce el consumo de energía requerido lo suficiente como para compensar tanto los precios de la electricidad como los mayores costes de infraestructura.

Mientras tanto, la opción diésel requiere una inversión en infraestructura comparativamente pequeña pero se convierte en la solución más cara una vez que se consideran los costes operativos anuales.

En lugar de presentar varios cálculos de ingeniería desconectados, el libro produce una única comparación comercial donde cada alternativa se evalúa usando supuestos y metodología financiera idénticos.

Los tomadores de decisiones pueden por tanto justificar las recomendaciones usando la economía del ciclo de vida en lugar de componentes de coste aislados.

---

## Referencia de fórmulas

<details>
<summary>Project Input Sheet</summary>

| Fórmula | Propósito |
|---------|----------|
| IF | Conversión de unidades entre MWh y Useful GJ |
| Data Validation | Integridad de entrada |
| Named Ranges | Gestión central de parámetros |

</details>

<details>
<summary>Fuel Assumptions</summary>

| Fórmula | Propósito |
|---------|----------|
| MAP() | Evaluar cada tipo de combustible dinámicamente |
| LAMBDA() | Aplicar lógica de conversión idéntica |
| IF() | Separar la eficiencia de combustión de los cálculos de COP de bomba de calor |

</details>

<details>
<summary>Infrastructure Assumptions</summary>

| Fórmula | Propósito |
|---------|----------|
| BYROW() | Agregar la inversión en infraestructura por tecnología |
| SUM() | Consolidación del CAPEX |
| Dynamic Arrays | Expansión automática cuando se añaden nuevas tecnologías |

</details>

<details>
<summary>Calculation Engine</summary>

| Fórmula | Propósito |
|---------|----------|
| MAP() | Consumo anual físico de combustible |
| PMT() | Inversión en infraestructura anualizada |
| Dynamic Arrays | Cálculos de costes operativos anuales |
| RANK.EQ() | Clasificación económica automática |
| Array Arithmetic | Coste normalizado por Useful GJ |

</details>

<details>
<summary>Sensitivity Analysis</summary>

| Fórmula | Propósito |
|---------|----------|
| Dynamic Arrays | Generación de la matriz de escenarios |
| Parameter References | Actualizaciones centrales de supuestos |
| Ranking Functions | Análisis de la estabilidad de las recomendaciones |

</details>

## Reglas de validación

| Campo | Regla de validación | Comportamiento de error |
|-------|-----------------|----------------|
| Annual Useful Energy | Debe ser mayor que cero | Cálculo bloqueado |
| Operating Hours | Valor numérico positivo | Advertencia mostrada |
| Discount Rate | 0–100 % | Porcentaje inválido rechazado |
| Amortization Period | Entero positivo | Anualización desactivada hasta corrección |
| Fuel Price | No puede ser negativo | Cálculos de coste suspendidos |
| Equipment Efficiency | Entre 0 % y 100 % | Advertencia de validación |
| Heat Pump COP | Mayor que cero | Cálculos de electricidad impedidos |
| Infrastructure CAPEX | No puede ser negativo | CAPEX anualizado no disponible |
| Monthly Fixed Charge | No puede ser negativo | Advertencia de TCO anual |
| Maintenance Rate | Entre 0 % y 100 % | Advertencia de cálculo de O&M |

</details>

---

## Otras herramientas de esta serie

- **Kit de costes de mano de obra de fabricación y planificación de capacidad** — Analiza la utilización de la mano de obra, los costes laborales, las horas extras y la capacidad de producción con un modelo operativo unificado.
- **Kit de planificación de inventario adaptativa a la demanda** — Equilibra la inversión en inventario, los plazos de los proveedores y los niveles de servicio con una planificación de reposición basada en escenarios.
- **Kit de registro de inventario para retail y fabricación** — Conecta compras, producción, movimientos de almacén y valoración de inventario en un solo libro.
- **Kit de nómina empresarial y planificación anual de capacidad de la mano de obra** — Consolida la nómina, las horas de trabajo anuales, la capacidad de personal y el presupuesto laboral entre varios departamentos.
- **Kit de operaciones de alquiler e inteligencia de vacancias** — Rastrea la ocupación, los cambios de reserva, la exposición a vacancias y el rendimiento operativo para portafolios de múltiples propiedades.

---

## Licencia

Este proyecto está licenciado bajo la **Apache License 2.0**.

Eres libre de usar, modificar y adaptar este libro para fines personales o comerciales de acuerdo con los términos de la Apache License 2.0.

Debe incluirse una copia de la licencia con cualquier redistribución u obra derivada.

---

**Si este libro ayuda a mejorar tus decisiones de inversión en energía, considera darle una ⭐ al repositorio para apoyar futuras herramientas de apoyo a decisiones.**
