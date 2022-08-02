import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <NavBar />
  <Component {...pageProps} />
  <style jsx global>{`
        a{
          color:black;
        }
        `}</style>
        <footer>@2022_</footer>
  </>
  )
}

export default MyApp
