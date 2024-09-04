# AnalyticsUsage

## Example Usage

```typescript
import { AnalyticsUsage } from "@vercel/sdk/models/components";

let value: AnalyticsUsage = {
    price: 209.5,
    batch: 6985.58,
    threshold: 4116.15,
    hidden: false,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `matrix`                                               | [components.Matrix](../../models/components/matrix.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `tier`                                                 | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `price`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `batch`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `threshold`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `hidden`                                               | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `disabledAt`                                           | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `enabledAt`                                            | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |