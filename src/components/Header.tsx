"use client";

import { Bell } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [notifications, setNotifications] = useState([
    {
      text: "This is notification",
      date: "21-03-25",
      read: true,
    },
    {
      text: "This is another notification",
      date: "23-03-25",
      read: false,
    },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div>
              <Bell />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.length > 0 ? (
              notifications.map((notif, index) => (
                <DropdownMenuItem
                  key={index}
                  className="p-1 cursor-pointer bg-neutral-50 transition items-start gap-2 flex "
                >
                  <div
                    className={`h-3 w-3 rounded-full my-1 ${
                      !notif.read ? "bg-green-500" : "bg-neutral-200"
                    }`}
                  ></div>
                  <div>
                    <p>{notif.text}</p>
                    <p>{notif.date}</p>
                  </div>
                </DropdownMenuItem>
              ))
            ) : (
              <DropdownMenuItem>No new notifications</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
