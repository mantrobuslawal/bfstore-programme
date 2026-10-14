---
title: Launch - From creative side hustle to online retailer
description: The starting Borough Furnishings business profile, covering the transition from successful direct-message and marketplace sales to an owned multi-channel online retail operation.
---

> **Profile status:** Draft v0.3.0  
> **Profile ID:** BF-PROFILE-001  
> **Relationship:** Starting business profile  
>
> The core Launch context has been agreed, but some business details remain intentionally unresolved. Those details will be clarified when they become necessary for requirements, architectural decisions, implementation, or validation.

## Launch at a glance

Borough Furnishings begins as the creative side hustle of a technically experienced founder designing computer-science-themed furniture and homeware.

A selected range has already been sold successfully through social-media direct messages. Smaller, easier-to-ship products such as themed mugs, desk lamps, coasters, and similar items have also sold successfully through Amazon.

Launch represents the decision to build on that demonstrated demand by expanding the range, establishing a dedicated online shop, retaining commercially useful external channels, and operating the business with a small team.

At this stage:

- customers are primarily individual technology enthusiasts buying for their homes and home offices;
- products are stocked before sale rather than made to order;
- Borough Furnishings rents premises combining storage and office space;
- the business manages its own stock, picking, packing, and dispatch;
- external carriers transport orders to customers;
- delivery covers the UK, including Northern Ireland;
- Amazon remains an ongoing sales channel for selected products;
- Borough Furnishings intends to make eligible products discoverable through Google Shopping using product information derived from its own catalogue and inventory;
- social media remains a discovery and engagement channel but is not integrated with the retail systems;
- and the founder contributes technical expertise to building and operating the applications using cloud services.

Launch is therefore not simply the introduction of a website. It is the transition from founder-managed selling into an organised online retail operation with an owned shop and selected external channels.

## Business story

Direct-message sales and successful Amazon sales have demonstrated that customers are willing to buy Borough Furnishings products.

The purpose of Launch is not to replace a failing business process or eliminate every existing sales channel. It is to introduce capabilities appropriate for the next stage of the business while retaining channels that continue to provide commercial value.

Customers should be able to discover products and purchase independently through the Borough Furnishings shop. Selected products will continue to be sold through Amazon, while Google Shopping is intended to provide an additional route through which customers can discover eligible products.

The team must be able to understand stock commitments, fulfil accepted orders, maintain appropriate product information across relevant channels, resolve customer issues, and account for commercial activity without relying on individually arranged conversations for every sale.

The founder has chosen to build the retail applications using cloud services.

A focused self-build is expected to provide suitable control and potentially favourable costs for the circumstances of the business. That cost advantage is an assumption to evaluate rather than an established fact.

## Business goals

Six business goals guide the Launch profile.

| Goal | Intended outcome | Candidate measures |
| --- | --- | --- |
| **Dependable online purchasing** | Customers understand products, place orders, pay, and receive confirmation while every accepted order is accounted for. | Purchase completion, failed transactions, missing or duplicated orders, reported purchasing difficulties |
| **Build on demonstrated demand** | Move beyond founder-managed DM sales, establish an owned online shop, retain valuable external sales channels, and expand product discovery and the product range while maintaining service. | Sales by channel, website conversion, repeat purchases, new-product performance, order-handling capacity |
| **Achievable fulfilment promises** | Availability and delivery expectations reflect actual stock, replenishment, channel commitments, and dispatch capability. | Dispatch against promised dates, cancellations caused by unavailable stock, stock conflicts between channels |
| **Manageable day-to-day work** | The small team can find information, fulfil orders, maintain relevant channel information, and handle issues without excessive manual effort. | Effort per order, manual intervention, unresolved exceptions, response and resolution times |
| **Commercial and financial visibility** | The founder can assess revenue, relevant costs, channel fees, margins, and operating expenditure using dependable information. | Reconciliation discrepancies, cost-information completeness, contribution margins, channel performance, budget variance |
| **Controlled customer-experience improvements** | Useful changes can be introduced and evaluated without routinely disrupting trading. | Change lead time, release-related failures, measured customer and business outcomes |

These measures are candidates rather than committed targets. Baselines, thresholds, priorities, and timeframes will be defined when they are needed for requirements and evaluation.

## Customers, stakeholders and organisation

Launch is intentionally a small organisation.

The following describe **roles and responsibilities**, not necessarily separate employees.

| Role or stakeholder | Responsibilities and interests |
| --- | --- |
| **Founder / owner** | Commercial direction, expenditure, priorities, risk acceptance, and direct technical contribution |
| **Product design** | Product concepts, specifications, and range development |
| **Production and quality** | Producing or commissioning stock and assessing quality |
| **Retail operations / purchasing** | Catalogue, sourcing, stock, replenishment, channel coordination, and order coordination |
| **Customer service / community engagement** | Enquiries, order issues, customer communication, and encouraging website adoption |
| **Technology delivery / operation** | Building, testing, releasing, securing, and operating applications, integrations, and cloud services |
| **Finance / bookkeeping** | Payments, refunds, channel fees, costs, records, margins, and reconciliation |
| **Customers** | Existing social-media and Amazon buyers and new website customers |
| **Production / supply partners** | Materials, manufacturing, or finished products where required |
| **Carriers** | Collection, transportation, tracking, and delivery exceptions |
| **External service providers** | Payment, marketplace, product-discovery, cloud, and other services required to operate the online business |

Detailed headcount, permissions, availability, and decision authority will be established where they become relevant.

## Business and operating model

Borough Furnishings sells its own products through its dedicated online shop and selected external channels.

The online shop becomes the primary **owned** purchasing channel. Amazon remains an ongoing sales channel for selected products, while social media continues to support discovery and engagement.

Borough Furnishings also intends to publish eligible product information for discovery through Google Shopping. The business wants this information to originate from its maintained product and inventory data rather than requiring an independently maintained product catalogue.

### Sales channels and transition

New orders through direct messages continue for the first month after the website launches.

After that period:

- new DM ordering stops;
- existing DM orders continue through their established process until complete;
- the retail applications do not need to import or replace that process unless a later requirement justifies doing so;
- Amazon remains an ongoing sales channel for selected products;
- stock commitments created through the Borough Furnishings shop, Amazon, and temporary DM ordering must be accounted for appropriately;
- and eligible Borough Furnishings products may be published for discovery through Google Shopping.

The exact products offered through Amazon, channel-specific pricing and promotions, fulfilment behaviour, inventory coordination, returns and refunds, reconciliation, and required synchronisation or freshness characteristics remain to be established during requirements analysis.

The business may use free delivery and/or a 10% discount to encourage adoption of the website.

Exact thresholds, combinations, eligibility rules, channel applicability, and promotion duration remain open.

### Products and inventory

The product range consists of founder-led original designs, primarily homeware and desk accessories with a smaller furniture selection.

Products are held as finished stock before sale.

Launch therefore does **not** use a made-to-order model.

Some smaller and easier-to-ship products are sold through Amazon as well as through Borough Furnishings' owned channels.

Stock management must ultimately distinguish concepts such as physical, committed, and sellable stock so that customer promises across applicable sales channels reflect what the business can actually fulfil.

### Product information and discovery

Borough Furnishings maintains product information including descriptions, imagery, variants, dimensions, pricing, availability, and other purchasing information.

The business intends to use this maintained information to support its own online shop and, where appropriate, external sales and discovery channels.

Eligible product information should be capable of being made available to Google Shopping without requiring staff to maintain an independent duplicate catalogue manually.

The exact information required by each external channel, transformation rules, eligibility rules, publication frequency, image requirements, validation behaviour, and ownership of channel-specific attributes remain to be established during requirements analysis.

### Fulfilment and delivery

Borough Furnishings rents premises that combine office and storage space.

The team:

1. stores finished stock;
2. receives and processes orders;
3. picks items;
4. packs orders;
5. prepares them for dispatch;
6. and hands them to external carriers.

Carriers provide transportation and tracking services.

Specific carrier choices and the appropriate degree of integration remain future decisions.

Amazon orders may form part of the same physical fulfilment operation where Borough Furnishings is responsible for dispatch. Exact marketplace fulfilment arrangements remain to be established.

Delivery covers the United Kingdom, including Northern Ireland. International delivery is outside the Launch scope.

### Customer support

Borough Furnishings remains responsible for appropriate customer support for the products it sells.

The business is therefore responsible for handling matters including:

- order enquiries;
- delivery issues;
- cancellations;
- returns;
- refunds;
- product-quality problems;
- marketplace-related exceptions where Borough Furnishings is responsible;
- and other customer-service exceptions.

The website may accept orders continuously, but staff and dispatch availability are separate concerns and remain to be defined.

## Business capabilities

The following are **business capabilities**, not predetermined application or service boundaries.

| Capability | Required business ability |
| --- | --- |
| **Product design and range** | Develop products and evolve the range |
| **Production, sourcing and replenishment** | Maintain sufficient finished stock before sale |
| **Product catalogue** | Maintain descriptions, imagery, variants, dimensions, purchasing information, and other product data required by the owned shop and eligible external channels |
| **Sales channel management** | Offer selected products through Amazon and make eligible product information available for discovery through Google Shopping |
| **Pricing and promotions** | Apply prices, delivery charges, launch incentives, and appropriate channel-specific commercial rules |
| **Shopping and checkout** | Allow customers to browse, select available products, order, and receive confirmation through the Borough Furnishings shop |
| **Payments and refunds** | Establish payment outcomes and perform authorised refunds where Borough Furnishings controls the transaction |
| **Order management** | Process website and Amazon orders and account for relevant DM stock commitments during the transition |
| **Inventory** | Understand physical, committed, and sellable stock across ongoing sales channels and the temporary DM overlap |
| **Picking, packing and dispatch** | Prepare the correct goods and shipment information |
| **Delivery coordination and tracking** | Arrange collections, communicate progress, and investigate delivery exceptions |
| **Customer service and engagement** | Resolve enquiries and issues while supporting website adoption and relevant external-channel customers |
| **Returns and quality** | Inspect returned goods, determine outcomes, and establish restock eligibility |
| **Supplier and carrier management** | Manage commercial relationships, service expectations, and costs |
| **Reconciliation and reporting** | Account for transactions, channel costs and fees, and understand sales, stock, costs, and business viability |

Some capabilities may initially remain partly manual.

Automation should be introduced where the resulting value justifies its cost and complexity.

## Scale and demand context

Launch deliberately does not invent traffic, order, catalogue, marketplace, or storage numbers merely to make the scenario appear complete.

Quantitative assumptions will be introduced when they are needed for representative use cases, capacity planning, cost evaluation, or validation.

Relevant dimensions include:

- existing DM sales volume and product mix;
- Amazon sales volume and product mix;
- website visitors, orders, and demand peaks;
- catalogue size, variants, and product media;
- external-channel product coverage and update activity;
- order value and items per order;
- furniture versus smaller-product mix;
- stock levels and replenishment lead times;
- storage, picking, packing, and dispatch capacity;
- customer-support workload;
- time available for technology operation;
- and growth in business records and operational data.

Physical capacity matters alongside software capacity.

A system capable of accepting thousands of orders is not useful if the business cannot realistically fulfil them.

## Emerging problems and opportunities

The Launch scenario identifies several needs that lead into the programme's problem-context and project work.

| Need | Desired outcome |
| --- | --- |
| **Self-service purchasing** | Customers can buy without arranging every order through direct messages |
| **Multi-channel selling** | Borough Furnishings can retain valuable Amazon sales while establishing its owned shop |
| **Consistent stock availability** | Website, Amazon, and temporary DM orders do not create conflicting commitments |
| **Product discovery** | Eligible products can be represented accurately through Google Shopping without maintaining an independent duplicate catalogue |
| **Fulfilment and visibility** | Staff can process accepted orders and customers receive useful progress information |
| **Website adoption** | Existing customers are encouraged to use the dedicated shop |
| **Customer issue handling** | Problems, cancellations, returns, and refunds can be handled consistently |
| **Commercial visibility** | The founder can understand sales, stock, costs, fees, and business performance across relevant channels |

These needs describe business problems and opportunities.

They do not prescribe the software architecture used to address them.

## Constraints, obligations and dependencies

Several conditions shape what an appropriate Launch solution can look like.

### Small-team operation

The technology must be realistic for the time, skills, budget, and operational capacity of a small founder-led organisation.

Sophistication is not automatically valuable.

### Stocked products

Products are held before sale, so customer availability promises must reflect real stock commitments.

### Multi-channel operation

DM and website orders coexist for one month, while Amazon remains an ongoing sales channel for selected products.

Product, stock, order, pricing, fulfilment, and commercial information may therefore need coordination across channels.

The required consistency, timeliness, ownership, and failure behaviour will be established during requirements analysis rather than assumed here.

### In-house fulfilment

Borough Furnishings owns the storage, picking, packing, and dispatch process for applicable orders while external carriers provide transportation.

The exact fulfilment arrangements for Amazon orders remain to be established.

### External dependencies

The online operation depends on services outside Borough Furnishings' direct control, including payment providers, carriers, Amazon, Google Shopping-related services, and cloud services.

Their availability, interfaces, constraints, data requirements, and failure modes must be considered during later requirements and architecture work.

### Customer information and payments

The business handles customer and transaction information.

Applicable security, privacy, consumer, marketplace, and payment obligations will be established alongside the relevant requirements rather than guessed prematurely.

### Financial constraints

Architecture must account for more than raw cloud spend.

Later FinOps work should consider factors such as:

- service consumption;
- external-channel fees and charges;
- cost allocation and visibility;
- operational effort;
- maintenance burden;
- capacity choices;
- waste;
- forecasting;
- and whether the expected economics of self-building remain justified.

No arbitrary numerical budget is assumed at this stage.

## Criticality and risk context

Launch does not yet define detailed risk treatments, uptime objectives, recovery objectives, or service-level targets.

It does, however, identify business consequences that later requirements must address.

| Area | Example failure | Potential business consequence |
| --- | --- | --- |
| **Shop and checkout** | Customers cannot browse or purchase | Lost sales and customer frustration |
| **Orders and payments** | Lost or duplicated order, incorrect charge, uncertain payment outcome | Financial discrepancies, missed fulfilment, disputes |
| **Stock** | Website, Amazon, or temporary DM sales commit the same goods | Promises the business cannot fulfil |
| **External channel information** | Product, price, or availability information becomes stale or fails to publish correctly | Misleading customer information, lost sales, support workload, or channel-policy problems |
| **Fulfilment and tracking** | Wrong product, missed dispatch, or absent delivery information | Delays, replacement cost, increased support workload |
| **Customer and business data** | Loss, unauthorised disclosure, or unauthorised modification | Customer harm, operational interruption, loss of trust |
| **People and service dependencies** | Founder, payment provider, marketplace, cloud service, or carrier unavailable | Business activity pauses or degrades without suitable fallback or cover |

Detailed risk analysis belongs in later programme artefacts.

This profile establishes enough context to identify where that analysis is required.

## Change outlook

Launch is the starting profile rather than the programme's final state.

Expected or candidate changes include:

| Change | Launch position |
| --- | --- |
| **End new DM ordering** | Agreed after the first month |
| **Retain selected Amazon sales** | Agreed Launch direction; detailed operating model remains open |
| **Use Google Shopping for product discovery** | Agreed Launch direction; detailed publication requirements remain open |
| **Expand the product range** | Agreed direction; extent remains open |
| **Serve more customers and orders** | Expected; quantities remain open |
| **Reviews and loyalty** | Candidate later capabilities |
| **Honey Points** | Candidate later loyalty capability |
| **AI recommendations or conversational assistance** | Deferred until tied to specific business outcomes |
| **Larger or more specialised operations** | Belongs to later Growth or Expansion profiles |
| **Multi-cloud or hybrid-cloud operation** | Later programme direction, not a Launch architecture requirement |

The purpose of recording these possibilities is not to design them during Launch.

They provide future change scenarios against which current architectural decisions may eventually be evaluated.

## Assumptions and open questions

The core Launch scenario is sufficiently defined to proceed into problem and requirements work.

Nine areas remain deliberately open.

| Area | Question to resolve when needed |
| --- | --- |
| **Catalogue and demand** | What products and order volumes should representative scenarios model? |
| **Stock rules** | How should website, Amazon, and temporary DM orders reserve and adjust inventory? |
| **External sales and discovery channels** | Which products use Amazon or Google Shopping, what information must be exchanged, where is authoritative product and stock information maintained, how fresh must channel data be, and how should orders, fulfilment, returns, fees, and reconciliation behave? |
| **Delivery and promotions** | What charges, thresholds, discounts, combinations, channel applicability, and expiry rules apply? |
| **Transaction lifecycle** | How should orders, payments, cancellations, returns, and refunds behave? |
| **Shipping support** | What shipment and tracking functions do staff and customers actually require? |
| **Users and roles** | Who uses each capability and what actions may they perform? |
| **Reporting** | Which initial sales, stock, channel, cost, and financial questions need answering? |
| **Operating constraints** | What budget, service expectations, capacity, and data requirements materially affect decisions? |

These are **not gates requiring every answer before work can continue**.

Each should be clarified to the level necessary for the downstream decision or requirement it influences.

Two current assumptions are particularly important:

- a focused self-build is expected to be economical for the founder, but this must be evaluated using both financial and operational costs;
- launch promotions are expected to encourage website adoption, but their effect on demand is not yet known.

## Scope boundaries

### Included

Launch includes:

- an owned online shop for stocked Borough Furnishings products;
- ongoing Amazon sales for selected products;
- product publication for eligible products through Google Shopping;
- coordination of relevant product, stock, order, and commercial information across Launch channels;
- catalogue and purchasing capabilities;
- payments and refunds;
- stock and order handling;
- fulfilment support;
- customer support;
- useful initial business reporting;
- small-team operation from rented storage and office premises;
- in-house picking, packing, and dispatch for applicable orders;
- external carrier transportation;
- UK-wide delivery including Northern Ireland;
- the one-month DM overlap;
- website-adoption promotions;
- cloud and identity foundations;
- development and delivery capabilities;
- observability and operational support;
- security;
- backup, recovery, and continuity;
- and appropriate cost management.

### Excluded

Launch excludes:

- social-media integration;
- migration from a hosted-commerce platform;
- made-to-order sales;
- physical retail shops;
- third-party sellers operating through the Borough Furnishings online shop;
- and international delivery.

### Deferred

The following are deliberately deferred:

- product reviews;
- loyalty and Honey Points;
- AI-assisted customer capabilities;
- larger organisational profiles;
- multi-cloud implementation;
- hybrid-cloud implementation;
- detailed technology selection;
- and business rules or targets that have not yet become decision-relevant.

## From profile to engineering work

The Launch profile establishes the business context from which the next layers of work are derived.

```text
Launch business profile
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

The initial Launch programme contains five starting projects:

1. **Retail applications**
2. **Cloud and identity foundations**
3. **Development and delivery enablement**
4. **Service operation and resilience**
5. **Business reporting and insight**

See [Projects](../../projects/) for the programme's project view.

See the [Launch problem contexts](../launch-problem-contexts/) for the problem spaces that connect this business scenario to the programme's projects.
