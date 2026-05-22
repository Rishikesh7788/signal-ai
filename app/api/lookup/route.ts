import { NextResponse } from "next/server";

const industries = [
  "SaaS",
  "Fintech",
  "AI",
  "Developer Tools",
  "Healthcare",
];

const touchpointPool = [
  "Recently expanded sales org",
  "Hiring SDRs aggressively",
  "Growing engineering team",
  "Launching enterprise offerings",
  "Expanding GTM operations",
  "Increasing outbound hiring",
];

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomScore() {
  return Math.floor(Math.random() * 40) + 60;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const domain = body.domain;

    console.log("Processing enrichment for:", domain);

    // Simulated vendor orchestration
    const vendors = await Promise.allSettled([
      Promise.reject("Apollo rate limit exceeded"),

      Promise.resolve({
        provider: "clearbit",
        industry: randomItem(industries),
        companySize: "1000-5000",
      }),

      Promise.resolve({
        provider: "hunter",
        emailsFound:
          Math.floor(Math.random() * 20) + 5,
      }),
    ]);

    const score = randomScore();

    const enrichment = {
      fitScore: score,

      reasoning: `${domain} appears to align strongly with outbound sales targeting based on hiring velocity, company growth signals, and likely GTM expansion.`,

      touchpoints: [
        randomItem(touchpointPool),
        randomItem(touchpointPool),
        randomItem(touchpointPool),
      ],
    };

    console.log({
      event: "enrichment_completed",
      domain,
      timestamp: new Date(),
    });

    return NextResponse.json({
      success: true,
      domain,
      enrichment,
      vendors,
      status: "completed",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process enrichment",
      },
      {
        status: 500,
      }
    );
  }
}