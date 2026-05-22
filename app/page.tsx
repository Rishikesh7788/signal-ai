"use client";

import { useState } from "react";

export default function HomePage() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!domain) return;

    setLoading(true);

    try {
      const res = await fetch("/api/lookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain }),
      });

      const data = await res.json();

      setResult(data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
          Signal AI
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl">
          AI-powered company enrichment pipeline with
          resilient vendor orchestration, review workflows,
          and structured outbound intelligence generation.
        </p>
      </div>

      {/* Search Card */}
      <div className="border rounded-2xl p-6 shadow-sm max-w-3xl">

        <h2 className="text-2xl font-semibold mb-4">
          Analyze Company Domain
        </h2>

        <div className="flex gap-3">
          <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter company domain (e.g. stripe.com)"
            className="border p-3 rounded-lg flex-1"
          />

          <button
            onClick={handleSubmit}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>

      </div>

      {/* Results */}
      {result && (
        <div className="mt-10 space-y-6 max-w-4xl">

          {/* Company Overview */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Company Overview
            </h2>

            <div className="space-y-2">
              <p>
                <strong>Domain:</strong>{" "}
                {result.domain}
              </p>

              <p>
                <strong>Fit Score:</strong>{" "}
                {result.enrichment.fitScore}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                  {result.status}
                </span>
              </p>
            </div>
          </div>

          {/* AI Reasoning */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              AI Reasoning
            </h2>

            <p className="leading-7">
              {result.enrichment.reasoning}
            </p>
          </div>

          {/* Touchpoints */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Suggested Touchpoints
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              {result.enrichment.touchpoints.map(
                (point: string) => (
                  <li key={point}>{point}</li>
                )
              )}
            </ul>
          </div>

          {/* Vendor Results */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Vendor Orchestration Results
            </h2>

            <div className="space-y-4">

              {result.vendors.map(
                (vendor: any, index: number) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4"
                  >

                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        className={`px-2 py-1 rounded text-white text-sm ${
                          vendor.status === "fulfilled"
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                      >
                        {vendor.status}
                      </span>
                    </p>

                    <pre className="mt-3 overflow-auto text-sm">
                      {JSON.stringify(vendor, null, 2)}
                    </pre>

                  </div>
                )
              )}

            </div>
          </div>

        </div>
      )}
    </main>
  );
}