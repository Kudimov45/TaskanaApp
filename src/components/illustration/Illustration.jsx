import TaskDone from "./illustrations/taskDone/taskDone";
import TaskInfo from "./illustrations/taskInfo/TaskInfo";

const illustrations = [
    {
        "id": 1,
        "name": "taskInfo",
        "el": TaskInfo
    },
    {
        "id": 2,
        "name": "taskDone",
        "el": TaskDone
    },
    
];

const Illustration = ({ illustrationName, className }) => {
    const illustration = illustrations.find((item) => item.name === illustrationName);

    if (!illustration) {
        return null;
    }
    const Component = illustration.el;
    return <Component className={className} key={illustration.id} />;
}

export default Illustration