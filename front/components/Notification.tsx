import { MenuIcon, StarIcon } from "./icons";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Label } from "./ui/label";

export default function Notification() {
  let notifications = [
    {
      sender: "Notion",
      subject:
        "Ny Aro a modifi\u00E9 Home page - Ny Aro a modifi\u00E9 Home page 3 juil. 2024, 12:19 \u00B7T\u00E2ches ...",
      time: "13:29",
      starred: true,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro a modifi\u00E9 Formulaire d\u2019authentification - Ny Aro a modifi\u00E9 Formulaire d'auth...",
      time: "13:29",
      starred: false,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro a modifi\u00E9 Interface Tour Operateur - Ny Aro a modifi\u00E9 Interface Tour Operate...",
      time: "13:29",
      starred: false,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro a modifi\u00E9 Interface Artisant - Ny Aro a modifi\u00E9 Interface Artisant 3 juil. 2024, 1...",
      time: "13:28",
      starred: true,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro a modifi\u00E9 Interface Hotel - Ny Aro a modifi\u00E9 Interface Hotel 3 juil. 2024, 13:26 \u00B7...",
      time: "13:28",
      starred: false,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Un nouvel appareil s\u2019est connect\u00E9 \u00E0 votre compte - Examiner une connexion r\u00E9cen...",
      time: "13:21",
      starred: false,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Votre code temporaire de connexion \u00E0 Notion est nopon-nyvlo-runir-bosa - Se co...",
      time: "13:21",
      starred: false,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro vous a mentionn\u00E9(e) dans Home page - Ny Aro vous a mentionn\u00E9(e) dans Home ...",
      time: "13:19",
      starred: false,
      read: true,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro vous a mentionn\u00E9(e) dans Formulaire d\u2019authentification - Ny Aro vous a me...",
      time: "13:19",
      starred: false,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro vous a mentionn\u00E9(e) dans Interface Tour Operateur - Ny Aro vous a mentionn...",
      time: "13:19",
      starred: false,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro vous a mentionn\u00E9(e) dans Interface Artisant - Ny Aro vous a mentionn\u00E9(e) d...",
      time: "13:19",
      starred: false,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro vous a mentionn\u00E9(e) dans Interface Client - Ny Aro vous a mentionn\u00E9(e) dan...",
      time: "13:19",
      starred: false,
      read: false,
    },
    {
      sender: "Notion",
      subject:
        "Ny Aro vous a mentionn\u00E9(e) dans Interface Hotel - Ny Aro vous a mentionn\u00E9(e) dans...",
      time: "13:19",
      starred: false,
      read: false,
    },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Card className="pb-4">
        <CardTitle className="bg-primary rounded-t-md">
          <CardHeader className="flex flex-row justify-between items-center ">
            <span className="text-white">Notification</span>
            <span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 "
                  >
                    <MenuIcon className="h-4 w-4 " />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  <DropdownMenuLabel>Menu</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Label className="flex items-center gap-1 p-3">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          id="starred"
                        />
                        <span>mark as read</span>
                      </Label>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </CardHeader>
        </CardTitle>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sender
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notifications.map((email, index) => (
              <tr
                key={index}
                className={
                  email.read
                    ? "bg-gray-100 cursor-pointer hover:bg-slate-200"
                    : "" + "cursor-pointer hover:bg-slate-200"
                }
              >
                <td className="px-6 py-4 whitespace-nowrap ">
                  <input type="checkbox" className="form-checkbox" />
                </td>

                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                  {email.sender}
                </td>
                <td className="px-6 py-4  text-sm text-gray-500">
                  {email.subject}
                </td>
                <td className="px-6 py-4  text-sm text-gray-500 text-right">
                  {email.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
