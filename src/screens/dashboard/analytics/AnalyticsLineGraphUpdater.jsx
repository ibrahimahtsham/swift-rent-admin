import axios from "axios";
import { BASE_URL } from "../../../utils/db-config";

export function updateLineGraphData() {
  return [
    {
      id: "Website Visits",
      color: "hsl(223, 88.5%, 35.6%)",
      data: [
        { x: "Jun 23", y: 500 },
        { x: "Jul 23", y: 600 },
        { x: "Aug 23", y: 550 },
        { x: "Sep 23", y: 580 },
        { x: "Oct 23", y: 700 },
        { x: "Nov 23", y: 750 },
        { x: "Dec 23", y: 800 },
        { x: "Jan 24", y: 1000 },
        { x: "Feb 24", y: 1100 },
        { x: "Mar 24", y: 1200 },
        { x: "Apr 24", y: 1300 },
        { x: "May 24", y: 1400 },
      ],
    },
    {
      id: "Registered Users",
      color: "hsl(218, 89.7%, 40.8%)",
      data: [
        { x: "Jun 23", y: 0 },
        { x: "Jul 23", y: 0 },
        { x: "Aug 23", y: 0 },
        { x: "Sep 23", y: 0 },
        { x: "Oct 23", y: 3 },
        { x: "Nov 23", y: 5 },
        { x: "Dec 23", y: 3 },
        { x: "Jan 24", y: 7 },
        { x: "Feb 24", y: 9 },
        { x: "Mar 24", y: 5 },
        { x: "Apr 24", y: 10 },
        { x: "May 24", y: 30 },
      ],
    },
    {
      id: "Properties",
      color: "hsl(213, 93.8%, 55.6%)",
      data: [
        { x: "Jun 23", y: 0 },
        { x: "Jul 23", y: 0 },
        { x: "Aug 23", y: 0 },
        { x: "Sep 23", y: 0 },
        { x: "Oct 23", y: 10 },
        { x: "Nov 23", y: 30 },
        { x: "Dec 23", y: 25 },
        { x: "Jan 24", y: 70 },
        { x: "Feb 24", y: 50 },
        { x: "Mar 24", y: 75 },
        { x: "Apr 24", y: 120 },
        { x: "May 24", y: 50 },
      ],
    },
    {
      id: "Complains",
      color: "hsl(208, 97.9%, 70.4%)",
      data: [
        { x: "Jun 23", y: 0 },
        { x: "Jul 23", y: 0 },
        { x: "Aug 23", y: 0 },
        { x: "Sep 23", y: 0 },
        { x: "Oct 23", y: 5 },
        { x: "Nov 23", y: 18 },
        { x: "Dec 23", y: 14 },
        { x: "Jan 24", y: 16 },
        { x: "Feb 24", y: 50 },
        { x: "Mar 24", y: 80 },
        { x: "Apr 24", y: 100 },
        { x: "May 24", y: 40 },
      ],
    },
  ];
}
