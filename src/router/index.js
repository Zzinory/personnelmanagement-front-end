import Vue from "vue";
import VueRouter from "vue-router";

import test from "../components/test";
import HelloWorld from "../components/HelloWorld";
import login from "../components/login";
import home from "../components/home";
import adminPersonnel from "../components/admin/adminPersonnel";
import adminAttendance from "../components/admin/adminAttendance";
import adminAnnouncement from "../components/admin/adminAnnouncement";
import adminAuthority from "../components/admin/adminAuthority";
import adminFile from "../components/admin/adminFile";
import adminPlan from "../components/admin/adminPlan";
import adminLeave from "../components/admin/adminLeave";
import staffCenter from "../components/staff/staffCenter";
import staffAnnouncement from "../components/staff/staffAnnouncement";
import staffAttendance from "../components/staff/staffAttendance";
import staffFile from "../components/staff/staffFile";
import staffLeave from "../components/staff/staffLeave";
import staffPlan from "../components/staff/staffPlan";
import managerAnnouncementPlan from "../components/manager/managerAnnouncementPlan";
import managerAttendanceExamine from "../components/manager/managerAttendanceExamine";
import managerFile from "../components/manager/managerFile";
import managerLeaveExamine from "../components/manager/managerLeaveExamine";
import managerPlanPlan from "../components/manager/managerPlanPlan";
import home2 from "../components/home2";
import home1 from "../components/home1";
import home3 from "../components/home3";


Vue.use(VueRouter)

const routes=[
  {path: "/test",name:"test",component:test},
  {path: "/HelloWorld",name:"HelloWorld",component:HelloWorld},
  {path: "/login",name:"login",component:login},
  {path: "/home",name:"home",component:home,
    children:[
      {path:"adminPersonnel",name:"adminPersonnel",component:adminPersonnel},
      {path: "adminAttendance",name: "adminAttendance",component: adminAttendance},
      {path: "adminAnnouncement",name: "adminAnnouncement",component: adminAnnouncement},
      {path: "adminAuthority",name: "adminAuthority",component: adminAuthority},
      {path: "adminFile",name: "adminFile",component: adminFile},
      {path: "adminPlan",name: "adminPlan",component: adminPlan},
      {path: "adminLeave",name: "adminLeave",component: adminLeave},
      {path: "staffCenter",name: "staffCenter",component: staffCenter},

      {path: "staffAnnouncement",name: "staffAnnouncement",component: staffAnnouncement},
      {path: "staffAttendance",name: "staffAttendance",component: staffAttendance},
      {path: "staffFile",name: "staffFile",component: staffFile},
      {path: "staffLeave",name: "staffLeave",component: staffLeave},
      {path: "staffPlan",name: "staffPlan",component: staffPlan},
      {path: "managerAnnouncementPlan",name: "managerAnnouncementPlan",component: managerAnnouncementPlan},
      {path: "managerAttendanceExamine",name: "managerAttendanceExamine",component: managerAttendanceExamine},
      {path: "managerFile",name: "managerFile",component: managerFile},
      {path: "managerLeaveExamine",name: "managerLeaveExamine",component: managerLeaveExamine},
      {path: "managerPlanPlan",name: "managerPlanPlan",component: managerPlanPlan},

    ],},
  {path: "/home1",name:"home1",component:home1,
    children:[
      {path:"adminPersonnel",name:"adminPersonnel",component:adminPersonnel},
      {path: "adminAttendance",name: "adminAttendance",component: adminAttendance},
      {path: "adminAnnouncement",name: "adminAnnouncement",component: adminAnnouncement},
      {path: "adminAuthority",name: "adminAuthority",component: adminAuthority},
      {path: "adminFile",name: "adminFile",component: adminFile},
      {path: "adminPlan",name: "adminPlan",component: adminPlan},
      {path: "adminLeave",name: "adminLeave",component: adminLeave},

    ],},
  {path: "/home2",name:"home2",component:home2,
    children:[
      {path: "staffCenter",name: "staffCenter",component: staffCenter},
      {path: "staffAnnouncement",name: "staffAnnouncement",component: staffAnnouncement},
      {path: "staffAttendance",name: "staffAttendance",component: staffAttendance},
      {path: "staffFile",name: "staffFile",component: staffFile},
      {path: "staffLeave",name: "staffLeave",component: staffLeave},
      {path: "staffPlan",name: "staffPlan",component: staffPlan},
    ],},
  {path: "/home3",name:"home3",component:home3,
    children:[
      {path: "managerAnnouncementPlan",name: "managerAnnouncementPlan",component: managerAnnouncementPlan},
      {path: "managerAttendanceExamine",name: "managerAttendanceExamine",component: managerAttendanceExamine},
      {path: "managerFile",name: "managerFile",component: managerFile},
      {path: "managerLeaveExamine",name: "managerLeaveExamine",component: managerLeaveExamine},
      {path: "managerPlanPlan",name: "managerPlanPlan",component: managerPlanPlan},

    ],}
    // {path:"/login",name:"login",component:login},
    // {path:"/performance",name:"performance",component:performance},
    // {path:"/home",name:"home",component:home,
    //     children:[
    //         {path:"performance",component:performance},
    //         {path:"test02",component:test02},
    //     ]},
]

const router=new VueRouter({
    mode:"history",
    routes
})
export  default router
