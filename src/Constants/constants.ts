import HomePage from "../HomePageComponents/HomePage";
import EmergencyPhoneNumber from "../EmergencyPhoneNumber";
import AdminLogin from "../AdminComponents/AdminLogin";
import AdminOfficerPage from "../AdminComponents/AdminOfficerPage";

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
    // { route: "ReportLostCard", label: "ReportLostCard", component: ReportLostCard, status: 'non' },
    { route: "AdminOfficerPage", label: "AdminOfficerPage", component: AdminOfficerPage, status: 'log' },
    { route: "EmergencyPhoneNumber", label: "EmergencyPhoneNumber", component: EmergencyPhoneNumber, status: 'non' },
];


