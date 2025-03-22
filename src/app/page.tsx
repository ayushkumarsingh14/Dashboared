import { Button } from "@/components/ui/button";
import "./globals.css"; 
import General from "@/components/Cards/General";


export default function Home() {
  console.log(Button)
  return (
    <main >
      <div className="grid grid-cols-2">
        <General/>
      </div>
    </main>
  );
}
