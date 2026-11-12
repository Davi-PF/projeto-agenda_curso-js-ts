import validator from "validator";
import { clearFieldError, clearFormErrors, setFieldError } from "./formFeedback";

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
    this.form.addEventListener("input", (e) => {
      const target = e.target;
      clearFieldError(target);

      if (target.name === "email" || target.name === "telefone") {
        const otherName = target.name === "email" ? "telefone" : "email";
        const otherInput = this.form.querySelector(`input[name="${otherName}"]`);
        if (otherInput && otherInput.dataset.contactGroupError === "true") {
          clearFieldError(otherInput);
        }
      }
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();
    let error = false;

    clearFormErrors(el);

    if (nomeInput.value.trim() === "") {
      setFieldError(nomeInput, "Nome não pode estar vazio");
      error = true;
    }

    if (email && !validator.isEmail(email)) {
      setFieldError(emailInput, "E-mail inválido.");
      error = true;
    }

    if (!email && !telefone) {
      const msg = "Precisa incluir pelo menos um meio de contato.";
      setFieldError(emailInput, msg);
      setFieldError(telefoneInput, msg);
      emailInput.dataset.contactGroupError = "true";
      telefoneInput.dataset.contactGroupError = "true";
      error = true;
    }

    if (!error) el.submit();
  }
}
