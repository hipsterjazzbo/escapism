onEvent("jei.hide.items", (e) => {
  //#region functions
  function hideMetal(mod, name, types) {
    types.forEach((type) => {
      let id = `${mod}:${name}_${type}`;

      if (!Ingredient.of(id).stacks.empty) e.hide(id);
    });
  }

  function hideStuff(mod, type, names) {
    names.forEach((name) => {
      let id = `${mod}:${name}_${type}`;

      if (!Ingredient.of(id).stacks.empty) e.hide(id);
    });
  }
  //#endregion

  e.hide([
    /supplementaries:bamboo_spikes_tipped/,
    "quark:ancient_tome",
    "tconstruct:copper_ingot",
    "tconstruct:molten_aluminum_bucket",
    "tconstruct:molten_copper_bucket",
    "tconstruct:molten_lead_bucket",
    "tconstruct:molten_nickel_bucket",
    "tconstruct:molten_osmium_bucket",
    "tconstruct:molten_platinum_bucket",
    "tconstruct:molten_silver_bucket",
    "tconstruct:molten_tin_bucket",
    "tconstruct:molten_uranium_bucket",
    "tconstruct:molten_zinc_bucket",
    "tconstruct:molten_aluminum",
    "tconstruct:molten_copper",
    "tconstruct:molten_lead",
    "tconstruct:molten_nickel",
    "tconstruct:molten_osmium",
    "tconstruct:molten_platinum",
    "tconstruct:molten_silver",
    "tconstruct:molten_tin",
    "tconstruct:molten_uranium",
    "tconstruct:molten_zinc",
    /tconstruct:crafting_station/,
    /tconstruct:tinker_station/,
    /tconstruct:part_builder/,
    /tconstruct:tinkers_anvil/,
    /tconstruct:scorched_anvil/,
    "eidolon:lead_ore",
    "eidolon:lead_ingot",
    "eidolon:lead_block",
    "eidolon:lead_nugget",
    /resourcefulbees:.*spawn_egg/,
    "create:honey_bucket",
    "createaddition:diamond_grit",
    /cavesandcliffs:raw_.*/,
  ]);

  //#region hideMetal
  hideMetal("create", "copper", ["ingot", "ore", "nugget", "block"]);
  hideMetal("cavesandcliffs", "copper", ["ingot", "ore", "nugget", "block"]);
  hideMetal("create", "zinc", ["ingot", "ore", "nugget", "block"]);
  //#endregion

  //#region hideStuff
  hideStuff("create", "sheet", ["iron", "golden", "copper"]);
  //#endregion
});
