[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Toolkit zur Entscheidungsunterstützung für Industrieenergiekosten & Gesamtbetriebskosten (TCO)

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**Vergleichen Sie Erdgas, Flüssiggas (LPG), Strom und Diesel auf echter Nutzenergie-Basis – Brennstoffkosten, Geräteeffizienz, Infrastrukturinvestitionen und Lebenszyklus-Besitzkosten in einem einzigen kostenlosen Entscheidungsrahmen ohne Installation, verfügbar sowohl als Browser- als auch als Excel-Version.**

**Keine Registrierung. Keine Installation. Kostenlos in Ihrem Browser.**

Testen Sie die Browser-Version kostenlos. Wenn Sie die Excel-Version benötigen, können Sie diese mit 30-tägiger Geld-zurück-Garantie ohne Rückfragen erwerben.
>
> 🌐 **Im Browser öffnen**  
> [HTML-Live-Version](https://hyvoid.github.io/Industrial-Energy-Cost-Total-Cost-of-Ownership-TCO-Decision-Support-Toolkit/)
>
> 📥 **Excel herunterladen**  
> [Excel-Vorlage kaufen](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)

---

## Was es Ihnen bei der Entscheidung hilft

Statt nur Brennstoffpreise zu vergleichen, hilft dieses Toolkit dabei, die vollständige betriebliche Auswirkung alternativer Industrieenergie-Lösungen zu bewerten.

Es verschafft Übersicht über:

- Jährliche Gesamtbetriebskosten (TCO) für jede konkurrierende Energieoption.
- Kosten pro Einheit Nutzenergie nach Berücksichtigung von Geräteeffizienz und Wärmepumpen-COP.
- Erforderliche Infrastrukturinvestitionen vor der Auswahl einer Energiequelle.
- Ob Betriebseinsparungen eine höhere Kapitalinvestition rechtfertigen.
- Wie sich Veränderungen der Brennstoffpreise auf die bevorzugte Lösung auswirken.
- Welche Energieoption unter unterschiedlichen Marktbedingungen wirtschaftlich widerstandsfähig bleibt.

Statt zu fragen:

> „Welcher Brennstoff ist am günstigsten?"

beantwortet die Arbeitsmappe die Frage, vor der Entscheidungsträger tatsächlich stehen:

> **„Welche Energielösung liefert die niedrigsten Lebenszykluskosten für dieses Projekt?"**

---

## Schnellstart-Ablauf

Aussagekräftige Ergebnisse erfordern nur wenige Minuten, da die Arbeitsmappe Projekt-Eingaben, technische Annahmen, Berechnungen und Berichtswesen in getrennte Ebenen unterteilt.

### 1. Projekt-Annahmen konfigurieren

Öffnen Sie das Arbeitsblatt **Project Input** und geben Sie die Informationen ein, die das Projekt definieren.

Typische Parameter umfassen:

- Jährlicher Nutzenergiebedarf
- Betriebsstunden
- Abzinsungssatz (WACC)
- CAPEX-Amortisationsdauer

Diese Werte bleiben während einer Bewertung normalerweise stabil und müssen nur aktualisiert werden, wenn sich Projektannahmen ändern.

---

### 2. Energie- und Infrastruktur-Annahmen aktualisieren

Pflegen Sie aktuelle Marktinformationen in den dedizierten Parameter-Arbeitsblättern.

Typische Eingaben umfassen:

- Erdgaspreise
- Flüssiggas-Preise (LPG)
- Stromtarife
- Dieselpreise
- Geräteeffizienz
- Wärmepumpen-COP
- Monatliche Servicegebühren
- Infrastrukturinvestition
- Jährliche Wartungskosten

Keine Berechnungsformeln müssen bearbeitet werden.

---

### 3. Automatisch generierten Vergleich prüfen

Wechseln Sie zum Dashboard.

Die Arbeitsmappe berechnet sofort neu:

- Jährlicher Brennstoffverbrauch
- Jährliche Brennstoffausgaben
- Annualisiertes CAPEX
- Feste Betriebskosten
- Gesamtbetriebskosten (TCO)
- Normierte Kosten pro Useful GJ
- Wirtschaftliches Ranking jeder verfügbaren Option

Keine manuelle Neuberechnung oder Formelpflege erforderlich.

---

### 4. Verschiedene Marktszenarien testen

Passen Sie Brennstoffpreise, CAPEX-Annahmen oder Finanzparameter an, um veränderte Marktbedingungen zu simulieren.

Die Sensitivitätsanalyse aktualisiert sich automatisch, sodass mehrere kommerzielle Szenarien ohne Neuaufbau des Modells bewertet werden können.

> **Legen Sie die Annahmen einmal fest. Aktualisieren Sie Marktdaten bei Bedarf. Prüfen Sie die Empfehlung. Aktualisieren Sie, wann immer sich der Markt ändert.**

---

## Warum ich dies entwickelt habe

Viele Investitionsentscheidungen im Industrieenergiebereich erscheinen gradlinig, weil Entscheidungsteams oft nur den beworbenen Brennstoffpreis vergleichen.

Leider ist der Brennstoffpreis selten die Zahl, die die langfristige Wirtschaftlichkeit bestimmt.

Eine Erdgas-Lösung kann den Bau einer Pipeline erfordern.

Eine elektrische Wärmepumpe kann teureren Strom verbrauchen, aber eine deutlich höhere Leistungszahl (COP) erreichen.

Eine Flüssiggas-Installation kann teure Infrastruktur vermeiden, aber im Laufe der Zeit höhere Betriebskosten verursachen.

Eine Diesel-Lösung kann für kleine Projekte attraktiv erscheinen, während sie mit Erreichen des Jahresverbrauchs auf Produktionsskala zunehmend teurer wird.

Diese Projekte werden häufig zu Diskussionen, in denen jeder Beteiligte eine andere Kennzahl einbringt.

Technik-Teams konzentrieren sich auf die Wärmeeffizienz.

Finanzabteilungen bewerten die Kapitalaufwendungen.

Betriebsleiter priorisieren jährliche Betriebskosten.

Der Einkauf verhandelt Brennstoffverträge.

Weil jeder Beteiligte eine andere Zahl misst, werden Vergleiche inkonsistent.

Das eigentliche analytische Problem sind nicht fehlende Daten.

Es ist das Fehlen eines gemeinsamen Entscheidungsrahmens.

Ich habe diese Arbeitsmappe entwickelt, um jede konkurrierende Option in dieselbe betriebliche Sprache zu normalisieren:

- identische gelieferte Nutzenergie,
- identische finanzielle Annahmen,
- identische Lebenszyklus-Kostenstruktur.

Statt isolierte Kennzahlen zu debattieren, wird jede Option anhand eines einheitlichen wirtschaftlichen Rahmens bewertet.

Das Ziel ist nicht zu beweisen, dass eine Energiequelle universell besser ist als eine andere.

Das Ziel ist zu identifizieren, welche Lösung unter den spezifischen Betriebsbedingungen eines bestimmten Projekts die niedrigsten Gesamtbetriebskosten (TCO) produziert.

Beispielsweise können zwei konkurrierende Vorschläge zunächst Erdgas begünstigen, weil sein Brennstoffpreis niedriger ist als der von Strom.

Nach Einbeziehung von Wärmepumpen-COP, Infrastrukturinvestition, jährlicher Wartung, festen Versorgungsgebühren und Kapitalrückgewinnung kann Strom trotz höheren Energietarifs pro Einheit niedrigere jährliche Lebenszykluskosten produzieren.

Ohne jede Variable in ein gemeinsames TCO-Modell zu normalisieren, ist diese Schlussfolgerung schwer mit Überzeugung zu erreichen.

Diese Arbeitsmappe verpackt diese analytische Argumentation in einen wiederverwendbaren Entscheidungs-Unterstützungsrahmen statt in eine einmalige Tabelle.

---

## Typische Probleme bei der Bewertung von Industrieenergie, die dies löst

| Problem | Ohne dieses Werkzeug | Mit diesem Werkzeug |
|----------|-------------------|----------------|
| Brennstoffpreise werden trotz unterschiedlicher Effizienzen direkt verglichen. | Ein niedrigerer Brennstoffpreis wird fälschlich als günstigste Lösung angenommen. | Jede Option wird vor dem Vergleich auf gelieferte Nutzenergie normalisiert. |
| Infrastrukturinvestition wird bei der Lieferantenbewertung ignoriert. | Kapitalintensive Optionen erscheinen künstlich attraktiv. | CAPEX wird annualisiert und in die Gesamtbetriebskosten (TCO) einbezogen. |
| Unterschiedliche Abteilungen verwenden unterschiedliche finanzielle Annahmen. | Technik und Finanzen kommen zu widersprüchlichen Schlussfolgerungen. | Alle Szenarien teilen einen einheitlichen Berechnungsrahmen. |
| Feste Versorgungsgebühren werden ausgelassen. | Betriebskosten werden systematisch unterschätzt. | Feste Servicegebühren werden neben variablen Brennstoffkosten berücksichtigt. |
| Marktpreise ändern sich nach der ersten Bewertung. | Jedes Szenario erfordert manuelles Neuerstellen von Tabellen. | Die Sensitivitätsanalyse aktualisiert Rankings automatisch mit überarbeiteten Annahmen. |
| Problem | Ohne dieses Werkzeug | Mit diesem Werkzeug |
|----------|-------------------|----------------|
| Energieprojekte werden nur mit Betriebskosten des ersten Jahres bewertet. | Langfristige Besitzkosten bleiben bis nach der Implementierung verborgen. | Brennstoff, Infrastruktur, Wartung und Finanzierung werden über den gesamten Anlagenlebenszyklus gemeinsam bewertet. |

---

## Für wen dies gedacht ist

Dieses Toolkit ist für Fachleute konzipiert, die industrielle oder kommerzielle Energieoptionen mit konsistenten finanziellen und technischen Annahmen vergleichen müssen – statt mit isolierten Kostenzahlen.

Es ist besonders wertvoll für:

- Industrie-Energieberater, die Kundenangebote erstellen.
- Maschinenbau- und Prozessingenieure, die Heiztechnologien vergleichen.
- Kommerzielle Vertriebsteams, die konkurrierende Energielösungen bewerten.
- Anlagenbetreiber, die Geräteaustausch-Projekte planen.
- Finanzanalysten, die Lebenszyklus-Investitionsanalysen durchführen.
- EPC-Auftragnehmer, die technisch-kommerzielle Vergleiche erstellen.
- Hersteller, die künftige Betriebskostenszenarien bewerten.

Keine Tabellenkalkulations-Expertise erforderlich.

Nutzer aktualisieren einfach Projektannahmen, prüfen das Dashboard und vergleichen die resultierenden Empfehlungen.

Die Browser-Edition ist für schnelle Bewertung während Diskussionen gedacht, während die Excel-Edition das vollständige analytische Modell für technische und finanzielle Prüfung bietet.

Diese Arbeitsmappe ist **nicht** dazu gedacht, unternehmensweite Energiemanagementsysteme, SCADA-Plattformen oder detaillierte technische Simulationssoftware zu ersetzen.

Stattdessen füllt sie die Entscheidungslücke, die vor Beginn der detaillierten Technik besteht – wenn mehrere technisch machbare Lösungen schnell, konsistent und transparent verglichen werden müssen.

---

## Über mich

Ich entwickle leichtgewichtige Excel- und browserbasierte Werkzeuge zur Entscheidungsunterstützung für Situationen, in denen es einfach zu viele Variablen gibt, um sie mental zu bewerten.

Statt Unternehmenssoftware zu erstellen, konzentriere ich mich darauf, wiederholbare analytische Argumentation in wiederverwendbare Rahmen zu verwandeln, die Menschen helfen, bessere betriebliche Entscheidungen mit weniger manueller Arbeit zu treffen.

Die zentrale Frage hinter jedem Projekt ist einfach:

> **„Welche Informationen müssen an einem Ort erscheinen, damit die nächste Entscheidung offensichtlich wird?"**

Das **Toolkit zur Entscheidungsunterstützung für Industrieenergiekosten & Gesamtbetriebskosten (TCO)** ist ein Beispiel dieses Ansatzes – es bringt technische Annahmen, Finanzanalyse, Lebenszykluskostenrechnung und kommerziellen Vergleich in einer transparenten Arbeitsmappe zusammen, die jeder prüfen, auditieren und anpassen kann.

---

## Technische Details

<details>
<summary><strong>Für technische Prüfer, Excel-Praktiker und Mitarbeiter</strong></summary>

## Arbeitsmappen-Architektur

Die Arbeitsmappe folgt einer Schichtarchitektur, die Dateneingabe, technische Annahmen, Berechnungslogik und Management-Berichtswesen trennt. Diese Trennung minimiert Formelpflege und macht jede Berechnung bis zu einer einzigen Datenquelle nachverfolgbar.

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
| Berechnungs-Ebene | Calculation Engine | Nutzenergie-Umrechnung, jährlicher Brennstoffverbrauch, TCO, normierte Kosten |
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

Jede nachgelagerte Berechnung referenziert vorgelagerte Parameter-Arbeitsblätter statt hartcodierter Konstanten. Dadurch aktualisiert die Änderung eines Brennstoffpreises, einer Geräteeffizienz, eines Abzinsungssatzes oder einer Infrastrukturinvestition automatisch jede abhängige Berechnung in der gesamten Arbeitsmappe.

---

## Drei Fallen, die auch erfahrene Energieanalysten stellen

### Falle 1 — Brennstoffpreise vergleichen statt gelieferte Nutzenergie

Eine Kaufentscheidung wird getroffen, weil Erdgas auf Preis-pro-Einheit-Basis günstiger erscheint als Strom.

Leider sind diese Einheiten nicht direkt vergleichbar.

Erdgas, Flüssiggas, Diesel und Strom verwenden alle unterschiedliche physikalische Messsysteme und unterschiedliche Umwandlungswirkungsgrade.

Der Vergleich nur von Beschaffungspreisen ignoriert die Menge der tatsächlich an den Prozess gelieferten Nutzenergie.

| Vergleich | Falscher Ansatz | Richtiger Ansatz |
|------------|-------------------|------------------|
| Primäre Kennzahl | Brennstoffpreis | Kosten pro Useful GJ |
| Geräteleistung | Ignoriert | Effizienz und COP einbezogen |
| Ergebnis | Irreführendes Ranking | Vergleichbare wirtschaftliche Basis |

Die Arbeitsmappe wandelt zunächst jede Option in identische Nutzenergie-Ausgabe um, bevor ein finanzieller Vergleich beginnt.

Dies stellt sicher, dass konkurrierende Technologien auf äquivalenter Wärmeleistung bewertet werden statt auf inkompatiblen Beschaffungseinheiten.

<details>
<summary>Formellogik</summary>

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

### Falle 2 — Infrastrukturinvestition ignorieren

Eine Projektempfehlung wird nur mit jährlichen Betriebskosten erstellt.

Monate später offenbart das Implementierungsbudget, dass eine Option bedeutende elektrische Upgrades, Gaspipeline-Installation, Druckregelungs-Ausrüstung oder Speicherinfrastruktur erfordert.

Die ursprüngliche Empfehlung wird plötzlich finanziell unattraktiv.

Durch die direkte Einbeziehung der Infrastrukturinvestition in die Lebenszyklus-Besitzkosten verhindert die Arbeitsmappe, dass Kapitalaufwendungen zum nachträglichen Einfall werden.

Statt zu fragen

> „Welche Option hat die niedrigsten Betriebskosten?"

fragt das Modell

> „Welche Option ist über die Zeit am günstigsten zu besitzen?"

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

Flüssiggas-Märkte variieren deutlich nach Region.

Eine Empfehlung, die heute optimal erscheint, kann nach nur moderater Preisbewegung zur zweit- oder drittbesten Option werden.

Statt eine einzige „beste Antwort" zu präsentieren, bewertet die Arbeitsmappe, wie robust jede Lösung unter veränderten Annahmen bleibt.

| Szenario | Traditionelle Tabelle | Diese Arbeitsmappe |
|-----------|------------------------|---------------|
| Brennstoffpreis-Veränderungen | Manuelles Neuerstellen | Automatische Neuberechnung |
| CAPEX-Revision | Mehrere Formeln manuell aktualisiert | Zentrale Parameter-Aktualisierung |
| Ranking-Vergleich | Schwierig | Automatisch |
| Szenario-Bewertung | Ein Fall pro Zeit | Mehrere vergleichbare Szenarien |

Kommerzielle Entscheidungen werden deutlich zuverlässiger, weil Beteiligte sehen können, **ob eine Empfehlung unter realistischer Marktunsicherheit optimal bleibt**, statt nur unter den heutigen Annahmen.

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

- Natural Gas Boiler
- LPG Boiler
- Electric Heat Pump
- Diesel Boiler

Das Projekt erfordert etwa **18.000 Useful GJ** jährliche Wärmeenergie, arbeitet **5.200 Stunden pro Jahr** und verwendet einen **8 % Abzinsungssatz** mit einer **15-jährigen Kapitalrückgewinnungsdauer**.

Bei ausschließlicher Betrachtung der Brennstoffpreise favorisiert das Beschaffungsteam zunächst Erdgas, weil es die niedrigsten Brennstoffkosten pro Einheit hat.

Sobald die Projektannahmen jedoch in die Arbeitsmappe eingegeben sind, bewertet die Berechnungs-Engine jedoch viel mehr als Brennstoffausgaben.

Das Modell bestimmt automatisch:

- Erforderlichen physischen Brennstoffverbrauch nach Berücksichtigung der Geräteeffizienz.
- Jährliche Brennstoff-Beschaffungskosten.
- Monatliche feste Netzgebühren.
- Erforderliche Infrastrukturinvestition.
- Jährliche Wartungsausgaben.
- Annualisierte Infrastrukturkosten mit dem gewählten Abzinsungssatz.
- Gesamte jährliche Besitzkosten.
- Normierte Kosten pro Useful GJ.
- Gesamtes wirtschaftliches Ranking.

Die Analyse zeigt, dass die elektrische Wärmepumpe zwar teurere Energie einkauft, ihre deutlich höhere COP aber den erforderlichen Energieverbrauch so weit senkt, dass sowohl Strompreise als auch höhere Infrastrukturkosten ausgeglichen werden.

Unterdessen erfordert die Diesel-Option vergleichsweise geringe Infrastrukturinvestitionen, wird aber die teuerste Lösung, sobald jährliche Betriebskosten berücksichtigt werden.

Statt mehrere zusammenhanglose technische Berechnungen zu präsentieren, produziert die Arbeitsmappe einen einzigen kommerziellen Vergleich, in dem jede Alternative mit identischen Annahmen und Finanzmethodik bewertet wird.

Entscheidungsträger können daher Empfehlungen mit Lebenszyklus-Ökonomie rechtfertigen statt mit isolierten Kostenkomponenten.

---

## Formelreferenz

<details>
<summary>Project Input Sheet</summary>

| Formel | Zweck |
|---------|----------|
| IF | Einheitenumrechnung zwischen MWh und Useful GJ |
| Data Validation | Eingabe-Integrität |
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
| Array Arithmetic | Normierte Kosten pro Useful GJ |

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
| Amortization Period | Positive Ganzzahl | Annualisierung deaktiviert, bis korrigiert |
| Fuel Price | Darf nicht negativ sein | Kostenberechnungen ausgesetzt |
| Equipment Efficiency | Zwischen 0 % und 100 % | Validierungswarnung |
| Heat Pump COP | Größer als null | Stromberechnungen verhindert |
| Infrastructure CAPEX | Darf nicht negativ sein | Annualisiertes CAPEX nicht verfügbar |
| Monthly Fixed Charge | Darf nicht negativ sein | Jährliche-TCO-Warnung |
| Maintenance Rate | Zwischen 0 % und 100 % | O&M-Berechnungswarnung |

</details>

---

## Weitere Werkzeuge dieser Reihe

- **Toolkit für Fertigungsarbeitskosten & Kapazitätsplanung** — Analysieren Sie Personalauslastung, Arbeitskosten, Überstunden und Produktionskapazität mit einem einheitlichen Betriebsmodell.
- **Toolkit für bedarfsadaptive Bestandsplanung** — Bringen Sie Bestandsinvestitionen, Lieferanten-Vorlaufzeiten und Servicelevels mit szenariobasierter Nachschubplanung ins Gleichgewicht.
- **Toolkit für Bestandsregister im Einzelhandel & in der Fertigung** — Verbinden Sie Einkauf, Produktion, Lagerbewegungen und Bestandsbewertung in einer einzigen Arbeitsmappe.
- **Toolkit für Unternehmens-Payroll & jährliche Personalkapazitätsplanung** — Konsolidieren Sie Payroll, jährliche Arbeitsstunden, Personalkapazität und Arbeitsbudget über mehrere Abteilungen hinweg.
- **Toolkit für Mietverwaltung & Leerstandsintelligenz** — Verfolgen Sie Belegung, Buchungsänderungen, Leerstandsrisiko und betriebliche Leistung für Multi-Objekt-Portfolios.

---

## Lizenz

Dieses Projekt steht unter der **Apache License 2.0**.

Sie dürfen diese Arbeitsmappe für persönliche oder kommerzielle Zwecke gemäß den Bedingungen der Apache License 2.0 verwenden, verändern und anpassen.

Eine Kopie der Lizenz sollte bei jeder Weitergabe oder abgeleiteten Arbeit enthalten sein.

---

**Wenn diese Arbeitsmappe hilft, Ihre Energieinvestitionsentscheidungen zu verbessern, geben Sie dem Repository ein ⭐ zur Unterstützung künftiger Entscheidungs-Unterstützungswerkzeuge.**
