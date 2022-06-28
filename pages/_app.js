import Layout from "./components/Layout";
// import "../styles/global.css"

export default function KiaApp({Component, pageProps}){
    return(
        <Layout>
        <Component {...pageProps}/>      
        </Layout>
    )

}