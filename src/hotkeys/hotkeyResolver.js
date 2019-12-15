export default function resolve(editor, keymapType) {
  return require(`./${editor}/keymap.${keymapType
    .toLowerCase()
    .replace(" ", "")}.json`);
}
