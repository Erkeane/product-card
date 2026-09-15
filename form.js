export class Form {
constructor(formId) {
  this.form = document.querySelector(formId);
  }

getForms() {
  const formData = new FormData(this.form);
  return Object.fromEntries(formData.entries());
}

checkValid() {
  return this.form.checkValidity();
}
  
resetFormValue() {
  this.form.reset();
  }
}
