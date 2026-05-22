import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  role: text("role").default("sdr"),
});

export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  domain: text("domain").notNull(),
  fitScore: integer("fit_score"),
  fitReason: text("fit_reason"),
  status: text("status").default("processing"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const touchpoints = pgTable("touchpoints", {
  id: serial("id").primaryKey(),
  companyId: integer("company_id").notNull(),
  type: text("type").notNull(),
  content: text("content").notNull(),
  status: text("status").default("pending"),
});

export const usageLogs = pgTable("usage_logs", {
  id: serial("id").primaryKey(),
  vendor: text("vendor").notNull(),
  units: integer("units"),
  estimatedCost: integer("estimated_cost"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const eventLogs = pgTable("event_logs", {
  id: serial("id").primaryKey(),
  eventType: text("event_type").notNull(),
  payload: text("payload"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const rateLimits = pgTable("rate_limits", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  endpoint: text("endpoint").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});