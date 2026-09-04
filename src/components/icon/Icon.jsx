import iconLogo from "./icons/iconLogo/iconLogo";
import IconMessage from "./icons/iconMessage/IconMessage";
import IconMoon from "./icons/iconMoon/IconMoon";
import IconPlus from "./icons/iconPlus/iconPlus";
import IconSun from "./icons/iconSun/iconSun";

const icons = [
    {
        "id": 1,
        "name": "iconMoon",
        "el": IconMoon
    },
    {
        "id": 2,
        "name": "iconSun",
        "el": IconSun
    },
    {
        "id": 3,
        "name": "iconMessage",
        "el": IconMessage
    },
    {
        "id": 4,
        "name": "iconLogo",
        "el": iconLogo
    },
    {
        "id": 5,
        "name": "iconPlus",
        "el": IconPlus
    }
];


const Icon = ({ iconName, className }) => {
    const icon = icons.find((item) => item.name === iconName);

    if (!icon) {
        return null;
    }
    const Component = icon.el;
    return <Component className={className} key={icon.id} />;
}

export default Icon