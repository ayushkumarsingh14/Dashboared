'use client'

import { Bell } from "lucide-react"
import { CommandDemo } from "./Command"
import { Button } from "./ui/button"

 export default function Header(){
    return(
        <div className="grid grid-cols-2 gap-4 border-b p-4">
            <CommandDemo/>
            <div className="flex items-center justify-end">
            <Button variant="outline" size="icon">
              <Bell />
            </Button>
            </div>
        </div>
    )
 }