# Borough Furnishings - Engineering Programme

**bfstore** is an independent engineering programme exploring the design, implementation, operation, and evolution of cloud-native retail systems.

It is centred on **Borough Furnishings**, a fictional retailer of computer-science-themed furniture and homeware. Different business profiles provide the context for examining requirements, architectural trade-offs, and working solutions.

The programme demonstrates end-to-end engineering capability through an inspectable record connecting business context to problems, projects, decisions, implementation, and validation.

**Live documentation:** [Borough Furnishings Engineering Programme](https://mantrobuslawal.github.io/bfstore-programme/)

## Current status

**Launch programme baseline published; requirements preparation next.**

The initial Launch profile, its problem contexts, and five starting projects are published on the documentation site. Repository organisation, the documentation workflow, site structure, continuous integration, and automated publication are established.

The programme is now preparing for detailed requirements analysis. Architecture, implementation, operational validation, and supporting evidence will follow as the programme develops.

The documentation site is live at [mantrobuslawal.github.io/bfstore-programme](https://mantrobuslawal.github.io/bfstore-programme/).

Business scenarios are fictional. Implementation and validation claims will identify what was actually built or tested, including relevant conditions and limitations.

## Business profiles

| Profile | Context | Stage |
| --- | --- | --- |
| **Launch** | A technically experienced founder builds on successful direct-message and Amazon sales by establishing an owned online shop, retaining selected marketplace sales, and extending product discovery through Google Shopping. | Initial profile, problem contexts, and project definitions established; details remain open. |
| **Growth** | The retailer develops a wider range and larger or more specialised operations. | Storyline agreed; detailed profile planned. |
| **Expansion** | The business operates across more markets, locations, channels, and teams. | Storyline agreed; detailed profile planned. |
| **Multi-cloud evolution** | The larger retailer explores a common internal platform across AWS, Azure, and Google Cloud. | Storyline agreed; detailed profile planned. |

Hybrid-cloud exploration is also an eventual programme direction. Its scenario and placement remain to be defined.

## Launch projects

| Project | Purpose |
| --- | --- |
| **Retail applications** | Enable self-service purchasing while coordinating relevant product, stock, order, fulfilment, customer, and external-channel activity. |
| **Cloud and identity foundations** | Establish manageable cloud environments and shared identity/access capabilities. |
| **Development and delivery enablement** | Provide repeatable workflows for developing, verifying, and releasing changes. |
| **Service operation and resilience** | Establish observability, support, backup, recovery, and continuity arrangements. |
| **Business reporting and insight** | Provide dependable information for commercial decisions. |

Security, privacy, identity, reliability, and financial accountability require coordination across these projects.

## Engineering approach

Work proceeds from **business profile → problem contexts → projects → requirements analysis**, followed by design, implementation, and validation as the programme develops.

- Make architectural choices in the context of business needs and constraints.
- Distinguish agreed facts, assumptions, proposals, and unresolved questions.
- Keep documentation lean; add detail when it supports downstream work.
- Record significant decisions and their trade-offs.
- Link implemented capabilities to relevant code and validation evidence.
- Distinguish document status from delivery status: an agreed design is not necessarily implemented or validated.

## Repository and documentation site

This monorepo contains the programme documentation and documentation-site source, and will contain executable programme work as implementation begins. Content has one authoritative home, with the public site providing accessible introductions and routes into technical detail.

The site navigation is **Overview, Profiles, Projects, Evidence, and Engineering guide**.

The current documentation stack is:

- **Astro + Starlight** for site generation and documentation presentation.
- **Pagefind** for search.
- **GitHub Actions** for continuous integration and publication.
- **GitHub Pages** for public hosting.

The documentation site is built and published through GitHub Actions. This stack describes the documentation hub, not the architecture or hosting of the retail applications.

Repository boundaries and tooling can be reviewed when concrete needs emerge. Projects do not automatically correspond to separate repositories or deployable services.

## Change workflow

Changes follow **draft → review → merge → publish**, using branches and pull requests. Related documentation and implementation changes should be reviewed together where appropriate.

Review may be deliberate self-review supported by automation and discussion; independent approval will not be implied where it has not occurred. Publication is automated through GitHub Actions following changes merged to `main`.

## Programme ownership

The programme is led by [Miri](https://github.com/mantrobuslawal). Project records will identify contributions and supporting evidence as work progresses.

This repository is distinct from the earlier [`bfstore`](https://github.com/mantrobuslawal/bfstore) project.

## Licence

A licence has not yet been selected. Public repository visibility does not itself grant an open-source licence.
