import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/db/connection";
import User from "@/models/User";

export const isAuthenticatedUser = async () => {
  await dbConnect();
  
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    throw new Error("You need to login to access this resource");
  }
  
  const user = await User.findOne({ email: session.user.email });

  if (!user) {
    throw new Error("User not found. Please login again.");
  }
  
  return user;
};

export const authorizeRoles = (user, ...roles) => {
  if (!roles.includes(user.role)) {
    throw new Error("Not allowed");
  }
};
