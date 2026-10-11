---
title: Business reporting and insight
description: The Launch project establishing dependable commercial information for Borough Furnishings decision-making.
---

> **Project definition:** Agreed initial baseline v0.1.0  
> **Business profile:** Launch  
> **Primary problem space:** Business information and insight  
> **Delivery status:** Requirements analysis not yet started

## Project at a glance

Retail activity produces records, but records alone do not provide commercial understanding.

The Business reporting and insight project establishes an initial capability for answering useful business questions using dependable and understandable information.

The project should help the founder and small team assess sales, stock, costs, fulfilment, and business performance without creating a reporting or data-management burden disproportionate to Launch.

## Why this project exists

As Borough Furnishings moves from individually arranged sales to a structured online retail operation, it will generate increasing amounts of information about:

- products;
- orders;
- payments;
- stock;
- fulfilment;
- promotions;
- returns;
- and costs.

The founder needs to use relevant information to make commercial decisions and assess whether business changes achieve their intended results.

The problem is not simply to collect more data.

It is to provide sufficiently trustworthy information that answers concrete business questions.

## Problem statement

Borough Furnishings needs to turn information from its retail operation into dependable commercial insight.

The founder and small team need to understand sales, product and stock performance, fulfilment behaviour, and relevant costs without creating a disproportionate reporting burden.

The Business reporting and insight project will establish an initial capability for answering agreed business questions using clear definitions and sufficient data quality to support decisions.

## Intended outcome


The founder and team can use understandable information to answer agreed questions about the business.

They should be able to:

- understand what important figures represent;
- compare relevant business activity;
- identify material discrepancies;
- investigate those discrepancies;
- assess relevant sales and product performance;
- understand stock and fulfilment patterns;
- consider relevant costs;
- and evaluate whether changes such as promotions achieved their intended outcomes.

Reporting should evolve as useful business questions evolve.

## Scope boundaries

### Included

This project includes:

- relevant business-data collection;
- data preparation where required;
- consistent reporting definitions;
- appropriate access;
- data-quality checks;
- reconciliation support;
- and initial business reporting.

### Excluded

This project does not include:

- rebuilding a complete accounting system;
- running retail transactions;
- technical service monitoring;
- speculative predictive analytics;
- recommendation systems;
- or AI features during Launch.

## Relationships with other projects

**Retail applications** provides relevant business records and participates in establishing what those records mean.

**Cloud and identity foundations** provides suitable hosting, connectivity, identity, and access foundations.

**Development and delivery enablement** supports controlled changes to reporting code, configuration, schemas, and data-processing assets.

**Service operation and resilience** supports monitoring, investigation, protection, restoration, and recovery of the reporting capability.

## Operational information versus business insight

The distinction is based on purpose.

For example:

```text
"Which order should I dispatch?"
        ↓
Retail operational information

"How consistently are orders dispatched on time?"
        ↓
Business reporting and insight

"Why is the reporting service failing?"
        ↓
Technical observability
```

The same underlying records may sometimes contribute to all three, but the questions and decisions are different.

## Data architecture remains open

This project establishes a need for dependable commercial information.

It does **not** establish that Launch requires:

- a data warehouse;
- a data lake;
- Data Mesh;
- a data platform;
- a particular BI product;
- streaming analytics;
- a specific storage engine;
- a fixed report catalogue;
- or a particular refresh frequency.

Those decisions must follow from actual requirements, scale, governance needs, operational constraints, and business questions.

## Data quality and meaning

Dependable reporting requires more than moving values from one system to another.

Requirements analysis should consider:

- business definitions;
- source-of-truth expectations;
- completeness;
- consistency;
- timeliness;
- reconciliation;
- corrections;
- ownership;
- access;
- and how material discrepancies are investigated.

The required strength of these controls should reflect the decisions the information supports.

## Shared concerns

Security, privacy, identity, auditability, data quality, reliability, cost, operational resilience, and governance all affect the reporting capability.

FinOps considerations are especially relevant where data storage, processing, retention, or tooling introduces material expenditure.

## What this project does not decide

The project definition does not yet select:

- data architecture;
- warehouse technology;
- Data Mesh implementation;
- databases;
- event-streaming technology;
- transformation framework;
- BI platform;
- visualisation product;
- report catalogue;
- refresh schedule;
- retention policy;
- machine-learning capability;
- or AI architecture.

These choices must be justified by later requirements.

## Next stage

Requirements analysis will begin with the business questions Borough Furnishings actually needs answered.

From those questions, the programme can derive:

- information requirements;
- relevant source data;
- definitions;
- access needs;
- quality expectations;
- timeliness requirements;
- reconciliation needs;
- security and privacy constraints;
- retention considerations;
- and architecturally significant characteristics.

Only then should the reporting and data architecture be selected.

See the [Launch profile](../../profiles/launch/) for the business context.

See the [Launch problem contexts](../../profiles/launch-problem-contexts/) for the Business information and insight problem space.

