import Categories from "../pages/admin/Categories";
import Episodes from "../pages/admin/Episodes";
import Movies from "../pages/admin/Movies";
import Dashboard from "../pages/admin/Dashboard";
import Tables from "../pages/admin/Tables";
import Icons from "../pages/admin/Icons";
import Userpages from "../pages/admin/Userpages";
import { Component } from "react";
const AdminRoutes = [
    {
        path: "/",
        Component: Dashboard
    },
    {
        path: "/categories",
        Component: Categories
    },
    {
        path: "/episodes",
        Component: Episodes
    },
    {
        path: "/movies",
        Component: Movies
    },
    {
        path: "/tables",
        Component: Tables
    },
    {
        path: "/icons",
        Component: Icons
    },
    {
        path: "/userpages",
        Component: Userpages
    }
];

export default AdminRoutes;