const jobs = [
  {
    id: 1,
    title: "New lead",
    count: 3,
    amount: 300,
    jobs: [
      {
        id: 1,
        location: "New York Drive, CA, USA",
        client: "Briar House",
        tasks: { completed: 0, total: 2 },
        status: "New",
        tags: [],
        updated: "now",
        updatedDaysAgo: 0,
       
      },
      {
        id: 2,
        location: "London Road, Sheffield, UK",
        client: "Aileen Foley",
        tags: [
          { label: "Report Complete", color: "bg-green-100 text-green-800" },
          { label: "Draft proposal", color: "bg-yellow-100 text-yellow-800" }
        ],
        updated: 5,
        updatedDaysAgo: 6
      },
      {
        id: 3,
        location: "California 1, Malibu, CA, USA",
        client: "Travis Rosario",
        tags: [
          { label: "Report incomplete", color: "bg-orange-100 text-orange-800" }
        ],
        updated: 5,
        updatedDaysAgo: 6
      }
    ]
  },
  {
    id: 2,
    title: "Appointment Scheduled",
    count: 2,
    amount: 200,
    jobs: [
      {
        id: 4,
        location: "Las Vegas Monorail, Nevada, USA",
        client: "Finney Todd",
        tags: [
          { label: "Report Complete", color: "bg-green-100 text-green-800" },
          { label: "Draft proposal", color: "bg-yellow-100 text-yellow-800" }
        ],
        updated: 6,
        updatedDaysAgo: 7
      },
      {
        id: 5,
        location: "TotHill Street, London, UK",
        client: "Joy Horton",
        tasks: { completed: 0, total: 2 },
        tags: [],
        updated: 7,
        updatedDaysAgo: 8
      }
    ]
  },
  {
    id: 3,
    title: "Proposal Sent",
    count: 2,
    amount: 250,
    jobs: [
      {
        id: 6,
        location: "New York Drive, CA, USA",
        client: "Eve Neal",
        tags: [
          { label: "Report canceled", color: "bg-red-100 text-red-800" }
        ],
        updated: 5,
        updatedDaysAgo: 6
      },
      {
        id: 7,
        location: "UK Circle, Winter Park, FL, USA",
        client: "Paul Diaz",
        tags: [
          { label: "Report Complete", color: "bg-green-100 text-green-800" }
        ],
        updated: 5,
        updatedDaysAgo: 6
      }
    ]
  }
];

export default jobs;