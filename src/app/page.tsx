import { Button } from "@/components/ui/button";
import "./globals.css"; 
import General from "@/components/Cards/General";
import { Card } from "@/components/ui/card";
import MyCalendar from "@/components/MyCalendar";


export default function Home() {
  console.log(Button)
  return (
    <div className="grid gap-[32px]" >
      <div className="grid gap-[32px]">
        <General/>
        
      </div>
      <div className="grid grid-cols-2 gap-[32px]">
        <MyCalendar/>
        <Card className="h-[300px]"/>
      </div>
    </div>
  );
}
