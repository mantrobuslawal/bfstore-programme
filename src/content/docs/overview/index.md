---
title: Programme Overview
description: An introduction to the Borough Furnishings engineering programme, its purpose, structure, evolution and evidence model.
---

Borough Furnishings is a fictional retailer used to explore the end-to-end engineering of cloud-native systems as an organisation evolves.

The programme is designed as a continuing engineering case study rather than a single application build. Business needs, constraints, scale, risk, and organisational capability change over time, and the technical systems evolve in response.

The objective is not to demonstrate one ideal architecture. It is to demonstrate how engineering decisions can be derived, implemented, validated, and revisited as the context changes.

## Programme purpose

The programme explores the relationship between business context and engineering outcomes.

It provides a setting in which to practise and demonstrate areas including:

- requirements engineering;
- software and cloud architecture;
- domain-driven design;
- platform engineering;
- FinOps and cloud financial management;
- application and cloud security;
- identity and access management;
- delivery automation and GitOps;
- observability and service reliability;
- data engineering and analytics;
- performance and capacity planning;
- operational resilience;
- architectural governance;
- and evidence-based validation.

These disciplines are treated as connected parts of one engineering system rather than isolated exercises.

## Business-led engineering

Technical decisions begin with the needs and constraints of the organisation.

The programme therefore does not start by assuming a final collection of services, cloud products, deployment patterns, security controls, databases, or infrastructure components.

Instead, each stage begins with a business profile that describes the organisation at that point in its evolution.

From that context, the programme identifies problems, opportunities, risks, constraints, and desired outcomes. These provide the basis for projects and requirements.

Architecture and technology choices are then evaluated as responses to those needs.

This creates the following progression:

```text
Business context
      ↓
Problems and opportunities
      ↓
Projects
      ↓
Requirements
      ↓
Architecture and decisions
      ↓
Implementation
      ↓
Validation
      ↓
Evidence
```

The intent is to make the reasoning behind technical decisions inspectable rather than presenting architecture as a collection of unexplained technology choices.

## Programme evolution

Borough Furnishings progresses through a series of business profiles.

Each profile introduces new capabilities, pressures, risks, and organisational needs.

```text
Launch
   ↓
Growth
   ↓
Expansion
   ↓
Multi-cloud evolution
```

The profiles are not simply infrastructure maturity levels. They describe changes to the wider business context from which engineering work emerges.

An architectural decision that is appropriate during Launch may therefore be inappropriate during Growth or Expansion.

The programme will preserve those changes rather than rewriting earlier stages to make them appear more sophisticated in hindsight.

This allows the evolution of the systems, decisions, and trade-offs to remain visible.

## From business context to engineering evidence

A central principle of the programme is traceability.

Material engineering work should be explainable through a chain connecting the original need to the evidence used to determine whether the resulting system satisfies it.

The intended evidence chain is:

```text
Requirement
    ↓
Fit criterion
    ↓
Architectural response
    ↓
Implementation
    ↓
Validation
    ↓
Evidence
```

Not every requirement will require every type of artefact, but significant decisions should remain traceable to the reasons they exist.

This traceability will connect appropriate artefacts such as:

- requirements and architecturally significant requirements;
- quality-attribute scenarios and utility trees;
- risks and mitigations;
- architectural decision records;
- threat models and security controls;
- implementation records;
- architectural fitness functions;
- performance and resilience tests;
- operational telemetry;
- and other validation evidence.

The goal is not documentation for its own sake. Documentation exists to preserve reasoning, support validation, expose uncertainty, and make engineering claims reviewable.

## How projects are developed

Projects are derived from the problems and opportunities identified within each business profile.

A project may involve software, cloud infrastructure, identity, security, platform capabilities, data, operations, or a combination of these areas.

Detailed work will generally progress through activities such as:

```text
Context and problem analysis
          ↓
Requirements discovery
          ↓
Architecturally significant requirements
          ↓
Quality attributes and risks
          ↓
Architectural exploration
          ↓
Decisions and trade-offs
          ↓
Implementation
          ↓
Validation
          ↓
Evidence and residual risk
```

These activities are not assumed to form a rigid one-way process.

Implementation may expose missing requirements. Validation may challenge an architectural assumption. Operational evidence may reveal that a previous decision should be revisited.

The programme therefore treats architecture and engineering as iterative activities.

## Evidence philosophy

The programme distinguishes between what has been proposed and what has actually been demonstrated.

Documentation should make clear whether something has been:

- **designed**;
- **implemented**;
- **tested**;
- **validated**;
- **demonstrated**;
- **assumed**;
- or remains **planned**.

Claims should also record relevant conditions and limitations where these materially affect their meaning.

For example, a performance target is not considered demonstrated merely because an architecture appears capable of meeting it. Evidence should describe the workload, environment, constraints, measurements, and acceptance criteria used to evaluate the claim.

The same principle applies to security, reliability, scalability, resilience, observability, cost, and other significant system characteristics.

This distinction allows the programme to function as an engineering record rather than a catalogue of architectural intentions.

## Programme structure

The documentation is organised into four main areas beyond this overview.

### Profiles

[Profiles](../profiles/) describe the changing business context of Borough Furnishings.

They provide the source context for identifying problems, opportunities, constraints, and engineering initiatives.

### Projects

[Projects](../projects/) organise the engineering work that emerges from those profiles.

Projects contain the detailed requirements, architecture, implementation, and validation work required to address particular needs.

### Evidence

[Evidence](../evidence/) records the results used to support engineering claims.

As the programme develops, this will include validation results, implementation evidence, test outcomes, operational measurements, and other material demonstrating what has actually been achieved.

### Engineering guide

The [Engineering guide](../engineering-guide/) contains programme-wide practices, standards, conventions, and reusable guidance.

Where possible, shared approaches belong in the engineering guide rather than being independently reinvented within individual projects.

## Current programme state

The programme foundation and documentation platform are established.

The initial **Launch** business profile has been defined together with its problem contexts and five starting projects:

1. Retail applications
2. Cloud and identity foundations
3. Development and delivery enablement
4. Service operation and resilience
5. Business reporting and insight

The next phase of the programme will develop the Launch profile and its projects through detailed requirements analysis before architecture and implementation decisions are formalised.

As the programme progresses, this documentation will evolve alongside the systems it describes.
