[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Calculateur de coût total de possession (TCO) pour l'énergie industrielle et modèle Excel de comparaison des coûts de combustible (gaz naturel vs. GPL vs. électricité vs. diesel)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/869c90a4-4548-491b-b4ae-65b7bca29c50" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-TCO%20Financial%20Model-orange)

**Une calculatrice interactive de coût total de possession (TCO) pour l'énergie industrielle et un modèle de tableur Excel conçus pour comparer le gaz naturel, le GPL, l'électricité et le diesel sur une base normalisée d'énergie utile ($/GJ). Évaluez le CAPEX de chauffage industriel, l'OPEX, le rendement thermique des chaudières, le COP des pompes à chaleur et les coûts de possession sur le cycle de vie dans un cadre normalisé d'économie de l'ingénierie—disponible sous forme de calculatrice web gratuite et de modèle Excel téléchargeable.**

**Aucune inscription. Aucune installation. Gratuit à tester dans votre navigateur.**

Utilisez l'application web interactive pour un premier filtrage rapide, ou téléchargez le modèle de tableur Excel déverrouillé pour des audits financiers approfondis, la sauvegarde de scénarios multiples et les présentations clients—soutenu par une garantie de remboursement de 30 jours sans question.

> 🌐 **Ouvrir la calculatrice web gratuite**  
> [Calculatrice web interactive des coûts énergétiques industriels et du TCO (Édition navigateur)](https://hyvoid.github.io/industrial-energy-tco-calculator/)
>
> 📥 **Obtenir le modèle de tableur complet**  
> [Télécharger le modèle Excel éditable de TCO énergétique industriel et de comparaison des combustibles](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)

---

## Ce que cela vous aide à suivre et à décider : correspondance points faibles / solutions

Au lieu de comparer les tarifs des services publics de manière isolée, cette boîte à outils d'économie de l'ingénierie suit et résout les angles morts critiques dans les évaluations de **décarbonisation industrielle**, de **remplacement de chaudières** et d'**électrification des sites** :

| Métrique de suivi cible / point faible | L'angle mort analytique courant | Comment ce modèle de TCO le résout et le suit |
| :--- | :--- | :--- |
| **Coût normalisé de l'énergie utile ($/GJ ou $/MMBtu)** | Comparer les prix bruts des combustibles ($/kWh, $/Therm, $/Liter) sans ajuster les pertes de conversion. | Suit la **chaleur utile livrée** en intégrant le rendement thermique de la chaudière à combustion (%) et le COP de la pompe à chaleur industrielle. |
| **CAPEX d'infrastructure annualisé et WACC** | Traiter les frais de raccordement au réseau gaz, les améliorations de postes électriques ou les réservoirs de stockage comme des coûts irrécupérables. | Suit l'**amortissement du CAPEX** initial sur le cycle de vie de l'actif en utilisant votre **taux d'actualisation (WACC)** spécifique via le facteur de recouvrement du capital. |
| **OPEX de cycle de vie mixte et tarifs fixes des services publics** | Ignorer les charges mensuelles de pointe, les frais de compteur et les programmes de maintenance préventive. | Suit à la fois la dépense variable en combustible et les charges fixes de service pour produire un véritable **coût total de possession (TCO) annuel**. |
| **Sensibilité croisée au prix des combustibles et analyse du seuil de rentabilité** | Les tableurs statiques se brisent lorsque les marchés de matières premières fluctuent ou qu'une tarification du carbone est introduite. | Suit la **sensibilité au prix des combustibles en multi-scénarios**, mettant à jour dynamiquement le classement économique à mesure que les tarifs électriques ou les prix du gaz évoluent. |
| **Arbitrages entre électrification et combustibles fossiles** | Supposer que les pompes à chaleur industrielles sont trop chères en raison des tarifs électriques élevés par kWh. | Quantifie l'**arbitrage exact entre OPEX et CAPEX**, montrant quand la haute efficacité du COP compense les tarifs électriques et les coûts d'équipement plus élevés. |

Plutôt que de demander :
> *« Quel tarif de combustible semble le moins cher sur le papier ? »*

Ce modèle financier répond à la question à laquelle les parties prenantes des projets d'investissement sont réellement confrontées :
> **« Quelle solution de chauffage et d'énergie industriels offre le coût de cycle de vie ajusté au risque le plus bas pour le profil opérationnel spécifique de notre site ? »**

---

## Comment exécuter une analyse de coûts de combustible industriel et de TCO (flux de travail de démarrage rapide)

Obtenir des comparaisons financières et d'ingénierie prêtes pour l'audit prend moins de 5 minutes. L'architecture sépare proprement les entrées du projet, les paramètres thermodynamiques, les formules financières et les couches de reporting exécutif.

### Étape 1 : Configurer les paramètres de base du site et financiers
Ouvrez le module **Project Input** pour établir les conditions limites opérationnelles et financières de base de votre installation :
- **Demande annuelle en énergie utile** (GJ/an ou MMBtu/an)
- **Heures d'exploitation du site** (heures/an pour le calcul du facteur de capacité)
- **Coût moyen pondéré du capital (WACC / taux d'actualisation %)**
- **Période d'amortissement et de dépréciation des équipements / du CAPEX** (années)

*Action :* Testez instantanément vos chiffres de base avec la [calculatrice TCO gratuite du navigateur](https://hyvoid.github.io/industrial-energy-tco-calculator/).

---

### Étape 2 : Saisir les tarifs des services publics, le rendement des équipements et les devis de CAPEX
Remplissez les tableaux de paramètres avec vos tarifs locaux de services publics et les devis d'ingénierie des fournisseurs :
- **Tarifs commerciaux des combustibles :** tarifs de gaz naturel, prix du GPL en vrac, tarifs électriques industriels et coûts du diesel.
- **Performance thermodynamique :** rendement thermique des chaudières gaz/diesel (%) et coefficient de performance (COP) de la pompe à chaleur industrielle.
- **Coûts d'investissement et fixes :** investissement en infrastructure gaz/réseau, charges mensuelles de demande des services publics et coûts annuels d'O&M.

*Aucune maintenance de formule requise—toutes les conversions d'unités et les normalisations de pouvoir calorifique se font automatiquement.*

---

### Étape 3 : Auditer le tableau de bord TCO automatisé et le classement LCOH
Passez au **Executive Summary Dashboard** pour examiner les résultats d'économie de l'ingénierie en temps réel :
- **Consommation annuelle de combustible** (dans les unités natives de facturation et les unités énergétiques normalisées)
- **Répartition du CAPEX annualisé par rapport à l'OPEX variable**
- **Coût nivelé de la chaleur (LCOH) / coût normalisé par GJ utile**
- **Classement économique automatisé** entre gaz naturel, GPL, électricité et diesel

---

### Étape 4 : Exécuter l'analyse de sensibilité au prix des combustibles et exporter vers Excel pour une modélisation réutilisable
Simulez la volatilité des marchés de matières premières en ajustant les tarifs des combustibles, le WACC ou les hypothèses de CAPEX pour mettre à l'épreuve votre décision d'investissement.

> 💡 **Besoin de sauvegarder vos scénarios, de personnaliser les formules ou de présenter au conseil ?**  
> Bien que la version navigateur soit idéale pour un filtrage en session unique, les projets d'investissement réels nécessitent un audit itératif, une collaboration d'équipe et une documentation permanente.  
> 👉 **[Téléchargez ici le modèle Excel complet déverrouillé](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)** pour sauvegarder des références de projet illimitées, auditer la formule de chaque cellule sous-jacente, personnaliser les feuilles pour différents sites et exporter des graphiques prêts pour le conseil dans vos propositions d'approbation de CAPEX.

---

## La logique métier et la méthodologie

Pour combler le fossé de communication entre l'**Ingénierie des Procédés** (qui pense en kW, COP et rendement thermique) et la **Finance d'Entreprise** (qui pense en WACC, VAN et amortissement du CAPEX), cette boîte à outils met en œuvre une méthodologie analytique en 4 étapes :

1. **Normalisation thermodynamique de l'énergie (la norme « GJ utile ») :**  
   Les combustibles bruts sont facturés dans des unités incompatibles (p. ex., $/kWh pour l'électricité, $/m³ ou $/MMBtu pour le gaz naturel, $/liter pour le diesel, $/ton pour le GPL). Comparer les prix unitaires bruts est mathématiquement fallacieux car une chaudière à gaz fonctionnant à 82% de rendement thermique perd 18% de son énergie achetée par la cheminée, tandis qu'une pompe à chaleur industrielle avec un COP de 3.2 livre 3.2 unités de chaleur utile pour chaque unité d'énergie électrique achetée. Ce modèle applique la **Normalisation Thermodynamique du Premier Principe**, convertissant toutes les entrées de combustible en **coût par gigajoule utile livré ($/GJ utile)** sur la base des pouvoirs calorifiques inférieurs (LHV) et des rendements de conversion du système.
2. **Coût annuel équivalent (EAC) et modélisation du recouvrement du capital :**  
   Les transitions énergétiques industrielles—comme le passage du GPL à un gazoduc de gaz naturel, ou l'électrification d'un système de vapeur—nécessitent des dépenses d'investissement (CAPEX) initiales très différentes. Diviser simplement le CAPEX par les années du projet ignore la valeur temporelle de l'argent. Cette boîte à outils utilise la méthode du **facteur de recouvrement du capital (CRF)** :
   $$\text{Annualized CAPEX} = \text{CAPEX} \times \frac{r(1+r)^n}{(1+r)^n - 1}$$
   *(où $r$ est le WACC d'entreprise/taux d'actualisation et $n$ est la durée de vie économique de l'actif).* Cela convertit les investissements d'infrastructure initiaux irréguliers en un coût annuel équivalent exact qui peut être ajouté directement aux dépenses d'exploitation annuelles.
3. **Comptabilité d'OPEX à absorption totale :**  
   Au-delà de la consommation variable de combustible, les factures de services publics industrielles portent des structures fixes importantes—comme les charges de pointe électrique, les frais de réservation de capacité des gazoducs et la maintenance d'équipements spécialisés (p. ex., réglage des brûleurs vs. révisions des compresseurs). La méthodologie agrège **CAPEX annualisé + coût variable de combustible + tarifs fixes des services publics + O&M annuel** pour dériver le véritable **coût nivelé de la chaleur (LCOH)** et le **TCO annuel**.
4. **Matrice de sensibilité déterministe et de seuil de rentabilité :**  
   Parce que les actifs industriels fonctionnent pendant 10 to 25 years, une décision fondée sur les prix spot de l'énergie expose l'entreprise à un risque grave sur les matières premières. Le modèle découple les paramètres d'ingénierie statiques des variables de marché volatiles, permettant des **tests de sensibilité instantanés toute chose égale par ailleurs** pour identifier les seuils de rentabilité exacts entre combustibles concurrents.

---

## Pourquoi j'ai conçu cet outil : combler le fossé entre ingénierie et finance

De nombreuses décisions d'investissement en énergie industrielle échouent lors de la revue de direction parce que les parties prenantes évaluent des métriques isolées plutôt qu'un modèle économique unifié :

- **Ingénieurs d'usine et mécaniques** se concentrent sur le rendement thermique de combustion et le COP des pompes à chaleur.
- **Finance d'entreprise et CFO** examinent les obstacles du CAPEX initial et les taux d'actualisation WACC.
- **Responsables d'installation et d'exploitation** privilégient la stabilité de l'OPEX annuel et la fiabilité de la maintenance.
- **Équipes d'approvisionnement énergétique** se concentrent purement à négocier des tarifs unitaires de combustible plus bas.

Une chaudière à gaz naturel peut offrir un tarif de combustible unitaire bas mais nécessiter $500,000 de creusement de tranchées et de CAPEX de raccordement au réseau gaz. Une pompe à chaleur industrielle électrique peut faire face à des tarifs de services publics par kWh plus élevés, tout en atteignant un COP de 3.5x qui réduit considérablement le volume total d'énergie. Un système GPL ou diesel peut minimiser le CAPEX initial mais saigner de l'argent via l'OPEX variable de combustible élevé à l'échelle de production.

Le véritable goulot d'étranglement analytique n'est pas le manque de données—c'est l'absence d'un **cadre normalisé d'économie de l'ingénierie**. J'ai conçu ce classeur pour normaliser chaque vecteur énergétique concurrent dans un unique langage métier : **énergie utile livrée identique, hypothèses financières WACC identiques et structures de coût de cycle de vie identiques.**

---

## Tableurs standard vs. ce cadre de TCO pour l'énergie industrielle

| Dimension d'évaluation | Tableurs internes ad hoc (sans cet outil) | Cadre décisionnel de TCO normalisé (avec cet outil) |
| :--- | :--- | :--- |
| **Rendement thermodynamique et COP** | Les tarifs nominaux de combustible ($/kWh vs. $/m³) sont comparés directement sans ajustement du rendement de conversion, conduisant à de faux classements de coûts. | Normalise automatiquement les pouvoirs calorifiques, le rendement thermique de la chaudière (%) et le COP de la pompe à chaleur en **coût par GJ utile livré ($/GJ)**. |
| **CAPEX d'infrastructure et WACC** | La construction initiale de gazoducs, les améliorations de transformateurs ou les installations de réservoirs sont omises des calculs de coût unitaire de combustible. | Applique le **facteur de recouvrement du capital (CRF)** en utilisant votre WACC d'entreprise pour amortir le CAPEX en un coût annuel équivalent (EAC). |
| **Alignement interdépartemental** | L'ingénierie modélise les BTU/hr dans une feuille tandis que la finance modélise les flux de trésorerie dans une autre, ce qui produit des conclusions conflictuelles sur les propositions de CAPEX. | Unifie les paramètres d'ingénierie thermodynamique et les métriques de finance d'entreprise dans un unique **moteur de calcul transparent et prêt pour l'audit**. |
| **Structure des tarifs des services publics et O&M** | Les charges mensuelles fixes de demande, les frais de raccordement au réseau et les coûts différentiels de maintenance sont négligés, sous-estimant l'OPEX de 15–30%. | Intègre les **frais de service fixes, les charges de demande et les programmes annuels d'O&M** aux côtés de la consommation variable de combustible. |
| **Volatilité des prix des matières premières** | Modifier un seul prix de combustible ou taux d'actualisation nécessite de réécrire manuellement les formules dans plusieurs onglets cassés. | L'**analyse de sensibilité dynamique** recalcule instantanément les classements de cycle de vie et les points d'équilibre en $/GJ lorsque les hypothèses de marché évoluent. |
| **Horizon d'investissement sur le cycle de vie** | Les projets sont jugés uniquement sur le coût d'exploitation de l'année 1 ou le retour sur investissement simple, masquant les passifs de coût de cycle de vie sur 10-to-20-year. | Évalue **combustible, CAPEX d'infrastructure, maintenance et coûts de financement de manière concurrente** sur l'ensemble du cycle de vie de l'actif. |

---

## À qui cela s'adresse : rôles cibles et cas d'usage industriels

Cette boîte à outils est conçue pour les professionnels techniques et commerciaux qui ont besoin d'un **modèle Excel ou d'une calculatrice web prêt pour l'audit** pour justifier des projets d'investissement sans construire des modèles financiers complexes à partir de zéro :

- **Consultants en énergie industrielle et auditeurs énergétiques :** Utilisez-le comme un **générateur de propositions clients et modèle d'analyse financière ASHRAE Level 2/3** lors de l'évaluation de changements de combustible, d'électrification de sites ou de feuilles de route de décarbonisation thermique.
- **Ingénieurs mécaniques, des procédés et d'usine :** Utilisez-le comme une **calculatrice de remplacement de chaudières et de dimensionnement de pompes à chaleur industrielles** pour traduire les gains de rendement thermodynamique (COP vs. rendement de combustion) en métriques financières prêtes pour le CFO.
- **Ingénieurs commerciaux CVC et cleantech :** Utilisez-le comme une **calculatrice interactive de ROI et de TCO pour le support commercial** lors des appels de découverte client pour prouver comment les équipements à haute efficacité (p. ex., pompes à chaleur électriques, biomasse ou chaudières à haut rendement) réduisent le coût total de cycle de vie malgré un CAPEX initial plus élevé.
- **Responsables d'installation et directeurs des opérations d'usine :** Utilisez-le comme un **tableur de prévision budgétaire des services publics et de justification du CAPEX** lors de la planification de rénovations d'équipements vieillissants, de conversions GPL vers gaz naturel hors réseau ou de suppressions progressives de générateurs/chaudières diesel.
- **Analystes financiers d'entreprise et contrôleurs de CAPEX :** Utilisez-le comme un **modèle de valorisation d'économie de l'ingénierie normalisé** pour auditer les affirmations des fournisseurs, appliquer des taux de référence WACC cohérents et mettre à l'épreuve la VAN du projet face à la volatilité des prix de l'énergie.
- **Entrepreneurs EPC et firmes conception-construction :** Utilisez-le comme une **matrice de comparaison d'offres technico-commerciale** lors des études pré-FEED et de faisabilité pour présenter des arbitrages transparents de coût de cycle de vie multi-options aux propriétaires de projet.

---

## Scénarios et cas d'usage industriels fréquemment demandés

Si vous recherchez un modèle fiable pour évaluer l'un des scénarios de projet d'investissement suivants, cette boîte à outils est préconfigurée pour effectuer les calculs :

- **Électrification industrielle et décarbonisation :** *Comment calculer le point d'équilibre TCO entre une pompe à chaleur industrielle électrique et une chaudière à gaz naturel à vapeur/eau chaude ?*
- **Analyse de changement de combustible hors réseau :** *Quelle est la comparaison réelle de coût de cycle de vie lors du passage d'une usine de fabrication du diesel ou du GPL en vrac au gaz naturel canalisé, en intégrant le CAPEX de gazoduc ?*
- **Modélisation du coût nivelé de la chaleur (LCOH) :** *Comment normaliser différentes unités de facturation de combustible (kWh, Therms, Liters, kg, GJ, MMBtu) en une métrique comparable unique pour une proposition de CAPEX à la direction ?*
- **Tests de résistance des tarifs et du prix du carbone :** *À quel rapport de prix électricité-gaz (Spark Gap) l'électrification du site devient-elle économiquement viable pour les processus de fabrication continue vs. par lots ?*

---

## À propos de Theseus Workshop

Je conçois des cadres d'aide à la décision légers et transparents basés sur Excel et le navigateur pour les problèmes d'allocation opérationnelle et d'investissement où il y a trop de variables interactives pour être évaluées mentalement.

Plutôt que de construire des plateformes SaaS d'entreprise obèses ou des logiciels de simulation boîte noire, je me concentre sur l'empaquetage de raisonnements d'ingénierie et financiers répétables dans des modèles propres et auditables qui comblent le fossé entre la faisabilité technique et la réalité commerciale.

Le principe de conception central derrière chaque boîte à outils est simple :
> **« Quelles données exactes doivent être normalisées en un seul endroit pour que la décision d'investissement optimale devienne mathématiquement évidente ? »**

---
*Mots-clés : Calculateur de coût total de possession (TCO) pour l'énergie industrielle, modèle Excel de comparaison des coûts de combustible, tableur de coût nivelé de la chaleur (LCOH), modèle de ROI chaudière vs. pompe à chaleur, calculatrice de coûts gaz naturel vs. GPL vs. électricité, modèle d'économie de l'ingénierie CAPEX OPEX.*

---

## Détails techniques

<details>
<summary><strong>Pour les réviseurs techniques, les praticiens d'Excel et les collaborateurs</strong></summary>

## Architecture du classeur

Le classeur suit une architecture en couches qui sépare la saisie des données, les hypothèses d'ingénierie, la logique de calcul et le reporting exécutif. Cette séparation minimise la maintenance des formules tout en rendant chaque calcul traçable jusqu'à une source de vérité unique.

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

| Couche | Feuilles principales | Responsabilité |
|--------|-------------------|----------------|
| Navigation | Home | Orientation utilisateur et flux de travail |
| Couche de saisie | Project Input | Hypothèses opérationnelles spécifiques au projet |
| Couche de paramètres | Fuel Assumptions, Infrastructure Assumptions | Hypothèses d'ingénierie et financières maintenues en un seul endroit |
| Couche de calcul | Calculation Engine | Conversion d'énergie utile, consommation annuelle de combustible, TCO, coût normalisé |
| Couche d'analyse | Sensitivity | Tests de scénarios de marché et changements de classement |
| Couche de présentation | Dashboard | Support décisionnel pour la direction |
| Couche de gouvernance | Assumption Register, User Guide | Auditabilité et procédures opérationnelles |

### Flux d'information

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

Chaque calcul en aval référence les feuilles de paramètres en amont plutôt que des constantes codées en dur. En conséquence, la mise à jour d'un prix de combustible, du rendement d'un équipement, du taux d'actualisation ou de l'investissement d'infrastructure rafraîchit automatiquement chaque calcul dépendant dans tout le classeur.

---

## Trois pièges qui trompent même les analystes énergétiques expérimentés

### Piège 1 — Comparer les prix des combustibles au lieu de l'énergie utile livrée

Une décision d'achat est prise parce que le gaz naturel semble moins cher que l'électricité sur une base de prix par unité.

Malheureusement, ces unités ne sont pas directement comparables.

Le gaz naturel, le GPL, le diesel et l'électricité utilisent tous des systèmes de mesure physique et des rendements de conversion différents.

Comparer uniquement les prix d'approvisionnement ignore la quantité d'énergie utile réellement livrée au procédé.

| Comparaison | Approche incorrecte | Approche correcte |
|------------|-------------------|------------------|
| Métrique principale | Prix du combustible | Coût par GJ utile |
| Performance des équipements | Ignorée | Rendement et COP inclus |
| Résultat | Classement trompeur | Base économique comparable |

Le classeur convertit d'abord chaque option en une sortie d'énergie utile identique avant que toute comparaison financière ne commence.

Cela garantit que les technologies concurrentes sont évaluées sur un rendement thermique équivalent plutôt que sur des unités d'achat incompatibles.

<details>
<summary>Logique des formules</summary>

Demande en énergie utile

↓

Combustible physique requis

↓

Rendement des équipements

↓

Consommation annuelle de combustible

↓

Coût annuel de combustible

</details>

---

### Piège 2 — Ignorer l'investissement d'infrastructure

Une recommandation de projet est faite en utilisant uniquement le coût d'exploitation annuel.

Des mois plus tard, le budget de mise en œuvre révèle qu'une option nécessite des améliorations électriques importantes, une installation de gazoduc, des équipements de régulation de pression ou une infrastructure de stockage.

La recommandation initiale devient soudain financièrement peu attrayante.

En intégrant l'investissement d'infrastructure directement dans le coût de possession sur le cycle de vie, le classeur évite que la dépense d'investissement ne devienne une réflexion après coup.

Plutôt que de demander

> « Quelle option a le coût d'exploitation le plus bas ? »

le modèle demande

> « Quelle option coûte le moins cher à posséder au fil du temps ? »

La recommandation corrigée comprend :

- CAPEX d'infrastructure
- Maintenance annuelle
- Recouvrement du capital
- Charges fixes des services publics
- Dépenses de combustible

Ce n'est qu'après avoir combiné ces composants que deux solutions techniquement faisables peuvent être comparées équitablement.

<details>
<summary>Logique des formules</summary>

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

### Piège 3 — Supposer que les prix actuels de l'énergie resteront constants

De nombreuses décisions d'investissement sont approuvées en utilisant les prix du marché actuels comme s'ils représentaient les dix ou quinze prochaines années.

Les marchés de l'énergie se comportent rarement ainsi.

Les prix du gaz naturel fluctuent.

Les tarifs électriques changent.

Les prix du diesel répondent aux perturbations de l'offre mondiale.

Les marchés du GPL varient considérablement selon les régions.

Une recommandation qui semble optimale aujourd'hui peut devenir la deuxième ou troisième meilleure option après un mouvement de prix modeste.

Au lieu de présenter une unique « meilleure réponse », le classeur évalue la robustesse de chaque solution sous des hypothèses changeantes.

| Scénario | Tableur traditionnel | Ce classeur |
|-----------|------------------------|---------------|
| Évolutions des prix des combustibles | Reconstruction manuelle | Recalcul automatique |
| Révision du CAPEX | Plusieurs formules mises à jour manuellement | Mise à jour centrale des paramètres |
| Comparaison des classements | Difficile | Automatique |
| Évaluation des scénarios | Un cas à la fois | Plusieurs scénarios comparables |

Les décisions commerciales deviennent nettement plus fiables car les parties prenantes peuvent voir **si une recommandation reste optimale sous une incertitude de marché réaliste**, plutôt que seulement sous les hypothèses actuelles.

<details>
<summary>Logique des formules</summary>

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

## Scénario d'exemple

Une installation de fabrication alimentaire prévoit de remplacer son système de génération de vapeur vieillissant.

L'équipe d'ingénierie identifie quatre alternatives techniquement faisables :

- Chaudière au gaz naturel
- Chaudière au GPL
- Pompe à chaleur électrique
- Chaudière diesel

Le projet nécessite environ **18,000 GJ utiles** d'énergie thermique annuelle, fonctionne **5,200 heures par an** et utilise un **taux d'actualisation de 8%** avec une **période de récupération du capital de 15-year**.

En ne regardant que les prix des combustibles, l'équipe d'approvisionnement privilégie initialement le gaz naturel car il a le coût unitaire de combustible le plus bas.

Cependant, une fois les hypothèses du projet saisies dans le classeur, le moteur de calcul évalue bien plus que les dépenses de combustible.

Le modèle détermine automatiquement :

- La consommation de combustible physique requise après prise en compte du rendement des équipements.
- Le coût annuel d'achat de combustible.
- Les charges mensuelles fixes de réseau.
- L'investissement d'infrastructure requis.
- La dépense annuelle de maintenance.
- Le coût d'infrastructure annualisé en utilisant le taux d'actualisation sélectionné.
- Le coût total annuel de possession.
- Le coût normalisé par GJ utile.
- Le classement économique global.

L'analyse révèle que, bien que la pompe à chaleur électrique achète une énergie plus chère, son COP significativement plus élevé réduit suffisamment la consommation d'énergie requise pour compenser à la fois les prix de l'électricité et les coûts d'infrastructure plus élevés.

Pendant ce temps, l'option diesel nécessite un investissement d'infrastructure comparativement faible mais devient la solution la plus chère une fois les coûts d'exploitation annuels pris en compte.

Au lieu de présenter plusieurs calculs d'ingénierie déconnectés, le classeur produit une unique comparaison commerciale où chaque alternative est évaluée avec des hypothèses et une méthodologie financière identiques.

Les décideurs peuvent donc justifier les recommandations en utilisant l'économie de cycle de vie plutôt que des composants de coût isolés.

---

## Référence des formules

<details>
<summary>Feuille Project Input</summary>

| Formule | Objet |
|---------|----------|
| IF | Conversion d'unités entre MWh et GJ utile |
| Data Validation | Intégrité des saisies |
| Named Ranges | Gestion centrale des paramètres |

</details>

<details>
<summary>Hypothèses de combustible</summary>

| Formule | Objet |
|---------|----------|
| MAP() | Évaluer chaque type de combustible dynamiquement |
| LAMBDA() | Appliquer une logique de conversion identique |
| IF() | Séparer les calculs de rendement de combustion de ceux du COP des pompes à chaleur |

</details>

<details>
<summary>Hypothèses d'infrastructure</summary>

| Formule | Objet |
|---------|----------|
| BYROW() | Agréger l'investissement d'infrastructure par technologie |
| SUM() | Consolidation du CAPEX |
| Dynamic Arrays | Expansion automatique lorsque de nouvelles technologies sont ajoutées |

</details>

<details>
<summary>Moteur de calcul</summary>

| Formule | Objet |
|---------|----------|
| MAP() | Consommation annuelle de combustible physique |
| PMT() | Investissement d'infrastructure annualisé |
| Dynamic Arrays | Calculs de coût d'exploitation annuel |
| RANK.EQ() | Classement économique automatique |
| Array Arithmetic | Coût normalisé par GJ utile |

</details>

<details>
<summary>Analyse de sensibilité</summary>

| Formule | Objet |
|---------|----------|
| Dynamic Arrays | Génération de la matrice de scénarios |
| Parameter References | Mises à jour centrales des hypothèses |
| Ranking Functions | Analyse de la stabilité de la recommandation |

</details>

## Règles de validation

| Champ | Règle de validation | Comportement en cas d'erreur |
|-------|-----------------|----------------|
| Énergie utile annuelle | Doit être supérieure à zéro | Calcul bloqué |
| Heures d'exploitation | Valeur numérique positive | Avertissement affiché |
| Taux d'actualisation | 0–100% | Pourcentage invalide rejeté |
| Période d'amortissement | Entier positif | Annualisation désactivée jusqu'à correction |
| Prix du combustible | Ne peut pas être négatif | Calculs de coût suspendus |
| Rendement des équipements | Entre 0% et 100% | Avertissement de validation |
| COP de la pompe à chaleur | Supérieur à zéro | Calculs d'électricité empêchés |
| CAPEX d'infrastructure | Ne peut pas être négatif | CAPEX annualisé indisponible |
| Charge mensuelle fixe | Ne peut pas être négative | Avertissement de TCO annuel |
| Taux de maintenance | Entre 0% et 100% | Avertissement de calcul d'O&M |

</details>

---

## Autres outils de cette série

- **Boîte à outils de coût de main-d'œuvre manufacturière et de planification des capacités** — Analysez l'utilisation de la main-d'œuvre, les coûts de main-d'œuvre, les heures supplémentaires et la capacité de production avec un modèle opérationnel unifié.
- **Boîte à outils de planification des stocks adaptative à la demande** — Équilibrez l'investissement en stocks, les délais des fournisseurs et les niveaux de service avec une planification de réapprovisionnement par scénarios.
- **Boîte à outils de registre des stocks pour la distribution et la fabrication** — Connectez achats, production, mouvements d'entrepôt et valorisation des stocks dans un seul classeur.
- **Boîte à outils de paie d'entreprise et de planification annuelle des capacités de main-d'œuvre** — Consolidez la paie, les heures de travail annuelles, les capacités de personnel et le budget de main-d'œuvre entre plusieurs départements.
- **Boîte à outils d'opérations locatives et d'intelligence des vacances** — Suivez l'occupation, les changements de réservation, l'exposition aux vacances et la performance opérationnelle pour les portefeuilles multi-propriétés.

---

## Licence

Ce projet est sous licence **Apache License 2.0**.

Vous êtes libre d'utiliser, de modifier et d'adapter ce classeur à des fins personnelles ou commerciales conformément aux termes de la licence Apache 2.0.

Une copie de la licence doit être incluse avec toute redistribution ou œuvre dérivée.

---

**Si ce classeur aide à améliorer vos décisions d'investissement énergétique, envisagez de donner une ⭐ au dépôt pour soutenir les futurs outils d'aide à la décision.**
