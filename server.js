import express from "express";
import cors from "cors";
import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const app = express();
const port = process.env.PORT || 4000;
const dataDir = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDir, "inquiries.jsonl");
const allowedOrigins = new Set([
  "http://127.0.0.1:5173",
  "http://localhost:5173",
  "http://127.0.0.1:5174",
  "http://localhost:5174",
]);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked for origin: ${origin}`));
  },
}));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    message: "EchoEarth inquiry backend is running.",
    health: "/api/health",
    inquiries: "/api/inquiries",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "EchoEarth inquiry API" });
});

app.post("/api/inquiries", async (req, res) => {
  try {
    const payload = sanitizeInquiry(req.body);

    if (!payload.name || !payload.email || !payload.message) {
      return res.status(400).json({
        ok: false,
        message: "Please provide name, email, and message.",
      });
    }

    const inquiry = {
      id: randomUUID(),
      receivedAt: new Date().toISOString(),
      ...payload,
    };

    await mkdir(dataDir, { recursive: true });
    await appendFile(leadsFile, `${JSON.stringify(inquiry)}\n`, "utf8");

    res.status(201).json({
      ok: true,
      message: "Inquiry received. EchoEarth will contact you shortly.",
      inquiryId: inquiry.id,
    });
  } catch (error) {
    console.error("Inquiry save failed:", error);
    res.status(500).json({
      ok: false,
      message: "Server could not save the inquiry. Please try again.",
    });
  }
});

function sanitizeInquiry(body = {}) {
  return {
    source: clean(body.source || "website"),
    packageTitle: clean(body.packageTitle || ""),
    school: clean(body.school || ""),
    name: clean(body.name || body.contactPerson || ""),
    email: clean(body.email || ""),
    phone: clean(body.phone || ""),
    groupSize: clean(body.groupSize || ""),
    interest: clean(body.interest || ""),
    message: clean(body.message || body.requirements || ""),
  };
}

function clean(value) {
  return String(value).trim().slice(0, 1000);
}

app.use((error, _req, res, _next) => {
  console.error("Server error:", error.message);
  res.status(500).json({
    ok: false,
    message: error.message || "Unexpected server error.",
  });
});

app.listen(port, () => {
  console.log(`EchoEarth inquiry API running at http://127.0.0.1:${port}`);
});
