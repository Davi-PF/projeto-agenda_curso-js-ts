import validator from "validator";
import { clearFieldError, clearFormErrors, setFieldError } from "./formFeedback";

export default class Login {
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
      clearFieldError(e.target);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    const isCadastro = el.classList.contains("form-cadastro");
    let error = false;

    clearFormErrors(el);

    if (!validator.isEmail(emailInput.value.trim())) {
      setFieldError(emailInput, "E-mail inválido.");
      error = true;
    }

    if (isCadastro) {
      if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
        setFieldError(
          passwordInput,
          "Sua senha precisa ter entre 3 e 50 caracteres.",
        );
        error = true;
      }
    } else if (!passwordInput.value) {
      setFieldError(passwordInput, "Por favor, informe sua senha.");
      error = true;
    }

    if (!error) el.submit();
  }
}
