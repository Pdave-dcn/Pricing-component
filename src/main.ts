const slider = document.querySelector<HTMLInputElement>(".js-slider");
const toggle = document.querySelectorAll<HTMLInputElement>(
  "input[type='radio']"
);
const pageViewsElement =
  document.querySelector<HTMLElement>(".js-views-numbers");
const viewsCostElement = document.querySelector<HTMLElement>(".js-cost");
const yearlyOption = document.querySelector<HTMLInputElement>(".js-yearly");
const monthlyOption = document.querySelector<HTMLInputElement>(".js-monthly");

type PriceKeys = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

const prices: Record<PriceKeys, number> = {
  0: 0,
  10: 6,
  20: 6,
  30: 12,
  40: 12,
  50: 16,
  60: 16,
  70: 24,
  80: 24,
  90: 24,
  100: 36,
};

const pricesDiscount: Record<PriceKeys, number> = {
  0: 0,
  10: 4.5,
  20: 4.5,
  30: 9,
  40: 9,
  50: 12,
  60: 12,
  70: 18,
  80: 18,
  90: 18,
  100: 27,
};

if (slider) {
  const setBackground = (value: number) => {
    const size = `${value}% 100%`;
    slider.style.backgroundSize = size;

    handlePageViews(value);
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

/**
 * Adds event listeners to toggle buttons and changes the color of the toggle wrapper based on the button state.
 * @param {NodeListOf<HTMLInputElement>} toggle - The list of toggle buttons to add event listeners to.
 * @returns None
 */
if (toggle) {
  toggle.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.checked && btn.classList.contains("js-yearly")) {
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

function renderPageViewsAmount(amount: string): void {
  if (!pageViewsElement) return;

  pageViewsElement.textContent = amount;
}

function renderCost(amount: number): void {
  if (!viewsCostElement) return;

  const cost = amount.toFixed(2);
  viewsCostElement.innerText = `$${cost}`;
}

/**
 * Handles the page views based on the selected value.
 * @param {number} value - The selected value for the page views.
 * @returns None
 */
function handlePageViews(value: number): void {
  if (yearlyOption?.checked) {
    const cost = pricesDiscount[value as PriceKeys];
    renderPageViewsAmount(getPageViewsLabel(value));
    renderCost(cost);
  } else {
    const cost = prices[value as PriceKeys];
    renderPageViewsAmount(getPageViewsLabel(value));
    renderCost(cost);
  }
}

/**
 * Returns a label based on the input value representing page views.
 * @param {number} value - The numerical value representing page views.
 * @returns {string} A string label representing the page views.
 */
function getPageViewsLabel(value: number): string {
  let returnedValue = "";

  switch (value) {
    case 0:
      returnedValue = "0";
      break;
    case 10:
      returnedValue = "10K";
      break;
    case 20:
      returnedValue = "10K";
      break;
    case 30:
      returnedValue = "50K";
      break;
    case 40:
      returnedValue = "50K";
      break;
    case 50:
      returnedValue = "100K";
      break;
    case 60:
      returnedValue = "100K";
      break;
    case 70:
      returnedValue = "500K";
      break;
    case 80:
      returnedValue = "500K";
      break;
    case 90:
      returnedValue = "500K";
      break;
    case 100:
      returnedValue = "1M";
      break;
  }
  return returnedValue;
}

function applyDiscount() {
  if (!slider) return;

  const value = Number(slider.value);
  const discountedPrice = pricesDiscount[value as PriceKeys];

  renderCost(discountedPrice);
}

function resetToNormalPrices() {
  if (!slider) return;

  const value = Number(slider.value);
  const originalPrice = prices[value as PriceKeys];
  const pageViewsLabel = getPageViewsLabel(value);

  renderCost(originalPrice);
  renderPageViewsAmount(pageViewsLabel);
}

yearlyOption?.addEventListener("change", () => {
  if (yearlyOption.checked) {
    applyDiscount();
  }
});

monthlyOption?.addEventListener("change", () => {
  if (monthlyOption.checked) {
    resetToNormalPrices();
  }
});
