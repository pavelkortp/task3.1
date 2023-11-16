/**
 * Transforms all fields of an object and returns a modified copy.
 * @param obj object with fields.
 * @param transformer function which take obj field value and transform it to M.
 * @return New object with modified fields.
 * @template M Result fields type, which return transformer.
 * @template F Original obj field's type.
 */
function mapObject<M, F>(obj: Record<string | number | symbol, F>, transformer: (field: F) => M): Record<string, M> {
    const x: Record<string, M> = {};
    Object.keys(obj).forEach((e) => {
        x[e] = transformer(obj[e]);
    });
    return x;
}

const a = {"roma": 5, "vasya": 2, 2: 3};

const b = mapObject(a, (x: number) => x > 2);

console.log(b);

// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1,
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :)
// нас интересует только ее сигнатура.

function completer1<T>(obj: Partial<T>, complementator: (obj: Partial<T>) => T): void {
}

// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string),
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1,
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :)
// нас интересует только ее сигнатура.

function completer2<T extends { id?: string }>(obj: Omit<T, 'id'>, complementator: (obj: Omit<T, 'id'>) => T) {
}


// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс
// - количество
// ...а возвращает массив экземпляров этого класса

class Rectangle {
    w!: number;
    h!: number;
}

class Circle {
    radius!: number;
}

// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию

function produce<T>(someClass: new () => T, count: number, ): T[] {
    let a = []
    for (let i = 0; i < count; i++)
        a.push(new someClass());

    return a;
}

let A: Rectangle[] = produce(Rectangle, 10);
let B: Circle[] = produce(Circle, 20)