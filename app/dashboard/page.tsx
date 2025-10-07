import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Header } from "@/components/header";
import { NavigationCard } from "@/components/navigation-card";
import { SignOutButton } from "@/components/sign-out-button";
import { GiNotebook, GiWeightLiftingUp } from "react-icons/gi";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-[#1B1F2B] flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-semibold mb-8 text-white">
          Welcome back, {session.user.name}!
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <NavigationCard
            title="Planning"
            href="/dashboard/planning"
            icon={<GiNotebook />}
          />
          <NavigationCard
            title="Training"
            href="/dashboard/training"
            icon={<GiWeightLiftingUp />}
          />
        </div>
      </main>

      <footer className="p-4 border-t border-[#242938]">
        <SignOutButton />
      </footer>
    </div>
  );
}