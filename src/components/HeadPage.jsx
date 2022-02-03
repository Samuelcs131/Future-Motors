import Head from "next/head";

const HeadPage = ({titlePage}) => {
    return ( 
        <Head>
            <title>{titlePage}</title>
            
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="description" content="future motors, eletric vehicle" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="white" />
            <link rel="shortcut icon" href="/img/logo.svg" type="image/x-icon"/>
 
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </Head>
     );
}
 
export default HeadPage;