
function WithBorder(WrapperComponent)
{
    return ()=>{
        return(
            <>
            <div style={{border:"1px solid black"}}>
            <p>Tag ma</p>
            <WrapperComponent />
            <p>Tag ma</p>
            <p>Tag ma</p>
            </div>
            </>
        );
    }
}
export default WithBorder;