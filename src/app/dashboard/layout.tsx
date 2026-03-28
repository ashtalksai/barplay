import { requireAuth } from "@/lib/session";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAuth();

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 lg:ml-[240px]">{children}</main>
    </div>
  );
}
