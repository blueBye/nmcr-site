import "../css/tailwind.css";

import Footer from "../components/footer";
import Head from "next/head";
import Navbar from "../components/navbar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <title>میدان سایبری نقش مجاز</title>
                <meta
                    name="description"
                    content="میدان سایبری نقش مجاز، قدم بعدی برای آموزشی سایبری"
                />
                <link rel="icon" href="/img/logo.svg" />
            </Head>

            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;
