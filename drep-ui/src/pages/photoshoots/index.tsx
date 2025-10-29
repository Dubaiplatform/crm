import { ReusableSidebar } from "@/components/ReusableSideBarTemp";
import Assignments from "./assignments";
import { Index } from "./index/index";
import Uploaded from "./uploaded";
import { Navbar } from "@/components/NavbarTemp";
import { Outlet } from "react-router-dom";

const sections = [
  {
    title: "Photoshoots",
    links: [
      {
        label: "Photoshoots",
        path: "/photoshoots",
      },
    ],
  },
];

const Layout: React.FC = () => {
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

export const Photoshoots = { Layout, Index, Assignments, Uploaded };
