export function validate(value) {
    let errors = {};
    if (value.product_name === "") {
      errors.product_name = 'product name is required';
    } else if (value.product_name) {
      errors.product_name = '';
    }
    return errors;
  };