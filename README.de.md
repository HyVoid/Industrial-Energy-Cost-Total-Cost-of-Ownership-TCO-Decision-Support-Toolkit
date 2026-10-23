[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Industrieenergie-TCO-Rechner & Excel-Vorlage zum Vergleich von Brennstoffkosten (Erdgas vs. Flüssiggas (LPG) vs. Strom vs. Diesel)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/869c90a4-4548-491b-b4ae-65b7bca29c50" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-TCO%20Financial%20Model-orange)

**Ein interaktiver Industrieenergie-Rechner für Gesamtbetriebskosten (TCO) und Excel-Tabellenmodell, entwickelt für den Vergleich von Erdgas, Flüssiggas (LPG), Strom und Diesel auf einer normalisierten Nutzenergie-Basis ($/GJ). Bewerten Sie industrielles Heizen—CAPEX, OPEX, Kessel-Wärmewirkungsgrad, Wärmepumpen-COP und Lebenszyklus-Besitzkosten—in einem einheitlichen ingenieurökonomischen Rahmen, verfügbar als kostenloser Web-Rechner und herunterladbare Excel-Vorlage.**

**Keine Registrierung. Keine Installation. Kostenlos in Ihrem Browser testbar.**

Nutzen Sie die interaktive Webanwendung für eine schnelle Erstbewertung, oder laden Sie das freigeschaltete Excel-Tabellenmodell herunter für tiefgehende Finanzprüfungen, die Speicherung mehrerer Szenarien und Kundenpräsentationen—unterstützt durch eine 30-tägige Geld-zurück-Garantie ohne Rückfragen.

> 🌐 **Kostenlosen Web-Rechner starten**  
> [Interaktiver Industrieenergie-Kosten- & TCO-Web-Rechner (Browser-Edition)](https://hyvoid.github.io/industrial-energy-tco-calculator/)
>
> 📥 **Vollständiges Tabellenmodell holen**  
> [Bearbeitbare Industrieenergie-TCO- & Brennstoffvergleichs-Excel-Vorlage herunterladen](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)

---

## Was es verfolgt & entscheidbar macht: Von Problemstellungen zu Lösungen

Anstatt Rohpreise der Energieversorger isoliert zu vergleichen, verfolgt und löst dieses ingenieurökonomische Toolkit die kritischen blinden Flecken in Bewertungen zur **industriellen Dekarbonisierung**, **Kesselersetzung** und **Betriebselektrifizierung**:

| Ziel-Verfolgungskennzahl / Problemstellung | Der häufige analytische blinde Fleck | Wie dieses TCO-Modell es löst & verfolgt |
| :--- | :--- | :--- |
| **Normalisierte Nutzenergiekosten ($/GJ oder $/MMBtu)** | Rohe Brennstoffpreise ($/kWh, $/Therm, $/Liter) werden verglichen, ohne Umwandlungsverluste zu berücksichtigen. | Verfolgt **gelieferte Nutzwärme** durch Einbeziehung des Verbrennungswirkungsgrades von Kesseln (%) und des COP industrieller Wärmepumpen. |
| **Annualisierte Infrastruktur-CAPEX & WACC** | Netzanschlussgebühren, elektrische Umspannwerk-Upgrades oder Lagertanks werden als versunkene Kosten behandelt. | Verfolgt die **CAPEX-Amortisation** über den Anlagenlebenszyklus mit Ihrem spezifischen **Abzinsungssatz (WACC)** über den Kapitalrückgewinnungsfaktor. |
| **Gemischte Lebenszyklus-OPEX & feste Versorgungstarife** | Monatliche Spitzenlastgebühren, Zählergebühren und präventive Wartungspläne werden ignoriert. | Verfolgt sowohl variable Brennstoffausgaben als auch feste Versorgungsservicegebühren, um eine echte **jährliche Gesamtbetriebskosten (TCO)** auszuweisen. |
| **Brennstoffübergreifende Preissensitivität & Break-even-Analyse** | Statische Tabellen brechen, wenn Rohstoffmärkte schwanken oder CO2-Bepreisung eingeführt wird. | Verfolgt die **Sensitivität der Brennstoffpreise über mehrere Szenarien** und aktualisiert das wirtschaftliche Ranking dynamisch, wenn sich Stromtarife oder Gaspreise verschieben. |
| **Elektrifizierung vs. fossile Brennstoffe** | Es wird angenommen, dass industrielle Wärmepumpen aufgrund hoher Stromtarife pro kWh zu teuer sind. | Quantifiziert den genauen **OPEX-zu-CAPEX-Trade-off** und zeigt, wann hohe COP-Effizienz höhere Strompreise und Gerätekosten ausgleicht. |

Anstatt zu fragen:
> *"Welcher Brennstofftarif sieht auf dem Papier am günstigsten aus?"*

Dieses Finanzmodell beantwortet die Frage, vor der Beteiligte an Investitionsprojekten tatsächlich stehen:
> **"Welche industrielle Heiz- und Energielösung liefert die niedrigsten risikoadjustierten Lebenszykluskosten für unser spezifisches Anlagenbetriebsprofil?"**

---

## So führen Sie eine industrielle Brennstoffkosten- & TCO-Analyse durch (Schnellstart-Ablauf)

Prüfungsfertige Finanz- und Technikvergleiche dauern weniger als 5 Minuten. Die Architektur trennt sauber Projekteingaben, thermodynamische Parameter, Finanzformeln und Management-Berichtsebenen.

### Schritt 1: Anlagen- & Finanz-Basisparameter konfigurieren
Öffnen Sie das Modul **Project Input**, um die betrieblichen und finanziellen Randbedingungen Ihrer Anlage festzulegen:
- **Jährlicher Nutzenergiebedarf** (GJ/Jahr oder MMBtu/Jahr)
- **Anlagenbetriebsstunden** (Stunden/Jahr für die Kapazitätsfaktorberechnung)
- **Gewichtete durchschnittliche Kapitalkosten (WACC / Abzinsungssatz %)**
- **Geräteabschreibung & CAPEX-Amortisationsdauer** (Jahre)

*Aktion:* Testen Sie Ihre Basiszahlen sofort mit dem [kostenlosen Browser-TCO-Rechner](https://hyvoid.github.io/industrial-energy-tco-calculator/).

---

### Schritt 2: Versorgungstarife, Geräteeffizienz & CAPEX-Angebote eingeben
Füllen Sie die Parametertabellen mit Ihren lokalen Versorgungspreisen und technischen Anbieterangeboten:
- **Kommerzielle Brennstofftarife:** Erdgaspreise, Bulk-Flüssiggaspreise, industrielle Stromtarife und Dieselkraftstoffkosten.
- **Thermodynamische Leistung:** Wärmewirkungsgrad von Gas-/Dieselkesseln (%) und Leistungszahl (COP) industrieller Wärmepumpen.
- **Kapital- & Fixkosten:** Pipeline-/Netzinfrastrukturinvestition, monatliche Versorgungsleistungsgebühren und jährliche O&M-Kosten.

*Keine Formelpflege erforderlich—alle Einheitenumrechnungen und Heizwertnormalisierungen erfolgen automatisch.*

---

### Schritt 3: Automatisiertes TCO-Dashboard & LCOH-Ranking prüfen
Wechseln Sie zum **Executive Summary Dashboard**, um die Echtzeit-Ausgabe der Ingenieurökonomie zu prüfen:
- **Jährlicher Brennstoffverbrauch** (in nativen Abrechnungseinheiten und normalisierten Energieeinheiten)
- **Annualisiertes CAPEX vs. variable OPEX-Aufschlüsselung**
- **Wärmegestehungskosten (LCOH) / normalisierte Kosten pro Useful GJ**
- **Automatisiertes wirtschaftliches Ranking** über Erdgas, Flüssiggas (LPG), Strom und Diesel

---

### Schritt 4: Sensitivitätsanalyse der Brennstoffpreise durchführen & für wiederverwendbare Modellierung nach Excel exportieren
Simulieren Sie Rohstoffmarktvolatilität, indem Sie Brennstofftarife, WACC oder CAPEX-Annahmen anpassen, um Ihre Investitionsentscheidung einem Stresstest zu unterziehen.

> 💡 **Müssen Sie Szenarien speichern, Formeln anpassen oder dem Vorstand präsentieren?**  
> Während die Browser-Version ideal für ein einmaliges Screening ist, erfordern reale Investitionsprojekte iterative Prüfungen, Teamzusammenarbeit und dauerhafte Dokumentation.  
> 👉 **[Laden Sie hier die vollständige freigeschaltete Excel-Vorlage herunter](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)**, um unbegrenzte Projekt-Baselines zu speichern, jede zugrunde liegende Zellenformel zu prüfen, Blätter für verschiedene Anlagenstandorte anzupassen und vorstandsfertige Diagramme für Ihre CAPEX-Genehmigungsvorschläge zu exportieren.

---

## Die Geschäftslogik & Methodik

Um die Kommunikationslücke zwischen **Prozessingenieurwesen** (die in kW, COP und Wärmewirkungsgrad denken) und **Unternehmensfinanzierung** (die in WACC, NPV und CAPEX-Amortisation denken) zu überbrücken, implementiert dieses Toolkit eine 4-stufige analytische Methodik:

1. **Thermodynamische Energienormierung (der „Nutz-GJ“-Standard):**  
   Rohe Brennstoffe werden in inkompatiblen Einheiten abgerechnet (z. B. $/kWh für Strom, $/m³ oder $/MMBtu für Erdgas, $/liter für Diesel, $/ton für LPG). Der Vergleich roher Einheitenpreise ist mathematisch fehlerhaft, weil ein Gaskessel mit 82% Wärmewirkungsgrad 18% seiner eingekauften Energie über den Schornstein verliert, während eine industrielle Wärmepumpe mit einer COP von 3.2 für jede 1 Einheit eingekaufter elektrischer Energie 3.2 Einheiten Nutzwärme liefert. Dieses Modell wendet **Normierung nach dem ersten Hauptsatz der Thermodynamik** an und wandelt alle Brennstoffeingaben in **Kosten pro geliefertem Nutz-Gigajoule ($/Nutz-GJ)** auf Basis unterer Heizwerte (LHV) und Systemumwandlungswirkungsgrade um.
2. **Äquivalente jährliche Kosten (EAC) & Kapitalrückgewinnungsmodellierung:**  
   Industrielle Energietransitionen—wie der Wechsel von LPG zu einer Erdgas-Pipeline oder die Elektrifizierung eines Dampfsystems—erfordern sehr unterschiedliche vorab anfallende Investitionsaufwendungen (CAPEX). Die einfache Division von CAPEX durch Projektjahre ignoriert den Zeitwert des Geldes. Dieses Toolkit nutzt die Methode des **Kapitalrückgewinnungsfaktors (CRF)**:
   $$\text{Annualized CAPEX} = \text{CAPEX} \times \frac{r(1+r)^n}{(1+r)^n - 1}$$
   *(wobei $r$ die unternehmensspezifische WACC bzw. der Abzinsungssatz und $n$ die wirtschaftliche Nutzungsdauer der Anlage ist).* Dies wandelt einmalige vorab anfallende Infrastrukturinvestitionen in exakte äquivalente jährliche Kosten um, die direkt zu den jährlichen Betriebsausgaben addiert werden können.
3. **Vollständige OPEX-Kostenabsorption:**  
   Über den variablen Brennstoffverbrauch hinaus enthalten industrielle Versorgungsrechnungen erhebliche feste Kostenstrukturen—wie elektrische Spitzenlastgebühren, Gaspipeline-Kapazitätsreservierungsgebühren und spezialisierte Gerätewartung (z. B. Brennerabstimmung vs. Kompressorüberholung). Die Methodik aggregiert **annualisiertes CAPEX + variable Brennstoffkosten + feste Versorgungstarife + jährliche O&M**, um die echten **Wärmegestehungskosten (LCOH)** und die **jährliche TCO** abzuleiten.
4. **Deterministische Sensitivitäts- & Break-even-Matrix:**  
   Weil Industrieanlagen über einen Zeitraum von 10 to 25 years betrieben werden, setzt eine auf Spot-Energiepreisen basierende Entscheidung das Unternehmen einem schweren Rohstoffrisiko aus. Das Modell entkoppelt statische Technikparameter von volatilen Marktvariablen und ermöglicht sofortiges **Ceteris-paribus-Sensitivitätstesting**, um exakte Preis-Break-even-Schwellen zwischen konkurrierenden Brennstoffen zu identifizieren.

---

## Warum ich dies gebaut habe: Überbrückung der Technik-Finanz-Lücke

Viele industrielle Energieinvestitionsentscheidungen scheitern in der Management-Prüfung, weil Beteiligte isolierte Kennzahlen bewerten anstelle eines einheitlichen Wirtschaftlichkeitsmodells:

- **Anlagen- & Maschinenbauingenieure** konzentrieren sich auf den Verbrennungswärmewirkungsgrad und Wärmepumpen-COP.
- **Unternehmensfinanzierung & CFOs** hinterfragen anfängliche CAPEX-Hürden und WACC-Abzinsungssätze.
- **Anlagen- & Betriebsleiter** priorisieren jährliche OPEX-Stabilität und Wartungszuverlässigkeit.
- **Energiebeschaffungsteams** konzentrieren sich rein auf die Verhandlung niedrigerer Brennstofftarife pro Einheit.

Ein Erdgaskessel mag einen niedrigen Brennstofftarif pro Einheit bieten, erfordert aber $500,000 an Grabarbeiten und Pipelineanschluss-CAPEX. Eine industrielle elektrische Wärmepumpe mag höheren Versorgungstarifen pro kWh gegenüberstehen, erreicht aber eine 3.5x COP, die das gesamte Energievolumen drastisch senkt. Ein LPG- oder Dieselsystem mag die anfänglichen CAPEX minimieren, verliert aber durch hohe variable Brennstoff-OPEX auf Produktionsskala laufend Bargeld.

Der eigentliche analytische Engpass sind nicht fehlende Daten—es ist das Fehlen eines **standardisierten ingenieurökonomischen Rahmens**. Ich baute diese Arbeitsmappe, um jeden konkurrierenden Energievektor in eine einzige Geschäftssprache zu normalisieren: **identische gelieferte Nutzenergie, identische WACC-Finanzannahmen und identische Lebenszyklus-Kostenstrukturen.**

---

## Standard-Tabellen vs. dieses Industrieenergie-TCO-Rahmenwerk

| Bewertungsdimension | Ad-hoc-interne Tabellen (ohne dieses Werkzeug) | Standardisiertes TCO-Entscheidungsrahmenwerk (mit diesem Werkzeug) |
| :--- | :--- | :--- |
| **Thermodynamische Effizienz & COP** | Nominale Brennstofftarife ($/kWh vs. $/m³) werden direkt verglichen, ohne Anpassung an die Umwandlungseffizienz, was zu falschen Kostenrankings führt. | Normalisiert automatisch Heizwerte, Kessel-Wärmewirkungsgrad (%) und Wärmepumpen-COP zu **Kosten pro geliefertem Nutz-GJ ($/GJ)**. |
| **Infrastruktur-CAPEX & WACC** | Vorab anfallender Pipelinebau, Transformator-Upgrades oder Tankinstallationen werden aus den Brennstoffkostenberechnungen pro Einheit weggelassen. | Wendet den **Kapitalrückgewinnungsfaktor (CRF)** mit Ihrer unternehmensspezifischen WACC an, um CAPEX in äquivalente jährliche Kosten (EAC) zu amortisieren. |
| **Abteilungsübergreifende Ausrichtung** | Technik modelliert BTU/hr in einem Blatt, während Finanzen Cashflows in einem anderen modellieren, was zu widersprüchlichen CAPEX-Vorschlagsfolgerungen führt. | Vereinigt thermodynamische Technikparameter und Unternehmensfinanzkennzahlen in einer **prüfungsfertigen, transparenten Berechnungs-Engine**. |
| **Struktur der Versorgungstarife & O&M** | Feste monatliche Leistungsgebühren, Netzanschlussgebühren und differentielle Wartungskosten werden übersehen, wodurch OPEX um 15–30% unterschätzt wird. | Bezieht **feste Servicegebühren, Leistungsgebühren und jährliche O&M-Pläne** neben variablem Brennstoffverbrauch ein. |
| **Rohstoffpreisvolatilität** | Die Änderung eines einzelnen Brennstoffpreises oder Abzinsungssatzes erfordert das manuelle Neuschreiben von Formeln über mehrere defekte Registerkarten. | **Dynamische Sensitivitätsanalyse** berechnet Lebenszyklusrankings und $/GJ-Break-even-Punkte sofort neu, wenn Marktannahmen sich verschieben. |
| **Lebenszyklus-Investitionshorizont** | Projekte werden ausschließlich nach Betriebskosten des ersten Jahres oder einfacher Payback-Rechnung bewertet, wodurch 10-to-20-year Lebenszyklus-Kostenrisiken verborgen bleiben. | Bewertet **Brennstoff, Infrastruktur-CAPEX, Wartung und Finanzierungskosten gleichzeitig** über den gesamten Anlagenlebenszyklus. |

---

## Für wen dies ist: Zielrollen & industrielle Anwendungsfälle

Dieses Toolkit ist für technische und kommerzielle Fachleute gebaut, die eine **prüfungsfertige Excel-Vorlage oder einen Web-Rechner** benötigen, um Investitionsprojekte zu rechtfertigen, ohne komplexe Finanzmodelle von Grund auf zu bauen:

- **Industrie-Energieberater & Energieauditoren:** Nutzen Sie dies als **Kundenangebots-Generator und ASHRAE Level 2/3 Finanzanalyse-Vorlage** bei der Bewertung von Brennstoffwechsel, Betriebselektrifizierung oder thermischen Dekarbonisierungs-Roadmaps.
- **Maschinenbau-, Prozess- & Anlageningenieure:** Nutzen Sie dies als **Kesselersetzung- und industriellen Wärmepumpen-Dimensionierungsrechner**, um thermodynamische Effizienzgewinne (COP vs. Verbrennungswirkungsgrad) in CFO-fertige Finanzkennzahlen zu übersetzen.
- **Kommerzielle HVAC- & Cleantech-Vertriebsingenieure:** Nutzen Sie dies als **interaktiven ROI- & TCO-Vertriebsunterstützungsrechner** während Kunden-Discovery-Calls, um zu beweisen, wie hocheffiziente Geräte (z. B. elektrische Wärmepumpen, Biomasse oder hocheffiziente Kessel) die Gesamtlebenszykluskosten trotz höherer anfänglicher CAPEX senken.
- **Anlagenleiter & Betriebsdirektoren:** Nutzen Sie dies als **Versorgungsbudget-Prognose- und CAPEX-Begründungs-Tabelle** bei der Planung von Retrofits alternder Geräte, Off-Grid-LPG-zu-Erdgas-Umstellungen oder Dieselgenerator-/-Kessel-Ausphasungen.
- **Unternehmensfinanzanalysten & CAPEX-Controller:** Nutzen Sie dies als **standardisiertes ingenieurökonomisches Bewertungsmodell**, um Anbieterangaben zu prüfen, konsequente WACC-Hürdelsätze durchzusetzen und Projekt-NPV gegen Energiepreisvolatilität einem Stresstest zu unterziehen.
- **EPC-Auftragnehmer & Design-Build-Firmen:** Nutzen Sie dies als **technisch-kommerzielle Angebotsvergleichsmatrix** während Pre-FEED und Machbarkeitsstudien, um transparente Mehroptionen-Lebenszyklus-Kostentrade-offs für Projekteigner zu präsentieren.

---

## Häufig gestellte industrielle Energieszenarien & Anwendungsfälle

Wenn Sie ein zuverlässiges Modell suchen, um eines der folgenden Investitionsprojektszenarien zu bewerten, ist dieses Toolkit vorkonfiguriert, um die Mathematik zu handhaben:

- **Industrielle Elektrifizierung & Dekarbonisierung:** *Wie berechne ich den TCO-Break-even-Punkt zwischen einer industriellen elektrischen Wärmepumpe und einem Erdgas-Dampf-/Heißwasserkessel?*
- **Off-Grid-Brennstoffwechsel-Analyse:** *Wie ist der echte Lebenszykluskostenvergleich beim Wechsel einer Fertigungsanlage von Diesel oder Bulk-LPG zu pipelinem Erdgas, unter Einbeziehung des Pipeline-CAPEX?*
- **Wärmegestehungskosten (LCOH)-Modellierung:** *Wie normalisiere ich verschiedene Brennstoff-Abrechnungseinheiten (kWh, Therms, Liter, kg, GJ, MMBtu) in eine einzige vergleichbare Kennzahl für einen Management-CAPEX-Vorschlag?*
- **Tarif- & CO2-Preis-Stresstesting:** *Bei welchem Strom-zu-Gas-Preisverhältnis (Spark Gap) wird die Betriebselektrifizierung für kontinuierliche vs. Batch-Fertigungsprozesse wirtschaftlich sinnvoll?*

---

## Über Theseus Workshop

Ich baue leichtgewichtige, transparente Excel- und browserbasierte Entscheidungsunterstützungsrahmen für betriebliche und Kapitalallokationsprobleme, bei denen es zu viele interagierende Variablen gibt, um sie mental zu bewerten.

Anstatt aufgeblähte Unternehmens-SaaS-Plattformen oder Blackbox-Simulationssoftware zu bauen, konzentriere ich mich darauf, wiederholbares ingenieurtechnisches und finanzielles Denken in saubere, prüffähige Modelle zu verpacken, die die Lücke zwischen technischer Machbarkeit und kommerzieller Realität überbrücken.

Das zentrale Designprinzip hinter jedem Toolkit ist einfach:
> **"Welche exakten Daten müssen an einem Ort normalisiert werden, damit die optimale Kapitalentscheidung mathematisch offensichtlich wird?"**

---
*Keywords: Industrieenergie-TCO-Rechner, Excel-Vorlage zum Brennstoffkostenvergleich, Wärmegestehungskosten (LCOH)-Tabelle, Kessel vs. Wärmepumpe ROI-Modell, Erdgas vs. LPG vs. Strom Kostenrechner, Ingenieurökonomie CAPEX OPEX Vorlage.*

---

## Technische Details

<details>
<summary><strong>Für technische Prüfer, Excel-Praktiker und Mitarbeiter</strong></summary>

## Arbeitsmappen-Architektur

Die Arbeitsmappe folgt einer Schichtarchitektur, die Dateneingabe, technische Annahmen, Berechnungslogik und Management-Berichtswesen trennt. Diese Trennung minimiert Formelpflege, während jede Berechnung bis zu einer einzigen maßgeblichen Quelle nachverfolgbar bleibt.

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

| Ebene | Primäre Arbeitsblätter | Verantwortlichkeit |
|--------|-------------------|----------------|
| Navigation | Home | Nutzerführung und Ablauf |
| Eingabe-Ebene | Project Input | Projektspezifische Betriebsannahmen |
| Parameter-Ebene | Fuel Assumptions, Infrastructure Assumptions | Technische und finanzielle Annahmen an einem Ort gepflegt |
| Berechnungs-Ebene | Calculation Engine | Nutzenergie-Umrechnung, jährlicher Brennstoffverbrauch, TCO, normalisierte Kosten |
| Analyse-Ebene | Sensitivity | Tests von Marktszenarien und Ranking-Veränderungen |
| Darstellungs-Ebene | Dashboard | Entscheidungsunterstützung für das Management |
| Governance-Ebene | Assumption Register, User Guide | Prüfbarkeit und Betriebsverfahren |

### Informationsfluss

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

Jede nachgelagerte Berechnung referenziert vorgelagerte Parameterblätter anstelle hartcodierter Konstanten. Als Ergebnis aktualisiert die Änderung eines Brennstoffpreises, einer Geräteeffizienz, eines Abzinsungssatzes oder einer Infrastrukturinvestition automatisch jede abhängige Berechnung in der gesamten Arbeitsmappe.

---

## Drei Fallen, die auch erfahrene Energieanalysten fangen

### Falle 1 — Brennstoffpreise vergleichen anstelle gelieferter Nutzenergie

Eine Kaufentscheidung wird getroffen, weil Erdgas auf Preis-pro-Einheit-Basis günstiger erscheint als Strom.

Leider sind diese Einheiten nicht direkt vergleichbar.

Erdgas, LPG, Diesel und Strom verwenden alle unterschiedliche physische Messsysteme und unterschiedliche Umwandlungswirkungsgrade.

Der Vergleich nur der Beschaffungspreise ignoriert die Menge der tatsächlich an den Prozess gelieferten Nutzenergie.

| Vergleich | Falscher Ansatz | Richtiger Ansatz |
|------------|-------------------|------------------|
| Primäre Kennzahl | Brennstoffpreis | Kosten pro Useful GJ |
| Geräteleistung | Ignoriert | Effizienz und COP einbezogen |
| Ergebnis | Irreführendes Ranking | Vergleichbare wirtschaftliche Basis |

Die Arbeitsmappe wandelt zunächst jede Option in identische Nutzenergie-Ausgabe um, bevor ein finanzieller Vergleich beginnt.

Dies stellt sicher, dass konkurrierende Technologien auf äquivalenter thermischer Leistung bewertet werden anstelle inkompatibler Kaufeinheiten.

<details>
<summary>Formellogik</summary>

Nutzenergiebedarf

↓

Erforderlicher physischer Brennstoff

↓

Geräteeffizienz

↓

Jährlicher Brennstoffverbrauch

↓

Jährliche Brennstoffkosten

</details>

---

### Falle 2 — Infrastrukturinvestition ignorieren

Eine Projektempfehlung wird nur mit jährlichen Betriebskosten erstellt.

Monate später offenbart das Implementierungsbudget, dass eine Option bedeutende elektrische Upgrades, Gaspipeline-Installation, Druckregelungsausrüstung oder Speicherinfrastruktur erfordert.

Die ursprüngliche Empfehlung wird plötzlich finanziell unattraktiv.

Durch die direkte Einbeziehung der Infrastrukturinvestition in die Lebenszyklus-Besitzkosten verhindert die Arbeitsmappe, dass Kapitalaufwendungen zu einem nachträglichen Einfall werden.

Anstatt zu fragen

> "Welche Option hat die niedrigsten Betriebskosten?"

fragt das Modell

> "Welche Option kostet über die Zeit am wenigsten zu besitzen?"

Die korrigierte Empfehlung umfasst:

- Infrastruktur-CAPEX
- Jährliche Wartung
- Kapitalrückgewinnung
- Feste Versorgungsgebühren
- Brennstoffausgaben

Erst nachdem diese Komponenten kombiniert sind, können zwei technisch machbare Lösungen fair verglichen werden.

<details>
<summary>Formellogik</summary>

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

### Falle 3 — Annehmen, dass die heutigen Energiepreise konstant bleiben

Viele Investitionsentscheidungen werden mit den heutigen Marktpreisen genehmigt, als stellten sie die nächsten zehn oder fünfzehn Jahre dar.

Energiemärkte verhalten sich selten so.

Erdgaspreise schwanken.

Stromtarife ändern sich.

Dieselpreise reagieren auf globale Versorgungsstörungen.

LPG-Märkte variieren deutlich nach Region.

Eine Empfehlung, die heute optimal erscheint, kann nach nur moderater Preisbewegung zur zweit- oder drittbesten Option werden.

Anstatt eine einzige „beste Antwort“ zu präsentieren, bewertet die Arbeitsmappe, wie robust jede Lösung unter veränderten Annahmen bleibt.

| Szenario | Traditionelle Tabelle | Diese Arbeitsmappe |
|-----------|------------------------|---------------|
| Brennstoffpreis-Veränderungen | Manuelles Neuerstellen | Automatische Neuberechnung |
| CAPEX-Revision | Mehrere Formeln manuell aktualisiert | Zentrale Parameter-Aktualisierung |
| Ranking-Vergleich | Schwierig | Automatisch |
| Szenario-Bewertung | Ein Fall pro Zeit | Mehrere vergleichbare Szenarien |

Kommerzielle Entscheidungen werden deutlich zuverlässiger, weil Beteiligte sehen können, **ob eine Empfehlung unter realistischer Marktunsicherheit optimal bleibt**, anstatt nur unter den heutigen Annahmen.

<details>
<summary>Formellogik</summary>

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

## Beispielszenario

Eine Lebensmittelfertigungsanlage plant, ihr alterndes Dampferzeugungssystem zu ersetzen.

Das Technik-Team identifiziert vier technisch machbare Alternativen:

- Erdgaskessel
- LPG-Kessel
- Elektrische Wärmepumpe
- Dieselkessel

Das Projekt erfordert etwa **18,000 Useful GJ** jährliche thermische Energie, arbeitet **5,200 Stunden pro Jahr** und verwendet einen **Abzinsungssatz von 8%** mit einer **Kapitalrückgewinnungsdauer von 15-year**.

Bei ausschließlicher Betrachtung der Brennstoffpreise favorisiert das Beschaffungsteam zunächst Erdgas, weil es die niedrigsten Brennstoffkosten pro Einheit hat.

Sobald die Projektannahmen jedoch in die Arbeitsmappe eingegeben sind, bewertet die Berechnungs-Engine viel mehr als Brennstoffausgaben.

Das Modell bestimmt automatisch:

- Erforderlichen physischen Brennstoffverbrauch nach Berücksichtigung der Geräteeffizienz.
- Jährliche Brennstoffkaufkosten.
- Monatliche feste Netzgebühren.
- Erforderliche Infrastrukturinvestition.
- Jährliche Wartungsausgaben.
- Annualisierte Infrastrukturkosten mit dem gewählten Abzinsungssatz.
- Gesamte jährliche Besitzkosten.
- Normalisierte Kosten pro Useful GJ.
- Gesamtes wirtschaftliches Ranking.

Die Analyse zeigt, dass die elektrische Wärmepumpe zwar teurere Energie einkauft, ihre deutlich höhere COP aber den erforderlichen Energieverbrauch so weit senkt, dass sowohl Strompreise als auch höhere Infrastrukturkosten ausgeglichen werden.

Unterdessen erfordert die Diesel-Option vergleichsweise geringe Infrastrukturinvestitionen, wird aber zur teuersten Lösung, sobald jährliche Betriebskosten berücksichtigt werden.

Anstatt mehrere zusammenhanglose technische Berechnungen zu präsentieren, produziert die Arbeitsmappe einen einzigen kommerziellen Vergleich, in dem jede Alternative mit identischen Annahmen und Finanzmethodik bewertet wird.

Entscheidungsträger können daher Empfehlungen mit Lebenszyklusökonomie rechtfertigen anstelle isolierter Kostenkomponenten.

---

## Formelreferenz

<details>
<summary>Project Input Sheet</summary>

| Formel | Zweck |
|---------|----------|
| IF | Einheitenumrechnung zwischen MWh und Useful GJ |
| Data Validation | Eingabeintegrität |
| Named Ranges | Zentrales Parameter-Management |

</details>

<details>
<summary>Fuel Assumptions</summary>

| Formel | Zweck |
|---------|----------|
| MAP() | Jeden Brennstofftyp dynamisch bewerten |
| LAMBDA() | Identische Umrechnungslogik anwenden |
| IF() | Verbrennungswirkungsgrad von Wärmepumpen-COP-Berechnungen trennen |

</details>

<details>
<summary>Infrastructure Assumptions</summary>

| Formel | Zweck |
|---------|----------|
| BYROW() | Infrastrukturinvestition nach Technologie aggregieren |
| SUM() | CAPEX-Konsolidierung |
| Dynamic Arrays | Automatische Erweiterung beim Hinzufügen neuer Technologien |

</details>

<details>
<summary>Calculation Engine</summary>

| Formel | Zweck |
|---------|----------|
| MAP() | Jährlicher physischer Brennstoffverbrauch |
| PMT() | Annualisierte Infrastrukturinvestition |
| Dynamic Arrays | Jährliche Betriebskostenberechnungen |
| RANK.EQ() | Automatisches wirtschaftliches Ranking |
| Array Arithmetic | Normalisierte Kosten pro Useful GJ |

</details>

<details>
<summary>Sensitivity Analysis</summary>

| Formel | Zweck |
|---------|----------|
| Dynamic Arrays | Generierung der Szenario-Matrix |
| Parameter References | Zentrale Annahmen-Aktualisierungen |
| Ranking Functions | Analyse der Empfehlungsstabilität |

</details>

## Validierungsregeln

| Feld | Validierungsregel | Fehlerverhalten |
|-------|-----------------|----------------|
| Annual Useful Energy | Muss größer als null sein | Berechnung blockiert |
| Operating Hours | Positiver numerischer Wert | Warnung angezeigt |
| Discount Rate | 0–100% | Ungültiger Prozentsatz abgewiesen |
| Amortization Period | Positive Ganzzahl | Annualisierung deaktiviert bis zur Korrektur |
| Fuel Price | Darf nicht negativ sein | Kostenberechnungen ausgesetzt |
| Equipment Efficiency | Zwischen 0% und 100% | Validierungswarnung |
| Heat Pump COP | Größer als null | Stromberechnungen verhindert |
| Infrastructure CAPEX | Darf nicht negativ sein | Annualisiertes CAPEX nicht verfügbar |
| Monthly Fixed Charge | Darf nicht negativ sein | Warnung jährliche TCO |
| Maintenance Rate | Zwischen 0% und 100% | Warnung O&M-Berechnung |

</details>

---

## Weitere Werkzeuge dieser Reihe

- **Toolkit für Fertigungsarbeitskosten & Kapazitätsplanung** — Analysieren Sie Personalauslastung, Arbeitskosten, Überstunden und Produktionskapazität mit einem einheitlichen Betriebsmodell.
- **Toolkit für bedarfsadaptive Bestandsplanung** — Bringen Sie Bestandsinvestitionen, Lieferanten-Vorlaufzeiten und Servicelevels mit szenariobasierter Nachschubplanung ins Gleichgewicht.
- **Toolkit für Bestandsregister für Einzelhandel & Fertigung** — Verbinden Sie Einkauf, Produktion, Lagerbewegungen und Bestandsbewertung in einer einzigen Arbeitsmappe.
- **Toolkit für Unternehmens-Payroll & jährliche Personalkapazitätsplanung** — Konsolidieren Sie Payroll, jährliche Arbeitsstunden, Personalkapazität und Arbeitsbudget über mehrere Abteilungen hinweg.
- **Toolkit für Mietverwaltung & Leerstandsintelligenz** — Verfolgen Sie Belegung, Buchungsänderungen, Leerstandsrisiko und betriebliche Leistung für Multi-Objekt-Portfolios.

---

## Lizenz

Dieses Projekt ist unter der **Apache License 2.0** lizenziert.

Sie dürfen diese Arbeitsmappe für persönliche oder kommerzielle Zwecke gemäß den Bedingungen der Apache License 2.0 frei verwenden, verändern und anpassen.

Eine Kopie der Lizenz sollte bei jeder Weitergabe oder abgeleiteten Arbeit enthalten sein.

---

**Wenn diese Arbeitsmappe hilft, Ihre Energieinvestitionsentscheidungen zu verbessern, geben Sie dem Repository ein ⭐ zur Unterstützung zukünftiger Entscheidungsunterstützungswerkzeuge.**
