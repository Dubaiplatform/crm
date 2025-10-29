import { Navbar } from "@/components/NavbarTemp";
import { ReusableSidebar } from "@/components/ReusableSideBarTemp";

import { Outlet } from "react-router-dom";

const sections = [
  {
    title: "Requests",
    links: [
      {
        label: "Extension Requests",
        path: "/listings/extension-requests",
      },
    ],
  },
];
export const ExtensionRequestsLayout = () => {
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
