/* ============================================================
   PEPSICO CHILLER PLANT DASHBOARD — DATA FILE
   ------------------------------------------------------------
   HOW TO UPDATE — read this once, it explains everything:

   1. Do NOT edit index.html. Only edit the values below.
   2. Keep the quotes, commas and curly braces exactly as they are.

   CIRCUIT STATUS (colored boxes on each card)
   - Set each circuit's status by hand: "running" (green), "down" (red),
     "repair" (yellow). Update this the moment a circuit's state changes.

   UPTIME / MTBF / MTTR — YOU DO NOT CALCULATE THESE.
   The dashboard calculates them automatically from the raw events you log
   in "failureLog" below. You only enter WHEN things happened — the math
   (uptime %, Mean Time Between Failures, Mean Time To Repair) is done
   for you every time the page loads.

   To log a failure:
     { circuit: 1, start: "2026-07-20 07:30", end: "2026-07-20 13:00",
       description: "Compressor fault — low refrigerant charge" }
   - "start" = when the failure/trip happened.
   - "end"   = when it was fixed and circuit was back to normal.
   - If it's still broken right now, leave the repair open by writing
     end: null  (no quotes around null). The dashboard will keep counting
     downtime against it live until you fill in the "end" time.
   - Date/time format: "YYYY-MM-DD HH:MM" (24-hour clock). If you only
     know the date, "YYYY-MM-DD" also works (defaults to 00:00).

   To log a maintenance visit (PM service, inspection, repair visit):
     { date: "2026-07-01", type: "Quarterly PM service", technician: "In-house team" }

   "monitoringStart" = the date the dashboard starts counting from for
   uptime/MTBF/MTTR math. Leave as-is unless you want to reset the window
   (e.g. after a major overhaul).

   "runtimeHours" = the compressor/hour-meter reading — enter this from
   the physical meter each time you check the unit (this one can't be
   calculated from the data above).

   nextMaintenanceDue = your planned next PM date — enter manually.

   model / serialNumber — leave as "" (empty) if unknown; the dashboard
   will just show "Model / S/N — to be added" until you fill them in.

   Save the file, then refresh the dashboard (or re-publish to GitHub
   Pages) to see the changes live.
   ============================================================ */

const chillerData = {
  lastUpdated: "2026-07-24 14:30",
  plantName: "PepsiCo Plant — Chiller Fleet",

  chillers: [
    {
      id: "daikin",
      name: "Daikin Chiller",
      model: "",
      serialNumber: "",
      location: "Utility Building",
      circuits: [
        { id: 1, status: "running" },
        { id: 2, status: "running" }
      ],
      monitoringStart: "2026-01-01",
      runtimeHours: 15420,
      failureLog: [
        { circuit: 1, start: "2026-05-12 08:00", end: "2026-05-12 12:00",
          description: "High discharge pressure trip" }
      ],
      maintenanceLog: [
        { date: "2026-04-01", type: "Quarterly PM service", technician: "In-house team" },
        { date: "2026-07-01", type: "Quarterly PM service", technician: "In-house team" }
      ],
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
      monitoringStart: "2026-01-01",
      runtimeHours: 12300,
      failureLog: [
        { circuit: 1, start: "2026-03-10 09:00", end: "2026-03-10 15:00",
          description: "Circuit 1 low refrigerant alarm" },
        { circuit: 1, start: "2026-07-20 07:30", end: null,
          description: "Circuit 1 compressor fault — low refrigerant charge (ongoing)" }
      ],
      maintenanceLog: [
        { date: "2026-06-15", type: "Semi-annual PM service", technician: "Vendor — Omnivent service" }
      ],
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
      monitoringStart: "2026-01-01",
      runtimeHours: 18900,
      failureLog: [
        { circuit: 2, start: "2026-07-18 10:00", end: null,
          description: "Circuit 2 high head pressure — technician on site" }
      ],
      maintenanceLog: [
        { date: "2026-02-20", type: "Quarterly PM service", technician: "Vendor — Petra service" },
        { date: "2026-07-24", type: "Corrective repair (in progress)", technician: "Vendor — Petra service" }
      ],
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
      monitoringStart: "2026-01-01",
      runtimeHours: 21000,
      failureLog: [
        { circuit: 3, start: "2026-04-02 06:00", end: "2026-04-02 06:45",
          description: "Minor fan motor alarm — auto-reset" }
      ],
      maintenanceLog: [
        { date: "2026-04-10", type: "Quarterly PM service", technician: "Vendor — ZAMIL service" },
        { date: "2026-07-10", type: "Quarterly PM service", technician: "Vendor — ZAMIL service" }
      ],
      nextMaintenanceDue: "2026-10-10"
    }
  ]
};
