import { pgEnum } from "drizzle-orm/pg-core";

/** Account & access */
export const userRoleEnum = pgEnum("user_role", [
  "owner",
  "admin",
  "member",
  "reviewer",
]);

export const userStatusEnum = pgEnum("user_status", [
  "active",
  "invited",
  "suspended",
  "deleted",
]);

/** Lead lifecycle */
export const leadStatusEnum = pgEnum("lead_status", [
  "new",
  "queued",
  "enriching",
  "enriched",
  "failed",
  "archived",
]);

export const leadSourceEnum = pgEnum("lead_source", [
  "manual",
  "csv_import",
  "api",
  "crm_sync",
  "webhook",
]);

/** Human-in-the-loop reviewer workflow */
export const reviewStatusEnum = pgEnum("review_status", [
  "not_required",
  "pending",
  "in_review",
  "approved",
  "rejected",
  "changes_requested",
]);

/** Async job pipeline (enrichments, sequences, workers) */
export const asyncJobStatusEnum = pgEnum("async_job_status", [
  "queued",
  "processing",
  "completed",
  "failed",
  "cancelled",
  "retrying",
]);

export const enrichmentTypeEnum = pgEnum("enrichment_type", [
  "company_profile",
  "contact_discovery",
  "firmographics",
  "technographics",
  "ai_summary",
  "email_verification",
  "custom",
]);

/** Third-party & AI providers */
export const vendorEnum = pgEnum("vendor", [
  "openai",
  "anthropic",
  "clearbit",
  "apollo",
  "hunter",
  "proxycurl",
  "linkedin",
  "sendgrid",
  "resend",
  "internal",
  "manual",
]);

export const outreachSequenceStatusEnum = pgEnum("outreach_sequence_status", [
  "draft",
  "scheduled",
  "active",
  "paused",
  "completed",
  "cancelled",
]);

export const outreachChannelEnum = pgEnum("outreach_channel", [
  "email",
  "linkedin",
  "phone",
  "multi",
]);

/** Billing & metering */
export const usageResourceEnum = pgEnum("usage_resource", [
  "enrichment",
  "ai_tokens",
  "api_call",
  "lead_import",
  "outreach_send",
  "review_action",
]);

/** Immutable audit trail */
export const auditActionEnum = pgEnum("audit_action", [
  "create",
  "update",
  "delete",
  "approve",
  "reject",
  "submit_review",
  "assign_reviewer",
  "unassign_reviewer",
  "export",
  "login",
  "impersonate",
  "enqueue_job",
  "cancel_job",
]);

export const auditEntityTypeEnum = pgEnum("audit_entity_type", [
  "user",
  "lead",
  "enrichment",
  "outreach_sequence",
  "usage_log",
]);

/** High-volume operational events */
export const eventCategoryEnum = pgEnum("event_category", [
  "lead",
  "enrichment",
  "outreach",
  "billing",
  "auth",
  "system",
  "integration",
]);

export const eventSeverityEnum = pgEnum("event_severity", [
  "debug",
  "info",
  "warn",
  "error",
]);

export const eventSourceEnum = pgEnum("event_source", [
  "api",
  "worker",
  "webhook",
  "ui",
  "cron",
  "system",
]);
