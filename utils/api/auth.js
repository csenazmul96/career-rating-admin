"use server";

import {fetchRequest} from "@/utils/fetchRequest";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function logout() {
  const session = await getServerSession(authOptions);

  await fetchRequest(`/lms-registration-membership/api/v1/private/user/logout?refresh_token=${session.refresh_token}`, {
    method: 'POST'
  });
}

export async function validateToken() {
  const req = await fetchRequest(`/user`);

  if(req.status !== 200){
    throw new Error('Invalid token');
  } else {
    return true
  }
}