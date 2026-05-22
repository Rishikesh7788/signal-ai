CREATE TABLE "companies" (
	"id" serial PRIMARY KEY NOT NULL,
	"domain" text NOT NULL,
	"fit_score" integer,
	"fit_reason" text,
	"status" text DEFAULT 'processing',
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "event_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_type" text NOT NULL,
	"payload" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "rate_limits" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"endpoint" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "touchpoints" (
	"id" serial PRIMARY KEY NOT NULL,
	"company_id" integer NOT NULL,
	"type" text NOT NULL,
	"content" text NOT NULL,
	"status" text DEFAULT 'pending'
);
--> statement-breakpoint
CREATE TABLE "usage_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"vendor" text NOT NULL,
	"units" integer,
	"estimated_cost" integer,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"role" text DEFAULT 'sdr'
);
