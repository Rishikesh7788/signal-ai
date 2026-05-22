import { relations } from "drizzle-orm/relations";
import {
  auditLogs,
  enrichments,
  eventLogs,
  leads,
  outreachSequences,
  usageLogs,
  users,
} from "./schema";

export const usersRelations = relations(users, ({ many }) => ({
  leads: many(leads, { relationName: "leadOwner" }),
  enrichments: many(enrichments),
  outreachSequences: many(outreachSequences),
  usageLogs: many(usageLogs),
  auditLogsAsActor: many(auditLogs, { relationName: "auditActor" }),
  auditLogsAsTarget: many(auditLogs, { relationName: "auditTarget" }),
  eventLogs: many(eventLogs),
  reviewedLeads: many(leads, { relationName: "leadReviewer" }),
  assignedReviewLeads: many(leads, { relationName: "leadAssignee" }),
}));

export const leadsRelations = relations(leads, ({ one, many }) => ({
  owner: one(users, {
    fields: [leads.userId],
    references: [users.id],
    relationName: "leadOwner",
  }),
  reviewer: one(users, {
    fields: [leads.reviewerId],
    references: [users.id],
    relationName: "leadReviewer",
  }),
  assignedReviewer: one(users, {
    fields: [leads.assignedReviewerId],
    references: [users.id],
    relationName: "leadAssignee",
  }),
  enrichments: many(enrichments),
  outreachSequences: many(outreachSequences),
  usageLogs: many(usageLogs),
}));

export const enrichmentsRelations = relations(enrichments, ({ one, many }) => ({
  lead: one(leads, {
    fields: [enrichments.leadId],
    references: [leads.id],
  }),
  user: one(users, {
    fields: [enrichments.userId],
    references: [users.id],
  }),
  parent: one(enrichments, {
    fields: [enrichments.parentEnrichmentId],
    references: [enrichments.id],
    relationName: "enrichmentChain",
  }),
  children: many(enrichments, { relationName: "enrichmentChain" }),
  usageLogs: many(usageLogs),
}));

export const outreachSequencesRelations = relations(
  outreachSequences,
  ({ one }) => ({
    user: one(users, {
      fields: [outreachSequences.userId],
      references: [users.id],
    }),
    lead: one(leads, {
      fields: [outreachSequences.leadId],
      references: [leads.id],
    }),
  }),
);

export const usageLogsRelations = relations(usageLogs, ({ one }) => ({
  user: one(users, {
    fields: [usageLogs.userId],
    references: [users.id],
  }),
  enrichment: one(enrichments, {
    fields: [usageLogs.enrichmentId],
    references: [enrichments.id],
  }),
  lead: one(leads, {
    fields: [usageLogs.leadId],
    references: [leads.id],
  }),
}));

export const auditLogsRelations = relations(auditLogs, ({ one }) => ({
  actor: one(users, {
    fields: [auditLogs.actorUserId],
    references: [users.id],
    relationName: "auditActor",
  }),
  target: one(users, {
    fields: [auditLogs.targetUserId],
    references: [users.id],
    relationName: "auditTarget",
  }),
}));

export const eventLogsRelations = relations(eventLogs, ({ one }) => ({
  user: one(users, {
    fields: [eventLogs.userId],
    references: [users.id],
  }),
}));

export const schemaRelations = {
  users: usersRelations,
  leads: leadsRelations,
  enrichments: enrichmentsRelations,
  outreachSequences: outreachSequencesRelations,
  usageLogs: usageLogsRelations,
  auditLogs: auditLogsRelations,
  eventLogs: eventLogsRelations,
} as const;
