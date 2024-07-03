"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CheckType } from "./CheckType";

export default function AddChat() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Bob Johnson",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Sarah Lee",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Tom Wilson",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 6,
      name: "Emily Davis",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 7,
      name: "Michael Brown",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 8,
      name: "Jessica Thompson",
      avatar: "/placeholder-user.jpg",
    },
  ]);
  const [selectedContact, setSelectedContact] = useState({
    id: null,
    name: "",
    avatar: "",
  });
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);
  const handleAddToChat = (contact) => {
    setSelectedContact(contact);
  };
  return (
    <div className="flex flex-col h-full ">
      <div className="bg-background p-4 border-b">
        <Input
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <div className="my-5">
          <CheckType />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto ">
        <div className="flex flex-col gap-4 p-4" style={{ height: "300px " }}>
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center   bg-muted rounded-lg p-4 hover:bg-muted/50"
              style={{ height: "70px " }}
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>
                    {contact.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{contact.name}</div>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => handleAddToChat(contact)}
              >
                Add to Chat
              </Button>
            </div>
          ))}
        </div>
      </div>
      {selectedContact && (
        <div className="bg-background p-4 border-t">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>
                {selectedContact.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{selectedContact.name}</div>
              <div className="text-muted-foreground text-sm">
                Now chatting with you
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
