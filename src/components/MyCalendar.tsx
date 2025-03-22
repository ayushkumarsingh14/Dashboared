"use client";
import { ResponsiveCalendar } from "@nivo/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

// 🔥 Define types for Calendar Data
interface CalendarData {
  day: string;
  value: number;
}

const MyResponsiveCalendar: React.FC<{ data: CalendarData[] }> = ({ data }) => (
  <ResponsiveCalendar
    data={data}
    from="2023-01-01"
    to="2025-12-31"
    emptyColor="#eeeeee"
    colors={["#e8c1a0", "#f47560", "#61cdbb", "#97e3d5"]}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left",
      },
    ]}
  />
);

const MyCalendar: React.FC = () => {
  // 📅 Sample Data with Random Dates & Values
  const data: CalendarData[] = [
    { day: "2023-03-02", value: 8 },
    { day: "2023-03-15", value: 23 },
    { day: "2023-03-28", value: 45 },
    { day: "2023-04-05", value: 12 },
    { day: "2023-04-17", value: 60 },
    { day: "2023-04-29", value: 90 },
    { day: "2023-05-06", value: 33 },
    { day: "2023-05-18", value: 75 },
    { day: "2023-05-30", value: 15 },
    { day: "2023-06-07", value: 50 },
    { day: "2023-06-19", value: 95 },
    { day: "2023-07-01", value: 42 },
    { day: "2023-07-13", value: 70 },
    { day: "2023-07-25", value: 18 },
    { day: "2023-08-03", value: 55 },
    { day: "2023-08-15", value: 87 },
    { day: "2023-08-27", value: 28 },
    { day: "2023-09-08", value: 65 },
    { day: "2023-09-20", value: 100 },
    { day: "2023-10-02", value: 38 },
    { day: "2023-10-14", value: 80 },
    { day: "2023-10-26", value: 22 },
    { day: "2023-11-07", value: 68 },
    { day: "2023-11-19", value: 91 },
    { day: "2023-12-01", value: 30 },
    { day: "2023-12-13", value: 74 },
    { day: "2023-12-25", value: 20 },
    { day: "2024-01-06", value: 56 },
    { day: "2024-01-18", value: 88 },
    { day: "2024-01-30", value: 40 },
    { day: "2024-02-11", value: 72 },
    { day: "2024-02-23", value: 19 },
    { day: "2024-03-06", value: 63 },
    { day: "2024-03-18", value: 99 },
    { day: "2024-03-30", value: 35 },
    { day: "2024-04-11", value: 77 },
    { day: "2024-04-23", value: 26 },
    { day: "2024-05-05", value: 60 },
    { day: "2024-05-17", value: 92 },
    { day: "2024-05-29", value: 45 },
    { day: "2024-06-10", value: 82 },
    { day: "2024-06-22", value: 28 },
    { day: "2024-07-04", value: 68 },
    { day: "2024-07-16", value: 97 },
    { day: "2024-07-28", value: 33 },
    { day: "2024-08-09", value: 76 },
    { day: "2024-08-21", value: 21 },
    { day: "2024-09-02", value: 55 },
    { day: "2024-09-14", value: 89 },
    { day: "2024-09-26", value: 48 },
    { day: "2024-10-08", value: 70 },
    { day: "2024-10-20", value: 25 },
    { day: "2024-11-01", value: 62 },
    { day: "2024-11-13", value: 93 },
    { day: "2024-11-25", value: 37 },
    { day: "2024-12-07", value: 78 },
    { day: "2024-12-19", value: 29 },
    { day: "2025-01-01", value: 66 },
    { day: "2025-01-13", value: 95 },
    { day: "2025-01-25", value: 39 },
    { day: "2025-02-06", value: 73 },
    { day: "2025-02-18", value: 22 },
    { day: "2025-03-02", value: 58 },
    { day: "2025-03-14", value: 90 },
    { day: "2025-03-26", value: 44 },
    { day: "2025-04-07", value: 71 },
    { day: "2025-04-19", value: 27 },
    { day: "2025-05-01", value: 64 },
    { day: "2025-05-13", value: 96 },
    { day: "2025-05-25", value: 41 },
    { day: "2025-06-06", value: 75 },
    { day: "2025-06-18", value: 30 }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>This week</CardTitle>
        <CardDescription>These are the results of this week.</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <MyResponsiveCalendar data={data} />
      </CardContent>
    </Card>
  );
};

export default MyCalendar;
