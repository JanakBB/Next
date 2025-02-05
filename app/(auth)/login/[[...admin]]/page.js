export default async function ({params}) {
    const {admin} = await params
    return(
        <>
            <h4>
                This is login route and also admin page:<b>{admin}</b>
            </h4>
        </>
    )
}