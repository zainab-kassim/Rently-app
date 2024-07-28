import Footer from "@/components/shared/Footer";
import Navbar from "@components/shared/navbar";

export default function Layout({ children }) {
    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>

    );
}