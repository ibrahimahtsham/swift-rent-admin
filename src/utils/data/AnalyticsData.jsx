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
    data: [
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
    ],
  },
  {
    id: "Properties",
    color: "hsl(213, 93.8%, 55.6%)",
    data: [
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
    ],
  },
  {
    id: "Complains",
    color: "hsl(208, 97.9%, 70.4%)",
    data: [
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
      { x: "Month Year", y: 0 },
    ],
  },
];

// bar graph data

export const barGraphData = [
  {
    city: "Islamabad",
    Houses: 27,
    "Upper Portion": 10,
    "Lower Portion": 15,
    Flats: 20,
    Rooms: 10,
    "Commercial Plots": 5,
    "Agricultural Plots": 5,
    "Industrial Plots": 5,
    Offices: 5,
    Shops: 5,
    Buildings: 5,
    Warehouses: 5,
    Factories: 5,
  },
  {
    city: "Rawalpindi",
    Houses: 20,
    "Upper Portion": 10,
    "Lower Portion": 15,
    Flats: 20,
    Rooms: 10,
    "Commercial Plots": 5,
    "Agricultural Plots": 5,
    "Industrial Plots": 5,
    Offices: 5,
    Shops: 5,
    Buildings: 5,
    Warehouses: 5,
    Factories: 5,
  },
];

// starburst graph data

export const propertyStatusData = {
  id: "Rawalpindi and Islamabad",
  children: [
    {
      id: "Rawalpindi",
      color: "hsl(218, 89.7%, 40.8%)",
      children: [
        { id: "Vacant", value: 1, color: "hsl(218, 89.7%, 40.8%)" },
        { id: "Occupied", value: 2, color: "hsl(218, 89.7%, 40.8%)" },
      ],
    },
    {
      id: "Islamabad",
      color: "hsl(213, 93.8%, 55.6%)",
      children: [
        { id: "Vacant", value: 1, color: "hsl(213, 93.8%, 55.6%)" },
        { id: "Occupied", value: 1, color: "hsl(213, 93.8%, 55.6%)" },
      ],
    },
  ],
};
