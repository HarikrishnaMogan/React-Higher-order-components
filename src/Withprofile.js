
function Withprofile(Wrapper)
{
    return(props)=>{
        return (
            <>
            <Wrapper {...props} name={"Hari"}/>
            </>
        );
    }
}
export default Withprofile;
//if we use wrapper component then props will not be available for app component
//so we have spread props in wrapper component then only it will be available to app component
//one advantage is that we can change props of App component using this wrapper component like you did above changing name to hari