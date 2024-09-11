"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { error } from "console";
import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import { logout } from "../lib/actions";
import { ActionResult } from "@/types";

const initialState: ActionResult = {
  error: "",
};

export default function FormLogout() {
  const [state, formAction] = useFormState(logout, initialState);

  return (
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <form action={formAction}>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </button>
          </form>
        </TooltipTrigger>
        <TooltipContent side="right">Logout</TooltipContent>
      </Tooltip>
    </nav>
  );
}
