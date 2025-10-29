import { Navbar } from "@/components/NavbarTemp";
import { ReusableSidebar } from "@/components/ReusableSideBarTemp";

import { Outlet } from "react-router-dom";

const sections = [
  {
    title: "Leads",
    links: [
      {
        label: "Pending Approval",
        path: "/leads/pending-approval",
      },
    ],
  },
  {
    title: "Requests",
    links: [
      {
        label: "Extension Requests",
        path: "/leads/extension-requests",
      },
    ],
  },
];

export const LeadsLayout = () => {
  return (
    <div>
      <ReusableSidebar sections={sections} />
      <div className="ml-64 px-8 py-4">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
