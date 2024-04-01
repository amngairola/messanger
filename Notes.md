## Handling Change (handleChange):

**Purpose** : The handleChange function is responsible for updating the form state whenever the value of an input field changes.

**Trigger**: It is triggered by the onChange event of the input fields, which fires whenever the user types or selects something in the input field.

**Role**: It captures the user's input in real-time and updates the form state accordingly. This ensures that the form state is always synchronized with the user's input.

## Handling Submit (handleSubmit):

**Purpose** : The handleSubmit function is responsible for processing the form data and performing any necessary actions when the form is submitted.

**Trigger**: It is triggered by the onSubmit event of the form element, which fires when the user submits the form by pressing the submit button or pressing Enter while in a form field.

**Role**: It is typically used to handle form validation, perform form submission (e.g., sending data to a server), and any other actions associated with submitting the form. It often involves accessing the form data captured by handleChange and performing any necessary validation or processing before submission.
