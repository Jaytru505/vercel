# Subscriptions

## Example Usage

```typescript
import { Subscriptions } from "@vercel/sdk/models/operations";

let value: Subscriptions = {
    id: "<id>",
    trial: {
        start: 3302.67,
        end: 1645.32,
    },
    period: {
        start: 8138.8,
        end: 5129.05,
    },
    frequency: {
        interval: "month",
        intervalCount: 8634.77,
    },
    discount: {
        id: "<id>",
        coupon: {
            id: "<id>",
            name: "<value>",
            amountOff: 2273.62,
            percentageOff: 3476.98,
            durationInMonths: 688.52,
            duration: "forever",
        },
    },
    items: [
        {
            id: "<id>",
            priceId: "<value>",
            productId: "<value>",
            amount: 7057.1,
            quantity: 7310.65,
        },
    ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `trial`                                                                    | [operations.CreateTeamTrial](../../models/operations/createteamtrial.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `period`                                                                   | [operations.CreateTeamPeriod](../../models/operations/createteamperiod.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `frequency`                                                                | [operations.Frequency](../../models/operations/frequency.md)               | :heavy_check_mark:                                                         | N/A                                                                        |
| `discount`                                                                 | [operations.Discount](../../models/operations/discount.md)                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `items`                                                                    | [operations.CreateTeamItems](../../models/operations/createteamitems.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |