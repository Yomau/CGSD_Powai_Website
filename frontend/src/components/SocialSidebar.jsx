import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const items = [
  { Icon: Facebook, href: "#", color: "#1877F2" },
  { Icon: Instagram, href: "#", color: "#E1306C" },
  { Icon: Twitter, href: "#", color: "#1DA1F2" },
  { Icon: Youtube, href: "#", color: "#FF0000" },
];

export default function SocialSidebar() {
  return (
    <div className="hidden md:flex fixed left-3 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
      {items.map(({ Icon, href, color }, i) => (
        <a
          key={i}
          href={href}
          className="h-9 w-9 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition"
          style={{ color }}
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
