import { ReusableSidebar } from "@/components/ReusableSideBarTemp";
import { Index } from "./index/index";
import { Outlet } from "react-router-dom";
import { Create } from "./create";
import { Edit } from "./edit";
import { Navbar } from "@/components/NavbarTemp";

const sections = [
  {
    title: "Campaigns",
    links: [
      {
        label: "Campaigns",
        path: "/campaigns",
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

export const Campaigns = {
  Layout,
  Index,
  Create,
  Edit,
};
