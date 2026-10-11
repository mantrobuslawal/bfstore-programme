---
title: Retail applications
description: The Launch project establishing customer-facing and staff-facing capabilities for Borough Furnishings' online retail operation.
---

> **Project definition:** Agreed initial baseline v0.1.0  
> **Business profile:** Launch  
> **Primary problem space:** Digital retail and order fulfilment  
> **Delivery status:** Requirements analysis not yet started

## Project at a glance

The Retail applications project establishes the customer-facing shop and staff-facing retail capabilities Borough Furnishings needs to move from individually arranged direct-message sales to a coordinated online retail operation.

Customers should be able to purchase independently.

The team should be able to account for accepted orders, manage stock commitments, fulfil purchases, communicate with customers, and provide after-sales support.

The project must also account for the temporary period in which website and direct-message sales coexist.

## Why this project exists

Borough Furnishings has already demonstrated demand through successful founder-managed sales.

The business now wants to expand its range and provide customers with a dedicated online purchasing experience.

The challenge is therefore not simply to publish a website.

The business needs connected retail capabilities that allow customers and staff to participate in a dependable purchasing and fulfilment process without relying on an individual conversation for every transaction.

## Problem statement

Borough Furnishings needs to turn its successful founder-managed sales activity into a dependable online retail operation.

Customers currently arrange purchases through direct messages, while Launch requires independent purchasing and coordinated support for stock, orders, fulfilment, and customer-service activity.

The Retail applications project will establish those capabilities while accounting for the temporary overlap between direct-message and website sales and preserving existing customer commitments.

## Intended outcome

Customers can discover and purchase available products independently.

The Borough Furnishings team can:

- present the product range;
- manage relevant prices and promotions;
- account for stock commitments;
- process accepted orders;
- support picking, packing, and dispatch;
- communicate useful progress;
- handle customer issues;
- and support cancellations, returns, and refunds where appropriate.

The resulting capabilities should remain proportionate to the needs and resources of the Launch organisation.

## Scope boundaries

### Included

This project includes:

- product catalogue capabilities;
- shopping and checkout;
- payment integration;
- stock availability and order handling;
- fulfilment support;
- customer communications;
- returns and refund support;
- Launch promotion behaviour;
- and relevant application-level security, privacy, reliability, and operational controls.

### Excluded

This project does not include:

- social-media integration;
- replacing the existing process used to complete outstanding direct-message orders;
- manufacturing products;
- operating carrier transportation;
- building a payment processor;
- deferred product reviews;
- loyalty capabilities;
- or deferred AI features.

## Relationships with other projects

**Cloud and identity foundations** provides or enables the runtime, connectivity, resource organisation, and shared access foundations required by the retail applications.

**Development and delivery enablement** provides shared workflows and automation for building, verifying, and releasing changes.

**Service operation and resilience** coordinates operational readiness, observability, incident handling, recovery, and evidence that recovery arrangements work.

**Business reporting and insight** consumes relevant retail information and depends on this project to establish the meaning and availability of business records.

These relationships are dependencies and coordination needs rather than a fixed delivery sequence.

## Shared concerns

Security, privacy, identity, reliability, continuity, cost, and observability all apply to the Retail applications project.

Application-specific requirements remain the responsibility of this project even where shared programme capabilities exist.

For example, shared identity foundations may provide authentication mechanisms, but this project must still establish the business permissions governing actions such as refunds or order changes.

## What this project does not decide

The project definition does not select:

- application architecture;
- service boundaries;
- microservices or modular-monolith structure;
- APIs or communication protocols;
- databases;
- messaging technologies;
- hosting technologies;
- repository topology;
- deployment model;
- detailed business rules;
- or implementation order.

Those decisions will be derived from requirements and architectural analysis.

## Next stage

The next stage is detailed requirements analysis.

That work will establish functional behaviour, business rules, architecturally significant requirements, fit criteria, risks, constraints, and validation expectations before solution architecture is formalised.

See the [Launch profile](../../profiles/launch/) for the business context.

See the [Launch problem contexts](../../profiles/launch-problem-contexts/) for the Digital retail and order fulfilment problem space.


