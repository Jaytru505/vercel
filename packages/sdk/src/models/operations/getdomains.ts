/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetDomainsRequest = {
    /**
     * Maximum number of domains to list from a request.
     */
    limit?: number | undefined;
    /**
     * Get domains created after this JavaScript timestamp.
     */
    since?: number | undefined;
    /**
     * Get domains created before this JavaScript timestamp.
     */
    until?: number | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

/**
 * An object containing information of the domain creator, including the user's id, username, and email.
 */
export type GetDomainsCreator = {
    username: string;
    email: string;
    customerId?: string | null | undefined;
    isDomainReseller?: boolean | undefined;
    id: string;
};

/**
 * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
 */
export const GetDomainsServiceType = {
    ZeitWorld: "zeit.world",
    External: "external",
    Na: "na",
} as const;
/**
 * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
 */
export type GetDomainsServiceType = ClosedEnum<typeof GetDomainsServiceType>;

export type Domains = {
    /**
     * If the domain has the ownership verified.
     */
    verified: boolean;
    /**
     * A list of the current nameservers of the domain.
     */
    nameservers: Array<string>;
    /**
     * A list of the intended nameservers for the domain to point to Vercel DNS.
     */
    intendedNameservers: Array<string>;
    /**
     * A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.
     */
    customNameservers?: Array<string> | undefined;
    /**
     * An object containing information of the domain creator, including the user's id, username, and email.
     */
    creator: GetDomainsCreator;
    teamId: string | null;
    /**
     * Timestamp in milliseconds when the domain was created in the registry.
     */
    createdAt: number;
    /**
     * If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.
     */
    boughtAt: number | null;
    /**
     * Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.
     */
    expiresAt: number | null;
    /**
     * The unique identifier of the domain.
     */
    id: string;
    /**
     * The domain name.
     */
    name: string;
    /**
     * Timestamp in milliseconds at which the domain was ordered.
     */
    orderedAt?: number | undefined;
    /**
     * Indicates whether the domain is set to automatically renew.
     */
    renew?: boolean | undefined;
    /**
     * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
     */
    serviceType: GetDomainsServiceType;
    /**
     * Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.
     */
    transferredAt?: number | null | undefined;
    /**
     * If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.
     */
    transferStartedAt?: number | undefined;
    userId: string;
};

/**
 * Successful response retrieving a list of domains.
 */
export type GetDomainsResponseBody = {
    domains: Array<Domains>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: components.Pagination;
};

export type GetDomainsResponse = {
    result: GetDomainsResponseBody;
};

/** @internal */
export const GetDomainsRequest$inboundSchema: z.ZodType<GetDomainsRequest, z.ZodTypeDef, unknown> =
    z.object({
        limit: z.number().optional(),
        since: z.number().optional(),
        until: z.number().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

/** @internal */
export type GetDomainsRequest$Outbound = {
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetDomainsRequest$outboundSchema: z.ZodType<
    GetDomainsRequest$Outbound,
    z.ZodTypeDef,
    GetDomainsRequest
> = z.object({
    limit: z.number().optional(),
    since: z.number().optional(),
    until: z.number().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDomainsRequest$ {
    /** @deprecated use `GetDomainsRequest$inboundSchema` instead. */
    export const inboundSchema = GetDomainsRequest$inboundSchema;
    /** @deprecated use `GetDomainsRequest$outboundSchema` instead. */
    export const outboundSchema = GetDomainsRequest$outboundSchema;
    /** @deprecated use `GetDomainsRequest$Outbound` instead. */
    export type Outbound = GetDomainsRequest$Outbound;
}

/** @internal */
export const GetDomainsCreator$inboundSchema: z.ZodType<GetDomainsCreator, z.ZodTypeDef, unknown> =
    z.object({
        username: z.string(),
        email: z.string(),
        customerId: z.nullable(z.string()).optional(),
        isDomainReseller: z.boolean().optional(),
        id: z.string(),
    });

/** @internal */
export type GetDomainsCreator$Outbound = {
    username: string;
    email: string;
    customerId?: string | null | undefined;
    isDomainReseller?: boolean | undefined;
    id: string;
};

/** @internal */
export const GetDomainsCreator$outboundSchema: z.ZodType<
    GetDomainsCreator$Outbound,
    z.ZodTypeDef,
    GetDomainsCreator
> = z.object({
    username: z.string(),
    email: z.string(),
    customerId: z.nullable(z.string()).optional(),
    isDomainReseller: z.boolean().optional(),
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDomainsCreator$ {
    /** @deprecated use `GetDomainsCreator$inboundSchema` instead. */
    export const inboundSchema = GetDomainsCreator$inboundSchema;
    /** @deprecated use `GetDomainsCreator$outboundSchema` instead. */
    export const outboundSchema = GetDomainsCreator$outboundSchema;
    /** @deprecated use `GetDomainsCreator$Outbound` instead. */
    export type Outbound = GetDomainsCreator$Outbound;
}

/** @internal */
export const GetDomainsServiceType$inboundSchema: z.ZodNativeEnum<typeof GetDomainsServiceType> =
    z.nativeEnum(GetDomainsServiceType);

/** @internal */
export const GetDomainsServiceType$outboundSchema: z.ZodNativeEnum<typeof GetDomainsServiceType> =
    GetDomainsServiceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDomainsServiceType$ {
    /** @deprecated use `GetDomainsServiceType$inboundSchema` instead. */
    export const inboundSchema = GetDomainsServiceType$inboundSchema;
    /** @deprecated use `GetDomainsServiceType$outboundSchema` instead. */
    export const outboundSchema = GetDomainsServiceType$outboundSchema;
}

/** @internal */
export const Domains$inboundSchema: z.ZodType<Domains, z.ZodTypeDef, unknown> = z.object({
    verified: z.boolean(),
    nameservers: z.array(z.string()),
    intendedNameservers: z.array(z.string()),
    customNameservers: z.array(z.string()).optional(),
    creator: z.lazy(() => GetDomainsCreator$inboundSchema),
    teamId: z.nullable(z.string()),
    createdAt: z.number(),
    boughtAt: z.nullable(z.number()),
    expiresAt: z.nullable(z.number()),
    id: z.string(),
    name: z.string(),
    orderedAt: z.number().optional(),
    renew: z.boolean().optional(),
    serviceType: GetDomainsServiceType$inboundSchema,
    transferredAt: z.nullable(z.number()).optional(),
    transferStartedAt: z.number().optional(),
    userId: z.string(),
});

/** @internal */
export type Domains$Outbound = {
    verified: boolean;
    nameservers: Array<string>;
    intendedNameservers: Array<string>;
    customNameservers?: Array<string> | undefined;
    creator: GetDomainsCreator$Outbound;
    teamId: string | null;
    createdAt: number;
    boughtAt: number | null;
    expiresAt: number | null;
    id: string;
    name: string;
    orderedAt?: number | undefined;
    renew?: boolean | undefined;
    serviceType: string;
    transferredAt?: number | null | undefined;
    transferStartedAt?: number | undefined;
    userId: string;
};

/** @internal */
export const Domains$outboundSchema: z.ZodType<Domains$Outbound, z.ZodTypeDef, Domains> = z.object({
    verified: z.boolean(),
    nameservers: z.array(z.string()),
    intendedNameservers: z.array(z.string()),
    customNameservers: z.array(z.string()).optional(),
    creator: z.lazy(() => GetDomainsCreator$outboundSchema),
    teamId: z.nullable(z.string()),
    createdAt: z.number(),
    boughtAt: z.nullable(z.number()),
    expiresAt: z.nullable(z.number()),
    id: z.string(),
    name: z.string(),
    orderedAt: z.number().optional(),
    renew: z.boolean().optional(),
    serviceType: GetDomainsServiceType$outboundSchema,
    transferredAt: z.nullable(z.number()).optional(),
    transferStartedAt: z.number().optional(),
    userId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Domains$ {
    /** @deprecated use `Domains$inboundSchema` instead. */
    export const inboundSchema = Domains$inboundSchema;
    /** @deprecated use `Domains$outboundSchema` instead. */
    export const outboundSchema = Domains$outboundSchema;
    /** @deprecated use `Domains$Outbound` instead. */
    export type Outbound = Domains$Outbound;
}

/** @internal */
export const GetDomainsResponseBody$inboundSchema: z.ZodType<
    GetDomainsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    domains: z.array(z.lazy(() => Domains$inboundSchema)),
    pagination: components.Pagination$inboundSchema,
});

/** @internal */
export type GetDomainsResponseBody$Outbound = {
    domains: Array<Domains$Outbound>;
    pagination: components.Pagination$Outbound;
};

/** @internal */
export const GetDomainsResponseBody$outboundSchema: z.ZodType<
    GetDomainsResponseBody$Outbound,
    z.ZodTypeDef,
    GetDomainsResponseBody
> = z.object({
    domains: z.array(z.lazy(() => Domains$outboundSchema)),
    pagination: components.Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDomainsResponseBody$ {
    /** @deprecated use `GetDomainsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetDomainsResponseBody$inboundSchema;
    /** @deprecated use `GetDomainsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetDomainsResponseBody$outboundSchema;
    /** @deprecated use `GetDomainsResponseBody$Outbound` instead. */
    export type Outbound = GetDomainsResponseBody$Outbound;
}

/** @internal */
export const GetDomainsResponse$inboundSchema: z.ZodType<
    GetDomainsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.lazy(() => GetDomainsResponseBody$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type GetDomainsResponse$Outbound = {
    Result: GetDomainsResponseBody$Outbound;
};

/** @internal */
export const GetDomainsResponse$outboundSchema: z.ZodType<
    GetDomainsResponse$Outbound,
    z.ZodTypeDef,
    GetDomainsResponse
> = z
    .object({
        result: z.lazy(() => GetDomainsResponseBody$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDomainsResponse$ {
    /** @deprecated use `GetDomainsResponse$inboundSchema` instead. */
    export const inboundSchema = GetDomainsResponse$inboundSchema;
    /** @deprecated use `GetDomainsResponse$outboundSchema` instead. */
    export const outboundSchema = GetDomainsResponse$outboundSchema;
    /** @deprecated use `GetDomainsResponse$Outbound` instead. */
    export type Outbound = GetDomainsResponse$Outbound;
}
