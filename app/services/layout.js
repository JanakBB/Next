export default async function ServicesLayout({children}){
    return(
        <main>
            <header style={{background: "yellow", margin: "5px"}}>Services Layout Header</header>
            {children}
            <footer style={{background: "yellow", margin: "5px"}}>Services Layout Header</footer>
        </main>
    )
}