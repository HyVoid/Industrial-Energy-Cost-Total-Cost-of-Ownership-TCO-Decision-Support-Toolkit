[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Industrial Energy TCO Calculator & Fuel Cost Comparison Excel Template (Natural Gas vs. LPG vs. Electricity vs. Diesel)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/869c90a4-4548-491b-b4ae-65b7bca29c50" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-TCO%20Financial%20Model-orange)

**An interactive Industrial Energy Total Cost of Ownership (TCO) Calculator and Excel Spreadsheet Model designed to compare Natural Gas, LPG, Electricity, and Diesel on a normalized useful-energy ($/GJ) basis. Evaluate industrial heating CAPEX, OPEX, boiler thermal efficiency, heat pump COP, and lifecycle ownership costs in one standardized engineering economics framework—available as a free web calculator and a downloadable Excel template.**

**No signup. No installation. Free to test in your browser.**

Use the interactive web application for rapid initial screening, or download the unlocked Excel spreadsheet model for deep financial auditing, multi-scenario saving, and client presentations—backed by a 30-day, no-questions-asked money-back guarantee.

> 🌐 **Launch Free Web Calculator**  
> [Interactive Industrial Energy Cost & TCO Web Calculator (Browser Edition)](https://hyvoid.github.io/industrial-energy-tco-calculator/)
>
> 📥 **Get the Full Spreadsheet Model**  
> [Download the Editable Industrial Energy TCO & Fuel Comparison Excel Template](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)

---

## What It Helps You Track & Decide: Pain-Point to Solution Mapping

Instead of comparing raw utility tariffs in isolation, this engineering economics toolkit tracks and resolves the critical blind spots in **industrial decarbonization**, **boiler replacement**, and **plant electrification** evaluations:

| Target Tracking Metric / Pain Point | The Common Analytical Blind Spot | How This TCO Model Solves & Tracks It |
| :--- | :--- | :--- |
| **Normalized Useful Energy Cost ($/GJ or $/MMBtu)** | Comparing raw fuel prices ($/kWh, $/Therm, $/Liter) without adjusting for conversion losses. | Tracks **delivered useful heat** by factoring in combustion boiler thermal efficiency (%) and industrial heat pump COP. |
| **Annualized Infrastructure CAPEX & WACC** | Treating pipeline connection fees, electrical substation upgrades, or storage tanks as sunk costs. | Tracks upfront **CAPEX amortization** over the asset lifecycle using your specific **Discount Rate (WACC)** via the Capital Recovery Factor. |
| **Blended Lifecycle OPEX & Fixed Utility Tariffs** | Ignoring monthly peak demand charges, meter fees, and preventive maintenance schedules. | Tracks both variable fuel expenditure and fixed utility service charges to output a true **Annual Total Cost of Ownership (TCO)**. |
| **Cross-Fuel Price Sensitivity & Break-Even Analysis** | Static spreadsheets break when commodity markets fluctuate or carbon pricing is introduced. | Tracks **multi-scenario fuel price sensitivity**, dynamically updating the economic ranking as electricity tariffs or gas prices shift. |
| **Electrification vs. Fossil Fuel Trade-Offs** | Assuming industrial heat pumps are too expensive due to high per-kWh electricity tariffs. | Quantifies the exact **OPEX-to-CAPEX trade-off**, showing when high COP efficiency offsets higher electricity rates and equipment costs. |

Rather than asking:
> *"Which fuel tariff looks cheapest on paper?"*

This financial model answers the question capital project stakeholders actually face:
> **"Which industrial heating and energy solution delivers the lowest risk-adjusted lifecycle cost for our specific plant operating profile?"**

---

## How to Run an Industrial Fuel Cost & TCO Analysis (Quick Start Workflow)

Getting audit-ready financial and engineering comparisons takes less than 5 minutes. The architecture cleanly separates project inputs, thermodynamic parameters, financial formulas, and executive reporting layers.

### Step 1: Configure Baseline Plant & Financial Parameters
Open the **Project Input** module to establish your facility's baseline operational and financial boundary conditions:
- **Annual Useful Energy Demand** (GJ/year or MMBtu/year)
- **Plant Operating Hours** (hours/year for capacity factor calculation)
- **Weighted Average Cost of Capital (WACC / Discount Rate %)**
- **Equipment Depreciation & CAPEX Amortization Period** (years)

*Action:* Test your baseline numbers instantly using the [Free Browser TCO Calculator](https://hyvoid.github.io/industrial-energy-tco-calculator/).

---

### Step 2: Input Utility Tariffs, Equipment Efficiency & CAPEX Quotes
Populate the parameter tables with your local utility rates and vendor engineering quotes:
- **Commercial Fuel Tariffs:** Natural gas rates, bulk LPG prices, industrial electricity tariffs, and diesel fuel costs.
- **Thermodynamic Performance:** Gas/diesel boiler thermal efficiency (%) and industrial heat pump Coefficient of Performance (COP).
- **Capital & Fixed Costs:** Pipeline/grid infrastructure investment, monthly utility demand charges, and annual O&M costs.

*Zero formula maintenance required—all unit conversions and calorific value normalizations happen automatically.*

---

### Step 3: Audit the Automated TCO Dashboard & LCOH Ranking
Switch to the **Executive Summary Dashboard** to review the real-time engineering economics output:
- **Annual Fuel Consumption** (in native billing units and normalized energy units)
- **Annualized CAPEX vs. Variable OPEX Breakdown**
- **Levelized Cost of Heat (LCOH) / Normalized Cost per Useful GJ**
- **Automated Economic Ranking** across Natural Gas, LPG, Electricity, and Diesel

---

### Step 4: Run Fuel Price Sensitivity Analysis & Export to Excel for Reusable Modeling
Simulate commodity market volatility by adjusting fuel tariffs, WACC, or CAPEX assumptions to stress-test your investment decision.

> 💡 **Need to save your scenarios, customize formulas, or present to the board?**  
> While the browser version is ideal for single-session screening, real-world capital projects require iterative auditing, team collaboration, and permanent documentation.  
> 👉 **[Download the Full Unlocked Excel Template Here](https://www.theseusworkshop.com/l/wanpmw?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=industrial-energy-tco)** to save unlimited project baselines, audit every underlying cell formula, customize sheets for different plant locations, and export board-ready charts for your CAPEX approval proposals.

---

## The Business Logic & Methodology

To bridge the communication gap between **Process Engineering** (who think in kW, COP, and thermal efficiency) and **Corporate Finance** (who think in WACC, NPV, and CAPEX amortization), this toolkit implements a 4-stage analytical methodology:

1. **Thermodynamic Energy Normalization (The "Useful GJ" Standard):**  
   Raw fuels are billed in incompatible units (e.g., $/kWh for electricity, $/m³ or $/MMBtu for natural gas, $/liter for diesel, $/ton for LPG). Comparing raw unit prices is mathematically flawed because a gas boiler operating at 82% thermal efficiency loses 18% of its purchased energy up the flue stack, whereas an industrial heat pump with a COP of 3.2 delivers 3.2 units of useful heat for every 1 unit of electrical energy purchased. This model applies **First-Law Thermodynamic Normalization**, converting all fuel inputs into **Cost per Delivered Useful Gigajoule ($/Useful GJ)** based on Lower Heating Values (LHV) and system conversion efficiencies.
2. **Equivalent Annual Cost (EAC) & Capital Recovery Modeling:**  
   Industrial energy transitions—such as switching from LPG to a Natural Gas pipeline, or electrifying a steam system—require vastly different upfront Capital Expenditures (CAPEX). Simply dividing CAPEX by project years ignores the time value of money. This toolkit utilizes the **Capital Recovery Factor (CRF)** method:
   $$\text{Annualized CAPEX} = \text{CAPEX} \times \frac{r(1+r)^n}{(1+r)^n - 1}$$
   *(where $r$ is the corporate WACC/discount rate and $n$ is the asset economic life).* This converts lumpy upfront infrastructure investments into an exact annual equivalent cost that can be added directly to annual operating expenses.
3. **Full-Absorption OPEX Accounting:**  
   Beyond variable fuel consumption, industrial utility bills carry heavy fixed structures—such as electrical peak demand charges, gas pipeline capacity reservation fees, and specialized equipment maintenance (e.g., burner tuning vs. compressor overhauls). The methodology aggregates **Annualized CAPEX + Variable Fuel Cost + Fixed Utility Tariffs + Annual O&M** to derive the true **Levelized Cost of Heat (LCOH)** and **Annual TCO**.
4. **Deterministic Sensitivity & Break-Even Matrix:**  
   Because industrial assets operate for 10 to 25 years, a decision based on spot energy prices exposes the enterprise to severe commodity risk. The model decouples static engineering parameters from volatile market variables, enabling instant **ceteris paribus sensitivity testing** to identify exact price break-even thresholds between competing fuels.

---

## Why I Built This: Bridging the Engineering-Finance Divide

Many industrial energy investment decisions fail during executive review because stakeholders evaluate isolated metrics rather than a unified economic model:

- **Plant & Mechanical Engineers** focus on combustion thermal efficiency and heat pump COP.
- **Corporate Finance & CFOs** scrutinize upfront CAPEX hurdles and WACC discount rates.
- **Facility & Operations Managers** prioritize annual OPEX stability and maintenance reliability.
- **Energy Procurement Teams** focus purely on negotiating lower unit fuel tariffs.

A natural gas boiler may offer a low per-unit fuel tariff but require $500,000 in trenching and pipeline connection CAPEX. An industrial electric heat pump may face higher per-kWh utility tariffs, yet achieve a 3.5x COP that slashes total energy volume. An LPG or Diesel system may minimize upfront CAPEX but bleed cash through high variable fuel OPEX at production scale.

The real analytical bottleneck is not missing data—it is the lack of a **standardized engineering economics framework**. I built this workbook to normalize every competing energy vector into a single business language: **identical useful energy delivered, identical WACC financial assumptions, and identical lifecycle cost structures.**

---

## Standard Spreadsheets vs. This Industrial Energy TCO Framework

| Evaluation Dimension | Ad-Hoc Internal Spreadsheets (Without This Tool) | Standardized TCO Decision Framework (With This Tool) |
| :--- | :--- | :--- |
| **Thermodynamic Efficiency & COP** | Nominal fuel tariffs ($/kWh vs. $/m³) are compared directly without adjusting for conversion efficiency, leading to false cost rankings. | Automatically normalizes calorific values, boiler thermal efficiency (%), and heat pump COP into **Cost per Delivered Useful GJ ($/GJ)**. |
| **Infrastructure CAPEX & WACC** | Upfront pipeline construction, transformer upgrades, or tank installations are omitted from unit fuel cost calculations. | Applies the **Capital Recovery Factor (CRF)** using your corporate WACC to amortize CAPEX into an Equivalent Annual Cost (EAC). |
| **Cross-Departmental Alignment** | Engineering models BTU/hr in one sheet while Finance models cash flow in another, resulting in conflicting CAPEX proposal conclusions. | Unifies thermodynamic engineering parameters and corporate finance metrics inside one **audit-ready, transparent calculation engine**. |
| **Utility Tariff Structure & O&M** | Fixed monthly demand charges, grid connection fees, and differential maintenance costs are overlooked, underestimating OPEX by 15–30%. | Incorporates **fixed service fees, demand charges, and annual O&M schedules** alongside variable fuel consumption. |
| **Commodity Price Volatility** | Changing a single fuel price or discount rate requires manually rewriting formulas across multiple broken tabs. | **Dynamic sensitivity analysis** recalculates lifecycle rankings and $/GJ break-even points instantly when market assumptions shift. |
| **Lifecycle Investment Horizon** | Projects are judged solely on Year-1 operating cost or simple payback, hiding 10-to-20-year lifecycle cost liabilities. | Evaluates **fuel, infrastructure CAPEX, maintenance, and financing costs concurrently** across the entire asset lifecycle. |

---

## Who This Is For: Target Roles & Industrial Use Cases

This toolkit is built for technical and commercial professionals who need an **audit-ready Excel template or web calculator** to justify capital projects without building complex financial models from scratch:

- **Industrial Energy Consultants & Energy Auditors:** Use this as a **client proposal generator and ASHRAE Level 2/3 financial analysis template** when evaluating fuel-switching, plant electrification, or thermal decarbonization roadmaps.
- **Mechanical, Process & Plant Engineers:** Use this as a **boiler replacement and industrial heat pump sizing calculator** to translate thermodynamic efficiency gains (COP vs. combustion efficiency) into CFO-ready financial metrics.
- **Commercial HVAC & Cleantech Sales Engineers:** Use this as an **interactive ROI & TCO sales enablement calculator** during customer discovery calls to prove how high-efficiency equipment (e.g., electric heat pumps, biomass, or high-efficiency boilers) lowers total lifecycle cost despite higher upfront CAPEX.
- **Facility Managers & Plant Operations Directors:** Use this as a **utility budget forecasting and CAPEX justification spreadsheet** when planning aging equipment retrofits, off-grid LPG-to-Natural Gas conversions, or diesel generator/boiler phase-outs.
- **Corporate Financial Analysts & CAPEX Controllers:** Use this as a **standardized engineering economics valuation model** to audit vendor claims, enforce consistent WACC hurdle rates, and stress-test project NPV against energy price volatility.
- **EPC Contractors & Design-Build Firms:** Use this as a **technical-commercial bid comparison matrix** during Pre-FEED and feasibility studies to present transparent, multi-option lifecycle cost trade-offs to project owners.

---

## Frequently Asked Industrial Energy Scenarios & Use Cases

If you are searching for a reliable model to evaluate any of the following capital project scenarios, this toolkit is pre-configured to handle the math:

- **Industrial Electrification & Decarbonization:** *How do I calculate the TCO break-even point between an industrial electric heat pump and a natural gas steam/hot water boiler?*
- **Off-Grid Fuel Switching Analysis:** *What is the true lifecycle cost comparison when switching a manufacturing plant from Diesel or bulk LPG to piped Natural Gas, factoring in pipeline CAPEX?*
- **Levelized Cost of Heat (LCOH) Modeling:** *How do I normalize different fuel billing units (kWh, Therms, Liters, kg, GJ, MMBtu) into a single comparable metric for an executive CAPEX proposal?*
- **Tariff & Carbon Price Stress-Testing:** *At what electricity-to-gas price ratio (Spark Gap) does plant electrification become economically viable for continuous vs. batch manufacturing processes?*

---

## About Theseus Workshop

I build lightweight, transparent Excel and browser-based decision-support frameworks for operational and capital allocation problems where there are too many interacting variables to evaluate mentally.

Rather than building bloated enterprise SaaS platforms or black-box simulation software, I focus on packaging repeatable engineering and financial reasoning into clean, auditable models that bridge the gap between technical feasibility and commercial reality.

The central design principle behind every toolkit is simple:
> **"What exact data needs to be normalized in one place so the optimal capital decision becomes mathematically obvious?"**

---
*Keywords: Industrial Energy TCO Calculator, Fuel Cost Comparison Excel Template, Levelized Cost of Heat (LCOH) Spreadsheet, Boiler vs Heat Pump ROI Model, Natural Gas vs LPG vs Electricity Cost Calculator, Engineering Economics CAPEX OPEX Template.*

---

## Technical Details

<details>
<summary><strong>For technical reviewers, Excel practitioners, and collaborators</strong></summary>

## Workbook Architecture

The workbook follows a layered architecture that separates data entry, engineering assumptions, calculation logic, and executive reporting. This separation minimizes formula maintenance while making every calculation traceable back to a single source of truth.

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

| Layer | Primary Worksheets | Responsibility |
|--------|-------------------|----------------|
| Navigation | Home | User guidance and workflow |
| Input Layer | Project Input | Project-specific operating assumptions |
| Parameter Layer | Fuel Assumptions, Infrastructure Assumptions | Engineering and financial assumptions maintained in one place |
| Calculation Layer | Calculation Engine | Useful energy conversion, annual fuel usage, TCO, normalized cost |
| Analysis Layer | Sensitivity | Market scenario testing and ranking changes |
| Presentation Layer | Dashboard | Executive decision support |
| Governance Layer | Assumption Register, User Guide | Auditability and operating procedures |

### Information Flow

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

Every downstream calculation references upstream parameter sheets rather than hard-coded constants. As a result, updating a fuel price, equipment efficiency, discount rate, or infrastructure investment automatically refreshes every dependent calculation throughout the workbook.

---

## Three Traps That Catch Even Experienced Energy Analysts

### Trap 1 — Comparing Fuel Prices Instead of Delivered Useful Energy

A purchasing decision is made because Natural Gas appears cheaper than Electricity on a price-per-unit basis.

Unfortunately, those units are not directly comparable.

Natural Gas, LPG, Diesel, and Electricity all use different physical measurement systems and different conversion efficiencies.

Comparing only procurement prices ignores the amount of useful energy actually delivered to the process.

| Comparison | Incorrect Approach | Correct Approach |
|------------|-------------------|------------------|
| Primary Metric | Fuel price | Cost per Useful GJ |
| Equipment Performance | Ignored | Efficiency and COP included |
| Result | Misleading ranking | Comparable economic basis |

The workbook first converts every option into identical useful energy output before any financial comparison begins.

This ensures that competing technologies are evaluated on equivalent thermal performance rather than incompatible purchasing units.

<details>
<summary>Formula logic</summary>

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

### Trap 2 — Ignoring Infrastructure Investment

A project recommendation is made using annual operating cost only.

Months later, the implementation budget reveals that one option requires significant electrical upgrades, gas pipeline installation, pressure regulation equipment, or storage infrastructure.

The original recommendation suddenly becomes financially unattractive.

By incorporating infrastructure investment directly into lifecycle ownership cost, the workbook prevents capital expenditure from becoming an afterthought.

Instead of asking

> "Which option has the lowest operating cost?"

the model asks

> "Which option costs the least to own over time?"

The corrected recommendation includes:

- Infrastructure CAPEX
- Annual maintenance
- Capital recovery
- Fixed utility charges
- Fuel expenditure

Only after these components are combined can two technically feasible solutions be compared fairly.

<details>
<summary>Formula logic</summary>

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

### Trap 3 — Assuming Today's Energy Prices Will Stay Constant

Many investment decisions are approved using today's market prices as though they represent the next ten or fifteen years.

Energy markets rarely behave that way.

Natural gas prices fluctuate.

Electricity tariffs change.

Diesel prices respond to global supply disruptions.

LPG markets vary significantly by region.

A recommendation that appears optimal today may become the second- or third-best option after only modest price movement.

Instead of presenting a single "best answer," the workbook evaluates how robust each solution remains under changing assumptions.

| Scenario | Traditional Spreadsheet | This Workbook |
|-----------|------------------------|---------------|
| Fuel price changes | Manual rebuilding | Automatic recalculation |
| CAPEX revision | Multiple formulas updated manually | Central parameter update |
| Ranking comparison | Difficult | Automatic |
| Scenario evaluation | One case at a time | Multiple comparable scenarios |

Commercial decisions become significantly more reliable because stakeholders can see **whether a recommendation remains optimal under realistic market uncertainty**, rather than only under today's assumptions.

<details>
<summary>Formula logic</summary>

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

## Example Scenario

A food manufacturing facility plans to replace its aging steam generation system.

The engineering team identifies four technically feasible alternatives:

- Natural Gas Boiler
- LPG Boiler
- Electric Heat Pump
- Diesel Boiler

The project requires approximately **18,000 Useful GJ** of annual thermal energy, operates **5,200 hours per year**, and uses an **8% discount rate** with a **15-year capital recovery period**.

Looking only at fuel prices, the procurement team initially favors Natural Gas because it has the lowest unit fuel cost.

However, once the project assumptions are entered into the workbook, the calculation engine evaluates much more than fuel expenditure.

The model automatically determines:

- Required physical fuel consumption after accounting for equipment efficiency.
- Annual fuel purchasing cost.
- Monthly fixed network charges.
- Required infrastructure investment.
- Annual maintenance expenditure.
- Annualized infrastructure cost using the selected discount rate.
- Total annual ownership cost.
- Normalized cost per Useful GJ.
- Overall economic ranking.

The analysis reveals that although the Electric Heat Pump purchases more expensive energy, its significantly higher COP reduces required energy consumption enough to offset both electricity prices and higher infrastructure costs.

Meanwhile, the Diesel option requires comparatively little infrastructure investment but becomes the most expensive solution once annual operating costs are considered.

Instead of presenting several disconnected engineering calculations, the workbook produces a single commercial comparison where every alternative is evaluated using identical assumptions and financial methodology.

Decision makers can therefore justify recommendations using lifecycle economics rather than isolated cost components.

---

## Formula Reference

<details>
<summary>Project Input Sheet</summary>

| Formula | Purpose |
|---------|----------|
| IF | Unit conversion between MWh and Useful GJ |
| Data Validation | Input integrity |
| Named Ranges | Central parameter management |

</details>

<details>
<summary>Fuel Assumptions</summary>

| Formula | Purpose |
|---------|----------|
| MAP() | Evaluate every fuel type dynamically |
| LAMBDA() | Apply identical conversion logic |
| IF() | Separate combustion efficiency from Heat Pump COP calculations |

</details>

<details>
<summary>Infrastructure Assumptions</summary>

| Formula | Purpose |
|---------|----------|
| BYROW() | Aggregate infrastructure investment by technology |
| SUM() | CAPEX consolidation |
| Dynamic Arrays | Automatic expansion when new technologies are added |

</details>

<details>
<summary>Calculation Engine</summary>

| Formula | Purpose |
|---------|----------|
| MAP() | Annual physical fuel consumption |
| PMT() | Annualized infrastructure investment |
| Dynamic Arrays | Annual operating cost calculations |
| RANK.EQ() | Automatic economic ranking |
| Array Arithmetic | Normalized Cost per Useful GJ |

</details>

<details>
<summary>Sensitivity Analysis</summary>

| Formula | Purpose |
|---------|----------|
| Dynamic Arrays | Scenario matrix generation |
| Parameter References | Central assumption updates |
| Ranking Functions | Recommendation stability analysis |

</details>

## Validation Rules

| Field | Validation Rule | Error Behavior |
|-------|-----------------|----------------|
| Annual Useful Energy | Must be greater than zero | Calculation blocked |
| Operating Hours | Positive numeric value | Warning displayed |
| Discount Rate | 0–100% | Invalid percentage rejected |
| Amortization Period | Positive integer | Annualization disabled until corrected |
| Fuel Price | Cannot be negative | Cost calculations suspended |
| Equipment Efficiency | Between 0% and 100% | Validation warning |
| Heat Pump COP | Greater than zero | Electricity calculations prevented |
| Infrastructure CAPEX | Cannot be negative | Annualized CAPEX unavailable |
| Monthly Fixed Charge | Cannot be negative | Annual TCO warning |
| Maintenance Rate | Between 0% and 100% | O&M calculation warning |

</details>

---

## Other Tools in This Series

- **Manufacturing Labor Cost & Capacity Planning Toolkit** — Analyze workforce utilization, labor cost, overtime, and production capacity using a unified operational model.
- **Demand-Adaptive Inventory Planning Toolkit** — Balance inventory investment, supplier lead times, and service levels with scenario-based replenishment planning.
- **Retail & Manufacturing Inventory Ledger Toolkit** — Connect purchasing, production, warehouse movements, and inventory valuation in a single workbook.
- **Enterprise Payroll & Annual Workforce Capacity Planning Toolkit** — Consolidate payroll, annual working hours, staffing capacity, and labor budgeting across multiple departments.
- **Rental Property Operations & Vacancy Intelligence Toolkit** — Track occupancy, booking changes, vacancy exposure, and operational performance for multi-property portfolios.

---

## License

This project is licensed under the **Apache License 2.0**.

You are free to use, modify, and adapt this workbook for personal or commercial purposes in accordance with the terms of the Apache License 2.0.

A copy of the license should be included with any redistribution or derivative work.

---

**If this workbook helps improve your energy investment decisions, consider giving the repository a ⭐ to support future decision-support tools.**
