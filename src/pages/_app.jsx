import '../../public/styles/css/globalStyle.css' 
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'


function MyApp({ Component, pageProps }) {
    return (
      <DataProvider> 
        <Layout>
          <Component {...pageProps} />
        </Layout> 
      </DataProvider>
    )
  }
 
  
  export default MyApp