

import React from "react";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import {
    Sidebar as MUI_Sidebar,
    Menu,
    MenuItem,
    Submenu,
} from "react-mui-sidebar";

import Menuitems from "./MenuItems";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Upgrade } from "./Updrade";
import theme from "@/utils/theme";
import Profile from "../header/Profile";

const renderMenuItems = (items: any[], pathDirect: string) => {
    const primary = theme.palette.primary.light;

    return items.map((item) => {
        if (item.subheader) {
            return (
                <Box sx={{ margin: "0 -24px" }} key={item.subheader}>
                    <Menu subHeading={item.subheader} key={item.subheader}>
                        <></>
                    </Menu>
                </Box>
            );
        }

        if (item.children) {
            return (
                <Submenu
                    key={item.id}
                    title={item.title}
                    icon={
                        <Box
                            sx={{
                                backgroundColor: "#6c63ff",
                                padding: "6px",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",


                                color: "white",
                            }}
                        >
                            {item.icon ? (
                                <Icon icon={"solar:" + item.icon} width="24" height="24" />
                            ) : (
                                <Icon icon="mdi:circle" width="6" height="6" />
                            )}
                        </Box>
                    }
                >
                    {renderMenuItems(item.children, pathDirect)}
                </Submenu>
            );
        }

        return (
            <MenuItem
                key={item.id}
                isSelected={pathDirect === item?.href}
                icon={
                    <Box
                        sx={{
                            overflowY: "hidden",
                            backgroundColor: "#6c63ff",
                            padding: "6px",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            color: "white",
                        }}
                    >
                        {item.icon ? (
                            <Icon icon={"solar:" + item.icon} width="24" height="24" />
                        ) : (
                            <Icon icon="mdi:circle" width="6" height="6" />
                        )}
                    </Box>
                }
                component={Link}
                link={item.href && item.href !== "" ? item.href : undefined}
                target={item.href && item.href.startsWith("https") ? "_blank" : "_self"}
                badge={item.chip ? true : false}
                badgeContent={item.chip || ""}
                badgeColor="secondary"
                badgeTextColor="#fff"
                disabled={item.disabled}
            >
                {item.title}
            </MenuItem>
        );
    });
};

const SidebarItems = () => {
    const pathname = usePathname();
    const pathDirect = pathname;

    return (
        <Box
            sx={{
                bgcolor: "#0d113b",
                px: "20px",
                overflowY: "hidden",
                height: "89vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ flex: "1 1 auto", overflowY: "hidden", mt: "2rem" }}>
                <MUI_Sidebar
                    width={"100%"}
                    showProfile={false}
                    themeColor={"#6c63ff"}
                    themeSecondaryColor={"#6c63ff"}
                    textColor="white"
                >
                    {renderMenuItems(Menuitems, pathDirect)}
                </MUI_Sidebar>

                <Upgrade />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",

                    overflowY: "hidden"
                }}
            >
                <Profile />
                <span
                    style={{
                        marginLeft: "10px",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "white",
                    }}
                >
                    Student
                </span>
            </Box>
        </Box>
    );
};

export default SidebarItems;


