import IconLoading from "./icons/iconLoading/IconLoading";
import IconLogo from "./icons/iconLogo/IconLogo";
import IconMessage from "./icons/iconMessage/IconMessage";
import IconMoon from "./icons/iconMoon/IconMoon";
import IconPlus from "./icons/iconPlus/IconPlus";
import IconSun from "./icons/iconSun/IconSun";

const icons = [
  {
    id: 1,
    name: "iconMoon",
    el: IconMoon,
  },
  {
    id: 2,
    name: "iconSun",
    el: IconSun,
  },
  {
    id: 3,
    name: "iconMessage",
    el: IconMessage,
  },
  {
    id: 4,
    name: "iconLogo",
    el: IconLogo,
  },
  {
    id: 5,
    name: "iconPlus",
    el: IconPlus,
  },
  {
    id: 6,
    name: "iconLoading",
    el: IconLoading,
  },
];

const Icon = ({ iconName, className }) => {
  const icon = icons.find((item) => item.name === iconName);

  if (!icon) {
    return null;
  }
  const Component = icon.el;
  return <Component className={className} key={icon.id} />;
};

export default Icon;
