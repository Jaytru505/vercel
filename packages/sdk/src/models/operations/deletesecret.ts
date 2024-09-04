/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteSecretRequest = {
    /**
     * The name or the unique identifier to which the secret belongs to.
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type DeleteSecretResponseBody = {
    /**
     * The unique identifier of the deleted secret.
     */
    uid: string;
    /**
     * The name of the deleted secret.
     */
    name: string;
    /**
     * The date when the secret was created.
     */
    created: number;
};

/** @internal */
export const DeleteSecretRequest$inboundSchema: z.ZodType<
    DeleteSecretRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    idOrName: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type DeleteSecretRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const DeleteSecretRequest$outboundSchema: z.ZodType<
    DeleteSecretRequest$Outbound,
    z.ZodTypeDef,
    DeleteSecretRequest
> = z.object({
    idOrName: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSecretRequest$ {
    /** @deprecated use `DeleteSecretRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteSecretRequest$inboundSchema;
    /** @deprecated use `DeleteSecretRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteSecretRequest$outboundSchema;
    /** @deprecated use `DeleteSecretRequest$Outbound` instead. */
    export type Outbound = DeleteSecretRequest$Outbound;
}

/** @internal */
export const DeleteSecretResponseBody$inboundSchema: z.ZodType<
    DeleteSecretResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    uid: z.string(),
    name: z.string(),
    created: z.number(),
});

/** @internal */
export type DeleteSecretResponseBody$Outbound = {
    uid: string;
    name: string;
    created: number;
};

/** @internal */
export const DeleteSecretResponseBody$outboundSchema: z.ZodType<
    DeleteSecretResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteSecretResponseBody
> = z.object({
    uid: z.string(),
    name: z.string(),
    created: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSecretResponseBody$ {
    /** @deprecated use `DeleteSecretResponseBody$inboundSchema` instead. */
    export const inboundSchema = DeleteSecretResponseBody$inboundSchema;
    /** @deprecated use `DeleteSecretResponseBody$outboundSchema` instead. */
    export const outboundSchema = DeleteSecretResponseBody$outboundSchema;
    /** @deprecated use `DeleteSecretResponseBody$Outbound` instead. */
    export type Outbound = DeleteSecretResponseBody$Outbound;
}
