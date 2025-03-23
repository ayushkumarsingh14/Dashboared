import { Button } from "@/components/ui/button";
import "./globals.css";
import General from "@/components/Cards/General";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MyCalendar from "@/components/MyCalendar";
import { DataTableDemo } from "@/components/Cards/DataTableDemo";

export default function Home() {
  console.log(Button);
  return (
    <div className="grid gap-[32px]">
      {/* General Component */}
      <General />

      {/* MyCalendar and Card Section */}
      <div className="grid grid-cols-2 gap-[32px] overflow-hidden">
        <MyCalendar />
        <Card className="p-[32px] overflow-y-scroll">
          <CardHeader>
            <CardTitle>User</CardTitle>
            <CardDescription>These are the Users.</CardDescription>
          </CardHeader>
          <DataTableDemo />
        </Card>
      </div>
    </div>
  );
}
