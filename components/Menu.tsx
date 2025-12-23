import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BadgeCheck, ExternalLink, Github } from "lucide-react";

type MenuProps = {
  exam1Url: string;
  git1Url: string;
};

export default function Menu({ exam1Url, git1Url }: MenuProps) {
  return (
    <div className="w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BadgeCheck className="h-5 w-5 text-primary" />
          <span>Final Exam</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {/* INTERNAL PAGE LINKS */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="#about"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  About
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="#services"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  Services
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="#gallery"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  Gallery
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="#reviews"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  Reviews
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="#contact"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  Book
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* REQUIRED LINKS FOR GRADING (NEW TAB) */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href={exam1Url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  <ExternalLink className="h-4 w-4" />
                  Exam 1
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href={git1Url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  <Github className="h-4 w-4" />
                  Git 1
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
