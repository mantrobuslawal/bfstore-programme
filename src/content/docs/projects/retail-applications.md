---
title: Retail applications
description: The Launch project establishing customer-facing, staff-facing, and external-channel retail capabilities for Borough Furnishings' online operation.
---

> **Project definition:** Agreed revised baseline v0.2.0  
> **Business profile:** Launch  
> **Primary problem space:** Digital retail and order fulfilment  
> **Delivery status:** Requirements analysis not yet started

## Project at a glance

The Retail applications project establishes the customer-facing shop, staff-facing retail capabilities, and relevant external-channel capabilities Borough Furnishings needs for its Launch operation.

Borough Furnishings has already demonstrated demand through direct-message sales and selected Amazon sales.

Launch introduces an owned online shop while retaining Amazon as an ongoing sales channel for selected products and making eligible products discoverable through Google Shopping.

Customers should be able to purchase independently through the Borough Furnishings shop.

The team should be able to maintain appropriate product information, account for accepted orders, manage stock commitments across relevant sales channels, fulfil purchases, communicate with customers, reconcile relevant activity, and provide after-sales support.

The project must also account for the temporary period in which website and direct-message sales coexist while Amazon continues as an ongoing channel.

## Why this project exists

Borough Furnishings has already demonstrated customer demand through successful founder-managed direct-message sales and Amazon sales of selected smaller products.

The business now wants to expand its range, establish its own online purchasing experience, retain commercially valuable external sales activity, and improve product discovery.

The challenge is therefore not simply to publish a website.

The business needs connected retail capabilities that allow customers and staff to participate in a dependable purchasing and fulfilment process while relevant product, stock, order, and commercial information remains appropriately coordinated across the channels Borough Furnishings chooses to use.

The owned shop should reduce dependence on individually arranged conversations without requiring Borough Furnishings to abandon external channels that continue to provide business value.

## Problem statement

Borough Furnishings needs to turn successful founder-managed and externally mediated sales activity into a dependable and coordinated online retail operation.

Launch requires an owned shop through which customers can discover and purchase products independently.

At the same time:

- selected products will continue to be sold through Amazon;
- eligible products should be discoverable through Google Shopping;
- direct-message ordering will continue temporarily during the first month of website operation;
- and relevant customer commitments, stock, product information, fulfilment activity, and commercial records must remain sufficiently coordinated.

The Retail applications project will establish the business-facing capabilities needed to support this operating model while preserving existing customer commitments and avoiding unnecessary duplication of product and operational information.

## Intended outcome

Customers can discover and purchase available products conveniently through the Borough Furnishings shop.

Relevant customers can continue to purchase selected products through Amazon.

Eligible product information can be made available for discovery through Google Shopping without requiring staff to maintain an entirely independent duplicate catalogue.

The Borough Furnishings team can:

- maintain and present appropriate product information;
- determine which products are available through relevant channels;
- manage relevant prices and promotions;
- account for stock commitments across active sales channels;
- process accepted website and relevant Amazon orders;
- support picking, packing, and dispatch;
- maintain suitable product and availability information for external channels;
- communicate useful order progress;
- handle customer and channel-related exceptions;
- support cancellations, returns, and refunds where appropriate;
- reconcile relevant marketplace activity;
- and understand enough about channel activity to operate the retail process reliably.

The resulting capabilities should remain proportionate to the needs and resources of the Launch organisation.

## Scope boundaries

### Included

This project includes:

- product catalogue capabilities;
- product descriptions, imagery, variants, dimensions, availability, and other relevant purchasing information;
- shopping and checkout through the Borough Furnishings online shop;
- payment integration;
- selected Amazon sales-channel support;
- relevant Amazon product, order, stock, fulfilment, return, refund, and commercial coordination where required by later requirements;
- publication of eligible product information for Google Shopping discovery;
- relevant external-channel product and availability information;
- stock availability and commitment handling across active Launch sales channels;
- website and relevant Amazon order handling;
- fulfilment support;
- customer communications;
- returns and refund support;
- Launch promotion behaviour;
- temporary coordination with direct-message stock commitments during the transition period;
- handling relevant failures or exceptions involving external retail channels;
- and relevant application-level security, privacy, reliability, and operational controls.

### Excluded

This project does not include:

- social-media integration;
- replacing the existing process used to complete outstanding direct-message orders;
- manufacturing products;
- operating carrier transportation;
- building a payment processor;
- building or operating Amazon;
- building or operating Google Shopping;
- allowing third-party sellers to sell through the Borough Furnishings shop;
- deferred product reviews;
- loyalty capabilities;
- or deferred AI features.

External services may be integrated where required, but the operation of those external platforms remains outside Borough Furnishings' responsibility.

## Sales and discovery channels

Launch currently involves several channels with different purposes.

### Borough Furnishings online shop

The Borough Furnishings shop is the primary **owned** purchasing channel.

It should allow customers to discover available products, make purchasing decisions, place orders, receive appropriate confirmation, and obtain relevant after-sales support.

### Amazon

Amazon is an existing and ongoing **sales channel** for selected Borough Furnishings products.

The project must support whatever product, availability, order, fulfilment, customer-service, return, refund, fee, and reconciliation interactions are ultimately established as necessary during requirements analysis.

The project definition does not yet assume which system is authoritative for every piece of information or how quickly changes must propagate between Borough Furnishings and Amazon.

### Google Shopping

Google Shopping is currently a **product-discovery channel**, not an additional Borough Furnishings order-processing channel.

The business wants eligible product information to be derived from maintained Borough Furnishings catalogue and inventory information rather than requiring staff to maintain an unrelated duplicate product catalogue.

Requirements analysis will establish which products are eligible, what information must be published, how accurate or current that information must be, and how publication failures should be handled.

### Direct-message ordering

Direct-message ordering is temporary.

New DM orders continue only during the first month after the website launches.

The project does not replace the existing process used to complete those orders, but relevant stock commitments must be accounted for while the overlap remains active.

## Information and inventory coordination

The Launch operating model introduces several sources of retail activity.

At minimum, later requirements must establish appropriate behaviour for information such as:

- product identity;
- product descriptions and attributes;
- product imagery;
- channel eligibility;
- prices and promotions;
- physical stock;
- committed stock;
- sellable stock;
- order state;
- fulfilment state;
- returns and refunds;
- marketplace fees;
- and relevant reconciliation information.

The project definition does not decide whether information must be synchronised immediately, eventually, periodically, manually, or through some combination of approaches.

Those characteristics must be derived from the business consequences of stale or inconsistent information.

## External-service behaviour

Amazon, Google Shopping, payment services, and other external dependencies operate outside Borough Furnishings' direct control.

The Retail applications project must therefore eventually establish requirements for relevant conditions such as:

- an external service being temporarily unavailable;
- requests being rejected;
- product information failing validation;
- information becoming stale;
- repeated or delayed messages or requests;
- partial completion of an operation;
- duplicate interactions;
- credentials becoming invalid;
- external interfaces changing;
- rate or quota limits being reached;
- and recovery after an integration failure.

This project establishes the need to handle those conditions.

It does not yet prescribe the technical mechanisms used to do so.

## Relationships with other projects

**Cloud and identity foundations** provides or enables the runtime, connectivity, resource organisation, secrets and credential foundations, and shared access capabilities required by the retail applications and their external integrations.

**Development and delivery enablement** provides shared workflows and automation for building, verifying, and releasing changes, including changes to external-channel behaviour where appropriate.

**Service operation and resilience** coordinates operational readiness, observability, incident handling, dependency monitoring, recovery, and evidence that recovery arrangements work.

**Business reporting and insight** consumes relevant retail and channel information and depends on this project to establish the meaning and availability of business records such as orders, stock movements, sales-channel activity, refunds, and marketplace costs.

These relationships are dependencies and coordination needs rather than a fixed delivery sequence.

## Shared concerns

Security, privacy, identity, reliability, continuity, cost, observability, and external-service dependency management all apply to the Retail applications project.

Application-specific requirements remain the responsibility of this project even where shared programme capabilities exist.

For example, shared identity foundations may provide authentication mechanisms, but this project must still establish the business permissions governing actions such as refunds, order changes, catalogue maintenance, channel publication, or other privileged retail activity.

Likewise, the existence of a shared observability capability does not remove this project's responsibility to establish which retail and integration conditions must be observable.

Security requirements involving external services must ultimately establish appropriate controls for matters such as:

- credentials and secrets;
- trust boundaries;
- sensitive information;
- authorisation;
- input validation;
- replay or duplicate interactions where relevant;
- logging and monitoring;
- failure handling;
- and the security expectations applicable to each integration.

Detailed controls belong to requirements and later security design.

## What this project does not decide

The project definition does not select:

- application architecture;
- service boundaries;
- microservices or modular-monolith structure;
- APIs or communication protocols;
- synchronous or asynchronous interaction;
- polling or webhook-based integration;
- batch or event-driven processing;
- feed-generation mechanisms;
- marketplace adapter structure;
- ownership of integration components;
- databases;
- messaging technologies;
- hosting technologies;
- FaaS or long-running workers;
- product-image processing architecture;
- repository topology;
- deployment model;
- detailed business rules;
- authoritative-system rules for every data item;
- synchronisation intervals or consistency guarantees;
- or implementation order.

For example, the need to prepare product imagery for different channels may eventually make event-driven or FaaS-based processing attractive, but that is an architectural option to evaluate against requirements rather than a decision embedded in this project definition.

Those choices will be derived from requirements, risks, constraints, measurable fit criteria, and architectural analysis.

## Next stage

The next stage is detailed requirements analysis.

That work will establish matters including:

- stakeholders and actors;
- functional behaviour;
- business rules;
- product and channel eligibility;
- catalogue-information needs;
- inventory and reservation behaviour;
- Amazon interaction requirements;
- Google Shopping publication requirements;
- transaction and fulfilment lifecycles;
- channel-specific prices and promotions;
- returns and refunds;
- external-service failure behaviour;
- reconciliation needs;
- security and privacy requirements;
- architecturally significant requirements;
- fit criteria;
- risks and constraints;
- and validation expectations.

Architecture and implementation choices will then be evaluated as responses to those requirements rather than predetermined by this project definition.

See the [Launch profile](../../profiles/launch/) for the business context.

See the [Launch problem contexts](../../profiles/launch-problem-contexts/) for the Digital retail and order fulfilment problem space.
