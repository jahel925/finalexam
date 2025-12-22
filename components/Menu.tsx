import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ExternalLink, Github, Home } from "lucide-react";

type MenuProps = {
  exam1Url: string;
  git1Url: string;
};

export default function Menu({ exam1Url, git1Url }: MenuProps) {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Home className="h-5 w-5" />
          Final Exam
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <a
                href={exam1Url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Exam 1
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a
                href={git1Url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                Git 1
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
