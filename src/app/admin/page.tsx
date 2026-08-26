import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Portal",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminPage() {
  redirect("/admin/index.html");
}
