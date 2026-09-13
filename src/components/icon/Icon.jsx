import IconLoading from "./icons/iconLoading/IconLoading";
import IconLogo from "./icons/iconLogo/IconLogo";
import IconMessage from "./icons/iconMessage/IconMessage";
import IconMoon from "./icons/iconMoon/IconMoon";
import IconPlus from "./icons/iconPlus/IconPlus";
import IconSun from "./icons/iconSun/IconSun";
import IconMinus from "./icons/iconMinus/IconMinus";
import IconPriorityOne from "./icons/iconPriorityOne/IconPriorityOne";
import IconProrityTwo from "./icons/iconPriorityTwo/IconPriorityTwo";
import IconX from "./icons/iconX/IconX";
import IconCheck from "./icons/iconCheck/IconCheck";

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
  {
    id: 7,
    name: "iconMinus",
    el: IconMinus,
  },
  {
    id: 8,
    name: "iconPriorityOne",
    el: IconPriorityOne,
  },
  {
    id: 9,
    name: "iconPriorityTwo",
    el: IconProrityTwo,
  },
  {
    id: 10,
    name: "iconX",
    el: IconX,
  },
  {
    id: 11,
    name: "iconCheck",
    el: IconCheck,
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
