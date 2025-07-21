"use client";

import {ArrowRightStartOnRectangleIcon} from "@heroicons/react/16/solid";
import {DropdownItem, DropdownLabel} from "@/components/common/dropdown";
import React from "react";
import {signOut} from "next-auth/react";

export default function SignOutButton() {
  return (
    <DropdownItem onClick={() => signOut({callbackUrl: '/'})}>
      <ArrowRightStartOnRectangleIcon />
      <DropdownLabel>Sign out</DropdownLabel>
    </DropdownItem>
  );
}