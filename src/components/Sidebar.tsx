"use client";

import { 
  Command, CommandEmpty, CommandGroup, 
  CommandInput, CommandItem, CommandList, CommandSeparator 
} from "./ui/command";
import UserItem from "./UserItem";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <UserItem />  {/* No need for extra div */}

      <div className="grow">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div className="text-center text-gray-500 mt-4"> {/* Style for better UI */}
        Notification
      </div>
      
    </div>
  );
}
