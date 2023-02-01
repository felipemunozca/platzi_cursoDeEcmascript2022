/**
 * En este deafío recibirás dos objetos JSON por parámetros.
 * Usando el spread operator, deberás combinar ambos objetos en uno solo. 
 * Es posible que no se te envíe alguno de los dos objetos o ninguno, por lo que deberás usar estos por defecto, en su respectivo orden:
 * 
 * JSON 1:
 * {
 *     name: "Mr. Michi",
 *     food: "Pescado"
 * }
 * JSON 2:
 * {
 *     age: 12,
 *     color: "Blanco"
 * }
 * 
 * La solución deberá tener un input y output como la siguiente, recuerda que se te pueden o no envíar los parámetros.
 * Input:
 * solution({
 *      name: "Bigotes",
 *      food: "Pollito"
 * }),
 * 
 * Output:
 * {
 *     name: "Bigotes",
 *     food: "Pollito",
 *     age: 12,
 *     color: "Blanco"
 * }
 */

// Solución:
export function solution(
    json1 = {
        name: "Mr. Michi",
        food: "Pescado",
    },
    json2 = {
        age: 12,
        color: "Blanco",
    }
) 
{
    return { ...json1, ...json2, };
}

