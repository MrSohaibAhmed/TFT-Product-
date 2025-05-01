
import { uniqueId } from "lodash";

interface MenuitemsType {
    [x: string]: any;
    id?: string;
    navlabel?: boolean;
    subheader?: string;
    title?: string;
    icon?: any;
    href?: string;
    children?: MenuitemsType[];
    bgcolor?: any;
    chip?: string;
    chipColor?: string;
    variant?: string;
    external?: boolean;
}

const Menuitems: MenuitemsType[] = [
    {
        id: uniqueId(),
        title: "Dashboard",
        icon: "widget-4-outline",
        bgcolor:'#0d113b',
        href: "/",
    },
    {
        id: uniqueId(),
        title: "View Courses",
        icon: "book-outline",
        href: "/view-courses",
    },
    {
        id: uniqueId(),
        title: "Assignments",
        icon: "folder-outline",
        href: "/assignments",
    },
    {
        id: uniqueId(),
        title: "Codespace",
        icon: "code-outline",
        href: "/codespace",
    },
    {
        id: uniqueId(),
        title: "Profile Settings",
        icon: "settings-outline",
        href: "/profile-settings",
    },
];

export default Menuitems;


