// //priority: 997
// onEvent("recipes", (e) => {
//   // #region Metal Unification
//   function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
//     e.replaceOutput(`#forge:ingots/${name}`, ingotItem);
//     e.replaceOutput(`#forge:dusts/${name}`, dustItem);
//     e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
//     e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);
//
//     e.remove({
//       input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
//       output: `#forge:ingots/${name}`,
//       type: "minecraft:smelting",
//     });
//     e.remove({
//       input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
//       output: `#forge:ingots/${name}`,
//       type: "minecraft:blasting",
//     });
//
//     e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5);
//     e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5);
//
//     if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
//       e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1);
//       e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1);
//     }
//
//     e.replaceInput(nuggetItem, `#forge:nuggets/${name}`);
//     e.replaceInput(dustItem, `#forge:dusts/${name}`);
//     e.replaceInput(ingotItem, `#forge:ingots/${name}`);
//     e.replaceInput(blockItem, `#forge:storage_blocks/${name}`);
//   }
//
//   function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
//     e.replaceInput(nuggetItem, `#forge:nuggets/${name}`);
//     e.replaceInput(dustItem, `#forge:dusts/${name}`);
//     e.replaceInput(ingotItem, `#forge:ingots/${name}`);
//     e.replaceInput(blockItem, `#forge:storage_blocks/${name}`);
//
//     e.replaceOutput(`#forge:ingots/${name}`, ingotItem);
//     e.replaceOutput(`#forge:dusts/${name}`, dustItem);
//     e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
//     e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);
//   }
//
//   //Vanilla MC
//   unifyMetal(
//     "gold",
//     "minecraft:gold_ingot",
//     "alltheores:gold_dust",
//     "minecraft:gold_block",
//     "minecraft:gold_nugget"
//   );
//   unifyMetal(
//     "iron",
//     "minecraft:iron_ingot",
//     "alltheores:iron_dust",
//     "minecraft:iron_block",
//     "minecraft:iron_nugget"
//   );
//
//   //Multiple Mods
//   unifyMetal(
//     "copper",
//     "alltheores:copper_ingot",
//     "alltheores:copper_dust",
//     "alltheores:copper_block",
//     "alltheores:copper_nugget"
//   );
//   unifyMetal(
//     "lead",
//     "alltheores:lead_ingot",
//     "alltheores:lead_dust",
//     "alltheores:lead_block",
//     "alltheores:lead_nugget"
//   );
//   unifyMetal(
//     "platinum",
//     "alltheores:platinum_ingot",
//     "alltheores:platinum_dust",
//     "alltheores:platinum_block",
//     "alltheores:platinum_nugget"
//   );
//   unifyMetal(
//     "silver",
//     "alltheores:silver_ingot",
//     "alltheores:silver_dust",
//     "alltheores:silver_block",
//     "alltheores:silver_nugget"
//   );
//   unifyMetal(
//     "zinc",
//     "alltheores:zinc_ingot",
//     "alltheores:zinc_dust",
//     "alltheores:zinc_block",
//     "alltheores:zinc_nugget"
//   );
//   // #endregion Metal Unification
//
//   // #region Plate Unification
//   utils
//     .listOf(["iron", "gold", "copper", "tin", "lead", "silver", "bronze"])
//     .forEach((type) => {
//       e.replaceInput(
//         type == "gold" ? `create:${type}en_sheet` : `create:${type}_sheet`,
//         `#forge:plates/${type}`
//       );
//
//       e.replaceOutput(
//         type == "gold" ? `create:${type}en_sheet` : `create:${type}_sheet`,
//         type == "aluminum"
//           ? `immersiveengineering:plate_${type}`
//           : `thermal:${type}_plate`
//       );
//     });
//   // #endregion Plate Unification
//
//   // #region Tinkers Unification
//   function tinkerMelting(
//     material,
//     type,
//     typeValues,
//     temperature,
//     time,
//     byproduct
//   ) {
//     let recipe = {
//       type: "tconstruct:melting",
//       ingredient: { tag: `forge:${type}/${material}` },
//       result: {
//         fluid: `alltheores:molten_${material}`,
//         amount: typeValues.amount,
//       },
//       temperature: temperature,
//       time: time * typeValues.multiplier,
//     };
//
//     e.custom(
//       type != "ores" ? recipe : Object.assign({ byproducts: byproduct }, recipe)
//     ).id(`kubejs:melting/${type}/${material}`);
//   }
//
//   function tinkerAlloys(entries) {
//     entries.forEach(([output, outputAmount, temperature, inputs]) => {
//       e.remove({ id: `tconstruct:smeltery/alloys/molten_${output}` });
//       e.custom({
//         type: "tconstruct:alloy",
//         inputs: inputs,
//         result: { fluid: `tconstruct:molten_${output}`, amount: outputAmount },
//         temperature: temperature,
//       }).id(`kubejs:melting/alloys/${output}`);
//     });
//   }
//
//   function unifyTinkers(entries) {
//     let meltingTypes = [
//       "block",
//       "can",
//       "coin",
//       "dust",
//       "ingot",
//       "nugget",
//       "ore",
//       "plates",
//       "rod",
//       "sheetmetal",
//     ];
//     let meltingTypeValues = {
//       storage_blocks: { amount: 1296, multiplier: 88.125 },
//       dusts: { amount: 144, multiplier: 21.75 },
//       ingots: { amount: 144, multiplier: 29.4 },
//       nuggets: { amount: 16, multiplier: 10.0 },
//       ores: { amount: 288, multiplier: 44.1 },
//       plates: { amount: 144, multiplier: 29.4 },
//       rods: { amount: 72, multiplier: 5.88 },
//       sheetmetals: { amount: 144, multiplier: 29.4 },
//     };
//
//     let meltingParts = [
//       "broad_axe_head",
//       "broad_blade",
//       "hammer_head",
//       "large_plate",
//       "pickaxe_head",
//       "repair_kit",
//       "small_axe_head",
//       "small_blade",
//       "tool_binding",
//       "tool_handle",
//       "tough_handle",
//     ];
//
//     entries.forEach(([material, temperature, time, types, byproduct]) => {
//       e.replaceInput(
//         `tconstruct:${material}_ingot`,
//         `#forge:ingots/${material}`
//       );
//       e.replaceInput(
//         `tconstruct:${material}_block`,
//         `#forge:storage_blocks/${material}`
//       );
//       e.replaceOutput(
//         `tconstruct:${material}_ingot`,
//         `alltheores:${material}_ingot`
//       );
//       e.replaceOutput(
//         `tconstruct:${material}_block`,
//         `alltheores:${material}_block`
//       );
//
//       meltingTypes.forEach((meltingType) => {
//         e.remove({
//           id: `tconstruct:smeltery/melting/metal/${material}/${meltingType}`,
//         });
//         for (let type in meltingTypeValues)
//           if (types.includes(type))
//             tinkerMelting(
//               material,
//               type,
//               meltingTypeValues[type],
//               temperature,
//               time,
//               byproduct
//             );
//       });
//
//       meltingParts.forEach((meltingPart) =>
//         e.remove({
//           id: `tconstruct:tools/parts/melting/${meltingPart}/tconstruct/${material}`,
//         })
//       );
//     });
//   }
//
//   function alloyMelting(entries) {
//     entries.forEach(([input, outputItem, outputBlock, outputNugget]) => {
//       e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/block` });
//
//       e.remove({
//         id: `tconstruct:smeltery/casting/metal/${input}/ingot_gold_cast`,
//       });
//       e.remove({
//         id: `tconstruct:smeltery/casting/metal/${input}/ingot_sand_cast`,
//       });
//
//       e.remove({
//         id: `tconstruct:smeltery/casting/metal/${input}/nugget_gold_cast`,
//       });
//       e.remove({
//         id: `tconstruct:smeltery/casting/metal/${input}/nugget_sand_cast`,
//       });
//
//       e.custom({
//         type: "tconstruct:casting_basin",
//         fluid: { tag: `tconstruct:molten_${input}`, amount: 1296 },
//         result: { item: `${outputBlock}` },
//         cooling_time: 171,
//       }).id(`kubejs:smeltery/casting/metal/${input}/block`);
//
//       e.custom({
//         type: "tconstruct:casting_table",
//         cast: { tag: "tconstruct:casts/multi_use/ingot" },
//         fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
//         result: { item: `${outputItem}` },
//         cooling_time: 57,
//       }).id(`kubejs:smeltery/casting/metal/${input}/ingot_gold_cast`);
//
//       e.custom({
//         type: "tconstruct:casting_table",
//         cast: { tag: "tconstruct:casts/single_use/ingot" },
//         cast_consumed: true,
//         fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
//         result: { item: `${outputItem}` },
//         cooling_time: 57,
//       }).id(`kubejs:smeltery/casting/metal/${input}/ingot_sand_cast`);
//
//       e.custom({
//         type: "tconstruct:casting_table",
//         cast: { tag: "tconstruct:casts/multi_use/nugget" },
//         fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
//         result: { item: `${outputNugget}` },
//         cooling_time: 19,
//       }).id(`kubejs:smeltery/casting/metal/${input}/nugget_gold_cast`);
//
//       e.custom({
//         type: "tconstruct:casting_table",
//         cast: { tag: "tconstruct:casts/single_use/nugget" },
//         cast_consumed: true,
//         fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
//         result: { item: `${outputNugget}` },
//         cooling_time: 19,
//       }).id(`kubejs:smeltery/casting/metal/${input}/nugget_sand_cast`);
//     });
//   }
//
//   alloyMelting([
//     [
//       "brass",
//       "create:brass_ingot",
//       "create:brass_block",
//       "create:brass_nugget",
//     ],
//   ]);
//
//   unifyTinkers([
//     [
//       "copper",
//       500,
//       1.7,
//       ["storage_blocks", "dusts", "ingots", "nuggets", "ores"],
//       [{ fluid: "tconstruct:molten_gold", amount: 16 }],
//     ],
//     [
//       "lead",
//       330,
//       1.4,
//       ["storage_blocks", "dusts", "ingots", "nuggets", "ores"],
//       [{ fluid: "alltheores:molten_silver", amount: 48 }],
//     ],
//     [
//       "platinum",
//       970,
//       2.2,
//       ["storage_blocks", "dusts", "ingots", "nuggets", "ores"],
//       [{ fluid: "tconstruct:molten_gold", amount: 48 }],
//     ],
//     [
//       "silver",
//       790,
//       2.0,
//       ["storage_blocks", "dusts", "ingots", "nuggets", "ores"],
//       [{ fluid: "alltheores:molten_lead", amount: 48 }],
//     ],
//     [
//       "zinc",
//       420,
//       1.6,
//       ["storage_blocks", "dusts", "ingots", "nuggets", "ores"],
//       [{ fluid: "alltheores:molten_tin", amount: 48 }],
//     ],
//   ]);
//
//   tinkerAlloys([
//     [
//       "brass",
//       288,
//       605,
//       [
//         { tag: "forge:molten_copper", amount: 144 },
//         { tag: "forge:molten_zinc", amount: 144 },
//       ],
//     ],
//     [
//       "hepatizon",
//       288,
//       1400,
//       [
//         { tag: "forge:molten_copper", amount: 288 },
//         { tag: "tconstruct:molten_cobalt", amount: 144 },
//         { tag: "tconstruct:molten_obsidian", amount: 1000 },
//       ],
//     ],
//     [
//       "pewter",
//       288,
//       400,
//       [
//         { tag: "tconstruct:molten_iron", amount: 144 },
//         { tag: "forge:molten_lead", amount: 144 },
//       ],
//     ],
//     [
//       "rose_gold",
//       576,
//       550,
//       [
//         { tag: "forge:molten_copper", amount: 432 },
//         { tag: "tconstruct:molten_gold", amount: 144 },
//       ],
//     ],
//     [
//       "tinkers_bronze",
//       432,
//       700,
//       [
//         { tag: "forge:molten_copper", amount: 432 },
//         { tag: "tconstruct:molten_glass", amount: 1000 },
//       ],
//     ],
//   ]);
//
//   // #endregion Tinkers Unification
//
//   e.replaceInput("minecraft:stick", "#forge:rods/wooden");
//
//   // e.replaceOutput("createaddition:diamond_grit", "thermal:diamond_dust");
//
//   function createHoneyMixing(entries) {
//     entries.forEach(([output, amount, honey, inputs, id]) => {
//       let honeyMixingRecipe = {
//         type: "create:mixing",
//         results: [{ item: output, amount: amount }],
//       };
//       let honeyMixingInputs = [{ fluidTag: "forge:honey", amount: honey }];
//
//       inputs.forEach(([input, type]) =>
//         honeyMixingInputs.push(type == 0 ? { item: input } : { tag: input })
//       );
//       honeyMixingRecipe = Object.assign(
//         { ingredients: honeyMixingInputs },
//         honeyMixingRecipe
//       );
//       e.custom(honeyMixingRecipe).id(
//         id
//           ? `kubejs:honey_mixing/${output.substring(
//               output.indexOf(":") + 1
//             )}/${id}`
//           : `kubejs:honey_mixing/${output.substring(output.indexOf(":") + 1)}`
//       );
//     });
//   }
//
//   createHoneyMixing([
//     [
//       "minecraft:cookie",
//       16,
//       50,
//       [
//         ["minecraft:wheat", 0],
//         ["minecraft:cocoa_beans", 0],
//         ["minecraft:wheat", 0],
//       ],
//     ],
//     [
//       "minecraft:glistering_melon_slice",
//       2,
//       100,
//       [
//         ["minecraft:melon_slice", 0],
//         ["forge:nuggets/gold", 1],
//         ["minecraft:melon_slice", 0],
//       ],
//     ],
//     [
//       "minecraft:honey_block",
//       1,
//       1000,
//       [
//         ["forge:rods/wooden", 1],
//         ["forge:rods/wooden", 1],
//         ["forge:rods/wooden", 1],
//       ],
//       1,
//     ],
//     [
//       "minecraft:pumpkin_pie",
//       1,
//       100,
//       [
//         ["minecraft:egg", 0],
//         ["minecraft:pumpkin", 0],
//         ["minecraft:egg", 0],
//       ],
//     ],
//     [
//       "minecraft:cake",
//       1,
//       500,
//       [
//         ["minecraft:egg", 0],
//         ["minecraft:wheat", 0],
//         ["minecraft:egg", 0],
//       ],
//     ],
//     [
//       "minecraft:golden_carrot",
//       2,
//       100,
//       [
//         ["minecraft:carrot", 0],
//         ["forge:nuggets/gold", 1],
//         ["minecraft:carrot", 0],
//       ],
//     ],
//     [
//       "minecraft:honey_bottle",
//       3,
//       750,
//       [
//         ["minecraft:glass_bottle", 0],
//         ["minecraft:glass_bottle", 0],
//         ["minecraft:glass_bottle", 0],
//       ],
//     ],
//     ["minecraft:honey_block", 1, 1000, [["forge:rods/wooden", 1]], 2],
//   ]);
//   // #endregion Honey
// });
