---
title: Service operation and resilience
description: The Launch project establishing operational visibility, support, recovery, and continuity capabilities for Borough Furnishings.
---

> **Project definition:** Agreed initial baseline v0.1.0  
> **Business profile:** Launch  
> **Primary problem space:** Technology delivery and operation  
> **Delivery status:** Requirements analysis not yet started

## Project at a glance

Running services create responsibilities that continue after deployment.

The Service operation and resilience project establishes the capabilities Borough Furnishings needs to understand service condition, investigate problems, respond to incidents, protect data, and restore operation after disruption.

The arrangements must remain manageable for a small team operating technology alongside the day-to-day needs of the retail business.

## Why this project exists

A service being deployed does not mean it can be operated effectively.

Borough Furnishings must be able to recognise when something is wrong, understand enough of the system to investigate it, determine who should act, and restore services and data where necessary.

Recovery arrangements must also be tested rather than existing only as documentation or architectural intent.

## Problem statement

Borough Furnishings needs to sustain its retail services through routine operation, change, and disruption.

The small team needs sufficient visibility, clear responsibilities, and practical procedures to investigate problems, protect data, and restore service.

The Service operation and resilience project will establish and validate these arrangements in proportion to Launch's business needs and available resources.

## Intended outcome

The team can:

- understand the health of important services;
- detect relevant failures;
- investigate problems using useful operational information;
- understand operational ownership;
- respond to incidents;
- restore services and data where required;
- exercise recovery procedures;
- and demonstrate that important recovery arrangements work.

Operational capability should remain proportionate to the needs of Launch rather than assuming a large dedicated operations organisation.

## Scope boundaries

### Included

This project includes:

- observability;
- operational ownership;
- support arrangements;
- incident handling;
- runbooks;
- backup;
- restoration;
- recovery exercises;
- operational readiness;
- and continuity arrangements informed by business priorities.

### Excluded

This project does not:

- define retail priorities on behalf of the business;
- implement every application-level resilience mechanism;
- independently select cloud foundations;
- own all reliability requirements;
- or assume round-the-clock staffing.

## Relationships with other projects

**Retail applications** provides meaningful application telemetry and implements behaviours required for safe operation and recovery.

**Cloud and identity foundations** provides infrastructure and access capabilities supporting monitoring, protection, backup, restoration, and recovery.

**Development and delivery enablement** provides deployment visibility and delivery mechanisms that may also participate in rollback or recovery.

**Business reporting and insight** identifies the operational dependencies, protection requirements, and data-recovery needs of the reporting capability.

## Reliability is shared

Reliability is not owned by a single project.

```text
Application behaviour
        +
Infrastructure
        +
Delivery practices
        +
Operational capability
        +
Data protection
        ↓
Overall reliability
```

Service operation and resilience coordinates operational readiness and recovery evidence.

It cannot compensate for fundamentally unsuitable application behaviour, infrastructure, or data handling.

## Business continuity

Continuity is broader than restoring servers or redeploying software.

Requirements analysis should consider how Borough Furnishings might keep essential business activity moving during disruption.

Depending on the business need, that may include:

- technical recovery;
- temporary manual procedures;
- communication with customers;
- prioritisation of outstanding orders;
- operational workarounds;
- dependency fallback arrangements;
- and restoration of trusted business information.

The appropriate arrangements must be derived from business priorities and tolerances.

## Shared concerns

Security monitoring, privacy, reliability, auditability, access control, incident response, backup, recovery, cost, and business continuity all intersect with this project.

Application and infrastructure projects remain responsible for the resilience properties of the capabilities they build.

## What this project does not decide

The project definition does not yet choose:

- observability stack;
- logging platform;
- metrics technology;
- tracing technology;
- SIEM implementation;
- incident-management tooling;
- support schedule;
- uptime target;
- SLOs;
- RTO;
- RPO;
- backup technology;
- disaster-recovery topology;
- or continuity procedures.

Those choices require requirements and business tolerances.

## Next stage

Requirements analysis will establish the business and technical conditions that operation and recovery must satisfy.

This will include identifying relevant critical services, tolerable disruption, recovery needs, evidence expectations, operational responsibilities, and constraints.

Those requirements will then drive architecture, operational practices, validation scenarios, and resilience exercises.

See the [Launch profile](../../profiles/launch/) for the business context.

See the [Launch problem contexts](../../profiles/launch-problem-contexts/) for the Technology delivery and operation problem space.

