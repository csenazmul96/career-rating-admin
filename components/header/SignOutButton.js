"use client";

import {LogOut} from "lucide-react";
import {DropdownItem, DropdownLabel} from "@/components/common/dropdown";
import React from "react";
import {signOut} from "next-auth/react";

export default function SignOutButton() {
  return (
    <DropdownItem onClick={() => signOut({callbackUrl: '/'})}>
        <LogOut size={14} />
      <DropdownLabel>Sign out</DropdownLabel>
    </DropdownItem>
  );
}