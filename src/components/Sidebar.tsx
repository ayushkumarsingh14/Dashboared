"use client";

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
        { link: "/", text: "Profile" },
        { link: "/", text: "Inbox" },
        { link: "/", text: "Billing" },
        { link: "/", text: "Notifications" }
      ]
    },
    {
      group: "Settings",
      items: [
        { link: "/", text: "General Settings" },
        { link: "/", text: "Privacy" },
        { link: "/", text: "Logs" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <UserItem />

      <div className="grow">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionsKey) => (
                  <CommandItem key={optionsKey}>{option.text}</CommandItem>
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
