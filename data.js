/* ============================================================
   PEPSICO CHILLER PLANT DASHBOARD — DATA FILE
   ------------------------------------------------------------
   HOW TO UPDATE:
   1. Do NOT edit index.html. Only edit the values below.
   2. Keep the quotes, commas and curly braces exactly as they are.
   3. status values allowed: "running" (green), "down" (red), "repair" (yellow)
   4. Dates use format "YYYY-MM-DD".
   5. Save the file, then refresh the dashboard (or re-publish to GitHub Pages)
      to see the changes live.
   ============================================================ */

const chillerData = {
  lastUpdated: "2026-07-24 14:30",
  plantName: "PepsiCo Plant — Chiller Fleet",

  chillers: [
    {
      id: "daikin",
      name: "Daikin Chiller",
      model: "EDIT ME (e.g. EWAD-TZ)",
      serialNumber: "EDIT ME",
      location: "Utility Building",
      circuits: [
        { id: 1, status: "running" },
        { id: 2, status: "running" }
      ],
      uptimePercent: 98.5,
      mtbfHours: 2200,
      mttrHours: 4,
      runtimeHours: 15420,
      currentLoadPercent: 62,
      supplyTempC: 6.5,
      returnTempC: 12.0,
      lastFailure: {
        date: "2026-05-12",
        description: "High discharge pressure trip"
      },
      lastMaintenance: {
        date: "2026-07-01",
        type: "Quarterly PM service",
        technician: "In-house team"
      },
      nextMaintenanceDue: "2026-10-01"
    },
    {
      id: "rps",
      name: "Omnivent RPS Chiller",
      model: "HS830CP3G9Z0",
      serialNumber: "IAZSM-009",
      location: "Utility Building",
      circuits: [
        { id: 1, status: "down" },
        { id: 2, status: "running" }
      ],
      uptimePercent: 91.2,
      mtbfHours: 1800,
      mttrHours: 6,
      runtimeHours: 12300,
      currentLoadPercent: 45,
      supplyTempC: 7.2,
      returnTempC: 13.1,
      lastFailure: {
        date: "2026-07-20",
        description: "Circuit 1 compressor fault — low refrigerant charge"
      },
      lastMaintenance: {
        date: "2026-06-15",
        type: "Semi-annual PM service",
        technician: "Vendor — Omnivent service"
      },
      nextMaintenanceDue: "2026-09-15"
    },
    {
      id: "petra",
      name: "Petra Chiller",
      model: "APSA125-2",
      serialNumber: "174470/0101/01",
      location: "Utility Building",
      circuits: [
        { id: 1, status: "running" },
        { id: 2, status: "repair" }
      ],
      uptimePercent: 95.0,
      mtbfHours: 2600,
      mttrHours: 5,
      runtimeHours: 18900,
      currentLoadPercent: 55,
      supplyTempC: 6.8,
      returnTempC: 12.4,
      lastFailure: {
        date: "2026-07-18",
        description: "Circuit 2 high head pressure — technician on site"
      },
      lastMaintenance: {
        date: "2026-07-24",
        type: "Corrective repair (in progress)",
        technician: "Vendor — Petra service"
      },
      nextMaintenanceDue: "TBD — pending repair completion"
    },
    {
      id: "zamil",
      name: "ZAMIL Air Cooled Chiller",
      model: "ASP050CMA-AE",
      serialNumber: "H0PZN0001M",
      location: "Utility Building",
      circuits: [
        { id: 1, status: "running" },
        { id: 2, status: "running" },
        { id: 3, status: "running" },
        { id: 4, status: "running" }
      ],
      uptimePercent: 99.1,
      mtbfHours: 3100,
      mttrHours: 3,
      runtimeHours: 21000,
      currentLoadPercent: 70,
      supplyTempC: 6.3,
      returnTempC: 11.8,
      lastFailure: {
        date: "2026-04-02",
        description: "Minor fan motor alarm — auto-reset"
      },
      lastMaintenance: {
        date: "2026-07-10",
        type: "Quarterly PM service",
        technician: "Vendor — ZAMIL service"
      },
      nextMaintenanceDue: "2026-10-10"
    }
  ]
};
