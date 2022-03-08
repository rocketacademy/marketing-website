
export const initializeCheckboxes = () => {
    const checkBoxes = [];

    const checkBox1 = document.querySelector('input[name="course_type1"]');
    checkBoxes.push(checkBox1);
    const checkBox2 = document.querySelector('input[name="course_type2"]');
    checkBoxes.push(checkBox2);
    const checkBox3 = document.querySelector('input[name="course_type3"]');
    checkBoxes.push(checkBox3);

    checkBoxes.forEach(e=> e.addEventListener('change', _ => checkCheckboxes()));
  };

export const checkCheckboxes = () => {
    const checkBoxes = [];

    const checkBox1 = document.querySelector('input[name="course_type1"]');
    checkBoxes.push(checkBox1);
    const checkBox2 = document.querySelector('input[name="course_type2"]');
    checkBoxes.push(checkBox2);
    const checkBox3 = document.querySelector('input[name="course_type3"]');
    checkBoxes.push(checkBox3);

    // if none checked, add required
    if( document.querySelector('input[name="course_type1"]:checked') === false &&
        document.querySelector('input[name="course_type2"]:checked') === false &&
        document.querySelector('input[name="course_type3"]:checked') === false
    ){
        checkBoxes.forEach(e=> e.setAttribute("required",''));
        return false;
    }else{
        checkBoxes.forEach(e=> e.removeAttribute("required"));
        return true;
    }
}
