export default function ApplicationLayout ({children}) {
    return(
        <>
            <header style={{backgroundColor: "red"}}>This is Application Header</header>
            {children}
            <footer style={{backgroundColor: "red"}}>This is Application Footer</footer>

        </>
    )
}