import gridSectionData from './wine-grid'
import {getQuestionsIndex} from './questionsUtil';
function filterById(res, id) {
  res.filter(section => section.id === id) 
}

export const fetchSectionData = () => {
  let sectionsHash = {};
  gridSectionData.map(section => {
    const {id, ...sectionData} = section;
    
    sectionsHash[id] = sectionData;
  });
  return sectionsHash;
};