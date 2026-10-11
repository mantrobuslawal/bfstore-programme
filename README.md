# Borough Furnishings — Engineering Programme

**bfstore** is an independent engineering programme exploring the design, implementation, operation, and evolution of cloud-native retail systems.

It is centred on **Borough Furnishings**, a fictional retailer of computer-science-themed furniture and homeware. Different business profiles provide the context for examining requirements, architectural trade-offs, and working solutions.

The programme demonstrates end-to-end engineering capability through an inspectable record connecting business context to problems, projects, decisions, implementation, and validation.

## Current status

**Programme foundations established; documentation site setup in progress.**

The initial Launch profile, its problem contexts, and five starting projects have been documented. Repository organisation, the documentation workflow, and the initial site stack have been agreed.

Those documents are being prepared for import into this repository. Detailed requirements analysis, application implementation, and operational validation remain ahead. No live documentation-site URL is available yet.

Business scenarios are fictional. Implementation and validation claims will identify what was actually built or tested, including relevant conditions and limitations.

## Business profiles

| Profile | Context | Stage |
| --- | --- | --- |
| **Launch** | A technically experienced founder expands successful social-media DM sales into an owned online shop, supported by a small team and in-house fulfilment. | Initial profile and project definitions established; details remain open. |
| **Growth** | The retailer develops a wider range and larger or more specialised operations. | Storyline agreed; detailed profile planned. |
| **Expansion** | The business operates across more markets, locations, channels, and teams. | Storyline agreed; detailed profile planned. |
| **Multi-cloud evolution** | The larger retailer explores a common internal platform across AWS, Azure, and Google Cloud. | Storyline agreed; detailed profile planned. |

Hybrid-cloud exploration is also an eventual programme direction. Its scenario and placement remain to be defined.

## Launch projects

| Project | Purpose |
| --- | --- |
| **Retail applications** | Enable self-service purchasing and support stock, orders, fulfilment, and customer issues. |
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

This monorepo will contain programme documentation, site source, and executable work. Content has one authoritative home, with the public site providing accessible introductions and routes into technical detail.

The planned site navigation is **Overview, Profiles, Projects, Evidence, and Engineering guide**.

The agreed initial documentation stack is:

- **Astro + Starlight** for site generation and documentation presentation.
- **Pagefind** for search.
- **GitHub Actions** for checks and publication.
- **GitHub Pages** for public hosting.

Site configuration and build instructions will be added during setup. This stack describes the documentation hub, not the architecture or hosting of the retail applications.

Repository boundaries and tooling can be reviewed when concrete needs emerge. Projects do not automatically correspond to separate repositories or deployable services.

## Change workflow

Changes follow **draft → review → merge → publish**, using branches and pull requests. Related documentation and implementation changes should be reviewed together where appropriate.

Review may be deliberate self-review supported by automation and discussion; independent approval will not be implied where it has not occurred. Publication automation is planned and is not yet configured.

## Programme ownership

The programme is led by [Miri](https://github.com/mantrobuslawal). Project records will identify contributions and supporting evidence as work progresses.

This repository is distinct from the earlier [`bfstore`](https://github.com/mantrobuslawal/bfstore) project.

## Licence

A licence has not yet been selected. Public repository visibility does not itself grant an open-source licence.
