import Navbar from "./components/navebar";
import Sidebar from "./components/sidebar";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            
            <Navbar />

            <div className="flex flex-1 min-h-0">
                
                <Sidebar />

                <main className="flex-1 min-w-0 overflow-auto">
                    {children}
                </main>

            </div>
        </div>
    );
}