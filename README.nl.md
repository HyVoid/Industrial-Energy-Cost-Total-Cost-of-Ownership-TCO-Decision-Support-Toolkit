[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# TCO-calculator voor industriële energie & Excel-sjabloon voor vergelijking van brandstofkosten (aardgas vs. LPG vs. elektriciteit vs. diesel)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/869c90a4-4548-491b-b4ae-65b7bca29c50" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-TCO%20Financial%20Model-orange)

**Een interactieve calculator voor de totale bezitskosten (TCO) van industriële energie en een Excel-spreadsheetmodel, ontworpen om aardgas, LPG, elektriciteit en diesel te vergelijken op een genormaliseerde basis van nuttige energie ($/GJ). Evalueer industriële verwarming—CAPEX, OPEX, thermisch rendement van ketels, COP van warmtepompen en bezitskosten over de levenscyclus—in één gestandaardiseerd technisch-economisch raamwerk, beschikbaar als gratis webcalculator en downloadbaar Excel-sjabloon.**

**Geen registratie. Geen installatie. Gratis te testen in uw browser.**

Gebruik de interactieve webapplicatie voor een snelle eerste selectie, of download het ontgrendelde Excel-spreadsheetmodel voor diepgaande financiële audits, het opslaan van meerdere scenario's en klantpresentaties—met een geld-terug-garantie van 30 dagen zonder vragen.

> 🌐 **Gratis webcalculator starten**  
> [Interactieve webcalculator voor industriële energiekosten & TCO (Browser-editie)](https://hyvoid.github.io/industrial-energy-tco-calculator/)
>
> 📥 **Het volledige spreadsheetmodel ophalen**  
> [Download het bewerkbare Excel-sjabloon voor TCO van industriële energie & vergelijking van brandstoffen](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)

---

## Wat het helpt volgen & beslissen: van pijnpunt naar oplossing

In plaats van rauwe nutstarieven geïsoleerd te vergelijken, volgt en lost dit technisch-economische toolkit de kritieke blinde vlekken op in evaluaties van **industriële decarbonisatie**, **ketelvervanging** en **elektrificatie van de fabriek**:

| Doel-volgmetric / pijnpunt | De veelvoorkomende analytische blinde vlek | Hoe dit TCO-model het oplost & volgt |
| :--- | :--- | :--- |
| **Genormaliseerde kosten van nuttige energie ($/GJ of $/MMBtu)** | Rauwe brandstofprijzen ($/kWh, $/Therm, $/Liter) worden vergeleken zonder correctie voor conversieverliezen. | Volgt **geleverde nuttige warmte** door het verbrandingsrendement van ketels (%) en de COP van industriële warmtepompen te betrekken. |
| **Geannualiseerde infrastructuur-CAPEX & WACC** | Kosten voor leidingaansluiting, upgrades van elektrische transformatorstations of opslagtanks worden behandeld als verzonken kosten. | Volgt de **amortisatie van CAPEX** over de levenscyclus van het actief met uw specifieke **disconteringsvoet (WACC)** via de kapitaalterugwinningfactor. |
| **Gemengde levenscyclus-OPEX & vaste nutstarieven** | Maandelijkse piekvraagkosten, meterkosten en preventieve onderhoudsschema's worden genegeerd. | Volgt zowel variabele brandstofuitgaven als vaste servicekosten van nutsbedrijven om een ware **jaarlijkse totale bezitskosten (TCO)** te produceren. |
| **Prijsgevoeligheid over brandstoffen heen & break-even-analyse** | Statische spreadsheets breken wanneer grondstofmarkten schommelen of CO2-prijzing wordt ingevoerd. | Volgt de **prijsgevoeligheid van brandstoffen over meerdere scenario's** en werkt de economische rangschikking dynamisch bij wanneer elektriciteitstarieven of gasprijzen verschuiven. |
| **Elektrificatie vs. fossiele brandstoffen** | Er wordt aangenomen dat industriële warmtepompen te duur zijn vanwege hoge elektriciteitstarieven per kWh. | Kwantificeert de exacte **trade-off tussen OPEX en CAPEX** en toont wanneer een hoge COP-efficiëntie hogere elektriciteitsprijzen en apparaatkosten compenseert. |

In plaats van te vragen:
> *"Welk brandstoftarief ziet er op papier het goedkoopst uit?"*

Dit financiële model beantwoordt de vraag waarmee belanghebbenden bij kapitaalprojecten werkelijk worden geconfronteerd:
> **"Welke industriële verwarmings- en energielossing levert de laagste risicogecorrigeerde levenscycluskosten voor ons specifieke bedrijfsprofiel van de fabriek?"**

---

## Zo voert u een analyse van industriële brandstofkosten & TCO uit (snelstartworkflow)

Auditklaire financiële en technische vergelijkingen maken kost minder dan 5 minuten. De architectuur scheidt projectinvoer, thermodynamische parameters, financiële formules en managementrapportagelagen zorgvuldig.

### Stap 1: basisparameters voor fabriek & financiën configureren
Open de module **Project Input** om de operationele en financiële randvoorwaarden van uw faciliteit vast te stellen:
- **Jaarlijkse vraag naar nuttige energie** (GJ/jaar of MMBtu/jaar)
- **Bedrijfsuren van de fabriek** (uren/jaar voor de berekening van de capaciteitsfactor)
- **Gewogen gemiddelde kapitaalkosten (WACC / disconteringsvoet %)**
- **Afschrijvingsperiode van apparatuur & amortisatieperiode van CAPEX** (jaren)

*Actie:* Test uw basiscijfers direct met de [gratis browser-TCO-calculator](https://hyvoid.github.io/industrial-energy-tco-calculator/).

---

### Stap 2: nutstarieven, apparaatefficiëntie & CAPEX-offertes invoeren
Vul de parametertabellen met uw lokale energietarieven en technische offertes van leveranciers:
- **Commerciële brandstoftarieven:** aardgasprijzen, bulk-LPG-prijzen, industriële elektriciteitstarieven en dieselbrandstofkosten.
- **Thermodynamische prestaties:** thermisch rendement van gas-/dieselketels (%) en prestatiecoëfficiënt (COP) van industriële warmtepompen.
- **Kapitaal- & vaste kosten:** investering in pijpleiding-/netinfrastructuur, maandelijkse piekvraagkosten van nutsbedrijven en jaarlijkse O&M-kosten.

*Geen formuleonderhoud vereist—alle eenheidsomrekeningen en normalisaties van calorische waarden gebeuren automatisch.*

---

### Stap 3: het geautomatiseerde TCO-dashboard & LCOH-rangschikking auditen
Schakel over naar het **Executive Summary Dashboard** om de realtime output van de technische economie te beoordelen:
- **Jaarlijks brandstofverbruik** (in native facturatie-eenheden en genormaliseerde energie-eenheden)
- **Geannualiseerde CAPEX vs. variabele OPEX-afbraak**
- **Genivelleerde warmtekosten (LCOH) / genormaliseerde kosten per Useful GJ**
- **Geautomatiseerde economische rangschikking** over aardgas, LPG, elektriciteit en diesel

---

### Stap 4: gevoeligheidsanalyse van brandstofprijzen uitvoeren & naar Excel exporteren voor herbruikbare modellering
Simuleer volatiliteit van grondstofmarkten door brandstoftarieven, WACC of CAPEX-aannames aan te passen om uw investeringsbeslissing aan een stresstest te onderwerpen.

> 💡 **Wilt u scenario's opslaan, formules aanpassen of presenteren aan de directie?**  
> Terwijl de browserversie ideaal is voor screening in één sessie, vereisen echte kapitaalprojecten iteratief auditen, teamsamenwerking en permanente documentatie.  
> 👉 **[Download hier het volledige ontgrendelde Excel-sjabloon](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)** om onbeperkte projectbaselines op te slaan, elke onderliggende celformule te auditen, bladen voor verschillende fabriekslocaties aan te passen en directieklaar diagrammen te exporteren voor uw CAPEX-goedkeuringsvoorstellen.

---

## De bedrijfslogica & methodiek

Om de communicatiekloof te overbruggen tussen **proceskunde** (die denken in kW, COP en thermisch rendement) en **corporate finance** (die denken in WACC, NPV en amortisatie van CAPEX), implementeert deze toolkit een analytische methodiek in 4 stadia:

1. **Thermodynamische energienormalisatie (de 'Nuttige GJ'-standaard):**  
   Rauwe brandstoffen worden gefactureerd in incompatibele eenheden (bijv. $/kWh voor elektriciteit, $/m³ of $/MMBtu voor aardgas, $/liter voor diesel, $/ton voor LPG). Het vergelijken van rauwe eenheidsprijzen is wiskundig onjuist omdat een gasketel met een thermisch rendement van 82% 18% van zijn ingekochte energie door de schoorsteen verliest, terwijl een industriële warmtepomp met een COP van 3.2 voor elke 1 eenheid ingekochte elektrische energie 3.2 eenheden nuttige warmte levert. Dit model past **normalisatie volgens de eerste hoofdwet van de thermodynamica** toe en zet alle brandstofinvoer om in **kosten per geleverde nuttige gigajoule ($/Nuttige GJ)** op basis van onderste verbrandingswaarden (LHV) en conversie-efficiënties van het systeem.
2. **Equivalente jaarlijkse kosten (EAC) & kapitaalterugwinningmodellering:**  
   Industriële energietransities—zoals de overstap van LPG naar een aardgaspijpleiding, of het elektrificeren van een stoomsysteem—vereisen zeer verschillende voorafgaande investeringen (CAPEX). Het simpelweg delen van CAPEX door projectjaren negeert de tijdswaarde van geld. Deze toolkit gebruikt de methode van de **kapitaalterugwinningfactor (CRF)**:
   $$\text{Annualized CAPEX} = \text{CAPEX} \times \frac{r(1+r)^n}{(1+r)^n - 1}$$
   *(waarbij $r$ de bedrijfs-WACC/disconteringsvoet is en $n$ de economische levensduur van het actief).* Dit zet eenmalige voorafgaande infrastructuurinvesteringen om in exacte equivalente jaarlijkse kosten die direct aan jaarlijkse operationele uitgaven kunnen worden toegevoegd.
3. **Volledige OPEX-kostendekking:**  
   Naast variabel brandstofverbruik dragen industriële energierekenen aanzienlijke vaste structuren—zoals elektrische piekvraagkosten, kosten voor capaciteitsreservering van gaspijpleidingen en gespecialiseerd apparaatonderhoud (bijv. branderafstemming vs. compressorrevisies). De methodiek aggregeert **geannualiseerde CAPEX + variabele brandstofkosten + vaste nutstarieven + jaarlijkse O&M** om de ware **genivelleerde warmtekosten (LCOH)** en de **jaarlijkse TCO** af te leiden.
4. **Deterministische gevoeligheids- & break-evenmatrix:**  
   Omdat industriële activa over een periode van 10 to 25 years werken, stelt een beslissing gebaseerd op spot-energieprijzen het onderneming bloot aan ernstig grondstofrisico. Het model ontkoppelt statische technische parameters van vluchtige marktvariabelen, waardoor directe **ceteris paribus-gevoeligheidstests** mogelijk zijn om exacte break-even drempels tussen concurrerende brandstoffen te identificeren.

---

## Waarom ik dit heb gebouwd: de kloof tussen techniek en financiën overbruggen

Veel investeringsbeslissingen voor industriële energie falen tijdens de beoordeling door de directie omdat belanghebbenden geïsoleerde metrieken beoordelen in plaats van één eenduidig economisch model:

- **Fabriek- & werktuigkundige ingenieurs** richten zich op het verbrandingsrendement en de COP van warmtepompen.
- **Corporate finance & CFO's** nemen voorafgaande CAPEX-drempels en WACC-disconteringsvoeten onder de loep.
- **Facility- & operationele managers** geven prioriteit aan jaarlijkse OPEX-stabiliteit en betrouwbaarheid van onderhoud.
- **Inkoopteams voor energie** richten zich puur op het onderhandelen over lagere brandstoftarieven per eenheid.

Een aardgasketel kan een laag brandstoftarief per eenheid bieden, maar vereist $500,000 aan graafwerk en CAPEX voor de pijpleidingaansluiting. Een industriële elektrische warmtepomp kan hogere nutstarieven per kWh tegenkomen, maar bereikt een COP van 3.5x die het totale energievolume drastisch verlaagt. Een LPG- of dieselsysteem kan de voorafgaande CAPEX minimaliseren, maar verliest op productieschaal voortdurend geld door hoge variabele brandstof-OPEX.

Het echte analytische knelpunt zijn niet ontbrekende gegevens—het is het gebrek aan een **gestandaardiseerd technisch-economisch raamwerk**. Ik heb dit werkboek gebouwd om elke concurrerende energiedrager te normaliseren naar één zakelijke taal: **identieke geleverde nuttige energie, identieke financiële WACC-aannames en identieke kostenstructuren over de levenscyclus.**

---

## Standaardspreadsheets vs. dit raamwerk voor TCO van industriële energie

| Evaluatiedimensie | Ad-hoc-interne spreadsheets (zonder deze tool) | Gestandaardiseerd beslissingsraamwerk voor TCO (met deze tool) |
| :--- | :--- | :--- |
| **Thermodynamische efficiëntie & COP** | Nominale brandstoftarieven ($/kWh vs. $/m³) worden direct vergeleken zonder aanpassing voor conversie-efficiëntie, wat leidt tot onjuiste kostenrangschikkingen. | Normaliseert automatisch calorische waarden, thermisch rendement van ketels (%) en COP van warmtepompen naar **kosten per geleverde nuttige GJ ($/GJ)**. |
| **Infrastructuur-CAPEX & WACC** | Voorafgaande pijpleidingconstructie, trafo-upgrades of tankinstallaties worden weggelaten uit de berekening van brandstofkosten per eenheid. | Past de **kapitaalterugwinningfactor (CRF)** toe met uw bedrijfs-WACC om CAPEX te amortiseren in equivalente jaarlijkse kosten (EAC). |
| **Afdelingsoverschrijdende afstemming** | Techniek modelleert BTU/hr in het ene blad terwijl Finance cashflow in het andere modelleert, wat leidt tot tegenstrijdige conclusies over CAPEX-voorstellen. | Verenigt thermodynamische technische parameters en financiële bedrijfsmetrics in één **auditklaire, transparante berekeningsengine**. |
| **Structuur van nutstarieven & O&M** | Vaste maandelijkse vraagkosten, kosten voor netaansluiting en differentiële onderhoudskosten worden over het hoofd gezien, waardoor OPEX met 15–30% wordt onderschat. | Betrekt **vaste servicekosten, vraagkosten en jaarlijkse O&M-schema's** naast variabel brandstofverbruik. |
| **Volatiliteit van grondstofprijzen** | Het wijzigen van één brandstofprijs of disconteringsvoet vereist het handmatig herschrijven van formules over meerdere gebroken tabbladen. | **Dynamische gevoeligheidsanalyse** herberekent levenscyclusrangschikkingen en $/GJ-break-even-punten direct wanneer marktaannames verschuiven. |
| **Investeringshorizon over de levenscyclus** | Projecten worden uitsluitend beoordeeld op operationele kosten van jaar 1 of eenvoudige terugverdientijd, waardoor 10-to-20-year kostenverplichtingen over de levenscyclus verborgen blijven. | Evalueert **brandstof, infrastructuur-CAPEX, onderhoud en financieringskosten gelijktijdig** over de hele levenscyclus van het actief. |

---

## Voor wie dit is: doelrollen & industriële toepassingen

Deze toolkit is gebouwd voor technische en commerciële professionals die een **auditklaar Excel-sjabloon of webcalculator** nodig hebben om kapitaalprojecten te rechtvaardigen zonder complexe financiële modellen vanaf nul te bouwen:

- **Adviseurs voor industriële energie & energielauditors:** Gebruik dit als **generator voor klantvoorstellen en sjabloon voor financiële analyse volgens ASHRAE Level 2/3** bij het evalueren van brandstofwisseling, elektrificatie van fabrieken of roadmaps voor thermische decarbonisatie.
- **Werktuigkundige, proces- & fabrieksingenieurs:** Gebruik dit als **calculator voor ketelvervanging en dimensionering van industriële warmtepompen** om technische efficiëntiewinsten (COP vs. verbrandingsrendement) om te zetten in CFO-klaar financiële metrieken.
- **Commerciële HVAC- & cleantech-verkoopingenieurs:** Gebruik dit als **interactieve calculator voor ROI & TCO-verkoopondersteuning** tijdens verkenende klantgesprekken om te bewijzen hoe hoogrendementige apparatuur (bijv. elektrische warmtepompen, biomassa of hoogrendementige ketels) de totale levenscycluskosten verlaagt ondanks hogere voorafgaande CAPEX.
- **Facility managers & directeuren van fabrieksoperaties:** Gebruik dit als **spreadsheet voor prognose van het energiebudget en rechtvaardiging van CAPEX** bij het plannen van retrofits van verouderde apparatuur, off-grid-conversies van LPG naar aardgas, of uitfasering van dieselgeneratoren/-ketels.
- **Financiële analisten van ondernemingen & CAPEX-controllers:** Gebruik dit als **gestandaardiseerd technisch-economisch waarderingsmodel** om claims van leveranciers te auditen, consistente WACC-hurdlerates af te dwingen en project-NPV aan een stresstest te onderwerpen tegen volatiliteit van energieprijzen.
- **EPC-aannemers & design-build-firma's:** Gebruik dit als **matrix voor technisch-commerciële vergelijking van aanbiedingen** tijdens Pre-FEED en haalbaarheidsstudies om transparante multi-optie trade-offs van levenscycluskosten te presenteren aan projecteigenaren.

---

## Veelgestelde scenario's & toepassingen voor industriële energie

Als u op zoek bent naar een betrouwbaar model om een van de volgende kapitaalprojectscenario's te evalueren, is deze toolkit voorgeconfigureerd om de berekening uit te voeren:

- **Industriële elektrificatie & decarbonisatie:** *Hoe bereken ik het TCO-break-even-punt tussen een industriële elektrische warmtepomp en een aardgas-stoom-/warmwaterketel?*
- **Analyse van off-grid-brandstofwisseling:** *Hoe is de vergelijking van de werkelijke levenscycluskosten bij de overstap van een productiefaciliteit van diesel of bulk-LPG naar aardgas via een pijpleiding, rekening houdend met CAPEX voor de pijpleiding?*
- **Modellering van genivelleerde warmtekosten (LCOH):** *Hoe normaliseer ik verschillende facturatie-eenheden voor brandstof (kWh, therms, liters, kg, GJ, MMBtu) tot één vergelijkbare metric voor een CAPEX-voorstel voor de directie?*
- **Stresstest van tarieven & CO2-prijzen:** *Bij welke prijsverhouding tussen elektriciteit en gas (Spark Gap) wordt elektrificatie van fabrieken economisch haalbaar voor continue vs. batch-productieprocessen?*

---

## Over Theseus Workshop

Ik bouw lichtgewichtige, transparante frameworks voor besluitondersteuning op basis van Excel en de browser voor operationele problemen en problemen bij kapitaalallocatie waarbij er simpelweg te veel interagerende variabelen zijn om mentaal te evalueren.

In plaats van opgeblazen enterprise-SaaS-platforms of black-box-simulatiesoftware te bouwen, focus ik me op het verpakken van herhaalbaar technisch en financiël redeneren in schone, controleerbare modellen die de kloof overbruggen tussen technische haalbaarheid en commerciële realiteit.

Het centrale ontwerpprincipe achter elke toolkit is simpel:
> **"Welke exacte gegevens moeten op één plaats worden genormaliseerd zodat de optimale kapitaalbeslissing wiskundig evident wordt?"**

---
*Keywords: TCO-calculator industriële energie, Excel-sjabloon voor vergelijking van brandstofkosten, spreadsheet genivelleerde warmtekosten (LCOH), ROI-model ketel vs. warmtepomp, calculator kosten aardgas vs. LPG vs. elektriciteit, sjabloon technische economie CAPEX OPEX.*

---

## Technische details

<details>
<summary><strong>Voor technische reviewers, Excel-beoefenaars en medewerkers</strong></summary>

## Werkboekarchitectuur

Het werkboek volgt een gelaagde architectuur die gegevensinvoer, technische aannames, berekeningslogica en managementrapportage scheidt. Deze scheiding minimaliseert formuleonderhoud terwijl elke berekening traceerbaar blijft naar één enkele bron van waarheid.

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

| Laag | Primaire bladen | Verantwoordelijkheid |
|--------|-------------------|----------------|
| Navigatie | Home | Gebruikersbegeleiding en workflow |
| Invoerlaag | Project Input | Projectspecifieke operationele aannames |
| Parameterlaag | Fuel Assumptions, Infrastructure Assumptions | Technische en financiële aannames op één plek onderhouden |
| Berekeningslaag | Calculation Engine | Omzetting van nuttige energie, jaarlijks brandstofverbruik, TCO, genormaliseerde kosten |
| Analyselaag | Sensitivity | Testen van marktscenario's en veranderingen in rangschikking |
| Presentatielaag | Dashboard | Besluitondersteuning voor de directie |
| Governancelaag | Assumption Register, User Guide | Controleerbaarheid en bedrijfsprocedures |

### Informatiestroming

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

Elke downstream-berekening verwijst naar upstream-parameterbladen in plaats van hard-gecodeerde constanten. Als gevolg daarvan werkt het bijwerken van een brandstofprijs, apparaatefficiëntie, disconteringsvoet of infrastructuurinvestering automatisch elke afhankelijke berekening in het hele werkboek bij.

---

## Drie valkuilen die zelfs ervaren energie-analisten vangen

### Valkuil 1 — brandstofprijzen vergelijken in plaats van geleverde nuttige energie

Een inkoopbeslissing wordt genomen omdat aardgas goedkoper lijkt dan elektriciteit op basis van prijs per eenheid.

Helaas zijn die eenheden niet direct vergelijkbaar.

Aardgas, LPG, diesel en elektriciteit gebruiken allemaal verschillende fysieke meetsystemen en verschillende conversie-efficiënties.

Het alleen vergelijken van inkoopprijzen negeert de hoeveelheid nuttige energie die werkelijk aan het proces wordt geleverd.

| Vergelijking | Onjuiste benadering | Juiste benadering |
|------------|-------------------|------------------|
| Primaire metric | Brandstofprijs | Kosten per Useful GJ |
| Prestaties van apparatuur | Genegeerd | Efficiëntie en COP inbegrepen |
| Resultaat | Misleidende rangschikking | Vergelijkbare economische basis |

Het werkboek zet eerst elke optie om in identieke nuttige-energie-output voordat een financiële vergelijking begint.

Dit zorgt ervoor dat concurrerende technologieën worden geëvalueerd op equivalente thermische prestaties in plaats van op incompatibele inkoopeenheden.

<details>
<summary>Formulelogica</summary>

Vraag naar nuttige energie

↓

Vereiste fysieke brandstof

↓

Apparaatefficiëntie

↓

Jaarlijks brandstofverbruik

↓

Jaarlijkse brandstofkosten

</details>

---

### Valkuil 2 — infrastructuurinvestering negeren

Een projectaanbeveling wordt gedaan met alleen jaarlijkse operationele kosten.

Maanden later onthult het implementatiebudget dat één optie aanzienlijke elektrische upgrades, installatie van een gaspijpleiding, drukregelapparatuur of opslaginfrastructuur vereist.

De oorspronkelijke aanbeveling wordt plotseling financieel onaantrekkelijk.

Door infrastructuurinvestering direct op te nemen in de bezitskosten over de levenscyclus, voorkomt het werkboek dat kapitaaluitgaven een nabeschouwing worden.

In plaats van te vragen

> "Welke optie heeft de laagste operationele kosten?"

vraagt het model

> "Welke optie kost in de loop van de tijd het minst om te bezitten?"

De gecorrigeerde aanbeveling omvat:

- Infrastructuur-CAPEX
- Jaarlijks onderhoud
- Kapitaalterugwinning
- Vaste nutskosten
- Brandstofuitgaven

Pas nadat deze componenten zijn gecombineerd, kunnen twee technisch haalbare oplossingen eerlijk worden vergeleken.

<details>
<summary>Formulelogica</summary>

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

### Valkuil 3 — aannemen dat de energieprijzen van vandaag constant blijven

Veel investeringsbeslissingen worden goedgekeurd met de marktprijzen van vandaag alsof ze de komende tien of vijftien jaar vertegenwoordigen.

Energiemarkten gedragen zich zelden zo.

Aardgasprijzen fluctueren.

Elektriciteitstarieven veranderen.

Dieselprijzen reageren op wereldwijde aanbodstoringen.

LPG-markten variëren aanzienlijk per regio.

Een aanbeveling die vandaag optimaal lijkt, kan na slechts een bescheiden prijsbeweging de op één na of op twee na beste optie worden.

In plaats van één enkel 'beste antwoord' te presenteren, evalueert het werkboek hoe robuust elke oplossing blijft onder veranderende aannames.

| Scenario | Traditioneel spreadsheet | Dit werkboek |
|-----------|------------------------|---------------|
| Veranderingen in brandstofprijs | Handmatig opnieuw opbouwen | Automatische herberekening |
| Revisie van CAPEX | Meerdere formules handmatig bijgewerkt | Centrale parameterupdate |
| Vergelijking van rangschikking | Moeilijk | Automatisch |
| Evaluatie van scenario's | Eén geval per keer | Meerdere vergelijkbare scenario's |

Commerciële beslissingen worden aanzienlijk betrouwbaarder omdat belanghebbenden kunnen zien **of een aanbeveling optimaal blijft onder realistische marktonzekerheid**, in plaats van alleen onder de aannames van vandaag.

<details>
<summary>Formulelogica</summary>

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

## Voorbeeldscenario

Een voedselproductiefaciliteit is van plan om zijn verouderde stoomopwekingssysteem te vervangen.

Het technische team identificeert vier technisch haalbare alternatieven:

- Aardgasketel
- LPG-ketel
- Elektrische warmtepomp
- Dieselketel

Het project vereist ongeveer **18,000 Useful GJ** jaarlijkse thermische energie, werkt **5,200 uur per jaar** en gebruikt een **disconteringsvoet van 8%** met een **kapitaalterugwinningstermijn van 15-year**.

Door alleen naar brandstofprijzen te kijken, geeft het inkoopteam aanvankelijk de voorkeur aan aardgas omdat het de laagste brandstofkosten per eenheid heeft.

Echter, zodra de projectaannames in het werkboek zijn ingevoerd, evalueert de berekeningsengine veel meer dan brandstofuitgaven.

Het model bepaalt automatisch:

- Vereist fysiek brandstofverbruik na verrekening van apparaatefficiëntie.
- Jaarlijkse kosten voor brandstofinkoop.
- Maandelijkse vaste netwerkkosten.
- Vereiste infrastructuurinvestering.
- Jaarlijkse onderhoudsuitgaven.
- Geannualiseerde infrastructuurkosten met de gekozen disconteringsvoet.
- Totale jaarlijkse bezitskosten.
- Genormaliseerde kosten per Useful GJ.
- Algehele economische rangschikking.

De analyse onthult dat hoewel de elektrische warmtepomp duurdere energie inkoopt, de aanzienlijk hogere COP het vereiste energieverbruik voldoende verlaagt om zowel elektriciteitsprijzen als hogere infrastructuurkosten te compenseren.

Ondertussen vereist de dieseloptie relatief weinig infrastructuurinvestering maar wordt de duurste oplossing zodra jaarlijkse operationele kosten worden meegenomen.

In plaats van verschillende losgekoppelde technische berekeningen te presenteren, produceert het werkboek één commerciële vergelijking waarin elk alternatief wordt geëvalueerd met identieke aannames en financiële methodiek.

Beslissers kunnen daarom aanbevelingen rechtvaardigen met levenscyclus-economie in plaats van geïsoleerde kostencomponenten.

---

## Formulereferentie

<details>
<summary>Project Input Sheet</summary>

| Formule | Doel |
|---------|----------|
| IF | Eenheidsomzetting tussen MWh en Useful GJ |
| Data Validation | Integriteit van invoer |
| Named Ranges | Centraal parametermanagement |

</details>

<details>
<summary>Fuel Assumptions</summary>

| Formule | Doel |
|---------|----------|
| MAP() | Elk brandstoftype dynamisch evalueren |
| LAMBDA() | Identieke conversielogica toepassen |
| IF() | Verbrandingsefficiëntie scheiden van berekeningen van COP van warmtepompen |

</details>

<details>
<summary>Infrastructure Assumptions</summary>

| Formule | Doel |
|---------|----------|
| BYROW() | Infrastructuurinvestering per technologie aggregeren |
| SUM() | Consolidatie van CAPEX |
| Dynamic Arrays | Automatische uitbreiding bij toevoeging van nieuwe technologieën |

</details>

<details>
<summary>Calculation Engine</summary>

| Formule | Doel |
|---------|----------|
| MAP() | Jaarlijks fysiek brandstofverbruik |
| PMT() | Geannualiseerde infrastructuurinvestering |
| Dynamic Arrays | Berekeningen van jaarlijkse operationele kosten |
| RANK.EQ() | Automatische economische rangschikking |
| Array Arithmetic | Genormaliseerde kosten per Useful GJ |

</details>

<details>
<summary>Sensitivity Analysis</summary>

| Formule | Doel |
|---------|----------|
| Dynamic Arrays | Generatie van de scenariomatrix |
| Parameter References | Centrale updates van aannames |
| Ranking Functions | Analyse van de stabiliteit van aanbevelingen |

</details>

## Validatieregels

| Veld | Validatieregel | Foutgedrag |
|-------|-----------------|----------------|
| Annual Useful Energy | Moet groter zijn dan nul | Berekening geblokkeerd |
| Operating Hours | Positieve numerieke waarde | Waarschuwing weergegeven |
| Discount Rate | 0–100% | Ongeldig percentage afgewezen |
| Amortization Period | Positief geheel getal | Annualisering uitgeschakeld tot correctie |
| Fuel Price | Mag niet negatief zijn | Kostenberekeningen opgeschort |
| Equipment Efficiency | Tussen 0% en 100% | Validatiewaarschuwing |
| Heat Pump COP | Groter dan nul | Elektriciteitsberekeningen voorkomen |
| Infrastructure CAPEX | Mag niet negatief zijn | Geannualiseerde CAPEX niet beschikbaar |
| Monthly Fixed Charge | Mag niet negatief zijn | Waarschuwing jaarlijkse TCO |
| Maintenance Rate | Tussen 0% en 100% | Waarschuwing O&M-berekening |

</details>

---

## Andere tools in deze serie

- **Toolkit voor productie-arbeidskosten & capaciteitsplanning** — Analyseer gebruik van personeel, arbeidskosten, overuren en productiecapaciteit met één geünificeerd operationeel model.
- **Toolkit voor vraagadaptieve voorraadplanning** — Balanceer voorraadinvestering, levertermijnen van leveranciers en serviceniveaus met scenariogebaseerde aanvulplanning.
- **Toolkit voor voorraadregister voor retail & productie** — Verbind inkoop, productie, magazijnbewegingen en voorraadwaardering in één enkel werkboek.
- **Toolkit voor ondernemingspayroll & jaarlijkse capaciteitsplanning van personeel** — Consolideer payroll, jaarlijkse werkuren, personeelscapaciteit en arbeidsbudget over meerdere afdelingen heen.
- **Toolkit voor verhuuroperaties & vacantie-intelligentie** — Volg bezettingsgraad, boekingsveranderingen, vacantierisico en operationele prestaties voor portefeuilles met meerdere objecten.

---

## Licentie

Dit project is gelicentieerd onder de **Apache License 2.0**.

U bent vrij om dit werkboek voor persoonlijke of commerciële doeleinden te gebruiken, te wijzigen en aan te passen in overeenstemming met de voorwaarden van de Apache License 2.0.

Een kopie van de licentie moet worden meegeleverd bij elke herverdeling of afgeleid werk.

---

**Als dit werkboek helpt uw investeringsbeslissingen op het gebied van energie te verbeteren, overweeg dan om het repository een ⭐ te geven ter ondersteuning van toekomstige beslissingsondersteuningstools.**
