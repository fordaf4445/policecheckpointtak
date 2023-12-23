import EmergencyPhoneNumber from "../EmergencyPhoneNumber";
import { AdminComponents , HomePageComponents , } from "../Navigation/StackNav";


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
    { route: "HomePageComponents", label: "HomePageComponents", component: HomePageComponents, status: 'non' , headerShow : false },
    // { route: "ReportLostCard", label: "ReportLostCard", component: ReportLostCard, status: 'non' },
    // { route: "AdminOfficerPage", label: "AdminOfficerPage", component: AdminOfficerPage, status: 'log' },
    { route: "EmergencyPhoneNumber", label: "EmergencyPhoneNumber", component: EmergencyPhoneNumber, status: 'non' ,headerShow : true },
    { route: "AdminComponents", label: "AdminComponents", component: AdminComponents, status: 'log' ,headerShow : false },
];


