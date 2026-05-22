export default function LogsPage() {
    const logs = [
      {
        event: "enrichment_completed",
        domain: "stripe.com",
        timestamp: new Date().toISOString(),
      },
      {
        event: "vendor_failed",
        domain: "openai.com",
        timestamp: new Date().toISOString(),
      },
    ];
  
    return (
      <main className="p-10">
        <div className="flex gap-4 mb-6">
          <a href="/" className="underline">
            Dashboard
          </a>
  
          <a href="/review" className="underline">
            Review Queue
          </a>
  
          <a href="/logs" className="underline">
            Logs
          </a>
        </div>
  
        <h1 className="text-3xl font-bold mb-8">
          Event Logs
        </h1>
  
        <div className="space-y-4">
          {logs.map((log, index) => (
            <div
              key={index}
              className="border rounded p-4"
            >
              <p>
                <strong>Event:</strong> {log.event}
              </p>
  
              <p>
                <strong>Domain:</strong> {log.domain}
              </p>
  
              <p>
                <strong>Timestamp:</strong>{" "}
                {log.timestamp}
              </p>
            </div>
          ))}
        </div>
      </main>
    );
  }