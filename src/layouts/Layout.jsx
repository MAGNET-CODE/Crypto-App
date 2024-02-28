import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Crypto App</h1>
            <a href="https://github.com/MAGNET-CODE">MAGNET-CODE</a>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by MAGNET-CODE with ❤</p>
        </footer>
    </>
  )
}

export default Layout