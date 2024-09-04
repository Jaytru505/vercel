/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type RenameSecretRequestBody = {
    /**
     * The name of the new secret.
     */
    name: string;
};

export type RenameSecretRequest = {
    /**
     * The name of the secret.
     */
    name: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: RenameSecretRequestBody | undefined;
};

export type RenameSecretResponseBody = {
    uid: string;
    name: string;
    created: Date;
    oldName: string;
};

/** @internal */
export const RenameSecretRequestBody$inboundSchema: z.ZodType<
    RenameSecretRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
});

/** @internal */
export type RenameSecretRequestBody$Outbound = {
    name: string;
};

/** @internal */
export const RenameSecretRequestBody$outboundSchema: z.ZodType<
    RenameSecretRequestBody$Outbound,
    z.ZodTypeDef,
    RenameSecretRequestBody
> = z.object({
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RenameSecretRequestBody$ {
    /** @deprecated use `RenameSecretRequestBody$inboundSchema` instead. */
    export const inboundSchema = RenameSecretRequestBody$inboundSchema;
    /** @deprecated use `RenameSecretRequestBody$outboundSchema` instead. */
    export const outboundSchema = RenameSecretRequestBody$outboundSchema;
    /** @deprecated use `RenameSecretRequestBody$Outbound` instead. */
    export type Outbound = RenameSecretRequestBody$Outbound;
}

/** @internal */
export const RenameSecretRequest$inboundSchema: z.ZodType<
    RenameSecretRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        RequestBody: z.lazy(() => RenameSecretRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type RenameSecretRequest$Outbound = {
    name: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: RenameSecretRequestBody$Outbound | undefined;
};

/** @internal */
export const RenameSecretRequest$outboundSchema: z.ZodType<
    RenameSecretRequest$Outbound,
    z.ZodTypeDef,
    RenameSecretRequest
> = z
    .object({
        name: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        requestBody: z.lazy(() => RenameSecretRequestBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RenameSecretRequest$ {
    /** @deprecated use `RenameSecretRequest$inboundSchema` instead. */
    export const inboundSchema = RenameSecretRequest$inboundSchema;
    /** @deprecated use `RenameSecretRequest$outboundSchema` instead. */
    export const outboundSchema = RenameSecretRequest$outboundSchema;
    /** @deprecated use `RenameSecretRequest$Outbound` instead. */
    export type Outbound = RenameSecretRequest$Outbound;
}

/** @internal */
export const RenameSecretResponseBody$inboundSchema: z.ZodType<
    RenameSecretResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    uid: z.string(),
    name: z.string(),
    created: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    oldName: z.string(),
});

/** @internal */
export type RenameSecretResponseBody$Outbound = {
    uid: string;
    name: string;
    created: string;
    oldName: string;
};

/** @internal */
export const RenameSecretResponseBody$outboundSchema: z.ZodType<
    RenameSecretResponseBody$Outbound,
    z.ZodTypeDef,
    RenameSecretResponseBody
> = z.object({
    uid: z.string(),
    name: z.string(),
    created: z.date().transform((v) => v.toISOString()),
    oldName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RenameSecretResponseBody$ {
    /** @deprecated use `RenameSecretResponseBody$inboundSchema` instead. */
    export const inboundSchema = RenameSecretResponseBody$inboundSchema;
    /** @deprecated use `RenameSecretResponseBody$outboundSchema` instead. */
    export const outboundSchema = RenameSecretResponseBody$outboundSchema;
    /** @deprecated use `RenameSecretResponseBody$Outbound` instead. */
    export type Outbound = RenameSecretResponseBody$Outbound;
}
