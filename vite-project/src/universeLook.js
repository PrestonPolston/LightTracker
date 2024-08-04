// universeLook.js
const universeStyles = {
  1: { backgroundColor: "#FFDDC1", color: "#D30000" }, // Light red
  2: { backgroundColor: "#C1E1FF", color: "#0044CC" }, // Light blue
  3: { backgroundColor: "#D1FFD1", color: "#008C00" }, // Light green
  4: { backgroundColor: "#FFF4C1", color: "#CC8800" }, // Light yellow
  5: { backgroundColor: "#FFD1DC", color: "#CC0044" }, // Light pink
  6: { backgroundColor: "#D4C1FF", color: "#5000CC" }, // Light purple
  7: { backgroundColor: "#FFC1C1", color: "#CC0000" }, // Light coral
  8: { backgroundColor: "#E1FFC1", color: "#4CAF50" }, // Light lime
  9: { backgroundColor: "#C1F2F4", color: "#009688" }, // Light teal
  10: { backgroundColor: "#C1D2FF", color: "#3F51B5" }, // Light indigo
  11: { backgroundColor: "#FFEDC1", color: "#FF9800" }, // Light orange
  12: { backgroundColor: "#D1F7D1", color: "#76FF03" }, // Light apple green
  13: { backgroundColor: "#F2C1FF", color: "#D5006D" }, // Light violet
  14: { backgroundColor: "#D4C1C1", color: "#B72B2B" }, // Light rose
  15: { backgroundColor: "#C3E8FF", color: "#1976D2" }, // Light sky
  16: { backgroundColor: "#D9C1FF", color: "#7C4DFF" }, // Light lavender
  17: { backgroundColor: "#E2CFC1", color: "#C67C00" }, // Light sandstone
  18: { backgroundColor: "#C1FFD9", color: "#009688" }, // Light mint
  19: { backgroundColor: "#F6C1DF", color: "#D81B60" }, // Light fuchsia
  20: { backgroundColor: "#FFCCFF", color: "#880E4F" }, // Light magenta
  21: { backgroundColor: "#D1F1FF", color: "#0288D1" }, // Light azure
  22: { backgroundColor: "#E1FFC7", color: "#7D8B3A" }, // Light spinach
  23: { backgroundColor: "#FFB1C1", color: "#FF6F61" }, // Light cherry
  24: { backgroundColor: "#D3C1FF", color: "#6A1B9A" }, // Light eggplant
  25: { backgroundColor: "#FFC3C3", color: "#FF2B00" }, // Light crimson
  26: { backgroundColor: "#D4D1C1", color: "#704D3D" }, // Light tan
  27: { backgroundColor: "#C1FFC1", color: "#4CAF50" }, // Light grass
  28: { backgroundColor: "#E7C6B2", color: "#A25C28" }, // Light beige
  29: { backgroundColor: "#D2F4FF", color: "#007C92" }, // Light cerulean
  30: { backgroundColor: "#EBC3C3", color: "#A33A30" }, // Light rosewood
  31: { backgroundColor: "#F9E6C1", color: "#FFC107" }, // Light golden
  32: { backgroundColor: "#C1FFD7", color: "#007A5E" }, // Light forest
  33: { backgroundColor: "#F9C1D1", color: "#C2185B" }, // Light rosy
  34: { backgroundColor: "#D1E3F4", color: "#3F83C5" }, // Light lightblue
  35: { backgroundColor: "#E1FFC1", color: "#7B1FA2" }, // Light purple green
  36: { backgroundColor: "#FFC1C3", color: "#C51162" }, // Light ruby
  37: { backgroundColor: "#FFEA3F", color: "#F44336" }, // Light yellow-orange
  38: { backgroundColor: "#FFE9C4", color: "#B9BC37" }, // Light mustard
  39: { backgroundColor: "#D2FFC1", color: "#7D622D" }, // Light pale-green
  40: { backgroundColor: "#CFD8DC", color: "#424242" }, // Light grey
  41: { backgroundColor: "#F4DDC1", color: "#A68A42" }, // Light caramel
  42: { backgroundColor: "#C1A9FF", color: "#4A148C" }, // Light periwinkle
  43: { backgroundColor: "#FFDBB5", color: "#D76D25" }, // Light orange-brown
  44: { backgroundColor: "#E0C3FF", color: "#2E7D32" }, // Light lilac
  45: { backgroundColor: "#FFC3D1", color: "#C2185B" }, // Light blush
  46: { backgroundColor: "#C1FFC6", color: "#1B5E20" }, // Light spring green
  47: { backgroundColor: "#E7B4C2", color: "#7B1FA2" }, // Light rose gold
  48: { backgroundColor: "#F4C7C3", color: "#C94A17" }, // Light salmon
  49: { backgroundColor: "#C3E7F4", color: "#00796B" }, // Light lagoon
  50: { backgroundColor: "#FFE9B2", color: "#F57F20" }, // Light sunflower
};

export const getUniverseStyle = (universeId) => {
  return universeStyles[universeId] || universeStyles.default;
};
