import HomePage from "../HomePageComponents/HomePage";
import EmergencyPhoneNumber from "../EmergencyPhoneNumber";
import ReportLostCard from "../ReportLostCard";
import AdminLogin from "../AdminComponents/AdminLogin";

export const constant = {
    SPACING: 16,
    borderRadius: 10,
    titleFontSize: 24,
    textFontSize: 16,
    subTextFontSize: 14,
}

export const IconSize = {
    size: 16,
}

export const ScreenArray = [
    { route: "HomePage", label: "HomePage", component: HomePage, status: 'non' },
    // { route: "EmergencyPhoneNumber", label: "EmergencyPhoneNumber", component: EmergencyPhoneNumber, status: 'non' },
    // { route: "ReportLostCard", label: "ReportLostCard", component: ReportLostCard, status: 'non' },
    { route: "AdminLogin", label: "AdminLogin", component: AdminLogin, status: 'log' },
];

export const drawerMenu = [
    { route: "logOunt", title: 'logOunt', },
];


