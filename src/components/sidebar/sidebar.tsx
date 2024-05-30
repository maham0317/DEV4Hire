import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MenuModel {
  title: string;
  src: string;
  route?: string;
  gap?: string | null;
  isOpen?: boolean | null;
  subMenus?: MenuModel[] | null;
}
interface SidebarProps {
  open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const Menus: MenuModel[] = [
    {
      title: "Sidebar.Menu.Dashboard",
      src: "gauge",
      isOpen: false,
      route: "/",
    },
    {
      title: "Sidebar.Menu.Settings",
      src: "gear",
      subMenus: [
        {
          title: "Sidebar.SubMenu.Settings.IndustryTypes",
          src: "industry",
          route: "/industry-type-listing",
        },
        {
          title: "Sidebar.SubMenu.Settings.EducationTypes",
          src: "user-graduate",
          route: "/education",
        },
        {
          title: "Sidebar.SubMenu.Settings.WorkRoles",
          src: "briefcase",
          route: "/WorkRoleList",
        },
        {
          title: "Sidebar.SubMenu.Settings.Languages",
          src: "fa fa-language",
          route: "/LanguageList",
        },
        {
          title: "Sidebar.SubMenu.Settings.Skill",
          src: "fa-solid fa-building-columns",
          route: "/SkillList",
        },
        {
          title: "Sidebar.SubMenu.Settings.Proficiency",
          src: "fa fa-joomla",
          route: "/ProficiencyList",
        },
        {
          title: "Sidebar.SubMenu.Settings.Country",
          src: "fa fa-flag",
          route: "/CountryList",
        },
        {
          title: "Sidebar.SubMenu.Settings.City",
          src: "fa-solid fa-city",
          route: "/CityList",
        },
      ],
    },
    {
      title: "Sidebar.Menu.Overview",
      src: "",
      route: "",
      subMenus: [
        {
          title: "Customers",
          src: "",
          route: "",
        },
        {
          title: "Products",
          src: "",
          route: "",
        },
        {
          title: "Employee",
          src: "",
          route: "",
        },
        {
          title: "Vehicle",
          src: "",
          route: "",
        },
      ],
    },
    {
      title: "Sidebar.Menu.ProjectManagement",
      src: "",
      subMenus: [
        {
          title: "Customers",
          src: "",
          route: "",
        },
        {
          title: "Product",
          src: "",
          route: "",
        },
        {
          title: "Employee",
          src: "",
          route: "",
        },
        {
          title: "Vehicle",
          src: "",
          route: "",
        },
      ],
    },
    {
      title: "Sidebar.Menu.Reporting",
      src: "",
      subMenus: [
        {
          title: "Customer",
          src: "",
          route: "",
        },
        {
          title: "Product",
          src: "",
          route: "",
        },
        {
          title: "Employee",
          src: "",
          route: "",
        },
        {
          title: "Vehicle",
          src: "",
          route: "",
        },
      ],
    },
    {
      title: "Sidebar.Menu.Logout",
      src: "",
      subMenus: [
        {
          title: "Customer",
          src: "",
          route: "",
        },
        {
          title: "Product",
          src: "",
          route: "",
        },
        {
          title: "Employee",
          src: "",
          route: "",
        },
        {
          title: "Vehicle",
          src: "",
          route: "",
        },
      ],
    },
  ];
  const [Menu, SetMenu] = useState(Menus);
  const setSubMenuOpen = (index: number) => {
    SetMenu((prevMenus) =>
      prevMenus.map((menu, i) => {
        if (i === index) {
          return { ...menu, isOpen: !menu.isOpen };
        }
        return menu;
      })
    );
  };

  const handleNavigation = (route?: string) => {
    if (!route) return;
    navigate(route);
  };

  return (
    <>
      <div className="flex bg-blue-950">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple fixed bg-blue-950 h-screen p-3 pt-8 relative duration-300`}
        >
          {/* <img
            src="assets/icons/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          /> */}
          <div className="flex gap-x-4 items-center pt-9">
            <h1
              className={`text-white text-xl font-montserrat font-semibold origin-left text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Developerforhire
            </h1>
          </div>
          <ul className="pt-6">
            {Menu.map((Menu, index) => (
              <Fragment key={index}>
                <li
                  className={`mt-0 font-semibold font-montserrat border-b text-white text-base border-gray-500 hover:bg-gray-500 flex p-3 cursor-pointer text-base	 items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : ""} ${
                    index === 0 && "bg-light-white"
                  } `}
                  onClick={() => {
                    setSubMenuOpen(index);
                    handleNavigation(Menu.route);
                  }}
                >
                  {/* <img src={`assets/icons/${Menu.src}.svg`} /> */}
                  <i className={`fa-solid fa-${Menu.src}`}></i>
                  <span
                    className={`${
                      !open && "hidden"
                    } flex w-full font-semibold font-montserrat justify-between origin-left duration-200`}
                  >
                    {t(Menu.title)}
                    {/* {t("Sidebar.Menus")} */}
                    {Menu.subMenus && (
                      <img
                        src={`assets/icons/left-arrow.svg`}
                        className={`${Menu.isOpen && "-rotate-90"}`}
                      />
                    )}
                  </span>
                </li>
                {Menu.subMenus && Menu.isOpen && open && (
                  <ul>
                    {Menu.subMenus.map((subMenuItem, idx) => (
                      <li
                        key={idx}
                        className="mt-0 font-semibold border-b text-white text-base border-gray-500 hover:bg-gray-500 flex py-3 pr-10 pl-10 cursor-pointer text-base	 items-center gap-x-4"
                        onClick={() => handleNavigation(subMenuItem.route)}
                      >
                        <div className="flex justify-start text-white cursor-pointer text-base items-center gap-x-4 false ">
                          {/* <img src={`assets/icons/${subMenuItem.src}.svg`} /> */}
                          <i className={`fa-solid fa-${subMenuItem.src}`}></i>
                          <span className="font-montserrat">
                            {t(subMenuItem.title)}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
        {/* <div className="h-screen flex-1 p-7">
          <h1 className="text-2xl font-semibold ">Home Page</h1>
        </div> */}
      </div>
    </>
  );
};
export default Sidebar;
