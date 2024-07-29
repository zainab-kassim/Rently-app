import Footer from "@components/shared/footer";
import Navbar from "@components/shared/navbar";

export default function Layout({ children }) {
    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <main>{children}</main>
            
        </div>

    );
}