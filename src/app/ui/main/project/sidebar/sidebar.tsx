import { useState } from "react";
import { NavLink } from "@remix-run/react";
import { HiOutlineViewBoards } from "react-icons/hi";
import cx from "classix";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { BsListNested, BsCloudSlash } from "react-icons/bs";
import { TbError404 } from "react-icons/tb";

export const Sidebar = (props: Props): JSX.Element => {
  const { projectName, projectDescription, projectImage } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="relative flex">
      <div
        className={cx(
          "flex h-full max-w-0 flex-col whitespace-nowrap bg-elevation-surface-sunken opacity-0 duration-300 ease-out",
          isOpen && "w-[240px] max-w-[240px] whitespace-normal opacity-100"
        )}
      >
        <section className="flex w-full items-start px-5 py-6">
          <img
            src={projectImage}
            width={28}
            height={28}
            alt="project"
            className="rounded-[3px]"
          />
          <div className="ml-4 w-full text-font">
            <p className="font-primary-bold text-lg leading-4">{projectName}</p>
            <p className="mt-2 line-clamp-2 whitespace-normal font-primary-light text-sm leading-4">
              {projectDescription}
            </p>
          </div>
        </section>
        <section className="flex-grow p-3">
          <nav className="flex-grow">
            {navItems.map(({ href, name, icon, disabled }) => (
              <NavItem
                key={href}
                href={href}
                icon={icon}
                name={name}
                disabled={disabled}
              />
            ))}
          </nav>
        </section>
      </div>
      <div
        className={cx("r-0 relative z-10 h-full w-3", isOpen ? "ml-0" : "ml-7")}
      >
        <div className="absolute -left-[3px] h-full w-[3px] bg-gradient-to-l from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.0)] opacity-50" />
        <button
          onClick={toggleSidebar}
          className={cx(
            "absolute -left-[12px] mt-6 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full border-none bg-elevation-surface-raised text-icon shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] transition-transform delay-150 duration-200 ease-in hover:bg-icon-brand hover:text-font-inverse",
            !isOpen && "rotate-180"
          )}
          aria-label="Toggle sidebar"
        >
          <RiArrowDropLeftLine size={24} />
        </button>
      </div>
    </aside>
  );
};

interface Props {
  projectName: string;
  projectDescription: string;
  projectImage: string;
}

const navItems: NavItemProps[] = [
  {
    href: "board",
    icon: <HiOutlineViewBoards size={24} />,
    name: "Tasks",
  },
  {
    href: "analytics",
    icon: <ImStatsDots size={20} />,
    name: "Analytics",
  }
];

const NavItem = ({ href, icon, name, disabled }: NavItemProps): JSX.Element => {
  return (
    <NavLink
      to={disabled ? "#" : href}
      className={({ isActive }) =>
        cx(
          "group flex w-full cursor-pointer items-center gap-4 rounded border-none p-2 text-sm",
          isActive && !disabled
            ? "bg-background-neutral text-font-brand"
            : "text-font-subtlest",
          disabled
            ? "!cursor-not-allowed hover:bg-transparent"
            : "hover:bg-background-neutral"
        )
      }
    >
      {icon}
      <span className={cx(disabled && "group-hover:hidden")}>{name}</span>
      <span
        className={cx(
          "itmes-center bg-grey-300 -ml-2 hidden rounded px-2 py-1 text-2xs uppercase disabled:hover:flex",
          disabled && "group-hover:block"
        )}
      >
        Not implemented
      </span>
    </NavLink>
  );
};

export interface NavItemProps {
  href: string;
  icon: JSX.Element;
  name: string;
  disabled?: boolean;
}
