// Full Sunshine Islands network (Daytime routes)
const routes = [
// -- Zone 1 & Zone 1 inter‑zone --
{
  number: "21",
  stops: [
    "Dove Estate", "Dove Hill", "Third Technology Building",
    "Wright Shopping Center", "Timelapse Mall",
    "Roblox HQ", "Dove Fire Station",
    "Eddie City", "Basketball Court", "Roblox TV"
  ],
  timetable: { first: 345, last: 60, peak: 10, offpeak: 15 }
},

{
  number: "25",
  stops: [
    "Long Island Ferry Pier", "Culture Square",
    "Iris Point Station", "Container's Island Bus Terminus"
  ],
  timetable: { first: 360, last: 30, peak: 12, offpeak: 15 }
},

// -- Route 41A --
{
  number: "41A",
  stops: [
    "Sunshine Pier", "Sunshine Station", "Central",
    "Northern Interchange", "Northern Beach"
  ],
  timetable: { first: 360, last: 1320, peak: 10, offpeak: 15 }
},

// -- Zone 4 routes --
{
  number: "42",
  stops: [
    "Southern Central", "Sunshine Station",
    "Central Hospital", "Northern Interchange", "Rocky Road"
  ],
  timetable: { first: 380, last: 1380, peak: 10, offpeak: 20 }
},

{
  number: "42A",
  stops: [
    "Sunshine Pier", "Sunshine Station",
    "Central Hospital", "Rocky Road"
  ],
  timetable: { first: 380, last: 1380, peak: 10, offpeak: 15 }
},

{
  number: "46",
  stops: [
    "Central", "Eastmallow", "Norton Town Center"
  ],
  timetable: { first: 370, last: 1350, peak: 12, offpeak: 18 }
},

{
  number: "47",
  stops: [
    "Sunshine University", "Eastmallow",
    "Central Hospital", "Sunshine Station", "Central"
  ],
  timetable: { first: 360, last: 1380, peak: 8, offpeak: 12 }
},

{
  number: "49A",
  stops: [
    "Northern Interchange", "Sunshine Pier",
    "Northern Beach"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
},

{
  number: "73",
  stops: [
    "Southern Cultural District", "Southern Central",
    "Central", "Northern Interchange"
  ],
  timetable: { first: 370, last: 1380, peak: 12, offpeak: 18 }
},

{
  number: "74A",
  stops: [
    "Central", "Axis Road", "Northern Interchange"
  ],
  timetable: { first: 360, last: 1380, peak: 10, offpeak: 15 }
},

// -- Routes in North Island & Leafy areas --
{
  number: "75",
  stops: [
    "Central", "Rainbow Estate",
    "Norton Town Center"
  ],
  timetable: { first: 360, last: 1380, peak: 10, offpeak: 15 }
},

{
  number: "75P",
  stops: [
    "Haisey Estate", "East Factory", "Southern Central"
  ],
  timetable: { first: 360, last: 1020, peak: 10, offpeak: 18 }
},

{
  number: "76",
  stops: [
    "Southern Central", "Central", "Norton Town Center"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
},

{
  number: "77",
  stops: [
    "Southern Central", "Central", "Northern Interchange"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
},

// -- Zone 6 & 7 inter‑zone --
{
  number: "140",
  stops: [
    "Long Island Ferry Pier", "Sunshine Stadium", "Central",
    "Sunshine Pier"
  ],
  timetable: { first: 360, last: 1380, peak: 10, offpeak: 15 }
},

{
  number: "140P",
  stops: [
    "Sunshine Pier", "Long Island Ferry Pier"
  ],
  timetable: { first: 420, last: 1020, peak: 12, offpeak: 15 }
},

{
  number: "141P",
  stops: [
    "Central", "Axis Road", "Zone 7 Interchange"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
},

{
  number: "142",
  stops: [
    "Dove Estate", "Central", "Sunshine Pier"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
},

{
  number: "148",
  stops: [
    "Container's Island Bus Terminus", "Dove Estate",
    "Northern Interchange", "Sunshine University", "Norton Town Center"
  ],
  timetable: { first: 360, last: 1380, peak: 10, offpeak: 15 }
},

{
  number: "171",
  stops: [
    "Long Island Ferry Pier", "Dove Estate",
    "Northern Interchange", "Zone 7 Interchange", "Rainbow Estate Complex"
  ],
  timetable: { first: 390, last: 1380, peak: 8, offpeak: 15 }
},

{
  number: "246X",
  stops: [
    "Addi City", "Maple Lane", "Central"
  ],
  timetable: { first: 360, last: 1320, peak: 15, offpeak: 20 }
},

// -- Zone 7 & 8 inter‑zone --
{
  number: "370",
  stops: [
    "Central", "Axis Road", "Zone 7 Interchange"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
},

{
  number: "370A",
  stops: [
    "Long Island Ferry Pier", "Senpai Shopping Centre"
  ],
  timetable: { first: 360, last: 1380, peak: 10, offpeak: 15 }
},

{
  number: "370B",
  stops: [
    "Long Island Ferry Pier", "Senpai Shopping Centre"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
},

// -- Major Inter‑Zone connectors --
{
  number: "472",
  stops: [
    "Senpai Shopping Centre", "Kamaya",
    "Zone 7 Interchange", "Southern Central",
    "Central", "Norton Town Center"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
},

{
  number: "473",
  stops: [
    "Central", "Maple Lane", "Zone 7 Interchange"
  ],
  timetable: { first: 360, last: 1380, peak: 10, offpeak: 15 }
},

{
  number: "475",
  stops: [
    "Senpai Shopping Centre", "Eastmallow",
    "Rainbow Estate", "Norton Town Center"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
},

{
  number: "475A",
  stops: [
    "Senpai Shopping Centre", "Rainbow Estate",
    "Leafy Bay"
  ],
  timetable: { first: 360, last: 1380, peak: 15, offpeak: 20 }
},

{
  number: "475P",
  stops: [
    "Central", "Rainbow Estate"
  ],
  timetable: { first: 360, last: 1020, peak: 10, offpeak: 15 }
},

{
  number: "476",
  stops: [
    "Eastmallow Praya Road", "Sunshine Station",
    "Rainbow Estate", "Zone 7 Interchange"
  ],
  timetable: { first: 360, last: 1380, peak: 10, offpeak: 15 }
},

{
  number: "476P",
  stops: [
    "Central", "Sunshine Station"
  ],
  timetable: { first: 360, last: 1020, peak: 12, offpeak: 18 }
},

{
  number: "476X",
  stops: [
    "Central", "Axis Road", "Zone 7 Interchange"
  ],
  timetable: { first: 360, last: 1380, peak: 15, offpeak: 20 }
},

// -- Sightseeing & tourist --
{
  number: "S1",
  stops: [
    "Long Island Ferry Pier", "Timelapse Mall",
    "Sunshine Stadium", "Northern Interchange",
    "Sun Central Street", "Southern Cultural District",
    "Central"
  ],
  timetable: { first: 660, last: 1080, peak: 30, offpeak: 30 }
},

{
  number: "S2",
  stops: [
    "Central", "Sunshine Stadium",
    "Northern Interchange", "Long Island Ferry Pier"
  ],
  timetable: { first: 660, last: 1080, peak: 30, offpeak: 30 }
},

{
  number: "U47",
  stops: [
    "Sunshine University", "Central Hospital", "Central"
  ],
  timetable: { first: 360, last: 1380, peak: 12, offpeak: 18 }
}
];
