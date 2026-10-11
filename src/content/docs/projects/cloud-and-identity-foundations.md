---

title: Cloud and identity foundations
description: The Launch project establishing manageable cloud and shared identity foundations for Borough Furnishings.
----------------------------------------------------------------------------------------------------------------------

> **Project definition:** Agreed initial baseline v0.1.0
> **Business profile:** Launch
> **Primary problem space:** Technology delivery and operation
> **Delivery status:** Requirements analysis not yet started

## Project at a glance

Borough Furnishings' applications and supporting capabilities need controlled environments in which to operate.

People, workloads, and automation also require appropriate access.

The Cloud and identity foundations project establishes the shared cloud and identity capabilities needed by Launch at a scale the small team can understand, operate, secure, and evolve.

## Why this project exists

The founder has chosen to build Borough Furnishings' retail applications using cloud services.

That decision creates needs beyond the application code itself.

The business must understand:

* how cloud resources are organised;
* where workloads run;
* how environments are separated;
* how resources communicate;
* how people and workloads obtain access;
* who owns resources;
* and how usage and cost remain visible.

Without coherent foundations, these concerns risk being handled independently by each application or project.

## Problem statement

Borough Furnishings needs a manageable cloud foundation for its retail applications and supporting services.

People and workloads need appropriate access, while the business needs control over how resources are organised, connected, protected, and used.

The Cloud and identity foundations project will establish these shared capabilities at a scale appropriate to Launch, enabling the other projects to deliver and operate their services.

## Intended outcome

Applications and supporting services can operate within controlled and understandable environments.

The business can establish:

* clear resource ownership;
* appropriate environment separation;
* controlled connectivity;
* shared identity and access foundations;
* governance appropriate to Launch;
* and sufficient cost attribution and visibility to support financial decisions.

The approach should satisfy current needs without prematurely implementing the organisational complexity of later profiles.

## Scope boundaries

### Included

This project includes:

* cloud resource organisation;
* hosting foundations;
* connectivity foundations;
* environment separation;
* shared identity and access mechanisms;
* foundational resource governance;
* resource ownership;
* and foundational cost attribution.

### Excluded

This project does not define:

* retail application behaviour;
* application-specific business permissions;
* detailed release workflows;
* operational response procedures;
* later multi-cloud implementation;
* or later hybrid-cloud implementation.

## Relationships with other projects

**Retail applications** defines customer-account needs and business permissions. This project provides or enables appropriate shared identity and runtime mechanisms without taking ownership of retail authorisation rules.

**Development and delivery enablement** requires environments and access mechanisms through which delivery automation can operate.

**Service operation and resilience** depends on infrastructure, access, telemetry, protection, and restoration capabilities coordinated with this project's foundations.

**Business reporting and insight** requires suitable hosting, connectivity, identity, and access foundations for its capabilities.

## Identity boundary

Shared identity mechanisms and application authorisation are related but distinct concerns.

For example:

```text
shared identity foundation
        ↓
establishes who or what is authenticated

application requirements
        ↓
establish what that identity may do
```

A shared identity system therefore does not determine whether a staff member is allowed to refund an order, adjust inventory, or access a particular business report.

Those permissions must be derived from the requirements of the relevant project.

## FinOps and resource accountability

Cloud financial management is part of the project's responsibility because resource organisation, ownership, architecture, and usage all affect cost.

Requirements analysis should therefore consider matters such as:

* resource ownership and attribution;
* useful cost allocation;
* budgets and financial constraints where decision-relevant;
* visibility of consumption;
* forecastability;
* waste and idle resources;
* and the operational cost of maintaining the chosen foundations.

No numerical Launch budget is assumed by this project definition.

## Shared concerns

Security, identity, FinOps, reliability, continuity, observability, privacy, and governance all interact with the cloud foundation.

The project must coordinate these concerns with other projects rather than assuming ownership of every requirement that depends on cloud or identity services.

## What this project does not decide

The project definition does not yet select:

* cloud provider implementation details;
* account or subscription topology;
* network topology;
* compute model;
* Kubernetes;
* serverless platforms;
* virtual machines;
* identity provider;
* IAM product;
* policy technology;
* infrastructure-as-code tooling;
* secrets technology;
* or multi-cloud architecture.

Those choices require requirements, constraints, trade-off analysis, and architectural evidence.

## Next stage

Requirements analysis will establish the functional, security, operational, financial, reliability, governance, and other significant requirements that the Launch cloud and identity foundations must satisfy.

Only then should the architecture and provider-specific implementation be formalised.

See the [Launch profile](../../profiles/launch/) for the business context.

See the [Launch problem contexts](../../profiles/launch-problem-contexts/) for the Technology delivery and operation problem space.

