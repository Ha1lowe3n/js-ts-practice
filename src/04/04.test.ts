import { CourseType } from "./04";

test("should take old men then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter((age) => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});

test("should take courses chipper 90", () => {
    const courses = [
        { title: "css", price: 110 },
        { title: "js", price: 200 },
        { title: "react", price: 150 },
    ];

    const filterCourse = courses.filter(
        (course: CourseType) => course.price < 160
    );

    expect(filterCourse.length).toBe(2);
    expect(filterCourse[0].title).toBe("css");
    expect(filterCourse[1].title).toBe("react");
});

test("get only completed tasks", () => {
    const tasks = [
        { id: 1, title: "bread", isDone: false },
        { id: 2, title: "milk", isDone: true },
        { id: 3, title: "solt", isDone: false },
        { id: 4, title: "sugar", isDone: true },
    ];

    const completedTasks = tasks.filter((task) => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
});

test("get only uncompleted tasks", () => {
    const tasks = [
        { id: 1, title: "bread", isDone: false },
        { id: 2, title: "milk", isDone: true },
        { id: 3, title: "solt", isDone: false },
        { id: 4, title: "sugar", isDone: true },
    ];

    const uncompletedTasks = tasks.filter((task) => !task.isDone);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
});
