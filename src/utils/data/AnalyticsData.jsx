// pie graphs data

export const usersData = [
  {
    id: "Owners",
    label: "Owners",
    value: 0,
    color: "hsl(218, 89.7%, 40.8%)",
  },
  {
    id: "Managers",
    label: "Managers",
    value: 0,
    color: "hsl(213, 93.8%, 55.6%)",
  },
  {
    id: "Tenants",
    label: "Tenants",
    value: 0,
    color: "hsl(208, 97.9%, 70.4%)",
  },
];

export const cityData = [
  {
    id: "Islamabad",
    label: "Islamabad",
    value: 0,
    color: "hsl(218, 89.7%, 40.8%)",
  },
  {
    id: "Rawalpindi",
    label: "Rawalpindi",
    value: 0,
    color: "hsl(213, 93.8%, 55.6%)",
  },
];

export const rentPaymentData = [
  {
    id: "On Time",
    label: "On Time",
    value: 0,
    color: "hsl(218, 89.7%, 40.8%)",
  },
  {
    id: "Late",
    label: "Late",
    value: 0,
    color: "hsl(213, 93.8%, 55.6%)",
  },
];

export const rentalsData = [
  {
    id: "Rentals",
    label: "Rentals",
    value: 0,
    color: "hsl(218, 89.7%, 40.8%)",
  },
  {
    id: "Tenants",
    label: "Tenants",
    value: 0,
    color: "hsl(213, 93.8%, 55.6%)",
  },
];

export const complainsData = [
  {
    id: "Solved",
    label: "Solved",
    value: 0,
    color: "hsl(218, 89.7%, 40.8%)",
  },
  {
    id: "Rejected",
    label: "Rejected",
    value: 0,
    color: "hsl(213, 93.8%, 55.6%)",
  },
  {
    id: "Pending",
    label: "Pending",
    value: 0,
    color: "hsl(208, 97.9%, 70.4%)",
  },
  {
    id: "In Progress",
    label: "In Progress",
    value: 0,
    color: "hsl(203, 100%, 85.3%)",
  },
];

export const managerTypesData = [
  {
    id: "Tenant Acquirers",
    label: "Tenant Acquirers",
    value: 0,
    color: "hsl(218, 89.7%, 40.8%)",
  },
  {
    id: "Property Managers",
    label: "Property Managers",
    value: 0,
    color: "hsl(213, 93.8%, 55.6%)",
  },
];

// line graph data

export const lineGraphData = [
  {
    id: "Registered Users",
    color: "hsl(218, 89.7%, 40.8%)",
    data: [{ x: "Month Year", y: 0 }],
  },
  {
    id: "Properties",
    color: "hsl(213, 93.8%, 55.6%)",
    data: [{ x: "Month Year", y: 0 }],
  },
  {
    id: "Complains",
    color: "hsl(208, 97.9%, 70.4%)",
    data: [{ x: "Month Year", y: 0 }],
  },
];

// bar graph data

export const propertyTypesPerCityData = [
  {
    city: "Islamabad",
    Houses: 0,
    "Upper Portion": 0,
    "Lower Portion": 0,
    Flats: 0,
    Rooms: 0,
    "Commercial Plots": 0,
    "Agricultural Plots": 0,
    "Industrial Plots": 0,
    Offices: 0,
    Shops: 0,
    Buildings: 0,
    Warehouses: 0,
    Factories: 0,
  },
  {
    city: "Rawalpindi",
    Houses: 0,
    "Upper Portion": 0,
    "Lower Portion": 0,
    Flats: 0,
    Rooms: 0,
    "Commercial Plots": 0,
    "Agricultural Plots": 0,
    "Industrial Plots": 0,
    Offices: 0,
    Shops: 0,
    Buildings: 0,
    Warehouses: 0,
    Factories: 0,
  },
];

export const passwordResetResponseTimeData = [
  { x: "Feb 24", value: 0 },
  { x: "Mar 24", value: 0 },
  { x: "Apr 24", value: 0 },
  { x: "May 24", value: 0 },
  { x: "Jun 24", value: 0 },
  { x: "Jul 24", value: 0 },
  { x: "Aug 24", value: 0 },
  { x: "Sep 24", value: 0 },
  { x: "Oct 24", value: 0 },
  { x: "Nov 24", value: 0 },
  { x: "Dec 24", value: 0 },
  { x: "Jan 25", value: 0 },
];

export const managerHireResponseTimeData = [
  { x: "Feb 24", value: 0 },
  { x: "Mar 24", value: 0 },
  { x: "Apr 24", value: 0 },
  { x: "May 24", value: 0 },
  { x: "Jun 24", value: 0 },
  { x: "Jul 24", value: 0 },
  { x: "Aug 24", value: 0 },
  { x: "Sep 24", value: 0 },
  { x: "Oct 24", value: 0 },
  { x: "Nov 24", value: 0 },
  { x: "Dec 24", value: 0 },
  { x: "Jan 25", value: 0 },
];

// sunburst graph data

export const propertyStatusData = {
  children: [
    {
      id: "Rawalpindi",
      color: "hsl(218, 89.7%, 40.8%)",
      children: [
        { id: "Vacant", value: 0, color: "hsl(218, 89.7%, 40.8%)" }, // keep colors for children too
        { id: "Occupied", value: 0, color: "hsl(218, 89.7%, 40.8%)" },
      ],
    },
    {
      id: "Islamabad",
      color: "hsl(213, 93.8%, 55.6%)",
      children: [
        { id: "Vacant", value: 0, color: "hsl(213, 93.8%, 55.6%)" },
        { id: "Occupied", value: 0, color: "hsl(213, 93.8%, 55.6%)" },
      ],
    },
  ],
};
