---
title: Launch problem contexts
description: The business problem spaces derived from the Borough Furnishings Launch profile and the projects created to address them.
---

> **Status:** Agreed revised problem-context baseline v0.2.0  
> **Business profile:** BF-PROFILE-001 — Launch  
>
> These problem contexts are derived from the Launch business profile. The profile still contains deliberately unresolved details, but its agreed context is sufficient to identify the business problems and opportunities that require engineering work.

## Why problem contexts exist

The programme does not move directly from a business story to architecture.

Problem contexts create an intermediate reasoning layer between the business profile and the projects created to address its needs.

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
```

At this stage, the purpose is to establish:

- why work is required;
- who is affected;
- what outcomes are needed;
- what consequences may arise if those needs remain unmet;
- and where the boundaries of each problem space lie.

Detailed business rules, implementation choices, architecture, metrics, acceptance criteria, and technology selections belong to later work.

Open questions in the Launch profile remain uncertainties to resolve when they become decision-relevant. They do not prevent meaningful problem identification.

## Overarching Launch context

Borough Furnishings has successfully sold a selected range of original computing-themed products through social-media direct messages.

Smaller, easier-to-ship products such as themed mugs, desk lamps, coasters, and similar items have also sold successfully through Amazon.

The business already holds finished-product stock and manages picking, packing, and dispatch from rented premises.

The opportunity is to build on demonstrated demand by expanding the range, establishing a dedicated online shop, retaining commercially useful Amazon sales, and increasing product discovery through Google Shopping.

| Element | Launch context |
| --- | --- |
| **Current situation** | A technically experienced founder has successfully sold products through direct-message ordering and has also achieved successful Amazon sales for selected smaller products. Borough Furnishings stocks finished products and manages fulfilment itself. |
| **Opportunity** | Expand the range, establish a dedicated online shop, retain commercially valuable Amazon sales, and make eligible products discoverable through Google Shopping. |
| **Problem to address** | The next stage of the business requires self-service purchasing and coordinated support for product information, stock, orders, fulfilment, customer service, and relevant external channels without relying on individually arranged conversations or disconnected information. |
| **People affected** | Customers, the founder, and the small team responsible for retail operations, fulfilment, support, finance, and technology. |
| **Desired outcome** | Customers purchase conveniently, relevant product information remains dependable across channels, staff fulfil and support orders reliably, the founder understands business performance, and technology remains manageable within the organisation's resources. |
| **Important context** | Stocked products, in-house fulfilment, external carriers, UK-wide delivery including Northern Ireland, ongoing Amazon sales for selected products, Google Shopping product discovery, and a one-month overlap between DM and website ordering. |

The existing direct-message and Amazon sales activity has demonstrated demand successfully.

The programme does **not** invent a failing current process merely to justify a new system.

The problem is that Borough Furnishings now wants capabilities appropriate to a different stage of business operation, including an owned retail channel and better coordination across the channels it chooses to retain.

## The three Launch problem spaces

The overarching Launch context separates into three broad problem spaces.

```text
Launch
│
├── Digital retail and order fulfilment
│
├── Technology delivery and operation
│
└── Business information and insight
```

They are separated by **purpose**, not by anticipated software architecture.

**Digital retail and order fulfilment** concerns how customers discover and buy products and how the team manages the resulting retail activity across relevant channels.

**Technology delivery and operation** concerns how the small team builds, releases, secures, runs, understands, and recovers the technology supporting the business.

**Business information and insight** concerns how operational and channel information becomes dependable commercial understanding.

## Digital retail and order fulfilment

### Current situation

Borough Furnishings has demonstrated demand through successful direct-message and Amazon sales.

It holds finished-product stock and manages packing and dispatch from rented premises.

The founder now wants to expand the range, introduce a dedicated online shop, retain selected Amazon sales, and make eligible products discoverable through Google Shopping.

The existing sales approaches have supported the side hustle successfully, but the next stage requires a more coordinated retail operation.

### People affected

| Stakeholder | Need |
| --- | --- |
| **Customers** | Understand products, purchase independently through appropriate channels, receive goods, and obtain help when required. |
| **Founder / retail team** | Present and sell the range, maintain suitable product information, manage availability, and oversee customer commitments across relevant channels. |
| **Fulfilment staff** | Understand which orders require action and carry them through preparation and dispatch. |
| **Customer-support staff** | Find enough information to explain progress and resolve order or channel-related issues. |
| **Finance / bookkeeping** | Understand relevant transactions, refunds, marketplace fees, and reconciliation needs. |

These describe roles rather than separate hires.

### Problem statement

Borough Furnishings needs to develop its successful founder-managed and externally mediated sales activity into a coordinated online retail operation.

Customers need to discover and purchase available products independently through the Borough Furnishings shop.

At the same time, the business intends to retain Amazon as a sales channel for selected products and use Google Shopping to improve discovery of eligible products.

The small team therefore needs to maintain control over:

- product information;
- stock;
- customer orders;
- relevant external sales and discovery channels;
- fulfilment;
- customer communication;
- returns and refunds;
- and after-sales support.

During the first month of website operation, direct-message and website sales will coexist while Amazon remains an ongoing channel.

The business must honour commitments made through relevant sales channels while encouraging customers to adopt the owned shop and avoiding unnecessary duplication of product information.

### Consequences if the need remains unmet

Potential consequences include:

- purchases continuing to depend too heavily on individual conversations and staff availability;
- increasing sales activity creating greater coordination effort without corresponding visibility;
- website, Amazon, and temporary DM sales making conflicting commitments against the same stock;
- product, price, or availability information becoming inconsistent or stale across relevant channels;
- staff needing to maintain the same product information manually in multiple places;
- and staff finding it increasingly difficult to provide consistent information or resolve customer issues.

These are risks arising from the intended change in business scale and operating model.

They are **not claims that Borough Furnishings currently loses orders, mismanages stock, or provides poor service**.

### Desired outcome

Customers can discover and purchase products conveniently and receive dependable service.

The team can:

- maintain trustworthy product information;
- account for accepted orders;
- manage stock commitments across relevant sales channels;
- prepare and dispatch goods;
- publish appropriate product information for external discovery;
- communicate relevant progress;
- reconcile relevant marketplace activity;
- and resolve customer issues.

The transition to website ordering should preserve existing customer commitments while allowing commercially useful external channels to continue.

### Boundaries

| Within this problem space | Outside this problem space |
| --- | --- |
| Product presentation and purchasing | Designing or manufacturing products |
| Product information needed by relevant external channels | Physically transporting goods |
| Payments | Social-media integration |
| Stock availability and commitments across relevant sales channels | Replacing the existing process for completing outstanding DM orders |
| Website and selected Amazon order handling | Broader commercial analysis |
| Product publication for Google Shopping discovery | Technology platform design |
| Fulfilment coordination | Selecting integration technologies or communication patterns |
| Customer communications | Building Amazon or Google services |
| After-sales support | |
| Temporary DM overlap and website-adoption offers | |

Technology delivery and operation supports this problem space.

Security, identity, privacy, data protection, external-service trust, and applicable channel obligations also apply across it, but their solutions are not designed at the problem-context stage.

## Technology delivery and operation

### Current situation

The technically experienced founder has chosen to build the retail applications using cloud services.

That choice creates a second class of business need.

Borough Furnishings must be able not only to build retail functionality, but also to develop, integrate, release, operate, secure, support, and maintain the resulting technology.

External channels introduce additional dependencies whose availability, interfaces, credentials, failures, and changes may affect Borough Furnishings even though those services are outside its direct control.

This work must coexist with the other responsibilities of a small team.

The problem context does not assume that every technical capability must be created from scratch.

### People affected

| Stakeholder | Need |
| --- | --- |
| **Founder / business owner** | Technology that supports trading at an affordable cost without creating disproportionate operational demands. |
| **Application developers** | Repeatable ways to make, integrate, verify, and release changes. |
| **Service operators and support staff** | Visibility of service health, controlled access, clear responsibilities, and ways to investigate failures involving both internal and external dependencies. |
| **Retail staff and customers** | Dependable services during normal operation, changes, and failures. |

### Problem statement

Borough Furnishings needs to establish the engineering and operational capabilities necessary to deliver and sustain its self-built retail applications and relevant external-channel integrations.

A small team must be able to:

- make changes safely;
- verify those changes;
- release them repeatably;
- operate services;
- protect information;
- control access;
- manage external-service credentials and trust appropriately;
- understand service and integration health;
- respond to failures;
- recover services and data;
- understand the effect of external dependency failures;
- and understand the cost and ownership of the technology.

Technology ownership must not consume an unmanageable share of the business's resources.

These capabilities should support Launch while remaining capable of evolving as Borough Furnishings grows.

### Consequences if the need remains unmet

Potential consequences include:

- releases relying on fragile or inconsistent manual work;
- failures going unnoticed or taking longer to diagnose;
- external-channel failures or data synchronisation problems being difficult to identify;
- access, configuration, credentials, and operational knowledge becoming excessively dependent on the founder;
- the team being unable to restore services or data when required;
- and expenditure or maintenance effort becoming difficult to understand and control.

These are risks to design against rather than established incidents.

### Desired outcome

The team can:

- deliver changes repeatably;
- understand service and integration health;
- control access;
- investigate problems;
- respond appropriately to external-service failures;
- recover operation when necessary;
- understand operational ownership;
- and make informed decisions about technology expenditure.

The supporting capabilities should remain proportionate to the size and needs of the Launch organisation.

### Boundaries

| Within this problem space | Outside this problem space |
| --- | --- |
| Cloud foundations and environments | Choosing specific technologies at the problem-context stage |
| Connectivity and hosting foundations | Prescribing detailed platform architecture |
| Development and testing capabilities | Defining retail rules such as promotion calculations |
| Release and deployment capabilities | Assuming each concern needs its own tool, team, or service |
| Shared identity and access foundations | Broader product or channel profitability analysis |
| Security practices | Implementing future multi-cloud or hybrid-cloud scenarios |
| External-service credential and dependency management | |
| Observability and supportability | |
| Backup, recovery, and continuity | |
| Technology cost visibility and operational ownership | |

Application-specific controls and external-channel behaviours require coordination with the retail problem space.

The boundary exists to clarify responsibility, not to force closely related concerns into isolated systems.

## Business information and insight

### Current situation

Borough Furnishings has already made sales through direct messages and Amazon and is now establishing a dedicated online shop.

The new operation will generate or depend on information about:

- products;
- sales channels;
- orders;
- payments;
- marketplace fees;
- stock;
- fulfilment;
- promotions;
- returns;
- customer-service activity;
- and costs.

The founder needs to turn relevant information into commercial understanding.

The programme does not assume that current reporting is defective.

The need arises because the business is moving into a more structured and multi-channel operating model.

### People affected

| Stakeholder | Need |
| --- | --- |
| **Founder / business owner** | Understand sales, product and channel performance, relevant costs, and financial viability. |
| **Retail operations** | Recognise demand, stock, channel, and fulfilment patterns that inform operational decisions. |
| **Finance / bookkeeping** | Obtain sufficiently consistent transaction, marketplace-fee, refund, and cost information for reconciliation and financial reporting. |

Launch does not assume a dedicated analyst, data engineer, or data-science team.

These responsibilities may be performed by the same small group of people.

### Problem statement

Borough Furnishings needs a dependable way to turn information from its retail operation and relevant external channels into useful commercial understanding.

The founder and team need to determine:

- what is selling;
- where sales are occurring;
- how products and channels are performing;
- how the operation is performing;
- what relevant activities and channels cost;
- whether promotions or changes achieve their intended outcomes;
- whether marketplace activity reconciles appropriately;
- and whether the business remains financially sustainable.

The information supplied should answer concrete business questions without creating a disproportionate reporting or data-management burden.

### Consequences if the need remains unmet

Potential consequences include:

- product and replenishment decisions depending on incomplete impressions;
- channel performance being difficult to compare;
- revenue growth obscuring marketplace fees, delivery, promotion, returns, or operating costs;
- inconsistent figures increasing reconciliation effort;
- reduced confidence in business decisions;
- and difficulty determining whether changes produced their intended outcomes.

Again, these represent risks rather than claims of existing reporting failure.

### Desired outcome

The founder and team have access to understandable and sufficiently trustworthy information for agreed business decisions.

They understand what important figures mean, can distinguish relevant channel activity, and can investigate material discrepancies.

Reporting develops in response to business questions rather than accumulating metrics without a clear purpose.

### Boundaries

| Within this problem space | Outside this problem space |
| --- | --- |
| Initial sales, channel, and product information | Defining detailed reports at this stage |
| Stock and fulfilment information used for commercial understanding | Prescribing metrics before business questions exist |
| Relevant financial, marketplace-fee, and cost information | Designing detailed data models |
| Information consistency, reconciliation, and interpretation | Mandating a data warehouse |
| Appropriate access to commercial information | Mandating Data Mesh |
| Assessing outcomes of promotions and later changes | Selecting a BI product |
| Information needed for reconciliation and financial reporting | Building predictive models or recommendation systems during Launch |
| | Rebuilding a complete accounting system |

This problem space establishes the need for dependable information.

It does **not** predetermine the data architecture used to provide it.

## Relationships between the problem spaces

The three spaces interact continuously.

```text
Digital retail and channel activity
        │
        │ produces business records
        ▼
Business information and insight
        │
        │ informs priorities and changes
        ▼
Business decisions

Technology delivery and operation
        │
        └──── enables and supports both
```

The distinction between them is primarily one of purpose.

**Retail information** helps somebody act on an individual business process, such as determining whether an Amazon or website order is ready for dispatch.

**Business information** helps somebody understand patterns across business activity, such as whether a product range, sales channel, or promotion is performing as intended.

**Technical observability** helps somebody understand the services, integrations, and infrastructure running those business capabilities.

The same underlying data may sometimes contribute to more than one purpose, but the questions being answered are different.

## Cross-cutting concerns

Some concerns apply across all three problem spaces rather than belonging exclusively to one.

These include:

- identity and access;
- security;
- privacy and data protection;
- external-service trust and dependency management;
- operational continuity;
- reliability;
- financial accountability;
- and appropriate governance.

Treating them as cross-cutting concerns avoids creating an artificial fourth problem space containing every issue that spans organisational boundaries.

Responsibility for implementing these concerns will be established through projects, requirements, architecture, and programme-wide engineering standards.

## What problem spaces do not imply

The three Launch problem spaces do **not** imply:

- three applications;
- three teams;
- three repositories;
- three deployment units;
- or three projects.

Problem spaces are reasoning boundaries around related needs.

A single project may address concerns from several spaces, and one problem space may require several projects.

Implementation boundaries are determined later through requirements and architecture.

## From problem spaces to projects

Project identification has now been completed for the initial Launch baseline.

The three problem spaces produced five starting projects.

| Problem space | Resulting project | Intended outcome |
| --- | --- | --- |
| **Digital retail and order fulfilment** | **Retail applications** | Customers can purchase through the owned shop while Borough Furnishings coordinates relevant product, stock, order, fulfilment, customer, and external-channel activity. |
| **Technology delivery and operation** | **Cloud and identity foundations** | Controlled, manageable environments and shared identity and access foundations. |
| **Technology delivery and operation** | **Development and delivery enablement** | Repeatable development, verification, and release of software and infrastructure changes. |
| **Technology delivery and operation** | **Service operation and resilience** | Understand service health, respond to problems, and restore services and data with evidence. |
| **Business information and insight** | **Business reporting and insight** | Dependable, understandable information for commercial decisions. |

This mapping does not imply separate teams, repositories, products, or elaborate implementations.

The same small team may contribute across several projects, and individual projects may eventually contain several applications or components.

Those implementation boundaries remain undecided.

## From problems to requirements

The programme has now progressed through:

```text
Launch business profile
        ↓
Problem contexts
        ↓
Project identification
```

The next stage is:

```text
Requirements analysis
        ↓
Architecturally significant requirements
        ↓
Architecture and decisions
        ↓
Implementation
        ↓
Validation and evidence
```

Detailed behaviours, architecture, technology choices, fit criteria, metrics, and acceptance conditions will be introduced through that later work rather than retrofitted into the problem contexts.

See the [Launch profile](../launch/) for the business context from which these problem spaces were derived.

See [Projects](../../projects/) for the programme's project view.
