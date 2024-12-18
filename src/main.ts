const slider = document.querySelector<HTMLInputElement>(".js-slider");
const toggle = document.querySelectorAll<HTMLInputElement>(
  "input[type='radio']"
);

if (slider) {
  const setBackground = (value: number) => {
    const size = `${value}% 100%`;
    slider.style.backgroundSize = size;
  };

  setBackground(Number(slider.value));

  slider.addEventListener("input", () => {
    const value = slider.value;

    setBackground(Number(value));
  });
}

const setColor = (element: HTMLElement, color: string) => {
  element.style.background = color;
};

if (toggle) {
  toggle.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.checked && btn.classList.contains("js-yearly")) {
        console.log(btn);
        btn.checked = true;
        const toggleWrapper = btn.closest(".js-toggle-wrapper") as HTMLElement;

        if (toggleWrapper) {
          setColor(toggleWrapper, " hsl(174, 77%, 80%)");
        }
      } else {
        const toggleWrapper = btn.closest(".js-toggle-wrapper") as HTMLElement;

        setColor(toggleWrapper, " hsl(223, 50%, 87%)");
      }
    });
  });
}
