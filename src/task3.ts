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