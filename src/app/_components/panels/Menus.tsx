import Navigation from "../layouts/Navigation";

const Menus = () => {
    return(
        <>
            <div className="menu--primary">
                <Navigation menuId={"main-navigation"} fullNav={true}></Navigation>
            </div>

            <div className="menu--secondary">
                <Navigation menuId={"secondary-menu"} fullNav={true}></Navigation>
            </div>
        </>
    )
}

export default Menus;