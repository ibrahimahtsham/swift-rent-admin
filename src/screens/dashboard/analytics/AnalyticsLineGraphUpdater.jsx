export function updateLineGraphData(data) {
  return data.map((item) => {
    if (item.id === "Registered Users") {
      return {
        ...item,
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
      };
    }
    if (item.id === "Properties") {
      return {
        ...item,
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
      };
    }
    if (item.id === "Complains") {
      return {
        ...item,
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
      };
    }
    return item;
  });
}
