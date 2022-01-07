onEvent("item.modification", (e) => {
  let colors = [
    `white`,
    `light_gray`,
    `gray`,
    `black`,
    `red`,
    `orange`,
    `yellow`,
    `lime`,
    `green`,
    `light_blue`,
    `cyan`,
    `blue`,
    `purple`,
    `magenta`,
    `pink`,
    `brown`,
  ];

  function modifyStack(listOfItems, countPerStack) {
    listOfItems.forEach((item) => {
      e.modify(item, (item) => (item.maxStackSize = countPerStack));
    });
  }

  modifyStack(
    [
      "minecraft:ender_pearl",
      "minecraft:egg",
      "minecraft:honey_bottle",
      "minecraft:snowball",
      "minecraft:armor_stand",
      "minecraft:bucket",
      "minecraft:oak_sign",
      "minecraft:spruce_sign",
      "minecraft:oak_sign",
      "minecraft:spruce_sign",
      "minecraft:birch_sign",
      "minecraft:acacia_sign",
      "minecraft:jungle_sign",
      "minecraft:dark_oak_sign",
      "minecraft:crimson_sign",
      "minecraft:warped_sign",
      "upgrade_aquatic:driftwood_sign",
      "upgrade_aquatic:river_sign",
      "tconstruct:greenheart_sign",
      "tconstruct:skyroot_sign",
      "tconstruct:bloodshroom_sign",
      "tconstruct:glow_ball",
      "tconstruct:efln_ball",
      "tconstruct:flint_shuriken",
      "upgrade_aquatic:mulberry_jam_bottle",
    ],
    64
  );

  colors.forEach((color) => {
    e.modify(`minecraft:${color}_banner`, (item) => (item.maxStackSize = 64));
  });
});
