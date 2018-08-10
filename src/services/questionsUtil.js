export function getQuestionsIndex(sectionData) {
  const sectionId = (section) => `S${section.id}`;
  const attributeId = (sectionId, attribute) => `${sectionId}A${attributeId}`;
  const optionId = (parentId, option) => `${parentId}O${option.id}`;
  let result = {};
  console.log(sectionData);
  sectionData[0].attributes.forEach(attribute => createFormSection(attribute, sectionData[0].id));
  
}

function createFormSection(attribute, sectionId) {
  const attributeId = `${sectionId}A${attribute.id}`;
  const hasNestedQuestions = attribute.nestedOptions !== undefined;
  const hasGroups = attribute.groups !== undefined;
  const qIndex = {};
  if (hasGroups) {
    attribute.groups.forEach(group => qIndex[group] = []);
    attribute.options.map(option => qIndex[option.group].push({option, optionId: `${attributeId}O${option.id}`}));
  } else {
    qIndex[''] = [];
    attribute.options.map(option => qIndex[''].push({option, optionId: `${attributeId}O${option.id}`}));
  }
  console.log(qIndex);



}