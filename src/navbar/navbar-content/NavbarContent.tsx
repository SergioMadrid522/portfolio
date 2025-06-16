import type { NavbarContentProps } from "./types.ts";

function NavbarContent({menu}: NavbarContentProps) {

    return(
        <div className="content">
            <ul>
                {menu.map((item, index) => (
                    <li key={index}><a href="">{item}</a></li>
                ))}
            </ul>
        </div>
    );
}
export default NavbarContent;