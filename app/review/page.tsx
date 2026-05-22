"use client";

import { useState } from "react";

type Company = {
  domain: string;
  fitScore: number;
  status: string;
  reasoning: string;
};

export default function ReviewPage() {
  const [companies, setCompanies] = useState<Company[]>([
    {
      domain: "stripe.com",
      fitScore: 82,
      status: "pending",
      reasoning:
        "Strong outbound ICP with rapidly growing GTM organization.",
    },

    {
      domain: "notion.so",
      fitScore: 74,
      status: "approved",
      reasoning:
        "Collaborative SaaS platform with scaling product-led growth.",
    },

    {
      domain: "openai.com",
      fitScore: 91,
      status: "pending",
      reasoning:
        "High-growth AI organization with large engineering investment.",
    },
  ]);

  function updateStatus(
    domain: string,
    newStatus: string
  ) {
    setCompanies((prev) =>
      prev.map((company) =>
        company.domain === domain
          ? {
              ...company,
              status: newStatus,
            }
          : company
      )
    );
  }

  return (
    <main className="min-h-screen p-10">

      {/* Navigation */}
      <div className="flex gap-6 mb-10 text-sm">
        <a href="/" className="underline">
          Dashboard
        </a>

        <a href="/review" className="underline">
          Review Queue
        </a>

        <a href="/logs" className="underline">
          Event Logs
        </a>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Review Queue
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl">
          Human-in-the-loop review workflow for AI-generated
          enrichment results and outbound qualification.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

        <div className="border rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Pending Reviews
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {
              companies.filter(
                (c) => c.status === "pending"
              ).length
            }
          </h2>
        </div>

        <div className="border rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Approved
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {
              companies.filter(
                (c) => c.status === "approved"
              ).length
            }
          </h2>
        </div>

        <div className="border rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Rejected
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {
              companies.filter(
                (c) => c.status === "rejected"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Queue */}
      <div className="space-y-6">

        {companies.map((company) => (
          <div
            key={company.domain}
            className="border rounded-2xl p-6 shadow-sm"
          >

            <div className="flex items-start justify-between gap-6">

              <div className="flex-1">

                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold">
                    {company.domain}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      company.status === "approved"
                        ? "bg-green-600"
                        : company.status === "rejected"
                        ? "bg-red-600"
                        : "bg-yellow-600"
                    }`}
                  >
                    {company.status}
                  </span>
                </div>

                <p className="mb-3">
                  <strong>Fit Score:</strong>{" "}
                  {company.fitScore}
                </p>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <p className="text-sm font-semibold mb-2">
                    AI Reasoning
                  </p>

                  <p className="leading-7">
                    {company.reasoning}
                  </p>
                </div>

              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 min-w-[140px]">

                <button
                  onClick={() =>
                    updateStatus(
                      company.domain,
                      "approved"
                    )
                  }
                  className="bg-green-600 text-white px-4 py-3 rounded-xl"
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      company.domain,
                      "rejected"
                    )
                  }
                  className="bg-red-600 text-white px-4 py-3 rounded-xl"
                >
                  Reject
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}