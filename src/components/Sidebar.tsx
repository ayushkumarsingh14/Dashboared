"use client";

import { Inbox, UserRound, CreditCard, Bell, Settings, Lock, FileText } from "lucide-react";
import { 
  Command, CommandEmpty, CommandGroup, 
  CommandInput, CommandItem, CommandList, CommandSeparator 
} from "./ui/command";
import UserItem from "./UserItem";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        { link: "/", text: "Profile", icon: <UserRound /> },
        { link: "/", text: "Inbox", icon: <Inbox /> },
        { link: "/", text: "Billing", icon: <CreditCard /> },
        { link: "/", text: "Notifications", icon: <Bell /> }
      ]
    },
    {
      group: "Settings",
      items: [
        { link: "/", text: "General Settings", icon: <Settings /> },
        { link: "/", text: "Privacy", icon: <Lock /> },
        { link: "/", text: "Logs", icon: <FileText /> }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <UserItem />

      <div className="grow">
        <Command style={{overflow:'visible'}}>
          <CommandList style={{overflow:'visible'}}>
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionsKey) => (
                  <CommandItem key={optionsKey} className="flex gap-2">
                    <span className="mr-2">{option.icon}</span>
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
            <CommandSeparator />
          </CommandList>
        </Command>
      </div>

      <div className="text-center text-gray-500 mt-4">Notification</div>
    </div>
  );
}
