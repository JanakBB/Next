export default async function({params}) {
    const {customer} = await params
    return(
        <>
            <h3>
                This is Signup route with customer route: <u>{customer}</u>
            </h3>
        </>
    )
}