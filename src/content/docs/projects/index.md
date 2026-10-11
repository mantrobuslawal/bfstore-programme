---
title: Projects
description: Engineering projects derived from the needs and constraints of each Borough Furnishings business profile.
---

Projects organise the engineering work required to address problems and opportunities identified within each Borough Furnishings business profile.

They sit between problem identification and detailed requirements analysis.

```text
Business profile
      ↓
Problem contexts
      ↓
Projects
      ↓
Requirements analysis
      ↓
Architecture and decisions
      ↓
Implementation
      ↓
Validation and evidence
```

A project establishes a coherent area of engineering work by defining the problem it addresses, its intended outcome, its boundaries, and its relationships with other work.

A project does **not** automatically define:

- a team;
- a repository;
- an application;
- a service;
- a deployment unit;
- an architecture;
- or an implementation order.

Those boundaries are established later when requirements and architectural evidence justify them.

## Launch project baseline

The initial Launch profile produces five starting projects across three problem spaces.

| Problem space | Project | Intended outcome |
| --- | --- | --- |
| **Digital retail and order fulfilment** | [Retail applications](./retail-applications/) | Customers purchase independently while staff manage stock, orders, fulfilment, and customer issues. |
| **Technology delivery and operation** | [Cloud and identity foundations](./cloud-and-identity-foundations/) | Controlled, manageable environments and shared identity and access foundations. |
| **Technology delivery and operation** | [Development and delivery enablement](./development-and-delivery-enablement/) | Repeatable development, verification, and release of software and infrastructure changes. |
| **Technology delivery and operation** | [Service operation and resilience](./service-operation-and-resilience/) | Understand service health, respond to problems, and restore services and data with evidence. |
| **Business information and insight** | [Business reporting and insight](./business-reporting-and-insight/) | Dependable and understandable information for commercial decisions. |

The same small team may contribute across several projects.

A project may eventually contain several applications, services, infrastructure components, data products, or other implementation units. Those decisions remain open.

## Shared concerns

Some concerns cross project boundaries and require coordination rather than being delegated to a single project.

| Concern | Programme treatment |
| --- | --- |
| **Security and privacy** | Each project owns the controls and evidence relevant to its work, supported by programme-wide AppSec and security standards. |
| **FinOps** | Cloud expenditure, application choices, data processing, operational effort, and business value contribute to one financial picture. |
| **Identity** | Shared foundations provide mechanisms; applications and operational capabilities define their specific access needs. |
| **Reliability and quality** | Application behaviour, infrastructure, delivery practices, operations, and data handling all contribute. |
| **Business continuity** | Business priorities inform technical recovery and practical arrangements for keeping essential work moving. |

These concerns may produce programme-wide standards, shared capabilities, requirements, and architectural decisions, but responsibility remains distributed across the projects that use them.

## Current stage

The initial programme foundation has progressed through:

```text
Programme and documentation foundation
        ↓
Launch business profile
        ↓
Launch problem contexts
        ↓
Launch project identification
```

The next stage is **requirements analysis**.

Each project's requirements will be derived from the Launch profile, the relevant problem contexts, project boundaries, stakeholder needs, risks, and cross-cutting concerns.

Detailed architecture, technology choices, implementation structure, budgets, delivery estimates, and acceptance criteria are not established by the project definitions.

See the [Launch profile](../profiles/launch/) for the underlying business context.

See the [Launch problem contexts](../profiles/launch-problem-contexts/) for the problem spaces from which these projects were derived.
