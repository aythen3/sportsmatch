import { create } from "../redux/actions/users";

test('adds 1 + 2 to equal 3',async () => {
  expect( await create()).toBe(false);
});