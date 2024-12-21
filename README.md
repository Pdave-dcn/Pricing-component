# Interactive Pricing Component

This project is an **Interactive Pricing Component** built with TypeScript, HTML, Tailwind and SCSS. It allows users to adjust pricing based on a slider input, toggle between yearly and monthly billing options, and see the corresponding page views and cost updates in real-time.

## Features

- **Responsive Slider**: Dynamically updates the pricing and page views based on the slider's value.
- **Toggle Options**: Allows switching between yearly and monthly billing, applying a discount for yearly billing.

## Technologies Used

- **TypeScript**: For type-safe JavaScript development.
- **HTML**: For structuring the component.
- **Tailwind/SCSS**: For styling and responsiveness.

## How It Works

### Slider Logic

- The slider's value determines the cost and page views.
- The `prices` and `pricesDiscount` objects store the cost data for both billing modes.
- The slider's background size adjusts dynamically to reflect its position.

### Toggle Logic

- The toggle buttons switch between yearly and monthly billing.
- When `yearlyOption` is selected, a discount is applied using the `pricesDiscount` object.
- When `monthlyOption` is selected, the normal prices are used.

### Functions

- `handlePageViews(value: number)`: Updates the page views and cost based on the slider value and toggle state.
- `renderPageViewsAmount(amount: string)`: Renders the page views label.
- `renderCost(amount: number)`: Renders the pricing amount.
- `applyDiscount()`: Applies the discounted pricing for yearly billing.
- `resetToNormalPrices()`: Resets the pricing to monthly rates.

## Customization

You can easily customize the following:

1. **Pricing Data**: Modify the `prices` and `pricesDiscount` objects to suit your needs.

   ```ts
   const prices: Record<PriceKeys, number> = {
     0: 0,
     10: 6,
     ...
   };
   ```

2. **Page Views Labels**: Adjust the labels returned by `getPageViewsLabel`.
   ```ts
   function getPageViewsLabel(value: number): string {
     switch (value) {
       case 10:
         return "10K";
       ...
     }
   }
   ```
