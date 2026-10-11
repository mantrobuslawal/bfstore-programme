---
title: Development and delivery enablement
description: The Launch project establishing repeatable workflows for developing, verifying, and releasing Borough Furnishings changes.
---

> **Project definition:** Agreed initial baseline v0.1.0  
> **Business profile:** Launch  
> **Primary problem space:** Technology delivery and operation  
> **Delivery status:** Requirements analysis not yet started

## Project at a glance

Borough Furnishings needs a dependable way for its small team to turn changes into verified, releasable software and infrastructure.

The Development and delivery enablement project establishes shared workflows, automation, and guidance that make development and release activity understandable and repeatable.

Its role is to enable the other projects to deliver changes consistently without creating tooling and maintenance overhead disproportionate to Launch.

## Why this project exists

As the programme develops, changes will span application code, infrastructure, configuration, data-related assets, and operational material.

If every project invents its own delivery process independently, the small team may face unnecessary variation, fragile manual procedures, inconsistent checks, and avoidable maintenance work.

A shared delivery capability can provide useful consistency while allowing individual projects to define what their changes must prove.

## Problem statement

Borough Furnishings needs a dependable way for its small team to turn changes into verified and deployable software and infrastructure.

The approach must support collaboration and repeatable delivery without introducing tooling or operational overhead disproportionate to Launch.

The Development and delivery enablement project will establish the shared workflows, automation, and guidance that allow the other projects to deliver changes consistently.

## Intended outcome

Contributors can:

- establish a working development environment;
- make changes through a clear source-control workflow;
- obtain useful automated verification;
- produce appropriate artefacts;
- release changes through understandable and repeatable processes;
- and diagnose failures in the delivery process.

The capability should evolve as requirements become more demanding without forcing later-profile complexity into Launch.

## Scope boundaries


### Included

This project includes:

- source-control and change-review workflows;
- contributor development setup;
- build automation;
- test and verification automation;
- release workflows;
- deployment workflows;
- artefact handling;
- reusable development and delivery guidance;
- and shared delivery capabilities where reuse provides clear value.

### Excluded

This project does not:

- implement retail functionality;
- define every project's testing strategy;
- own all security decisions;
- own cloud access policy;
- operate production support;
- define business acceptance criteria for other projects;
- or assume that a developer portal is required.

## Relationships with other projects

**Retail applications** supplies application build, test, verification, and release needs.

**Cloud and identity foundations** provides environments and access mechanisms required by delivery automation.

**Service operation and resilience** coordinates deployment visibility, operational handover, rollback or recovery considerations, and the operational consequences of changes.

**Business reporting and insight** uses the delivery capability for code, configuration, data-processing logic, and other deployable assets.

## Quality ownership

This project enables verification.

It does **not** own every definition of quality.

For example:

```text
Retail applications
         ↓
defines what retail behaviour must prove

Development and delivery enablement
        ↓
provides mechanisms that can execute those checks
```

The same distinction applies to security, performance, data quality, reliability, and architectural fitness functions.

Each project remains accountable for defining the evidence its changes require.

## Shared concerns

Security, software supply-chain integrity, developer experience, reliability, reproducibility, auditability, cost, and operational support all influence development and delivery.

Programme-wide standards may provide common checks or reusable automation, but project-specific requirements remain with the project that owns the affected capability.

## What this project does not decide

The project definition does not yet select:

- repository topology;
- branching strategy;
- CI/CD product;
- GitOps implementation;
- deployment strategy;
- artefact registry;
- developer portal;
- internal developer platform;
- environment model;
- release cadence;
- or mandatory tooling.

These choices must be justified by requirements rather than assumed from the outset.

## Next stage

Requirements analysis will establish what the delivery capability must support, including relevant developer experience, security, repeatability, quality, auditability, reliability, and operational needs.

Those requirements will then drive the architecture and tooling decisions.

See the [Launch profile](../../profiles/launch/) for the business context.

See the [Launch problem contexts](../../profiles/launch-problem-contexts/) for the Technology delivery and operation problem space.

