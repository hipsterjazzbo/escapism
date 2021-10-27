//priority: 1000
//#region ITEM TAGS
onEvent("item.tags", (e) => {
  //#region constants
  let allthemodiumores = ["allthemodium", "vibranium", "unobtainium"];
  //#endregion
  //#region additions
  e.add("minecraft:logs_unstripped", "/^.+:(?!stripped_).+_log$/");
  e.add("forge:swords", [
    "allthemodium:alloy_paxel",
    "allthemodium:alloy_sword",
  ]);
  e.add("forge:axes", ["byg:pendorite_battleaxe"]);
  e.add("forge:pickaxes", ["allthemodium:alloy_pick"]);
  e.add("minecraft:stone_tool_materials", [
    "#forge:stone",
    "#forge:cobblestone",
  ]);
  e.add("minecraft:stone_crafting_materials", [
    "#forge:stone",
    "#forge:cobblestone",
  ]);
  e.add("forge:ingots", [
    "#forge:ingots/unobtainium_allthemodium_alloy",
    "#forge:ingots/vibranium_unobtainium_alloy",
    "#forge:ingots/vibranium_allthemodium_alloy",
    "#forge:ingots/oratchalcum",
  ]);
  e.add("forge:sand", [
    "byg:white_sand",
    "byg:black_sand",
    "byg:purple_sand",
    "byg:blue_sand",
  ]);
  e.add("forge:fruits", "byg:holly_berries");
  e.add(
    "forge:mushroom_caps/black_puff_mushroom",
    "byg:black_puff_mushroom_block"
  );
  e.add("forge:mushroom_caps/blue_glowshroom", "byg:blue_glowshroom_block");
  e.add(
    "forge:mushroom_caps/weeping_milkcap_mushroom",
    "byg:weeping_milkcap_mushroom_block"
  );
  e.add("forge:mushroom_caps/green_mushroom", "byg:green_mushroom_block");
  e.add("forge:mushroom_caps/purple_glowshroom", "byg:purple_glowshroom_block");
  e.add("forge:mushroom_caps/brown_mushroom", "minecraft:brown_mushroom_block");
  e.add("forge:mushroom_caps/red_mushroom", "minecraft:red_mushroom_block");
  e.add("forge:mushroom_stems/brown_mushroom", "byg:brown_mushroom_stem");
  e.add("forge:mushroom_stems/red_glowshroom", "byg:red_glowshroom_stem");
  e.add("forge:mushroom_stems/white_mushroom", "byg:white_mushroom_stem");
  e.add("forge:mushroom_stems/yellow_glowshroom", "byg:yellow_glowshroom_stem");
  e.add("forge:mushroom_stems/mushroom", "minecraft:mushroom_stem");
  e.add("forge:mushroom_caps", [
    "#forge:mushroom_caps/red_mushroom",
    "#forge:mushroom_caps/brown_mushroom",
    "#forge:mushroom_caps/blue_glowshroom",
    "#forge:mushroom_caps/purple_glowshroom",
    "#forge:mushroom_caps/green_mushroom",
    "#forge:mushroom_caps/black_puff_mushroom",
    "#forge:mushroom_caps/weeping_milkcap_mushroom",
  ]);
  e.add("forge:mushroom_stems", [
    "#forge:mushroom_stems/mushroom",
    "#forge:mushroom_stems/brown_mushroom",
    "#forge:mushroom_stems/white_mushroom",
    "#forge:mushroom_stems/red_glowshroom",
    "#forge:mushroom_stems/yellow_glowshroom",
  ]);
  e.add("forge:mushrooms", [
    "minecraft:warped_fungus",
    "minecraft:crimson_fungus",
    "byg:blue_glowshroom",
    "byg:purple_glowshroom",
  ]);
  e.add("misctags:flowers/end_flowers", [
    "minecraft:chorus_flower",
    "minecraft:chorus_plant",
  ]);
  e.add("misctags:flowers/end_flower", [
    "minecraft:chorus_flower",
    "minecraft:chorus_plant",
  ]);
  e.add("misctags:flowers/forest_flowers", [
    "#minecraft:flowers",
    "minecraft:sweet_berries",
  ]);
  e.add("misctags:flowers/glowing_flowers", [
    "minecraft:shroomlight",
    "minecraft:glowstone",
    "minecraft:redstone_lamp",
  ]);
  e.add("misctags:flowers/nether_flowers", [
    "minecraft:crimson_fungus",
    "minecraft:warped_fungus",
    "minecraft:nether_wart",
    "minecraft:crimson_roots",
    "minecraft:warped_roots",
    "minecraft:weeping_vines",
    "minecraft:twisting_vines",
  ]);
  e.add("misctags:flowers/swamp_flowers", [
    "byg:tiny_lilypads",
    "byg:reeds",
    "byg:cattail",
    "minecraft:lily_pad",
    "minecraft:sugar_cane",
    "minecraft:brown_mushroom",
    "minecraft:red_mushroom",
  ]);
  e.add("misctags:flowers/wither_flowers", "minecraft:wither_rose");
  e.add("minecraft:wart_blocks", "/.+_wart_block/");
  e.add("forge:axes", ["/.+_axe/", "/.+_paxel/", "/.+:axe_.+/"]);
  e.add("forge:pickaxes", ["/.+_pickaxe/", "/.+_paxel/", "/.+:pickaxe_.+/"]);
  e.add("forge:shovels", ["/.+_shovel/", "/.+_paxel/", "/.+:shovel_.+/"]);
  e.add("forge:swords", ["/.+_sword/", "/.+:sword_.+/"]);
  e.add("forge:hoes", ["/.+_hoe/", "/.+:hoe_.+/"]);
  e.add("forge:simple_honeycombs", "/^.+:(?!(catnip|rgbee)_).*honeycomb$/");
  e.add(
    "forge:simple_honeycomb_blocks",
    "/^.+:(?!(catnip|rgbee)_).*honeycomb_block$/"
  );
  e.add("misctags:water/items", [
    "#forge:water",
    "minecraft:water_bucket",
    "create:honey_bucket",
    "create:chocolate_bucket",
  ]);
  //#endregion
});
//#endregion

//#region BLOCK TAGS
onEvent("block.tags", (e) => {
  //#region additions
  e.add("create:brittle", "#misctags:no_moving");
  e.add("misctags:flowers/end_flowers", [
    "minecraft:chorus_flower",
    "minecraft:chorus_plant",
  ]);
  e.add("misctags:flowers/forest_flowers", [
    "#minecraft:flowers",
    "minecraft:sweet_berry_bush",
  ]);
  e.add("misctags:flowers/glowing_flowers", [
    "minecraft:shroomlight",
    "minecraft:glowstone",
    "minecraft:redstone_lamp",
  ]);
  e.add("misctags:flowers/nether_flowers", [
    "minecraft:crimson_fungus",
    "minecraft:warped_fungus",
    "minecraft:nether_wart",
    "minecraft:crimson_roots",
    "minecraft:warped_roots",
    "minecraft:weeping_vines",
    "minecraft:twisting_vines",
  ]);
  e.add("misctags:flowers/swamp_flowers", [
    "byg:tiny_lilypads",
    "byg:reeds",
    "byg:cattail",
    "minecraft:lily_pad",
    "minecraft:sugar_cane",
    "minecraft:brown_mushroom",
    "minecraft:red_mushroom",
  ]);
  e.add("misctags:flowers/wither_flowers", "minecraft:wither_rose");
  e.add(
    "forge:mushroom_caps/black_puff_mushroom",
    "byg:black_puff_mushroom_block"
  );
  e.add("forge:mushroom_caps/blue_glowshroom", "byg:blue_glowshroom_block");
  e.add(
    "forge:mushroom_caps/weeping_milkcap_mushroom",
    "byg:weeping_milkcap_mushroom_block"
  );
  e.add("forge:mushroom_caps/green_mushroom", "byg:green_mushroom_block");
  e.add("forge:mushroom_caps/purple_glowshroom", "byg:purple_glowshroom_block");
  e.add("forge:mushroom_caps/brown_mushroom", "minecraft:brown_mushroom_block");
  e.add("forge:mushroom_caps/red_mushroom", "minecraft:red_mushroom_block");
  e.add("forge:mushroom_stems/brown_mushroom", "byg:brown_mushroom_stem");
  e.add("forge:mushroom_stems/red_glowshroom", "byg:red_glowshroom_stem");
  e.add("forge:mushroom_stems/white_mushroom", "byg:white_mushroom_stem");
  e.add("forge:mushroom_stems/yellow_glowshroom", "byg:yellow_glowshroom_stem");
  e.add("forge:mushroom_stems/mushroom", "minecraft:mushroom_stem");
  e.add("forge:mushroom_caps", [
    "#forge:mushroom_caps/red_mushroom",
    "#forge:mushroom_caps/brown_mushroom",
    "#forge:mushroom_caps/blue_glowshroom",
    "#forge:mushroom_caps/purple_glowshroom",
    "#forge:mushroom_caps/green_mushroom",
    "#forge:mushroom_caps/black_puff_mushroom",
    "#forge:mushroom_caps/weeping_milkcap_mushroom",
  ]);
  e.add("forge:mushroom_stems", [
    "#forge:mushroom_stems/mushroom",
    "#forge:mushroom_stems/brown_mushroom",
    "#forge:mushroom_stems/white_mushroom",
    "#forge:mushroom_stems/red_glowshroom",
    "#forge:mushroom_stems/yellow_glowshroom",
  ]);
  e.add("forge:mushrooms", [
    "minecraft:warped_fungus",
    "minecraft:crimson_fungus",
    "byg:blue_glowshroom",
    "byg:purple_glowshroom",
  ]);
  e.add("forge:storage_blocks", [
    "#forge:storage_blocks/uraninite",
    "#forge:storage_blocks/oratchalcum",
    "#forge:storage_blocks/nether_star",
  ]);
  //#endregion
  //#region removals
  e.removeAll("minecraft:enderman_holdable");
  //#endregion
});
//#endregion
