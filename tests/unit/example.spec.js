/*
 * Fluffy - https://github.com/SirMishaa/Fluffy
 * Author - SirMishaa
 * License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
 */

import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
