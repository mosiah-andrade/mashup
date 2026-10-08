import Navbar from "./components/navebar";
import Sidebar from "./components/sidebar";
import MobileNav from "./components/MobileNav";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] min-h-0">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main className="min-w-0 flex-1 overflow-auto pb-14 lg:pb-0">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
