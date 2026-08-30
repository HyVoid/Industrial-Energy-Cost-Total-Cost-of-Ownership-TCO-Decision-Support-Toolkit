# Industrial Energy Cost & Total Cost of Ownership (TCO) Decision Support Toolkit

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**Compare Natural Gas, LPG, Electricity, and Diesel on a true useful-energy basis—combining fuel cost, equipment efficiency, infrastructure investment, and lifecycle ownership cost in one free, no-installation decision framework available in both Browser and Excel formats.**

**No signup. No installation. Free in your browser.**

Try the browser version for free. If you need the Excel version, you can buy it with a 7-day money-back guarantee.
>
> 🌐 **Open in Browser**  
> [HTML Live Version](https://hyvoid.github.io/Industrial-Energy-Cost-Total-Cost-of-Ownership-TCO-Decision-Support-Toolkit/)
>
> 📥 **Download Excel**  
> [excel template purchase](https://alexhasgreatestuff.gumroad.com/l/wanpmw)

---

# What It Helps You Decide

Instead of comparing fuel prices alone, this toolkit helps evaluate the complete business impact of alternative industrial energy solutions.

It provides visibility into:

- Annual Total Cost of Ownership (TCO) for every competing energy option.
- Cost per unit of useful energy after accounting for equipment efficiency and heat pump COP.
- Infrastructure investment requirements before selecting an energy source.
- Whether operating savings justify higher capital investment.
- How changes in fuel prices affect the preferred solution.
- Which energy option remains economically resilient under different market conditions.

Rather than asking:

> "Which fuel is cheapest?"

the workbook answers the question decision makers actually face:

> **"Which energy solution delivers the lowest lifecycle cost for this project?"**

---

# Quick Start Workflow

Getting meaningful results requires only a few minutes because the workbook separates project inputs, engineering assumptions, calculations, and reporting into dedicated layers.

### 1. Configure project assumptions

Open the **Project Input** sheet and enter the information that defines the project.

Typical parameters include:

- Annual useful energy demand
- Operating hours
- Discount rate (WACC)
- CAPEX amortization period

These values normally remain stable throughout an evaluation and only need updating when project assumptions change.

---

### 2. Update energy and infrastructure assumptions

Maintain current market information inside the dedicated parameter sheets.

Typical inputs include:

- Natural gas prices
- LPG prices
- Electricity tariffs
- Diesel prices
- Equipment efficiency
- Heat pump COP
- Monthly service charges
- Infrastructure investment
- Annual maintenance costs

No calculation formulas require editing.

---

### 3. Review the automatically generated comparison

Switch to the dashboard.

The workbook immediately recalculates:

- Annual fuel consumption
- Annual fuel expenditure
- Annualized CAPEX
- Fixed operating costs
- Total Cost of Ownership (TCO)
- Normalized cost per Useful GJ
- Economic ranking of every available option

No manual recalculation or formula maintenance is required.

---

### 4. Test different market scenarios

Adjust fuel prices, CAPEX assumptions, or financial parameters to simulate changing market conditions.

Sensitivity analysis updates automatically, allowing multiple commercial scenarios to be evaluated without rebuilding the model.

> **Set the assumptions once. Update market data when needed. Review the recommendation. Refresh whenever the market changes.**

---

# Why I Built This

Many industrial energy investment decisions appear straightforward because decision teams often compare only the advertised fuel price.

Unfortunately, fuel price is rarely the number that determines long-term economics.

A natural gas solution may require pipeline construction.

An electric heat pump may consume higher-priced electricity but achieve a significantly higher coefficient of performance (COP).

An LPG installation may avoid expensive infrastructure but incur higher operating costs over time.

A diesel solution may appear attractive for small projects while becoming increasingly expensive once annual consumption reaches production scale.

These projects frequently become discussions where every stakeholder brings a different metric.

Engineering teams focus on thermal efficiency.

Finance departments evaluate capital expenditure.

Operations managers prioritize annual operating costs.

Procurement negotiates fuel contracts.

Because every participant measures a different number, comparisons become inconsistent.

The real analytical problem is not missing data.

It is the lack of a common decision framework.

I built this workbook to normalize every competing option into the same business language:

- identical useful energy delivered,
- identical financial assumptions,
- identical lifecycle cost structure.

Instead of debating isolated metrics, every option is evaluated against one consistent economic framework.

The objective is not to prove that one energy source is universally better than another.

The objective is to identify which solution produces the lowest Total Cost of Ownership under the specific operating conditions of a particular project.

For example, two competing proposals may initially appear to favor Natural Gas because its fuel price is lower than Electricity.

After incorporating heat pump COP, infrastructure investment, annual maintenance, fixed utility charges, and capital recovery, Electricity may produce a lower annual lifecycle cost despite having a higher unit energy tariff.

Without normalizing every variable into a common TCO model, that conclusion is difficult to reach with confidence.

This workbook packages that analytical reasoning into a reusable decision-support framework rather than a one-off spreadsheet.

---

# Common Industrial Energy Evaluation Problems This Solves

| Problem | Without This Tool | With This Tool |
|----------|-------------------|----------------|
| Fuel prices are compared directly despite different efficiencies. | Lower fuel price is incorrectly assumed to be the cheapest solution. | Every option is normalized to useful energy delivered before comparison. |
| Infrastructure investment is ignored during supplier evaluation. | Capital-intensive options appear artificially attractive. | CAPEX is annualized and incorporated into Total Cost of Ownership. |
| Different departments use different financial assumptions. | Engineering and finance reach conflicting conclusions. | All scenarios share one consistent calculation framework. |
| Fixed utility charges are omitted. | Operating cost is systematically underestimated. | Fixed service fees are included alongside variable fuel costs. |
| Market prices change after initial evaluation. | Every scenario requires rebuilding spreadsheets manually. | Sensitivity analysis automatically updates rankings using revised assumptions. |
| Problem | Without This Tool | With This Tool |
|----------|-------------------|----------------|
| Energy projects are evaluated using first-year operating cost only. | Long-term ownership cost remains hidden until after implementation. | Fuel, infrastructure, maintenance, and financing are evaluated together over the asset lifecycle. |

---

# Who This Is For

This toolkit is designed for professionals who need to compare industrial or commercial energy options using consistent financial and engineering assumptions rather than isolated cost figures.

It is particularly valuable for:

- Industrial energy consultants preparing customer proposals.
- Mechanical and process engineers comparing heating technologies.
- Commercial sales teams evaluating competing energy solutions.
- Facility owners planning equipment replacement projects.
- Financial analysts performing lifecycle investment analysis.
- EPC contractors preparing technical-commercial comparisons.
- Manufacturers evaluating future operating cost scenarios.

No spreadsheet expertise is required.

Users simply update project assumptions, review the dashboard, and compare the resulting recommendations.

The Browser edition is intended for quick evaluation during discussions, while the Excel edition provides the complete analytical model for engineering and financial review.

This workbook is **not** intended to replace enterprise energy management systems, SCADA platforms, or detailed engineering simulation software.

Instead, it fills the decision gap that exists before detailed engineering begins—when multiple technically feasible solutions must be compared quickly, consistently, and transparently.

---

# About

I build lightweight Excel and browser-based decision-support tools for situations where there are simply too many variables to evaluate mentally.

Rather than creating enterprise software, I focus on turning repeatable analytical reasoning into reusable frameworks that help people reach better operational decisions with less manual work.

The central question behind every project is simple:

> **"What information needs to appear in one place so the next decision becomes obvious?"**

The **Industrial Energy Cost & Total Cost of Ownership (TCO) Decision Support Toolkit** is one example of that approach—bringing engineering assumptions, financial analysis, lifecycle costing, and commercial comparison together inside a transparent workbook that anyone can review, audit, and adapt.

---

# Technical Details

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
