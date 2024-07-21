import { sum } from "../sum";

test("sum of the two number",()=>{
    const result=sum(3,4);

expect(result).toBe(7);
})