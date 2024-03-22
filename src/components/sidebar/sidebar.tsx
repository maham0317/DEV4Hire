import { useState } from "react";
interface MenuModel {
  title: string;
  src: string;
  gap?: string | null;
  isOpen?: boolean | null;
  subMenus?: MenuModel[] | null;
}
const Sidebar = () => {
  const Menus: MenuModel[] = [
    { title: "Dashboard", src: "dashboard", isOpen: false },
    {
      title: "Innstillinger",
      src: "setting",
      subMenus: [
        {
          title: "Kunder",
          src: "setting",
        },
        {
          title: "Produkter",
          src: "setting",
        },
        {
          title: "Ansatt",
          src: "setting",
        },
        {
          title: "Kjoretoy",
          src: "setting",
        },
      ],
    },
    {
      title: "Oversikt",
      src: "setting",
      subMenus: [
        {
          title: "Kunder",
          src: "setting",
        },
        {
          title: "Produkter",
          src: "setting",
        },
        {
          title: "Ansatt",
          src: "setting",
        },
        {
          title: "Kjoretoy",
          src: "setting",
        },
      ],
    },
    {
      title: "Projekstrying ",
      src: "arrow",
      subMenus: [
        {
          title: "Kunder",
          src: "setting",
        },
        {
          title: "Produkter",
          src: "setting",
        },
        {
          title: "Ansatt",
          src: "setting",
        },
        {
          title: "Kjoretoy",
          src: "setting",
        },
      ],
    },
    {
      title: "Rapportering",
      src: "arrow",
      subMenus: [
        {
          title: "Kunder",
          src: "setting",
        },
        {
          title: "Produkter",
          src: "setting",
        },
        {
          title: "Ansatt",
          src: "setting",
        },
        {
          title: "Kjoretoy",
          src: "setting",
        },
      ],
    },
    {
      title: "Logg ut",
      src: "arrow",
      subMenus: [
        {
          title: "Kunder",
          src: "setting",
        },
        {
          title: "Produkter",
          src: "setting",
        },
        {
          title: "Ansatt",
          src: "setting",
        },
        {
          title: "Kjoretoy",
          src: "setting",
        },
      ],
    },
  ];
  const [Menu, SetMenu] = useState(Menus);
  const [open, setOpen] = useState(true);
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

  return (
    <>
      <div className="flex bg-blue-950">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple fixed bg-blue-950 h-screen p-3 pt-8 relative duration-300`}
        >
          <img
            src="assets/icons/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
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
              <>
                <li
                  key={index}
                  className={`mt-0 font-semibold font-montserrat border-b text-white text-base border-gray-500 hover:bg-gray-500 flex p-3 cursor-pointer text-base	 items-center gap-x-4 
              ${Menu.gap ? "mt-9" : ""} ${index === 0 && "bg-light-white"} `}
                  onClick={() => setSubMenuOpen(index)}
                >
                  <img src={`assets/icons/${Menu.src}.svg`} />
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
                      >
                        <div className="flex justify-start text-white cursor-pointer text-base items-center gap-x-4 false ">
                          <img src={`assets/icons/${subMenuItem.src}.svg`} />
                          <span className="font-montserrat">
                            {subMenuItem.title}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </>
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
