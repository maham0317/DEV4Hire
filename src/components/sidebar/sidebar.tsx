import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const Menus: MenuModel[] = [
    {
      title: "Dashboard",
      src: "gauge",
      isOpen: false,
      route: "/dashboard",
    },
    {
      title: "Settings",
      src: "gear",
      subMenus: [
        {
          title: "Industry Types",
          src: "industry",
          route: "/industry-type-list",
        },
        {
          title: "Education Types",
          src: "user-graduate",
          route: "/education",
        },
        {
          title: "Work Roles",
          src: "briefcase",
          route: "/WorkRoleList",
        },
        {
          title: "Languages",
          src: "fa fa-language",
          route: "/LanguageList",
        },
        {
          title: "Skill",
          src: "fa-solid fa-building-columns",
          route: "/SkillList",
        },
        {
          title: "Proficiency",
          src: "fa fa-joomla",
          route: "/ProficiencyList",
        },
        {
          title: "Country",
          src: "fa fa-flag",
          route: "/CountryList",
        },
        {
          title: "City",
          src: "fa-solid fa-city",
          route: "/CityList",
        },
      ],
    },
    {
      title: "Overview",
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
      title: "Project management",
      src: "",
      subMenus: [
        {
          title: "Kunder",
          src: "",
          route: "",
        },
        {
          title: "Produkter",
          src: "",
          route: "",
        },
        {
          title: "Ansatt",
          src: "",
          route: "",
        },
        {
          title: "Kjoretoy",
          src: "",
          route: "",
        },
      ],
    },
    {
      title: "Rapportering",
      src: "",
      subMenus: [
        {
          title: "Kunder",
          src: "",
          route: "",
        },
        {
          title: "Produkter",
          src: "",
          route: "",
        },
        {
          title: "Ansatt",
          src: "",
          route: "",
        },
        {
          title: "Kjoretoy",
          src: "",
          route: "",
        },
      ],
    },
    {
      title: "Logg ut",
      src: "",
      subMenus: [
        {
          title: "Kunder",
          src: "",
          route: "",
        },
        {
          title: "Produkter",
          src: "",
          route: "",
        },
        {
          title: "Ansatt",
          src: "",
          route: "",
        },
        {
          title: "Kjoretoy",
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
                    {Menu.title}
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
                            {subMenuItem.title}
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
