[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Boîte à outils d'aide à la décision pour le coût de l'énergie industrielle et le coût total de possession (TCO)

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**Comparez le gaz naturel, le GPL (LPG), l'électricité et le diesel sur une base d'énergie utile réelle—en combinant coût du combustible, efficacité des équipements, investissement d'infrastructure et coût de possession sur le cycle de vie dans un seul cadre décisionnel gratuit, sans installation, disponible aux formats Navigateur et Excel.**

**Aucune inscription. Aucune installation. Gratuit dans votre navigateur.**

Essayez gratuitement la version navigateur. Si vous avez besoin de la version Excel, vous pouvez l'acheter avec une garantie de remboursement de 30 jours sans question.
>
> 🌐 **Ouvrir dans le navigateur**  
> [Version HTML en ligne](https://hyvoid.github.io/Industrial-Energy-Cost-Total-Cost-of-Ownership-TCO-Decision-Support-Toolkit/)
>
> 📥 **Télécharger Excel**  
> [achat du modèle Excel](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)

---

## Ce que cela vous aide à décider

Au lieu de comparer les seuls prix des combustibles, cette boîte à outils aide à évaluer l'impact commercial complet des solutions énergétiques industrielles alternatives.

Elle apporte de la visibilité sur :

- Le coût total de possession (TCO) annuel de chaque option énergétique concurrente.
- Le coût par unité d'énergie utile après prise en compte de l'efficacité des équipements et du COP des pompes à chaleur.
- Les besoins d'investissement d'infrastructure avant de choisir une source d'énergie.
- Si les économies d'exploitation justifient un investissement en capital plus élevé.
- Comment les variations de prix des combustibles affectent la solution privilégiée.
- Quelle option énergétique reste économiquement résiliente sous différentes conditions de marché.

Plutôt que de demander :

> « Quel combustible est le moins cher ? »

le classeur répond à la question à laquelle les décideurs sont réellement confrontés :

> **« Quelle solution énergétique offre le coût de cycle de vie le plus bas pour ce projet ? »**

---

## Flux de travail de démarrage rapide

Obtenir des résultats significatifs ne demande que quelques minutes car le classeur sépare les entrées de projet, les hypothèses d'ingénierie, les calculs et les rapports en couches dédiées.

### 1. Configurer les hypothèses du projet

Ouvrez la feuille **Project Input** et saisissez les informations qui définissent le projet.

Les paramètres typiques comprennent :

- La demande annuelle en énergie utile
- Les heures d'exploitation
- Le taux d'actualisation (WACC)
- La période d'amortissement du CAPEX

Ces valeurs restent normalement stables tout au long d'une évaluation et n'ont besoin d'être mises à jour que lorsque les hypothèses du projet changent.

---

### 2. Mettre à jour les hypothèses énergétiques et d'infrastructure

Maintenez les informations de marché à jour dans les feuilles de paramètres dédiées.

Les entrées typiques comprennent :

- Les prix du gaz naturel
- Les prix du GPL (LPG)
- Les tarifs d'électricité
- Les prix du diesel
- L'efficacité des équipements
- Le COP des pompes à chaleur
- Les frais de service mensuels
- L'investissement d'infrastructure
- Les coûts de maintenance annuels

Aucune formule de calcul ne nécessite de modification.

---

### 3. Examiner la comparaison générée automatiquement

Passez au tableau de bord.

Le classeur recalcule immédiatement :

- La consommation annuelle de combustible
- Les dépenses annuelles de combustible
- Le CAPEX annualisé
- Les coûts d'exploitation fixes
- Le coût total de possession (TCO)
- Le coût normalisé par Useful GJ
- Le classement économique de chaque option disponible

Aucun recalcul manuel ni maintenance de formule n'est requis.

---

### 4. Tester différents scénarios de marché

Ajustez les prix des combustibles, les hypothèses de CAPEX ou les paramètres financiers pour simuler des conditions de marché changeantes.

L'analyse de sensibilité se met à jour automatiquement, permettant d'évaluer plusieurs scénarios commerciaux sans reconstruire le modèle.

> **Fixez les hypothèses une fois. Mettez à jour les données de marché si nécessaire. Examinez la recommandation. Actualisez à chaque changement de marché.**

---

## Pourquoi j'ai conçu cet outil

Beaucoup de décisions d'investissement en énergie industrielle semblent évidentes parce que les équipes de décision comparent souvent le seul prix de combustible annoncé.

Malheureusement, le prix du combustible est rarement le chiffre qui détermine l'économie à long terme.

Une solution au gaz naturel peut nécessiter la construction d'un pipeline.

Une pompe à chaleur électrique peut consommer de l'électricité plus chère mais atteindre un coefficient de performance (COP) nettement supérieur.

Une installation au GPL peut éviter une infrastructure coûteuse mais encourir des coûts d'exploitation plus élevés au fil du temps.

Une solution diesel peut sembler attractive pour de petits projets tout en devenant de plus en plus coûteuse dès que la consommation annuelle atteint l'échelle de production.

Ces projets deviennent fréquemment des discussions où chaque partie prenante apporte une métrique différente.

Les équipes d'ingénierie se concentrent sur l'efficacité thermique.

Les services financiers évaluent les dépenses d'investissement.

Les responsables d'exploitation priorisent les coûts d'exploitation annuels.

Les achats négocient les contrats de combustible.

Parce que chaque participant mesure un chiffre différent, les comparaisons deviennent incohérentes.

Le véritable problème analytique n'est pas le manque de données.

C'est l'absence d'un cadre décisionnel commun.

J'ai conçu ce classeur pour normaliser chaque option concurrente dans le même langage commercial :

- une énergie utile livrée identique,
- des hypothèses financières identiques,
- une structure de coût de cycle de vie identique.

Au lieu de débattre de métriques isolées, chaque option est évaluée par rapport à un cadre économique cohérent.

L'objectif n'est pas de prouver qu'une source d'énergie est universellement meilleure qu'une autre.

L'objectif est d'identifier quelle solution produit le coût total de possession (TCO) le plus bas dans les conditions d'exploitation spécifiques d'un projet donné.

Par exemple, deux propositions concurrentes peuvent initialement sembler favoriser le gaz naturel parce que son prix de combustible est inférieur à celui de l'électricité.

Après intégration du COP des pompes à chaleur, de l'investissement d'infrastructure, de la maintenance annuelle, des frais fixes de services publics et de la récupération du capital, l'électricité peut produire un coût de cycle de vie annuel inférieur malgré un tarif énergétique unitaire plus élevé.

Sans normaliser chaque variable dans un modèle TCO commun, cette conclusion est difficile à atteindre avec confiance.

Ce classeur conditionne ce raisonnement analytique dans un cadre d'aide à la décision réutilisable plutôt qu'une feuille de calcul ponctuelle.

---

## Problèmes courants d'évaluation de l'énergie industrielle résolus par cet outil

| Problème | Sans cet outil | Avec cet outil |
|----------|-------------------|----------------|
| Les prix des combustibles sont comparés directement malgré des efficacités différentes. | Un prix de combustible plus bas est supposé à tort être la solution la moins chère. | Chaque option est normalisée à l'énergie utile livrée avant comparaison. |
| L'investissement d'infrastructure est ignoré lors de l'évaluation des fournisseurs. | Les options capitalistiques apparaissent artificiellement attractives. | Le CAPEX est annualisé et incorporé au coût total de possession (TCO). |
| Différents services utilisent différentes hypothèses financières. | L'ingénierie et la finance parviennent à des conclusions contradictoires. | Tous les scénarios partagent un cadre de calcul cohérent. |
| Les frais fixes de services publics sont omis. | Le coût d'exploitation est systématiquement sous-estimé. | Les frais de service fixes sont inclus aux côtés des coûts variables de combustible. |
| Les prix du marché changent après l'évaluation initiale. | Chaque scénario exige de reconstruire manuellement les feuilles de calcul. | L'analyse de sensibilité met à jour automatiquement les classements avec des hypothèses révisées. |
| Problème | Sans cet outil | Avec cet outil |
|----------|-------------------|----------------|
| Les projets énergétiques sont évalués sur le seul coût d'exploitation de la première année. | Le coût de possession à long terme reste caché jusqu'après la mise en œuvre. | Le combustible, l'infrastructure, la maintenance et le financement sont évalués ensemble sur le cycle de vie de l'actif. |

---

## Pour qui c'est destiné

Cette boîte à outils est conçue pour les professionnels qui doivent comparer des options énergétiques industrielles ou commerciales avec des hypothèses financières et d'ingénierie cohérentes plutôt que des chiffres de coût isolés.

Elle est particulièrement précieuse pour :

- Les consultants en énergie industrielle préparant des propositions clients.
- Les ingénieurs en mécanique et en procédés comparant les technologies de chauffage.
- Les équipes commerciales évaluant des solutions énergétiques concurrentes.
- Les propriétaires d'installations planifiant des projets de remplacement d'équipements.
- Les analystes financiers réalisant des analyses d'investissement sur le cycle de vie.
- Les entrepreneurs EPC préparant des comparaisons technico-commerciales.
- Les fabricants évaluant les scénarios de coûts d'exploitation futurs.

Aucune expertise en tableur n'est requise.

Les utilisateurs mettent simplement à jour les hypothèses du projet, examinent le tableau de bord et comparent les recommandations résultantes.

L'édition Navigateur est destinée à l'évaluation rapide pendant les discussions, tandis que l'édition Excel fournit le modèle analytique complet pour la revue technique et financière.

Ce classeur n'est **pas** destiné à remplacer les systèmes de gestion de l'énergie d'entreprise, les plateformes SCADA ou les logiciels de simulation technique détaillée.

Au lieu de cela, il comble le fossé décisionnel qui existe avant le début de l'ingénierie détaillée—quand plusieurs solutions techniquement faisables doivent être comparées rapidement, de manière cohérente et transparente.

---

## À propos

Je conçois des outils d'aide à la décision légers basés sur Excel et le navigateur pour des situations où il y a tout simplement trop de variables à évaluer mentalement.

Plutôt que de créer des logiciels d'entreprise, je me concentre sur la transformation de raisonnements analytiques reproductibles en cadres réutilisables qui aident les gens à prendre de meilleures décisions opérationnelles avec moins de travail manuel.

La question centrale derrière chaque projet est simple :

> **« Quelles informations doivent apparaître en un seul endroit pour que la prochaine décision devienne évidente ? »**

La **boîte à outils d'aide à la décision pour le coût de l'énergie industrielle et le coût total de possession (TCO)** est un exemple de cette approche—réunissant hypothèses d'ingénierie, analyse financière, calcul des coûts de cycle de vie et comparaison commerciale dans un classeur transparent que tout le monde peut examiner, auditer et adapter.

---

## Détails techniques

<details>
<summary><strong>Pour les relecteurs techniques, les praticiens d'Excel et les collaborateurs</strong></summary>

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
| Navigation | Home | Guidage utilisateur et flux de travail |
| Couche de saisie | Project Input | Hypothèses d'exploitation spécifiques au projet |
| Couche de paramètres | Fuel Assumptions, Infrastructure Assumptions | Hypothèses d'ingénierie et financières maintenues en un seul endroit |
| Couche de calcul | Calculation Engine | Conversion d'énergie utile, consommation annuelle de combustible, TCO, coût normalisé |
| Couche d'analyse | Sensitivity | Tests de scénarios de marché et évolutions de classement |
| Couche de présentation | Dashboard | Aide à la décision exécutive |
| Couche de gouvernance | Assumption Register, User Guide | Auditabilité et procédures d'exploitation |

### Flux d'informations

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

Chaque calcul en aval référence les feuilles de paramètres en amont plutôt que des constantes codées en dur. En conséquence, la mise à jour d'un prix de combustible, d'une efficacité d'équipement, d'un taux d'actualisation ou d'un investissement d'infrastructure rafraîchit automatiquement chaque calcul dépendant dans tout le classeur.

---

## Trois pièges qui piègent même les analystes énergétiques expérimentés

### Piège 1 — Comparer les prix des combustibles au lieu de l'énergie utile livrée

Une décision d'achat est prise parce que le gaz naturel semble moins cher que l'électricité sur une base de prix par unité.

Malheureusement, ces unités ne sont pas directement comparables.

Le gaz naturel, le GPL, le diesel et l'électricité utilisent tous des systèmes de mesure physiques différents et des efficacités de conversion différentes.

Comparer seulement les prix d'approvisionnement ignore la quantité d'énergie utile réellement livrée au processus.

| Comparaison | Approche incorrecte | Approche correcte |
|------------|-------------------|------------------|
| Métrique principale | Prix du combustible | Coût par Useful GJ |
| Performance des équipements | Ignorée | Efficacité et COP incluses |
| Résultat | Classement trompeur | Base économique comparable |

Le classeur convertit d'abord chaque option en une production d'énergie utile identique avant que toute comparaison financière ne commence.

Cela garantit que les technologies concurrentes sont évaluées sur une performance thermique équivalente plutôt que sur des unités d'achat incompatibles.

<details>
<summary>Logique de formule</summary>

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

### Piège 2 — Ignorer l'investissement d'infrastructure

Une recommandation de projet est faite sur le seul coût d'exploitation annuel.

Des mois plus tard, le budget de mise en œuvre révèle qu'une option exige des mises à niveau électriques importantes, l'installation d'un gazoduc, des équipements de régulation de pression ou une infrastructure de stockage.

La recommandation initiale devient soudain financièrement peu attrayante.

En incorporant l'investissement d'infrastructure directement dans le coût de possession sur le cycle de vie, le classeur empêche les dépenses en capital de devenir une réflexion après coup.

Au lieu de demander

> « Quelle option a le coût d'exploitation le plus bas ? »

le modèle demande

> « Quelle option coûte le moins cher à posséder au fil du temps ? »

La recommandation corrigée comprend :

- Le CAPEX d'infrastructure
- La maintenance annuelle
- La récupération du capital
- Les frais fixes de services publics
- Les dépenses de combustible

Ce n'est qu'après avoir combiné ces composants que deux solutions techniquement faisables peuvent être comparées équitablement.

<details>
<summary>Logique de formule</summary>

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

### Piège 3 — Supposer que les prix de l'énergie d'aujourd'hui resteront constants

Beaucoup de décisions d'investissement sont approuvées sur la base des prix du marché d'aujourd'hui comme s'ils représentaient les dix ou quinze prochaines années.

Les marchés de l'énergie se comportent rarement ainsi.

Les prix du gaz naturel fluctuent.

Les tarifs d'électricité changent.

Les prix du diesel réagissent aux perturbations de l'offre mondiale.

Les marchés du GPL varient considérablement selon les régions.

Une recommandation qui semble optimale aujourd'hui peut devenir la deuxième ou troisième meilleure option après un mouvement de prix modeste.

Au lieu de présenter une seule « meilleure réponse », le classeur évalue la robustesse de chaque solution sous des hypothèses changeantes.

| Scénario | Tableur traditionnel | Ce classeur |
|-----------|------------------------|---------------|
| Variations des prix du combustible | Reconstruction manuelle | Recalcul automatique |
| Révision du CAPEX | Plusieurs formules mises à jour manuellement | Mise à jour centrale des paramètres |
| Comparaison des classements | Difficile | Automatique |
| Évaluation de scénarios | Un cas à la fois | Plusieurs scénarios comparables |

Les décisions commerciales deviennent nettement plus fiables car les parties prenantes peuvent voir **si une recommandation reste optimale sous une incertitude de marché réaliste**, plutôt que seulement sous les hypothèses d'aujourd'hui.

<details>
<summary>Logique de formule</summary>

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

- Natural Gas Boiler
- LPG Boiler
- Electric Heat Pump
- Diesel Boiler

Le projet nécessite environ **18 000 Useful GJ** d'énergie thermique annuelle, fonctionne **5 200 heures par an** et utilise un **taux d'actualisation de 8 %** avec une **période de récupération du capital de 15 ans**.

En ne regardant que les prix des combustibles, l'équipe d'approvisionnement privilégie initialement le gaz naturel car il a le coût de combustible unitaire le plus bas.

Cependant, une fois les hypothèses du projet saisies dans le classeur, le moteur de calcul évalue bien plus que les dépenses de combustible.

Le modèle détermine automatiquement :

- La consommation de combustible physique requise après prise en compte de l'efficacité des équipements.
- Le coût d'achat annuel de combustible.
- Les frais de réseau fixes mensuels.
- L'investissement d'infrastructure requis.
- Les dépenses de maintenance annuelles.
- Le coût d'infrastructure annualisé selon le taux d'actualisation choisi.
- Le coût de possession annuel total.
- Le coût normalisé par Useful GJ.
- Le classement économique global.

L'analyse révèle que bien que la pompe à chaleur électrique achète une énergie plus chère, son COP nettement supérieur réduit la consommation d'énergie requise suffisamment pour compenser à la fois les prix de l'électricité et les coûts d'infrastructure plus élevés.

Pendant ce temps, l'option diesel nécessite un investissement d'infrastructure comparativement faible mais devient la solution la plus coûteuse dès que les coûts d'exploitation annuels sont pris en compte.

Au lieu de présenter plusieurs calculs d'ingénierie déconnectés, le classeur produit une comparaison commerciale unique où chaque alternative est évaluée avec des hypothèses et une méthodologie financière identiques.

Les décideurs peuvent donc justifier les recommandations en utilisant l'économie du cycle de vie plutôt que des composants de coût isolés.

---

## Référence des formules

<details>
<summary>Project Input Sheet</summary>

| Formule | Objet |
|---------|----------|
| IF | Conversion d'unités entre MWh et Useful GJ |
| Data Validation | Intégrité des entrées |
| Named Ranges | Gestion centrale des paramètres |

</details>

<details>
<summary>Fuel Assumptions</summary>

| Formule | Objet |
|---------|----------|
| MAP() | Évaluer chaque type de combustible dynamiquement |
| LAMBDA() | Appliquer une logique de conversion identique |
| IF() | Séparer l'efficacité de combustion des calculs de COP de pompe à chaleur |

</details>

<details>
<summary>Infrastructure Assumptions</summary>

| Formule | Objet |
|---------|----------|
| BYROW() | Agréger l'investissement d'infrastructure par technologie |
| SUM() | Consolidation du CAPEX |
| Dynamic Arrays | Expansion automatique lors de l'ajout de nouvelles technologies |

</details>

<details>
<summary>Calculation Engine</summary>

| Formule | Objet |
|---------|----------|
| MAP() | Consommation annuelle physique de combustible |
| PMT() | Investissement d'infrastructure annualisé |
| Dynamic Arrays | Calculs des coûts d'exploitation annuels |
| RANK.EQ() | Classement économique automatique |
| Array Arithmetic | Coût normalisé par Useful GJ |

</details>

<details>
<summary>Sensitivity Analysis</summary>

| Formule | Objet |
|---------|----------|
| Dynamic Arrays | Génération de la matrice de scénarios |
| Parameter References | Mises à jour centrales des hypothèses |
| Ranking Functions | Analyse de la stabilité des recommandations |

</details>

## Règles de validation

| Champ | Règle de validation | Comportement en cas d'erreur |
|-------|-----------------|----------------|
| Annual Useful Energy | Doit être supérieur à zéro | Calcul bloqué |
| Operating Hours | Valeur numérique positive | Avertissement affiché |
| Discount Rate | 0–100 % | Pourcentage invalide rejeté |
| Amortization Period | Entier positif | Annualisation désactivée jusqu'à correction |
| Fuel Price | Ne peut pas être négatif | Calculs de coût suspendus |
| Equipment Efficiency | Entre 0 % et 100 % | Avertissement de validation |
| Heat Pump COP | Supérieur à zéro | Calculs d'électricité empêchés |
| Infrastructure CAPEX | Ne peut pas être négatif | CAPEX annualisé indisponible |
| Monthly Fixed Charge | Ne peut pas être négatif | Avertissement de TCO annuel |
| Maintenance Rate | Entre 0 % et 100 % | Avertissement de calcul O&M |

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

Vous êtes libre d'utiliser, de modifier et d'adapter ce classeur à des fins personnelles ou commerciales conformément aux termes de la licence Apache License 2.0.

Une copie de la licence doit être incluse avec toute redistribution ou œuvre dérivée.

---

**Si ce classeur aide à améliorer vos décisions d'investissement énergétique, pensez à donner une ⭐ au dépôt pour soutenir les futurs outils d'aide à la décision.**
