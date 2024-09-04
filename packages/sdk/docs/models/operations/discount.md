# Discount

## Example Usage

```typescript
import { Discount } from "@vercel/sdk/models/operations";

let value: Discount = {
    id: "<id>",
    coupon: {
        id: "<id>",
        name: "<value>",
        amountOff: 8200.23,
        percentageOff: 2514.64,
        durationInMonths: 2981.87,
        duration: "once",
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `coupon`                                               | [operations.Coupon](../../models/operations/coupon.md) | :heavy_check_mark:                                     | N/A                                                    |