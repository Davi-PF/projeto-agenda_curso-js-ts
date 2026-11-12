export function clearFormErrors(form) {
  for (const input of form.querySelectorAll(".is-invalid")) {
    input.classList.remove("is-invalid");
    delete input.dataset.contactGroupError;
  }

  for (const feedback of form.querySelectorAll(".invalid-feedback")) {
    feedback.remove();
  }
}

export function clearFieldError(input) {
  if (!input) return;
  input.classList.remove("is-invalid");
  delete input.dataset.contactGroupError;

  const next = input.nextElementSibling;
  if (next && next.classList.contains("invalid-feedback")) {
    next.remove();
  }
}

export function setFieldError(input, message) {
  if (!input) return;
  clearFieldError(input);
  input.classList.add("is-invalid");

  const feedback = document.createElement("div");
  feedback.className = "invalid-feedback";
  feedback.textContent = message;
  input.insertAdjacentElement("afterend", feedback);
}
