import Footer from "@components/shared/footer";
import Navbar from "@components/shared/navbar";
import Loader from "@components/ui/loader";

export default function Layout({ children }) {
    return (
        <div >
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>

    );
}