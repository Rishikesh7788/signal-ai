# Signal AI – Company Enrichment MVP

Signal AI is a lightweight AI-assisted outbound enrichment platform built as a proof of concept to demonstrate enrichment orchestration, AI-generated qualification workflows, human review systems, and resilient vendor handling.

The application accepts a company domain, generates enrichment insights, simulates multi-vendor orchestration, and routes the results into a review workflow.

---

## Live Demo

* Deployment: (https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

---

## Tech Stack

### Frontend & Backend

* Next.js (App Router)
* TypeScript
* Tailwind CSS

### Database & ORM

* Neon PostgreSQL
* Drizzle ORM

### Authentication

* NextAuth.js (GitHub OAuth)

### AI / Tooling

* Cursor AI
* ChatGPT
* Claude

### Deployment

* Vercel

---

## Features

### AI Enrichment Workflow

* Domain-based enrichment flow
* Dynamic fit scoring
* AI-generated reasoning
* Suggested outbound touchpoints

### Vendor Orchestration

* Simulated enrichment providers
* Parallel orchestration using `Promise.allSettled`
* Graceful degradation on vendor failures

### Human Review Queue

* Approve / Reject workflow
* Review dashboard for enrichment moderation

### Event Logs

* Lightweight operational visibility
* Enrichment event tracking

### Deployment

* Production deployment on Vercel
* Environment-based secret management

---

## Key Engineering Decisions

### Promise.allSettled for Vendor Resilience

Instead of using `Promise.all`, the enrichment pipeline uses `Promise.allSettled()` to isolate provider failures and continue processing partial enrichment results.

This prevents a single vendor outage or rate limit failure from collapsing the entire workflow.

### Human-in-the-loop Review

AI-generated enrichment is intentionally routed through a review queue before downstream usage to support moderation and operational oversight.

### Dynamic Simulated Enrichment

The MVP uses dynamic simulated enrichment rather than live paid APIs to demonstrate architecture and workflow design without requiring external provider access.

---

## Project Structure

```bash
app/
  api/
    lookup/
    auth/
  review/
  logs/

db/
  schema.ts
  index.ts

lib/
  ai/
  vendors/
  utils/
```

---

## Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GITHUB_ID=
GITHUB_SECRET=
```

---

## Running Locally

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm dev
```

Open:

```bash
http://localhost:3000
```

---

## Deployment

The application is deployed using Vercel.

Deployment flow:

1. Push code to GitHub
2. Import repository into Vercel
3. Configure environment variables
4. Deploy production build

---

## Limitations / Tradeoffs

This project was built as a fast-moving proof of concept while exploring unfamiliar stacks and workflows.

The following were intentionally simplified or mocked:

* External vendor APIs
* Slack integrations / redirect workflows
* Real-time streaming updates
* Advanced observability pipelines
* Full AI evaluation suite

---

## Learnings

This project involved learning and integrating several new tools and workflows under time constraints, including:

* Vercel deployment pipelines
* Neon + Drizzle ORM setup
* AI-assisted development workflows
* Resilient async orchestration patterns
* Human review system design

---

## Future Improvements

* Real provider integrations (Apollo, Clearbit, Hunter)
* Streaming enrichment updates
* Bulk review actions
* AI evaluation pipelines
* Cost tracking dashboard
* Structured observability with OpenTelemetry
* Queue-based processing architecture

---

## Author

Rishikesh K
